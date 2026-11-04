// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBackupsRequest, DescribeBackupsResponse } from "../models/models_0";
import { DescribeBackups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about backups of CloudHSM clusters. Lists either the backups you own or the backups shared with you when the Shared parameter is true.
 *
 * This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a `NextToken` value. Use this value in a subsequent `DescribeBackups` request to get more backups. When you receive a response with no `NextToken` (or an empty or null value), that means there are no more backups to get.
 *
 * **Cross-account use:** Yes. Customers can describe backups in other Amazon Web Services accounts that are shared with them.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, DescribeBackupsCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, DescribeBackupsCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * // import type { CloudHSMV2ClientConfig } from "@aws-sdk/client-cloudhsm-v2";
 * const config = {}; // type is CloudHSMV2ClientConfig
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
 *
 * The request was rejected because the requester does not have permission to perform the requested operation.
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *
 * The request was rejected because of an CloudHSM internal failure. The request can be retried.
 *
 * @throws {@link CloudHsmInvalidRequestException} (client fault)
 *
 * The request was rejected because it is not a valid request.
 *
 * @throws {@link CloudHsmResourceNotFoundException} (client fault)
 *
 * The request was rejected because it refers to a resource that cannot be found.
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *
 * The request was rejected because an error occurred.
 *
 * @throws {@link CloudHsmTagException} (client fault)
 *
 * The request was rejected because of a tagging failure. Verify the tag conditions in all applicable policies, and then retry the request.
 *
 * @throws {@link CloudHSMV2ServiceException}
 *
 * Base exception class for all service exceptions from CloudHSMV2 service.
 *
 * @public
 */
export class DescribeBackupsCommand extends command<DescribeBackupsCommandInput, DescribeBackupsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBackups",
  DescribeBackups$
) {
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
