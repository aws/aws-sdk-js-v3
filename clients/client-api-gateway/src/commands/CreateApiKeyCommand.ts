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
import { ApiKey, CreateApiKeyRequest } from "../models/models_0";
import { de_CreateApiKeyCommand, se_CreateApiKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateApiKeyCommand}.
 */
export interface CreateApiKeyCommandInput extends CreateApiKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateApiKeyCommand}.
 */
export interface CreateApiKeyCommandOutput extends ApiKey, __MetadataBearer {}

/**
 * @public
 * <p>Create an ApiKey resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateApiKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateApiKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // CreateApiKeyRequest
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   enabled: true || false,
 *   generateDistinctId: true || false,
 *   value: "STRING_VALUE",
 *   stageKeys: [ // ListOfStageKeys
 *     { // StageKey
 *       restApiId: "STRING_VALUE",
 *       stageName: "STRING_VALUE",
 *     },
 *   ],
 *   customerId: "STRING_VALUE",
 *   tags: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateApiKeyCommand(input);
 * const response = await client.send(command);
 * // { // ApiKey
 * //   id: "STRING_VALUE",
 * //   value: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   customerId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   enabled: true || false,
 * //   createdDate: new Date("TIMESTAMP"),
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   stageKeys: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApiKeyCommandInput - {@link CreateApiKeyCommandInput}
 * @returns {@link CreateApiKeyCommandOutput}
 * @see {@link CreateApiKeyCommandInput} for command's `input` shape.
 * @see {@link CreateApiKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 */
export class CreateApiKeyCommand extends $Command<
  CreateApiKeyCommandInput,
  CreateApiKeyCommandOutput,
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
  constructor(readonly input: CreateApiKeyCommandInput) {
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
  ): Handler<CreateApiKeyCommandInput, CreateApiKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateApiKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "CreateApiKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackplaneControlService",
        operation: "CreateApiKey",
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
  private serialize(input: CreateApiKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateApiKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApiKeyCommandOutput> {
    return de_CreateApiKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
