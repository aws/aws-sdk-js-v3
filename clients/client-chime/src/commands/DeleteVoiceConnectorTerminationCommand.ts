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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { DeleteVoiceConnectorTerminationRequest } from "../models/models_0";
import {
  de_DeleteVoiceConnectorTerminationCommand,
  se_DeleteVoiceConnectorTerminationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteVoiceConnectorTerminationCommand}.
 */
export interface DeleteVoiceConnectorTerminationCommandInput extends DeleteVoiceConnectorTerminationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceConnectorTerminationCommand}.
 */
export interface DeleteVoiceConnectorTerminationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Deletes the termination settings for the specified Amazon Chime Voice Connector.</p>
 *          <note>
 *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the termination settings.</p>
 *          </note>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceConnectorTermination.html">DeleteVoiceConnectorTermination</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteVoiceConnectorTerminationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteVoiceConnectorTerminationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DeleteVoiceConnectorTerminationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceConnectorTerminationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceConnectorTerminationCommandInput - {@link DeleteVoiceConnectorTerminationCommandInput}
 * @returns {@link DeleteVoiceConnectorTerminationCommandOutput}
 * @see {@link DeleteVoiceConnectorTerminationCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorTerminationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class DeleteVoiceConnectorTerminationCommand extends $Command<
  DeleteVoiceConnectorTerminationCommandInput,
  DeleteVoiceConnectorTerminationCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: DeleteVoiceConnectorTerminationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVoiceConnectorTerminationCommandInput, DeleteVoiceConnectorTerminationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVoiceConnectorTerminationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DeleteVoiceConnectorTerminationCommand";
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
  private serialize(
    input: DeleteVoiceConnectorTerminationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteVoiceConnectorTerminationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVoiceConnectorTerminationCommandOutput> {
    return de_DeleteVoiceConnectorTerminationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
