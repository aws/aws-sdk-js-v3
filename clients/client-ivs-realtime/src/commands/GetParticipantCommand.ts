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
import { GetParticipantRequest, GetParticipantResponse } from "../models/models_0";
import { de_GetParticipantCommand, se_GetParticipantCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetParticipantCommand}.
 */
export interface GetParticipantCommandInput extends GetParticipantRequest {}
/**
 * @public
 *
 * The output of {@link GetParticipantCommand}.
 */
export interface GetParticipantCommandOutput extends GetParticipantResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the specified participant token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetParticipantCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetParticipantCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetParticipantRequest
 *   stageArn: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   participantId: "STRING_VALUE", // required
 * };
 * const command = new GetParticipantCommand(input);
 * const response = await client.send(command);
 * // { // GetParticipantResponse
 * //   participant: { // Participant
 * //     participantId: "STRING_VALUE",
 * //     userId: "STRING_VALUE",
 * //     state: "STRING_VALUE",
 * //     firstJoinTime: new Date("TIMESTAMP"),
 * //     attributes: { // ParticipantAttributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     published: true || false,
 * //     ispName: "STRING_VALUE",
 * //     osName: "STRING_VALUE",
 * //     osVersion: "STRING_VALUE",
 * //     browserName: "STRING_VALUE",
 * //     browserVersion: "STRING_VALUE",
 * //     sdkVersion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetParticipantCommandInput - {@link GetParticipantCommandInput}
 * @returns {@link GetParticipantCommandOutput}
 * @see {@link GetParticipantCommandInput} for command's `input` shape.
 * @see {@link GetParticipantCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
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
export class GetParticipantCommand extends $Command<
  GetParticipantCommandInput,
  GetParticipantCommandOutput,
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
  constructor(readonly input: GetParticipantCommandInput) {
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
  ): Handler<GetParticipantCommandInput, GetParticipantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetParticipantCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IVSRealTimeClient";
    const commandName = "GetParticipantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonInteractiveVideoServiceRealTime",
        operation: "GetParticipant",
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
  private serialize(input: GetParticipantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetParticipantCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParticipantCommandOutput> {
    return de_GetParticipantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
