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

import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { CreateStageRequest, CreateStageResponse, CreateStageResponseFilterSensitiveLog } from "../models/models_0";
import { de_CreateStageCommand, se_CreateStageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateStageCommand}.
 */
export interface CreateStageCommandInput extends CreateStageRequest {}
/**
 * @public
 *
 * The output of {@link CreateStageCommand}.
 */
export interface CreateStageCommandOutput extends CreateStageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new stage (and optionally participant tokens).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, CreateStageCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, CreateStageCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // CreateStageRequest
 *   name: "STRING_VALUE",
 *   participantTokenConfigurations: [ // ParticipantTokenConfigurations
 *     { // ParticipantTokenConfiguration
 *       duration: Number("int"),
 *       userId: "STRING_VALUE",
 *       attributes: { // ParticipantTokenAttributes
 *         "<keys>": "STRING_VALUE",
 *       },
 *       capabilities: [ // ParticipantTokenCapabilities
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateStageCommand(input);
 * const response = await client.send(command);
 * // { // CreateStageResponse
 * //   stage: { // Stage
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     activeSessionId: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   participantTokens: [ // ParticipantTokenList
 * //     { // ParticipantToken
 * //       participantId: "STRING_VALUE",
 * //       token: "STRING_VALUE",
 * //       userId: "STRING_VALUE",
 * //       attributes: { // ParticipantTokenAttributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       duration: Number("int"),
 * //       capabilities: [ // ParticipantTokenCapabilities
 * //         "STRING_VALUE",
 * //       ],
 * //       expirationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateStageCommandInput - {@link CreateStageCommandInput}
 * @returns {@link CreateStageCommandOutput}
 * @see {@link CreateStageCommandInput} for command's `input` shape.
 * @see {@link CreateStageCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
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
export class CreateStageCommand extends $Command<
  CreateStageCommandInput,
  CreateStageCommandOutput,
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
  constructor(readonly input: CreateStageCommandInput) {
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
  ): Handler<CreateStageCommandInput, CreateStageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateStageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IVSRealTimeClient";
    const commandName = "CreateStageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateStageResponseFilterSensitiveLog,
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
  private serialize(input: CreateStageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateStageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStageCommandOutput> {
    return de_CreateStageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
