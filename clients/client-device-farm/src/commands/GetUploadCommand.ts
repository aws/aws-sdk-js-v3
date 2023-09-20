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
import { GetUploadRequest, GetUploadResult, GetUploadResultFilterSensitiveLog } from "../models/models_0";
import { de_GetUploadCommand, se_GetUploadCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUploadCommand}.
 */
export interface GetUploadCommandInput extends GetUploadRequest {}
/**
 * @public
 *
 * The output of {@link GetUploadCommand}.
 */
export interface GetUploadCommandOutput extends GetUploadResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about an upload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetUploadCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetUploadCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // GetUploadRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetUploadCommand(input);
 * const response = await client.send(command);
 * // { // GetUploadResult
 * //   upload: { // Upload
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
 * @param GetUploadCommandInput - {@link GetUploadCommandInput}
 * @returns {@link GetUploadCommandOutput}
 * @see {@link GetUploadCommandInput} for command's `input` shape.
 * @see {@link GetUploadCommandOutput} for command's `response` shape.
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
 * @example To get information about a specific upload
 * ```javascript
 * // The following example gets information about a specific upload.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:upload:EXAMPLE-GUID-123-456"
 * };
 * const command = new GetUploadCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "upload": {}
 * }
 * *\/
 * // example id: to-get-information-about-a-specific-upload-1471025996221
 * ```
 *
 */
export class GetUploadCommand extends $Command<
  GetUploadCommandInput,
  GetUploadCommandOutput,
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
  constructor(readonly input: GetUploadCommandInput) {
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
  ): Handler<GetUploadCommandInput, GetUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetUploadCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetUploadResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "GetUpload",
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
  private serialize(input: GetUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUploadCommandOutput> {
    return de_GetUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
