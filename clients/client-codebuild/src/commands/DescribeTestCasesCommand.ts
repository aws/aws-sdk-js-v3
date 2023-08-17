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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DescribeTestCasesInput, DescribeTestCasesOutput } from "../models/models_0";
import { de_DescribeTestCasesCommand, se_DescribeTestCasesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTestCasesCommand}.
 */
export interface DescribeTestCasesCommandInput extends DescribeTestCasesInput {}
/**
 * @public
 *
 * The output of {@link DescribeTestCasesCommand}.
 */
export interface DescribeTestCasesCommandOutput extends DescribeTestCasesOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Returns a list of details about test cases for a report.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DescribeTestCasesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DescribeTestCasesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // DescribeTestCasesInput
 *   reportArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: { // TestCaseFilter
 *     status: "STRING_VALUE",
 *     keyword: "STRING_VALUE",
 *   },
 * };
 * const command = new DescribeTestCasesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTestCasesOutput
 * //   nextToken: "STRING_VALUE",
 * //   testCases: [ // TestCases
 * //     { // TestCase
 * //       reportArn: "STRING_VALUE",
 * //       testRawDataPath: "STRING_VALUE",
 * //       prefix: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       durationInNanoSeconds: Number("long"),
 * //       message: "STRING_VALUE",
 * //       expired: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTestCasesCommandInput - {@link DescribeTestCasesCommandInput}
 * @returns {@link DescribeTestCasesCommandOutput}
 * @see {@link DescribeTestCasesCommandInput} for command's `input` shape.
 * @see {@link DescribeTestCasesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class DescribeTestCasesCommand extends $Command<
  DescribeTestCasesCommandInput,
  DescribeTestCasesCommandOutput,
  CodeBuildClientResolvedConfig
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
  constructor(readonly input: DescribeTestCasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTestCasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "DescribeTestCasesCommand";
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
  private serialize(input: DescribeTestCasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTestCasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTestCasesCommandOutput> {
    return de_DescribeTestCasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
