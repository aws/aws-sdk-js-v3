// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDefaultScraperConfigurationRequest, GetDefaultScraperConfigurationResponse } from "../models/models_0";
import {
  de_GetDefaultScraperConfigurationCommand,
  se_GetDefaultScraperConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDefaultScraperConfigurationCommand}.
 */
export interface GetDefaultScraperConfigurationCommandInput extends GetDefaultScraperConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetDefaultScraperConfigurationCommand}.
 */
export interface GetDefaultScraperConfigurationCommandOutput
  extends GetDefaultScraperConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>The <code>GetDefaultScraperConfiguration</code> operation returns the default scraper configuration used when Amazon EKS creates a scraper for you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, GetDefaultScraperConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, GetDefaultScraperConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = {};
 * const command = new GetDefaultScraperConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetDefaultScraperConfigurationResponse
 * //   configuration: new Uint8Array(), // required
 * // };
 *
 * ```
 *
 * @param GetDefaultScraperConfigurationCommandInput - {@link GetDefaultScraperConfigurationCommandInput}
 * @returns {@link GetDefaultScraperConfigurationCommandOutput}
 * @see {@link GetDefaultScraperConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetDefaultScraperConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @example GetDefaultScraperConfiguration
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new GetDefaultScraperConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configuration: "blob"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDefaultScraperConfigurationCommand extends $Command
  .classBuilder<
    GetDefaultScraperConfigurationCommandInput,
    GetDefaultScraperConfigurationCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "GetDefaultScraperConfiguration", {})
  .n("AmpClient", "GetDefaultScraperConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetDefaultScraperConfigurationCommand)
  .de(de_GetDefaultScraperConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDefaultScraperConfigurationResponse;
    };
    sdk: {
      input: GetDefaultScraperConfigurationCommandInput;
      output: GetDefaultScraperConfigurationCommandOutput;
    };
  };
}
