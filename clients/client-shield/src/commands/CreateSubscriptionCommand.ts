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
  CreateSubscriptionRequest,
  CreateSubscriptionRequestFilterSensitiveLog,
  CreateSubscriptionResponse,
  CreateSubscriptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateSubscriptionCommand,
  serializeAws_json1_1CreateSubscriptionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

export interface CreateSubscriptionCommandInput extends CreateSubscriptionRequest {}
export interface CreateSubscriptionCommandOutput extends CreateSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Activates Shield Advanced for an account.</p>
 *          <note>
 *             <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account,
 *               regardless of whether the payer account itself is subscribed. </p>
 *          </note>
 *          <p>When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period.  You can change this by submitting an <code>UpdateSubscription</code> request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, CreateSubscriptionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, CreateSubscriptionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new CreateSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 */
export class CreateSubscriptionCommand extends $Command<
  CreateSubscriptionCommandInput,
  CreateSubscriptionCommandOutput,
  ShieldClientResolvedConfig
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

  constructor(readonly input: CreateSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "CreateSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSubscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSubscriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSubscriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSubscriptionCommandOutput> {
    return deserializeAws_json1_1CreateSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
