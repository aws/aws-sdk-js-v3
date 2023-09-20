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
import { UpdateUploadRequest, UpdateUploadResult, UpdateUploadResultFilterSensitiveLog } from "../models/models_0";
import { de_UpdateUploadCommand, se_UpdateUploadCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateUploadCommand}.
 */
export interface UpdateUploadCommandInput extends UpdateUploadRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUploadCommand}.
 */
export interface UpdateUploadCommandOutput extends UpdateUploadResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates an uploaded test spec.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateUploadCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateUploadCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // UpdateUploadRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   contentType: "STRING_VALUE",
 *   editContent: true || false,
 * };
 * const command = new UpdateUploadCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUploadResult
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
 * @param UpdateUploadCommandInput - {@link UpdateUploadCommandInput}
 * @returns {@link UpdateUploadCommandOutput}
 * @see {@link UpdateUploadCommandInput} for command's `input` shape.
 * @see {@link UpdateUploadCommandOutput} for command's `response` shape.
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
 */
export class UpdateUploadCommand extends $Command<
  UpdateUploadCommandInput,
  UpdateUploadCommandOutput,
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
  constructor(readonly input: UpdateUploadCommandInput) {
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
  ): Handler<UpdateUploadCommandInput, UpdateUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateUploadCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "UpdateUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: UpdateUploadResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "UpdateUpload",
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
  private serialize(input: UpdateUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUploadCommandOutput> {
    return de_UpdateUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
