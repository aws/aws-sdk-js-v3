import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { DescribeIdentityPoolUsageRequest, DescribeIdentityPoolUsageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeIdentityPoolUsageCommand,
  serializeAws_restJson1DescribeIdentityPoolUsageCommand,
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

export type DescribeIdentityPoolUsageCommandInput = DescribeIdentityPoolUsageRequest;
export type DescribeIdentityPoolUsageCommandOutput = DescribeIdentityPoolUsageResponse & __MetadataBearer;

/**
 * <p>Gets usage details (for example, data storage) about a particular identity pool.</p>
 *       <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 *
 *       <examples>
 *          <example>
 *             <name>DescribeIdentityPoolUsage</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 8dc0e749-c8cd-48bd-8520-da6be00d528b
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.DescribeIdentityPoolUsage
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T205737Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#DescribeIdentityPoolUsage",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "IdentityPoolId": "IDENTITY_POOL_ID"
 *     }
 * }
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: 8dc0e749-c8cd-48bd-8520-da6be00d528b
 * content-type: application/json
 * content-length: 271
 * date: Tue, 11 Nov 2014 20:57:37 GMT
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#DescribeIdentityPoolUsageResponse",
 *         "IdentityPoolUsage":
 *         {
 *             "DataStorage": 0,
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.413231134115E9,
 *             "SyncSessionsCount": null
 *         }
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 */
export class DescribeIdentityPoolUsageCommand extends $Command<
  DescribeIdentityPoolUsageCommandInput,
  DescribeIdentityPoolUsageCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIdentityPoolUsageCommandInput) {
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
  ): Handler<DescribeIdentityPoolUsageCommandInput, DescribeIdentityPoolUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "DescribeIdentityPoolUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIdentityPoolUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeIdentityPoolUsageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeIdentityPoolUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeIdentityPoolUsageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIdentityPoolUsageCommandOutput> {
    return deserializeAws_restJson1DescribeIdentityPoolUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
