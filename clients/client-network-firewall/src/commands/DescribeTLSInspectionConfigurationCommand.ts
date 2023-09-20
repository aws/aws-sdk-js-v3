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
  DescribeTLSInspectionConfigurationRequest,
  DescribeTLSInspectionConfigurationResponse,
} from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  de_DescribeTLSInspectionConfigurationCommand,
  se_DescribeTLSInspectionConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTLSInspectionConfigurationCommand}.
 */
export interface DescribeTLSInspectionConfigurationCommandInput extends DescribeTLSInspectionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTLSInspectionConfigurationCommand}.
 */
export interface DescribeTLSInspectionConfigurationCommandOutput
  extends DescribeTLSInspectionConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the data objects for the specified TLS inspection configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeTLSInspectionConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeTLSInspectionConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeTLSInspectionConfigurationRequest
 *   TLSInspectionConfigurationArn: "STRING_VALUE",
 *   TLSInspectionConfigurationName: "STRING_VALUE",
 * };
 * const command = new DescribeTLSInspectionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTLSInspectionConfigurationResponse
 * //   UpdateToken: "STRING_VALUE", // required
 * //   TLSInspectionConfiguration: { // TLSInspectionConfiguration
 * //     ServerCertificateConfigurations: [ // ServerCertificateConfigurations
 * //       { // ServerCertificateConfiguration
 * //         ServerCertificates: [ // ServerCertificates
 * //           { // ServerCertificate
 * //             ResourceArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Scopes: [ // ServerCertificateScopes
 * //           { // ServerCertificateScope
 * //             Sources: [ // Addresses
 * //               { // Address
 * //                 AddressDefinition: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             Destinations: [
 * //               {
 * //                 AddressDefinition: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             SourcePorts: [ // PortRanges
 * //               { // PortRange
 * //                 FromPort: Number("int"), // required
 * //                 ToPort: Number("int"), // required
 * //               },
 * //             ],
 * //             DestinationPorts: [
 * //               {
 * //                 FromPort: Number("int"), // required
 * //                 ToPort: Number("int"), // required
 * //               },
 * //             ],
 * //             Protocols: [ // ProtocolNumbers
 * //               Number("int"),
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   TLSInspectionConfigurationResponse: { // TLSInspectionConfigurationResponse
 * //     TLSInspectionConfigurationArn: "STRING_VALUE", // required
 * //     TLSInspectionConfigurationName: "STRING_VALUE", // required
 * //     TLSInspectionConfigurationId: "STRING_VALUE", // required
 * //     TLSInspectionConfigurationStatus: "ACTIVE" || "DELETING",
 * //     Description: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     NumberOfAssociations: Number("int"),
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       KeyId: "STRING_VALUE",
 * //       Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 * //     },
 * //     Certificates: [ // Certificates
 * //       { // TlsCertificateData
 * //         CertificateArn: "STRING_VALUE",
 * //         CertificateSerial: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         StatusMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTLSInspectionConfigurationCommandInput - {@link DescribeTLSInspectionConfigurationCommandInput}
 * @returns {@link DescribeTLSInspectionConfigurationCommandOutput}
 * @see {@link DescribeTLSInspectionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeTLSInspectionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn’t perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 */
export class DescribeTLSInspectionConfigurationCommand extends $Command<
  DescribeTLSInspectionConfigurationCommandInput,
  DescribeTLSInspectionConfigurationCommandOutput,
  NetworkFirewallClientResolvedConfig
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
  constructor(readonly input: DescribeTLSInspectionConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTLSInspectionConfigurationCommandInput, DescribeTLSInspectionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTLSInspectionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DescribeTLSInspectionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkFirewall_20201112",
        operation: "DescribeTLSInspectionConfiguration",
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
  private serialize(
    input: DescribeTLSInspectionConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTLSInspectionConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTLSInspectionConfigurationCommandOutput> {
    return de_DescribeTLSInspectionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
