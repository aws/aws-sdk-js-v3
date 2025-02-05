// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateResourceDataSyncRequest, CreateResourceDataSyncResult } from "../models/models_0";
import { de_CreateResourceDataSyncCommand, se_CreateResourceDataSyncCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceDataSyncCommand}.
 */
export interface CreateResourceDataSyncCommandInput extends CreateResourceDataSyncRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceDataSyncCommand}.
 */
export interface CreateResourceDataSyncCommandOutput extends CreateResourceDataSyncResult, __MetadataBearer {}

/**
 * <p>A resource data sync helps you view data from multiple sources in a single location.
 *    Amazon Web Services Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and
 *     <code>SyncFromSource</code>.</p>
 *          <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to
 *    synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/inventory-create-resource-data-sync.html">Creating a
 *     resource data sync for Inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize
 *    operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a
 *    single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple
 *    Amazon Web Services accounts and Amazon Web Services Regions or <code>EntireOrganization</code> by using Organizations. For more
 *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager
 *     Explorer to display data from multiple accounts and Regions</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>A resource data sync is an asynchronous operation that returns immediately. After a
 *    successful initial sync is completed, the system continuously syncs data. To check the status of
 *    a sync, use the <a>ListResourceDataSync</a>.</p>
 *          <note>
 *             <p>By default, data isn't encrypted in Amazon S3. We strongly recommend that you
 *     enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you
 *     secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // CreateResourceDataSyncRequest
 *   SyncName: "STRING_VALUE", // required
 *   S3Destination: { // ResourceDataSyncS3Destination
 *     BucketName: "STRING_VALUE", // required
 *     Prefix: "STRING_VALUE",
 *     SyncFormat: "JsonSerDe", // required
 *     Region: "STRING_VALUE", // required
 *     AWSKMSKeyARN: "STRING_VALUE",
 *     DestinationDataSharing: { // ResourceDataSyncDestinationDataSharing
 *       DestinationDataSharingType: "STRING_VALUE",
 *     },
 *   },
 *   SyncType: "STRING_VALUE",
 *   SyncSource: { // ResourceDataSyncSource
 *     SourceType: "STRING_VALUE", // required
 *     AwsOrganizationsSource: { // ResourceDataSyncAwsOrganizationsSource
 *       OrganizationSourceType: "STRING_VALUE", // required
 *       OrganizationalUnits: [ // ResourceDataSyncOrganizationalUnitList
 *         { // ResourceDataSyncOrganizationalUnit
 *           OrganizationalUnitId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     SourceRegions: [ // ResourceDataSyncSourceRegionList // required
 *       "STRING_VALUE",
 *     ],
 *     IncludeFutureRegions: true || false,
 *     EnableAllOpsDataSources: true || false,
 *   },
 * };
 * const command = new CreateResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateResourceDataSyncCommandInput - {@link CreateResourceDataSyncCommandInput}
 * @returns {@link CreateResourceDataSyncCommandOutput}
 * @see {@link CreateResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link CreateResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceDataSyncAlreadyExistsException} (client fault)
 *  <p>A sync configuration with the same name already exists.</p>
 *
 * @throws {@link ResourceDataSyncCountExceededException} (client fault)
 *  <p>You have exceeded the allowed maximum sync configurations.</p>
 *
 * @throws {@link ResourceDataSyncInvalidConfigurationException} (client fault)
 *  <p>The specified sync configuration is invalid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class CreateResourceDataSyncCommand extends $Command
  .classBuilder<
    CreateResourceDataSyncCommandInput,
    CreateResourceDataSyncCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "CreateResourceDataSync", {})
  .n("SSMClient", "CreateResourceDataSyncCommand")
  .f(void 0, void 0)
  .ser(se_CreateResourceDataSyncCommand)
  .de(de_CreateResourceDataSyncCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceDataSyncRequest;
      output: {};
    };
    sdk: {
      input: CreateResourceDataSyncCommandInput;
      output: CreateResourceDataSyncCommandOutput;
    };
  };
}
