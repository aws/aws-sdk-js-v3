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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeCertificateRequest, DescribeCertificateResult } from "../models/models_0";
import { de_DescribeCertificateCommand, se_DescribeCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificateCommand}.
 */
export interface DescribeCertificateCommandInput extends DescribeCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCertificateCommand}.
 */
export interface DescribeCertificateCommandOutput extends DescribeCertificateResult, __MetadataBearer {}

/**
 * @public
 * <p>Displays information about the certificate registered for secure LDAP or client certificate authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeCertificateCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeCertificateCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeCertificateRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   CertificateId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCertificateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificateResult
 * //   Certificate: { // Certificate
 * //     CertificateId: "STRING_VALUE",
 * //     State: "Registering" || "Registered" || "RegisterFailed" || "Deregistering" || "Deregistered" || "DeregisterFailed",
 * //     StateReason: "STRING_VALUE",
 * //     CommonName: "STRING_VALUE",
 * //     RegisteredDateTime: new Date("TIMESTAMP"),
 * //     ExpiryDateTime: new Date("TIMESTAMP"),
 * //     Type: "ClientCertAuth" || "ClientLDAPS",
 * //     ClientCertAuthSettings: { // ClientCertAuthSettings
 * //       OCSPUrl: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCertificateCommandInput - {@link DescribeCertificateCommandInput}
 * @returns {@link DescribeCertificateCommandOutput}
 * @see {@link DescribeCertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link CertificateDoesNotExistException} (client fault)
 *  <p>The certificate is not present in the system for describe or deregister activities.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class DescribeCertificateCommand extends $Command<
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: DescribeCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCertificateCommandInput, DescribeCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DirectoryService_20150416",
        operation: "DescribeCertificate",
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
  private serialize(input: DescribeCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCertificateCommandOutput> {
    return de_DescribeCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
