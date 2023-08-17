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
} from "@smithy/types";

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { ListFlowExecutionMessagesRequest, ListFlowExecutionMessagesResponse } from "../models/models_0";
import { de_ListFlowExecutionMessagesCommand, se_ListFlowExecutionMessagesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFlowExecutionMessagesCommand}.
 */
export interface ListFlowExecutionMessagesCommandInput extends ListFlowExecutionMessagesRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowExecutionMessagesCommand}.
 */
export interface ListFlowExecutionMessagesCommandOutput extends ListFlowExecutionMessagesResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Returns a list of objects that contain information about events in a flow execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, ListFlowExecutionMessagesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, ListFlowExecutionMessagesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // ListFlowExecutionMessagesRequest
 *   flowExecutionId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFlowExecutionMessagesCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowExecutionMessagesResponse
 * //   messages: [ // FlowExecutionMessages
 * //     { // FlowExecutionMessage
 * //       messageId: "STRING_VALUE",
 * //       eventType: "STRING_VALUE",
 * //       timestamp: new Date("TIMESTAMP"),
 * //       payload: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowExecutionMessagesCommandInput - {@link ListFlowExecutionMessagesCommandInput}
 * @returns {@link ListFlowExecutionMessagesCommandOutput}
 * @see {@link ListFlowExecutionMessagesCommandInput} for command's `input` shape.
 * @see {@link ListFlowExecutionMessagesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 */
export class ListFlowExecutionMessagesCommand extends $Command<
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput,
  IoTThingsGraphClientResolvedConfig
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
  constructor(readonly input: ListFlowExecutionMessagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFlowExecutionMessagesCommandInput, ListFlowExecutionMessagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFlowExecutionMessagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "ListFlowExecutionMessagesCommand";
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
  private serialize(input: ListFlowExecutionMessagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFlowExecutionMessagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFlowExecutionMessagesCommandOutput> {
    return de_ListFlowExecutionMessagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
