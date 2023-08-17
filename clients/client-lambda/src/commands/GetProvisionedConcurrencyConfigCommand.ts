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
} from "@smithy/types";

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetProvisionedConcurrencyConfigRequest, GetProvisionedConcurrencyConfigResponse } from "../models/models_0";
import {
  de_GetProvisionedConcurrencyConfigCommand,
  se_GetProvisionedConcurrencyConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetProvisionedConcurrencyConfigCommand}.
 */
export interface GetProvisionedConcurrencyConfigCommandInput extends GetProvisionedConcurrencyConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetProvisionedConcurrencyConfigCommand}.
 */
export interface GetProvisionedConcurrencyConfigCommandOutput
  extends GetProvisionedConcurrencyConfigResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the provisioned concurrency configuration for a function's alias or version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetProvisionedConcurrencyConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // GetProvisionedConcurrencyConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE", // required
 * };
 * const command = new GetProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetProvisionedConcurrencyConfigResponse
 * //   RequestedProvisionedConcurrentExecutions: Number("int"),
 * //   AvailableProvisionedConcurrentExecutions: Number("int"),
 * //   AllocatedProvisionedConcurrentExecutions: Number("int"),
 * //   Status: "IN_PROGRESS" || "READY" || "FAILED",
 * //   StatusReason: "STRING_VALUE",
 * //   LastModified: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProvisionedConcurrencyConfigCommandInput - {@link GetProvisionedConcurrencyConfigCommandInput}
 * @returns {@link GetProvisionedConcurrencyConfigCommandOutput}
 * @see {@link GetProvisionedConcurrencyConfigCommandInput} for command's `input` shape.
 * @see {@link GetProvisionedConcurrencyConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ProvisionedConcurrencyConfigNotFoundException} (client fault)
 *  <p>The specified configuration does not exist.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 */
export class GetProvisionedConcurrencyConfigCommand extends $Command<
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: GetProvisionedConcurrencyConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProvisionedConcurrencyConfigCommandInput, GetProvisionedConcurrencyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProvisionedConcurrencyConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetProvisionedConcurrencyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: GetProvisionedConcurrencyConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetProvisionedConcurrencyConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProvisionedConcurrencyConfigCommandOutput> {
    return de_GetProvisionedConcurrencyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
