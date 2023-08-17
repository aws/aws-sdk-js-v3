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
import { DescribeCodeCoveragesInput, DescribeCodeCoveragesOutput } from "../models/models_0";
import { de_DescribeCodeCoveragesCommand, se_DescribeCodeCoveragesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCodeCoveragesCommand}.
 */
export interface DescribeCodeCoveragesCommandInput extends DescribeCodeCoveragesInput {}
/**
 * @public
 *
 * The output of {@link DescribeCodeCoveragesCommand}.
 */
export interface DescribeCodeCoveragesCommandOutput extends DescribeCodeCoveragesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves one or more code coverage reports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DescribeCodeCoveragesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DescribeCodeCoveragesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // DescribeCodeCoveragesInput
 *   reportArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sortOrder: "STRING_VALUE",
 *   sortBy: "STRING_VALUE",
 *   minLineCoveragePercentage: Number("double"),
 *   maxLineCoveragePercentage: Number("double"),
 * };
 * const command = new DescribeCodeCoveragesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCodeCoveragesOutput
 * //   nextToken: "STRING_VALUE",
 * //   codeCoverages: [ // CodeCoverages
 * //     { // CodeCoverage
 * //       id: "STRING_VALUE",
 * //       reportARN: "STRING_VALUE",
 * //       filePath: "STRING_VALUE",
 * //       lineCoveragePercentage: Number("double"),
 * //       linesCovered: Number("int"),
 * //       linesMissed: Number("int"),
 * //       branchCoveragePercentage: Number("double"),
 * //       branchesCovered: Number("int"),
 * //       branchesMissed: Number("int"),
 * //       expired: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCodeCoveragesCommandInput - {@link DescribeCodeCoveragesCommandInput}
 * @returns {@link DescribeCodeCoveragesCommandOutput}
 * @see {@link DescribeCodeCoveragesCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeCoveragesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class DescribeCodeCoveragesCommand extends $Command<
  DescribeCodeCoveragesCommandInput,
  DescribeCodeCoveragesCommandOutput,
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
  constructor(readonly input: DescribeCodeCoveragesCommandInput) {
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
  ): Handler<DescribeCodeCoveragesCommandInput, DescribeCodeCoveragesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCodeCoveragesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "DescribeCodeCoveragesCommand";
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
  private serialize(input: DescribeCodeCoveragesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCodeCoveragesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCodeCoveragesCommandOutput> {
    return de_DescribeCodeCoveragesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
