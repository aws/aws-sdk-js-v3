// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElementalInferenceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElementalInferenceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDictionariesRequest, ListDictionariesResponse } from "../models/models_0";
import { ListDictionaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDictionariesCommand}.
 */
export interface ListDictionariesCommandInput extends ListDictionariesRequest {}
/**
 * @public
 *
 * The output of {@link ListDictionariesCommand}.
 */
export interface ListDictionariesCommandOutput extends ListDictionariesResponse, __MetadataBearer {}

/**
 * <p>Lists the dictionaries in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, ListDictionariesCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, ListDictionariesCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // ListDictionariesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDictionariesCommand(input);
 * const response = await client.send(command);
 * // { // ListDictionariesResponse
 * //   dictionaries: [ // DictionarySummaryList // required
 * //     { // DictionarySummary
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       language: "eng" || "fra" || "ita" || "deu" || "spa" || "por", // required
 * //       status: "CREATING" || "AVAILABLE" || "REFERENCED" || "DELETING" || "DELETED", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDictionariesCommandInput - {@link ListDictionariesCommandInput}
 * @returns {@link ListDictionariesCommandOutput}
 * @see {@link ListDictionariesCommandInput} for command's `input` shape.
 * @see {@link ListDictionariesCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link TooManyRequestException} (client fault)
 *  <p>The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying. </p>
 *
 * @throws {@link ElementalInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElementalInference service.</p>
 *
 *
 * @public
 */
export class ListDictionariesCommand extends $Command
  .classBuilder<
    ListDictionariesCommandInput,
    ListDictionariesCommandOutput,
    ElementalInferenceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElementalInferenceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElementalInference", "ListDictionaries", {})
  .n("ElementalInferenceClient", "ListDictionariesCommand")
  .sc(ListDictionaries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDictionariesRequest;
      output: ListDictionariesResponse;
    };
    sdk: {
      input: ListDictionariesCommandInput;
      output: ListDictionariesCommandOutput;
    };
  };
}
