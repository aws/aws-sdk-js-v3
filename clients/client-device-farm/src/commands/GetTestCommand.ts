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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetTestRequest, GetTestResult } from "../models/models_0";
import { de_GetTestCommand, se_GetTestCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTestCommand}.
 */
export interface GetTestCommandInput extends GetTestRequest {}
/**
 * @public
 *
 * The output of {@link GetTestCommand}.
 */
export interface GetTestCommandOutput extends GetTestResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetTestCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetTestCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // GetTestRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetTestCommand(input);
 * const response = await client.send(command);
 * // { // GetTestResult
 * //   test: { // Test
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     type: "BUILTIN_FUZZ" || "BUILTIN_EXPLORER" || "WEB_PERFORMANCE_PROFILE" || "APPIUM_JAVA_JUNIT" || "APPIUM_JAVA_TESTNG" || "APPIUM_PYTHON" || "APPIUM_NODE" || "APPIUM_RUBY" || "APPIUM_WEB_JAVA_JUNIT" || "APPIUM_WEB_JAVA_TESTNG" || "APPIUM_WEB_PYTHON" || "APPIUM_WEB_NODE" || "APPIUM_WEB_RUBY" || "CALABASH" || "INSTRUMENTATION" || "UIAUTOMATION" || "UIAUTOMATOR" || "XCTEST" || "XCTEST_UI" || "REMOTE_ACCESS_RECORD" || "REMOTE_ACCESS_REPLAY",
 * //     created: new Date("TIMESTAMP"),
 * //     status: "PENDING" || "PENDING_CONCURRENCY" || "PENDING_DEVICE" || "PROCESSING" || "SCHEDULING" || "PREPARING" || "RUNNING" || "COMPLETED" || "STOPPING",
 * //     result: "PENDING" || "PASSED" || "WARNED" || "FAILED" || "SKIPPED" || "ERRORED" || "STOPPED",
 * //     started: new Date("TIMESTAMP"),
 * //     stopped: new Date("TIMESTAMP"),
 * //     counters: { // Counters
 * //       total: Number("int"),
 * //       passed: Number("int"),
 * //       failed: Number("int"),
 * //       warned: Number("int"),
 * //       errored: Number("int"),
 * //       stopped: Number("int"),
 * //       skipped: Number("int"),
 * //     },
 * //     message: "STRING_VALUE",
 * //     deviceMinutes: { // DeviceMinutes
 * //       total: Number("double"),
 * //       metered: Number("double"),
 * //       unmetered: Number("double"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTestCommandInput - {@link GetTestCommandInput}
 * @returns {@link GetTestCommandOutput}
 * @see {@link GetTestCommandInput} for command's `input` shape.
 * @see {@link GetTestCommandOutput} for command's `response` shape.
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
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 * @example To get information about a specific test
 * ```javascript
 * // The following example gets information about a specific test.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:test:EXAMPLE-GUID-123-456"
 * };
 * const command = new GetTestCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "test": {}
 * }
 * *\/
 * // example id: to-get-information-about-a-specific-test-1471025744238
 * ```
 *
 */
export class GetTestCommand extends $Command<
  GetTestCommandInput,
  GetTestCommandOutput,
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
  constructor(readonly input: GetTestCommandInput) {
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
  ): Handler<GetTestCommandInput, GetTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetTestCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetTestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "GetTest",
      },
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
  private serialize(input: GetTestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTestCommandOutput> {
    return de_GetTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
