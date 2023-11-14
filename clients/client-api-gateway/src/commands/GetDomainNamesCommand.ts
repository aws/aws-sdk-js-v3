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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DomainNames, GetDomainNamesRequest } from "../models/models_0";
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
export interface GetDomainNamesCommandOutput extends DomainNames, __MetadataBearer {}

/**
 * @public
 * <p>Represents a collection of DomainName resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDomainNamesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDomainNamesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetDomainNamesRequest
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetDomainNamesCommand(input);
 * const response = await client.send(command);
 * // { // DomainNames
 * //   items: [ // ListOfDomainName
 * //     { // DomainName
 * //       domainName: "STRING_VALUE",
 * //       certificateName: "STRING_VALUE",
 * //       certificateArn: "STRING_VALUE",
 * //       certificateUploadDate: new Date("TIMESTAMP"),
 * //       regionalDomainName: "STRING_VALUE",
 * //       regionalHostedZoneId: "STRING_VALUE",
 * //       regionalCertificateName: "STRING_VALUE",
 * //       regionalCertificateArn: "STRING_VALUE",
 * //       distributionDomainName: "STRING_VALUE",
 * //       distributionHostedZoneId: "STRING_VALUE",
 * //       endpointConfiguration: { // EndpointConfiguration
 * //         types: [ // ListOfEndpointType
 * //           "REGIONAL" || "EDGE" || "PRIVATE",
 * //         ],
 * //         vpcEndpointIds: [ // ListOfString
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       domainNameStatus: "AVAILABLE" || "UPDATING" || "PENDING" || "PENDING_CERTIFICATE_REIMPORT" || "PENDING_OWNERSHIP_VERIFICATION",
 * //       domainNameStatusMessage: "STRING_VALUE",
 * //       securityPolicy: "TLS_1_0" || "TLS_1_2",
 * //       tags: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       mutualTlsAuthentication: { // MutualTlsAuthentication
 * //         truststoreUri: "STRING_VALUE",
 * //         truststoreVersion: "STRING_VALUE",
 * //         truststoreWarnings: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ownershipVerificationCertificateArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDomainNamesCommandInput - {@link GetDomainNamesCommandInput}
 * @returns {@link GetDomainNamesCommandOutput}
 * @see {@link GetDomainNamesCommandInput} for command's `input` shape.
 * @see {@link GetDomainNamesCommandOutput} for command's `response` shape.
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
export class GetDomainNamesCommand extends $Command<
  GetDomainNamesCommandInput,
  GetDomainNamesCommandOutput,
  APIGatewayClientResolvedConfig
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
  constructor(readonly input: GetDomainNamesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDomainNamesCommandInput, GetDomainNamesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDomainNamesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetDomainNamesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackplaneControlService",
        operation: "GetDomainNames",
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
  private serialize(input: GetDomainNamesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDomainNamesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDomainNamesCommandOutput> {
    return de_GetDomainNamesCommand(output, context);
  }
}
