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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { DeleteChannelMessageRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteChannelMessageCommand,
  serializeAws_restJson1DeleteChannelMessageCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteChannelMessageCommand}.
 */
export interface DeleteChannelMessageCommandInput extends DeleteChannelMessageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChannelMessageCommand}.
 */
export interface DeleteChannelMessageCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a channel message. Only admins can perform this action. Deletion makes messages
 *          inaccessible immediately. A background process deletes any revisions created by
 *             <code>UpdateChannelMessage</code>.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteChannelMessageCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteChannelMessageCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteChannelMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteChannelMessageCommandInput - {@link DeleteChannelMessageCommandInput}
 * @returns {@link DeleteChannelMessageCommandOutput}
 * @see {@link DeleteChannelMessageCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
 *
 */
export class DeleteChannelMessageCommand extends $Command<
  DeleteChannelMessageCommandInput,
  DeleteChannelMessageCommandOutput,
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
  constructor(readonly input: DeleteChannelMessageCommandInput) {
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
  ): Handler<DeleteChannelMessageCommandInput, DeleteChannelMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteChannelMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DeleteChannelMessageCommand";
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
  private serialize(input: DeleteChannelMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteChannelMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteChannelMessageCommandOutput> {
    return deserializeAws_restJson1DeleteChannelMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
