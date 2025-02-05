// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetBuiltinIntentRequest, GetBuiltinIntentResponse } from "../models/models_0";
import { de_GetBuiltinIntentCommand, se_GetBuiltinIntentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBuiltinIntentCommand}.
 */
export interface GetBuiltinIntentCommandInput extends GetBuiltinIntentRequest {}
/**
 * @public
 *
 * The output of {@link GetBuiltinIntentCommand}.
 */
export interface GetBuiltinIntentCommandOutput extends GetBuiltinIntentResponse, __MetadataBearer {}

/**
 * <p>Returns information about a built-in intent.</p>
 *          <p>This operation requires permission for the
 *         <code>lex:GetBuiltinIntent</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBuiltinIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBuiltinIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBuiltinIntentRequest
 *   signature: "STRING_VALUE", // required
 * };
 * const command = new GetBuiltinIntentCommand(input);
 * const response = await client.send(command);
 * // { // GetBuiltinIntentResponse
 * //   signature: "STRING_VALUE",
 * //   supportedLocales: [ // LocaleList
 * //     "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 * //   ],
 * //   slots: [ // BuiltinIntentSlotList
 * //     { // BuiltinIntentSlot
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBuiltinIntentCommandInput - {@link GetBuiltinIntentCommandInput}
 * @returns {@link GetBuiltinIntentCommandOutput}
 * @see {@link GetBuiltinIntentCommandInput} for command's `input` shape.
 * @see {@link GetBuiltinIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 * @public
 */
export class GetBuiltinIntentCommand extends $Command
  .classBuilder<
    GetBuiltinIntentCommandInput,
    GetBuiltinIntentCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseModelBuildingService", "GetBuiltinIntent", {})
  .n("LexModelBuildingServiceClient", "GetBuiltinIntentCommand")
  .f(void 0, void 0)
  .ser(se_GetBuiltinIntentCommand)
  .de(de_GetBuiltinIntentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBuiltinIntentRequest;
      output: GetBuiltinIntentResponse;
    };
    sdk: {
      input: GetBuiltinIntentCommandInput;
      output: GetBuiltinIntentCommandOutput;
    };
  };
}
