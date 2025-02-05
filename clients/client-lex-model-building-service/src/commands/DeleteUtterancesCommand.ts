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
import { DeleteUtterancesRequest } from "../models/models_0";
import { de_DeleteUtterancesCommand, se_DeleteUtterancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUtterancesCommand}.
 */
export interface DeleteUtterancesCommandInput extends DeleteUtterancesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUtterancesCommand}.
 */
export interface DeleteUtterancesCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes stored utterances.</p>
 *          <p>Amazon Lex stores the utterances that users send to your bot. Utterances
 *       are stored for 15 days for use with the <a>GetUtterancesView</a> operation, and then stored indefinitely for use in improving the
 *       ability of your bot to respond to user input.</p>
 *          <p>Use the <code>DeleteUtterances</code> operation to manually delete
 *       stored utterances for a specific user. When you use the
 *         <code>DeleteUtterances</code> operation, utterances stored for improving
 *       your bot's ability to respond to user input are deleted immediately.
 *       Utterances stored for use with the <code>GetUtterancesView</code>
 *       operation are deleted after 15 days.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteUtterances</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteUtterancesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteUtterancesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // DeleteUtterancesRequest
 *   botName: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUtterancesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUtterancesCommandInput - {@link DeleteUtterancesCommandInput}
 * @returns {@link DeleteUtterancesCommandOutput}
 * @see {@link DeleteUtterancesCommandInput} for command's `input` shape.
 * @see {@link DeleteUtterancesCommandOutput} for command's `response` shape.
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
export class DeleteUtterancesCommand extends $Command
  .classBuilder<
    DeleteUtterancesCommandInput,
    DeleteUtterancesCommandOutput,
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
  .s("AWSDeepSenseModelBuildingService", "DeleteUtterances", {})
  .n("LexModelBuildingServiceClient", "DeleteUtterancesCommand")
  .f(void 0, void 0)
  .ser(se_DeleteUtterancesCommand)
  .de(de_DeleteUtterancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUtterancesRequest;
      output: {};
    };
    sdk: {
      input: DeleteUtterancesCommandInput;
      output: DeleteUtterancesCommandOutput;
    };
  };
}
