import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateHsmClientCertificateMessage, CreateHsmClientCertificateResult } from "../models/models_0";
import {
  deserializeAws_queryCreateHsmClientCertificateCommand,
  serializeAws_queryCreateHsmClientCertificateCommand,
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

export type CreateHsmClientCertificateCommandInput = CreateHsmClientCertificateMessage;
export type CreateHsmClientCertificateCommandOutput = CreateHsmClientCertificateResult & __MetadataBearer;

/**
 * <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to
 *             the client's HSM in order to store and retrieve the keys used to encrypt the cluster
 *             databases.</p>
 *         <p>The command returns a public key, which you must store in the HSM. In addition to
 *             creating the HSM certificate, you must create an Amazon Redshift HSM configuration that
 *             provides a cluster the information needed to store and use encryption keys in the HSM.
 *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a>
 *             in the Amazon Redshift Cluster Management Guide.</p>
 */
export class CreateHsmClientCertificateCommand extends $Command<
  CreateHsmClientCertificateCommandInput,
  CreateHsmClientCertificateCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHsmClientCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHsmClientCertificateCommandInput, CreateHsmClientCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateHsmClientCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHsmClientCertificateMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHsmClientCertificateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHsmClientCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateHsmClientCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateHsmClientCertificateCommandOutput> {
    return deserializeAws_queryCreateHsmClientCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
