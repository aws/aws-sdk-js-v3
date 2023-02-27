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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  SimulatePolicyResponse,
  SimulatePolicyResponseFilterSensitiveLog,
  SimulatePrincipalPolicyRequest,
  SimulatePrincipalPolicyRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_querySimulatePrincipalPolicyCommand,
  serializeAws_querySimulatePrincipalPolicyCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link SimulatePrincipalPolicyCommand}.
 */
export interface SimulatePrincipalPolicyCommandInput extends SimulatePrincipalPolicyRequest {}
/**
 * The output of {@link SimulatePrincipalPolicyCommand}.
 */
export interface SimulatePrincipalPolicyCommandOutput extends SimulatePolicyResponse, __MetadataBearer {}

/**
 * <p>Simulate how a set of IAM policies attached to an IAM entity works with a list of
 *             API operations and Amazon Web Services resources to determine the policies' effective permissions. The
 *             entity can be an IAM user, group, or role. If you specify a user, then the simulation
 *             also includes all of the policies that are attached to groups that the user belongs to.
 *             You can simulate resources that don't exist in your account.</p>
 *          <p>You can optionally include a list of one or more additional policies specified as
 *             strings to include in the simulation. If you want to simulate only policies specified as
 *             strings, use <a>SimulateCustomPolicy</a> instead.</p>
 *          <p>You can also optionally include one resource-based policy to be evaluated with each of
 *             the resources included in the simulation for IAM users only.</p>
 *          <p>The simulation does not perform the API operations; it only checks the authorization
 *             to determine if the simulated policies allow or deny the operations.</p>
 *          <p>
 *             <b>Note:</b> This operation discloses information about the
 *             permissions granted to other users. If you do not want users to see other user's
 *             permissions, then consider allowing them to use <a>SimulateCustomPolicy</a>
 *             instead.</p>
 *          <p>Context keys are variables maintained by Amazon Web Services and its services that provide details
 *             about the context of an API query request. You can use the <code>Condition</code>
 *             element of an IAM policy to evaluate context keys. To get the list of context keys
 *             that the policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
 *          <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code>
 *             parameters to paginate the results.</p>
 *          <note>
 *             <p>The IAM policy simulator evaluates statements in the identity-based policy and
 *                 the inputs that you provide during simulation. The policy simulator results can
 *                 differ from your live Amazon Web Services environment. We recommend that you check your policies
 *                 against your live Amazon Web Services environment after testing using the policy simulator to
 *                 confirm that you have the desired results. For more information about using the
 *                 policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM
 *                     policies with the IAM policy simulator </a>in the
 *                     <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SimulatePrincipalPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SimulatePrincipalPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new SimulatePrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SimulatePrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link SimulatePrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class SimulatePrincipalPolicyCommand extends $Command<
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: SimulatePrincipalPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SimulatePrincipalPolicyCommandInput, SimulatePrincipalPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SimulatePrincipalPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "SimulatePrincipalPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SimulatePrincipalPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SimulatePolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SimulatePrincipalPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySimulatePrincipalPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SimulatePrincipalPolicyCommandOutput> {
    return deserializeAws_querySimulatePrincipalPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
