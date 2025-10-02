// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateActivationRequest, CreateActivationResult } from "../models/models_0";
import { de_CreateActivationCommand, se_CreateActivationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateActivationCommand}.
 */
export interface CreateActivationCommandInput extends CreateActivationRequest {}
/**
 * @public
 *
 * The output of {@link CreateActivationCommand}.
 */
export interface CreateActivationCommandOutput extends CreateActivationResult, __MetadataBearer {}

/**
 * <p>Generates an activation code and activation ID you can use to register your on-premises
 *    servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with
 *    Systems Manager makes it possible to manage them using Systems Manager tools. You use the activation code and ID when
 *    installing SSM Agent on machines in your hybrid environment. For more information about
 *    requirements for managing on-premises machines using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-hybrid-multicloud.html">Using Amazon Web Services Systems Manager in
 *     hybrid and multicloud environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 *          <note>
 *             <p>Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are
 *     configured for Systems Manager are all called <i>managed nodes</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateActivationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateActivationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // CreateActivationRequest
 *   Description: "STRING_VALUE",
 *   DefaultInstanceName: "STRING_VALUE",
 *   IamRole: "STRING_VALUE", // required
 *   RegistrationLimit: Number("int"),
 *   ExpirationDate: new Date("TIMESTAMP"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   RegistrationMetadata: [ // RegistrationMetadataList
 *     { // RegistrationMetadataItem
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateActivationCommand(input);
 * const response = await client.send(command);
 * // { // CreateActivationResult
 * //   ActivationId: "STRING_VALUE",
 * //   ActivationCode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateActivationCommandInput - {@link CreateActivationCommandInput}
 * @returns {@link CreateActivationCommandOutput}
 * @see {@link CreateActivationCommandInput} for command's `input` shape.
 * @see {@link CreateActivationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidParameters} (client fault)
 *  <p>You must specify values for all required parameters in the Amazon Web Services Systems Manager document (SSM
 *    document). You can only supply values to parameters defined in the SSM document.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class CreateActivationCommand extends $Command
  .classBuilder<
    CreateActivationCommandInput,
    CreateActivationCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "CreateActivation", {})
  .n("SSMClient", "CreateActivationCommand")
  .f(void 0, void 0)
  .ser(se_CreateActivationCommand)
  .de(de_CreateActivationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateActivationRequest;
      output: CreateActivationResult;
    };
    sdk: {
      input: CreateActivationCommandInput;
      output: CreateActivationCommandOutput;
    };
  };
}
