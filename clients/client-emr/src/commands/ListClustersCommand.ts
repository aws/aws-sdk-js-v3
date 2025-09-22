// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListClustersInput, ListClustersOutput } from "../models/models_0";
import { ListClusters } from "../schemas/schemas_5_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClustersCommand}.
 */
export interface ListClustersCommandInput extends ListClustersInput {}
/**
 * @public
 *
 * The output of {@link ListClustersCommand}.
 */
export interface ListClustersCommandOutput extends ListClustersOutput, __MetadataBearer {}

/**
 * <p>Provides the status of all clusters visible to this Amazon Web Services account. Allows
 *          you to filter the list of clusters based on certain criteria; for example, filtering by
 *          cluster creation date and time or by status. This call returns a maximum of 50 clusters in
 *          unsorted order per call, but returns a marker to track the paging of the cluster list
 *          across multiple ListClusters calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListClustersCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListClustersCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // ListClustersInput
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   ClusterStates: [ // ClusterStateList
 *     "STARTING" || "BOOTSTRAPPING" || "RUNNING" || "WAITING" || "TERMINATING" || "TERMINATED" || "TERMINATED_WITH_ERRORS",
 *   ],
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListClustersOutput
 * //   Clusters: [ // ClusterSummaryList
 * //     { // ClusterSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: { // ClusterStatus
 * //         State: "STARTING" || "BOOTSTRAPPING" || "RUNNING" || "WAITING" || "TERMINATING" || "TERMINATED" || "TERMINATED_WITH_ERRORS",
 * //         StateChangeReason: { // ClusterStateChangeReason
 * //           Code: "INTERNAL_ERROR" || "VALIDATION_ERROR" || "INSTANCE_FAILURE" || "INSTANCE_FLEET_TIMEOUT" || "BOOTSTRAP_FAILURE" || "USER_REQUEST" || "STEP_FAILURE" || "ALL_STEPS_COMPLETED",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         Timeline: { // ClusterTimeline
 * //           CreationDateTime: new Date("TIMESTAMP"),
 * //           ReadyDateTime: new Date("TIMESTAMP"),
 * //           EndDateTime: new Date("TIMESTAMP"),
 * //         },
 * //         ErrorDetails: [ // ErrorDetailList
 * //           { // ErrorDetail
 * //             ErrorCode: "STRING_VALUE",
 * //             ErrorData: [ // ErrorData
 * //               { // StringMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             ],
 * //             ErrorMessage: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       NormalizedInstanceHours: Number("int"),
 * //       ClusterArn: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClustersCommandInput - {@link ListClustersCommandInput}
 * @returns {@link ListClustersCommandOutput}
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class ListClustersCommand extends $Command
  .classBuilder<
    ListClustersCommandInput,
    ListClustersCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "ListClusters", {})
  .n("EMRClient", "ListClustersCommand")
  .sc(ListClusters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClustersInput;
      output: ListClustersOutput;
    };
    sdk: {
      input: ListClustersCommandInput;
      output: ListClustersCommandOutput;
    };
  };
}
