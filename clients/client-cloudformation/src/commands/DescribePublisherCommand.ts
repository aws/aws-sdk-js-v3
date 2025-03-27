// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePublisherInput, DescribePublisherOutput } from "../models/models_0";
import { de_DescribePublisherCommand, se_DescribePublisherCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePublisherCommand}.
 */
export interface DescribePublisherCommandInput extends DescribePublisherInput {}
/**
 * @public
 *
 * The output of {@link DescribePublisherCommand}.
 */
export interface DescribePublisherCommandOutput extends DescribePublisherOutput, __MetadataBearer {}

/**
 * <p>Returns information about a CloudFormation extension publisher.</p>
 *          <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension
 *       publisher, <code>DescribePublisher</code> returns information about your own publisher
 *       account.</p>
 *          <p>For more information about registering as a publisher, see:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions
 *             to make them available for public use</a> in the
 *             <i>CloudFormation Command Line Interface (CLI) User Guide</i>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribePublisherCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribePublisherCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribePublisherInput
 *   PublisherId: "STRING_VALUE",
 * };
 * const command = new DescribePublisherCommand(input);
 * const response = await client.send(command);
 * // { // DescribePublisherOutput
 * //   PublisherId: "STRING_VALUE",
 * //   PublisherStatus: "VERIFIED" || "UNVERIFIED",
 * //   IdentityProvider: "AWS_Marketplace" || "GitHub" || "Bitbucket",
 * //   PublisherProfile: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePublisherCommandInput - {@link DescribePublisherCommandInput}
 * @returns {@link DescribePublisherCommandOutput}
 * @see {@link DescribePublisherCommandInput} for command's `input` shape.
 * @see {@link DescribePublisherCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribePublisherCommand extends $Command
  .classBuilder<
    DescribePublisherCommandInput,
    DescribePublisherCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "DescribePublisher", {})
  .n("CloudFormationClient", "DescribePublisherCommand")
  .f(void 0, void 0)
  .ser(se_DescribePublisherCommand)
  .de(de_DescribePublisherCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePublisherInput;
      output: DescribePublisherOutput;
    };
    sdk: {
      input: DescribePublisherCommandInput;
      output: DescribePublisherCommandOutput;
    };
  };
}
