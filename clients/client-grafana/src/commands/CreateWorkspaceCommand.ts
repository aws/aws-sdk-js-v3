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
  CreateWorkspaceRequest,
  CreateWorkspaceRequestFilterSensitiveLog,
  CreateWorkspaceResponse,
  CreateWorkspaceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateWorkspaceCommand, se_CreateWorkspaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkspaceCommand}.
 */
export interface CreateWorkspaceCommandInput extends CreateWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspaceCommand}.
 */
export interface CreateWorkspaceCommandOutput extends CreateWorkspaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a <i>workspace</i>. In a workspace, you can create Grafana
 *             dashboards and visualizations to analyze your metrics, logs, and traces. You don't have
 *             to build, package, or deploy any hardware to run the Grafana server.</p>
 *          <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead, use
 *                 <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, CreateWorkspaceCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, CreateWorkspaceCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const input = { // CreateWorkspaceRequest
 *   accountAccessType: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   organizationRoleName: "STRING_VALUE",
 *   permissionType: "STRING_VALUE", // required
 *   stackSetName: "STRING_VALUE",
 *   workspaceDataSources: [ // DataSourceTypesList
 *     "STRING_VALUE",
 *   ],
 *   workspaceDescription: "STRING_VALUE",
 *   workspaceName: "STRING_VALUE",
 *   workspaceNotificationDestinations: [ // NotificationDestinationsList
 *     "STRING_VALUE",
 *   ],
 *   workspaceOrganizationalUnits: [ // OrganizationalUnitList
 *     "STRING_VALUE",
 *   ],
 *   workspaceRoleArn: "STRING_VALUE",
 *   authenticationProviders: [ // AuthenticationProviders // required
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   vpcConfiguration: { // VpcConfiguration
 *     securityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     subnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   configuration: "STRING_VALUE",
 *   networkAccessControl: { // NetworkAccessConfiguration
 *     prefixListIds: [ // PrefixListIds // required
 *       "STRING_VALUE",
 *     ],
 *     vpceIds: [ // VpceIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   grafanaVersion: "STRING_VALUE",
 * };
 * const command = new CreateWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspaceResponse
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
 * @param CreateWorkspaceCommandInput - {@link CreateWorkspaceCommandInput}
 * @returns {@link CreateWorkspaceCommandOutput}
 * @see {@link CreateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class CreateWorkspaceCommand extends $Command<
  CreateWorkspaceCommandInput,
  CreateWorkspaceCommandOutput,
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
  constructor(readonly input: CreateWorkspaceCommandInput) {
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
  ): Handler<CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkspaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GrafanaClient";
    const commandName = "CreateWorkspaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkspaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkspaceResponseFilterSensitiveLog,
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
  private serialize(input: CreateWorkspaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWorkspaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkspaceCommandOutput> {
    return de_CreateWorkspaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
