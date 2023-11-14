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
import { TestAuthorizationRequest, TestAuthorizationResponse } from "../models/models_2";
import { de_TestAuthorizationCommand, se_TestAuthorizationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestAuthorizationCommand}.
 */
export interface TestAuthorizationCommandInput extends TestAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link TestAuthorizationCommand}.
 */
export interface TestAuthorizationCommandOutput extends TestAuthorizationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Tests if a specified principal is authorized to perform an IoT action on a
 *          specified resource. Use this to test and debug the authorization behavior of devices that
 *          connect to the IoT device gateway.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestAuthorization</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TestAuthorizationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TestAuthorizationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // TestAuthorizationRequest
 *   principal: "STRING_VALUE",
 *   cognitoIdentityPoolId: "STRING_VALUE",
 *   authInfos: [ // AuthInfos // required
 *     { // AuthInfo
 *       actionType: "PUBLISH" || "SUBSCRIBE" || "RECEIVE" || "CONNECT",
 *       resources: [ // Resources // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   clientId: "STRING_VALUE",
 *   policyNamesToAdd: [ // PolicyNames
 *     "STRING_VALUE",
 *   ],
 *   policyNamesToSkip: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new TestAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // TestAuthorizationResponse
 * //   authResults: [ // AuthResults
 * //     { // AuthResult
 * //       authInfo: { // AuthInfo
 * //         actionType: "PUBLISH" || "SUBSCRIBE" || "RECEIVE" || "CONNECT",
 * //         resources: [ // Resources // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       allowed: { // Allowed
 * //         policies: [ // Policies
 * //           { // Policy
 * //             policyName: "STRING_VALUE",
 * //             policyArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       denied: { // Denied
 * //         implicitDeny: { // ImplicitDeny
 * //           policies: [
 * //             {
 * //               policyName: "STRING_VALUE",
 * //               policyArn: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         explicitDeny: { // ExplicitDeny
 * //           policies: [
 * //             {
 * //               policyName: "STRING_VALUE",
 * //               policyArn: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       authDecision: "ALLOWED" || "EXPLICIT_DENY" || "IMPLICIT_DENY",
 * //       missingContextValues: [ // MissingContextValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param TestAuthorizationCommandInput - {@link TestAuthorizationCommandInput}
 * @returns {@link TestAuthorizationCommandOutput}
 * @see {@link TestAuthorizationCommandInput} for command's `input` shape.
 * @see {@link TestAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
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
export class TestAuthorizationCommand extends $Command<
  TestAuthorizationCommandInput,
  TestAuthorizationCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: TestAuthorizationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestAuthorizationCommandInput, TestAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TestAuthorizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "TestAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "TestAuthorization",
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
  private serialize(input: TestAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestAuthorizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestAuthorizationCommandOutput> {
    return de_TestAuthorizationCommand(output, context);
  }
}
