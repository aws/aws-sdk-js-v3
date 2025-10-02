// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotAttributesResult,
} from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  de_DescribeDBClusterSnapshotAttributesCommand,
  se_DescribeDBClusterSnapshotAttributesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterSnapshotAttributesCommand}.
 */
export interface DescribeDBClusterSnapshotAttributesCommandInput extends DescribeDBClusterSnapshotAttributesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterSnapshotAttributesCommand}.
 */
export interface DescribeDBClusterSnapshotAttributesCommandOutput
  extends DescribeDBClusterSnapshotAttributesResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster
 *       snapshot.</p>
 *          <p>When sharing snapshots with other Amazon accounts,
 *       <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute
 *       and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB
 *       cluster snapshot. If <code>all</code> is included in the list of values for the
 *       <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be
 *       copied or restored by all Amazon accounts.</p>
 *          <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster
 *       snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClusterSnapshotAttributesCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClusterSnapshotAttributesCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DescribeDBClusterSnapshotAttributesMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeDBClusterSnapshotAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBClusterSnapshotAttributesResult
 * //   DBClusterSnapshotAttributesResult: { // DBClusterSnapshotAttributesResult
 * //     DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //     DBClusterSnapshotAttributes: [ // DBClusterSnapshotAttributeList
 * //       { // DBClusterSnapshotAttribute
 * //         AttributeName: "STRING_VALUE",
 * //         AttributeValues: [ // AttributeValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterSnapshotAttributesCommandInput - {@link DescribeDBClusterSnapshotAttributesCommandInput}
 * @returns {@link DescribeDBClusterSnapshotAttributesCommandOutput}
 * @see {@link DescribeDBClusterSnapshotAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterSnapshotAttributesCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterSnapshotIdentifier</i> does not refer to an existing
 *       DB cluster snapshot.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DescribeDBClusterSnapshotAttributesCommand extends $Command
  .classBuilder<
    DescribeDBClusterSnapshotAttributesCommandInput,
    DescribeDBClusterSnapshotAttributesCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeDBClusterSnapshotAttributes", {})
  .n("NeptuneClient", "DescribeDBClusterSnapshotAttributesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBClusterSnapshotAttributesCommand)
  .de(de_DescribeDBClusterSnapshotAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBClusterSnapshotAttributesMessage;
      output: DescribeDBClusterSnapshotAttributesResult;
    };
    sdk: {
      input: DescribeDBClusterSnapshotAttributesCommandInput;
      output: DescribeDBClusterSnapshotAttributesCommandOutput;
    };
  };
}
