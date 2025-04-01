// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetApplicationRevisionInput, GetApplicationRevisionOutput } from "../models/models_0";
import { de_GetApplicationRevisionCommand, se_GetApplicationRevisionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationRevisionCommand}.
 */
export interface GetApplicationRevisionCommandInput extends GetApplicationRevisionInput {}
/**
 * @public
 *
 * The output of {@link GetApplicationRevisionCommand}.
 */
export interface GetApplicationRevisionCommandOutput extends GetApplicationRevisionOutput, __MetadataBearer {}

/**
 * <p>Gets information about an application revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetApplicationRevisionCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetApplicationRevisionCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // GetApplicationRevisionInput
 *   applicationName: "STRING_VALUE", // required
 *   revision: { // RevisionLocation
 *     revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 *     s3Location: { // S3Location
 *       bucket: "STRING_VALUE",
 *       key: "STRING_VALUE",
 *       bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 *       version: "STRING_VALUE",
 *       eTag: "STRING_VALUE",
 *     },
 *     gitHubLocation: { // GitHubLocation
 *       repository: "STRING_VALUE",
 *       commitId: "STRING_VALUE",
 *     },
 *     string: { // RawString
 *       content: "STRING_VALUE",
 *       sha256: "STRING_VALUE",
 *     },
 *     appSpecContent: { // AppSpecContent
 *       content: "STRING_VALUE",
 *       sha256: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new GetApplicationRevisionCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationRevisionOutput
 * //   applicationName: "STRING_VALUE",
 * //   revision: { // RevisionLocation
 * //     revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 * //     s3Location: { // S3Location
 * //       bucket: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //       bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 * //       version: "STRING_VALUE",
 * //       eTag: "STRING_VALUE",
 * //     },
 * //     gitHubLocation: { // GitHubLocation
 * //       repository: "STRING_VALUE",
 * //       commitId: "STRING_VALUE",
 * //     },
 * //     string: { // RawString
 * //       content: "STRING_VALUE",
 * //       sha256: "STRING_VALUE",
 * //     },
 * //     appSpecContent: { // AppSpecContent
 * //       content: "STRING_VALUE",
 * //       sha256: "STRING_VALUE",
 * //     },
 * //   },
 * //   revisionInfo: { // GenericRevisionInfo
 * //     description: "STRING_VALUE",
 * //     deploymentGroups: [ // DeploymentGroupsList
 * //       "STRING_VALUE",
 * //     ],
 * //     firstUsedTime: new Date("TIMESTAMP"),
 * //     lastUsedTime: new Date("TIMESTAMP"),
 * //     registerTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationRevisionCommandInput - {@link GetApplicationRevisionCommandInput}
 * @returns {@link GetApplicationRevisionCommandOutput}
 * @see {@link GetApplicationRevisionCommandInput} for command's `input` shape.
 * @see {@link GetApplicationRevisionCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidRevisionException} (client fault)
 *  <p>The revision was specified in an invalid format.</p>
 *
 * @throws {@link RevisionDoesNotExistException} (client fault)
 *  <p>The named revision does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link RevisionRequiredException} (client fault)
 *  <p>The revision ID was not specified.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class GetApplicationRevisionCommand extends $Command
  .classBuilder<
    GetApplicationRevisionCommandInput,
    GetApplicationRevisionCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeDeploy_20141006", "GetApplicationRevision", {})
  .n("CodeDeployClient", "GetApplicationRevisionCommand")
  .f(void 0, void 0)
  .ser(se_GetApplicationRevisionCommand)
  .de(de_GetApplicationRevisionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationRevisionInput;
      output: GetApplicationRevisionOutput;
    };
    sdk: {
      input: GetApplicationRevisionCommandInput;
      output: GetApplicationRevisionCommandOutput;
    };
  };
}
