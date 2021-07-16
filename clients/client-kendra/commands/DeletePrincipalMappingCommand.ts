import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DeletePrincipalMappingRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeletePrincipalMappingCommand,
  serializeAws_json1_1DeletePrincipalMappingCommand,
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

export interface DeletePrincipalMappingCommandInput extends DeletePrincipalMappingRequest {}
export interface DeletePrincipalMappingCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a group so that all users and sub groups that belong to the group can
 *             no longer access documents only available to that group.</p>
 *         <p>For example, after deleting the group "Summer Interns", all interns who
 *             belonged to that group no longer see intern-only documents in their search
 *             results.</p>
 *         <p>If you want to delete or replace users or sub groups of a group, you need to
 *             use the <code>PutPrincipalMapping</code> operation. For example, if a user in
 *             the group "Engineering" leaves the engineering team and another user takes
 *             their place, you provide an updated list of users or sub groups that belong
 *             to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You
 *             can update your internal list of users or sub groups and input this list
 *             when calling <code>PutPrincipalMapping</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeletePrincipalMappingCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeletePrincipalMappingCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DeletePrincipalMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePrincipalMappingCommandInput} for command's `input` shape.
 * @see {@link DeletePrincipalMappingCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeletePrincipalMappingCommand extends $Command<
  DeletePrincipalMappingCommandInput,
  DeletePrincipalMappingCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePrincipalMappingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePrincipalMappingCommandInput, DeletePrincipalMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "DeletePrincipalMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePrincipalMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePrincipalMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePrincipalMappingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePrincipalMappingCommandOutput> {
    return deserializeAws_json1_1DeletePrincipalMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
