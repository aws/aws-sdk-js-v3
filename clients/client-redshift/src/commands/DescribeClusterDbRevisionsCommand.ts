// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ClusterDbRevisionsMessage } from "../models/models_0";
import { DescribeClusterDbRevisionsMessage } from "../models/models_1";
import { de_DescribeClusterDbRevisionsCommand, se_DescribeClusterDbRevisionsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterDbRevisionsCommand}.
 */
export interface DescribeClusterDbRevisionsCommandInput extends DescribeClusterDbRevisionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClusterDbRevisionsCommand}.
 */
export interface DescribeClusterDbRevisionsCommandOutput extends ClusterDbRevisionsMessage, __MetadataBearer {}

/**
 * <p>Returns an array of <code>ClusterDbRevision</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterDbRevisionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterDbRevisionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClusterDbRevisionsMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeClusterDbRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // ClusterDbRevisionsMessage
 * //   Marker: "STRING_VALUE",
 * //   ClusterDbRevisions: [ // ClusterDbRevisionsList
 * //     { // ClusterDbRevision
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       CurrentDatabaseRevision: "STRING_VALUE",
 * //       DatabaseRevisionReleaseDate: new Date("TIMESTAMP"),
 * //       RevisionTargets: [ // RevisionTargetsList
 * //         { // RevisionTarget
 * //           DatabaseRevision: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           DatabaseRevisionReleaseDate: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClusterDbRevisionsCommandInput - {@link DescribeClusterDbRevisionsCommandInput}
 * @returns {@link DescribeClusterDbRevisionsCommandOutput}
 * @see {@link DescribeClusterDbRevisionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterDbRevisionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DescribeClusterDbRevisionsCommand extends $Command
  .classBuilder<
    DescribeClusterDbRevisionsCommandInput,
    DescribeClusterDbRevisionsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeClusterDbRevisions", {})
  .n("RedshiftClient", "DescribeClusterDbRevisionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClusterDbRevisionsCommand)
  .de(de_DescribeClusterDbRevisionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterDbRevisionsMessage;
      output: ClusterDbRevisionsMessage;
    };
    sdk: {
      input: DescribeClusterDbRevisionsCommandInput;
      output: DescribeClusterDbRevisionsCommandOutput;
    };
  };
}
