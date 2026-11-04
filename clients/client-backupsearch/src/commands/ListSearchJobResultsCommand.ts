// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSearchJobResultsInput, ListSearchJobResultsOutput } from "../models/models_0";
import { ListSearchJobResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSearchJobResultsCommand}.
 */
export interface ListSearchJobResultsCommandInput extends ListSearchJobResultsInput {}
/**
 * @public
 *
 * The output of {@link ListSearchJobResultsCommand}.
 */
export interface ListSearchJobResultsCommandOutput extends ListSearchJobResultsOutput, __MetadataBearer {}

/**
 * This operation returns a list of a specified search job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupSearchClient, ListSearchJobResultsCommand } from "@aws-sdk/client-backupsearch"; // ES Modules import
 * // const { BackupSearchClient, ListSearchJobResultsCommand } = require("@aws-sdk/client-backupsearch"); // CommonJS import
 * // import type { BackupSearchClientConfig } from "@aws-sdk/client-backupsearch";
 * const config = {}; // type is BackupSearchClientConfig
 * const client = new BackupSearchClient(config);
 * const input = { // ListSearchJobResultsInput
 *   SearchJobIdentifier: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSearchJobResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListSearchJobResultsOutput
 * //   Results: [ // Results // required
 * //     { // ResultItem Union: only one key present
 * //       S3ResultItem: { // S3ResultItem
 * //         BackupResourceArn: "STRING_VALUE",
 * //         SourceResourceArn: "STRING_VALUE",
 * //         BackupVaultName: "STRING_VALUE",
 * //         ObjectKey: "STRING_VALUE",
 * //         ObjectSize: Number("long"),
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         ETag: "STRING_VALUE",
 * //         VersionId: "STRING_VALUE",
 * //       },
 * //       EBSResultItem: { // EBSResultItem
 * //         BackupResourceArn: "STRING_VALUE",
 * //         SourceResourceArn: "STRING_VALUE",
 * //         BackupVaultName: "STRING_VALUE",
 * //         FileSystemIdentifier: "STRING_VALUE",
 * //         FilePath: "STRING_VALUE",
 * //         FileSize: Number("long"),
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         LastModifiedTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSearchJobResultsCommandInput - {@link ListSearchJobResultsCommandInput}
 * @returns {@link ListSearchJobResultsCommandOutput}
 * @see {@link ListSearchJobResultsCommandInput} for command's `input` shape.
 * @see {@link ListSearchJobResultsCommandOutput} for command's `response` shape.
 * @see {@link BackupSearchClientResolvedConfig | config} for BackupSearchClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found for this request.
 *
 * Confirm the resource information, such as the ARN or type is correct and exists, then retry the request.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link BackupSearchServiceException}
 *
 * Base exception class for all service exceptions from BackupSearch service.
 *
 * @public
 */
export class ListSearchJobResultsCommand extends command<ListSearchJobResultsCommandInput, ListSearchJobResultsCommandOutput>(
  _ep0,
  _mw0,
  "ListSearchJobResults",
  ListSearchJobResults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSearchJobResultsInput;
      output: ListSearchJobResultsOutput;
    };
    sdk: {
      input: ListSearchJobResultsCommandInput;
      output: ListSearchJobResultsCommandOutput;
    };
  };
}
