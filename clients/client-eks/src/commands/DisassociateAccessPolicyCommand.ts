// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateAccessPolicyRequest, DisassociateAccessPolicyResponse } from "../models/models_0";
import { de_DisassociateAccessPolicyCommand, se_DisassociateAccessPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateAccessPolicyCommand}.
 */
export interface DisassociateAccessPolicyCommandInput extends DisassociateAccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAccessPolicyCommand}.
 */
export interface DisassociateAccessPolicyCommandOutput extends DisassociateAccessPolicyResponse, __MetadataBearer {}

/**
 * <p>Disassociates an access policy from an access entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DisassociateAccessPolicyCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DisassociateAccessPolicyCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EKSClient(config);
 * const input = { // DisassociateAccessPolicyRequest
 *   clusterName: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE", // required
 *   policyArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAccessPolicyCommandInput - {@link DisassociateAccessPolicyCommandInput}
 * @returns {@link DisassociateAccessPolicyCommandOutput}
 * @see {@link DisassociateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DisassociateAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region
 *                  specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @public
 */
export class DisassociateAccessPolicyCommand extends $Command
  .classBuilder<
    DisassociateAccessPolicyCommandInput,
    DisassociateAccessPolicyCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "DisassociateAccessPolicy", {})
  .n("EKSClient", "DisassociateAccessPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateAccessPolicyCommand)
  .de(de_DisassociateAccessPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAccessPolicyRequest;
      output: {};
    };
    sdk: {
      input: DisassociateAccessPolicyCommandInput;
      output: DisassociateAccessPolicyCommandOutput;
    };
  };
}
