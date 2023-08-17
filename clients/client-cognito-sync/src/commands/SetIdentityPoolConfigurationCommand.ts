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

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { SetIdentityPoolConfigurationRequest, SetIdentityPoolConfigurationResponse } from "../models/models_0";
import {
  de_SetIdentityPoolConfigurationCommand,
  se_SetIdentityPoolConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityPoolConfigurationCommand}.
 */
export interface SetIdentityPoolConfigurationCommandInput extends SetIdentityPoolConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link SetIdentityPoolConfigurationCommand}.
 */
export interface SetIdentityPoolConfigurationCommandOutput
  extends SetIdentityPoolConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 *       <examples>
 *          <example>
 *             <name>SetIdentityPoolConfiguration</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: a46db021-f5dd-45d6-af5b-7069fa4a211b
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.SetIdentityPoolConfiguration
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T200006Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
 *
 * \{
 *     "Operation": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfiguration",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     \{
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "PushSync":
 *         \{
 *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 *             "RoleArn": "ROLEARN"
 *         \}
 *     \}
 * \}
 *             </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: a46db021-f5dd-45d6-af5b-7069fa4a211b
 * date: Sat, 04 Oct 2014 20:00:06 GMT
 * content-type: application/json
 * content-length: 332
 *
 * \{
 *     "Output":
 *     \{
 *         "__type": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfigurationResponse",
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "PushSync":
 *         \{
 *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 *             "RoleArn": "ROLEARN"
 *         \}
 *     \},
 *     "Version": "1.0"
 * \}
 *             </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, SetIdentityPoolConfigurationCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, SetIdentityPoolConfigurationCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const input = { // SetIdentityPoolConfigurationRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 *   PushSync: { // PushSync
 *     ApplicationArns: [ // ApplicationArnList
 *       "STRING_VALUE",
 *     ],
 *     RoleArn: "STRING_VALUE",
 *   },
 *   CognitoStreams: { // CognitoStreams
 *     StreamName: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     StreamingStatus: "STRING_VALUE",
 *   },
 * };
 * const command = new SetIdentityPoolConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // SetIdentityPoolConfigurationResponse
 * //   IdentityPoolId: "STRING_VALUE",
 * //   PushSync: { // PushSync
 * //     ApplicationArns: [ // ApplicationArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     RoleArn: "STRING_VALUE",
 * //   },
 * //   CognitoStreams: { // CognitoStreams
 * //     StreamName: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     StreamingStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param SetIdentityPoolConfigurationCommandInput - {@link SetIdentityPoolConfigurationCommandInput}
 * @returns {@link SetIdentityPoolConfigurationCommandOutput}
 * @see {@link SetIdentityPoolConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetIdentityPoolConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Thrown if there are parallel requests to modify a resource.</p>
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
 * @throws {@link CognitoSyncServiceException}
 * <p>Base exception class for all service exceptions from CognitoSync service.</p>
 *
 */
export class SetIdentityPoolConfigurationCommand extends $Command<
  SetIdentityPoolConfigurationCommandInput,
  SetIdentityPoolConfigurationCommandOutput,
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
  constructor(readonly input: SetIdentityPoolConfigurationCommandInput) {
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
  ): Handler<SetIdentityPoolConfigurationCommandInput, SetIdentityPoolConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetIdentityPoolConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "SetIdentityPoolConfigurationCommand";
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
  private serialize(input: SetIdentityPoolConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetIdentityPoolConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetIdentityPoolConfigurationCommandOutput> {
    return de_SetIdentityPoolConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
