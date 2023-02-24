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
  UpdateThemePermissionsRequest,
  UpdateThemePermissionsRequestFilterSensitiveLog,
  UpdateThemePermissionsResponse,
  UpdateThemePermissionsResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_restJson1UpdateThemePermissionsCommand,
  serializeAws_restJson1UpdateThemePermissionsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface UpdateThemePermissionsCommandInput extends UpdateThemePermissionsRequest {}
export interface UpdateThemePermissionsCommandOutput extends UpdateThemePermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates the resource permissions for a theme. Permissions apply to the action to grant or
 * 			revoke permissions on, for example <code>"quicksight:DescribeTheme"</code>.</p>
 *          <p>Theme permissions apply in groupings. Valid groupings include the following for the three
 * 			levels of permissions, which are user, owner, or no permissions: </p>
 *          <ul>
 *             <li>
 *                <p>User</p>
 *                <ul>
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
 *             </li>
 *             <li>
 *                <p>Owner</p>
 *                <ul>
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
 *             </li>
 *             <li>
 *                <p>To specify no permissions, omit the permissions list.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateThemePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateThemePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateThemePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThemePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateThemePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class UpdateThemePermissionsCommand extends $Command<
  UpdateThemePermissionsCommandInput,
  UpdateThemePermissionsCommandOutput,
  QuickSightClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateThemePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateThemePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateThemePermissionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateThemePermissionsResponseFilterSensitiveLog,
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
