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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { TestInvokeAuthorizerRequest, TestInvokeAuthorizerResponse } from "../models/models_2";
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
 * <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use
 *          this to test and debug the custom authorization behavior of devices that connect to the IoT
 *          device gateway.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestInvokeAuthorizer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TestInvokeAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TestInvokeAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // TestInvokeAuthorizerRequest
 *   authorizerName: "STRING_VALUE", // required
 *   token: "STRING_VALUE",
 *   tokenSignature: "STRING_VALUE",
 *   httpContext: { // HttpContext
 *     headers: { // HttpHeaders
 *       "<keys>": "STRING_VALUE",
 *     },
 *     queryString: "STRING_VALUE",
 *   },
 *   mqttContext: { // MqttContext
 *     username: "STRING_VALUE",
 *     password: "BLOB_VALUE",
 *     clientId: "STRING_VALUE",
 *   },
 *   tlsContext: { // TlsContext
 *     serverName: "STRING_VALUE",
 *   },
 * };
 * const command = new TestInvokeAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // TestInvokeAuthorizerResponse
 * //   isAuthenticated: true || false,
 * //   principalId: "STRING_VALUE",
 * //   policyDocuments: [ // PolicyDocuments
 * //     "STRING_VALUE",
 * //   ],
 * //   refreshAfterInSeconds: Number("int"),
 * //   disconnectAfterInSeconds: Number("int"),
 * // };
 *
 * ```
 *
 * @param TestInvokeAuthorizerCommandInput - {@link TestInvokeAuthorizerCommandInput}
 * @returns {@link TestInvokeAuthorizerCommandOutput}
 * @see {@link TestInvokeAuthorizerCommandInput} for command's `input` shape.
 * @see {@link TestInvokeAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link InvalidResponseException} (client fault)
 *  <p>The response is invalid.</p>
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
export class TestInvokeAuthorizerCommand extends $Command<
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
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
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestInvokeAuthorizerCommandInput, TestInvokeAuthorizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TestInvokeAuthorizerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "TestInvokeAuthorizerCommand";
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
