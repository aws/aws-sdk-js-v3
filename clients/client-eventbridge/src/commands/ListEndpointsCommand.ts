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
import { ListEndpointsRequest, ListEndpointsResponse } from "../models/models_0";
import { de_ListEndpointsCommand, se_ListEndpointsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEndpointsCommand}.
 */
export interface ListEndpointsCommandInput extends ListEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListEndpointsCommand}.
 */
export interface ListEndpointsCommandOutput extends ListEndpointsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the global endpoints associated with this account. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListEndpointsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListEndpointsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // ListEndpointsRequest
 *   NamePrefix: "STRING_VALUE",
 *   HomeRegion: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListEndpointsResponse
 * //   Endpoints: [ // EndpointList
 * //     { // Endpoint
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       RoutingConfig: { // RoutingConfig
 * //         FailoverConfig: { // FailoverConfig
 * //           Primary: { // Primary
 * //             HealthCheck: "STRING_VALUE", // required
 * //           },
 * //           Secondary: { // Secondary
 * //             Route: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //       ReplicationConfig: { // ReplicationConfig
 * //         State: "ENABLED" || "DISABLED",
 * //       },
 * //       EventBuses: [ // EndpointEventBusList
 * //         { // EndpointEventBus
 * //           EventBusArn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       RoleArn: "STRING_VALUE",
 * //       EndpointId: "STRING_VALUE",
 * //       EndpointUrl: "STRING_VALUE",
 * //       State: "ACTIVE" || "CREATING" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED",
 * //       StateReason: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEndpointsCommandInput - {@link ListEndpointsCommandInput}
 * @returns {@link ListEndpointsCommandOutput}
 * @see {@link ListEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 */
export class ListEndpointsCommand extends $Command<
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
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
  constructor(readonly input: ListEndpointsCommandInput) {
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
  ): Handler<ListEndpointsCommandInput, ListEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListEndpointsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "ListEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSEvents",
        operation: "ListEndpoints",
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
  private serialize(input: ListEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEndpointsCommandOutput> {
    return de_ListEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
