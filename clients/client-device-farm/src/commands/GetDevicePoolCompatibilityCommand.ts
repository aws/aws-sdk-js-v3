// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetDevicePoolCompatibilityRequest, GetDevicePoolCompatibilityResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetDevicePoolCompatibilityCommand,
  serializeAws_json1_1GetDevicePoolCompatibilityCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetDevicePoolCompatibilityCommand}.
 */
export interface GetDevicePoolCompatibilityCommandInput extends GetDevicePoolCompatibilityRequest {}
/**
 * @public
 *
 * The output of {@link GetDevicePoolCompatibilityCommand}.
 */
export interface GetDevicePoolCompatibilityCommandOutput extends GetDevicePoolCompatibilityResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about compatibility with a device pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDevicePoolCompatibilityCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDevicePoolCompatibilityCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = {
 *   devicePoolArn: "STRING_VALUE", // required
 *   appArn: "STRING_VALUE",
 *   testType: "BUILTIN_FUZZ" || "BUILTIN_EXPLORER" || "WEB_PERFORMANCE_PROFILE" || "APPIUM_JAVA_JUNIT" || "APPIUM_JAVA_TESTNG" || "APPIUM_PYTHON" || "APPIUM_NODE" || "APPIUM_RUBY" || "APPIUM_WEB_JAVA_JUNIT" || "APPIUM_WEB_JAVA_TESTNG" || "APPIUM_WEB_PYTHON" || "APPIUM_WEB_NODE" || "APPIUM_WEB_RUBY" || "CALABASH" || "INSTRUMENTATION" || "UIAUTOMATION" || "UIAUTOMATOR" || "XCTEST" || "XCTEST_UI" || "REMOTE_ACCESS_RECORD" || "REMOTE_ACCESS_REPLAY",
 *   test: {
 *     type: "BUILTIN_FUZZ" || "BUILTIN_EXPLORER" || "WEB_PERFORMANCE_PROFILE" || "APPIUM_JAVA_JUNIT" || "APPIUM_JAVA_TESTNG" || "APPIUM_PYTHON" || "APPIUM_NODE" || "APPIUM_RUBY" || "APPIUM_WEB_JAVA_JUNIT" || "APPIUM_WEB_JAVA_TESTNG" || "APPIUM_WEB_PYTHON" || "APPIUM_WEB_NODE" || "APPIUM_WEB_RUBY" || "CALABASH" || "INSTRUMENTATION" || "UIAUTOMATION" || "UIAUTOMATOR" || "XCTEST" || "XCTEST_UI" || "REMOTE_ACCESS_RECORD" || "REMOTE_ACCESS_REPLAY", // required
 *     testPackageArn: "STRING_VALUE",
 *     testSpecArn: "STRING_VALUE",
 *     filter: "STRING_VALUE",
 *     parameters: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   configuration: {
 *     extraDataPackageArn: "STRING_VALUE",
 *     networkProfileArn: "STRING_VALUE",
 *     locale: "STRING_VALUE",
 *     location: {
 *       latitude: Number("double"), // required
 *       longitude: Number("double"), // required
 *     },
 *     vpceConfigurationArns: [
 *       "STRING_VALUE",
 *     ],
 *     customerArtifactPaths: {
 *       iosPaths: [
 *         "STRING_VALUE",
 *       ],
 *       androidPaths: [
 *         "STRING_VALUE",
 *       ],
 *       deviceHostPaths: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     radios: {
 *       wifi: true || false,
 *       bluetooth: true || false,
 *       nfc: true || false,
 *       gps: true || false,
 *     },
 *     auxiliaryApps: [
 *       "STRING_VALUE",
 *     ],
 *     billingMethod: "METERED" || "UNMETERED",
 *   },
 * };
 * const command = new GetDevicePoolCompatibilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetDevicePoolCompatibilityCommandInput - {@link GetDevicePoolCompatibilityCommandInput}
 * @returns {@link GetDevicePoolCompatibilityCommandOutput}
 * @see {@link GetDevicePoolCompatibilityCommandInput} for command's `input` shape.
 * @see {@link GetDevicePoolCompatibilityCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 *
 * @example To get information about the compatibility of a device pool
 * ```javascript
 * // The following example returns information about the compatibility of a specific device pool, given its ARN.
 * const input = {
 *   "appArn": "arn:aws:devicefarm:us-west-2::app:123-456-EXAMPLE-GUID",
 *   "devicePoolArn": "arn:aws:devicefarm:us-west-2::devicepool:123-456-EXAMPLE-GUID",
 *   "testType": "APPIUM_PYTHON"
 * };
 * const command = new GetDevicePoolCompatibilityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "compatibleDevices": [],
 *   "incompatibleDevices": []
 * }
 * *\/
 * // example id: getdevicepoolcompatibility-example-1470925003466
 * ```
 *
 */
export class GetDevicePoolCompatibilityCommand extends $Command<
  GetDevicePoolCompatibilityCommandInput,
  GetDevicePoolCompatibilityCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: GetDevicePoolCompatibilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDevicePoolCompatibilityCommandInput, GetDevicePoolCompatibilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDevicePoolCompatibilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetDevicePoolCompatibilityCommand";
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
  private serialize(input: GetDevicePoolCompatibilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDevicePoolCompatibilityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDevicePoolCompatibilityCommandOutput> {
    return deserializeAws_json1_1GetDevicePoolCompatibilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
