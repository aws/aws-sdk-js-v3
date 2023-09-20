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

import { ModifyCertificatesMessage, ModifyCertificatesResult } from "../models/models_1";
import { de_ModifyCertificatesCommand, se_ModifyCertificatesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyCertificatesCommand}.
 */
export interface ModifyCertificatesCommandInput extends ModifyCertificatesMessage {}
/**
 * @public
 *
 * The output of {@link ModifyCertificatesCommand}.
 */
export interface ModifyCertificatesCommandOutput extends ModifyCertificatesResult, __MetadataBearer {}

/**
 * @public
 * <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS)
 *           certificate for Amazon RDS for new DB instances, or remove the override.</p>
 *          <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB
 *             instances that is different from the default certificate provided by RDS. You can also
 *             use this operation to remove the override, so that new DB instances use the default
 *             certificate provided by RDS.</p>
 *          <p>You might need to override the default certificate in the following situations:</p>
 *          <ul>
 *             <li>
 *                <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet
 *                   the RDS default CA certificate for the specified Amazon Web Services Region.</p>
 *             </li>
 *             <li>
 *                <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services
 *                     Region, but you are still in the process of supporting the new CA certificate.
 *                     In this case, you temporarily need additional time to finish your application
 *                     changes.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html">
 *               Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p>
 *          <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html">
 *               Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyCertificatesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyCertificatesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyCertificatesMessage
 *   CertificateIdentifier: "STRING_VALUE",
 *   RemoveCustomerOverride: true || false,
 * };
 * const command = new ModifyCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyCertificatesResult
 * //   Certificate: { // Certificate
 * //     CertificateIdentifier: "STRING_VALUE",
 * //     CertificateType: "STRING_VALUE",
 * //     Thumbprint: "STRING_VALUE",
 * //     ValidFrom: new Date("TIMESTAMP"),
 * //     ValidTill: new Date("TIMESTAMP"),
 * //     CertificateArn: "STRING_VALUE",
 * //     CustomerOverride: true || false,
 * //     CustomerOverrideValidTill: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyCertificatesCommandInput - {@link ModifyCertificatesCommandInput}
 * @returns {@link ModifyCertificatesCommandOutput}
 * @see {@link ModifyCertificatesCommandInput} for command's `input` shape.
 * @see {@link ModifyCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link CertificateNotFoundFault} (client fault)
 *  <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an
 *         existing certificate.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To temporarily override the system-default SSL/TLS certificate for new DB instances
 * ```javascript
 * // The following example temporarily overrides the system-default SSL/TLS certificate for new DB instances.
 * const input = {
 *   "CertificateIdentifier": "rds-ca-2019"
 * };
 * const command = new ModifyCertificatesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Certificate": {
 *     "CertificateArn": "arn:aws:rds:us-east-1::cert:rds-ca-2019",
 *     "CertificateIdentifier": "rds-ca-2019",
 *     "CertificateType": "CA",
 *     "CustomerOverride": true,
 *     "CustomerOverrideValidTill": "2024-08-22T17:08:50Z",
 *     "Thumbprint": "EXAMPLE123456789012",
 *     "ValidFrom": "2019-09-19T18:16:53Z",
 *     "ValidTill": "2024-08-22T17:08:50Z"
 *   }
 * }
 * *\/
 * // example id: to-temporarily-override-the-system-default-ssltls-certificate-for-new-db-instances-1680306491984
 * ```
 *
 */
export class ModifyCertificatesCommand extends $Command<
  ModifyCertificatesCommandInput,
  ModifyCertificatesCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: ModifyCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyCertificatesCommandInput, ModifyCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "ModifyCertificates",
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
  private serialize(input: ModifyCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyCertificatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyCertificatesCommandOutput> {
    return de_ModifyCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
