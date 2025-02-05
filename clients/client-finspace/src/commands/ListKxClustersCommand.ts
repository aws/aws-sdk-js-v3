// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { ListKxClustersRequest, ListKxClustersResponse } from "../models/models_0";
import { de_ListKxClustersCommand, se_ListKxClustersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKxClustersCommand}.
 */
export interface ListKxClustersCommandInput extends ListKxClustersRequest {}
/**
 * @public
 *
 * The output of {@link ListKxClustersCommand}.
 */
export interface ListKxClustersCommandOutput extends ListKxClustersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListKxClustersCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListKxClustersCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FinspaceClient(config);
 * const input = { // ListKxClustersRequest
 *   environmentId: "STRING_VALUE", // required
 *   clusterType: "HDB" || "RDB" || "GATEWAY" || "GP" || "TICKERPLANT",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListKxClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListKxClustersResponse
 * //   kxClusterSummaries: [ // KxClusters
 * //     { // KxCluster
 * //       status: "PENDING" || "CREATING" || "CREATE_FAILED" || "RUNNING" || "UPDATING" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //       statusReason: "STRING_VALUE",
 * //       clusterName: "STRING_VALUE",
 * //       clusterType: "HDB" || "RDB" || "GATEWAY" || "GP" || "TICKERPLANT",
 * //       clusterDescription: "STRING_VALUE",
 * //       releaseLabel: "STRING_VALUE",
 * //       volumes: [ // Volumes
 * //         { // Volume
 * //           volumeName: "STRING_VALUE",
 * //           volumeType: "NAS_1",
 * //         },
 * //       ],
 * //       initializationScript: "STRING_VALUE",
 * //       executionRole: "STRING_VALUE",
 * //       azMode: "SINGLE" || "MULTI",
 * //       availabilityZoneId: "STRING_VALUE",
 * //       lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKxClustersCommandInput - {@link ListKxClustersCommandInput}
 * @returns {@link ListKxClustersCommandOutput}
 * @see {@link ListKxClustersCommandInput} for command's `input` shape.
 * @see {@link ListKxClustersCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 * @public
 */
export class ListKxClustersCommand extends $Command
  .classBuilder<
    ListKxClustersCommandInput,
    ListKxClustersCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "ListKxClusters", {})
  .n("FinspaceClient", "ListKxClustersCommand")
  .f(void 0, void 0)
  .ser(se_ListKxClustersCommand)
  .de(de_ListKxClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKxClustersRequest;
      output: ListKxClustersResponse;
    };
    sdk: {
      input: ListKxClustersCommandInput;
      output: ListKxClustersCommandOutput;
    };
  };
}
