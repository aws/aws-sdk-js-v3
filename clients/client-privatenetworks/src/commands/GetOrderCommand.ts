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

import { GetOrderRequest, GetOrderResponse, GetOrderResponseFilterSensitiveLog } from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_GetOrderCommand, se_GetOrderCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOrderCommand}.
 */
export interface GetOrderCommandInput extends GetOrderRequest {}
/**
 * @public
 *
 * The output of {@link GetOrderCommand}.
 */
export interface GetOrderCommandOutput extends GetOrderResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the specified order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, GetOrderCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, GetOrderCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // GetOrderRequest
 *   orderArn: "STRING_VALUE", // required
 * };
 * const command = new GetOrderCommand(input);
 * const response = await client.send(command);
 * // { // GetOrderResponse
 * //   order: { // Order
 * //     orderArn: "STRING_VALUE",
 * //     shippingAddress: { // Address
 * //       city: "STRING_VALUE", // required
 * //       company: "STRING_VALUE",
 * //       country: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       phoneNumber: "STRING_VALUE",
 * //       postalCode: "STRING_VALUE", // required
 * //       stateOrProvince: "STRING_VALUE", // required
 * //       street1: "STRING_VALUE", // required
 * //       street2: "STRING_VALUE",
 * //       street3: "STRING_VALUE",
 * //       emailAddress: "STRING_VALUE",
 * //     },
 * //     networkArn: "STRING_VALUE",
 * //     networkSiteArn: "STRING_VALUE",
 * //     trackingInformation: [ // TrackingInformationList
 * //       { // TrackingInformation
 * //         trackingNumber: "STRING_VALUE",
 * //       },
 * //     ],
 * //     acknowledgmentStatus: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     orderedResources: [ // OrderedResourceDefinitions
 * //       { // OrderedResourceDefinition
 * //         type: "STRING_VALUE", // required
 * //         count: Number("int"), // required
 * //         commitmentConfiguration: { // CommitmentConfiguration
 * //           commitmentLength: "STRING_VALUE", // required
 * //           automaticRenewal: true || false, // required
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOrderCommandInput - {@link GetOrderCommandInput}
 * @returns {@link GetOrderCommandOutput}
 * @see {@link GetOrderCommandInput} for command's `input` shape.
 * @see {@link GetOrderCommandOutput} for command's `response` shape.
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
export class GetOrderCommand extends $Command<
  GetOrderCommandInput,
  GetOrderCommandOutput,
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
  constructor(readonly input: GetOrderCommandInput) {
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
  ): Handler<GetOrderCommandInput, GetOrderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetOrderCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "GetOrderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetOrderResponseFilterSensitiveLog,
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
  private serialize(input: GetOrderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOrderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOrderCommandOutput> {
    return de_GetOrderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
