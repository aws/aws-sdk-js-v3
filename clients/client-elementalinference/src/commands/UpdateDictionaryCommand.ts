// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDictionaryRequest, UpdateDictionaryResponse } from "../models/models_0";
import { UpdateDictionary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the specified dictionary.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the action doesn't exist.
 *
 * @throws {@link TooManyRequestException} (client fault)
 *
 * The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying.
 *
 * @throws {@link ElementalInferenceServiceException}
 *
 * Base exception class for all service exceptions from ElementalInference service.
 *
 * @public
 */
export class UpdateDictionaryCommand extends command<UpdateDictionaryCommandInput, UpdateDictionaryCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDictionary",
  UpdateDictionary$
) {
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
