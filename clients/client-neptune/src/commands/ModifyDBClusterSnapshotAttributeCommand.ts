// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyDBClusterSnapshotAttributeMessage,
  ModifyDBClusterSnapshotAttributeResult,
} from "../models/models_0";
import { ModifyDBClusterSnapshotAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ModifyDBClusterSnapshotAttributeCommandOutput extends ModifyDBClusterSnapshotAttributeResult, __MetadataBearer {}

/**
 * Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.
 *
 * To share a manual DB cluster snapshot with other Amazon accounts, specify `restore` as the `AttributeName` and use the `ValuesToAdd` parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value `all` to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the `all` value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the `ValuesToAdd` parameter. You can't use `all` as a value for that parameter in this case.
 *
 * To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the DescribeDBClusterSnapshotAttributes API action.
 *
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
 *
 * *DBClusterSnapshotIdentifier* does not refer to an existing DB cluster snapshot.
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *
 * The supplied value is not a valid DB cluster snapshot state.
 *
 * @throws {@link SharedSnapshotQuotaExceededFault} (client fault)
 *
 * You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class ModifyDBClusterSnapshotAttributeCommand extends command<ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput>(
  _ep0,
  _mw0,
  "ModifyDBClusterSnapshotAttribute",
  ModifyDBClusterSnapshotAttribute$
) {
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
