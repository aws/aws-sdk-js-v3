// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteKeyPairRequest, DeleteKeyPairResult } from "../models/models_3";
import { de_DeleteKeyPairCommand, se_DeleteKeyPairCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKeyPairCommand}.
 */
export interface DeleteKeyPairCommandInput extends DeleteKeyPairRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKeyPairCommand}.
 */
export interface DeleteKeyPairCommandOutput extends DeleteKeyPairResult, __MetadataBearer {}

/**
 * <p>Deletes the specified key pair, by removing the public key from Amazon EC2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteKeyPairCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteKeyPairCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteKeyPairRequest
 *   KeyName: "STRING_VALUE",
 *   KeyPairId: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DeleteKeyPairCommand(input);
 * const response = await client.send(command);
 * // { // DeleteKeyPairResult
 * //   Return: true || false,
 * //   KeyPairId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteKeyPairCommandInput - {@link DeleteKeyPairCommandInput}
 * @returns {@link DeleteKeyPairCommandOutput}
 * @see {@link DeleteKeyPairCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyPairCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To delete a key pair
 * ```javascript
 * // This example deletes the specified key pair.
 * const input = {
 *   "KeyName": "my-key-pair"
 * };
 * const command = new DeleteKeyPairCommand(input);
 * await client.send(command);
 * // example id: ec2-delete-key-pair-1
 * ```
 *
 */
export class DeleteKeyPairCommand extends $Command
  .classBuilder<
    DeleteKeyPairCommandInput,
    DeleteKeyPairCommandOutput,
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
  .s("AmazonEC2", "DeleteKeyPair", {})
  .n("EC2Client", "DeleteKeyPairCommand")
  .f(void 0, void 0)
  .ser(se_DeleteKeyPairCommand)
  .de(de_DeleteKeyPairCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKeyPairRequest;
      output: DeleteKeyPairResult;
    };
    sdk: {
      input: DeleteKeyPairCommandInput;
      output: DeleteKeyPairCommandOutput;
    };
  };
}
