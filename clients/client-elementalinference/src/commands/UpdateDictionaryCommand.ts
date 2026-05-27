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
import type { UpdateDictionaryRequest, UpdateDictionaryResponse } from "../models/models_0";
import { UpdateDictionary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDictionaryCommand}.
 */
export interface UpdateDictionaryCommandInput extends UpdateDictionaryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDictionaryCommand}.
 */
export interface UpdateDictionaryCommandOutput extends UpdateDictionaryResponse, __MetadataBearer {}

/**
 * <p>Updates the specified dictionary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, UpdateDictionaryCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, UpdateDictionaryCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // UpdateDictionaryRequest
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   language: "eng" || "fra" || "ita" || "deu" || "spa" || "por",
 *   entries: "STRING_VALUE",
 * };
 * const command = new UpdateDictionaryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDictionaryResponse
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
 * @param UpdateDictionaryCommandInput - {@link UpdateDictionaryCommandInput}
 * @returns {@link UpdateDictionaryCommandOutput}
 * @see {@link UpdateDictionaryCommandInput} for command's `input` shape.
 * @see {@link UpdateDictionaryCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict.</p>
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
export class UpdateDictionaryCommand extends $Command
  .classBuilder<
    UpdateDictionaryCommandInput,
    UpdateDictionaryCommandOutput,
    ElementalInferenceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElementalInferenceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElementalInference", "UpdateDictionary", {})
  .n("ElementalInferenceClient", "UpdateDictionaryCommand")
  .sc(UpdateDictionary$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDictionaryRequest;
      output: UpdateDictionaryResponse;
    };
    sdk: {
      input: UpdateDictionaryCommandInput;
      output: UpdateDictionaryCommandOutput;
    };
  };
}
