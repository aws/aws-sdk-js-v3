// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListClusterJobsRequest, ListClusterJobsResult } from "../models/models_0";
import { de_ListClusterJobsCommand, se_ListClusterJobsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClusterJobsCommand}.
 */
export interface ListClusterJobsCommandInput extends ListClusterJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListClusterJobsCommand}.
 */
export interface ListClusterJobsCommandOutput extends ListClusterJobsResult, __MetadataBearer {}

/**
 * <p>Returns an array of <code>JobListEntry</code> objects of the specified length. Each
 *         <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's
 *       state, a job's ID, and other information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListClusterJobsCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListClusterJobsCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SnowballClient(config);
 * const input = { // ListClusterJobsRequest
 *   ClusterId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClusterJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterJobsResult
 * //   JobListEntries: [ // JobListEntryList
 * //     { // JobListEntry
 * //       JobId: "STRING_VALUE",
 * //       JobState: "New" || "PreparingAppliance" || "PreparingShipment" || "InTransitToCustomer" || "WithCustomer" || "InTransitToAWS" || "WithAWSSortingFacility" || "WithAWS" || "InProgress" || "Complete" || "Cancelled" || "Listing" || "Pending",
 * //       IsMaster: true || false,
 * //       JobType: "IMPORT" || "EXPORT" || "LOCAL_USE",
 * //       SnowballType: "STANDARD" || "EDGE" || "EDGE_C" || "EDGE_CG" || "EDGE_S" || "SNC1_HDD" || "SNC1_SSD" || "V3_5C" || "V3_5S" || "RACK_5U_C",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClusterJobsCommandInput - {@link ListClusterJobsCommandInput}
 * @returns {@link ListClusterJobsCommandOutput}
 * @see {@link ListClusterJobsCommandInput} for command's `input` shape.
 * @see {@link ListClusterJobsCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @public
 * @example To get a list of jobs in a cluster that you've created for AWS Snowball
 * ```javascript
 * // Returns an array of JobListEntry objects of the specified length. Each JobListEntry object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.
 * const input = {
 *   "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000"
 * };
 * const command = new ListClusterJobsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "JobListEntries": [
 *     {
 *       "CreationDate": "1480475524.0",
 *       "Description": "MyClustrer-node-001",
 *       "IsMaster": false,
 *       "JobId": "JID123e4567-e89b-12d3-a456-426655440000",
 *       "JobState": "New",
 *       "JobType": "LOCAL_USE",
 *       "SnowballType": "EDGE"
 *     },
 *     {
 *       "CreationDate": "1480475525.0",
 *       "Description": "MyClustrer-node-002",
 *       "IsMaster": false,
 *       "JobId": "JID123e4567-e89b-12d3-a456-426655440001",
 *       "JobState": "New",
 *       "JobType": "LOCAL_USE",
 *       "SnowballType": "EDGE"
 *     },
 *     {
 *       "CreationDate": "1480475525.0",
 *       "Description": "MyClustrer-node-003",
 *       "IsMaster": false,
 *       "JobId": "JID123e4567-e89b-12d3-a456-426655440002",
 *       "JobState": "New",
 *       "JobType": "LOCAL_USE",
 *       "SnowballType": "EDGE"
 *     },
 *     {
 *       "CreationDate": "1480475525.0",
 *       "Description": "MyClustrer-node-004",
 *       "IsMaster": false,
 *       "JobId": "JID123e4567-e89b-12d3-a456-426655440003",
 *       "JobState": "New",
 *       "JobType": "LOCAL_USE",
 *       "SnowballType": "EDGE"
 *     },
 *     {
 *       "CreationDate": "1480475525.0",
 *       "Description": "MyClustrer-node-005",
 *       "IsMaster": false,
 *       "JobId": "JID123e4567-e89b-12d3-a456-426655440004",
 *       "JobState": "New",
 *       "JobType": "LOCAL_USE",
 *       "SnowballType": "EDGE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-jobs-in-a-cluster-that-youve-created-for-aws-snowball-1482863105773
 * ```
 *
 */
export class ListClusterJobsCommand extends $Command
  .classBuilder<
    ListClusterJobsCommandInput,
    ListClusterJobsCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIESnowballJobManagementService", "ListClusterJobs", {})
  .n("SnowballClient", "ListClusterJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListClusterJobsCommand)
  .de(de_ListClusterJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClusterJobsRequest;
      output: ListClusterJobsResult;
    };
    sdk: {
      input: ListClusterJobsCommandInput;
      output: ListClusterJobsCommandOutput;
    };
  };
}
