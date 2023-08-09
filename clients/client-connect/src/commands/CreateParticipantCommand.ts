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
import { CreateParticipantRequest, CreateParticipantResponse } from "../models/models_0";
import { de_CreateParticipantCommand, se_CreateParticipantCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateParticipantCommand}.
 */
export interface CreateParticipantCommandInput extends CreateParticipantRequest {}
/**
 * @public
 *
 * The output of {@link CreateParticipantCommand}.
 */
export interface CreateParticipantCommandOutput extends CreateParticipantResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a new participant into an on-going chat contact. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-customize-flow.html">Customize chat
 *     flow experiences by integrating custom participants</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateParticipantCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateParticipantCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreateParticipantRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   ParticipantDetails: { // ParticipantDetailsToAdd
 *     ParticipantRole: "AGENT" || "CUSTOMER" || "SYSTEM" || "CUSTOM_BOT",
 *     DisplayName: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateParticipantCommand(input);
 * const response = await client.send(command);
 * // { // CreateParticipantResponse
 * //   ParticipantCredentials: { // ParticipantTokenCredentials
 * //     ParticipantToken: "STRING_VALUE",
 * //     Expiry: "STRING_VALUE",
 * //   },
 * //   ParticipantId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateParticipantCommandInput - {@link CreateParticipantCommandInput}
 * @returns {@link CreateParticipantCommandOutput}
 * @see {@link CreateParticipantCommandInput} for command's `input` shape.
 * @see {@link CreateParticipantCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class CreateParticipantCommand extends $Command<
  CreateParticipantCommandInput,
  CreateParticipantCommandOutput,
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
  constructor(readonly input: CreateParticipantCommandInput) {
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
  ): Handler<CreateParticipantCommandInput, CreateParticipantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateParticipantCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateParticipantCommand";
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
  private serialize(input: CreateParticipantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateParticipantCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateParticipantCommandOutput> {
    return de_CreateParticipantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
