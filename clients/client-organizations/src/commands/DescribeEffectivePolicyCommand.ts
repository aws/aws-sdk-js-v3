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
  DescribeEffectivePolicyRequest,
  DescribeEffectivePolicyRequestFilterSensitiveLog,
  DescribeEffectivePolicyResponse,
  DescribeEffectivePolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1DescribeEffectivePolicyCommand,
  serializeAws_json1_1DescribeEffectivePolicyCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeEffectivePolicyCommandInput extends DescribeEffectivePolicyRequest {}
export interface DescribeEffectivePolicyCommandOutput extends DescribeEffectivePolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the contents of the effective policy for specified policy type and account.
 *             The effective policy is the aggregation of any policies of the specified type that the
 *             account inherits, plus any policy of that type that is directly attached to the
 *             account.</p>
 *         <p>This operation applies only to policy types <i>other</i> than service
 *             control policies (SCPs).</p>
 *         <p>For more information about policy inheritance, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance
 *                 Works</a> in the <i>Organizations User Guide</i>.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeEffectivePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeEffectivePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeEffectivePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEffectivePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectivePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class DescribeEffectivePolicyCommand extends $Command<
  DescribeEffectivePolicyCommandInput,
  DescribeEffectivePolicyCommandOutput,
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

  constructor(readonly input: DescribeEffectivePolicyCommandInput) {
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
  ): Handler<DescribeEffectivePolicyCommandInput, DescribeEffectivePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEffectivePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DescribeEffectivePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEffectivePolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEffectivePolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEffectivePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEffectivePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEffectivePolicyCommandOutput> {
    return deserializeAws_json1_1DescribeEffectivePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
