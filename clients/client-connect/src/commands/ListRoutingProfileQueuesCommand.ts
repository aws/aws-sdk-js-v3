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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListRoutingProfileQueuesRequest, ListRoutingProfileQueuesResponse } from "../models/models_1";
import { de_ListRoutingProfileQueuesCommand, se_ListRoutingProfileQueuesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRoutingProfileQueuesCommand}.
 */
export interface ListRoutingProfileQueuesCommandInput extends ListRoutingProfileQueuesRequest {}
/**
 * @public
 *
 * The output of {@link ListRoutingProfileQueuesCommand}.
 */
export interface ListRoutingProfileQueuesCommandOutput extends ListRoutingProfileQueuesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the queues associated with a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListRoutingProfileQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListRoutingProfileQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListRoutingProfileQueuesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRoutingProfileQueuesCommand(input);
 * const response = await client.send(command);
 * // { // ListRoutingProfileQueuesResponse
 * //   NextToken: "STRING_VALUE",
 * //   RoutingProfileQueueConfigSummaryList: [ // RoutingProfileQueueConfigSummaryList
 * //     { // RoutingProfileQueueConfigSummary
 * //       QueueId: "STRING_VALUE", // required
 * //       QueueArn: "STRING_VALUE", // required
 * //       QueueName: "STRING_VALUE", // required
 * //       Priority: Number("int"), // required
 * //       Delay: Number("int"), // required
 * //       Channel: "VOICE" || "CHAT" || "TASK", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRoutingProfileQueuesCommandInput - {@link ListRoutingProfileQueuesCommandInput}
 * @returns {@link ListRoutingProfileQueuesCommandOutput}
 * @see {@link ListRoutingProfileQueuesCommandInput} for command's `input` shape.
 * @see {@link ListRoutingProfileQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class ListRoutingProfileQueuesCommand extends $Command<
  ListRoutingProfileQueuesCommandInput,
  ListRoutingProfileQueuesCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: ListRoutingProfileQueuesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRoutingProfileQueuesCommandInput, ListRoutingProfileQueuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRoutingProfileQueuesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListRoutingProfileQueuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "ListRoutingProfileQueues",
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
  private serialize(input: ListRoutingProfileQueuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRoutingProfileQueuesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRoutingProfileQueuesCommandOutput> {
    return de_ListRoutingProfileQueuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
