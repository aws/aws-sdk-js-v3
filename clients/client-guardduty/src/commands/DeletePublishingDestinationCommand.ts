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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import {
  DeletePublishingDestinationRequest,
  DeletePublishingDestinationRequestFilterSensitiveLog,
  DeletePublishingDestinationResponse,
  DeletePublishingDestinationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeletePublishingDestinationCommand,
  serializeAws_restJson1DeletePublishingDestinationCommand,
} from "../protocols/Aws_restJson1";

export interface DeletePublishingDestinationCommandInput extends DeletePublishingDestinationRequest {}
export interface DeletePublishingDestinationCommandOutput
  extends DeletePublishingDestinationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the publishing definition with the specified <code>destinationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeletePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeletePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeletePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link DeletePublishingDestinationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class DeletePublishingDestinationCommand extends $Command<
  DeletePublishingDestinationCommandInput,
  DeletePublishingDestinationCommandOutput,
  GuardDutyClientResolvedConfig
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

  constructor(readonly input: DeletePublishingDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePublishingDestinationCommandInput, DeletePublishingDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePublishingDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "DeletePublishingDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePublishingDestinationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeletePublishingDestinationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePublishingDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePublishingDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePublishingDestinationCommandOutput> {
    return deserializeAws_restJson1DeletePublishingDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
