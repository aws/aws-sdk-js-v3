// smithy-typescript generated code
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { SetLogDeliveryConfigurationRequest, SetLogDeliveryConfigurationResponse } from "../models/models_0";
import { de_SetLogDeliveryConfigurationCommand, se_SetLogDeliveryConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetLogDeliveryConfigurationCommand}.
 */
export interface SetLogDeliveryConfigurationCommandInput extends SetLogDeliveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link SetLogDeliveryConfigurationCommand}.
 */
export interface SetLogDeliveryConfigurationCommandOutput
  extends SetLogDeliveryConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Sets up or modifies the detailed activity logging configuration of a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetLogDeliveryConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetLogDeliveryConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // SetLogDeliveryConfigurationRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   LogConfigurations: [ // LogConfigurationListType // required
 *     { // LogConfigurationType
 *       LogLevel: "ERROR", // required
 *       EventSource: "userNotification", // required
 *       CloudWatchLogsConfiguration: { // CloudWatchLogsConfigurationType
 *         LogGroupArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new SetLogDeliveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // SetLogDeliveryConfigurationResponse
 * //   LogDeliveryConfiguration: { // LogDeliveryConfigurationType
 * //     UserPoolId: "STRING_VALUE", // required
 * //     LogConfigurations: [ // LogConfigurationListType // required
 * //       { // LogConfigurationType
 * //         LogLevel: "ERROR", // required
 * //         EventSource: "userNotification", // required
 * //         CloudWatchLogsConfiguration: { // CloudWatchLogsConfigurationType
 * //           LogGroupArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param SetLogDeliveryConfigurationCommandInput - {@link SetLogDeliveryConfigurationCommandInput}
 * @returns {@link SetLogDeliveryConfigurationCommandOutput}
 * @see {@link SetLogDeliveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetLogDeliveryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
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
export class SetLogDeliveryConfigurationCommand extends $Command<
  SetLogDeliveryConfigurationCommandInput,
  SetLogDeliveryConfigurationCommandOutput,
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
  constructor(readonly input: SetLogDeliveryConfigurationCommandInput) {
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
  ): Handler<SetLogDeliveryConfigurationCommandInput, SetLogDeliveryConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetLogDeliveryConfigurationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "SetLogDeliveryConfigurationCommand";
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
  private serialize(input: SetLogDeliveryConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetLogDeliveryConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetLogDeliveryConfigurationCommandOutput> {
    return de_SetLogDeliveryConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
