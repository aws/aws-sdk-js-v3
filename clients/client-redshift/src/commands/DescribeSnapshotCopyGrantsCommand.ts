// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSnapshotCopyGrantsMessage, SnapshotCopyGrantMessage } from "../models/models_1";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeSnapshotCopyGrants } from "../schemas/schemas_24_Snapshot";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotCopyGrantsCommand}.
 */
export interface DescribeSnapshotCopyGrantsCommandInput extends DescribeSnapshotCopyGrantsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotCopyGrantsCommand}.
 */
export interface DescribeSnapshotCopyGrantsCommandOutput extends SnapshotCopyGrantMessage, __MetadataBearer {}

/**
 * <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination
 *             region.</p>
 *          <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeSnapshotCopyGrantsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeSnapshotCopyGrantsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeSnapshotCopyGrantsMessage
 *   SnapshotCopyGrantName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeSnapshotCopyGrantsCommand(input);
 * const response = await client.send(command);
 * // { // SnapshotCopyGrantMessage
 * //   Marker: "STRING_VALUE",
 * //   SnapshotCopyGrants: [ // SnapshotCopyGrantList
 * //     { // SnapshotCopyGrant
 * //       SnapshotCopyGrantName: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotCopyGrantsCommandInput - {@link DescribeSnapshotCopyGrantsCommandInput}
 * @returns {@link DescribeSnapshotCopyGrantsCommandOutput}
 * @see {@link DescribeSnapshotCopyGrantsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotCopyGrantsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link SnapshotCopyGrantNotFoundFault} (client fault)
 *  <p>The specified snapshot copy grant can't be found. Make sure that the name is typed
 *             correctly and that the grant exists in the destination region.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeSnapshotCopyGrantsCommand extends $Command
  .classBuilder<
    DescribeSnapshotCopyGrantsCommandInput,
    DescribeSnapshotCopyGrantsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeSnapshotCopyGrants", {})
  .n("RedshiftClient", "DescribeSnapshotCopyGrantsCommand")
  .sc(DescribeSnapshotCopyGrants)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapshotCopyGrantsMessage;
      output: SnapshotCopyGrantMessage;
    };
    sdk: {
      input: DescribeSnapshotCopyGrantsCommandInput;
      output: DescribeSnapshotCopyGrantsCommandOutput;
    };
  };
}
