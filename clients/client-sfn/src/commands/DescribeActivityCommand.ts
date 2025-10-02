// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeActivityInput, DescribeActivityOutput } from "../models/models_0";
import { de_DescribeActivityCommand, se_DescribeActivityCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeActivityCommand}.
 */
export interface DescribeActivityCommandInput extends DescribeActivityInput {}
/**
 * @public
 *
 * The output of {@link DescribeActivityCommand}.
 */
export interface DescribeActivityCommandOutput extends DescribeActivityOutput, __MetadataBearer {}

/**
 * <p>Describes an activity.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeActivityCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeActivityCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // DescribeActivityInput
 *   activityArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeActivityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActivityOutput
 * //   activityArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   creationDate: new Date("TIMESTAMP"), // required
 * //   encryptionConfiguration: { // EncryptionConfiguration
 * //     kmsKeyId: "STRING_VALUE",
 * //     kmsDataKeyReusePeriodSeconds: Number("int"),
 * //     type: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KMS_KEY", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeActivityCommandInput - {@link DescribeActivityCommandInput}
 * @returns {@link DescribeActivityCommandOutput}
 * @see {@link DescribeActivityCommandInput} for command's `input` shape.
 * @see {@link DescribeActivityCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ActivityDoesNotExist} (client fault)
 *  <p>The specified activity does not exist.</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class DescribeActivityCommand extends $Command
  .classBuilder<
    DescribeActivityCommandInput,
    DescribeActivityCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "DescribeActivity", {})
  .n("SFNClient", "DescribeActivityCommand")
  .f(void 0, void 0)
  .ser(se_DescribeActivityCommand)
  .de(de_DescribeActivityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeActivityInput;
      output: DescribeActivityOutput;
    };
    sdk: {
      input: DescribeActivityCommandInput;
      output: DescribeActivityCommandOutput;
    };
  };
}
