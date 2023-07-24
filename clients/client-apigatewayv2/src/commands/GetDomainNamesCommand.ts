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
} from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { GetDomainNamesRequest, GetDomainNamesResponse } from "../models/models_0";
import { de_GetDomainNamesCommand, se_GetDomainNamesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDomainNamesCommand}.
 */
export interface GetDomainNamesCommandInput extends GetDomainNamesRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainNamesCommand}.
 */
export interface GetDomainNamesCommandOutput extends GetDomainNamesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the domain names for an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetDomainNamesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetDomainNamesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetDomainNamesRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetDomainNamesCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainNamesResponse
 * //   Items: [ // __listOfDomainName
 * //     { // DomainName
 * //       ApiMappingSelectionExpression: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE", // required
 * //       DomainNameConfigurations: [ // DomainNameConfigurations
 * //         { // DomainNameConfiguration
 * //           ApiGatewayDomainName: "STRING_VALUE",
 * //           CertificateArn: "STRING_VALUE",
 * //           CertificateName: "STRING_VALUE",
 * //           CertificateUploadDate: new Date("TIMESTAMP"),
 * //           DomainNameStatus: "AVAILABLE" || "UPDATING" || "PENDING_CERTIFICATE_REIMPORT" || "PENDING_OWNERSHIP_VERIFICATION",
 * //           DomainNameStatusMessage: "STRING_VALUE",
 * //           EndpointType: "REGIONAL" || "EDGE",
 * //           HostedZoneId: "STRING_VALUE",
 * //           SecurityPolicy: "TLS_1_0" || "TLS_1_2",
 * //           OwnershipVerificationCertificateArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       MutualTlsAuthentication: { // MutualTlsAuthentication
 * //         TruststoreUri: "STRING_VALUE",
 * //         TruststoreVersion: "STRING_VALUE",
 * //         TruststoreWarnings: [ // __listOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDomainNamesCommandInput - {@link GetDomainNamesCommandInput}
 * @returns {@link GetDomainNamesCommandOutput}
 * @see {@link GetDomainNamesCommandInput} for command's `input` shape.
 * @see {@link GetDomainNamesCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class GetDomainNamesCommand extends $Command<
  GetDomainNamesCommandInput,
  GetDomainNamesCommandOutput,
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
  constructor(readonly input: GetDomainNamesCommandInput) {
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
  ): Handler<GetDomainNamesCommandInput, GetDomainNamesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDomainNamesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "GetDomainNamesCommand";
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
  private serialize(input: GetDomainNamesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDomainNamesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDomainNamesCommandOutput> {
    return de_GetDomainNamesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
