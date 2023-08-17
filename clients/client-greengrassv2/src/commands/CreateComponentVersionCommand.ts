// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { CreateComponentVersionRequest, CreateComponentVersionResponse } from "../models/models_0";
import { de_CreateComponentVersionCommand, se_CreateComponentVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 *                <p>This function only accepts Lambda functions that use the following runtimes:</p>
 *                <ul>
 *                   <li>
 *                      <p>Python 2.7 – <code>python2.7</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Python 3.7 – <code>python3.7</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Python 3.8 – <code>python3.8</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Python 3.9 – <code>python3.9</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Java 8 – <code>java8</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Java 11 – <code>java11</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Node.js 10 – <code>nodejs10.x</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Node.js 12 – <code>nodejs12.x</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Node.js 14 – <code>nodejs14.x</code>
 *                      </p>
 *                   </li>
 *                </ul>
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
 * const client = new GreengrassV2Client(config);
 * const input = { // CreateComponentVersionRequest
 *   inlineRecipe: "BLOB_VALUE",
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
 */
export class CreateComponentVersionCommand extends $Command<
  CreateComponentVersionCommandInput,
  CreateComponentVersionCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateComponentVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateComponentVersionCommandInput, CreateComponentVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateComponentVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "CreateComponentVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateComponentVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateComponentVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateComponentVersionCommandOutput> {
    return de_CreateComponentVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
