// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetRevealConfigurationRequest, GetRevealConfigurationResponse } from "../models/models_0";
import { GetRevealConfiguration } from "../schemas/schemas_3_Configuration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRevealConfigurationCommand}.
 */
export interface GetRevealConfigurationCommandInput extends GetRevealConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetRevealConfigurationCommand}.
 */
export interface GetRevealConfigurationCommandOutput extends GetRevealConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetRevealConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetRevealConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = {};
 * const command = new GetRevealConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetRevealConfigurationResponse
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
 * @param GetRevealConfigurationCommandInput - {@link GetRevealConfigurationCommandInput}
 * @returns {@link GetRevealConfigurationCommandOutput}
 * @see {@link GetRevealConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetRevealConfigurationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetRevealConfigurationCommand extends $Command
  .classBuilder<
    GetRevealConfigurationCommandInput,
    GetRevealConfigurationCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "GetRevealConfiguration", {})
  .n("Macie2Client", "GetRevealConfigurationCommand")
  .sc(GetRevealConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetRevealConfigurationResponse;
    };
    sdk: {
      input: GetRevealConfigurationCommandInput;
      output: GetRevealConfigurationCommandOutput;
    };
  };
}
