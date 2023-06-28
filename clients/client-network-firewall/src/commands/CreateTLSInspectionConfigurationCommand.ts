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

import { CreateTLSInspectionConfigurationRequest, CreateTLSInspectionConfigurationResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  de_CreateTLSInspectionConfigurationCommand,
  se_CreateTLSInspectionConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTLSInspectionConfigurationCommand}.
 */
export interface CreateTLSInspectionConfigurationCommandInput extends CreateTLSInspectionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateTLSInspectionConfigurationCommand}.
 */
export interface CreateTLSInspectionConfigurationCommandOutput
  extends CreateTLSInspectionConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an Network Firewall TLS inspection configuration. A TLS inspection configuration contains the Certificate Manager certificate references that Network Firewall uses to decrypt and re-encrypt inbound traffic.</p>
 *          <p>After you create a TLS inspection configuration, you associate it with a firewall policy.</p>
 *          <p>To update the settings for a TLS inspection configuration, use <a>UpdateTLSInspectionConfiguration</a>.</p>
 *          <p>To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p>
 *          <p>To retrieve information about TLS inspection configurations, use <a>ListTLSInspectionConfigurations</a> and <a>DescribeTLSInspectionConfiguration</a>.</p>
 *          <p>
 *               For more information about TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS
 * inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateTLSInspectionConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateTLSInspectionConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // CreateTLSInspectionConfigurationRequest
 *   TLSInspectionConfigurationName: "STRING_VALUE", // required
 *   TLSInspectionConfiguration: { // TLSInspectionConfiguration
 *     ServerCertificateConfigurations: [ // ServerCertificateConfigurations
 *       { // ServerCertificateConfiguration
 *         ServerCertificates: [ // ServerCertificates
 *           { // ServerCertificate
 *             ResourceArn: "STRING_VALUE",
 *           },
 *         ],
 *         Scopes: [ // ServerCertificateScopes
 *           { // ServerCertificateScope
 *             Sources: [ // Addresses
 *               { // Address
 *                 AddressDefinition: "STRING_VALUE", // required
 *               },
 *             ],
 *             Destinations: [
 *               {
 *                 AddressDefinition: "STRING_VALUE", // required
 *               },
 *             ],
 *             SourcePorts: [ // PortRanges
 *               { // PortRange
 *                 FromPort: Number("int"), // required
 *                 ToPort: Number("int"), // required
 *               },
 *             ],
 *             DestinationPorts: [
 *               {
 *                 FromPort: Number("int"), // required
 *                 ToPort: Number("int"), // required
 *               },
 *             ],
 *             Protocols: [ // ProtocolNumbers
 *               Number("int"),
 *             ],
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KeyId: "STRING_VALUE",
 *     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 *   },
 * };
 * const command = new CreateTLSInspectionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateTLSInspectionConfigurationResponse
 * //   UpdateToken: "STRING_VALUE", // required
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
 * @param CreateTLSInspectionConfigurationCommandInput - {@link CreateTLSInspectionConfigurationCommandInput}
 * @returns {@link CreateTLSInspectionConfigurationCommandOutput}
 * @see {@link CreateTLSInspectionConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateTLSInspectionConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 */
export class CreateTLSInspectionConfigurationCommand extends $Command<
  CreateTLSInspectionConfigurationCommandInput,
  CreateTLSInspectionConfigurationCommandOutput,
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
  constructor(readonly input: CreateTLSInspectionConfigurationCommandInput) {
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
  ): Handler<CreateTLSInspectionConfigurationCommandInput, CreateTLSInspectionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTLSInspectionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "CreateTLSInspectionConfigurationCommand";
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
  private serialize(
    input: CreateTLSInspectionConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateTLSInspectionConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTLSInspectionConfigurationCommandOutput> {
    return de_CreateTLSInspectionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
