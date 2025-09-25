// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { EnableMacieRequest, EnableMacieResponse } from "../models/models_0";
import { EnableMacie } from "../schemas/schemas_15_Macie";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableMacieCommand}.
 */
export interface EnableMacieCommandInput extends EnableMacieRequest {}
/**
 * @public
 *
 * The output of {@link EnableMacieCommand}.
 */
export interface EnableMacieCommandOutput extends EnableMacieResponse, __MetadataBearer {}

/**
 * <p>Enables Amazon Macie and specifies the configuration settings for a Macie account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, EnableMacieCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, EnableMacieCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // EnableMacieRequest
 *   clientToken: "STRING_VALUE",
 *   findingPublishingFrequency: "FIFTEEN_MINUTES" || "ONE_HOUR" || "SIX_HOURS",
 *   status: "PAUSED" || "ENABLED",
 * };
 * const command = new EnableMacieCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableMacieCommandInput - {@link EnableMacieCommandInput}
 * @returns {@link EnableMacieCommandOutput}
 * @see {@link EnableMacieCommandInput} for command's `input` shape.
 * @see {@link EnableMacieCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
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
export class EnableMacieCommand extends $Command
  .classBuilder<
    EnableMacieCommandInput,
    EnableMacieCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "EnableMacie", {})
  .n("Macie2Client", "EnableMacieCommand")
  .sc(EnableMacie)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableMacieRequest;
      output: {};
    };
    sdk: {
      input: EnableMacieCommandInput;
      output: EnableMacieCommandOutput;
    };
  };
}
