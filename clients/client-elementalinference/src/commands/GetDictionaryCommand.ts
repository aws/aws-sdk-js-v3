// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDictionaryRequest, GetDictionaryResponse } from "../models/models_0";
import { GetDictionary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDictionaryCommand}.
 */
export interface GetDictionaryCommandInput extends GetDictionaryRequest {}
/**
 * @public
 *
 * The output of {@link GetDictionaryCommand}.
 */
export interface GetDictionaryCommandOutput extends GetDictionaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified dictionary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, GetDictionaryCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, GetDictionaryCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // GetDictionaryRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetDictionaryCommand(input);
 * const response = await client.send(command);
 * // { // GetDictionaryResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   language: "eng" || "fra" || "ita" || "deu" || "spa" || "por", // required
 * //   status: "CREATING" || "AVAILABLE" || "REFERENCED" || "DELETING" || "DELETED", // required
 * //   references: [ // FeedReferences
 * //     "STRING_VALUE",
 * //   ],
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDictionaryCommandInput - {@link GetDictionaryCommandInput}
 * @returns {@link GetDictionaryCommandOutput}
 * @see {@link GetDictionaryCommandInput} for command's `input` shape.
 * @see {@link GetDictionaryCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the action doesn't exist.</p>
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
export class GetDictionaryCommand extends command<GetDictionaryCommandInput, GetDictionaryCommandOutput>(
  _ep0,
  _mw0,
  "GetDictionary",
  GetDictionary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDictionaryRequest;
      output: GetDictionaryResponse;
    };
    sdk: {
      input: GetDictionaryCommandInput;
      output: GetDictionaryCommandOutput;
    };
  };
}
