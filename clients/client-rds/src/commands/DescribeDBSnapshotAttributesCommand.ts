// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDBSnapshotAttributesMessage, DescribeDBSnapshotAttributesResult } from "../models/models_1";
import { de_DescribeDBSnapshotAttributesCommand, se_DescribeDBSnapshotAttributesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBSnapshotAttributesCommand}.
 */
export interface DescribeDBSnapshotAttributesCommandInput extends DescribeDBSnapshotAttributesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBSnapshotAttributesCommand}.
 */
export interface DescribeDBSnapshotAttributesCommandOutput
  extends DescribeDBSnapshotAttributesResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p>
 *          <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code>
 *       returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are
 *       authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of
 *       values for the <code>restore</code> attribute, then the manual DB snapshot is public and
 *       can be copied or restored by all Amazon Web Services accounts.</p>
 *          <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the
 *       manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSnapshotAttributesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSnapshotAttributesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBSnapshotAttributesMessage
 *   DBSnapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeDBSnapshotAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBSnapshotAttributesResult
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
 * @param DescribeDBSnapshotAttributesCommandInput - {@link DescribeDBSnapshotAttributesCommandInput}
 * @returns {@link DescribeDBSnapshotAttributesCommandOutput}
 * @see {@link DescribeDBSnapshotAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSnapshotAttributesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe the attribute names and values for a DB snapshot
 * ```javascript
 * // The following example describes the attribute names and values for a DB snapshot.
 * const input = {
 *   DBSnapshotIdentifier: "mydbsnapshot"
 * };
 * const command = new DescribeDBSnapshotAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSnapshotAttributesResult: {
 *     DBSnapshotAttributes: [
 *       {
 *         AttributeName: "restore",
 *         AttributeValues: [
 *           "123456789012",
 *           "210987654321"
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
export class DescribeDBSnapshotAttributesCommand extends $Command
  .classBuilder<
    DescribeDBSnapshotAttributesCommandInput,
    DescribeDBSnapshotAttributesCommandOutput,
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
  .s("AmazonRDSv19", "DescribeDBSnapshotAttributes", {})
  .n("RDSClient", "DescribeDBSnapshotAttributesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBSnapshotAttributesCommand)
  .de(de_DescribeDBSnapshotAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBSnapshotAttributesMessage;
      output: DescribeDBSnapshotAttributesResult;
    };
    sdk: {
      input: DescribeDBSnapshotAttributesCommandInput;
      output: DescribeDBSnapshotAttributesCommandOutput;
    };
  };
}
