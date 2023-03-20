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
import { IssueCertificateRequest, IssueCertificateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1IssueCertificateCommand,
  serializeAws_json1_1IssueCertificateCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link IssueCertificateCommand}.
 */
export interface IssueCertificateCommandInput extends IssueCertificateRequest {}
/**
 * @public
 *
 * The output of {@link IssueCertificateCommand}.
 */
export interface IssueCertificateCommandOutput extends IssueCertificateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Uses your private certificate authority (CA), or one that has been shared with you, to
 * 			issue a client certificate. This action returns the Amazon Resource Name (ARN) of the
 * 			certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and
 * 			specifying the ARN. </p>
 *          <note>
 *             <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the
 * 				certificates that you issue by using Amazon Web Services Private CA.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, IssueCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, IssueCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new IssueCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param IssueCertificateCommandInput - {@link IssueCertificateCommandInput}
 * @returns {@link IssueCertificateCommandOutput}
 * @see {@link IssueCertificateCommandInput} for command's `input` shape.
 * @see {@link IssueCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArgsException} (client fault)
 *  <p>One or more of the specified arguments was not valid.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Web Services Private CA quota has been exceeded. See the exception message returned to determine
 * 			the quota that was exceeded.</p>
 *
 * @throws {@link MalformedCSRException} (client fault)
 *  <p>The certificate signing request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy
 * 			cannot be found.</p>
 *
 *
 */
export class IssueCertificateCommand extends $Command<
  IssueCertificateCommandInput,
  IssueCertificateCommandOutput,
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
  constructor(readonly input: IssueCertificateCommandInput) {
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
  ): Handler<IssueCertificateCommandInput, IssueCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, IssueCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "IssueCertificateCommand";
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
  private serialize(input: IssueCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1IssueCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<IssueCertificateCommandOutput> {
    return deserializeAws_json1_1IssueCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
