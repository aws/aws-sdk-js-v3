// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecurityHubV2Request, DescribeSecurityHubV2Response } from "../models/models_2";
import { de_DescribeSecurityHubV2Command, se_DescribeSecurityHubV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityHubV2Command}.
 */
export interface DescribeSecurityHubV2CommandInput extends DescribeSecurityHubV2Request {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityHubV2Command}.
 */
export interface DescribeSecurityHubV2CommandOutput extends DescribeSecurityHubV2Response, __MetadataBearer {}

/**
 * <p>Returns details about the service resource in your account. This API is in public preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeSecurityHubV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeSecurityHubV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = {};
 * const command = new DescribeSecurityHubV2Command(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityHubV2Response
 * //   HubV2Arn: "STRING_VALUE",
 * //   SubscribedAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSecurityHubV2CommandInput - {@link DescribeSecurityHubV2CommandInput}
 * @returns {@link DescribeSecurityHubV2CommandOutput}
 * @see {@link DescribeSecurityHubV2CommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityHubV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class DescribeSecurityHubV2Command extends $Command
  .classBuilder<
    DescribeSecurityHubV2CommandInput,
    DescribeSecurityHubV2CommandOutput,
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
  .s("SecurityHubAPIService", "DescribeSecurityHubV2", {})
  .n("SecurityHubClient", "DescribeSecurityHubV2Command")
  .f(void 0, void 0)
  .ser(se_DescribeSecurityHubV2Command)
  .de(de_DescribeSecurityHubV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeSecurityHubV2Response;
    };
    sdk: {
      input: DescribeSecurityHubV2CommandInput;
      output: DescribeSecurityHubV2CommandOutput;
    };
  };
}
