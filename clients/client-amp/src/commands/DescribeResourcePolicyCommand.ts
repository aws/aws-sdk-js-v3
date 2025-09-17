// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeResourcePolicyRequest, DescribeResourcePolicyResponse } from "../models/models_0";
import { de_DescribeResourcePolicyCommand, se_DescribeResourcePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourcePolicyCommand}.
 */
export interface DescribeResourcePolicyCommandInput extends DescribeResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourcePolicyCommand}.
 */
export interface DescribeResourcePolicyCommandOutput extends DescribeResourcePolicyResponse, __MetadataBearer {}

/**
 * <p>Returns information about the resource-based policy attached to an Amazon Managed Service for Prometheus workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeResourcePolicyCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeResourcePolicyCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DescribeResourcePolicyRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourcePolicyResponse
 * //   policyDocument: "STRING_VALUE", // required
 * //   policyStatus: "STRING_VALUE", // required
 * //   revisionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeResourcePolicyCommandInput - {@link DescribeResourcePolicyCommandInput}
 * @returns {@link DescribeResourcePolicyCommandOutput}
 * @see {@link DescribeResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class DescribeResourcePolicyCommand extends $Command
  .classBuilder<
    DescribeResourcePolicyCommandInput,
    DescribeResourcePolicyCommandOutput,
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
  .s("AmazonPrometheusService", "DescribeResourcePolicy", {})
  .n("AmpClient", "DescribeResourcePolicyCommand")
  .f(void 0, void 0)
  .ser(se_DescribeResourcePolicyCommand)
  .de(de_DescribeResourcePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourcePolicyRequest;
      output: DescribeResourcePolicyResponse;
    };
    sdk: {
      input: DescribeResourcePolicyCommandInput;
      output: DescribeResourcePolicyCommandOutput;
    };
  };
}
