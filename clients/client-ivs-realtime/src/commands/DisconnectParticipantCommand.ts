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

import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { DisconnectParticipantRequest, DisconnectParticipantResponse } from "../models/models_0";
import { de_DisconnectParticipantCommand, se_DisconnectParticipantCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisconnectParticipantCommand}.
 */
export interface DisconnectParticipantCommandInput extends DisconnectParticipantRequest {}
/**
 * @public
 *
 * The output of {@link DisconnectParticipantCommand}.
 */
export interface DisconnectParticipantCommandOutput extends DisconnectParticipantResponse, __MetadataBearer {}

/**
 * @public
 * <p>Disconnects a specified participant and revokes the participant permanently from a
 *          specified stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, DisconnectParticipantCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, DisconnectParticipantCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // DisconnectParticipantRequest
 *   stageArn: "STRING_VALUE", // required
 *   participantId: "STRING_VALUE", // required
 *   reason: "STRING_VALUE",
 * };
 * const command = new DisconnectParticipantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisconnectParticipantCommandInput - {@link DisconnectParticipantCommandInput}
 * @returns {@link DisconnectParticipantCommandOutput}
 * @see {@link DisconnectParticipantCommandInput} for command's `input` shape.
 * @see {@link DisconnectParticipantCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 */
export class DisconnectParticipantCommand extends $Command<
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
  IVSRealTimeClientResolvedConfig
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
  constructor(readonly input: DisconnectParticipantCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IVSRealTimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisconnectParticipantCommandInput, DisconnectParticipantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisconnectParticipantCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IVSRealTimeClient";
    const commandName = "DisconnectParticipantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonInteractiveVideoServiceRealTime",
        operation: "DisconnectParticipant",
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
  private serialize(input: DisconnectParticipantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisconnectParticipantCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisconnectParticipantCommandOutput> {
    return de_DisconnectParticipantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
