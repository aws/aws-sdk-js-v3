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

import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import {
  StartAttachmentUploadRequest,
  StartAttachmentUploadRequestFilterSensitiveLog,
  StartAttachmentUploadResponse,
  StartAttachmentUploadResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartAttachmentUploadCommand,
  serializeAws_restJson1StartAttachmentUploadCommand,
} from "../protocols/Aws_restJson1";

export interface StartAttachmentUploadCommandInput extends StartAttachmentUploadRequest {}
export interface StartAttachmentUploadCommandOutput extends StartAttachmentUploadResponse, __MetadataBearer {}

/**
 * <p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to
 *             S3.</p>
 *          <note>
 *             <p>
 *                <code>ConnectionToken</code> is used for invoking this API instead of
 *                     <code>ParticipantToken</code>.</p>
 *          </note>
 *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                     authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, StartAttachmentUploadCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, StartAttachmentUploadCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new StartAttachmentUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAttachmentUploadCommandInput} for command's `input` shape.
 * @see {@link StartAttachmentUploadCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for ConnectParticipantClient's `config` shape.
 *
 */
export class StartAttachmentUploadCommand extends $Command<
  StartAttachmentUploadCommandInput,
  StartAttachmentUploadCommandOutput,
  ConnectParticipantClientResolvedConfig
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

  constructor(readonly input: StartAttachmentUploadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectParticipantClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartAttachmentUploadCommandInput, StartAttachmentUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAttachmentUploadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "StartAttachmentUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAttachmentUploadRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartAttachmentUploadResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartAttachmentUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartAttachmentUploadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartAttachmentUploadCommandOutput> {
    return deserializeAws_restJson1StartAttachmentUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
