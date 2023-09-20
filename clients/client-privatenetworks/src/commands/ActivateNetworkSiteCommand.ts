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
  ActivateNetworkSiteRequest,
  ActivateNetworkSiteRequestFilterSensitiveLog,
  ActivateNetworkSiteResponse,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_ActivateNetworkSiteCommand, se_ActivateNetworkSiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ActivateNetworkSiteCommand}.
 */
export interface ActivateNetworkSiteCommandInput extends ActivateNetworkSiteRequest {}
/**
 * @public
 *
 * The output of {@link ActivateNetworkSiteCommand}.
 */
export interface ActivateNetworkSiteCommandOutput extends ActivateNetworkSiteResponse, __MetadataBearer {}

/**
 * @public
 * <p>Activates the specified network site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ActivateNetworkSiteCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ActivateNetworkSiteCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // ActivateNetworkSiteRequest
 *   networkSiteArn: "STRING_VALUE", // required
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
 *   clientToken: "STRING_VALUE",
 *   commitmentConfiguration: { // CommitmentConfiguration
 *     commitmentLength: "STRING_VALUE", // required
 *     automaticRenewal: true || false, // required
 *   },
 * };
 * const command = new ActivateNetworkSiteCommand(input);
 * const response = await client.send(command);
 * // { // ActivateNetworkSiteResponse
 * //   networkSite: { // NetworkSite
 * //     networkSiteArn: "STRING_VALUE", // required
 * //     networkSiteName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //     networkArn: "STRING_VALUE", // required
 * //     pendingPlan: { // SitePlan
 * //       resourceDefinitions: [ // NetworkResourceDefinitions
 * //         { // NetworkResourceDefinition
 * //           type: "STRING_VALUE", // required
 * //           options: [ // Options
 * //             { // NameValuePair
 * //               name: "STRING_VALUE", // required
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           count: Number("int"), // required
 * //         },
 * //       ],
 * //       options: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     currentPlan: {
 * //       resourceDefinitions: [
 * //         {
 * //           type: "STRING_VALUE", // required
 * //           options: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           count: Number("int"), // required
 * //         },
 * //       ],
 * //       options: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     availabilityZone: "STRING_VALUE",
 * //     availabilityZoneId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ActivateNetworkSiteCommandInput - {@link ActivateNetworkSiteCommandInput}
 * @returns {@link ActivateNetworkSiteCommandOutput}
 * @see {@link ActivateNetworkSiteCommandInput} for command's `input` shape.
 * @see {@link ActivateNetworkSiteCommandOutput} for command's `response` shape.
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
export class ActivateNetworkSiteCommand extends $Command<
  ActivateNetworkSiteCommandInput,
  ActivateNetworkSiteCommandOutput,
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
  constructor(readonly input: ActivateNetworkSiteCommandInput) {
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
  ): Handler<ActivateNetworkSiteCommandInput, ActivateNetworkSiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ActivateNetworkSiteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "ActivateNetworkSiteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ActivateNetworkSiteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "E5GNetworkControllerLambda",
        operation: "ActivateNetworkSite",
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
  private serialize(input: ActivateNetworkSiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ActivateNetworkSiteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateNetworkSiteCommandOutput> {
    return de_ActivateNetworkSiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
