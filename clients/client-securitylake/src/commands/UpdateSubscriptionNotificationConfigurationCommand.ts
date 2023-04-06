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

import {
  UpdateSubscriptionNotificationConfigurationRequest,
  UpdateSubscriptionNotificationConfigurationResponse,
} from "../models/models_0";
import {
  de_UpdateSubscriptionNotificationConfigurationCommand,
  se_UpdateSubscriptionNotificationConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 *
 * The input for {@link UpdateSubscriptionNotificationConfigurationCommand}.
 */
export interface UpdateSubscriptionNotificationConfigurationCommandInput
  extends UpdateSubscriptionNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSubscriptionNotificationConfigurationCommand}.
 */
export interface UpdateSubscriptionNotificationConfigurationCommandOutput
  extends UpdateSubscriptionNotificationConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or
 *          switches the notification subscription endpoint for a subscriber.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, UpdateSubscriptionNotificationConfigurationCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, UpdateSubscriptionNotificationConfigurationCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // UpdateSubscriptionNotificationConfigurationRequest
 *   subscriptionId: "STRING_VALUE", // required
 *   subscriptionEndpoint: "STRING_VALUE",
 *   httpsApiKeyName: "STRING_VALUE",
 *   httpsApiKeyValue: "STRING_VALUE",
 *   httpsMethod: "STRING_VALUE",
 *   createSqs: true || false,
 *   roleArn: "STRING_VALUE",
 * };
 * const command = new UpdateSubscriptionNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateSubscriptionNotificationConfigurationCommandInput - {@link UpdateSubscriptionNotificationConfigurationCommandInput}
 * @returns {@link UpdateSubscriptionNotificationConfigurationCommandOutput}
 * @see {@link UpdateSubscriptionNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriptionNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link AccountNotFoundException} (client fault)
 *  <p>Amazon Security Lake cannot find an Amazon Web Services account with the accountID that you
 *          specified, or the account whose credentials you used to make this request isn't a member of
 *          an organization.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>More than one process tried to modify a resource at the same time. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again. </p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because a value that's not valid or is out of range was
 *          supplied for an input parameter. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your signing certificate could not be validated. </p>
 *
 *
 */
export class UpdateSubscriptionNotificationConfigurationCommand extends $Command<
  UpdateSubscriptionNotificationConfigurationCommandInput,
  UpdateSubscriptionNotificationConfigurationCommandOutput,
  SecurityLakeClientResolvedConfig
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
  constructor(readonly input: UpdateSubscriptionNotificationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateSubscriptionNotificationConfigurationCommandInput,
    UpdateSubscriptionNotificationConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateSubscriptionNotificationConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "UpdateSubscriptionNotificationConfigurationCommand";
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
  private serialize(
    input: UpdateSubscriptionNotificationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateSubscriptionNotificationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSubscriptionNotificationConfigurationCommandOutput> {
    return de_UpdateSubscriptionNotificationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
