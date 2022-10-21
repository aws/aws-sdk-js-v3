// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateHsmClientCertificateMessage,
  CreateHsmClientCertificateMessageFilterSensitiveLog,
  CreateHsmClientCertificateResult,
  CreateHsmClientCertificateResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateHsmClientCertificateCommand,
  serializeAws_queryCreateHsmClientCertificateCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface CreateHsmClientCertificateCommandInput extends CreateHsmClientCertificateMessage {}
export interface CreateHsmClientCertificateCommandOutput extends CreateHsmClientCertificateResult, __MetadataBearer {}

/**
 * <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to
 *             the client's HSM in order to store and retrieve the keys used to encrypt the cluster
 *             databases.</p>
 *         <p>The command returns a public key, which you must store in the HSM. In addition to
 *             creating the HSM certificate, you must create an Amazon Redshift HSM configuration that
 *             provides a cluster the information needed to store and use encryption keys in the HSM.
 *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a>
 *             in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateHsmClientCertificateCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateHsmClientCertificateCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateHsmClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHsmClientCertificateCommandInput} for command's `input` shape.
 * @see {@link CreateHsmClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class CreateHsmClientCertificateCommand extends $Command<
  CreateHsmClientCertificateCommandInput,
  CreateHsmClientCertificateCommandOutput,
  RedshiftClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateHsmClientCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateHsmClientCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHsmClientCertificateMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateHsmClientCertificateResultFilterSensitiveLog,
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
