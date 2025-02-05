// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { UpdateRevealConfigurationRequest, UpdateRevealConfigurationResponse } from "../models/models_1";
import { de_UpdateRevealConfigurationCommand, se_UpdateRevealConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRevealConfigurationCommand}.
 */
export interface UpdateRevealConfigurationCommandInput extends UpdateRevealConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRevealConfigurationCommand}.
 */
export interface UpdateRevealConfigurationCommandOutput extends UpdateRevealConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateRevealConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateRevealConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Macie2Client(config);
 * const input = { // UpdateRevealConfigurationRequest
 *   configuration: { // RevealConfiguration
 *     kmsKeyId: "STRING_VALUE",
 *     status: "ENABLED" || "DISABLED", // required
 *   },
 *   retrievalConfiguration: { // UpdateRetrievalConfiguration
 *     retrievalMode: "CALLER_CREDENTIALS" || "ASSUME_ROLE", // required
 *     roleName: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateRevealConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRevealConfigurationResponse
 * //   configuration: { // RevealConfiguration
 * //     kmsKeyId: "STRING_VALUE",
 * //     status: "ENABLED" || "DISABLED", // required
 * //   },
 * //   retrievalConfiguration: { // RetrievalConfiguration
 * //     externalId: "STRING_VALUE",
 * //     retrievalMode: "CALLER_CREDENTIALS" || "ASSUME_ROLE", // required
 * //     roleName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRevealConfigurationCommandInput - {@link UpdateRevealConfigurationCommandInput}
 * @returns {@link UpdateRevealConfigurationCommandOutput}
 * @see {@link UpdateRevealConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateRevealConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 * @public
 */
export class UpdateRevealConfigurationCommand extends $Command
  .classBuilder<
    UpdateRevealConfigurationCommandInput,
    UpdateRevealConfigurationCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "UpdateRevealConfiguration", {})
  .n("Macie2Client", "UpdateRevealConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRevealConfigurationCommand)
  .de(de_UpdateRevealConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRevealConfigurationRequest;
      output: UpdateRevealConfigurationResponse;
    };
    sdk: {
      input: UpdateRevealConfigurationCommandInput;
      output: UpdateRevealConfigurationCommandOutput;
    };
  };
}
