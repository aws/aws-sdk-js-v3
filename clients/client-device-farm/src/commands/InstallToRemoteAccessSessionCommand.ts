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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  InstallToRemoteAccessSessionRequest,
  InstallToRemoteAccessSessionResult,
  InstallToRemoteAccessSessionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  de_InstallToRemoteAccessSessionCommand,
  se_InstallToRemoteAccessSessionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InstallToRemoteAccessSessionCommand}.
 */
export interface InstallToRemoteAccessSessionCommandInput extends InstallToRemoteAccessSessionRequest {}
/**
 * @public
 *
 * The output of {@link InstallToRemoteAccessSessionCommand}.
 */
export interface InstallToRemoteAccessSessionCommandOutput
  extends InstallToRemoteAccessSessionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Installs an application to the device in a remote access session. For Android
 *             applications, the file must be in .apk format. For iOS applications, the file must be in
 *             .ipa format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, InstallToRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, InstallToRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // InstallToRemoteAccessSessionRequest
 *   remoteAccessSessionArn: "STRING_VALUE", // required
 *   appArn: "STRING_VALUE", // required
 * };
 * const command = new InstallToRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * // { // InstallToRemoteAccessSessionResult
 * //   appUpload: { // Upload
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"),
 * //     type: "ANDROID_APP" || "IOS_APP" || "WEB_APP" || "EXTERNAL_DATA" || "APPIUM_JAVA_JUNIT_TEST_PACKAGE" || "APPIUM_JAVA_TESTNG_TEST_PACKAGE" || "APPIUM_PYTHON_TEST_PACKAGE" || "APPIUM_NODE_TEST_PACKAGE" || "APPIUM_RUBY_TEST_PACKAGE" || "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE" || "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE" || "APPIUM_WEB_PYTHON_TEST_PACKAGE" || "APPIUM_WEB_NODE_TEST_PACKAGE" || "APPIUM_WEB_RUBY_TEST_PACKAGE" || "CALABASH_TEST_PACKAGE" || "INSTRUMENTATION_TEST_PACKAGE" || "UIAUTOMATION_TEST_PACKAGE" || "UIAUTOMATOR_TEST_PACKAGE" || "XCTEST_TEST_PACKAGE" || "XCTEST_UI_TEST_PACKAGE" || "APPIUM_JAVA_JUNIT_TEST_SPEC" || "APPIUM_JAVA_TESTNG_TEST_SPEC" || "APPIUM_PYTHON_TEST_SPEC" || "APPIUM_NODE_TEST_SPEC" || "APPIUM_RUBY_TEST_SPEC" || "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC" || "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC" || "APPIUM_WEB_PYTHON_TEST_SPEC" || "APPIUM_WEB_NODE_TEST_SPEC" || "APPIUM_WEB_RUBY_TEST_SPEC" || "INSTRUMENTATION_TEST_SPEC" || "XCTEST_UI_TEST_SPEC",
 * //     status: "INITIALIZED" || "PROCESSING" || "SUCCEEDED" || "FAILED",
 * //     url: "STRING_VALUE",
 * //     metadata: "STRING_VALUE",
 * //     contentType: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //     category: "CURATED" || "PRIVATE",
 * //   },
 * // };
 *
 * ```
 *
 * @param InstallToRemoteAccessSessionCommandInput - {@link InstallToRemoteAccessSessionCommandInput}
 * @returns {@link InstallToRemoteAccessSessionCommandOutput}
 * @see {@link InstallToRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link InstallToRemoteAccessSessionCommandOutput} for command's `response` shape.
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
 * @example To install to a remote access session
 * ```javascript
 * // The following example installs a specific app to a device in a specific remote access session.
 * const input = {
 *   "appArn": "arn:aws:devicefarm:us-west-2:123456789101:app:EXAMPLE-GUID-123-456",
 *   "remoteAccessSessionArn": "arn:aws:devicefarm:us-west-2:123456789101:session:EXAMPLE-GUID-123-456"
 * };
 * const command = new InstallToRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "appUpload": {}
 * }
 * *\/
 * // example id: to-install-to-a-remote-access-session-1471634453818
 * ```
 *
 */
export class InstallToRemoteAccessSessionCommand extends $Command<
  InstallToRemoteAccessSessionCommandInput,
  InstallToRemoteAccessSessionCommandOutput,
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
  constructor(readonly input: InstallToRemoteAccessSessionCommandInput) {
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
  ): Handler<InstallToRemoteAccessSessionCommandInput, InstallToRemoteAccessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InstallToRemoteAccessSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "InstallToRemoteAccessSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: InstallToRemoteAccessSessionResultFilterSensitiveLog,
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
  private serialize(input: InstallToRemoteAccessSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InstallToRemoteAccessSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InstallToRemoteAccessSessionCommandOutput> {
    return de_InstallToRemoteAccessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
