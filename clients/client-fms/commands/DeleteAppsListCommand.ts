import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { DeleteAppsListRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAppsListCommand,
  serializeAws_json1_1DeleteAppsListCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DeleteAppsListCommandInput extends DeleteAppsListRequest {}
export interface DeleteAppsListCommandOutput extends __MetadataBearer {}

/**
 * <p>Permanently deletes an Firewall Manager applications list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DeleteAppsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DeleteAppsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DeleteAppsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppsListCommandInput} for command's `input` shape.
 * @see {@link DeleteAppsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteAppsListCommand extends $Command<
  DeleteAppsListCommandInput,
  DeleteAppsListCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAppsListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAppsListCommandInput, DeleteAppsListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "DeleteAppsListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAppsListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAppsListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAppsListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAppsListCommandOutput> {
    return deserializeAws_json1_1DeleteAppsListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
