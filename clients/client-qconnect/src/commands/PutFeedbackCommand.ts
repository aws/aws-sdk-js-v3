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

import { PutFeedbackRequest, PutFeedbackResponse } from "../models/models_0";
import { de_PutFeedbackCommand, se_PutFeedbackCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutFeedbackCommand}.
 */
export interface PutFeedbackCommandInput extends PutFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link PutFeedbackCommand}.
 */
export interface PutFeedbackCommandOutput extends PutFeedbackResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides feedback against the specified assistant for the specified target. This API only supports generative targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, PutFeedbackCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, PutFeedbackCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // PutFeedbackRequest
 *   assistantId: "STRING_VALUE", // required
 *   targetId: "STRING_VALUE", // required
 *   targetType: "STRING_VALUE", // required
 *   contentFeedback: { // ContentFeedbackData Union: only one key present
 *     generativeContentFeedbackData: { // GenerativeContentFeedbackData
 *       relevance: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new PutFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // PutFeedbackResponse
 * //   assistantId: "STRING_VALUE", // required
 * //   assistantArn: "STRING_VALUE", // required
 * //   targetId: "STRING_VALUE", // required
 * //   targetType: "STRING_VALUE", // required
 * //   contentFeedback: { // ContentFeedbackData Union: only one key present
 * //     generativeContentFeedbackData: { // GenerativeContentFeedbackData
 * //       relevance: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutFeedbackCommandInput - {@link PutFeedbackCommandInput}
 * @returns {@link PutFeedbackCommandOutput}
 * @see {@link PutFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutFeedbackCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 */
export class PutFeedbackCommand extends $Command<
  PutFeedbackCommandInput,
  PutFeedbackCommandOutput,
  QConnectClientResolvedConfig
> {
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
  constructor(readonly input: PutFeedbackCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutFeedbackCommandInput, PutFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutFeedbackCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QConnectClient";
    const commandName = "PutFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WisdomService",
        operation: "PutFeedback",
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
  private serialize(input: PutFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutFeedbackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutFeedbackCommandOutput> {
    return de_PutFeedbackCommand(output, context);
  }
}
