// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImportJobsRequest, ListImportJobsResponse } from "../models/models_0";
import { ListImportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListImportJobsCommand}.
 */
export interface ListImportJobsCommandInput extends ListImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListImportJobsCommand}.
 */
export interface ListImportJobsCommandOutput extends ListImportJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the import jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListImportJobsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListImportJobsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // ListImportJobsRequest
 *   ImportDestinationType: "SUPPRESSION_LIST" || "CONTACT_LIST",
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListImportJobsResponse
 * //   ImportJobs: [ // ImportJobSummaryList
 * //     { // ImportJobSummary
 * //       JobId: "STRING_VALUE",
 * //       ImportDestination: { // ImportDestination
 * //         SuppressionListDestination: { // SuppressionListDestination
 * //           SuppressionListImportAction: "DELETE" || "PUT", // required
 * //         },
 * //         ContactListDestination: { // ContactListDestination
 * //           ContactListName: "STRING_VALUE", // required
 * //           ContactListImportAction: "DELETE" || "PUT", // required
 * //         },
 * //       },
 * //       JobStatus: "CREATED" || "PROCESSING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       ProcessedRecordsCount: Number("int"),
 * //       FailedRecordsCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportJobsCommandInput - {@link ListImportJobsCommandInput}
 * @returns {@link ListImportJobsCommandOutput}
 * @see {@link ListImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListImportJobsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class ListImportJobsCommand extends command<ListImportJobsCommandInput, ListImportJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListImportJobs",
  ListImportJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImportJobsRequest;
      output: ListImportJobsResponse;
    };
    sdk: {
      input: ListImportJobsCommandInput;
      output: ListImportJobsCommandOutput;
    };
  };
}
