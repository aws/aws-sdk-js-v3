import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateThemePermissionsRequest, UpdateThemePermissionsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateThemePermissionsCommand,
  serializeAws_restJson1UpdateThemePermissionsCommand,
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

export type UpdateThemePermissionsCommandInput = UpdateThemePermissionsRequest;
export type UpdateThemePermissionsCommandOutput = UpdateThemePermissionsResponse & __MetadataBearer;

/**
 * <p>Updates the resource permissions for a theme. Permissions apply to the action to grant or
 * 			revoke permissions on, for example <code>"quicksight:DescribeTheme"</code>.</p>
 * 		       <p>Theme permissions apply in groupings. Valid groupings include the following for the three
 * 			levels of permissions, which are user, owner, or no permissions: </p>
 * 			      <ul>
 *             <li>
 *                <p>User</p>
 * 					          <ul>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DescribeTheme"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DescribeThemeAlias"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:ListThemeAliases"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:ListThemeVersions"</code>
 *                      </p>
 *                   </li>
 *                </ul>
 * 				        </li>
 *             <li>
 *                <p>Owner</p>
 * 					          <ul>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DescribeTheme"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DescribeThemeAlias"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:ListThemeAliases"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:ListThemeVersions"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DeleteTheme"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:UpdateTheme"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:CreateThemeAlias"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DeleteThemeAlias"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:UpdateThemeAlias"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:UpdateThemePermissions"</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"quicksight:DescribeThemePermissions"</code>
 *                      </p>
 *                   </li>
 *                </ul>
 * 				        </li>
 *             <li>
 *                <p>To specify no permissions, omit the permissions list.</p>
 *             </li>
 *          </ul>
 */
export class UpdateThemePermissionsCommand extends $Command<
  UpdateThemePermissionsCommandInput,
  UpdateThemePermissionsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateThemePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateThemePermissionsCommandInput, UpdateThemePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateThemePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateThemePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateThemePermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateThemePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateThemePermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateThemePermissionsCommandOutput> {
    return deserializeAws_restJson1UpdateThemePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
