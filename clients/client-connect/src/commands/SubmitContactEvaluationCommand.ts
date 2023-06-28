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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { SubmitContactEvaluationRequest, SubmitContactEvaluationResponse } from "../models/models_1";
import { de_SubmitContactEvaluationCommand, se_SubmitContactEvaluationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SubmitContactEvaluationCommand}.
 */
export interface SubmitContactEvaluationCommandInput extends SubmitContactEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link SubmitContactEvaluationCommand}.
 */
export interface SubmitContactEvaluationCommandOutput extends SubmitContactEvaluationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Submits a contact evaluation in the specified Amazon Connect instance. Answers included
 *    in the request are merged with existing answers for the given evaluation. If no answers or notes
 *    are passed, the evaluation is submitted with the existing answers and notes. You can delete an
 *    answer or note by passing an empty object (<code>\{\}</code>) to the question identifier. </p>
 *          <p>If a contact evaluation is already in submitted state, this operation will trigger a
 *    resubmission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SubmitContactEvaluationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SubmitContactEvaluationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SubmitContactEvaluationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationId: "STRING_VALUE", // required
 *   Answers: { // EvaluationAnswersInputMap
 *     "<keys>": { // EvaluationAnswerInput
 *       Value: { // EvaluationAnswerData Union: only one key present
 *         StringValue: "STRING_VALUE",
 *         NumericValue: Number("double"),
 *         NotApplicable: true || false,
 *       },
 *     },
 *   },
 *   Notes: { // EvaluationNotesMap
 *     "<keys>": { // EvaluationNote
 *       Value: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new SubmitContactEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // SubmitContactEvaluationResponse
 * //   EvaluationId: "STRING_VALUE", // required
 * //   EvaluationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SubmitContactEvaluationCommandInput - {@link SubmitContactEvaluationCommandInput}
 * @returns {@link SubmitContactEvaluationCommandOutput}
 * @see {@link SubmitContactEvaluationCommandInput} for command's `input` shape.
 * @see {@link SubmitContactEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class SubmitContactEvaluationCommand extends $Command<
  SubmitContactEvaluationCommandInput,
  SubmitContactEvaluationCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: SubmitContactEvaluationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubmitContactEvaluationCommandInput, SubmitContactEvaluationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SubmitContactEvaluationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "SubmitContactEvaluationCommand";
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
  private serialize(input: SubmitContactEvaluationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SubmitContactEvaluationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubmitContactEvaluationCommandOutput> {
    return de_SubmitContactEvaluationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
