import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { ListIdentityPoolUsageRequest, ListIdentityPoolUsageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListIdentityPoolUsageCommand,
  serializeAws_restJson1ListIdentityPoolUsageCommand,
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

export type ListIdentityPoolUsageCommandInput = ListIdentityPoolUsageRequest;
export type ListIdentityPoolUsageCommandOutput = ListIdentityPoolUsageResponse & __MetadataBearer;

/**
 * <p>Gets a list of identity pools registered with Cognito.</p>
 *       <p>ListIdentityPoolUsage can only be called with developer credentials. You
 *          cannot make this API call with the temporary user credentials provided by Cognito
 *          Identity.</p>
 *       <examples>
 *          <example>
 *             <name>ListIdentityPoolUsage</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListIdentityPoolUsage
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T211414Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsage",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "MaxResults": "2"
 *     }
 * }
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
 * content-type: application/json
 * content-length: 519
 * date: Tue, 11 Nov 2014 21:14:14 GMT
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsageResponse",
 *         "Count": 2,
 *         "IdentityPoolUsages": [
 *         {
 *             "DataStorage": 0,
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.413836234607E9,
 *             "SyncSessionsCount": null
 *         },
 *         {
 *             "DataStorage": 0,
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.410892165601E9,
 *             "SyncSessionsCount": null
 *         }],
 *         "MaxResults": 2,
 *         "NextToken": "dXMtZWFzdC0xOjBjMWJhMDUyLWUwOTgtNDFmYS1hNzZlLWVhYTJjMTI1Zjg2MQ=="
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 */
export class ListIdentityPoolUsageCommand extends $Command<
  ListIdentityPoolUsageCommandInput,
  ListIdentityPoolUsageCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIdentityPoolUsageCommandInput) {
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
  ): Handler<ListIdentityPoolUsageCommandInput, ListIdentityPoolUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "ListIdentityPoolUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIdentityPoolUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListIdentityPoolUsageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListIdentityPoolUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListIdentityPoolUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIdentityPoolUsageCommandOutput> {
    return deserializeAws_restJson1ListIdentityPoolUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
