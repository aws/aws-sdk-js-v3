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
  CreateAccountSubscriptionRequest,
  CreateAccountSubscriptionRequestFilterSensitiveLog,
  CreateAccountSubscriptionResponse,
  CreateAccountSubscriptionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1CreateAccountSubscriptionCommand,
  serializeAws_restJson1CreateAccountSubscriptionCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface CreateAccountSubscriptionCommandInput extends CreateAccountSubscriptionRequest {}
export interface CreateAccountSubscriptionCommandOutput extends CreateAccountSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon QuickSight account, or subscribes to Amazon QuickSight Q.</p>
 *          <p>The Amazon Web Services Region for the account is derived from what is configured in the
 *           CLI or SDK. This operation isn't supported in the US East (Ohio) Region, South America (Sao Paulo) Region, or Asia
 *             Pacific (Singapore) Region.  </p>
 *          <p>Before you use this operation, make sure that you can connect to an existing Amazon Web Services account. If you don't have an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/setting-up-aws-sign-up.html">Sign
 *                 up for Amazon Web Services</a> in the <i>Amazon QuickSight User
 *                 Guide</i>. The person who signs up for Amazon QuickSight needs to have the
 *             correct Identity and Access Management (IAM) permissions. For more information,
 *             see <a href="https://docs.aws.amazon.com/quicksight/latest/user/iam-policy-examples.html">IAM Policy Examples for Amazon QuickSight</a> in the
 *                     <i>Amazon QuickSight User Guide</i>.</p>
 *          <p>If your IAM policy includes both the <code>Subscribe</code> and
 *                 <code>CreateAccountSubscription</code> actions, make sure that both actions are set
 *             to <code>Allow</code>. If either action is set to <code>Deny</code>, the
 *                 <code>Deny</code> action prevails and your API call fails.</p>
 *          <p>You can't pass an existing IAM role to access other Amazon Web Services services using this API operation. To pass your existing IAM role to
 *                 Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/security_iam_service-with-iam.html#security-create-iam-role">Passing IAM roles to Amazon QuickSight</a> in the
 *                     <i>Amazon QuickSight User Guide</i>.</p>
 *          <p>You can't set default resource access on the new account from the Amazon QuickSight
 *             API. Instead, add default resource access from the Amazon QuickSight console. For more
 *             information about setting default resource access to Amazon Web Services services, see
 *                 <a href="https://docs.aws.amazon.com/quicksight/latest/user/scoping-policies-defaults.html">Setting default resource
 *                 access to Amazon Web Services services</a> in the <i>Amazon QuickSight
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateAccountSubscriptionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateAccountSubscriptionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateAccountSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateAccountSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class CreateAccountSubscriptionCommand extends $Command<
  CreateAccountSubscriptionCommandInput,
  CreateAccountSubscriptionCommandOutput,
  QuickSightClientResolvedConfig
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

  constructor(readonly input: CreateAccountSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccountSubscriptionCommandInput, CreateAccountSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccountSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateAccountSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccountSubscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAccountSubscriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccountSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAccountSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAccountSubscriptionCommandOutput> {
    return deserializeAws_restJson1CreateAccountSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
