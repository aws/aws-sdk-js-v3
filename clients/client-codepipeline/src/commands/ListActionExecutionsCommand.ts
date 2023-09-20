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
import { ListActionExecutionsInput, ListActionExecutionsOutput } from "../models/models_0";
import { de_ListActionExecutionsCommand, se_ListActionExecutionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListActionExecutionsCommand}.
 */
export interface ListActionExecutionsCommandInput extends ListActionExecutionsInput {}
/**
 * @public
 *
 * The output of {@link ListActionExecutionsCommand}.
 */
export interface ListActionExecutionsCommandOutput extends ListActionExecutionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the action executions that have occurred in a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListActionExecutionsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListActionExecutionsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // ListActionExecutionsInput
 *   pipelineName: "STRING_VALUE", // required
 *   filter: { // ActionExecutionFilter
 *     pipelineExecutionId: "STRING_VALUE",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListActionExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListActionExecutionsOutput
 * //   actionExecutionDetails: [ // ActionExecutionDetailList
 * //     { // ActionExecutionDetail
 * //       pipelineExecutionId: "STRING_VALUE",
 * //       actionExecutionId: "STRING_VALUE",
 * //       pipelineVersion: Number("int"),
 * //       stageName: "STRING_VALUE",
 * //       actionName: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       status: "InProgress" || "Abandoned" || "Succeeded" || "Failed",
 * //       input: { // ActionExecutionInput
 * //         actionTypeId: { // ActionTypeId
 * //           category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 * //           owner: "AWS" || "ThirdParty" || "Custom", // required
 * //           provider: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //         },
 * //         configuration: { // ActionConfigurationMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         resolvedConfiguration: { // ResolvedActionConfigurationMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         roleArn: "STRING_VALUE",
 * //         region: "STRING_VALUE",
 * //         inputArtifacts: [ // ArtifactDetailList
 * //           { // ArtifactDetail
 * //             name: "STRING_VALUE",
 * //             s3location: { // S3Location
 * //               bucket: "STRING_VALUE",
 * //               key: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         namespace: "STRING_VALUE",
 * //       },
 * //       output: { // ActionExecutionOutput
 * //         outputArtifacts: [
 * //           {
 * //             name: "STRING_VALUE",
 * //             s3location: {
 * //               bucket: "STRING_VALUE",
 * //               key: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         executionResult: { // ActionExecutionResult
 * //           externalExecutionId: "STRING_VALUE",
 * //           externalExecutionSummary: "STRING_VALUE",
 * //           externalExecutionUrl: "STRING_VALUE",
 * //         },
 * //         outputVariables: { // OutputVariablesMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListActionExecutionsCommandInput - {@link ListActionExecutionsCommandInput}
 * @returns {@link ListActionExecutionsCommandOutput}
 * @see {@link ListActionExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListActionExecutionsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format. Make sure that the next token
 *             you provide is the token returned by a previous call.</p>
 *
 * @throws {@link PipelineExecutionNotFoundException} (client fault)
 *  <p>The pipeline execution was specified in an invalid format or cannot be found, or an
 *             execution ID does not belong to the specified pipeline. </p>
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
export class ListActionExecutionsCommand extends $Command<
  ListActionExecutionsCommandInput,
  ListActionExecutionsCommandOutput,
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
  constructor(readonly input: ListActionExecutionsCommandInput) {
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
  ): Handler<ListActionExecutionsCommandInput, ListActionExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListActionExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "ListActionExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodePipeline_20150709",
        operation: "ListActionExecutions",
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
  private serialize(input: ListActionExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListActionExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListActionExecutionsCommandOutput> {
    return de_ListActionExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
