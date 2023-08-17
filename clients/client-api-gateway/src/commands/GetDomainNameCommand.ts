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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DomainName, GetDomainNameRequest } from "../models/models_0";
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
export interface GetDomainNameCommandOutput extends DomainName, __MetadataBearer {}

/**
 * @public
 * <p>Represents a domain name that is contained in a simpler, more intuitive URL that can be called.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDomainNameCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDomainNameCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetDomainNameRequest
 *   domainName: "STRING_VALUE", // required
 * };
 * const command = new GetDomainNameCommand(input);
 * const response = await client.send(command);
 * // { // DomainName
 * //   domainName: "STRING_VALUE",
 * //   certificateName: "STRING_VALUE",
 * //   certificateArn: "STRING_VALUE",
 * //   certificateUploadDate: new Date("TIMESTAMP"),
 * //   regionalDomainName: "STRING_VALUE",
 * //   regionalHostedZoneId: "STRING_VALUE",
 * //   regionalCertificateName: "STRING_VALUE",
 * //   regionalCertificateArn: "STRING_VALUE",
 * //   distributionDomainName: "STRING_VALUE",
 * //   distributionHostedZoneId: "STRING_VALUE",
 * //   endpointConfiguration: { // EndpointConfiguration
 * //     types: [ // ListOfEndpointType
 * //       "REGIONAL" || "EDGE" || "PRIVATE",
 * //     ],
 * //     vpcEndpointIds: [ // ListOfString
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   domainNameStatus: "AVAILABLE" || "UPDATING" || "PENDING" || "PENDING_CERTIFICATE_REIMPORT" || "PENDING_OWNERSHIP_VERIFICATION",
 * //   domainNameStatusMessage: "STRING_VALUE",
 * //   securityPolicy: "TLS_1_0" || "TLS_1_2",
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   mutualTlsAuthentication: { // MutualTlsAuthentication
 * //     truststoreUri: "STRING_VALUE",
 * //     truststoreVersion: "STRING_VALUE",
 * //     truststoreWarnings: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ownershipVerificationCertificateArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDomainNameCommandInput - {@link GetDomainNameCommandInput}
 * @returns {@link GetDomainNameCommandOutput}
 * @see {@link GetDomainNameCommandInput} for command's `input` shape.
 * @see {@link GetDomainNameCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 */
export class GetDomainNameCommand extends $Command<
  GetDomainNameCommandInput,
  GetDomainNameCommandOutput,
  APIGatewayClientResolvedConfig
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
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDomainNameCommandInput, GetDomainNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDomainNameCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetDomainNameCommand";
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
