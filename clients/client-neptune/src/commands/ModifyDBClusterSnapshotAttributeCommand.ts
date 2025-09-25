// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyDBClusterSnapshotAttributeMessage, ModifyDBClusterSnapshotAttributeResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { ModifyDBClusterSnapshotAttribute } from "../schemas/schemas_10_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBClusterSnapshotAttributeCommand}.
 */
export interface ModifyDBClusterSnapshotAttributeCommandInput extends ModifyDBClusterSnapshotAttributeMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBClusterSnapshotAttributeCommand}.
 */
export interface ModifyDBClusterSnapshotAttributeCommandOutput
  extends ModifyDBClusterSnapshotAttributeResult,
    __MetadataBearer {}

/**
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB
 *       cluster snapshot.</p>
 *          <p>To share a manual DB cluster snapshot with other Amazon accounts, specify
 *       <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code>
 *       parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual
 *       DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot
 *       public, which means that it can be copied or restored by all Amazon accounts. Do not add the
 *       <code>all</code> value for any manual DB cluster snapshots that contain private information
 *       that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is
 *       encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for
 *       the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that
 *       parameter in this case.</p>
 *          <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or
 *       whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBClusterSnapshotAttributeCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBClusterSnapshotAttributeCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // ModifyDBClusterSnapshotAttributeMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 *   ValuesToAdd: [ // AttributeValueList
 *     "STRING_VALUE",
 *   ],
 *   ValuesToRemove: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBClusterSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBClusterSnapshotAttributeResult
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
 * @param ModifyDBClusterSnapshotAttributeCommandInput - {@link ModifyDBClusterSnapshotAttributeCommandInput}
 * @returns {@link ModifyDBClusterSnapshotAttributeCommandOutput}
 * @see {@link ModifyDBClusterSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterSnapshotIdentifier</i> does not refer to an existing
 *       DB cluster snapshot.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value is not a valid DB cluster snapshot state.</p>
 *
 * @throws {@link SharedSnapshotQuotaExceededFault} (client fault)
 *  <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class ModifyDBClusterSnapshotAttributeCommand extends $Command
  .classBuilder<
    ModifyDBClusterSnapshotAttributeCommandInput,
    ModifyDBClusterSnapshotAttributeCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "ModifyDBClusterSnapshotAttribute", {})
  .n("NeptuneClient", "ModifyDBClusterSnapshotAttributeCommand")
  .sc(ModifyDBClusterSnapshotAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBClusterSnapshotAttributeMessage;
      output: ModifyDBClusterSnapshotAttributeResult;
    };
    sdk: {
      input: ModifyDBClusterSnapshotAttributeCommandInput;
      output: ModifyDBClusterSnapshotAttributeCommandOutput;
    };
  };
}
