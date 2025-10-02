// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { CreateComponentVersionRequest, CreateComponentVersionResponse } from "../models/models_0";
import { de_CreateComponentVersionCommand, se_CreateComponentVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateComponentVersionCommand}.
 */
export interface CreateComponentVersionCommandInput extends CreateComponentVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateComponentVersionCommand}.
 */
export interface CreateComponentVersionCommandOutput extends CreateComponentVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a component. Components are software that run on Greengrass core devices. After you
 *       develop and test a component on your core device, you can use this operation to upload your
 *       component to IoT Greengrass. Then, you can deploy the component to other core devices.</p>
 *          <p>You can use this operation to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Create components from recipes</b>
 *                </p>
 *                <p>Create a component from a recipe, which is a file that defines the component's
 *           metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For
 *           more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe
 *             reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
 *                <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call
 *           this operation.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Create components from Lambda functions</b>
 *                </p>
 *                <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe
 *           and artifacts from the Lambda function's deployment package. You can use this operation to
 *           migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p>
 *                <p>This function accepts Lambda functions in all supported versions of Python, Node.js,
 *           and Java runtimes. IoT Greengrass doesn't apply any additional restrictions on deprecated Lambda
 *           runtime versions.</p>
 *                <p>To create a component from a Lambda function, specify <code>lambdaFunction</code> when
 *           you call this operation.</p>
 *                <note>
 *                   <p>IoT Greengrass currently supports Lambda functions on only Linux core devices.</p>
 *                </note>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, CreateComponentVersionCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, CreateComponentVersionCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // CreateComponentVersionRequest
 *   inlineRecipe: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   lambdaFunction: { // LambdaFunctionRecipeSource
 *     lambdaArn: "STRING_VALUE", // required
 *     componentName: "STRING_VALUE",
 *     componentVersion: "STRING_VALUE",
 *     componentPlatforms: [ // ComponentPlatformList
 *       { // ComponentPlatform
 *         name: "STRING_VALUE",
 *         attributes: { // PlatformAttributesMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     componentDependencies: { // ComponentDependencyMap
 *       "<keys>": { // ComponentDependencyRequirement
 *         versionRequirement: "STRING_VALUE",
 *         dependencyType: "HARD" || "SOFT",
 *       },
 *     },
 *     componentLambdaParameters: { // LambdaExecutionParameters
 *       eventSources: [ // LambdaEventSourceList
 *         { // LambdaEventSource
 *           topic: "STRING_VALUE", // required
 *           type: "PUB_SUB" || "IOT_CORE", // required
 *         },
 *       ],
 *       maxQueueSize: Number("int"),
 *       maxInstancesCount: Number("int"),
 *       maxIdleTimeInSeconds: Number("int"),
 *       timeoutInSeconds: Number("int"),
 *       statusTimeoutInSeconds: Number("int"),
 *       pinned: true || false,
 *       inputPayloadEncodingType: "json" || "binary",
 *       execArgs: [ // LambdaExecArgsList
 *         "STRING_VALUE",
 *       ],
 *       environmentVariables: { // LambdaEnvironmentVariables
 *         "<keys>": "STRING_VALUE",
 *       },
 *       linuxProcessParams: { // LambdaLinuxProcessParams
 *         isolationMode: "GreengrassContainer" || "NoContainer",
 *         containerParams: { // LambdaContainerParams
 *           memorySizeInKB: Number("int"),
 *           mountROSysfs: true || false,
 *           volumes: [ // LambdaVolumeList
 *             { // LambdaVolumeMount
 *               sourcePath: "STRING_VALUE", // required
 *               destinationPath: "STRING_VALUE", // required
 *               permission: "ro" || "rw",
 *               addGroupOwner: true || false,
 *             },
 *           ],
 *           devices: [ // LambdaDeviceList
 *             { // LambdaDeviceMount
 *               path: "STRING_VALUE", // required
 *               permission: "ro" || "rw",
 *               addGroupOwner: true || false,
 *             },
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateComponentVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateComponentVersionResponse
 * //   arn: "STRING_VALUE",
 * //   componentName: "STRING_VALUE", // required
 * //   componentVersion: "STRING_VALUE", // required
 * //   creationTimestamp: new Date("TIMESTAMP"), // required
 * //   status: { // CloudComponentStatus
 * //     componentState: "REQUESTED" || "INITIATED" || "DEPLOYABLE" || "FAILED" || "DEPRECATED",
 * //     message: "STRING_VALUE",
 * //     errors: { // StringMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     vendorGuidance: "ACTIVE" || "DISCONTINUED" || "DELETED",
 * //     vendorGuidanceMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateComponentVersionCommandInput - {@link CreateComponentVersionCommandInput}
 * @returns {@link CreateComponentVersionCommandOutput}
 * @see {@link CreateComponentVersionCommandInput} for command's `input` shape.
 * @see {@link CreateComponentVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link RequestAlreadyInProgressException} (client fault)
 *  <p>The request is already in progress. This exception occurs when you use a client token for
 *       multiple requests while IoT Greengrass is still processing an earlier request that uses the same client
 *       token.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your request exceeds a service quota. For example, you might have the maximum number of
 *       components that you can create.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 *
 * @public
 */
export class CreateComponentVersionCommand extends $Command
  .classBuilder<
    CreateComponentVersionCommandInput,
    CreateComponentVersionCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GreengrassV2", "CreateComponentVersion", {})
  .n("GreengrassV2Client", "CreateComponentVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateComponentVersionCommand)
  .de(de_CreateComponentVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateComponentVersionRequest;
      output: CreateComponentVersionResponse;
    };
    sdk: {
      input: CreateComponentVersionCommandInput;
      output: CreateComponentVersionCommandOutput;
    };
  };
}
