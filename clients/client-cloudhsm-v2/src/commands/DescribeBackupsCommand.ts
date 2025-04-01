// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBackupsRequest, DescribeBackupsResponse } from "../models/models_0";
import { de_DescribeBackupsCommand, se_DescribeBackupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBackupsCommand}.
 */
export interface DescribeBackupsCommandInput extends DescribeBackupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBackupsCommand}.
 */
export interface DescribeBackupsCommandOutput extends DescribeBackupsResponse, __MetadataBearer {}

/**
 * <p>Gets information about backups of CloudHSM clusters. Lists either the backups you own or the backups shared with you when the Shared parameter is true.</p>
 *          <p>This is a paginated operation, which means that each response might contain only a
 *       subset of all the backups. When the response contains only a subset of backups, it includes a
 *         <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code>
 *       request to get more backups. When you receive a response with no <code>NextToken</code> (or an
 *       empty or null value), that means there are no more backups to get.</p>
 *          <p>
 *             <b>Cross-account use:</b> Yes. Customers can describe backups in other Amazon Web Services accounts that are shared with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, DescribeBackupsCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, DescribeBackupsCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const input = { // DescribeBackupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: { // Filters
 *     "<keys>": [ // Strings
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Shared: true || false,
 *   SortAscending: true || false,
 * };
 * const command = new DescribeBackupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBackupsResponse
 * //   Backups: [ // Backups
 * //     { // Backup
 * //       BackupId: "STRING_VALUE", // required
 * //       BackupArn: "STRING_VALUE",
 * //       BackupState: "CREATE_IN_PROGRESS" || "READY" || "DELETED" || "PENDING_DELETION",
 * //       ClusterId: "STRING_VALUE",
 * //       CreateTimestamp: new Date("TIMESTAMP"),
 * //       CopyTimestamp: new Date("TIMESTAMP"),
 * //       NeverExpires: true || false,
 * //       SourceRegion: "STRING_VALUE",
 * //       SourceBackup: "STRING_VALUE",
 * //       SourceCluster: "STRING_VALUE",
 * //       DeleteTimestamp: new Date("TIMESTAMP"),
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       HsmType: "STRING_VALUE",
 * //       Mode: "FIPS" || "NON_FIPS",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBackupsCommandInput - {@link DescribeBackupsCommandInput}
 * @returns {@link DescribeBackupsCommandOutput}
 * @see {@link DescribeBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupsCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 * @throws {@link CloudHsmAccessDeniedException} (client fault)
 *  <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *  <p>The request was rejected because of an CloudHSM internal failure. The request can
 *       be retried.</p>
 *
 * @throws {@link CloudHsmInvalidRequestException} (client fault)
 *  <p>The request was rejected because it is not a valid request.</p>
 *
 * @throws {@link CloudHsmResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>The request was rejected because an error occurred.</p>
 *
 * @throws {@link CloudHsmTagException} (client fault)
 *  <p>The request was rejected because of a tagging failure. Verify the tag conditions in all applicable policies, and then retry the request.</p>
 *
 * @throws {@link CloudHSMV2ServiceException}
 * <p>Base exception class for all service exceptions from CloudHSMV2 service.</p>
 *
 *
 * @public
 */
export class DescribeBackupsCommand extends $Command
  .classBuilder<
    DescribeBackupsCommandInput,
    DescribeBackupsCommandOutput,
    CloudHSMV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BaldrApiService", "DescribeBackups", {})
  .n("CloudHSMV2Client", "DescribeBackupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBackupsCommand)
  .de(de_DescribeBackupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBackupsRequest;
      output: DescribeBackupsResponse;
    };
    sdk: {
      input: DescribeBackupsCommandInput;
      output: DescribeBackupsCommandOutput;
    };
  };
}
