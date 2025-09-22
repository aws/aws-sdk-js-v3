// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourceDataSyncRequest, ListResourceDataSyncResult } from "../models/models_1";
import { ListResourceDataSync } from "../schemas/schemas_13_ResourceData";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceDataSyncCommand}.
 */
export interface ListResourceDataSyncCommandInput extends ListResourceDataSyncRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceDataSyncCommand}.
 */
export interface ListResourceDataSyncCommandOutput extends ListResourceDataSyncResult, __MetadataBearer {}

/**
 * <p>Lists your resource data sync configurations. Includes information about the last time a
 *    sync attempted to start, the last sync status, and the last time a sync successfully
 *    completed.</p>
 *          <p>The number of sync configurations might be too large to return using a single call to
 *     <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by
 *    using the <code>MaxResults</code> parameter. To determine whether there are more sync
 *    configurations to list, check the value of <code>NextToken</code> in the output. If there are
 *    more sync configurations to list, you can request them by specifying the <code>NextToken</code>
 *    returned in the call to the parameter of a subsequent call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListResourceDataSyncRequest
 *   SyncType: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceDataSyncResult
 * //   ResourceDataSyncItems: [ // ResourceDataSyncItemList
 * //     { // ResourceDataSyncItem
 * //       SyncName: "STRING_VALUE",
 * //       SyncType: "STRING_VALUE",
 * //       SyncSource: { // ResourceDataSyncSourceWithState
 * //         SourceType: "STRING_VALUE",
 * //         AwsOrganizationsSource: { // ResourceDataSyncAwsOrganizationsSource
 * //           OrganizationSourceType: "STRING_VALUE", // required
 * //           OrganizationalUnits: [ // ResourceDataSyncOrganizationalUnitList
 * //             { // ResourceDataSyncOrganizationalUnit
 * //               OrganizationalUnitId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         SourceRegions: [ // ResourceDataSyncSourceRegionList
 * //           "STRING_VALUE",
 * //         ],
 * //         IncludeFutureRegions: true || false,
 * //         State: "STRING_VALUE",
 * //         EnableAllOpsDataSources: true || false,
 * //       },
 * //       S3Destination: { // ResourceDataSyncS3Destination
 * //         BucketName: "STRING_VALUE", // required
 * //         Prefix: "STRING_VALUE",
 * //         SyncFormat: "JsonSerDe", // required
 * //         Region: "STRING_VALUE", // required
 * //         AWSKMSKeyARN: "STRING_VALUE",
 * //         DestinationDataSharing: { // ResourceDataSyncDestinationDataSharing
 * //           DestinationDataSharingType: "STRING_VALUE",
 * //         },
 * //       },
 * //       LastSyncTime: new Date("TIMESTAMP"),
 * //       LastSuccessfulSyncTime: new Date("TIMESTAMP"),
 * //       SyncLastModifiedTime: new Date("TIMESTAMP"),
 * //       LastStatus: "Successful" || "Failed" || "InProgress",
 * //       SyncCreatedTime: new Date("TIMESTAMP"),
 * //       LastSyncStatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceDataSyncCommandInput - {@link ListResourceDataSyncCommandInput}
 * @returns {@link ListResourceDataSyncCommandOutput}
 * @see {@link ListResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link ListResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link ResourceDataSyncInvalidConfigurationException} (client fault)
 *  <p>The specified sync configuration is invalid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ListResourceDataSyncCommand extends $Command
  .classBuilder<
    ListResourceDataSyncCommandInput,
    ListResourceDataSyncCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "ListResourceDataSync", {})
  .n("SSMClient", "ListResourceDataSyncCommand")
  .sc(ListResourceDataSync)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceDataSyncRequest;
      output: ListResourceDataSyncResult;
    };
    sdk: {
      input: ListResourceDataSyncCommandInput;
      output: ListResourceDataSyncCommandOutput;
    };
  };
}
