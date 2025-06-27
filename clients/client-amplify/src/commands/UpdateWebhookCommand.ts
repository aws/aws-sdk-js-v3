// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWebhookRequest, UpdateWebhookResult } from "../models/models_0";
import { de_UpdateWebhookCommand, se_UpdateWebhookCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWebhookCommand}.
 */
export interface UpdateWebhookCommandInput extends UpdateWebhookRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWebhookCommand}.
 */
export interface UpdateWebhookCommandOutput extends UpdateWebhookResult, __MetadataBearer {}

/**
 * <p>Updates a webhook. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, UpdateWebhookCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, UpdateWebhookCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // UpdateWebhookRequest
 *   webhookId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateWebhookCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWebhookResult
 * //   webhook: { // Webhook
 * //     webhookArn: "STRING_VALUE", // required
 * //     webhookId: "STRING_VALUE", // required
 * //     webhookUrl: "STRING_VALUE", // required
 * //     appId: "STRING_VALUE",
 * //     branchName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWebhookCommandInput - {@link UpdateWebhookCommandInput}
 * @returns {@link UpdateWebhookCommandOutput}
 * @see {@link UpdateWebhookCommandInput} for command's `input` shape.
 * @see {@link UpdateWebhookCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link DependentServiceFailureException} (server fault)
 *  <p>An operation failed because a dependent service threw an exception. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 *
 * @public
 */
export class UpdateWebhookCommand extends $Command
  .classBuilder<
    UpdateWebhookCommandInput,
    UpdateWebhookCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Amplify", "UpdateWebhook", {})
  .n("AmplifyClient", "UpdateWebhookCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWebhookCommand)
  .de(de_UpdateWebhookCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWebhookRequest;
      output: UpdateWebhookResult;
    };
    sdk: {
      input: UpdateWebhookCommandInput;
      output: UpdateWebhookCommandOutput;
    };
  };
}
