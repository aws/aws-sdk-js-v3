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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  TestFunctionRequest,
  TestFunctionRequestFilterSensitiveLog,
  TestFunctionResult,
  TestFunctionResultFilterSensitiveLog,
} from "../models/models_1";
import { de_TestFunctionCommand, se_TestFunctionCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestFunctionCommand}.
 */
export interface TestFunctionCommandInput extends TestFunctionRequest {}
/**
 * @public
 *
 * The output of {@link TestFunctionCommand}.
 */
export interface TestFunctionCommandOutput extends TestFunctionResult, __MetadataBearer {}

/**
 * @public
 * <p>Tests a CloudFront function.</p>
 *          <p>To test a function, you provide an <i>event object</i> that represents
 * 			an HTTP request or response that your CloudFront distribution could receive in production.
 * 			CloudFront runs the function, passing it the event object that you provided, and returns the
 * 			function's result (the modified event object) in the response. The response also
 * 			contains function logs and error messages, if any exist. For more information about
 * 			testing functions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *          <p>To test a function, you provide the function's name and version (<code>ETag</code>
 * 			value) along with the event object. To get the function's name and version, you can use
 * 				<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, TestFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, TestFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // TestFunctionRequest
 *   Name: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 *   Stage: "DEVELOPMENT" || "LIVE",
 *   EventObject: "BLOB_VALUE", // required
 * };
 * const command = new TestFunctionCommand(input);
 * const response = await client.send(command);
 * // { // TestFunctionResult
 * //   TestResult: { // TestResult
 * //     FunctionSummary: { // FunctionSummary
 * //       Name: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE",
 * //       FunctionConfig: { // FunctionConfig
 * //         Comment: "STRING_VALUE", // required
 * //         Runtime: "cloudfront-js-1.0" || "cloudfront-js-2.0", // required
 * //       },
 * //       FunctionMetadata: { // FunctionMetadata
 * //         FunctionARN: "STRING_VALUE", // required
 * //         Stage: "DEVELOPMENT" || "LIVE",
 * //         CreatedTime: new Date("TIMESTAMP"),
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //     ComputeUtilization: "STRING_VALUE",
 * //     FunctionExecutionLogs: [ // FunctionExecutionLogList
 * //       "STRING_VALUE",
 * //     ],
 * //     FunctionErrorMessage: "STRING_VALUE",
 * //     FunctionOutput: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TestFunctionCommandInput - {@link TestFunctionCommandInput}
 * @returns {@link TestFunctionCommandOutput}
 * @see {@link TestFunctionCommandInput} for command's `input` shape.
 * @see {@link TestFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchFunctionExists} (client fault)
 *  <p>The function does not exist.</p>
 *
 * @throws {@link TestFunctionFailed} (server fault)
 *  <p>The CloudFront function failed.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class TestFunctionCommand extends $Command<
  TestFunctionCommandInput,
  TestFunctionCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: TestFunctionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestFunctionCommandInput, TestFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TestFunctionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "TestFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestFunctionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TestFunctionResultFilterSensitiveLog,
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
  private serialize(input: TestFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestFunctionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestFunctionCommandOutput> {
    return de_TestFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
