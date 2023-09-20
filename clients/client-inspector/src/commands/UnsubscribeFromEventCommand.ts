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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { UnsubscribeFromEventRequest } from "../models/models_0";
import { de_UnsubscribeFromEventCommand, se_UnsubscribeFromEventCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UnsubscribeFromEventCommand}.
 */
export interface UnsubscribeFromEventCommandInput extends UnsubscribeFromEventRequest {}
/**
 * @public
 *
 * The output of {@link UnsubscribeFromEventCommand}.
 */
export interface UnsubscribeFromEventCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Disables the process of sending Amazon Simple Notification Service (SNS)
 *          notifications about a specified event to a specified SNS topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, UnsubscribeFromEventCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, UnsubscribeFromEventCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // UnsubscribeFromEventRequest
 *   resourceArn: "STRING_VALUE", // required
 *   event: "ASSESSMENT_RUN_STARTED" || "ASSESSMENT_RUN_COMPLETED" || "ASSESSMENT_RUN_STATE_CHANGED" || "FINDING_REPORTED" || "OTHER", // required
 *   topicArn: "STRING_VALUE", // required
 * };
 * const command = new UnsubscribeFromEventCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnsubscribeFromEventCommandInput - {@link UnsubscribeFromEventCommandInput}
 * @returns {@link UnsubscribeFromEventCommandOutput}
 * @see {@link UnsubscribeFromEventCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeFromEventCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example Unsubscribe from event
 * ```javascript
 * // Disables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
 * const input = {
 *   "event": "ASSESSMENT_RUN_COMPLETED",
 *   "resourceArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-7sbz2Kz0",
 *   "topicArn": "arn:aws:sns:us-west-2:123456789012:exampletopic"
 * };
 * const command = new UnsubscribeFromEventCommand(input);
 * await client.send(command);
 * // example id: unsubscribe-from-event-1481067781705
 * ```
 *
 */
export class UnsubscribeFromEventCommand extends $Command<
  UnsubscribeFromEventCommandInput,
  UnsubscribeFromEventCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: UnsubscribeFromEventCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnsubscribeFromEventCommandInput, UnsubscribeFromEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UnsubscribeFromEventCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "UnsubscribeFromEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "UnsubscribeFromEvent",
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
  private serialize(input: UnsubscribeFromEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UnsubscribeFromEventCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnsubscribeFromEventCommandOutput> {
    return de_UnsubscribeFromEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
