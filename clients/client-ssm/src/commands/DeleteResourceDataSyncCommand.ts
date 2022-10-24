// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DeleteResourceDataSyncRequest,
  DeleteResourceDataSyncRequestFilterSensitiveLog,
  DeleteResourceDataSyncResult,
  DeleteResourceDataSyncResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteResourceDataSyncCommand,
  serializeAws_json1_1DeleteResourceDataSyncCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface DeleteResourceDataSyncCommandInput extends DeleteResourceDataSyncRequest {}
export interface DeleteResourceDataSyncCommandOutput extends DeleteResourceDataSyncResult, __MetadataBearer {}

/**
 * <p>Deletes a resource data sync configuration. After the configuration is deleted, changes to
 *    data on managed nodes are no longer synced to or from the target. Deleting a sync configuration
 *    doesn't delete data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class DeleteResourceDataSyncCommand extends $Command<
  DeleteResourceDataSyncCommandInput,
  DeleteResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: DeleteResourceDataSyncCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteResourceDataSyncCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeleteResourceDataSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResourceDataSyncRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteResourceDataSyncResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResourceDataSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteResourceDataSyncCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResourceDataSyncCommandOutput> {
    return deserializeAws_json1_1DeleteResourceDataSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
