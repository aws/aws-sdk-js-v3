// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { CreatePartnerEventSourceRequest, CreatePartnerEventSourceResponse } from "../models/models_0";
import { de_CreatePartnerEventSourceCommand, se_CreatePartnerEventSourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePartnerEventSourceCommand}.
 */
export interface CreatePartnerEventSourceCommandInput extends CreatePartnerEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreatePartnerEventSourceCommand}.
 */
export interface CreatePartnerEventSourceCommandOutput extends CreatePartnerEventSourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Called by an SaaS partner to create a partner event source. This operation is not used by
 *       Amazon Web Services customers.</p>
 *          <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner
 *       event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each
 *       Amazon Web Services account that wants to receive those event types. </p>
 *          <p>A partner event source creates events based on resources within the SaaS partner's service
 *       or application.</p>
 *          <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can
 *       use that event bus to receive events from the partner, and then process them using Amazon Web Services Events
 *       rules and targets.</p>
 *          <p>Partner event source names follow this format:</p>
 *          <p>
 *             <code>
 *                <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
 *             </code>
 *          </p>
 *          <p>
 *             <i>partner_name</i> is determined during partner registration and identifies
 *       the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the
 *       partner and is a way for the partner to categorize their events.
 *         <i>event_name</i> is determined by the partner, and should uniquely identify
 *       an event-generating resource within the partner system. The combination of
 *         <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services
 *       customers decide whether to create an event bus to receive these events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreatePartnerEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreatePartnerEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // CreatePartnerEventSourceRequest
 *   Name: "STRING_VALUE", // required
 *   Account: "STRING_VALUE", // required
 * };
 * const command = new CreatePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreatePartnerEventSourceResponse
 * //   EventSourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePartnerEventSourceCommandInput - {@link CreatePartnerEventSourceCommandInput}
 * @returns {@link CreatePartnerEventSourceCommandOutput}
 * @see {@link CreatePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link CreatePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource you are trying to create already exists.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 */
export class CreatePartnerEventSourceCommand extends $Command<
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput,
  EventBridgeClientResolvedConfig
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
  constructor(readonly input: CreatePartnerEventSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePartnerEventSourceCommandInput, CreatePartnerEventSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePartnerEventSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "CreatePartnerEventSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSEvents",
        operation: "CreatePartnerEventSource",
      },
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
  private serialize(input: CreatePartnerEventSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePartnerEventSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePartnerEventSourceCommandOutput> {
    return de_CreatePartnerEventSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
