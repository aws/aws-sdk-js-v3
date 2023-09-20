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

import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import {
  DescribeWorkspaceRequest,
  DescribeWorkspaceResponse,
  DescribeWorkspaceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeWorkspaceCommand, se_DescribeWorkspaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceCommand}.
 */
export interface DescribeWorkspaceCommandInput extends DescribeWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceCommand}.
 */
export interface DescribeWorkspaceCommandOutput extends DescribeWorkspaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Displays information about one Amazon Managed Grafana workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DescribeWorkspaceCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DescribeWorkspaceCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const input = { // DescribeWorkspaceRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceResponse
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
 * @param DescribeWorkspaceCommandInput - {@link DescribeWorkspaceCommandInput}
 * @returns {@link DescribeWorkspaceCommandOutput}
 * @see {@link DescribeWorkspaceCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
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
export class DescribeWorkspaceCommand extends $Command<
  DescribeWorkspaceCommandInput,
  DescribeWorkspaceCommandOutput,
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
  constructor(readonly input: DescribeWorkspaceCommandInput) {
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
  ): Handler<DescribeWorkspaceCommandInput, DescribeWorkspaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkspaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GrafanaClient";
    const commandName = "DescribeWorkspaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeWorkspaceResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGrafanaControlPlane",
        operation: "DescribeWorkspace",
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
  private serialize(input: DescribeWorkspaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWorkspaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkspaceCommandOutput> {
    return de_DescribeWorkspaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
