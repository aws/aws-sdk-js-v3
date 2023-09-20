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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListPipelineExecutionsInput, ListPipelineExecutionsOutput } from "../models/models_0";
import { de_ListPipelineExecutionsCommand, se_ListPipelineExecutionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPipelineExecutionsCommand}.
 */
export interface ListPipelineExecutionsCommandInput extends ListPipelineExecutionsInput {}
/**
 * @public
 *
 * The output of {@link ListPipelineExecutionsCommand}.
 */
export interface ListPipelineExecutionsCommandOutput extends ListPipelineExecutionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets a summary of the most recent executions for a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListPipelineExecutionsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListPipelineExecutionsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // ListPipelineExecutionsInput
 *   pipelineName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPipelineExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelineExecutionsOutput
 * //   pipelineExecutionSummaries: [ // PipelineExecutionSummaryList
 * //     { // PipelineExecutionSummary
 * //       pipelineExecutionId: "STRING_VALUE",
 * //       status: "Cancelled" || "InProgress" || "Stopped" || "Stopping" || "Succeeded" || "Superseded" || "Failed",
 * //       startTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       sourceRevisions: [ // SourceRevisionList
 * //         { // SourceRevision
 * //           actionName: "STRING_VALUE", // required
 * //           revisionId: "STRING_VALUE",
 * //           revisionSummary: "STRING_VALUE",
 * //           revisionUrl: "STRING_VALUE",
 * //         },
 * //       ],
 * //       trigger: { // ExecutionTrigger
 * //         triggerType: "CreatePipeline" || "StartPipelineExecution" || "PollForSourceChanges" || "Webhook" || "CloudWatchEvent" || "PutActionRevision",
 * //         triggerDetail: "STRING_VALUE",
 * //       },
 * //       stopTrigger: { // StopExecutionTrigger
 * //         reason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipelineExecutionsCommandInput - {@link ListPipelineExecutionsCommandInput}
 * @returns {@link ListPipelineExecutionsCommandOutput}
 * @see {@link ListPipelineExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineExecutionsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format. Make sure that the next token
 *             you provide is the token returned by a previous call.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class ListPipelineExecutionsCommand extends $Command<
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
  CodePipelineClientResolvedConfig
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
  constructor(readonly input: ListPipelineExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPipelineExecutionsCommandInput, ListPipelineExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPipelineExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "ListPipelineExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodePipeline_20150709",
        operation: "ListPipelineExecutions",
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
  private serialize(input: ListPipelineExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPipelineExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPipelineExecutionsCommandOutput> {
    return de_ListPipelineExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
