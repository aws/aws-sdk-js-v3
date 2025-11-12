// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotAttributesResult,
} from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBClusterSnapshotAttributes } from "../schemas/schemas_0";

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
 * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p>
 *          <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code>
 *             returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are
 *             authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of
 *             values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and
 *             can be copied or restored by all Amazon Web Services accounts.</p>
 *          <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the
 *             manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterSnapshotAttributesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterSnapshotAttributesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
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
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe the attribute names and values for a DB cluster snapshot
 * ```javascript
 * // The following example retrieves details of the attribute names and values for the specified DB cluster snapshot.
 * const input = {
 *   DBClusterSnapshotIdentifier: "myclustersnapshot"
 * };
 * const command = new DescribeDBClusterSnapshotAttributesCommand(input);
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
export class DescribeDBClusterSnapshotAttributesCommand extends $Command
  .classBuilder<
    DescribeDBClusterSnapshotAttributesCommandInput,
    DescribeDBClusterSnapshotAttributesCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBClusterSnapshotAttributes", {})
  .n("RDSClient", "DescribeDBClusterSnapshotAttributesCommand")
  .sc(DescribeDBClusterSnapshotAttributes)
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
