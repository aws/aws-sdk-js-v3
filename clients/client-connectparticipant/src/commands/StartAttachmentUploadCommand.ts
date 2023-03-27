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
import { StartAttachmentUploadRequest, StartAttachmentUploadResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartAttachmentUploadCommand,
  serializeAws_restJson1StartAttachmentUploadCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link StartAttachmentUploadCommand}.
 */
export interface StartAttachmentUploadCommandInput extends StartAttachmentUploadRequest {}
/**
 * @public
 *
 * The output of {@link StartAttachmentUploadCommand}.
 */
export interface StartAttachmentUploadCommandOutput extends StartAttachmentUploadResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // StartAttachmentUploadRequest
 *   ContentType: "STRING_VALUE", // required
 *   AttachmentSizeInBytes: Number("long"), // required
 *   AttachmentName: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   ConnectionToken: "STRING_VALUE", // required
 * };
 * const command = new StartAttachmentUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartAttachmentUploadCommandInput - {@link StartAttachmentUploadCommandInput}
 * @returns {@link StartAttachmentUploadCommandOutput}
 * @see {@link StartAttachmentUploadCommandInput} for command's `input` shape.
 * @see {@link StartAttachmentUploadCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for ConnectParticipantClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of attachments per contact exceeds the quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
 *
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

  /**
   * @public
   */
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
  private serialize(input: StartAttachmentUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartAttachmentUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartAttachmentUploadCommandOutput> {
    return deserializeAws_restJson1StartAttachmentUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
