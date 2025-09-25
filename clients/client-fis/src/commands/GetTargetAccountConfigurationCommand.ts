// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { GetTargetAccountConfigurationRequest, GetTargetAccountConfigurationResponse } from "../models/models_0";
import { GetTargetAccountConfiguration } from "../schemas/schemas_2_Account";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTargetAccountConfigurationCommand}.
 */
export interface GetTargetAccountConfigurationCommandInput extends GetTargetAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetTargetAccountConfigurationCommand}.
 */
export interface GetTargetAccountConfigurationCommandOutput
  extends GetTargetAccountConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about the specified target account configuration of the experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetTargetAccountConfigurationCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetTargetAccountConfigurationCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // GetTargetAccountConfigurationRequest
 *   experimentTemplateId: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new GetTargetAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetTargetAccountConfigurationResponse
 * //   targetAccountConfiguration: { // TargetAccountConfiguration
 * //     roleArn: "STRING_VALUE",
 * //     accountId: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTargetAccountConfigurationCommandInput - {@link GetTargetAccountConfigurationCommandInput}
 * @returns {@link GetTargetAccountConfigurationCommandOutput}
 * @see {@link GetTargetAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetTargetAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 *
 * @public
 */
export class GetTargetAccountConfigurationCommand extends $Command
  .classBuilder<
    GetTargetAccountConfigurationCommandInput,
    GetTargetAccountConfigurationCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FaultInjectionSimulator", "GetTargetAccountConfiguration", {})
  .n("FisClient", "GetTargetAccountConfigurationCommand")
  .sc(GetTargetAccountConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTargetAccountConfigurationRequest;
      output: GetTargetAccountConfigurationResponse;
    };
    sdk: {
      input: GetTargetAccountConfigurationCommandInput;
      output: GetTargetAccountConfigurationCommandOutput;
    };
  };
}
