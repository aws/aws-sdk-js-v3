// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDRTAccessRequest, DescribeDRTAccessResponse } from "../models/models_0";
import { de_DescribeDRTAccessCommand, se_DescribeDRTAccessCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDRTAccessCommand}.
 */
export interface DescribeDRTAccessCommandInput extends DescribeDRTAccessRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDRTAccessCommand}.
 */
export interface DescribeDRTAccessCommandOutput extends DescribeDRTAccessResponse, __MetadataBearer {}

/**
 * <p>Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeDRTAccessCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeDRTAccessCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = {};
 * const command = new DescribeDRTAccessCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDRTAccessResponse
 * //   RoleArn: "STRING_VALUE",
 * //   LogBucketList: [ // LogBucketList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDRTAccessCommandInput - {@link DescribeDRTAccessCommandInput}
 * @returns {@link DescribeDRTAccessCommandOutput}
 * @see {@link DescribeDRTAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeDRTAccessCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
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
export class DescribeDRTAccessCommand extends $Command
  .classBuilder<
    DescribeDRTAccessCommandInput,
    DescribeDRTAccessCommandOutput,
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
  .s("AWSShield_20160616", "DescribeDRTAccess", {})
  .n("ShieldClient", "DescribeDRTAccessCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDRTAccessCommand)
  .de(de_DescribeDRTAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeDRTAccessResponse;
    };
    sdk: {
      input: DescribeDRTAccessCommandInput;
      output: DescribeDRTAccessCommandOutput;
    };
  };
}
