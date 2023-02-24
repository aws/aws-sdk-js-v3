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
  RegisterDeviceRequest,
  RegisterDeviceRequestFilterSensitiveLog,
  RegisterDeviceResponse,
  RegisterDeviceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RegisterDeviceCommand,
  serializeAws_restJson1RegisterDeviceCommand,
} from "../protocols/Aws_restJson1";

export interface RegisterDeviceCommandInput extends RegisterDeviceRequest {}
export interface RegisterDeviceCommandOutput extends RegisterDeviceResponse, __MetadataBearer {}

/**
 * <p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
 *       <examples>
 *          <example>
 *             <name>RegisterDevice</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 368f9200-3eca-449e-93b3-7b9c08d8e185
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.RegisterDevice
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T194643Z
 * X-AMZ-SECURITY-TOKEN: <securitytoken>
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#RegisterDevice",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "IdentityId": "IDENTITY_ID",
 *         "Platform": "GCM",
 *         "Token": "PUSH_TOKEN"
 *     }
 * }
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: 368f9200-3eca-449e-93b3-7b9c08d8e185
 * date: Sat, 04 Oct 2014 19:46:44 GMT
 * content-type: application/json
 * content-length: 145
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#RegisterDeviceResponse",
 *         "DeviceId": "5cd28fbe-dd83-47ab-9f83-19093a5fb014"
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, RegisterDeviceCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, RegisterDeviceCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new RegisterDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDeviceCommandInput} for command's `input` shape.
 * @see {@link RegisterDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 */
export class RegisterDeviceCommand extends $Command<
  RegisterDeviceCommandInput,
  RegisterDeviceCommandOutput,
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

  constructor(readonly input: RegisterDeviceCommandInput) {
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
  ): Handler<RegisterDeviceCommandInput, RegisterDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterDeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "RegisterDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterDeviceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterDeviceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterDeviceCommandOutput> {
    return deserializeAws_restJson1RegisterDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
