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

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import {
  GetCertificateAuthorityCertificateRequest,
  GetCertificateAuthorityCertificateResponse,
} from "../models/models_0";
import {
  de_GetCertificateAuthorityCertificateCommand,
  se_GetCertificateAuthorityCertificateCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCertificateAuthorityCertificateCommand}.
 */
export interface GetCertificateAuthorityCertificateCommandInput extends GetCertificateAuthorityCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetCertificateAuthorityCertificateCommand}.
 */
export interface GetCertificateAuthorityCertificateCommandOutput
  extends GetCertificateAuthorityCertificateResponse,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // GetCertificateAuthorityCertificateRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 * };
 * const command = new GetCertificateAuthorityCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetCertificateAuthorityCertificateResponse
 * //   Certificate: "STRING_VALUE",
 * //   CertificateChain: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCertificateAuthorityCertificateCommandInput - {@link GetCertificateAuthorityCertificateCommandInput}
 * @returns {@link GetCertificateAuthorityCertificateCommandOutput}
 * @see {@link GetCertificateAuthorityCertificateCommandInput} for command's `input` shape.
 * @see {@link GetCertificateAuthorityCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy
 * 			cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ACMPrivateCA",
        operation: "GetCertificateAuthorityCertificate",
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
    input: GetCertificateAuthorityCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetCertificateAuthorityCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCertificateAuthorityCertificateCommandOutput> {
    return de_GetCertificateAuthorityCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
