// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyDBSnapshotAttributeMessage, ModifyDBSnapshotAttributeResult } from "../models/models_1";
import { ModifyDBSnapshotAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyDBSnapshotAttributeCommand}.
 */
export interface ModifyDBSnapshotAttributeCommandInput extends ModifyDBSnapshotAttributeMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBSnapshotAttributeCommand}.
 */
export interface ModifyDBSnapshotAttributeCommandOutput extends ModifyDBSnapshotAttributeResult, __MetadataBearer {}

/**
 * Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.
 *
 * To share a manual DB snapshot with other Amazon Web Services accounts, specify `restore` as the `AttributeName` and use the `ValuesToAdd` parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value `all` to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.
 *
 * > **Note:** Don't add the `all` value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.
 *
 * If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the `ValuesToAdd` parameter. You can't use `all` as a value for that parameter in this case.
 *
 * To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the DescribeDBSnapshotAttributes API operation. The accounts are returned as values for the `restore` attribute.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBSnapshotAttributeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBSnapshotAttributeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyDBSnapshotAttributeMessage
 *   DBSnapshotIdentifier: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 *   ValuesToAdd: [ // AttributeValueList
 *     "STRING_VALUE",
 *   ],
 *   ValuesToRemove: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBSnapshotAttributeResult
 * //   DBSnapshotAttributesResult: { // DBSnapshotAttributesResult
 * //     DBSnapshotIdentifier: "STRING_VALUE",
 * //     DBSnapshotAttributes: [ // DBSnapshotAttributeList
 * //       { // DBSnapshotAttribute
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
 * @param ModifyDBSnapshotAttributeCommandInput - {@link ModifyDBSnapshotAttributeCommandInput}
 * @returns {@link ModifyDBSnapshotAttributeCommandOutput}
 * @see {@link ModifyDBSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *
 * `DBSnapshotIdentifier` doesn't refer to an existing DB snapshot.
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *
 * The state of the DB snapshot doesn't allow deletion.
 *
 * @throws {@link SharedSnapshotQuotaExceededFault} (client fault)
 *
 * You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To allow two AWS accounts to restore a DB snapshot
 * ```javascript
 * // The following example grants permission to two AWS accounts, with the identifiers 111122223333 and 444455556666, to restore the DB snapshot named mydbsnapshot.
 * const input = {
 *   AttributeName: "restore",
 *   DBSnapshotIdentifier: "mydbsnapshot",
 *   ValuesToAdd: [
 *     "111122223333",
 *     "444455556666"
 *   ]
 * };
 * const command = new ModifyDBSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSnapshotAttributesResult: {
 *     DBSnapshotAttributes: [
 *       {
 *         AttributeName: "restore",
 *         AttributeValues: [
 *           "111122223333",
 *           "444455556666"
 *         ]
 *       }
 *     ],
 *     DBSnapshotIdentifier: "mydbsnapshot"
 *   }
 * }
 * *\/
 * ```
 *
 * @example To prevent an AWS account from restoring a DB snapshot
 * ```javascript
 * // The following example removes permission from the AWS account with the identifier 444455556666 to restore the DB snapshot named mydbsnapshot.
 * const input = {
 *   AttributeName: "restore",
 *   DBSnapshotIdentifier: "mydbsnapshot",
 *   ValuesToRemove: [
 *     "444455556666"
 *   ]
 * };
 * const command = new ModifyDBSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSnapshotAttributesResult: {
 *     DBSnapshotAttributes: [
 *       {
 *         AttributeName: "restore",
 *         AttributeValues: [
 *           "111122223333"
 *         ]
 *       }
 *     ],
 *     DBSnapshotIdentifier: "mydbsnapshot"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyDBSnapshotAttributeCommand extends command<ModifyDBSnapshotAttributeCommandInput, ModifyDBSnapshotAttributeCommandOutput>(
  _ep0,
  _mw0,
  "ModifyDBSnapshotAttribute",
  ModifyDBSnapshotAttribute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBSnapshotAttributeMessage;
      output: ModifyDBSnapshotAttributeResult;
    };
    sdk: {
      input: ModifyDBSnapshotAttributeCommandInput;
      output: ModifyDBSnapshotAttributeCommandOutput;
    };
  };
}
