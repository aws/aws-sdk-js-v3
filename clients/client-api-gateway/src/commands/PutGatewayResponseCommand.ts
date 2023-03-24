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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GatewayResponse, PutGatewayResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutGatewayResponseCommand,
  serializeAws_restJson1PutGatewayResponseCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PutGatewayResponseCommand}.
 */
export interface PutGatewayResponseCommandInput extends PutGatewayResponseRequest {}
/**
 * @public
 *
 * The output of {@link PutGatewayResponseCommand}.
 */
export interface PutGatewayResponseCommandOutput extends GatewayResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutGatewayResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutGatewayResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = {
 *   restApiId: "STRING_VALUE", // required
 *   responseType: "DEFAULT_4XX" || "DEFAULT_5XX" || "RESOURCE_NOT_FOUND" || "UNAUTHORIZED" || "INVALID_API_KEY" || "ACCESS_DENIED" || "AUTHORIZER_FAILURE" || "AUTHORIZER_CONFIGURATION_ERROR" || "INVALID_SIGNATURE" || "EXPIRED_TOKEN" || "MISSING_AUTHENTICATION_TOKEN" || "INTEGRATION_FAILURE" || "INTEGRATION_TIMEOUT" || "API_CONFIGURATION_ERROR" || "UNSUPPORTED_MEDIA_TYPE" || "BAD_REQUEST_PARAMETERS" || "BAD_REQUEST_BODY" || "REQUEST_TOO_LARGE" || "THROTTLED" || "QUOTA_EXCEEDED" || "WAF_FILTERED", // required
 *   statusCode: "STRING_VALUE",
 *   responseParameters: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   responseTemplates: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutGatewayResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutGatewayResponseCommandInput - {@link PutGatewayResponseCommandInput}
 * @returns {@link PutGatewayResponseCommandOutput}
 * @see {@link PutGatewayResponseCommandInput} for command's `input` shape.
 * @see {@link PutGatewayResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
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
 *
 */
export class PutGatewayResponseCommand extends $Command<
  PutGatewayResponseCommandInput,
  PutGatewayResponseCommandOutput,
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
  constructor(readonly input: PutGatewayResponseCommandInput) {
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
  ): Handler<PutGatewayResponseCommandInput, PutGatewayResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutGatewayResponseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "PutGatewayResponseCommand";
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
  private serialize(input: PutGatewayResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutGatewayResponseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutGatewayResponseCommandOutput> {
    return deserializeAws_restJson1PutGatewayResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
