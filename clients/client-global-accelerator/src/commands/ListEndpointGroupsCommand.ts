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

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { ListEndpointGroupsRequest, ListEndpointGroupsResponse } from "../models/models_0";
import { de_ListEndpointGroupsCommand, se_ListEndpointGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEndpointGroupsCommand}.
 */
export interface ListEndpointGroupsCommandInput extends ListEndpointGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListEndpointGroupsCommand}.
 */
export interface ListEndpointGroupsCommandOutput extends ListEndpointGroupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the endpoint groups that are associated with a listener. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListEndpointGroupsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListEndpointGroupsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListEndpointGroupsRequest
 *   ListenerArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListEndpointGroupsResponse
 * //   EndpointGroups: [ // EndpointGroups
 * //     { // EndpointGroup
 * //       EndpointGroupArn: "STRING_VALUE",
 * //       EndpointGroupRegion: "STRING_VALUE",
 * //       EndpointDescriptions: [ // EndpointDescriptions
 * //         { // EndpointDescription
 * //           EndpointId: "STRING_VALUE",
 * //           Weight: Number("int"),
 * //           HealthState: "INITIAL" || "HEALTHY" || "UNHEALTHY",
 * //           HealthReason: "STRING_VALUE",
 * //           ClientIPPreservationEnabled: true || false,
 * //         },
 * //       ],
 * //       TrafficDialPercentage: Number("float"),
 * //       HealthCheckPort: Number("int"),
 * //       HealthCheckProtocol: "TCP" || "HTTP" || "HTTPS",
 * //       HealthCheckPath: "STRING_VALUE",
 * //       HealthCheckIntervalSeconds: Number("int"),
 * //       ThresholdCount: Number("int"),
 * //       PortOverrides: [ // PortOverrides
 * //         { // PortOverride
 * //           ListenerPort: Number("int"),
 * //           EndpointPort: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEndpointGroupsCommandInput - {@link ListEndpointGroupsCommandInput}
 * @returns {@link ListEndpointGroupsCommandOutput}
 * @see {@link ListEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>There isn't another item to return.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The listener that you specified doesn't exist.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class ListEndpointGroupsCommand extends $Command<
  ListEndpointGroupsCommandInput,
  ListEndpointGroupsCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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
  constructor(readonly input: ListEndpointGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEndpointGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListEndpointGroupsCommand";
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
  private serialize(input: ListEndpointGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEndpointGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEndpointGroupsCommandOutput> {
    return de_ListEndpointGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
