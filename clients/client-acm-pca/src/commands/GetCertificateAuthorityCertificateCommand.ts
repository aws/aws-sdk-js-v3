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

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import {
  GetCertificateAuthorityCertificateRequest,
  GetCertificateAuthorityCertificateRequestFilterSensitiveLog,
  GetCertificateAuthorityCertificateResponse,
  GetCertificateAuthorityCertificateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCertificateAuthorityCertificateCommand,
  serializeAws_json1_1GetCertificateAuthorityCertificateCommand,
} from "../protocols/Aws_json1_1";

export interface GetCertificateAuthorityCertificateCommandInput extends GetCertificateAuthorityCertificateRequest {}
export interface GetCertificateAuthorityCertificateCommandOutput
  extends GetCertificateAuthorityCertificateResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the certificate and certificate chain for your private certificate authority
 * 			(CA) or one that has been shared with you. Both the certificate and the chain are base64
 * 			PEM-encoded. The chain does not include the CA certificate. Each certificate in the
 * 			chain signs the one before it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, GetCertificateAuthorityCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, GetCertificateAuthorityCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new GetCertificateAuthorityCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCertificateAuthorityCertificateCommandInput} for command's `input` shape.
 * @see {@link GetCertificateAuthorityCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 */
export class GetCertificateAuthorityCertificateCommand extends $Command<
  GetCertificateAuthorityCertificateCommandInput,
  GetCertificateAuthorityCertificateCommandOutput,
  ACMPCAClientResolvedConfig
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

  constructor(readonly input: GetCertificateAuthorityCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCertificateAuthorityCertificateCommandInput, GetCertificateAuthorityCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCertificateAuthorityCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "GetCertificateAuthorityCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCertificateAuthorityCertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCertificateAuthorityCertificateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetCertificateAuthorityCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCertificateAuthorityCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCertificateAuthorityCertificateCommandOutput> {
    return deserializeAws_json1_1GetCertificateAuthorityCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
