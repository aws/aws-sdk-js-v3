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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteQueryDefinitionRequest, DeleteQueryDefinitionResponse } from "../models/models_0";
import { de_DeleteQueryDefinitionCommand, se_DeleteQueryDefinitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteQueryDefinitionCommand}.
 */
export interface DeleteQueryDefinitionCommandInput extends DeleteQueryDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueryDefinitionCommand}.
 */
export interface DeleteQueryDefinitionCommandOutput extends DeleteQueryDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a saved CloudWatch Logs Insights query definition.
 *       A query definition contains details about a saved CloudWatch Logs Insights query.</p>
 *          <p>Each <code>DeleteQueryDefinition</code> operation can delete one query definition.</p>
 *          <p>You must have the <code>logs:DeleteQueryDefinition</code> permission to be able to perform
 *       this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteQueryDefinitionCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteQueryDefinitionCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteQueryDefinitionRequest
 *   queryDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteQueryDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteQueryDefinitionResponse
 * //   success: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteQueryDefinitionCommandInput - {@link DeleteQueryDefinitionCommandInput}
 * @returns {@link DeleteQueryDefinitionCommandOutput}
 * @see {@link DeleteQueryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteQueryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class DeleteQueryDefinitionCommand extends $Command<
  DeleteQueryDefinitionCommandInput,
  DeleteQueryDefinitionCommandOutput,
  CloudWatchLogsClientResolvedConfig
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
  constructor(readonly input: DeleteQueryDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteQueryDefinitionCommandInput, DeleteQueryDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteQueryDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DeleteQueryDefinitionCommand";
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
  private serialize(input: DeleteQueryDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteQueryDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteQueryDefinitionCommandOutput> {
    return de_DeleteQueryDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
