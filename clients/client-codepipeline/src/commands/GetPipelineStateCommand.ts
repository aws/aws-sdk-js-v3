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
import { GetPipelineStateInput, GetPipelineStateOutput } from "../models/models_0";
import { de_GetPipelineStateCommand, se_GetPipelineStateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPipelineStateCommand}.
 */
export interface GetPipelineStateCommandInput extends GetPipelineStateInput {}
/**
 * @public
 *
 * The output of {@link GetPipelineStateCommand}.
 */
export interface GetPipelineStateCommandOutput extends GetPipelineStateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the state of a pipeline, including the stages and
 *             actions.</p>
 *          <note>
 *             <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code>
 *                 fields indicate the source revision information, such as the commit ID, for the
 *                 current state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineStateCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetPipelineStateCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // GetPipelineStateInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetPipelineStateCommand(input);
 * const response = await client.send(command);
 * // { // GetPipelineStateOutput
 * //   pipelineName: "STRING_VALUE",
 * //   pipelineVersion: Number("int"),
 * //   stageStates: [ // StageStateList
 * //     { // StageState
 * //       stageName: "STRING_VALUE",
 * //       inboundExecution: { // StageExecution
 * //         pipelineExecutionId: "STRING_VALUE", // required
 * //         status: "Cancelled" || "InProgress" || "Failed" || "Stopped" || "Stopping" || "Succeeded", // required
 * //       },
 * //       inboundTransitionState: { // TransitionState
 * //         enabled: true || false,
 * //         lastChangedBy: "STRING_VALUE",
 * //         lastChangedAt: new Date("TIMESTAMP"),
 * //         disabledReason: "STRING_VALUE",
 * //       },
 * //       actionStates: [ // ActionStateList
 * //         { // ActionState
 * //           actionName: "STRING_VALUE",
 * //           currentRevision: { // ActionRevision
 * //             revisionId: "STRING_VALUE", // required
 * //             revisionChangeId: "STRING_VALUE", // required
 * //             created: new Date("TIMESTAMP"), // required
 * //           },
 * //           latestExecution: { // ActionExecution
 * //             actionExecutionId: "STRING_VALUE",
 * //             status: "InProgress" || "Abandoned" || "Succeeded" || "Failed",
 * //             summary: "STRING_VALUE",
 * //             lastStatusChange: new Date("TIMESTAMP"),
 * //             token: "STRING_VALUE",
 * //             lastUpdatedBy: "STRING_VALUE",
 * //             externalExecutionId: "STRING_VALUE",
 * //             externalExecutionUrl: "STRING_VALUE",
 * //             percentComplete: Number("int"),
 * //             errorDetails: { // ErrorDetails
 * //               code: "STRING_VALUE",
 * //               message: "STRING_VALUE",
 * //             },
 * //           },
 * //           entityUrl: "STRING_VALUE",
 * //           revisionUrl: "STRING_VALUE",
 * //         },
 * //       ],
 * //       latestExecution: {
 * //         pipelineExecutionId: "STRING_VALUE", // required
 * //         status: "Cancelled" || "InProgress" || "Failed" || "Stopped" || "Stopping" || "Succeeded", // required
 * //       },
 * //     },
 * //   ],
 * //   created: new Date("TIMESTAMP"),
 * //   updated: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetPipelineStateCommandInput - {@link GetPipelineStateCommandInput}
 * @returns {@link GetPipelineStateCommandOutput}
 * @see {@link GetPipelineStateCommandInput} for command's `input` shape.
 * @see {@link GetPipelineStateCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
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
export class GetPipelineStateCommand extends $Command<
  GetPipelineStateCommandInput,
  GetPipelineStateCommandOutput,
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
  constructor(readonly input: GetPipelineStateCommandInput) {
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
  ): Handler<GetPipelineStateCommandInput, GetPipelineStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPipelineStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "GetPipelineStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodePipeline_20150709",
        operation: "GetPipelineState",
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
  private serialize(input: GetPipelineStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPipelineStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPipelineStateCommandOutput> {
    return de_GetPipelineStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
