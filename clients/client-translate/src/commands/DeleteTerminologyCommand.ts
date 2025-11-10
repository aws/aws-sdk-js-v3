// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTerminologyRequest } from "../models/models_0";
import { DeleteTerminology } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTerminologyCommand}.
 */
export interface DeleteTerminologyCommandInput extends DeleteTerminologyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTerminologyCommand}.
 */
export interface DeleteTerminologyCommandOutput extends __MetadataBearer {}

/**
 * <p>A synchronous action that deletes a custom terminology.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, DeleteTerminologyCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, DeleteTerminologyCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // import type { TranslateClientConfig } from "@aws-sdk/client-translate";
 * const config = {}; // type is TranslateClientConfig
 * const client = new TranslateClient(config);
 * const input = { // DeleteTerminologyRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteTerminologyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTerminologyCommandInput - {@link DeleteTerminologyCommandInput}
 * @returns {@link DeleteTerminologyCommandOutput}
 * @see {@link DeleteTerminologyCommandInput} for command's `input` shape.
 * @see {@link DeleteTerminologyCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 *
 * @public
 */
export class DeleteTerminologyCommand extends $Command
  .classBuilder<
    DeleteTerminologyCommandInput,
    DeleteTerminologyCommandOutput,
    TranslateClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranslateClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShineFrontendService_20170701", "DeleteTerminology", {})
  .n("TranslateClient", "DeleteTerminologyCommand")
  .sc(DeleteTerminology)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTerminologyRequest;
      output: {};
    };
    sdk: {
      input: DeleteTerminologyCommandInput;
      output: DeleteTerminologyCommandOutput;
    };
  };
}
