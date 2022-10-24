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
  ActivateContactChannelRequest,
  ActivateContactChannelRequestFilterSensitiveLog,
  ActivateContactChannelResult,
  ActivateContactChannelResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ActivateContactChannelCommand,
  serializeAws_json1_1ActivateContactChannelCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

export interface ActivateContactChannelCommandInput extends ActivateContactChannelRequest {}
export interface ActivateContactChannelCommandOutput extends ActivateContactChannelResult, __MetadataBearer {}

/**
 * <p>Activates a contact's contact channel. Incident Manager can't engage a contact until the
 *          contact channel has been activated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ActivateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ActivateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ActivateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateContactChannelCommandInput} for command's `input` shape.
 * @see {@link ActivateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 */
export class ActivateContactChannelCommand extends $Command<
  ActivateContactChannelCommandInput,
  ActivateContactChannelCommandOutput,
  SSMContactsClientResolvedConfig
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

  constructor(readonly input: ActivateContactChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ActivateContactChannelCommandInput, ActivateContactChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ActivateContactChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "ActivateContactChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ActivateContactChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ActivateContactChannelResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ActivateContactChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ActivateContactChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateContactChannelCommandOutput> {
    return deserializeAws_json1_1ActivateContactChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
