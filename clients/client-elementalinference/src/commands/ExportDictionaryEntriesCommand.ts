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
import type { ExportDictionaryEntriesRequest, ExportDictionaryEntriesResponse } from "../models/models_0";
import { ExportDictionaryEntries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportDictionaryEntriesCommand}.
 */
export interface ExportDictionaryEntriesCommandInput extends ExportDictionaryEntriesRequest {}
/**
 * @public
 *
 * The output of {@link ExportDictionaryEntriesCommand}.
 */
export interface ExportDictionaryEntriesCommandOutput extends ExportDictionaryEntriesResponse, __MetadataBearer {}

/**
 * <p>Exports the entries from the specified dictionary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, ExportDictionaryEntriesCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, ExportDictionaryEntriesCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // ExportDictionaryEntriesRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new ExportDictionaryEntriesCommand(input);
 * const response = await client.send(command);
 * // { // ExportDictionaryEntriesResponse
 * //   entries: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportDictionaryEntriesCommandInput - {@link ExportDictionaryEntriesCommandInput}
 * @returns {@link ExportDictionaryEntriesCommandOutput}
 * @see {@link ExportDictionaryEntriesCommandInput} for command's `input` shape.
 * @see {@link ExportDictionaryEntriesCommandOutput} for command's `response` shape.
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
export class ExportDictionaryEntriesCommand extends $Command
  .classBuilder<
    ExportDictionaryEntriesCommandInput,
    ExportDictionaryEntriesCommandOutput,
    ElementalInferenceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElementalInferenceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElementalInference", "ExportDictionaryEntries", {})
  .n("ElementalInferenceClient", "ExportDictionaryEntriesCommand")
  .sc(ExportDictionaryEntries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportDictionaryEntriesRequest;
      output: ExportDictionaryEntriesResponse;
    };
    sdk: {
      input: ExportDictionaryEntriesCommandInput;
      output: ExportDictionaryEntriesCommandOutput;
    };
  };
}
