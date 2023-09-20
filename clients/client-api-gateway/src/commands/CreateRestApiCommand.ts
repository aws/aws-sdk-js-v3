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
import { CreateRestApiRequest, RestApi } from "../models/models_0";
import { de_CreateRestApiCommand, se_CreateRestApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRestApiCommand}.
 */
export interface CreateRestApiCommandInput extends CreateRestApiRequest {}
/**
 * @public
 *
 * The output of {@link CreateRestApiCommand}.
 */
export interface CreateRestApiCommandOutput extends RestApi, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new RestApi resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // CreateRestApiRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   version: "STRING_VALUE",
 *   cloneFrom: "STRING_VALUE",
 *   binaryMediaTypes: [ // ListOfString
 *     "STRING_VALUE",
 *   ],
 *   minimumCompressionSize: Number("int"),
 *   apiKeySource: "HEADER" || "AUTHORIZER",
 *   endpointConfiguration: { // EndpointConfiguration
 *     types: [ // ListOfEndpointType
 *       "REGIONAL" || "EDGE" || "PRIVATE",
 *     ],
 *     vpcEndpointIds: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   policy: "STRING_VALUE",
 *   tags: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 *   disableExecuteApiEndpoint: true || false,
 * };
 * const command = new CreateRestApiCommand(input);
 * const response = await client.send(command);
 * // { // RestApi
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   createdDate: new Date("TIMESTAMP"),
 * //   version: "STRING_VALUE",
 * //   warnings: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   binaryMediaTypes: [
 * //     "STRING_VALUE",
 * //   ],
 * //   minimumCompressionSize: Number("int"),
 * //   apiKeySource: "HEADER" || "AUTHORIZER",
 * //   endpointConfiguration: { // EndpointConfiguration
 * //     types: [ // ListOfEndpointType
 * //       "REGIONAL" || "EDGE" || "PRIVATE",
 * //     ],
 * //     vpcEndpointIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   policy: "STRING_VALUE",
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   disableExecuteApiEndpoint: true || false,
 * //   rootResourceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRestApiCommandInput - {@link CreateRestApiCommandInput}
 * @returns {@link CreateRestApiCommandOutput}
 * @see {@link CreateRestApiCommandInput} for command's `input` shape.
 * @see {@link CreateRestApiCommandOutput} for command's `response` shape.
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
export class CreateRestApiCommand extends $Command<
  CreateRestApiCommandInput,
  CreateRestApiCommandOutput,
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
  constructor(readonly input: CreateRestApiCommandInput) {
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
  ): Handler<CreateRestApiCommandInput, CreateRestApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateRestApiCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "CreateRestApiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackplaneControlService",
        operation: "CreateRestApi",
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
  private serialize(input: CreateRestApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRestApiCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRestApiCommandOutput> {
    return de_CreateRestApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
