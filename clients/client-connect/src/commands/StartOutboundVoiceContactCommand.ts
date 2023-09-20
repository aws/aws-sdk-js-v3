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
import { StartOutboundVoiceContactRequest, StartOutboundVoiceContactResponse } from "../models/models_1";
import { de_StartOutboundVoiceContactCommand, se_StartOutboundVoiceContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartOutboundVoiceContactCommand}.
 */
export interface StartOutboundVoiceContactCommandInput extends StartOutboundVoiceContactRequest {}
/**
 * @public
 *
 * The output of {@link StartOutboundVoiceContactCommand}.
 */
export interface StartOutboundVoiceContactCommandOutput extends StartOutboundVoiceContactResponse, __MetadataBearer {}

/**
 * @public
 * <p>Places an outbound call to a contact, and then initiates the flow. It performs the actions
 *    in the flow that's specified (in <code>ContactFlowId</code>).</p>
 *          <p>Agents do not initiate the outbound API, which means that they do not dial the contact. If
 *    the flow places an outbound call to a contact, and then puts the contact in queue, the call is
 *    then routed to the agent, like any other inbound case.</p>
 *          <p>There is a 60-second dialing timeout for this operation. If the call is not connected after
 *    60 seconds, it fails.</p>
 *          <note>
 *             <p>UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK
 *     mobile numbers, you must submit a service quota increase request. For more information, see
 *      <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator
 *      Guide</i>. </p>
 *          </note>
 *          <note>
 *             <p>Campaign calls are not allowed by default. Before you can make a call with
 *      <code>TrafficType</code> = <code>CAMPAIGN</code>, you must submit a service quota increase
 *     request to the quota <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#outbound-communications-quotas">Amazon Connect campaigns</a>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartOutboundVoiceContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartOutboundVoiceContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // StartOutboundVoiceContactRequest
 *   DestinationPhoneNumber: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   SourcePhoneNumber: "STRING_VALUE",
 *   QueueId: "STRING_VALUE",
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AnswerMachineDetectionConfig: { // AnswerMachineDetectionConfig
 *     EnableAnswerMachineDetection: true || false,
 *     AwaitAnswerMachinePrompt: true || false,
 *   },
 *   CampaignId: "STRING_VALUE",
 *   TrafficType: "GENERAL" || "CAMPAIGN",
 * };
 * const command = new StartOutboundVoiceContactCommand(input);
 * const response = await client.send(command);
 * // { // StartOutboundVoiceContactResponse
 * //   ContactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartOutboundVoiceContactCommandInput - {@link StartOutboundVoiceContactCommandInput}
 * @returns {@link StartOutboundVoiceContactCommandOutput}
 * @see {@link StartOutboundVoiceContactCommandInput} for command's `input` shape.
 * @see {@link StartOutboundVoiceContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DestinationNotAllowedException} (client fault)
 *  <p>Outbound calls to the destination number are not allowed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link OutboundContactNotPermittedException} (client fault)
 *  <p>The contact is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class StartOutboundVoiceContactCommand extends $Command<
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput,
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
  constructor(readonly input: StartOutboundVoiceContactCommandInput) {
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
  ): Handler<StartOutboundVoiceContactCommandInput, StartOutboundVoiceContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartOutboundVoiceContactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "StartOutboundVoiceContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "StartOutboundVoiceContact",
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
  private serialize(input: StartOutboundVoiceContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartOutboundVoiceContactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartOutboundVoiceContactCommandOutput> {
    return de_StartOutboundVoiceContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
