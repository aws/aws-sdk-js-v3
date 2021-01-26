import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeEffectivePolicyRequest, DescribeEffectivePolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEffectivePolicyCommand,
  serializeAws_json1_1DescribeEffectivePolicyCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeEffectivePolicyCommandInput = DescribeEffectivePolicyRequest;
export type DescribeEffectivePolicyCommandOutput = DescribeEffectivePolicyResponse & __MetadataBearer;

/**
 * <p>Returns the contents of the effective policy for specified policy type and account.
 *             The effective policy is the aggregation of any policies of the specified type that the
 *             account inherits, plus any policy of that type that is directly attached to the
 *             account.</p>
 *         <p>This operation applies only to policy types <i>other</i> than service
 *             control policies (SCPs).</p>
 *         <p>For more information about policy inheritance, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance
 *                 Works</a> in the <i>AWS Organizations User Guide</i>.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 */
export class DescribeEffectivePolicyCommand extends $Command<
  DescribeEffectivePolicyCommandInput,
  DescribeEffectivePolicyCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DescribeEffectivePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEffectivePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEffectivePolicyResponse.filterSensitiveLog,
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
