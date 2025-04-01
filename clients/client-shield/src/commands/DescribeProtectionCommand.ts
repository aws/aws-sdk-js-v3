// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProtectionRequest, DescribeProtectionResponse } from "../models/models_0";
import { de_DescribeProtectionCommand, se_DescribeProtectionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProtectionCommand}.
 */
export interface DescribeProtectionCommandInput extends DescribeProtectionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProtectionCommand}.
 */
export interface DescribeProtectionCommandOutput extends DescribeProtectionResponse, __MetadataBearer {}

/**
 * <p>Lists the details of a <a>Protection</a> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeProtectionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeProtectionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = { // DescribeProtectionRequest
 *   ProtectionId: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE",
 * };
 * const command = new DescribeProtectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProtectionResponse
 * //   Protection: { // Protection
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     HealthCheckIds: [ // HealthCheckIds
 * //       "STRING_VALUE",
 * //     ],
 * //     ProtectionArn: "STRING_VALUE",
 * //     ApplicationLayerAutomaticResponseConfiguration: { // ApplicationLayerAutomaticResponseConfiguration
 * //       Status: "ENABLED" || "DISABLED", // required
 * //       Action: { // ResponseAction
 * //         Block: {},
 * //         Count: {},
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeProtectionCommandInput - {@link DescribeProtectionCommandInput}
 * @returns {@link DescribeProtectionCommandOutput}
 * @see {@link DescribeProtectionCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class DescribeProtectionCommand extends $Command
  .classBuilder<
    DescribeProtectionCommandInput,
    DescribeProtectionCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "DescribeProtection", {})
  .n("ShieldClient", "DescribeProtectionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProtectionCommand)
  .de(de_DescribeProtectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProtectionRequest;
      output: DescribeProtectionResponse;
    };
    sdk: {
      input: DescribeProtectionCommandInput;
      output: DescribeProtectionCommandOutput;
    };
  };
}
