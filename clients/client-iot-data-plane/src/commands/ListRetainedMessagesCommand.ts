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

import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { ListRetainedMessagesRequest, ListRetainedMessagesResponse } from "../models/models_0";
import { de_ListRetainedMessagesCommand, se_ListRetainedMessagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRetainedMessagesCommand}.
 */
export interface ListRetainedMessagesCommandInput extends ListRetainedMessagesRequest {}
/**
 * @public
 *
 * The output of {@link ListRetainedMessagesCommand}.
 */
export interface ListRetainedMessagesCommandOutput extends ListRetainedMessagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists summary information about the retained messages stored for the account.</p>
 *          <p>This action returns only the topic names of the retained messages. It doesn't
 *       return any message payloads. Although this action doesn't return a message payload,
 *       it can still incur messaging costs.</p>
 *          <p>To get the message payload of a retained message, call
 *       <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_GetRetainedMessage.html">GetRetainedMessage</a>
 *       with the topic name of the retained message.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">ListRetainedMessages</a> action.</p>
 *          <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core
 *       pricing - Messaging</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, ListRetainedMessagesCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, ListRetainedMessagesCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const input = { // ListRetainedMessagesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRetainedMessagesCommand(input);
 * const response = await client.send(command);
 * // { // ListRetainedMessagesResponse
 * //   retainedTopics: [ // RetainedMessageList
 * //     { // RetainedMessageSummary
 * //       topic: "STRING_VALUE",
 * //       payloadSize: Number("long"),
 * //       qos: Number("int"),
 * //       lastModifiedTime: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRetainedMessagesCommandInput - {@link ListRetainedMessagesCommandInput}
 * @returns {@link ListRetainedMessagesCommandOutput}
 * @see {@link ListRetainedMessagesCommandInput} for command's `input` shape.
 * @see {@link ListRetainedMessagesCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for IoTDataPlaneClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The specified combination of HTTP verb and URI is not supported.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTDataPlane service.</p>
 *
 */
export class ListRetainedMessagesCommand extends $Command<
  ListRetainedMessagesCommandInput,
  ListRetainedMessagesCommandOutput,
  IoTDataPlaneClientResolvedConfig
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
  constructor(readonly input: ListRetainedMessagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRetainedMessagesCommandInput, ListRetainedMessagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRetainedMessagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTDataPlaneClient";
    const commandName = "ListRetainedMessagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotMoonrakerService",
        operation: "ListRetainedMessages",
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
  private serialize(input: ListRetainedMessagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRetainedMessagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRetainedMessagesCommandOutput> {
    return de_ListRetainedMessagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
