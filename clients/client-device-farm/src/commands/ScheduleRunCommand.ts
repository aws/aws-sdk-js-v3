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
import { ScheduleRunRequest, ScheduleRunResult } from "../models/models_0";
import {
  deserializeAws_json1_1ScheduleRunCommand,
  serializeAws_json1_1ScheduleRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ScheduleRunCommand}.
 */
export interface ScheduleRunCommandInput extends ScheduleRunRequest {}
/**
 * @public
 *
 * The output of {@link ScheduleRunCommand}.
 */
export interface ScheduleRunCommandOutput extends ScheduleRunResult, __MetadataBearer {}

/**
 * @public
 * <p>Schedules a run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ScheduleRunCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ScheduleRunCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ScheduleRunRequest
 *   projectArn: "STRING_VALUE", // required
 *   appArn: "STRING_VALUE",
 *   devicePoolArn: "STRING_VALUE",
 *   deviceSelectionConfiguration: { // DeviceSelectionConfiguration
 *     filters: [ // DeviceFilters // required
 *       { // DeviceFilter
 *         attribute: "ARN" || "PLATFORM" || "OS_VERSION" || "MODEL" || "AVAILABILITY" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE", // required
 *         operator: "EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "IN" || "NOT_IN" || "CONTAINS", // required
 *         values: [ // DeviceFilterValues // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     maxDevices: Number("int"), // required
 *   },
 *   name: "STRING_VALUE",
 *   test: { // ScheduleRunTest
 *     type: "BUILTIN_FUZZ" || "BUILTIN_EXPLORER" || "WEB_PERFORMANCE_PROFILE" || "APPIUM_JAVA_JUNIT" || "APPIUM_JAVA_TESTNG" || "APPIUM_PYTHON" || "APPIUM_NODE" || "APPIUM_RUBY" || "APPIUM_WEB_JAVA_JUNIT" || "APPIUM_WEB_JAVA_TESTNG" || "APPIUM_WEB_PYTHON" || "APPIUM_WEB_NODE" || "APPIUM_WEB_RUBY" || "CALABASH" || "INSTRUMENTATION" || "UIAUTOMATION" || "UIAUTOMATOR" || "XCTEST" || "XCTEST_UI" || "REMOTE_ACCESS_RECORD" || "REMOTE_ACCESS_REPLAY", // required
 *     testPackageArn: "STRING_VALUE",
 *     testSpecArn: "STRING_VALUE",
 *     filter: "STRING_VALUE",
 *     parameters: { // TestParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   configuration: { // ScheduleRunConfiguration
 *     extraDataPackageArn: "STRING_VALUE",
 *     networkProfileArn: "STRING_VALUE",
 *     locale: "STRING_VALUE",
 *     location: { // Location
 *       latitude: Number("double"), // required
 *       longitude: Number("double"), // required
 *     },
 *     vpceConfigurationArns: [ // AmazonResourceNames
 *       "STRING_VALUE",
 *     ],
 *     customerArtifactPaths: { // CustomerArtifactPaths
 *       iosPaths: [ // IosPaths
 *         "STRING_VALUE",
 *       ],
 *       androidPaths: [ // AndroidPaths
 *         "STRING_VALUE",
 *       ],
 *       deviceHostPaths: [ // DeviceHostPaths
 *         "STRING_VALUE",
 *       ],
 *     },
 *     radios: { // Radios
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
 *   executionConfiguration: { // ExecutionConfiguration
 *     jobTimeoutMinutes: Number("int"),
 *     accountsCleanup: true || false,
 *     appPackagesCleanup: true || false,
 *     videoCapture: true || false,
 *     skipAppResign: true || false,
 *   },
 * };
 * const command = new ScheduleRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ScheduleRunCommandInput - {@link ScheduleRunCommandInput}
 * @returns {@link ScheduleRunCommandOutput}
 * @see {@link ScheduleRunCommandInput} for command's `input` shape.
 * @see {@link ScheduleRunCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
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
 * @example To schedule a test run
 * ```javascript
 * // The following example schedules a test run named MyRun.
 * const input = {
 *   "name": "MyRun",
 *   "devicePoolArn": "arn:aws:devicefarm:us-west-2:123456789101:pool:EXAMPLE-GUID-123-456",
 *   "projectArn": "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456",
 *   "test": {
 *     "type": "APPIUM_JAVA_JUNIT",
 *     "testPackageArn": "arn:aws:devicefarm:us-west-2:123456789101:test:EXAMPLE-GUID-123-456"
 *   }
 * };
 * const command = new ScheduleRunCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "run": {}
 * }
 * *\/
 * // example id: to-schedule-a-test-run-1472652429636
 * ```
 *
 */
export class ScheduleRunCommand extends $Command<
  ScheduleRunCommandInput,
  ScheduleRunCommandOutput,
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
  constructor(readonly input: ScheduleRunCommandInput) {
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
  ): Handler<ScheduleRunCommandInput, ScheduleRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ScheduleRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ScheduleRunCommand";
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
  private serialize(input: ScheduleRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ScheduleRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ScheduleRunCommandOutput> {
    return deserializeAws_json1_1ScheduleRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
