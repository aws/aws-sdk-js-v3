// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  AdminGetDeviceRequest,
  AdminGetDeviceRequestFilterSensitiveLog,
  AdminGetDeviceResponse,
  AdminGetDeviceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_AdminGetDeviceCommand, se_AdminGetDeviceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AdminGetDeviceCommand}.
 */
export interface AdminGetDeviceCommandInput extends AdminGetDeviceRequest {}
/**
 * @public
 *
 * The output of {@link AdminGetDeviceCommand}.
 */
export interface AdminGetDeviceCommandOutput extends AdminGetDeviceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the device, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminGetDeviceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminGetDeviceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminGetDeviceRequest
 *   DeviceKey: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 * };
 * const command = new AdminGetDeviceCommand(input);
 * const response = await client.send(command);
 * // { // AdminGetDeviceResponse
 * //   Device: { // DeviceType
 * //     DeviceKey: "STRING_VALUE",
 * //     DeviceAttributes: [ // AttributeListType
 * //       { // AttributeType
 * //         Name: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DeviceCreateDate: new Date("TIMESTAMP"),
 * //     DeviceLastModifiedDate: new Date("TIMESTAMP"),
 * //     DeviceLastAuthenticatedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AdminGetDeviceCommandInput - {@link AdminGetDeviceCommandInput}
 * @returns {@link AdminGetDeviceCommandOutput}
 * @see {@link AdminGetDeviceCommandInput} for command's `input` shape.
 * @see {@link AdminGetDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link InvalidUserPoolConfigurationException} (client fault)
 *  <p>This exception is thrown when the user pool configuration is not valid.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class AdminGetDeviceCommand extends $Command<
  AdminGetDeviceCommandInput,
  AdminGetDeviceCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
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
  constructor(readonly input: AdminGetDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AdminGetDeviceCommandInput, AdminGetDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdminGetDeviceCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminGetDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminGetDeviceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AdminGetDeviceResponseFilterSensitiveLog,
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
  private serialize(input: AdminGetDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AdminGetDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminGetDeviceCommandOutput> {
    return de_AdminGetDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
