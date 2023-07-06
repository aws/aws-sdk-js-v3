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

import {
  StartAssetBundleImportJobRequest,
  StartAssetBundleImportJobRequestFilterSensitiveLog,
  StartAssetBundleImportJobResponse,
} from "../models/models_3";
import { de_StartAssetBundleImportJobCommand, se_StartAssetBundleImportJobCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartAssetBundleImportJobCommand}.
 */
export interface StartAssetBundleImportJobCommandInput extends StartAssetBundleImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartAssetBundleImportJobCommand}.
 */
export interface StartAssetBundleImportJobCommandOutput extends StartAssetBundleImportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts an Asset Bundle import job.</p>
 *          <p>An Asset Bundle import job imports specified Amazon QuickSight assets into an Amazon QuickSight account. You can also choose to import a naming prefix and specified configuration overrides. The assets that are contained in the bundle file that you provide are used to create or update a new or existing asset in your Amazon QuickSight account. Each Amazon QuickSight account can run up to 5 import jobs concurrently.</p>
 *          <p>The API caller must have the necessary <code>"create"</code>, <code>"describe"</code>, and <code>"update"</code> permissions in their IAM role to access each resource type that is contained in the bundle file before the resources can be imported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, StartAssetBundleImportJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, StartAssetBundleImportJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // StartAssetBundleImportJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssetBundleImportJobId: "STRING_VALUE", // required
 *   AssetBundleImportSource: { // AssetBundleImportSource
 *     Body: "BLOB_VALUE",
 *     S3Uri: "STRING_VALUE",
 *   },
 *   OverrideParameters: { // AssetBundleImportJobOverrideParameters
 *     ResourceIdOverrideConfiguration: { // AssetBundleImportJobResourceIdOverrideConfiguration
 *       PrefixForAllResources: "STRING_VALUE",
 *     },
 *     VPCConnections: [ // AssetBundleImportJobVPCConnectionOverrideParametersList
 *       { // AssetBundleImportJobVPCConnectionOverrideParameters
 *         VPCConnectionId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *         SubnetIds: [ // SubnetIdList
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // SecurityGroupIdList
 *           "STRING_VALUE",
 *         ],
 *         DnsResolvers: [ // DnsResolverList
 *           "STRING_VALUE",
 *         ],
 *         RoleArn: "STRING_VALUE",
 *       },
 *     ],
 *     RefreshSchedules: [ // AssetBundleImportJobRefreshScheduleOverrideParametersList
 *       { // AssetBundleImportJobRefreshScheduleOverrideParameters
 *         DataSetId: "STRING_VALUE", // required
 *         ScheduleId: "STRING_VALUE", // required
 *         StartAfterDateTime: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     DataSources: [ // AssetBundleImportJobDataSourceOverrideParametersList
 *       { // AssetBundleImportJobDataSourceOverrideParameters
 *         DataSourceId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *         DataSourceParameters: { // DataSourceParameters Union: only one key present
 *           AmazonElasticsearchParameters: { // AmazonElasticsearchParameters
 *             Domain: "STRING_VALUE", // required
 *           },
 *           AthenaParameters: { // AthenaParameters
 *             WorkGroup: "STRING_VALUE",
 *             RoleArn: "STRING_VALUE",
 *           },
 *           AuroraParameters: { // AuroraParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           AuroraPostgreSqlParameters: { // AuroraPostgreSqlParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           AwsIotAnalyticsParameters: { // AwsIotAnalyticsParameters
 *             DataSetName: "STRING_VALUE", // required
 *           },
 *           JiraParameters: { // JiraParameters
 *             SiteBaseUrl: "STRING_VALUE", // required
 *           },
 *           MariaDbParameters: { // MariaDbParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           MySqlParameters: { // MySqlParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           OracleParameters: { // OracleParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           PostgreSqlParameters: { // PostgreSqlParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           PrestoParameters: { // PrestoParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Catalog: "STRING_VALUE", // required
 *           },
 *           RdsParameters: { // RdsParameters
 *             InstanceId: "STRING_VALUE", // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           RedshiftParameters: { // RedshiftParameters
 *             Host: "STRING_VALUE",
 *             Port: Number("int"),
 *             Database: "STRING_VALUE", // required
 *             ClusterId: "STRING_VALUE",
 *           },
 *           S3Parameters: { // S3Parameters
 *             ManifestFileLocation: { // ManifestFileLocation
 *               Bucket: "STRING_VALUE", // required
 *               Key: "STRING_VALUE", // required
 *             },
 *             RoleArn: "STRING_VALUE",
 *           },
 *           ServiceNowParameters: { // ServiceNowParameters
 *             SiteBaseUrl: "STRING_VALUE", // required
 *           },
 *           SnowflakeParameters: { // SnowflakeParameters
 *             Host: "STRING_VALUE", // required
 *             Database: "STRING_VALUE", // required
 *             Warehouse: "STRING_VALUE", // required
 *           },
 *           SparkParameters: { // SparkParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *           },
 *           SqlServerParameters: { // SqlServerParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           TeradataParameters: { // TeradataParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           TwitterParameters: { // TwitterParameters
 *             Query: "STRING_VALUE", // required
 *             MaxRows: Number("int"), // required
 *           },
 *           AmazonOpenSearchParameters: { // AmazonOpenSearchParameters
 *             Domain: "STRING_VALUE", // required
 *           },
 *           ExasolParameters: { // ExasolParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *           },
 *           DatabricksParameters: { // DatabricksParameters
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             SqlEndpointPath: "STRING_VALUE", // required
 *           },
 *         },
 *         VpcConnectionProperties: { // VpcConnectionProperties
 *           VpcConnectionArn: "STRING_VALUE", // required
 *         },
 *         SslProperties: { // SslProperties
 *           DisableSsl: true || false,
 *         },
 *         Credentials: { // AssetBundleImportJobDataSourceCredentials
 *           CredentialPair: { // AssetBundleImportJobDataSourceCredentialPair
 *             Username: "STRING_VALUE", // required
 *             Password: "STRING_VALUE", // required
 *           },
 *           SecretArn: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     DataSets: [ // AssetBundleImportJobDataSetOverrideParametersList
 *       { // AssetBundleImportJobDataSetOverrideParameters
 *         DataSetId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *       },
 *     ],
 *     Themes: [ // AssetBundleImportJobThemeOverrideParametersList
 *       { // AssetBundleImportJobThemeOverrideParameters
 *         ThemeId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *       },
 *     ],
 *     Analyses: [ // AssetBundleImportJobAnalysisOverrideParametersList
 *       { // AssetBundleImportJobAnalysisOverrideParameters
 *         AnalysisId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *       },
 *     ],
 *     Dashboards: [ // AssetBundleImportJobDashboardOverrideParametersList
 *       { // AssetBundleImportJobDashboardOverrideParameters
 *         DashboardId: "STRING_VALUE", // required
 *         Name: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   FailureAction: "DO_NOTHING" || "ROLLBACK",
 * };
 * const command = new StartAssetBundleImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartAssetBundleImportJobResponse
 * //   Arn: "STRING_VALUE",
 * //   AssetBundleImportJobId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param StartAssetBundleImportJobCommandInput - {@link StartAssetBundleImportJobCommandInput}
 * @returns {@link StartAssetBundleImportJobCommandOutput}
 * @see {@link StartAssetBundleImportJobCommandInput} for command's `input` shape.
 * @see {@link StartAssetBundleImportJobCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
export class StartAssetBundleImportJobCommand extends $Command<
  StartAssetBundleImportJobCommandInput,
  StartAssetBundleImportJobCommandOutput,
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
  constructor(readonly input: StartAssetBundleImportJobCommandInput) {
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
  ): Handler<StartAssetBundleImportJobCommandInput, StartAssetBundleImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAssetBundleImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "StartAssetBundleImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAssetBundleImportJobRequestFilterSensitiveLog,
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
  private serialize(input: StartAssetBundleImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartAssetBundleImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartAssetBundleImportJobCommandOutput> {
    return de_StartAssetBundleImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
