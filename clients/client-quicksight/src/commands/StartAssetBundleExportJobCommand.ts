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

import { StartAssetBundleExportJobRequest, StartAssetBundleExportJobResponse } from "../models/models_4";
import { de_StartAssetBundleExportJobCommand, se_StartAssetBundleExportJobCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartAssetBundleExportJobCommand}.
 */
export interface StartAssetBundleExportJobCommandInput extends StartAssetBundleExportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartAssetBundleExportJobCommand}.
 */
export interface StartAssetBundleExportJobCommandOutput extends StartAssetBundleExportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts an Asset Bundle export job.</p>
 *          <p>An Asset Bundle export job exports specified Amazon QuickSight assets. You can also choose to export any asset dependencies in the same job. Export jobs run asynchronously and can be polled with a <code>DescribeAssetBundleExportJob</code> API call. When a job is successfully completed, a download URL that contains the exported assets is returned. The URL is valid for 5 minutes and can be refreshed with a <code>DescribeAssetBundleExportJob</code> API call. Each Amazon QuickSight account can run up to 5 export jobs concurrently.</p>
 *          <p>The API caller must have the necessary permissions in their IAM role to access each resource before the resources can be exported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, StartAssetBundleExportJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, StartAssetBundleExportJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // StartAssetBundleExportJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssetBundleExportJobId: "STRING_VALUE", // required
 *   ResourceArns: [ // AssetBundleResourceArns // required
 *     "STRING_VALUE",
 *   ],
 *   IncludeAllDependencies: true || false,
 *   ExportFormat: "CLOUDFORMATION_JSON" || "QUICKSIGHT_JSON", // required
 *   CloudFormationOverridePropertyConfiguration: { // AssetBundleCloudFormationOverridePropertyConfiguration
 *     ResourceIdOverrideConfiguration: { // AssetBundleExportJobResourceIdOverrideConfiguration
 *       PrefixForAllResources: true || false,
 *     },
 *     VPCConnections: [ // AssetBundleExportJobVPCConnectionOverridePropertiesList
 *       { // AssetBundleExportJobVPCConnectionOverrideProperties
 *         Arn: "STRING_VALUE",
 *         Properties: [ // AssetBundleExportJobVPCConnectionPropertyToOverrideList // required
 *           "Name" || "DnsResolvers" || "RoleArn",
 *         ],
 *       },
 *     ],
 *     RefreshSchedules: [ // AssetBundleExportJobRefreshScheduleOverridePropertiesList
 *       { // AssetBundleExportJobRefreshScheduleOverrideProperties
 *         Arn: "STRING_VALUE",
 *         Properties: [ // AssetBundleExportJobRefreshSchedulePropertyToOverrideList // required
 *           "StartAfterDateTime",
 *         ],
 *       },
 *     ],
 *     DataSources: [ // AssetBundleExportJobDataSourceOverridePropertiesList
 *       { // AssetBundleExportJobDataSourceOverrideProperties
 *         Arn: "STRING_VALUE",
 *         Properties: [ // AssetBundleExportJobDataSourcePropertyToOverrideList // required
 *           "Name" || "DisableSsl" || "SecretArn" || "Username" || "Password" || "Domain" || "WorkGroup" || "Host" || "Port" || "Database" || "DataSetName" || "Catalog" || "InstanceId" || "ClusterId" || "ManifestFileLocation" || "Warehouse" || "RoleArn",
 *         ],
 *       },
 *     ],
 *     DataSets: [ // AssetBundleExportJobDataSetOverridePropertiesList
 *       { // AssetBundleExportJobDataSetOverrideProperties
 *         Arn: "STRING_VALUE",
 *         Properties: [ // AssetBundleExportJobDataSetPropertyToOverrideList // required
 *           "Name",
 *         ],
 *       },
 *     ],
 *     Themes: [ // AssetBundleExportJobThemeOverridePropertiesList
 *       { // AssetBundleExportJobThemeOverrideProperties
 *         Arn: "STRING_VALUE",
 *         Properties: [ // AssetBundleExportJobThemePropertyToOverrideList // required
 *           "Name",
 *         ],
 *       },
 *     ],
 *     Analyses: [ // AssetBundleExportJobAnalysisOverridePropertiesList
 *       { // AssetBundleExportJobAnalysisOverrideProperties
 *         Arn: "STRING_VALUE",
 *         Properties: [ // AssetBundleExportJobAnalysisPropertyToOverrideList // required
 *           "Name",
 *         ],
 *       },
 *     ],
 *     Dashboards: [ // AssetBundleExportJobDashboardOverridePropertiesList
 *       { // AssetBundleExportJobDashboardOverrideProperties
 *         Arn: "STRING_VALUE",
 *         Properties: [ // AssetBundleExportJobDashboardPropertyToOverrideList // required
 *           "Name",
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new StartAssetBundleExportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartAssetBundleExportJobResponse
 * //   Arn: "STRING_VALUE",
 * //   AssetBundleExportJobId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param StartAssetBundleExportJobCommandInput - {@link StartAssetBundleExportJobCommandInput}
 * @returns {@link StartAssetBundleExportJobCommandOutput}
 * @see {@link StartAssetBundleExportJobCommandInput} for command's `input` shape.
 * @see {@link StartAssetBundleExportJobCommandOutput} for command's `response` shape.
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
export class StartAssetBundleExportJobCommand extends $Command<
  StartAssetBundleExportJobCommandInput,
  StartAssetBundleExportJobCommandOutput,
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
  constructor(readonly input: StartAssetBundleExportJobCommandInput) {
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
  ): Handler<StartAssetBundleExportJobCommandInput, StartAssetBundleExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAssetBundleExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "StartAssetBundleExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "StartAssetBundleExportJob",
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
  private serialize(input: StartAssetBundleExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartAssetBundleExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartAssetBundleExportJobCommandOutput> {
    return de_StartAssetBundleExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
