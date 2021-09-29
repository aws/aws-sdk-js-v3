import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { AddResourcePermissionsRequest, AddResourcePermissionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AddResourcePermissionsCommand,
  serializeAws_restJson1AddResourcePermissionsCommand,
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

export interface AddResourcePermissionsCommandInput extends AddResourcePermissionsRequest {}
export interface AddResourcePermissionsCommandOutput extends AddResourcePermissionsResponse, __MetadataBearer {}

/**
 * <p>Creates a set of permissions for the specified folder or document. The resource
 *             permissions are overwritten if the principals already have different
 *             permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, AddResourcePermissionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, AddResourcePermissionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new AddResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link AddResourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddResourcePermissionsCommand extends $Command<
  AddResourcePermissionsCommandInput,
  AddResourcePermissionsCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddResourcePermissionsCommandInput) {
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
  ): Handler<AddResourcePermissionsCommandInput, AddResourcePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "AddResourcePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddResourcePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddResourcePermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddResourcePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddResourcePermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddResourcePermissionsCommandOutput> {
    return deserializeAws_restJson1AddResourcePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
