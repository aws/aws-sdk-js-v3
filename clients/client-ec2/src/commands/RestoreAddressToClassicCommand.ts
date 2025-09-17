// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreAddressToClassicRequest, RestoreAddressToClassicResult } from "../models/models_8";
import { de_RestoreAddressToClassicCommand, se_RestoreAddressToClassicCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreAddressToClassicCommand}.
 */
export interface RestoreAddressToClassicCommandInput extends RestoreAddressToClassicRequest {}
/**
 * @public
 *
 * The output of {@link RestoreAddressToClassicCommand}.
 */
export interface RestoreAddressToClassicCommandOutput extends RestoreAddressToClassicResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreAddressToClassicCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreAddressToClassicCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // RestoreAddressToClassicRequest
 *   DryRun: true || false,
 *   PublicIp: "STRING_VALUE", // required
 * };
 * const command = new RestoreAddressToClassicCommand(input);
 * const response = await client.send(command);
 * // { // RestoreAddressToClassicResult
 * //   PublicIp: "STRING_VALUE",
 * //   Status: "MoveInProgress" || "InVpc" || "InClassic",
 * // };
 *
 * ```
 *
 * @param RestoreAddressToClassicCommandInput - {@link RestoreAddressToClassicCommandInput}
 * @returns {@link RestoreAddressToClassicCommandOutput}
 * @see {@link RestoreAddressToClassicCommandInput} for command's `input` shape.
 * @see {@link RestoreAddressToClassicCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RestoreAddressToClassicCommand extends $Command
  .classBuilder<
    RestoreAddressToClassicCommandInput,
    RestoreAddressToClassicCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "RestoreAddressToClassic", {})
  .n("EC2Client", "RestoreAddressToClassicCommand")
  .f(void 0, void 0)
  .ser(se_RestoreAddressToClassicCommand)
  .de(de_RestoreAddressToClassicCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreAddressToClassicRequest;
      output: RestoreAddressToClassicResult;
    };
    sdk: {
      input: RestoreAddressToClassicCommandInput;
      output: RestoreAddressToClassicCommandOutput;
    };
  };
}
