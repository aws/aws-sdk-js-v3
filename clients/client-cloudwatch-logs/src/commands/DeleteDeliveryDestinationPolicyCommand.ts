// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteDeliveryDestinationPolicyRequest } from "../models/models_0";
import {
  de_DeleteDeliveryDestinationPolicyCommand,
  se_DeleteDeliveryDestinationPolicyCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeliveryDestinationPolicyCommand}.
 */
export interface DeleteDeliveryDestinationPolicyCommandInput extends DeleteDeliveryDestinationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeliveryDestinationPolicyCommand}.
 */
export interface DeleteDeliveryDestinationPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a delivery destination policy. For more information about these policies,
 *         see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html">PutDeliveryDestinationPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteDeliveryDestinationPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteDeliveryDestinationPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteDeliveryDestinationPolicyRequest
 *   deliveryDestinationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeliveryDestinationPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeliveryDestinationPolicyCommandInput - {@link DeleteDeliveryDestinationPolicyCommandInput}
 * @returns {@link DeleteDeliveryDestinationPolicyCommandOutput}
 * @see {@link DeleteDeliveryDestinationPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliveryDestinationPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class DeleteDeliveryDestinationPolicyCommand extends $Command<
  DeleteDeliveryDestinationPolicyCommandInput,
  DeleteDeliveryDestinationPolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteDeliveryDestinationPolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeliveryDestinationPolicyCommandInput, DeleteDeliveryDestinationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDeliveryDestinationPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DeleteDeliveryDestinationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "DeleteDeliveryDestinationPolicy",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DeleteDeliveryDestinationPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteDeliveryDestinationPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDeliveryDestinationPolicyCommandOutput> {
    return de_DeleteDeliveryDestinationPolicyCommand(output, context);
  }
}
