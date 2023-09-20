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
import { ListInstanceProfilesForRoleRequest, ListInstanceProfilesForRoleResponse } from "../models/models_0";
import { de_ListInstanceProfilesForRoleCommand, se_ListInstanceProfilesForRoleCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceProfilesForRoleCommand}.
 */
export interface ListInstanceProfilesForRoleCommandInput extends ListInstanceProfilesForRoleRequest {}
/**
 * @public
 *
 * The output of {@link ListInstanceProfilesForRoleCommand}.
 */
export interface ListInstanceProfilesForRoleCommandOutput
  extends ListInstanceProfilesForRoleResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the instance profiles that have the specified associated IAM role. If there
 *             are none, the operation returns an empty list. For more information about instance
 *             profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html">Using
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListInstanceProfilesForRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListInstanceProfilesForRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListInstanceProfilesForRoleRequest
 *   RoleName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListInstanceProfilesForRoleCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceProfilesForRoleResponse
 * //   InstanceProfiles: [ // instanceProfileListType // required
 * //     { // InstanceProfile
 * //       Path: "STRING_VALUE", // required
 * //       InstanceProfileName: "STRING_VALUE", // required
 * //       InstanceProfileId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //       Roles: [ // roleListType // required
 * //         { // Role
 * //           Path: "STRING_VALUE", // required
 * //           RoleName: "STRING_VALUE", // required
 * //           RoleId: "STRING_VALUE", // required
 * //           Arn: "STRING_VALUE", // required
 * //           CreateDate: new Date("TIMESTAMP"), // required
 * //           AssumeRolePolicyDocument: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           MaxSessionDuration: Number("int"),
 * //           PermissionsBoundary: { // AttachedPermissionsBoundary
 * //             PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //             PermissionsBoundaryArn: "STRING_VALUE",
 * //           },
 * //           Tags: [ // tagListType
 * //             { // Tag
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           RoleLastUsed: { // RoleLastUsed
 * //             LastUsedDate: new Date("TIMESTAMP"),
 * //             Region: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Tags: [
 * //         {
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceProfilesForRoleCommandInput - {@link ListInstanceProfilesForRoleCommandInput}
 * @returns {@link ListInstanceProfilesForRoleCommandOutput}
 * @see {@link ListInstanceProfilesForRoleCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfilesForRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
export class ListInstanceProfilesForRoleCommand extends $Command<
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
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
  constructor(readonly input: ListInstanceProfilesForRoleCommandInput) {
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
  ): Handler<ListInstanceProfilesForRoleCommandInput, ListInstanceProfilesForRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceProfilesForRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListInstanceProfilesForRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "ListInstanceProfilesForRole",
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
  private serialize(input: ListInstanceProfilesForRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInstanceProfilesForRoleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListInstanceProfilesForRoleCommandOutput> {
    return de_ListInstanceProfilesForRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
