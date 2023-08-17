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

import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import {
  UpdateWorkspaceRequest,
  UpdateWorkspaceRequestFilterSensitiveLog,
  UpdateWorkspaceResponse,
  UpdateWorkspaceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateWorkspaceCommand, se_UpdateWorkspaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceCommand}.
 */
export interface UpdateWorkspaceCommandInput extends UpdateWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceCommand}.
 */
export interface UpdateWorkspaceCommandOutput extends UpdateWorkspaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit
 *             any optional parameters, the existing values of those parameters are not changed.</p>
 *          <p>To modify the user authentication methods that the workspace uses, such as SAML or
 *                 IAM Identity Center, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p>
 *          <p>To modify which users in the workspace have the <code>Admin</code> and
 *                 <code>Editor</code> Grafana roles, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, UpdateWorkspaceCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, UpdateWorkspaceCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const input = { // UpdateWorkspaceRequest
 *   accountAccessType: "STRING_VALUE",
 *   organizationRoleName: "STRING_VALUE",
 *   permissionType: "STRING_VALUE",
 *   stackSetName: "STRING_VALUE",
 *   workspaceDataSources: [ // DataSourceTypesList
 *     "STRING_VALUE",
 *   ],
 *   workspaceDescription: "STRING_VALUE",
 *   workspaceId: "STRING_VALUE", // required
 *   workspaceName: "STRING_VALUE",
 *   workspaceNotificationDestinations: [ // NotificationDestinationsList
 *     "STRING_VALUE",
 *   ],
 *   workspaceOrganizationalUnits: [ // OrganizationalUnitList
 *     "STRING_VALUE",
 *   ],
 *   workspaceRoleArn: "STRING_VALUE",
 *   vpcConfiguration: { // VpcConfiguration
 *     securityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     subnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   removeVpcConfiguration: true || false,
 *   networkAccessControl: { // NetworkAccessConfiguration
 *     prefixListIds: [ // PrefixListIds // required
 *       "STRING_VALUE",
 *     ],
 *     vpceIds: [ // VpceIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   removeNetworkAccessConfiguration: true || false,
 * };
 * const command = new UpdateWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkspaceResponse
 * //   workspace: { // WorkspaceDescription
 * //     accountAccessType: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"), // required
 * //     dataSources: [ // DataSourceTypesList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     description: "STRING_VALUE",
 * //     endpoint: "STRING_VALUE", // required
 * //     grafanaVersion: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     modified: new Date("TIMESTAMP"), // required
 * //     name: "STRING_VALUE",
 * //     organizationRoleName: "STRING_VALUE",
 * //     notificationDestinations: [ // NotificationDestinationsList
 * //       "STRING_VALUE",
 * //     ],
 * //     organizationalUnits: [ // OrganizationalUnitList
 * //       "STRING_VALUE",
 * //     ],
 * //     permissionType: "STRING_VALUE",
 * //     stackSetName: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     workspaceRoleArn: "STRING_VALUE",
 * //     licenseType: "STRING_VALUE",
 * //     freeTrialConsumed: true || false,
 * //     licenseExpiration: new Date("TIMESTAMP"),
 * //     freeTrialExpiration: new Date("TIMESTAMP"),
 * //     authentication: { // AuthenticationSummary
 * //       providers: [ // AuthenticationProviders // required
 * //         "STRING_VALUE",
 * //       ],
 * //       samlConfigurationStatus: "STRING_VALUE",
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     vpcConfiguration: { // VpcConfiguration
 * //       securityGroupIds: [ // SecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // SubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     networkAccessControl: { // NetworkAccessConfiguration
 * //       prefixListIds: [ // PrefixListIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       vpceIds: [ // VpceIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkspaceCommandInput - {@link UpdateWorkspaceCommandInput}
 * @returns {@link UpdateWorkspaceCommandOutput}
 * @see {@link UpdateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link GrafanaServiceException}
 * <p>Base exception class for all service exceptions from Grafana service.</p>
 *
 */
export class UpdateWorkspaceCommand extends $Command<
  UpdateWorkspaceCommandInput,
  UpdateWorkspaceCommandOutput,
  GrafanaClientResolvedConfig
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
  constructor(readonly input: UpdateWorkspaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GrafanaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkspaceCommandInput, UpdateWorkspaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkspaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GrafanaClient";
    const commandName = "UpdateWorkspaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWorkspaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateWorkspaceResponseFilterSensitiveLog,
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
  private serialize(input: UpdateWorkspaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateWorkspaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkspaceCommandOutput> {
    return de_UpdateWorkspaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
