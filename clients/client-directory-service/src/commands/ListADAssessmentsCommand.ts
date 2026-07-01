// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListADAssessmentsRequest, ListADAssessmentsResult } from "../models/models_0";
import { ListADAssessments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListADAssessmentsCommand}.
 */
export interface ListADAssessmentsCommandInput extends ListADAssessmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListADAssessmentsCommand}.
 */
export interface ListADAssessmentsCommandOutput extends ListADAssessmentsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list of directory assessments for the specified directory or all
 *             assessments in your account. Use this operation to monitor assessment status and manage
 *             multiple assessments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListADAssessmentsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListADAssessmentsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // ListADAssessmentsRequest
 *   DirectoryId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListADAssessmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListADAssessmentsResult
 * //   Assessments: [ // Assessments
 * //     { // AssessmentSummary
 * //       AssessmentId: "STRING_VALUE",
 * //       DirectoryId: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       LastUpdateDateTime: new Date("TIMESTAMP"),
 * //       Status: "STRING_VALUE",
 * //       CustomerDnsIps: [ // CustomerDnsIps
 * //         "STRING_VALUE",
 * //       ],
 * //       ReportType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListADAssessmentsCommandInput - {@link ListADAssessmentsCommandInput}
 * @returns {@link ListADAssessmentsCommandOutput}
 * @see {@link ListADAssessmentsCommandInput} for command's `input` shape.
 * @see {@link ListADAssessmentsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class ListADAssessmentsCommand extends command<ListADAssessmentsCommandInput, ListADAssessmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListADAssessments",
  ListADAssessments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListADAssessmentsRequest;
      output: ListADAssessmentsResult;
    };
    sdk: {
      input: ListADAssessmentsCommandInput;
      output: ListADAssessmentsCommandOutput;
    };
  };
}
