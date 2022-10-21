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
  AddSourceIdentifierToSubscriptionMessage,
  AddSourceIdentifierToSubscriptionMessageFilterSensitiveLog,
  AddSourceIdentifierToSubscriptionResult,
  AddSourceIdentifierToSubscriptionResultFilterSensitiveLog,
} from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryAddSourceIdentifierToSubscriptionCommand,
  serializeAws_queryAddSourceIdentifierToSubscriptionCommand,
} from "../protocols/Aws_query";

export interface AddSourceIdentifierToSubscriptionCommandInput extends AddSourceIdentifierToSubscriptionMessage {}
export interface AddSourceIdentifierToSubscriptionCommandOutput
  extends AddSourceIdentifierToSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Adds a source identifier to an existing event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, AddSourceIdentifierToSubscriptionCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, AddSourceIdentifierToSubscriptionCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new AddSourceIdentifierToSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddSourceIdentifierToSubscriptionCommandInput} for command's `input` shape.
 * @see {@link AddSourceIdentifierToSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 */
export class AddSourceIdentifierToSubscriptionCommand extends $Command<
  AddSourceIdentifierToSubscriptionCommandInput,
  AddSourceIdentifierToSubscriptionCommandOutput,
  NeptuneClientResolvedConfig
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

  constructor(readonly input: AddSourceIdentifierToSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddSourceIdentifierToSubscriptionCommandInput, AddSourceIdentifierToSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddSourceIdentifierToSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "AddSourceIdentifierToSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddSourceIdentifierToSubscriptionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: AddSourceIdentifierToSubscriptionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AddSourceIdentifierToSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAddSourceIdentifierToSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput> {
    return deserializeAws_queryAddSourceIdentifierToSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
