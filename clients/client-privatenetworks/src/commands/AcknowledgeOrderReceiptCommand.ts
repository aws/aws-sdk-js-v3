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
  AcknowledgeOrderReceiptRequest,
  AcknowledgeOrderReceiptResponse,
  AcknowledgeOrderReceiptResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_AcknowledgeOrderReceiptCommand, se_AcknowledgeOrderReceiptCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcknowledgeOrderReceiptCommand}.
 */
export interface AcknowledgeOrderReceiptCommandInput extends AcknowledgeOrderReceiptRequest {}
/**
 * @public
 *
 * The output of {@link AcknowledgeOrderReceiptCommand}.
 */
export interface AcknowledgeOrderReceiptCommandOutput extends AcknowledgeOrderReceiptResponse, __MetadataBearer {}

/**
 * @public
 * <p>Acknowledges that the specified network order was received.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, AcknowledgeOrderReceiptCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, AcknowledgeOrderReceiptCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // AcknowledgeOrderReceiptRequest
 *   orderArn: "STRING_VALUE", // required
 * };
 * const command = new AcknowledgeOrderReceiptCommand(input);
 * const response = await client.send(command);
 * // { // AcknowledgeOrderReceiptResponse
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
 * // };
 *
 * ```
 *
 * @param AcknowledgeOrderReceiptCommandInput - {@link AcknowledgeOrderReceiptCommandInput}
 * @returns {@link AcknowledgeOrderReceiptCommandOutput}
 * @see {@link AcknowledgeOrderReceiptCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeOrderReceiptCommandOutput} for command's `response` shape.
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
export class AcknowledgeOrderReceiptCommand extends $Command<
  AcknowledgeOrderReceiptCommandInput,
  AcknowledgeOrderReceiptCommandOutput,
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
  constructor(readonly input: AcknowledgeOrderReceiptCommandInput) {
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
  ): Handler<AcknowledgeOrderReceiptCommandInput, AcknowledgeOrderReceiptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcknowledgeOrderReceiptCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "AcknowledgeOrderReceiptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: AcknowledgeOrderReceiptResponseFilterSensitiveLog,
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
  private serialize(input: AcknowledgeOrderReceiptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AcknowledgeOrderReceiptCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcknowledgeOrderReceiptCommandOutput> {
    return de_AcknowledgeOrderReceiptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
