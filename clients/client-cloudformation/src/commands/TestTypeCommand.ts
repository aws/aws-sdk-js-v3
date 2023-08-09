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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { TestTypeInput, TestTypeOutput } from "../models/models_0";
import { de_TestTypeCommand, se_TestTypeCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestTypeCommand}.
 */
export interface TestTypeCommandInput extends TestTypeInput {}
/**
 * @public
 *
 * The output of {@link TestTypeCommand}.
 */
export interface TestTypeCommandOutput extends TestTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.</p>
 *          <ul>
 *             <li>
 *                <p>For resource types, this includes passing all contracts tests defined for the type.</p>
 *             </li>
 *             <li>
 *                <p>For modules, this includes determining if the module's model meets all necessary requirements.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public
 *     extension prior to publishing</a> in the <i>CloudFormation CLI User Guide</i>.</p>
 *          <p>If you don't specify a version, CloudFormation uses the default version of the extension in your
 *    account and Region for testing.</p>
 *          <p>To perform testing, CloudFormation assumes the execution role specified when the type was registered.
 *    For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
 *          <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass the returned
 *     <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test
 *    status and test status description for the extension.</p>
 *          <p>An extension must have a test status of <code>PASSED</code> before it can be published. For more information,
 *    see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing
 *     extensions to make them available for public use</a> in the <i>CloudFormation CLI User
 *     Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, TestTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, TestTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // TestTypeInput
 *   Arn: "STRING_VALUE",
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   TypeName: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 *   LogDeliveryBucket: "STRING_VALUE",
 * };
 * const command = new TestTypeCommand(input);
 * const response = await client.send(command);
 * // { // TestTypeOutput
 * //   TypeVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestTypeCommandInput - {@link TestTypeCommandInput}
 * @returns {@link TestTypeCommandOutput}
 * @see {@link TestTypeCommandInput} for command's `input` shape.
 * @see {@link TestTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *  <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class TestTypeCommand extends $Command<
  TestTypeCommandInput,
  TestTypeCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: TestTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestTypeCommandInput, TestTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TestTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "TestTypeCommand";
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
  private serialize(input: TestTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestTypeCommandOutput> {
    return de_TestTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
