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
import { DescribeCACertificateRequest, DescribeCACertificateResponse } from "../models/models_1";
import { de_DescribeCACertificateCommand, se_DescribeCACertificateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCACertificateCommand}.
 */
export interface DescribeCACertificateCommandInput extends DescribeCACertificateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCACertificateCommand}.
 */
export interface DescribeCACertificateCommandOutput extends DescribeCACertificateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a registered CA certificate.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCACertificate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeCACertificateRequest
 *   certificateId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCACertificateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCACertificateResponse
 * //   certificateDescription: { // CACertificateDescription
 * //     certificateArn: "STRING_VALUE",
 * //     certificateId: "STRING_VALUE",
 * //     status: "ACTIVE" || "INACTIVE",
 * //     certificatePem: "STRING_VALUE",
 * //     ownedBy: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     autoRegistrationStatus: "ENABLE" || "DISABLE",
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     customerVersion: Number("int"),
 * //     generationId: "STRING_VALUE",
 * //     validity: { // CertificateValidity
 * //       notBefore: new Date("TIMESTAMP"),
 * //       notAfter: new Date("TIMESTAMP"),
 * //     },
 * //     certificateMode: "DEFAULT" || "SNI_ONLY",
 * //   },
 * //   registrationConfig: { // RegistrationConfig
 * //     templateBody: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     templateName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCACertificateCommandInput - {@link DescribeCACertificateCommandInput}
 * @returns {@link DescribeCACertificateCommandOutput}
 * @see {@link DescribeCACertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class DescribeCACertificateCommand extends $Command<
  DescribeCACertificateCommandInput,
  DescribeCACertificateCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: DescribeCACertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCACertificateCommandInput, DescribeCACertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCACertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeCACertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "DescribeCACertificate",
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
  private serialize(input: DescribeCACertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCACertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCACertificateCommandOutput> {
    return de_DescribeCACertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
