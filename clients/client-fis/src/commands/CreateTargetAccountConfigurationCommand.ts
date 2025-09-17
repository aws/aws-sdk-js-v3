// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { CreateTargetAccountConfigurationRequest, CreateTargetAccountConfigurationResponse } from "../models/models_0";
import {
  de_CreateTargetAccountConfigurationCommand,
  se_CreateTargetAccountConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTargetAccountConfigurationCommand}.
 */
export interface CreateTargetAccountConfigurationCommandInput extends CreateTargetAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateTargetAccountConfigurationCommand}.
 */
export interface CreateTargetAccountConfigurationCommandOutput
  extends CreateTargetAccountConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a target account configuration for the experiment template. A target account configuration
 *       is required when <code>accountTargeting</code> of <code>experimentOptions</code> is set to <code>multi-account</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-options.html">experiment options</a>
 *       in the <i>Fault Injection Service User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, CreateTargetAccountConfigurationCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, CreateTargetAccountConfigurationCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // CreateTargetAccountConfigurationRequest
 *   clientToken: "STRING_VALUE",
 *   experimentTemplateId: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateTargetAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateTargetAccountConfigurationResponse
 * //   targetAccountConfiguration: { // TargetAccountConfiguration
 * //     roleArn: "STRING_VALUE",
 * //     accountId: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTargetAccountConfigurationCommandInput - {@link CreateTargetAccountConfigurationCommandInput}
 * @returns {@link CreateTargetAccountConfigurationCommandOutput}
 * @see {@link CreateTargetAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateTargetAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of a conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota.</p>
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
export class CreateTargetAccountConfigurationCommand extends $Command
  .classBuilder<
    CreateTargetAccountConfigurationCommandInput,
    CreateTargetAccountConfigurationCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FaultInjectionSimulator", "CreateTargetAccountConfiguration", {})
  .n("FisClient", "CreateTargetAccountConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateTargetAccountConfigurationCommand)
  .de(de_CreateTargetAccountConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTargetAccountConfigurationRequest;
      output: CreateTargetAccountConfigurationResponse;
    };
    sdk: {
      input: CreateTargetAccountConfigurationCommandInput;
      output: CreateTargetAccountConfigurationCommandOutput;
    };
  };
}
