// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyDBSnapshotAttributeMessage, ModifyDBSnapshotAttributeResult } from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBSnapshotAttribute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p>
 *          <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code>
 *             as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add
 *             a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot.
 *             Uses the value <code>all</code> to make the manual DB snapshot public, which means it
 *             can be copied or restored by all Amazon Web Services accounts.</p>
 *          <note>
 *             <p>Don't add the <code>all</code> value for any manual DB snapshots that
 *                 contain private information that you don't want available to all Amazon Web Services
 *                 accounts.</p>
 *          </note>
 *          <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a
 *             list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You
 *             can't use <code>all</code> as a value for that parameter in this case.</p>
 *          <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or
 *             whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as
 *             values for the <code>restore</code> attribute.</p>
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
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *  <p>The state of the DB snapshot doesn't allow deletion.</p>
 *
 * @throws {@link SharedSnapshotQuotaExceededFault} (client fault)
 *  <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
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
export class ModifyDBSnapshotAttributeCommand extends $Command
  .classBuilder<
    ModifyDBSnapshotAttributeCommandInput,
    ModifyDBSnapshotAttributeCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "ModifyDBSnapshotAttribute", {})
  .n("RDSClient", "ModifyDBSnapshotAttributeCommand")
  .sc(ModifyDBSnapshotAttribute)
  .build() {
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
