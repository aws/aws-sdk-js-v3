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

import { AddSourceIdentifierToSubscriptionMessage, AddSourceIdentifierToSubscriptionResult } from "../models/models_0";
import {
  deserializeAws_queryAddSourceIdentifierToSubscriptionCommand,
  serializeAws_queryAddSourceIdentifierToSubscriptionCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link AddSourceIdentifierToSubscriptionCommand}.
 */
export interface AddSourceIdentifierToSubscriptionCommandInput extends AddSourceIdentifierToSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link AddSourceIdentifierToSubscriptionCommand}.
 */
export interface AddSourceIdentifierToSubscriptionCommandOutput
  extends AddSourceIdentifierToSubscriptionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds a source identifier to an existing RDS event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AddSourceIdentifierToSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AddSourceIdentifierToSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new AddSourceIdentifierToSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AddSourceIdentifierToSubscriptionCommandInput - {@link AddSourceIdentifierToSubscriptionCommandInput}
 * @returns {@link AddSourceIdentifierToSubscriptionCommandOutput}
 * @see {@link AddSourceIdentifierToSubscriptionCommandInput} for command's `input` shape.
 * @see {@link AddSourceIdentifierToSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *  <p>The requested source could not be found.</p>
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>The subscription name does not exist.</p>
 *
 *
 * @example To add a source identifier to an event notification subscription
 * ```javascript
 * // This example add a source identifier to an event notification subscription.
 * const input = {
 *   "SourceIdentifier": "mymysqlinstance",
 *   "SubscriptionName": "mymysqleventsubscription"
 * };
 * const command = new AddSourceIdentifierToSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EventSubscription": {}
 * }
 * *\/
 * // example id: add-source-identifier-to-subscription-93fb6a15-0a59-4577-a7b5-e12db9752c14
 * ```
 *
 */
export class AddSourceIdentifierToSubscriptionCommand extends $Command<
  AddSourceIdentifierToSubscriptionCommandInput,
  AddSourceIdentifierToSubscriptionCommandOutput,
  RDSClientResolvedConfig
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
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddSourceIdentifierToSubscriptionCommandInput, AddSourceIdentifierToSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddSourceIdentifierToSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "AddSourceIdentifierToSubscriptionCommand";
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
  private serialize(
    input: AddSourceIdentifierToSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAddSourceIdentifierToSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput> {
    return deserializeAws_queryAddSourceIdentifierToSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
