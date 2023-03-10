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
  CreateContactChannelRequest,
  CreateContactChannelRequestFilterSensitiveLog,
  CreateContactChannelResult,
  CreateContactChannelResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateContactChannelCommand,
  serializeAws_json1_1CreateContactChannelCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * The input for {@link CreateContactChannelCommand}.
 */
export interface CreateContactChannelCommandInput extends CreateContactChannelRequest {}
/**
 * The output of {@link CreateContactChannelCommand}.
 */
export interface CreateContactChannelCommandOutput extends CreateContactChannelResult, __MetadataBearer {}

/**
 * <p>A contact channel is the method that Incident Manager uses to engage your contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new CreateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactChannelCommandInput} for command's `input` shape.
 * @see {@link CreateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @example To create a contact channel
 * ```javascript
 * // Creates a contact channel of type SMS for the contact Akua Mansa. Contact channels can be created of type SMS, EMAIL, or VOICE.
 * const input = {
 *   "ContactId": "arn:aws:ssm-contacts:us-east-1:111122223333:contact/akuam",
 *   "DeliveryAddress": {
 *     "SimpleAddress": "+15005550199"
 *   },
 *   "Name": "akuas sms-test",
 *   "Type": "SMS"
 * };
 * const command = new CreateContactChannelCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ContactChannelArn": "arn:aws:ssm-contacts:us-east-1:111122223333:contact-channel/akuam/02f506b9-ea5d-4764-af89-2daa793ff024"
 * }
 * *\/
 * // example id: to-create-a-contact-channel-1630360447010
 * ```
 *
 */
export class CreateContactChannelCommand extends $Command<
  CreateContactChannelCommandInput,
  CreateContactChannelCommandOutput,
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

  constructor(readonly input: CreateContactChannelCommandInput) {
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
  ): Handler<CreateContactChannelCommandInput, CreateContactChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateContactChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "CreateContactChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContactChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateContactChannelResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateContactChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContactChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateContactChannelCommandOutput> {
    return deserializeAws_json1_1CreateContactChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
