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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateContactEvaluationRequest, UpdateContactEvaluationResponse } from "../models/models_1";
import { de_UpdateContactEvaluationCommand, se_UpdateContactEvaluationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactEvaluationCommand}.
 */
export interface UpdateContactEvaluationCommandInput extends UpdateContactEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactEvaluationCommand}.
 */
export interface UpdateContactEvaluationCommandOutput extends UpdateContactEvaluationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates details about a contact evaluation in the specified Amazon Connect instance. A
 *    contact evaluation must be in draft state. Answers included in the request are merged with
 *    existing answers for the given evaluation. An answer or note can be deleted by passing an empty
 *    object (<code>\{\}</code>) to the question identifier. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactEvaluationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactEvaluationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactEvaluationRequest
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
 * const command = new UpdateContactEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContactEvaluationResponse
 * //   EvaluationId: "STRING_VALUE", // required
 * //   EvaluationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateContactEvaluationCommandInput - {@link UpdateContactEvaluationCommandInput}
 * @returns {@link UpdateContactEvaluationCommandOutput}
 * @see {@link UpdateContactEvaluationCommandInput} for command's `input` shape.
 * @see {@link UpdateContactEvaluationCommandOutput} for command's `response` shape.
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
export class UpdateContactEvaluationCommand extends $Command<
  UpdateContactEvaluationCommandInput,
  UpdateContactEvaluationCommandOutput,
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
  constructor(readonly input: UpdateContactEvaluationCommandInput) {
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
  ): Handler<UpdateContactEvaluationCommandInput, UpdateContactEvaluationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateContactEvaluationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateContactEvaluationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "UpdateContactEvaluation",
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
  private serialize(input: UpdateContactEvaluationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateContactEvaluationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContactEvaluationCommandOutput> {
    return de_UpdateContactEvaluationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
