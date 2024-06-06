// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { GetTargetAccountConfigurationRequest, GetTargetAccountConfigurationResponse } from "../models/models_0";
import {
  de_GetTargetAccountConfigurationCommand,
  se_GetTargetAccountConfigurationCommand,
} from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FaultInjectionSimulator", "GetTargetAccountConfiguration", {})
  .n("FisClient", "GetTargetAccountConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetTargetAccountConfigurationCommand)
  .de(de_GetTargetAccountConfigurationCommand)
  .build() {}
