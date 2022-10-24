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
  DeactivateContactChannelRequest,
  DeactivateContactChannelRequestFilterSensitiveLog,
  DeactivateContactChannelResult,
  DeactivateContactChannelResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeactivateContactChannelCommand,
  serializeAws_json1_1DeactivateContactChannelCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

export interface DeactivateContactChannelCommandInput extends DeactivateContactChannelRequest {}
export interface DeactivateContactChannelCommandOutput extends DeactivateContactChannelResult, __MetadataBearer {}

/**
 * <p>To no longer receive Incident Manager engagements to a contact channel, you can deactivate
 *          the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeactivateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeactivateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DeactivateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateContactChannelCommandInput} for command's `input` shape.
 * @see {@link DeactivateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 */
export class DeactivateContactChannelCommand extends $Command<
  DeactivateContactChannelCommandInput,
  DeactivateContactChannelCommandOutput,
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

  constructor(readonly input: DeactivateContactChannelCommandInput) {
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
  ): Handler<DeactivateContactChannelCommandInput, DeactivateContactChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeactivateContactChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "DeactivateContactChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeactivateContactChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeactivateContactChannelResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeactivateContactChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeactivateContactChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeactivateContactChannelCommandOutput> {
    return deserializeAws_json1_1DeactivateContactChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
