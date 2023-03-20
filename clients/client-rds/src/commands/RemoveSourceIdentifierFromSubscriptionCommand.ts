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
  RemoveSourceIdentifierFromSubscriptionMessage,
  RemoveSourceIdentifierFromSubscriptionResult,
} from "../models/models_1";
import {
  deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand,
  serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link RemoveSourceIdentifierFromSubscriptionCommand}.
 */
export interface RemoveSourceIdentifierFromSubscriptionCommandInput
  extends RemoveSourceIdentifierFromSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link RemoveSourceIdentifierFromSubscriptionCommand}.
 */
export interface RemoveSourceIdentifierFromSubscriptionCommandOutput
  extends RemoveSourceIdentifierFromSubscriptionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Removes a source identifier from an existing RDS event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveSourceIdentifierFromSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveSourceIdentifierFromSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RemoveSourceIdentifierFromSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RemoveSourceIdentifierFromSubscriptionCommandInput - {@link RemoveSourceIdentifierFromSubscriptionCommandInput}
 * @returns {@link RemoveSourceIdentifierFromSubscriptionCommandOutput}
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandInput} for command's `input` shape.
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *  <p>The requested source could not be found.</p>
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>The subscription name does not exist.</p>
 *
 *
 * @example To remove a source identifier from a DB event subscription
 * ```javascript
 * // This example removes the specified source identifier from the specified DB event subscription.
 * const input = {
 *   "SourceIdentifier": "mymysqlinstance",
 *   "SubscriptionName": "myeventsubscription"
 * };
 * const command = new RemoveSourceIdentifierFromSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EventSubscription": {}
 * }
 * *\/
 * // example id: remove-source-identifier-from-subscription-30d25493-c19d-4cf7-b4e5-68371d0d8770
 * ```
 *
 */
export class RemoveSourceIdentifierFromSubscriptionCommand extends $Command<
  RemoveSourceIdentifierFromSubscriptionCommandInput,
  RemoveSourceIdentifierFromSubscriptionCommandOutput,
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
  constructor(readonly input: RemoveSourceIdentifierFromSubscriptionCommandInput) {
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
  ): Handler<RemoveSourceIdentifierFromSubscriptionCommandInput, RemoveSourceIdentifierFromSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveSourceIdentifierFromSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RemoveSourceIdentifierFromSubscriptionCommand";
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
    input: RemoveSourceIdentifierFromSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput> {
    return deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
