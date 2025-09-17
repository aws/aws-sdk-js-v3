// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInsightRequest, DeleteInsightResponse } from "../models/models_2";
import { de_DeleteInsightCommand, se_DeleteInsightCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInsightCommand}.
 */
export interface DeleteInsightCommandInput extends DeleteInsightRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInsightCommand}.
 */
export interface DeleteInsightCommandOutput extends DeleteInsightResponse, __MetadataBearer {}

/**
 * <p>Deletes the insight specified by the <code>InsightArn</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteInsightCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteInsightCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteInsightRequest
 *   InsightArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteInsightCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInsightResponse
 * //   InsightArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteInsightCommandInput - {@link DeleteInsightCommandInput}
 * @returns {@link DeleteInsightCommandOutput}
 * @see {@link DeleteInsightCommandInput} for command's `input` shape.
 * @see {@link DeleteInsightCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To delete a custom insight
 * ```javascript
 * // The following example deletes a custom insight in Security Hub.
 * const input = {
 *   InsightArn: "arn:aws:securityhub:us-west-1:123456789012:insight/123456789012/custom/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new DeleteInsightCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InsightArn: "arn:aws:securityhub:eu-central-1:123456789012:insight/123456789012/custom/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteInsightCommand extends $Command
  .classBuilder<
    DeleteInsightCommandInput,
    DeleteInsightCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "DeleteInsight", {})
  .n("SecurityHubClient", "DeleteInsightCommand")
  .f(void 0, void 0)
  .ser(se_DeleteInsightCommand)
  .de(de_DeleteInsightCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInsightRequest;
      output: DeleteInsightResponse;
    };
    sdk: {
      input: DeleteInsightCommandInput;
      output: DeleteInsightCommandOutput;
    };
  };
}
