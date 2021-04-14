import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { GetIdentityPoolConfigurationRequest, GetIdentityPoolConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetIdentityPoolConfigurationCommand,
  serializeAws_restJson1GetIdentityPoolConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetIdentityPoolConfigurationCommandInput = GetIdentityPoolConfigurationRequest;
export type GetIdentityPoolConfigurationCommandOutput = GetIdentityPoolConfigurationResponse & __MetadataBearer;

/**
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
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#GetIdentityPoolConfiguration",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "IdentityPoolId": "ID_POOL_ID"
 *     }
 * }
 *
 *             </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: b1cfdd4b-f620-4fe4-be0f-02024a1d33da
 * date: Sat, 04 Oct 2014 19:57:22 GMT
 * content-type: application/json
 * content-length: 332
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#GetIdentityPoolConfigurationResponse",
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "PushSync":
 *         {
 *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 *             "RoleArn": "ROLEARN"
 *         }
 *     },
 *     "Version": "1.0"
 * }
 *  </response>
 *          </example>
 *       </examples>
 */
export class GetIdentityPoolConfigurationCommand extends $Command<
  GetIdentityPoolConfigurationCommandInput,
  GetIdentityPoolConfigurationCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "GetIdentityPoolConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIdentityPoolConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIdentityPoolConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIdentityPoolConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIdentityPoolConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityPoolConfigurationCommandOutput> {
    return deserializeAws_restJson1GetIdentityPoolConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
