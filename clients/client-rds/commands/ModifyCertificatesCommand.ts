import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyCertificatesMessage, ModifyCertificatesResult } from "../models/models_1";
import {
  deserializeAws_queryModifyCertificatesCommand,
  serializeAws_queryModifyCertificatesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ModifyCertificatesCommandInput = ModifyCertificatesMessage;
export type ModifyCertificatesCommandOutput = ModifyCertificatesResult & __MetadataBearer;

/**
 * <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS)
 *           certificate for Amazon RDS for new DB instances temporarily, or remove the override.</p>
 *          <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB
 *             instances that is different from the default certificate provided by RDS. You can also
 *             use this operation to remove the override, so that new DB instances use the default
 *             certificate provided by RDS.</p>
 *          <p>You might need to override the default certificate in the following situations:</p>
 *          <ul>
 *             <li>
 *               <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet
 *                   the RDS default CA certificate for the specified AWS Region.</p>
 *             </li>
 *             <li>
 *               <p>RDS has already moved to a new default CA certificate for the specified AWS
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
 */
export class ModifyCertificatesCommand extends $Command<
  ModifyCertificatesCommandInput,
  ModifyCertificatesCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyCertificatesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyCertificatesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyCertificatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyCertificatesCommandOutput> {
    return deserializeAws_queryModifyCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
