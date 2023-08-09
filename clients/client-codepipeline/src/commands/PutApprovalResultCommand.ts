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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutApprovalResultInput, PutApprovalResultOutput } from "../models/models_0";
import { de_PutApprovalResultCommand, se_PutApprovalResultCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutApprovalResultCommand}.
 */
export interface PutApprovalResultCommandInput extends PutApprovalResultInput {}
/**
 * @public
 *
 * The output of {@link PutApprovalResultCommand}.
 */
export interface PutApprovalResultCommandOutput extends PutApprovalResultOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides the response to a manual approval request to CodePipeline. Valid
 *             responses include Approved and Rejected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutApprovalResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutApprovalResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // PutApprovalResultInput
 *   pipelineName: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   actionName: "STRING_VALUE", // required
 *   result: { // ApprovalResult
 *     summary: "STRING_VALUE", // required
 *     status: "Approved" || "Rejected", // required
 *   },
 *   token: "STRING_VALUE", // required
 * };
 * const command = new PutApprovalResultCommand(input);
 * const response = await client.send(command);
 * // { // PutApprovalResultOutput
 * //   approvedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutApprovalResultCommandInput - {@link PutApprovalResultCommandInput}
 * @returns {@link PutApprovalResultCommandOutput}
 * @see {@link PutApprovalResultCommandInput} for command's `input` shape.
 * @see {@link PutApprovalResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionNotFoundException} (client fault)
 *  <p>The specified action cannot be found.</p>
 *
 * @throws {@link ApprovalAlreadyCompletedException} (client fault)
 *  <p>The approval action has already been approved or rejected.</p>
 *
 * @throws {@link InvalidApprovalTokenException} (client fault)
 *  <p>The approval request already received a response or has expired.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link StageNotFoundException} (client fault)
 *  <p>The stage was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class PutApprovalResultCommand extends $Command<
  PutApprovalResultCommandInput,
  PutApprovalResultCommandOutput,
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
  constructor(readonly input: PutApprovalResultCommandInput) {
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
  ): Handler<PutApprovalResultCommandInput, PutApprovalResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutApprovalResultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutApprovalResultCommand";
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
  private serialize(input: PutApprovalResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutApprovalResultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutApprovalResultCommandOutput> {
    return de_PutApprovalResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
