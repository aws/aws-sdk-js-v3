// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyDBClusterSnapshotAttributeMessage,
  ModifyDBClusterSnapshotAttributeResult,
} from "../models/models_1";
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
 * To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify `restore` as the `AttributeName` and use the `ValuesToAdd` parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value `all` to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.
 *
 * > **Note:** Don't add the `all` value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.
 *
 * If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the `ValuesToAdd` parameter. You can't use `all` as a value for that parameter in this case.
 *
 * To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the DescribeDBClusterSnapshotAttributes API operation. The accounts are returned as values for the `restore` attribute.
 *
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
 *
 * `DBClusterSnapshotIdentifier` doesn't refer to an existing DB cluster snapshot.
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *
 * The supplied value isn't a valid DB cluster snapshot state.
 *
 * @throws {@link SharedSnapshotQuotaExceededFault} (client fault)
 *
 * You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
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
