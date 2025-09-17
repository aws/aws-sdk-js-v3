// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyDBClusterSnapshotAttributeMessage, ModifyDBClusterSnapshotAttributeResult } from "../models/models_1";
import {
  de_ModifyDBClusterSnapshotAttributeCommand,
  se_ModifyDBClusterSnapshotAttributeCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p>
 *          <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify
 *                 <code>restore</code> as the <code>AttributeName</code> and use the
 *                 <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are
 *             authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to
 *             make the manual DB cluster snapshot public, which means that it can be copied or
 *             restored by all Amazon Web Services accounts.</p>
 *          <note>
 *             <p>Don't add the <code>all</code> value for any manual DB cluster snapshots
 *                 that contain private information that you don't want available to all Amazon Web Services
 *                 accounts.</p>
 *          </note>
 *          <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by
 *             specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code>
 *             parameter. You can't use <code>all</code> as a value for that parameter in this
 *             case.</p>
 *          <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster
 *             snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are
 *             returned as values for the <code>restore</code> attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterSnapshotAttributeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterSnapshotAttributeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
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
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 *
 * @throws {@link SharedSnapshotQuotaExceededFault} (client fault)
 *  <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To modify a DB cluster snapshot attribute
 * ```javascript
 * // The following example makes changes to the specified DB cluster snapshot attribute.
 * const input = {
 *   AttributeName: "restore",
 *   DBClusterSnapshotIdentifier: "myclustersnapshot",
 *   ValuesToAdd: [
 *     "123456789012"
 *   ]
 * };
 * const command = new ModifyDBClusterSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterSnapshotAttributesResult: {
 *     DBClusterSnapshotAttributes: [
 *       {
 *         AttributeName: "restore",
 *         AttributeValues: [
 *           "123456789012"
 *         ]
 *       }
 *     ],
 *     DBClusterSnapshotIdentifier: "myclustersnapshot"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyDBClusterSnapshotAttributeCommand extends $Command
  .classBuilder<
    ModifyDBClusterSnapshotAttributeCommandInput,
    ModifyDBClusterSnapshotAttributeCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "ModifyDBClusterSnapshotAttribute", {})
  .n("RDSClient", "ModifyDBClusterSnapshotAttributeCommand")
  .f(void 0, void 0)
  .ser(se_ModifyDBClusterSnapshotAttributeCommand)
  .de(de_ModifyDBClusterSnapshotAttributeCommand)
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
