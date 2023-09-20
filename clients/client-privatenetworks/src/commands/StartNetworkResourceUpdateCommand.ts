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

import {
  StartNetworkResourceUpdateRequest,
  StartNetworkResourceUpdateRequestFilterSensitiveLog,
  StartNetworkResourceUpdateResponse,
  StartNetworkResourceUpdateResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_StartNetworkResourceUpdateCommand, se_StartNetworkResourceUpdateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartNetworkResourceUpdateCommand}.
 */
export interface StartNetworkResourceUpdateCommandInput extends StartNetworkResourceUpdateRequest {}
/**
 * @public
 *
 * The output of {@link StartNetworkResourceUpdateCommand}.
 */
export interface StartNetworkResourceUpdateCommandOutput extends StartNetworkResourceUpdateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use this action to do the following tasks:</p>
 *          <ul>
 *             <li>
 *                <p>Update the duration and renewal status of the commitment period for a radio
 *                     unit. The update goes into effect immediately.</p>
 *             </li>
 *             <li>
 *                <p>Request a replacement for a network resource.</p>
 *             </li>
 *             <li>
 *                <p>Request that you return a network resource.</p>
 *             </li>
 *          </ul>
 *          <p>After you submit a request to replace or return a network resource, the status of the
 *             network resource changes to <code>CREATING_SHIPPING_LABEL</code>. The shipping label is
 *             available when the status of the network resource is <code>PENDING_RETURN</code>. After
 *             the network resource is successfully returned, its status changes to
 *                 <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, StartNetworkResourceUpdateCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, StartNetworkResourceUpdateCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // StartNetworkResourceUpdateRequest
 *   networkResourceArn: "STRING_VALUE", // required
 *   updateType: "STRING_VALUE", // required
 *   shippingAddress: { // Address
 *     city: "STRING_VALUE", // required
 *     company: "STRING_VALUE",
 *     country: "STRING_VALUE", // required
 *     name: "STRING_VALUE", // required
 *     phoneNumber: "STRING_VALUE",
 *     postalCode: "STRING_VALUE", // required
 *     stateOrProvince: "STRING_VALUE", // required
 *     street1: "STRING_VALUE", // required
 *     street2: "STRING_VALUE",
 *     street3: "STRING_VALUE",
 *     emailAddress: "STRING_VALUE",
 *   },
 *   returnReason: "STRING_VALUE",
 *   commitmentConfiguration: { // CommitmentConfiguration
 *     commitmentLength: "STRING_VALUE", // required
 *     automaticRenewal: true || false, // required
 *   },
 * };
 * const command = new StartNetworkResourceUpdateCommand(input);
 * const response = await client.send(command);
 * // { // StartNetworkResourceUpdateResponse
 * //   networkResource: { // NetworkResource
 * //     networkResourceArn: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     statusReason: "STRING_VALUE",
 * //     vendor: "STRING_VALUE",
 * //     model: "STRING_VALUE",
 * //     serialNumber: "STRING_VALUE",
 * //     health: "STRING_VALUE",
 * //     networkArn: "STRING_VALUE",
 * //     networkSiteArn: "STRING_VALUE",
 * //     orderArn: "STRING_VALUE",
 * //     attributes: [ // NameValuePairs
 * //       { // NameValuePair
 * //         name: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     position: { // Position
 * //       latitude: Number("double"),
 * //       longitude: Number("double"),
 * //       elevation: Number("double"),
 * //       elevationUnit: "STRING_VALUE",
 * //       elevationReference: "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     returnInformation: { // ReturnInformation
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
 * //       returnReason: "STRING_VALUE",
 * //       replacementOrderArn: "STRING_VALUE",
 * //       shippingLabel: "STRING_VALUE",
 * //     },
 * //     commitmentInformation: { // CommitmentInformation
 * //       commitmentConfiguration: { // CommitmentConfiguration
 * //         commitmentLength: "STRING_VALUE", // required
 * //         automaticRenewal: true || false, // required
 * //       },
 * //       startAt: new Date("TIMESTAMP"),
 * //       expiresOn: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartNetworkResourceUpdateCommandInput - {@link StartNetworkResourceUpdateCommandInput}
 * @returns {@link StartNetworkResourceUpdateCommandOutput}
 * @see {@link StartNetworkResourceUpdateCommandInput} for command's `input` shape.
 * @see {@link StartNetworkResourceUpdateCommandOutput} for command's `response` shape.
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
export class StartNetworkResourceUpdateCommand extends $Command<
  StartNetworkResourceUpdateCommandInput,
  StartNetworkResourceUpdateCommandOutput,
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
  constructor(readonly input: StartNetworkResourceUpdateCommandInput) {
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
  ): Handler<StartNetworkResourceUpdateCommandInput, StartNetworkResourceUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartNetworkResourceUpdateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "StartNetworkResourceUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartNetworkResourceUpdateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartNetworkResourceUpdateResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "E5GNetworkControllerLambda",
        operation: "StartNetworkResourceUpdate",
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
  private serialize(input: StartNetworkResourceUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartNetworkResourceUpdateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartNetworkResourceUpdateCommandOutput> {
    return de_StartNetworkResourceUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
