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

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { GetIdentityPoolConfigurationRequest, GetIdentityPoolConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetIdentityPoolConfigurationCommand,
  serializeAws_restJson1GetIdentityPoolConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetIdentityPoolConfigurationCommand}.
 */
export interface GetIdentityPoolConfigurationCommandInput extends GetIdentityPoolConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityPoolConfigurationCommand}.
 */
export interface GetIdentityPoolConfigurationCommandOutput
  extends GetIdentityPoolConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 *       <examples>
 *          <example>
 *             <name>GetIdentityPoolConfiguration</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: b1cfdd4b-f620-4fe4-be0f-02024a1d33da
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.GetIdentityPoolConfiguration
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T195722Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
 *
 * \{
 *     "Operation": "com.amazonaws.cognito.sync.model#GetIdentityPoolConfiguration",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     \{
 *         "IdentityPoolId": "ID_POOL_ID"
 *     \}
 * \}
 *
 *             </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: b1cfdd4b-f620-4fe4-be0f-02024a1d33da
 * date: Sat, 04 Oct 2014 19:57:22 GMT
 * content-type: application/json
 * content-length: 332
 *
 * \{
 *     "Output":
 *     \{
 *         "__type": "com.amazonaws.cognito.sync.model#GetIdentityPoolConfigurationResponse",
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "PushSync":
 *         \{
 *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 *             "RoleArn": "ROLEARN"
 *         \}
 *     \},
 *     "Version": "1.0"
 * \}
 *  </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, GetIdentityPoolConfigurationCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, GetIdentityPoolConfigurationCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new GetIdentityPoolConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetIdentityPoolConfigurationCommandInput - {@link GetIdentityPoolConfigurationCommandInput}
 * @returns {@link GetIdentityPoolConfigurationCommandOutput}
 * @see {@link GetIdentityPoolConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetIdentityPoolConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  Indicates an internal service
 *       error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Thrown when a request parameter does not comply
 *       with the associated constraints.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  Thrown when a user is not authorized to access the
 *       requested resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Thrown if the resource doesn't
 *       exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Thrown if the request is
 *       throttled.
 *
 *
 */
export class GetIdentityPoolConfigurationCommand extends $Command<
  GetIdentityPoolConfigurationCommandInput,
  GetIdentityPoolConfigurationCommandOutput,
  CognitoSyncClientResolvedConfig
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
  constructor(readonly input: GetIdentityPoolConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIdentityPoolConfigurationCommandInput, GetIdentityPoolConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIdentityPoolConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "GetIdentityPoolConfigurationCommand";
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
  private serialize(input: GetIdentityPoolConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIdentityPoolConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityPoolConfigurationCommandOutput> {
    return deserializeAws_restJson1GetIdentityPoolConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
