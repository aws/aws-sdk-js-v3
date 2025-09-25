// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotAttributesResult,
} from "../models/models_0";
import { DescribeDBClusterSnapshotAttributes } from "../schemas/schemas_8_Cluster";

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
 * <p>Returns a list of cluster snapshot attribute names and values for a manual DB
 *             cluster snapshot.</p>
 *          <p>When you share snapshots with other Amazon Web Services accounts,
 *                 <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBClusterSnapshotAttributesCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBClusterSnapshotAttributesCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
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
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing cluster snapshot. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class DescribeDBClusterSnapshotAttributesCommand extends $Command
  .classBuilder<
    DescribeDBClusterSnapshotAttributesCommandInput,
    DescribeDBClusterSnapshotAttributesCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBClusterSnapshotAttributes", {})
  .n("DocDBClient", "DescribeDBClusterSnapshotAttributesCommand")
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
