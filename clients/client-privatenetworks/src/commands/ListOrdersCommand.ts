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

import { ListOrdersRequest, ListOrdersResponse, ListOrdersResponseFilterSensitiveLog } from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_ListOrdersCommand, se_ListOrdersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOrdersCommand}.
 */
export interface ListOrdersCommandInput extends ListOrdersRequest {}
/**
 * @public
 *
 * The output of {@link ListOrdersCommand}.
 */
export interface ListOrdersCommandOutput extends ListOrdersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists orders. Add filters to your request to return a more specific list of results.
 *             Use filters to match the Amazon Resource Name (ARN) of the network site or the status of
 *             the order.</p>
 *          <p>If you specify multiple filters, filters are joined with an OR, and the request
 * returns results that match all of the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ListOrdersCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ListOrdersCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // ListOrdersRequest
 *   networkArn: "STRING_VALUE", // required
 *   startToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: { // OrderFilters
 *     "<keys>": [ // OrderFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListOrdersCommand(input);
 * const response = await client.send(command);
 * // { // ListOrdersResponse
 * //   orders: [ // OrderList
 * //     { // Order
 * //       orderArn: "STRING_VALUE",
 * //       shippingAddress: { // Address
 * //         city: "STRING_VALUE", // required
 * //         company: "STRING_VALUE",
 * //         country: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         phoneNumber: "STRING_VALUE",
 * //         postalCode: "STRING_VALUE", // required
 * //         stateOrProvince: "STRING_VALUE", // required
 * //         street1: "STRING_VALUE", // required
 * //         street2: "STRING_VALUE",
 * //         street3: "STRING_VALUE",
 * //         emailAddress: "STRING_VALUE",
 * //       },
 * //       networkArn: "STRING_VALUE",
 * //       networkSiteArn: "STRING_VALUE",
 * //       trackingInformation: [ // TrackingInformationList
 * //         { // TrackingInformation
 * //           trackingNumber: "STRING_VALUE",
 * //         },
 * //       ],
 * //       acknowledgmentStatus: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       orderedResources: [ // OrderedResourceDefinitions
 * //         { // OrderedResourceDefinition
 * //           type: "STRING_VALUE", // required
 * //           count: Number("int"), // required
 * //           commitmentConfiguration: { // CommitmentConfiguration
 * //             commitmentLength: "STRING_VALUE", // required
 * //             automaticRenewal: true || false, // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrdersCommandInput - {@link ListOrdersCommandInput}
 * @returns {@link ListOrdersCommandOutput}
 * @see {@link ListOrdersCommandInput} for command's `input` shape.
 * @see {@link ListOrdersCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 */
export class ListOrdersCommand extends $Command<
  ListOrdersCommandInput,
  ListOrdersCommandOutput,
  PrivateNetworksClientResolvedConfig
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
  constructor(readonly input: ListOrdersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PrivateNetworksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOrdersCommandInput, ListOrdersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListOrdersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "ListOrdersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListOrdersResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "E5GNetworkControllerLambda",
        operation: "ListOrders",
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
  private serialize(input: ListOrdersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOrdersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOrdersCommandOutput> {
    return de_ListOrdersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
