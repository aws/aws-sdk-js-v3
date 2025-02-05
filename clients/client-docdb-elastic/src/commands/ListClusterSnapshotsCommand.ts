// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListClusterSnapshotsInput, ListClusterSnapshotsOutput } from "../models/models_0";
import { de_ListClusterSnapshotsCommand, se_ListClusterSnapshotsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClusterSnapshotsCommand}.
 */
export interface ListClusterSnapshotsCommandInput extends ListClusterSnapshotsInput {}
/**
 * @public
 *
 * The output of {@link ListClusterSnapshotsCommand}.
 */
export interface ListClusterSnapshotsCommandOutput extends ListClusterSnapshotsOutput, __MetadataBearer {}

/**
 * <p>Returns information about snapshots for a specified elastic cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, ListClusterSnapshotsCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, ListClusterSnapshotsCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DocDBElasticClient(config);
 * const input = { // ListClusterSnapshotsInput
 *   clusterArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   snapshotType: "STRING_VALUE",
 * };
 * const command = new ListClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterSnapshotsOutput
 * //   snapshots: [ // ClusterSnapshotList
 * //     { // ClusterSnapshotInList
 * //       snapshotName: "STRING_VALUE", // required
 * //       snapshotArn: "STRING_VALUE", // required
 * //       clusterArn: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       snapshotCreationTime: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClusterSnapshotsCommandInput - {@link ListClusterSnapshotsCommandInput}
 * @returns {@link ListClusterSnapshotsCommandOutput}
 * @see {@link ListClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>ThrottlingException will be thrown when request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A structure defining a validation exception.</p>
 *
 * @throws {@link DocDBElasticServiceException}
 * <p>Base exception class for all service exceptions from DocDBElastic service.</p>
 *
 * @public
 */
export class ListClusterSnapshotsCommand extends $Command
  .classBuilder<
    ListClusterSnapshotsCommandInput,
    ListClusterSnapshotsCommandOutput,
    DocDBElasticClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBElasticClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeraDbLionfishServiceLambda", "ListClusterSnapshots", {})
  .n("DocDBElasticClient", "ListClusterSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_ListClusterSnapshotsCommand)
  .de(de_ListClusterSnapshotsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClusterSnapshotsInput;
      output: ListClusterSnapshotsOutput;
    };
    sdk: {
      input: ListClusterSnapshotsCommandInput;
      output: ListClusterSnapshotsCommandOutput;
    };
  };
}
