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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListEntitiesForPolicyRequest, ListEntitiesForPolicyResponse } from "../models/models_0";
import { de_ListEntitiesForPolicyCommand, se_ListEntitiesForPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEntitiesForPolicyCommand}.
 */
export interface ListEntitiesForPolicyCommandInput extends ListEntitiesForPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ListEntitiesForPolicyCommand}.
 */
export interface ListEntitiesForPolicyCommandOutput extends ListEntitiesForPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all IAM users, groups, and roles that the specified managed policy is attached
 *             to.</p>
 *          <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a
 *             particular type of entity (users, groups, or roles). For example, to list only the roles
 *             that are attached to the specified policy, set <code>EntityFilter</code> to
 *                 <code>Role</code>.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListEntitiesForPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListEntitiesForPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListEntitiesForPolicyRequest
 *   PolicyArn: "STRING_VALUE", // required
 *   EntityFilter: "User" || "Role" || "Group" || "LocalManagedPolicy" || "AWSManagedPolicy",
 *   PathPrefix: "STRING_VALUE",
 *   PolicyUsageFilter: "PermissionsPolicy" || "PermissionsBoundary",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListEntitiesForPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ListEntitiesForPolicyResponse
 * //   PolicyGroups: [ // PolicyGroupListType
 * //     { // PolicyGroup
 * //       GroupName: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PolicyUsers: [ // PolicyUserListType
 * //     { // PolicyUser
 * //       UserName: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PolicyRoles: [ // PolicyRoleListType
 * //     { // PolicyRole
 * //       RoleName: "STRING_VALUE",
 * //       RoleId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntitiesForPolicyCommandInput - {@link ListEntitiesForPolicyCommandInput}
 * @returns {@link ListEntitiesForPolicyCommandOutput}
 * @see {@link ListEntitiesForPolicyCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesForPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class ListEntitiesForPolicyCommand extends $Command<
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: ListEntitiesForPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEntitiesForPolicyCommandInput, ListEntitiesForPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEntitiesForPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListEntitiesForPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "ListEntitiesForPolicy",
      },
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
  private serialize(input: ListEntitiesForPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEntitiesForPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEntitiesForPolicyCommandOutput> {
    return de_ListEntitiesForPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
