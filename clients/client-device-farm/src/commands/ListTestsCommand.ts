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
import { ListTestsRequest, ListTestsResult } from "../models/models_0";
import { de_ListTestsCommand, se_ListTestsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTestsCommand}.
 */
export interface ListTestsCommandInput extends ListTestsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestsCommand}.
 */
export interface ListTestsCommandOutput extends ListTestsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about tests in a given test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListTestsRequest
 *   arn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestsResult
 * //   tests: [ // Tests
 * //     { // Test
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "BUILTIN_FUZZ" || "BUILTIN_EXPLORER" || "WEB_PERFORMANCE_PROFILE" || "APPIUM_JAVA_JUNIT" || "APPIUM_JAVA_TESTNG" || "APPIUM_PYTHON" || "APPIUM_NODE" || "APPIUM_RUBY" || "APPIUM_WEB_JAVA_JUNIT" || "APPIUM_WEB_JAVA_TESTNG" || "APPIUM_WEB_PYTHON" || "APPIUM_WEB_NODE" || "APPIUM_WEB_RUBY" || "CALABASH" || "INSTRUMENTATION" || "UIAUTOMATION" || "UIAUTOMATOR" || "XCTEST" || "XCTEST_UI" || "REMOTE_ACCESS_RECORD" || "REMOTE_ACCESS_REPLAY",
 * //       created: new Date("TIMESTAMP"),
 * //       status: "PENDING" || "PENDING_CONCURRENCY" || "PENDING_DEVICE" || "PROCESSING" || "SCHEDULING" || "PREPARING" || "RUNNING" || "COMPLETED" || "STOPPING",
 * //       result: "PENDING" || "PASSED" || "WARNED" || "FAILED" || "SKIPPED" || "ERRORED" || "STOPPED",
 * //       started: new Date("TIMESTAMP"),
 * //       stopped: new Date("TIMESTAMP"),
 * //       counters: { // Counters
 * //         total: Number("int"),
 * //         passed: Number("int"),
 * //         failed: Number("int"),
 * //         warned: Number("int"),
 * //         errored: Number("int"),
 * //         stopped: Number("int"),
 * //         skipped: Number("int"),
 * //       },
 * //       message: "STRING_VALUE",
 * //       deviceMinutes: { // DeviceMinutes
 * //         total: Number("double"),
 * //         metered: Number("double"),
 * //         unmetered: Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestsCommandInput - {@link ListTestsCommandInput}
 * @returns {@link ListTestsCommandOutput}
 * @see {@link ListTestsCommandInput} for command's `input` shape.
 * @see {@link ListTestsCommandOutput} for command's `response` shape.
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
 * @example To get information about tests
 * ```javascript
 * // The following example returns information about tests, given a specific Device Farm project.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456",
 *   "nextToken": "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE"
 * };
 * const command = new ListTestsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "tests": []
 * }
 * *\/
 * // example id: to-get-information-about-tests-1472617372212
 * ```
 *
 */
export class ListTestsCommand extends $Command<
  ListTestsCommandInput,
  ListTestsCommandOutput,
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
  constructor(readonly input: ListTestsCommandInput) {
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
  ): Handler<ListTestsCommandInput, ListTestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTestsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListTestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "ListTests",
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
  private serialize(input: ListTestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTestsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTestsCommandOutput> {
    return de_ListTestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
