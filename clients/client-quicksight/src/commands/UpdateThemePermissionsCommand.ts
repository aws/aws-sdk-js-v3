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

import { UpdateThemePermissionsRequest, UpdateThemePermissionsResponse } from "../models/models_4";
import { de_UpdateThemePermissionsCommand, se_UpdateThemePermissionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateThemePermissionsCommand}.
 */
export interface UpdateThemePermissionsCommandInput extends UpdateThemePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThemePermissionsCommand}.
 */
export interface UpdateThemePermissionsCommandOutput extends UpdateThemePermissionsResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // UpdateThemePermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 *   GrantPermissions: [ // UpdateResourcePermissionList
 *     { // ResourcePermission
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // ActionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   RevokePermissions: [
 *     {
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateThemePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThemePermissionsResponse
 * //   ThemeId: "STRING_VALUE",
 * //   ThemeArn: "STRING_VALUE",
 * //   Permissions: [ // ResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateThemePermissionsCommandInput - {@link UpdateThemePermissionsCommandInput}
 * @returns {@link UpdateThemePermissionsCommandOutput}
 * @see {@link UpdateThemePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateThemePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
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

  /**
   * @public
   */
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
  private serialize(input: UpdateThemePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateThemePermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateThemePermissionsCommandOutput> {
    return de_UpdateThemePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
