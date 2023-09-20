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
import {
  CreateParticipantTokenRequest,
  CreateParticipantTokenResponse,
  CreateParticipantTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateParticipantTokenCommand, se_CreateParticipantTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateParticipantTokenCommand}.
 */
export interface CreateParticipantTokenCommandInput extends CreateParticipantTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateParticipantTokenCommand}.
 */
export interface CreateParticipantTokenCommandOutput extends CreateParticipantTokenResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an additional token for a specified stage. This can be done after stage creation
 *          or when tokens expire. Tokens always are scoped to the stage for which they are
 *          created.</p>
 *          <p>Encryption keys are owned by Amazon IVS and never used directly by your
 *          application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, CreateParticipantTokenCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, CreateParticipantTokenCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // CreateParticipantTokenRequest
 *   stageArn: "STRING_VALUE", // required
 *   duration: Number("int"),
 *   userId: "STRING_VALUE",
 *   attributes: { // ParticipantTokenAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   capabilities: [ // ParticipantTokenCapabilities
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateParticipantTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateParticipantTokenResponse
 * //   participantToken: { // ParticipantToken
 * //     participantId: "STRING_VALUE",
 * //     token: "STRING_VALUE",
 * //     userId: "STRING_VALUE",
 * //     attributes: { // ParticipantTokenAttributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     duration: Number("int"),
 * //     capabilities: [ // ParticipantTokenCapabilities
 * //       "STRING_VALUE",
 * //     ],
 * //     expirationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateParticipantTokenCommandInput - {@link CreateParticipantTokenCommandInput}
 * @returns {@link CreateParticipantTokenCommandOutput}
 * @see {@link CreateParticipantTokenCommandInput} for command's `input` shape.
 * @see {@link CreateParticipantTokenCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 */
export class CreateParticipantTokenCommand extends $Command<
  CreateParticipantTokenCommandInput,
  CreateParticipantTokenCommandOutput,
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
  constructor(readonly input: CreateParticipantTokenCommandInput) {
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
  ): Handler<CreateParticipantTokenCommandInput, CreateParticipantTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateParticipantTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IVSRealTimeClient";
    const commandName = "CreateParticipantTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateParticipantTokenResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonInteractiveVideoServiceRealTime",
        operation: "CreateParticipantToken",
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
  private serialize(input: CreateParticipantTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateParticipantTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateParticipantTokenCommandOutput> {
    return de_CreateParticipantTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
