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

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { GetDomainNameRequest, GetDomainNameResponse } from "../models/models_0";
import { de_GetDomainNameCommand, se_GetDomainNameCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDomainNameCommand}.
 */
export interface GetDomainNameCommandInput extends GetDomainNameRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainNameCommand}.
 */
export interface GetDomainNameCommandOutput extends GetDomainNameResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a domain name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetDomainNameCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetDomainNameCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetDomainNameRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetDomainNameCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainNameResponse
 * //   ApiMappingSelectionExpression: "STRING_VALUE",
 * //   DomainName: "STRING_VALUE",
 * //   DomainNameConfigurations: [ // DomainNameConfigurations
 * //     { // DomainNameConfiguration
 * //       ApiGatewayDomainName: "STRING_VALUE",
 * //       CertificateArn: "STRING_VALUE",
 * //       CertificateName: "STRING_VALUE",
 * //       CertificateUploadDate: new Date("TIMESTAMP"),
 * //       DomainNameStatus: "AVAILABLE" || "UPDATING" || "PENDING_CERTIFICATE_REIMPORT" || "PENDING_OWNERSHIP_VERIFICATION",
 * //       DomainNameStatusMessage: "STRING_VALUE",
 * //       EndpointType: "REGIONAL" || "EDGE",
 * //       HostedZoneId: "STRING_VALUE",
 * //       SecurityPolicy: "TLS_1_0" || "TLS_1_2",
 * //       OwnershipVerificationCertificateArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   MutualTlsAuthentication: { // MutualTlsAuthentication
 * //     TruststoreUri: "STRING_VALUE",
 * //     TruststoreVersion: "STRING_VALUE",
 * //     TruststoreWarnings: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainNameCommandInput - {@link GetDomainNameCommandInput}
 * @returns {@link GetDomainNameCommandOutput}
 * @see {@link GetDomainNameCommandInput} for command's `input` shape.
 * @see {@link GetDomainNameCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 */
export class GetDomainNameCommand extends $Command<
  GetDomainNameCommandInput,
  GetDomainNameCommandOutput,
  ApiGatewayV2ClientResolvedConfig
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
  constructor(readonly input: GetDomainNameCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDomainNameCommandInput, GetDomainNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDomainNameCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "GetDomainNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApiGatewayV2",
        operation: "GetDomainName",
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
  private serialize(input: GetDomainNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDomainNameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDomainNameCommandOutput> {
    return de_GetDomainNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
