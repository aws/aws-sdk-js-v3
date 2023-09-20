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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreateSubscriberNotificationRequest, CreateSubscriberNotificationResponse } from "../models/models_0";
import {
  de_CreateSubscriberNotificationCommand,
  se_CreateSubscriberNotificationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSubscriberNotificationCommand}.
 */
export interface CreateSubscriberNotificationCommandInput extends CreateSubscriberNotificationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubscriberNotificationCommand}.
 */
export interface CreateSubscriberNotificationCommandOutput
  extends CreateSubscriberNotificationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Notifies the subscriber when new data is written to the data lake for the sources that
 *          the subscriber consumes in Security Lake. You can create only one subscriber notification per
 *          subscriber.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateSubscriberNotificationCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateSubscriberNotificationCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // CreateSubscriberNotificationRequest
 *   subscriberId: "STRING_VALUE", // required
 *   configuration: { // NotificationConfiguration Union: only one key present
 *     sqsNotificationConfiguration: {},
 *     httpsNotificationConfiguration: { // HttpsNotificationConfiguration
 *       endpoint: "STRING_VALUE", // required
 *       authorizationApiKeyName: "STRING_VALUE",
 *       authorizationApiKeyValue: "STRING_VALUE",
 *       httpMethod: "POST" || "PUT",
 *       targetRoleArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateSubscriberNotificationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriberNotificationResponse
 * //   subscriberEndpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSubscriberNotificationCommandInput - {@link CreateSubscriberNotificationCommandInput}
 * @returns {@link CreateSubscriberNotificationCommandOutput}
 * @see {@link CreateSubscriberNotificationCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriberNotificationCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 */
export class CreateSubscriberNotificationCommand extends $Command<
  CreateSubscriberNotificationCommandInput,
  CreateSubscriberNotificationCommandOutput,
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
  constructor(readonly input: CreateSubscriberNotificationCommandInput) {
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
  ): Handler<CreateSubscriberNotificationCommandInput, CreateSubscriberNotificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSubscriberNotificationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "CreateSubscriberNotificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityLake",
        operation: "CreateSubscriberNotification",
      },
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
  private serialize(input: CreateSubscriberNotificationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSubscriberNotificationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSubscriberNotificationCommandOutput> {
    return de_CreateSubscriberNotificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
