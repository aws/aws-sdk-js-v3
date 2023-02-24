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
  CompleteAttachmentUploadRequest,
  CompleteAttachmentUploadRequestFilterSensitiveLog,
  CompleteAttachmentUploadResponse,
  CompleteAttachmentUploadResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CompleteAttachmentUploadCommand,
  serializeAws_restJson1CompleteAttachmentUploadCommand,
} from "../protocols/Aws_restJson1";

export interface CompleteAttachmentUploadCommandInput extends CompleteAttachmentUploadRequest {}
export interface CompleteAttachmentUploadCommandOutput extends CompleteAttachmentUploadResponse, __MetadataBearer {}

/**
 * <p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL
 *             provided in StartAttachmentUpload API. </p>
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
 * import { ConnectParticipantClient, CompleteAttachmentUploadCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, CompleteAttachmentUploadCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new CompleteAttachmentUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteAttachmentUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteAttachmentUploadCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for ConnectParticipantClient's `config` shape.
 *
 */
export class CompleteAttachmentUploadCommand extends $Command<
  CompleteAttachmentUploadCommandInput,
  CompleteAttachmentUploadCommandOutput,
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

  constructor(readonly input: CompleteAttachmentUploadCommandInput) {
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
  ): Handler<CompleteAttachmentUploadCommandInput, CompleteAttachmentUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CompleteAttachmentUploadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "CompleteAttachmentUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CompleteAttachmentUploadRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CompleteAttachmentUploadResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CompleteAttachmentUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CompleteAttachmentUploadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteAttachmentUploadCommandOutput> {
    return deserializeAws_restJson1CompleteAttachmentUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
