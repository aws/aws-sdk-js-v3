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
import { DescribeDomainConfigurationRequest, DescribeDomainConfigurationResponse } from "../models/models_1";
import {
  de_DescribeDomainConfigurationCommand,
  se_DescribeDomainConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainConfigurationCommand}.
 */
export interface DescribeDomainConfigurationCommandInput extends DescribeDomainConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainConfigurationCommand}.
 */
export interface DescribeDomainConfigurationCommandOutput
  extends DescribeDomainConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets summary information about a domain configuration.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDomainConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeDomainConfigurationRequest
 *   domainConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainConfigurationResponse
 * //   domainConfigurationName: "STRING_VALUE",
 * //   domainConfigurationArn: "STRING_VALUE",
 * //   domainName: "STRING_VALUE",
 * //   serverCertificates: [ // ServerCertificates
 * //     { // ServerCertificateSummary
 * //       serverCertificateArn: "STRING_VALUE",
 * //       serverCertificateStatus: "INVALID" || "VALID",
 * //       serverCertificateStatusDetail: "STRING_VALUE",
 * //     },
 * //   ],
 * //   authorizerConfig: { // AuthorizerConfig
 * //     defaultAuthorizerName: "STRING_VALUE",
 * //     allowAuthorizerOverride: true || false,
 * //   },
 * //   domainConfigurationStatus: "ENABLED" || "DISABLED",
 * //   serviceType: "DATA" || "CREDENTIAL_PROVIDER" || "JOBS",
 * //   domainType: "ENDPOINT" || "AWS_MANAGED" || "CUSTOMER_MANAGED",
 * //   lastStatusChangeDate: new Date("TIMESTAMP"),
 * //   tlsConfig: { // TlsConfig
 * //     securityPolicy: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDomainConfigurationCommandInput - {@link DescribeDomainConfigurationCommandInput}
 * @returns {@link DescribeDomainConfigurationCommandOutput}
 * @see {@link DescribeDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeDomainConfigurationCommand extends $Command<
  DescribeDomainConfigurationCommandInput,
  DescribeDomainConfigurationCommandOutput,
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
  constructor(readonly input: DescribeDomainConfigurationCommandInput) {
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
  ): Handler<DescribeDomainConfigurationCommandInput, DescribeDomainConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDomainConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeDomainConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "DescribeDomainConfiguration",
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
  private serialize(input: DescribeDomainConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDomainConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDomainConfigurationCommandOutput> {
    return de_DescribeDomainConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
