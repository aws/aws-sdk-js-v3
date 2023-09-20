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
import { TestInvokeAuthorizerRequest, TestInvokeAuthorizerResponse } from "../models/models_0";
import { de_TestInvokeAuthorizerCommand, se_TestInvokeAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestInvokeAuthorizerCommand}.
 */
export interface TestInvokeAuthorizerCommandInput extends TestInvokeAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link TestInvokeAuthorizerCommand}.
 */
export interface TestInvokeAuthorizerCommandOutput extends TestInvokeAuthorizerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, TestInvokeAuthorizerCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, TestInvokeAuthorizerCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // TestInvokeAuthorizerRequest
 *   restApiId: "STRING_VALUE", // required
 *   authorizerId: "STRING_VALUE", // required
 *   headers: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 *   multiValueHeaders: { // MapOfStringToList
 *     "<keys>": [ // ListOfString
 *       "STRING_VALUE",
 *     ],
 *   },
 *   pathWithQueryString: "STRING_VALUE",
 *   body: "STRING_VALUE",
 *   stageVariables: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   additionalContext: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TestInvokeAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // TestInvokeAuthorizerResponse
 * //   clientStatus: Number("int"),
 * //   log: "STRING_VALUE",
 * //   latency: Number("long"),
 * //   principalId: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * //   authorization: { // MapOfStringToList
 * //     "<keys>": [ // ListOfString
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   claims: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TestInvokeAuthorizerCommandInput - {@link TestInvokeAuthorizerCommandInput}
 * @returns {@link TestInvokeAuthorizerCommandOutput}
 * @see {@link TestInvokeAuthorizerCommandInput} for command's `input` shape.
 * @see {@link TestInvokeAuthorizerCommandOutput} for command's `response` shape.
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
export class TestInvokeAuthorizerCommand extends $Command<
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
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
  constructor(readonly input: TestInvokeAuthorizerCommandInput) {
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
  ): Handler<TestInvokeAuthorizerCommandInput, TestInvokeAuthorizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TestInvokeAuthorizerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "TestInvokeAuthorizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackplaneControlService",
        operation: "TestInvokeAuthorizer",
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
  private serialize(input: TestInvokeAuthorizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestInvokeAuthorizerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestInvokeAuthorizerCommandOutput> {
    return de_TestInvokeAuthorizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
