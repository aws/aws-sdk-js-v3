// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ClusterVersionsMessage } from "../models/models_0";
import { DescribeClusterVersionsMessage } from "../models/models_1";
import { de_DescribeClusterVersionsCommand, se_DescribeClusterVersionsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterVersionsCommand}.
 */
export interface DescribeClusterVersionsCommandInput extends DescribeClusterVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClusterVersionsCommand}.
 */
export interface DescribeClusterVersionsCommandOutput extends ClusterVersionsMessage, __MetadataBearer {}

/**
 * <p>Returns descriptions of the available Amazon Redshift cluster versions. You can call this
 *             operation even before creating any clusters to learn more about the Amazon Redshift versions.
 *
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterVersionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterVersionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClusterVersionsMessage
 *   ClusterVersion: "STRING_VALUE",
 *   ClusterParameterGroupFamily: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeClusterVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ClusterVersionsMessage
 * //   Marker: "STRING_VALUE",
 * //   ClusterVersions: [ // ClusterVersionList
 * //     { // ClusterVersion
 * //       ClusterVersion: "STRING_VALUE",
 * //       ClusterParameterGroupFamily: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClusterVersionsCommandInput - {@link DescribeClusterVersionsCommandInput}
 * @returns {@link DescribeClusterVersionsCommandOutput}
 * @see {@link DescribeClusterVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterVersionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DescribeClusterVersionsCommand extends $Command
  .classBuilder<
    DescribeClusterVersionsCommandInput,
    DescribeClusterVersionsCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DescribeClusterVersions", {})
  .n("RedshiftClient", "DescribeClusterVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClusterVersionsCommand)
  .de(de_DescribeClusterVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterVersionsMessage;
      output: ClusterVersionsMessage;
    };
    sdk: {
      input: DescribeClusterVersionsCommandInput;
      output: DescribeClusterVersionsCommandOutput;
    };
  };
}
