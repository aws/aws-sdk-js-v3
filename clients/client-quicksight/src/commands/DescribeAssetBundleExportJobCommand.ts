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

import { DescribeAssetBundleExportJobRequest, DescribeAssetBundleExportJobResponse } from "../models/models_3";
import {
  de_DescribeAssetBundleExportJobCommand,
  se_DescribeAssetBundleExportJobCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssetBundleExportJobCommand}.
 */
export interface DescribeAssetBundleExportJobCommandInput extends DescribeAssetBundleExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssetBundleExportJobCommand}.
 */
export interface DescribeAssetBundleExportJobCommandOutput
  extends DescribeAssetBundleExportJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes an existing export job.</p>
 *          <p>Poll job descriptions after a job starts to know the status of the job. When a job succeeds, a URL is provided to download the exported assets' data from. Download URLs are valid for five minutes after they are generated. You can call the <code>DescribeAssetBundleExportJob</code> API for a new download URL as needed.</p>
 *          <p>Job descriptions are available for 14 days after the job starts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAssetBundleExportJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAssetBundleExportJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAssetBundleExportJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssetBundleExportJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAssetBundleExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssetBundleExportJobResponse
 * //   JobStatus: "QUEUED_FOR_IMMEDIATE_EXECUTION" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED",
 * //   DownloadUrl: "STRING_VALUE",
 * //   Errors: [ // AssetBundleExportJobErrorList
 * //     { // AssetBundleExportJobError
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Arn: "STRING_VALUE",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   AssetBundleExportJobId: "STRING_VALUE",
 * //   AwsAccountId: "STRING_VALUE",
 * //   ResourceArns: [ // AssetBundleResourceArns
 * //     "STRING_VALUE",
 * //   ],
 * //   IncludeAllDependencies: true || false,
 * //   ExportFormat: "CLOUDFORMATION_JSON" || "QUICKSIGHT_JSON",
 * //   CloudFormationOverridePropertyConfiguration: { // AssetBundleCloudFormationOverridePropertyConfiguration
 * //     ResourceIdOverrideConfiguration: { // AssetBundleExportJobResourceIdOverrideConfiguration
 * //       PrefixForAllResources: true || false,
 * //     },
 * //     VPCConnections: [ // AssetBundleExportJobVPCConnectionOverridePropertiesList
 * //       { // AssetBundleExportJobVPCConnectionOverrideProperties
 * //         Arn: "STRING_VALUE",
 * //         Properties: [ // AssetBundleExportJobVPCConnectionPropertyToOverrideList // required
 * //           "Name" || "DnsResolvers" || "RoleArn",
 * //         ],
 * //       },
 * //     ],
 * //     RefreshSchedules: [ // AssetBundleExportJobRefreshScheduleOverridePropertiesList
 * //       { // AssetBundleExportJobRefreshScheduleOverrideProperties
 * //         Arn: "STRING_VALUE",
 * //         Properties: [ // AssetBundleExportJobRefreshSchedulePropertyToOverrideList // required
 * //           "StartAfterDateTime",
 * //         ],
 * //       },
 * //     ],
 * //     DataSources: [ // AssetBundleExportJobDataSourceOverridePropertiesList
 * //       { // AssetBundleExportJobDataSourceOverrideProperties
 * //         Arn: "STRING_VALUE",
 * //         Properties: [ // AssetBundleExportJobDataSourcePropertyToOverrideList // required
 * //           "Name" || "DisableSsl" || "SecretArn" || "Username" || "Password" || "Domain" || "WorkGroup" || "Host" || "Port" || "Database" || "DataSetName" || "Catalog" || "InstanceId" || "ClusterId" || "ManifestFileLocation" || "Warehouse" || "RoleArn",
 * //         ],
 * //       },
 * //     ],
 * //     DataSets: [ // AssetBundleExportJobDataSetOverridePropertiesList
 * //       { // AssetBundleExportJobDataSetOverrideProperties
 * //         Arn: "STRING_VALUE",
 * //         Properties: [ // AssetBundleExportJobDataSetPropertyToOverrideList // required
 * //           "Name",
 * //         ],
 * //       },
 * //     ],
 * //     Themes: [ // AssetBundleExportJobThemeOverridePropertiesList
 * //       { // AssetBundleExportJobThemeOverrideProperties
 * //         Arn: "STRING_VALUE",
 * //         Properties: [ // AssetBundleExportJobThemePropertyToOverrideList // required
 * //           "Name",
 * //         ],
 * //       },
 * //     ],
 * //     Analyses: [ // AssetBundleExportJobAnalysisOverridePropertiesList
 * //       { // AssetBundleExportJobAnalysisOverrideProperties
 * //         Arn: "STRING_VALUE",
 * //         Properties: [ // AssetBundleExportJobAnalysisPropertyToOverrideList // required
 * //           "Name",
 * //         ],
 * //       },
 * //     ],
 * //     Dashboards: [ // AssetBundleExportJobDashboardOverridePropertiesList
 * //       { // AssetBundleExportJobDashboardOverrideProperties
 * //         Arn: "STRING_VALUE",
 * //         Properties: [ // AssetBundleExportJobDashboardPropertyToOverrideList // required
 * //           "Name",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeAssetBundleExportJobCommandInput - {@link DescribeAssetBundleExportJobCommandInput}
 * @returns {@link DescribeAssetBundleExportJobCommandOutput}
 * @see {@link DescribeAssetBundleExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetBundleExportJobCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
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
export class DescribeAssetBundleExportJobCommand extends $Command<
  DescribeAssetBundleExportJobCommandInput,
  DescribeAssetBundleExportJobCommandOutput,
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
  constructor(readonly input: DescribeAssetBundleExportJobCommandInput) {
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
  ): Handler<DescribeAssetBundleExportJobCommandInput, DescribeAssetBundleExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAssetBundleExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeAssetBundleExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "DescribeAssetBundleExportJob",
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
  private serialize(input: DescribeAssetBundleExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAssetBundleExportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAssetBundleExportJobCommandOutput> {
    return de_DescribeAssetBundleExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
