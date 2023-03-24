// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { StopContactRecordingRequest, StopContactRecordingResponse } from "../models/models_1";
import {
  deserializeAws_restJson1StopContactRecordingCommand,
  serializeAws_restJson1StopContactRecordingCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link StopContactRecordingCommand}.
 */
export interface StopContactRecordingCommandInput extends StopContactRecordingRequest {}
/**
 * @public
 *
 * The output of {@link StopContactRecordingCommand}.
 */
export interface StopContactRecordingCommandOutput extends StopContactRecordingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Stops recording a call when a contact is being recorded. StopContactRecording is a one-time
 *    action. If you use StopContactRecording to stop recording an ongoing call, you can't use
 *    StartContactRecording to restart it. For scenarios where the recording has started and you want
 *    to suspend it for sensitive information (for example, to collect a credit card number), and then
 *    restart it, use SuspendContactRecording and ResumeContactRecording.</p>
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = {
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   InitialContactId: "STRING_VALUE", // required
 * };
 * const command = new StopContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StopContactRecordingCommandInput - {@link StopContactRecordingCommandInput}
 * @returns {@link StopContactRecordingCommandOutput}
 * @see {@link StopContactRecordingCommandInput} for command's `input` shape.
 * @see {@link StopContactRecordingCommandOutput} for command's `response` shape.
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
 *
 */
export class StopContactRecordingCommand extends $Command<
  StopContactRecordingCommandInput,
  StopContactRecordingCommandOutput,
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
  constructor(readonly input: StopContactRecordingCommandInput) {
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
  ): Handler<StopContactRecordingCommandInput, StopContactRecordingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopContactRecordingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "StopContactRecordingCommand";
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
  private serialize(input: StopContactRecordingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopContactRecordingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopContactRecordingCommandOutput> {
    return deserializeAws_restJson1StopContactRecordingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
