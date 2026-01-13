// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateExtensionRequest, Extension } from "../models/models_0";
import { CreateExtension$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateExtensionCommand}.
 */
export interface CreateExtensionCommandInput extends CreateExtensionRequest {}
/**
 * @public
 *
 * The output of {@link CreateExtensionCommand}.
 */
export interface CreateExtensionCommandOutput extends Extension, __MetadataBearer {}

/**
 * <p>Creates an AppConfig extension. An extension augments your ability to inject
 *          logic or behavior at different points during the AppConfig workflow of creating
 *          or deploying a configuration.</p>
 *          <p>You can create your own extensions or use the Amazon Web Services authored extensions provided by
 *             AppConfig. For an AppConfig extension that uses Lambda, you must create a Lambda function to perform any computation and processing
 *          defined in the extension. If you plan to create custom versions of the Amazon Web Services
 *          authored notification extensions, you only need to specify an Amazon Resource Name (ARN) in
 *          the <code>Uri</code> field for the new extension version.</p>
 *          <ul>
 *             <li>
 *                <p>For a custom EventBridge notification extension, enter the ARN of the EventBridge
 *                default events in the <code>Uri</code> field.</p>
 *             </li>
 *             <li>
 *                <p>For a custom Amazon SNS notification extension, enter the ARN of an Amazon SNS
 *                topic in the <code>Uri</code> field.</p>
 *             </li>
 *             <li>
 *                <p>For a custom Amazon SQS notification extension, enter the ARN of an Amazon SQS
 *                message queue in the <code>Uri</code> field. </p>
 *             </li>
 *          </ul>
 *          <p>For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Extending
 *             workflows</a> in the <i>AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateExtensionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateExtensionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // CreateExtensionRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Actions: { // ActionsMap // required
 *     "<keys>": [ // ActionList
 *       { // Action
 *         Name: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *         Uri: "STRING_VALUE",
 *         RoleArn: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Parameters: { // ParameterMap
 *     "<keys>": { // Parameter
 *       Description: "STRING_VALUE",
 *       Required: true || false,
 *       Dynamic: true || false,
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   LatestVersionNumber: Number("int"),
 * };
 * const command = new CreateExtensionCommand(input);
 * const response = await client.send(command);
 * // { // Extension
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   VersionNumber: Number("int"),
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Actions: { // ActionsMap
 * //     "<keys>": [ // ActionList
 * //       { // Action
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Uri: "STRING_VALUE",
 * //         RoleArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   Parameters: { // ParameterMap
 * //     "<keys>": { // Parameter
 * //       Description: "STRING_VALUE",
 * //       Required: true || false,
 * //       Dynamic: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateExtensionCommandInput - {@link CreateExtensionCommandInput}
 * @returns {@link CreateExtensionCommandOutput}
 * @see {@link CreateExtensionCommandInput} for command's `input` shape.
 * @see {@link CreateExtensionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of one more AppConfig resources exceeds the maximum allowed. Verify that your
 *          environment doesn't exceed the following service quotas:</p>
 *          <p>Applications: 100 max</p>
 *          <p>Deployment strategies: 20 max</p>
 *          <p>Configuration profiles: 100 max per application</p>
 *          <p>Environments: 20 max per application</p>
 *          <p>To resolve this issue, you can delete one or more resources and try again. Or, you can
 *          request a quota increase. For more information about quotas and to request an increase, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/appconfig.html#limits_appconfig">Service quotas for AppConfig</a> in the Amazon Web Services General Reference.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @public
 */
export class CreateExtensionCommand extends $Command
  .classBuilder<
    CreateExtensionCommandInput,
    CreateExtensionCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "CreateExtension", {})
  .n("AppConfigClient", "CreateExtensionCommand")
  .sc(CreateExtension$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExtensionRequest;
      output: Extension;
    };
    sdk: {
      input: CreateExtensionCommandInput;
      output: CreateExtensionCommandOutput;
    };
  };
}
