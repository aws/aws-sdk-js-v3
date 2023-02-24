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

import { DetachPolicyRequest, DetachPolicyRequestFilterSensitiveLog } from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1DetachPolicyCommand,
  serializeAws_json1_1DetachPolicyCommand,
} from "../protocols/Aws_json1_1";

export interface DetachPolicyCommandInput extends DetachPolicyRequest {}
export interface DetachPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Detaches a policy from a target root, organizational unit (OU), or account.</p>
 *         <important>
 *             <p>If the policy being detached is a service control policy (SCP), the changes to
 *                 permissions for Identity and Access Management (IAM) users and roles in affected accounts are
 *                 immediate.</p>
 *         </important>
 *         <p>Every root, OU, and account must have at least one SCP attached. If you want to
 *             replace the default <code>FullAWSAccess</code> policy with an SCP that limits the
 *             permissions that can be delegated, you must attach the replacement SCP before you can
 *             remove the default SCP. This is the authorization strategy of an "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_allowlist">allow list</a>". If you instead attach a second SCP and
 *             leave the <code>FullAWSAccess</code> SCP still attached, and specify <code>"Effect":
 *                 "Deny"</code> in the second SCP to override the <code>"Effect": "Allow"</code> in
 *             the <code>FullAWSAccess</code> policy (or any other attached SCP), you're using the
 *             authorization strategy of a "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_denylist">deny list</a>".</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DetachPolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DetachPolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DetachPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachPolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class DetachPolicyCommand extends $Command<
  DetachPolicyCommandInput,
  DetachPolicyCommandOutput,
  OrganizationsClientResolvedConfig
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

  constructor(readonly input: DetachPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachPolicyCommandInput, DetachPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DetachPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DetachPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetachPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachPolicyCommandOutput> {
    return deserializeAws_json1_1DetachPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
