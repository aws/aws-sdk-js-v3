// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDocumentClassifierSummariesRequest,
  ListDocumentClassifierSummariesResponse,
} from "../models/models_0";
import { ListDocumentClassifierSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDocumentClassifierSummariesCommand}.
 */
export interface ListDocumentClassifierSummariesCommandInput extends ListDocumentClassifierSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListDocumentClassifierSummariesCommand}.
 */
export interface ListDocumentClassifierSummariesCommandOutput extends ListDocumentClassifierSummariesResponse, __MetadataBearer {}

/**
 * Gets a list of summaries of the document classifiers that you have created
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListDocumentClassifierSummariesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListDocumentClassifierSummariesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListDocumentClassifierSummariesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDocumentClassifierSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListDocumentClassifierSummariesResponse
 * //   DocumentClassifierSummariesList: [ // DocumentClassifierSummariesList
 * //     { // DocumentClassifierSummary
 * //       DocumentClassifierName: "STRING_VALUE",
 * //       NumberOfVersions: Number("int"),
 * //       LatestVersionCreatedAt: new Date("TIMESTAMP"),
 * //       LatestVersionName: "STRING_VALUE",
 * //       LatestVersionStatus: "SUBMITTED" || "TRAINING" || "DELETING" || "STOP_REQUESTED" || "STOPPED" || "IN_ERROR" || "TRAINED" || "TRAINED_WITH_WARNING",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDocumentClassifierSummariesCommandInput - {@link ListDocumentClassifierSummariesCommandInput}
 * @returns {@link ListDocumentClassifierSummariesCommandOutput}
 * @see {@link ListDocumentClassifierSummariesCommandInput} for command's `input` shape.
 * @see {@link ListDocumentClassifierSummariesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ComprehendServiceException}
 *
 * Base exception class for all service exceptions from Comprehend service.
 *
 * @public
 */
export class ListDocumentClassifierSummariesCommand extends command<ListDocumentClassifierSummariesCommandInput, ListDocumentClassifierSummariesCommandOutput>(
  _ep0,
  _mw0,
  "ListDocumentClassifierSummaries",
  ListDocumentClassifierSummaries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDocumentClassifierSummariesRequest;
      output: ListDocumentClassifierSummariesResponse;
    };
    sdk: {
      input: ListDocumentClassifierSummariesCommandInput;
      output: ListDocumentClassifierSummariesCommandOutput;
    };
  };
}
