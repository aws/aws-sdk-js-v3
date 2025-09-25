// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEntityRecognizerSummariesRequest, ListEntityRecognizerSummariesResponse } from "../models/models_0";
import { ListEntityRecognizerSummaries } from "../schemas/schemas_3_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEntityRecognizerSummariesCommand}.
 */
export interface ListEntityRecognizerSummariesCommandInput extends ListEntityRecognizerSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListEntityRecognizerSummariesCommand}.
 */
export interface ListEntityRecognizerSummariesCommandOutput
  extends ListEntityRecognizerSummariesResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of summaries for the entity recognizers that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListEntityRecognizerSummariesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListEntityRecognizerSummariesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListEntityRecognizerSummariesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEntityRecognizerSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListEntityRecognizerSummariesResponse
 * //   EntityRecognizerSummariesList: [ // EntityRecognizerSummariesList
 * //     { // EntityRecognizerSummary
 * //       RecognizerName: "STRING_VALUE",
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
 * @param ListEntityRecognizerSummariesCommandInput - {@link ListEntityRecognizerSummariesCommandInput}
 * @returns {@link ListEntityRecognizerSummariesCommandOutput}
 * @see {@link ListEntityRecognizerSummariesCommandInput} for command's `input` shape.
 * @see {@link ListEntityRecognizerSummariesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class ListEntityRecognizerSummariesCommand extends $Command
  .classBuilder<
    ListEntityRecognizerSummariesCommandInput,
    ListEntityRecognizerSummariesCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "ListEntityRecognizerSummaries", {})
  .n("ComprehendClient", "ListEntityRecognizerSummariesCommand")
  .sc(ListEntityRecognizerSummaries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEntityRecognizerSummariesRequest;
      output: ListEntityRecognizerSummariesResponse;
    };
    sdk: {
      input: ListEntityRecognizerSummariesCommandInput;
      output: ListEntityRecognizerSummariesCommandOutput;
    };
  };
}
