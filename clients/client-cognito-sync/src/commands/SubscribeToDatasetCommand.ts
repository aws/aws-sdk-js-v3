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
import {
  SubscribeToDatasetRequest,
  SubscribeToDatasetRequestFilterSensitiveLog,
  SubscribeToDatasetResponse,
  SubscribeToDatasetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SubscribeToDatasetCommand,
  serializeAws_restJson1SubscribeToDatasetCommand,
} from "../protocols/Aws_restJson1";

export interface SubscribeToDatasetCommandInput extends SubscribeToDatasetRequest {}
export interface SubscribeToDatasetCommandOutput extends SubscribeToDatasetResponse, __MetadataBearer {}

/**
 * <p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
 *       <examples>
 *          <example>
 *             <name>SubscribeToDataset</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 8b9932b7-201d-4418-a960-0a470e11de9f
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.SubscribeToDataset
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T195350Z
 * X-AMZ-SECURITY-TOKEN: <securitytoken>
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#SubscribeToDataset",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "IdentityId": "IDENTITY_ID",
 *         "DatasetName": "Rufus",
 *         "DeviceId": "5cd28fbe-dd83-47ab-9f83-19093a5fb014"
 *     }
 * }
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: 8b9932b7-201d-4418-a960-0a470e11de9f
 * date: Sat, 04 Oct 2014 19:53:50 GMT
 * content-type: application/json
 * content-length: 99
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#SubscribeToDatasetResponse"
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, SubscribeToDatasetCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, SubscribeToDatasetCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new SubscribeToDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubscribeToDatasetCommandInput} for command's `input` shape.
 * @see {@link SubscribeToDatasetCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 */
export class SubscribeToDatasetCommand extends $Command<
  SubscribeToDatasetCommandInput,
  SubscribeToDatasetCommandOutput,
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

  constructor(readonly input: SubscribeToDatasetCommandInput) {
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
  ): Handler<SubscribeToDatasetCommandInput, SubscribeToDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SubscribeToDatasetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "SubscribeToDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubscribeToDatasetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SubscribeToDatasetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubscribeToDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SubscribeToDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubscribeToDatasetCommandOutput> {
    return deserializeAws_restJson1SubscribeToDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
