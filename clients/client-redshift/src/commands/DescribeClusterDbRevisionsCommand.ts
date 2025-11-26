// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ClusterDbRevisionsMessage, DescribeClusterDbRevisionsMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeClusterDbRevisions } from "../schemas/schemas_0";

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
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeClusterDbRevisions", {})
  .n("RedshiftClient", "DescribeClusterDbRevisionsCommand")
  .sc(DescribeClusterDbRevisions)
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
