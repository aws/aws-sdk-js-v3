// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartResourceEvaluationRequest, StartResourceEvaluationResponse } from "../models/models_0";
import { StartResourceEvaluation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartResourceEvaluationCommand}.
 */
export interface StartResourceEvaluationCommandInput extends StartResourceEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link StartResourceEvaluationCommand}.
 */
export interface StartResourceEvaluationCommandOutput extends StartResourceEvaluationResponse, __MetadataBearer {}

/**
 * <p>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules.
 * 			You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all
 * 			of the Config rules in your account that match with the specified proactive mode and resource type.</p>
 *          <note>
 *             <p>Ensure you have the <code>cloudformation:DescribeType</code> role setup to validate the resource type schema.</p>
 *             <p>You can find the
 * 				<a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a> in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand:
 * 			<code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a>
 * 			and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartResourceEvaluationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartResourceEvaluationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // StartResourceEvaluationRequest
 *   ResourceDetails: { // ResourceDetails
 *     ResourceId: "STRING_VALUE", // required
 *     ResourceType: "STRING_VALUE", // required
 *     ResourceConfiguration: "STRING_VALUE", // required
 *     ResourceConfigurationSchemaType: "CFN_RESOURCE_SCHEMA",
 *   },
 *   EvaluationContext: { // EvaluationContext
 *     EvaluationContextIdentifier: "STRING_VALUE",
 *   },
 *   EvaluationMode: "DETECTIVE" || "PROACTIVE", // required
 *   EvaluationTimeout: Number("int"),
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartResourceEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // StartResourceEvaluationResponse
 * //   ResourceEvaluationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartResourceEvaluationCommandInput - {@link StartResourceEvaluationCommandInput}
 * @returns {@link StartResourceEvaluationCommandOutput}
 * @see {@link StartResourceEvaluationCommandInput} for command's `input` shape.
 * @see {@link StartResourceEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatch} (client fault)
 *  <p>Using the same client token with one or more different parameters. Specify a new client token with the parameter changes and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class StartResourceEvaluationCommand extends $Command
  .classBuilder<
    StartResourceEvaluationCommandInput,
    StartResourceEvaluationCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "StartResourceEvaluation", {})
  .n("ConfigServiceClient", "StartResourceEvaluationCommand")
  .sc(StartResourceEvaluation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartResourceEvaluationRequest;
      output: StartResourceEvaluationResponse;
    };
    sdk: {
      input: StartResourceEvaluationCommandInput;
      output: StartResourceEvaluationCommandOutput;
    };
  };
}
