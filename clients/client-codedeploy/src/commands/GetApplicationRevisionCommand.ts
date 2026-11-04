// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetApplicationRevisionInput, GetApplicationRevisionOutput } from "../models/models_0";
import { GetApplicationRevision$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about an application revision.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetApplicationRevisionCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetApplicationRevisionCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
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
 *
 * The application does not exist with the user or Amazon Web Services account.
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *
 * The minimum number of required application names was not specified.
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *
 * The application name was specified in an invalid format.
 *
 * @throws {@link InvalidRevisionException} (client fault)
 *
 * The revision was specified in an invalid format.
 *
 * @throws {@link RevisionDoesNotExistException} (client fault)
 *
 * The named revision does not exist with the user or Amazon Web Services account.
 *
 * @throws {@link RevisionRequiredException} (client fault)
 *
 * The revision ID was not specified.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class GetApplicationRevisionCommand extends command<GetApplicationRevisionCommandInput, GetApplicationRevisionCommandOutput>(
  _ep0,
  _mw0,
  "GetApplicationRevision",
  GetApplicationRevision$
) {
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
