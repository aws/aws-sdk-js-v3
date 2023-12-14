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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateCertificateProviderRequest, CreateCertificateProviderResponse } from "../models/models_0";
import { de_CreateCertificateProviderCommand, se_CreateCertificateProviderCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCertificateProviderCommand}.
 */
export interface CreateCertificateProviderCommandInput extends CreateCertificateProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateCertificateProviderCommand}.
 */
export interface CreateCertificateProviderCommandOutput extends CreateCertificateProviderResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon Web Services IoT Core certificate provider. You can use Amazon Web Services IoT Core certificate provider to
 *          customize how to sign a certificate signing request (CSR) in IoT fleet provisioning. For
 *          more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provisioning-cert-provider.html">Customizing certificate
 *             signing using Amazon Web Services IoT Core certificate provider</a> from <i>Amazon Web Services IoT Core Developer
 *             Guide</i>.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCertificateProvider</a> action.</p>
 *          <important>
 *             <p>After you create a certificate provider, the behavior of <a href="https://docs.aws.amazon.com/iot/latest/developerguide/fleet-provision-api.html#create-cert-csr">
 *                   <code>CreateCertificateFromCsr</code> API for fleet provisioning</a> will
 *             change and all API calls to <code>CreateCertificateFromCsr</code> will invoke the
 *             certificate provider to create the certificates. It can take up to a few minutes for
 *             this behavior to change after a certificate provider is created.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateCertificateProviderCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateCertificateProviderCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateCertificateProviderRequest
 *   certificateProviderName: "STRING_VALUE", // required
 *   lambdaFunctionArn: "STRING_VALUE", // required
 *   accountDefaultForOperations: [ // CertificateProviderAccountDefaultForOperations // required
 *     "CreateCertificateFromCsr",
 *   ],
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCertificateProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateCertificateProviderResponse
 * //   certificateProviderName: "STRING_VALUE",
 * //   certificateProviderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCertificateProviderCommandInput - {@link CreateCertificateProviderCommandInput}
 * @returns {@link CreateCertificateProviderCommandOutput}
 * @see {@link CreateCertificateProviderCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateProviderCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class CreateCertificateProviderCommand extends $Command<
  CreateCertificateProviderCommandInput,
  CreateCertificateProviderCommandOutput,
  IoTClientResolvedConfig
> {
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
  constructor(readonly input: CreateCertificateProviderCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCertificateProviderCommandInput, CreateCertificateProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCertificateProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateCertificateProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "CreateCertificateProvider",
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
  private serialize(input: CreateCertificateProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCertificateProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCertificateProviderCommandOutput> {
    return de_CreateCertificateProviderCommand(output, context);
  }
}
