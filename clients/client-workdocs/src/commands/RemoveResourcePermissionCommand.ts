import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { RemoveResourcePermissionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1RemoveResourcePermissionCommand,
  serializeAws_restJson1RemoveResourcePermissionCommand,
} from "../protocols/Aws_restJson1";
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

export interface RemoveResourcePermissionCommandInput extends RemoveResourcePermissionRequest {}
export interface RemoveResourcePermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the permission for the specified principal from the specified
 *             resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, RemoveResourcePermissionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, RemoveResourcePermissionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new RemoveResourcePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveResourcePermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveResourcePermissionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveResourcePermissionCommand extends $Command<
  RemoveResourcePermissionCommandInput,
  RemoveResourcePermissionCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveResourcePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveResourcePermissionCommandInput, RemoveResourcePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "RemoveResourcePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveResourcePermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveResourcePermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveResourcePermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveResourcePermissionCommandOutput> {
    return deserializeAws_restJson1RemoveResourcePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
