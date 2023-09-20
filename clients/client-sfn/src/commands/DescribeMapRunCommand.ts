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

import { DescribeMapRunInput, DescribeMapRunOutput } from "../models/models_0";
import { de_DescribeMapRunCommand, se_DescribeMapRunCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMapRunCommand}.
 */
export interface DescribeMapRunCommandInput extends DescribeMapRunInput {}
/**
 * @public
 *
 * The output of {@link DescribeMapRunCommand}.
 */
export interface DescribeMapRunCommandOutput extends DescribeMapRunOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about a Map Run's configuration, progress, and results. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeMapRunCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeMapRunCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // DescribeMapRunInput
 *   mapRunArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeMapRunCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMapRunOutput
 * //   mapRunArn: "STRING_VALUE", // required
 * //   executionArn: "STRING_VALUE", // required
 * //   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "ABORTED", // required
 * //   startDate: new Date("TIMESTAMP"), // required
 * //   stopDate: new Date("TIMESTAMP"),
 * //   maxConcurrency: Number("int"), // required
 * //   toleratedFailurePercentage: Number("float"), // required
 * //   toleratedFailureCount: Number("long"), // required
 * //   itemCounts: { // MapRunItemCounts
 * //     pending: Number("long"), // required
 * //     running: Number("long"), // required
 * //     succeeded: Number("long"), // required
 * //     failed: Number("long"), // required
 * //     timedOut: Number("long"), // required
 * //     aborted: Number("long"), // required
 * //     total: Number("long"), // required
 * //     resultsWritten: Number("long"), // required
 * //   },
 * //   executionCounts: { // MapRunExecutionCounts
 * //     pending: Number("long"), // required
 * //     running: Number("long"), // required
 * //     succeeded: Number("long"), // required
 * //     failed: Number("long"), // required
 * //     timedOut: Number("long"), // required
 * //     aborted: Number("long"), // required
 * //     total: Number("long"), // required
 * //     resultsWritten: Number("long"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMapRunCommandInput - {@link DescribeMapRunCommandInput}
 * @returns {@link DescribeMapRunCommandOutput}
 * @see {@link DescribeMapRunCommandInput} for command's `input` shape.
 * @see {@link DescribeMapRunCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Could not find the referenced resource.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class DescribeMapRunCommand extends $Command<
  DescribeMapRunCommandInput,
  DescribeMapRunCommandOutput,
  SFNClientResolvedConfig
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
  constructor(readonly input: DescribeMapRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMapRunCommandInput, DescribeMapRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMapRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DescribeMapRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStepFunctions",
        operation: "DescribeMapRun",
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
  private serialize(input: DescribeMapRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMapRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMapRunCommandOutput> {
    return de_DescribeMapRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
