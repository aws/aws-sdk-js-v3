import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { SetIdentityPoolConfigurationRequest, SetIdentityPoolConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SetIdentityPoolConfigurationCommand,
  serializeAws_restJson1SetIdentityPoolConfigurationCommand,
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

export type SetIdentityPoolConfigurationCommandInput = SetIdentityPoolConfigurationRequest;
export type SetIdentityPoolConfigurationCommandOutput = SetIdentityPoolConfigurationResponse & __MetadataBearer;

/**
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
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfiguration",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "PushSync":
 *         {
 *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 *             "RoleArn": "ROLEARN"
 *         }
 *     }
 * }
 *             </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: a46db021-f5dd-45d6-af5b-7069fa4a211b
 * date: Sat, 04 Oct 2014 20:00:06 GMT
 * content-type: application/json
 * content-length: 332
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfigurationResponse",
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "PushSync":
 *         {
 *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 *             "RoleArn": "ROLEARN"
 *         }
 *     },
 *     "Version": "1.0"
 * }
 *             </response>
 *          </example>
 *       </examples>
 */
export class SetIdentityPoolConfigurationCommand extends $Command<
  SetIdentityPoolConfigurationCommandInput,
  SetIdentityPoolConfigurationCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "SetIdentityPoolConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetIdentityPoolConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetIdentityPoolConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetIdentityPoolConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SetIdentityPoolConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetIdentityPoolConfigurationCommandOutput> {
    return deserializeAws_restJson1SetIdentityPoolConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
