// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccountSettingRequest, PutAccountSettingResponse } from "../models/models_0";
import { PutAccountSetting } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccountSettingCommand}.
 */
export interface PutAccountSettingCommandInput extends PutAccountSettingRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountSettingCommand}.
 */
export interface PutAccountSettingCommandOutput extends PutAccountSettingResponse, __MetadataBearer {}

/**
 * <p>Allows you to change the basic scan type version or registry policy scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutAccountSettingCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutAccountSettingCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // PutAccountSettingRequest
 *   name: "STRING_VALUE", // required
 *   value: "STRING_VALUE", // required
 * };
 * const command = new PutAccountSettingCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountSettingResponse
 * //   name: "STRING_VALUE",
 * //   value: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutAccountSettingCommandInput - {@link PutAccountSettingCommandInput}
 * @returns {@link PutAccountSettingCommandOutput}
 * @see {@link PutAccountSettingCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @public
 */
export class PutAccountSettingCommand extends $Command
  .classBuilder<
    PutAccountSettingCommandInput,
    PutAccountSettingCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "PutAccountSetting", {})
  .n("ECRClient", "PutAccountSettingCommand")
  .sc(PutAccountSetting)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountSettingRequest;
      output: PutAccountSettingResponse;
    };
    sdk: {
      input: PutAccountSettingCommandInput;
      output: PutAccountSettingCommandOutput;
    };
  };
}
