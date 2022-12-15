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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  SubmitAttachmentStateChangesRequest,
  SubmitAttachmentStateChangesRequestFilterSensitiveLog,
  SubmitAttachmentStateChangesResponse,
  SubmitAttachmentStateChangesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SubmitAttachmentStateChangesCommand,
  serializeAws_json1_1SubmitAttachmentStateChangesCommand,
} from "../protocols/Aws_json1_1";

export interface SubmitAttachmentStateChangesCommandInput extends SubmitAttachmentStateChangesRequest {}
export interface SubmitAttachmentStateChangesCommandOutput
  extends SubmitAttachmentStateChangesResponse,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to acknowledge that an attachment changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitAttachmentStateChangesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitAttachmentStateChangesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new SubmitAttachmentStateChangesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitAttachmentStateChangesCommandInput} for command's `input` shape.
 * @see {@link SubmitAttachmentStateChangesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class SubmitAttachmentStateChangesCommand extends $Command<
  SubmitAttachmentStateChangesCommandInput,
  SubmitAttachmentStateChangesCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: SubmitAttachmentStateChangesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubmitAttachmentStateChangesCommandInput, SubmitAttachmentStateChangesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SubmitAttachmentStateChangesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "SubmitAttachmentStateChangesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubmitAttachmentStateChangesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SubmitAttachmentStateChangesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubmitAttachmentStateChangesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SubmitAttachmentStateChangesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SubmitAttachmentStateChangesCommandOutput> {
    return deserializeAws_json1_1SubmitAttachmentStateChangesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
