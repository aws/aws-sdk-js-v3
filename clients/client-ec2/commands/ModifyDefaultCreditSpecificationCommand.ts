import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyDefaultCreditSpecificationRequest, ModifyDefaultCreditSpecificationResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyDefaultCreditSpecificationCommand,
  serializeAws_ec2ModifyDefaultCreditSpecificationCommand,
} from "../protocols/Aws_ec2";
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

export type ModifyDefaultCreditSpecificationCommandInput = ModifyDefaultCreditSpecificationRequest;
export type ModifyDefaultCreditSpecificationCommandOutput = ModifyDefaultCreditSpecificationResult & __MetadataBearer;

/**
 * <p>Modifies the default credit option for CPU usage of burstable performance instances.
 *             The default credit option is set at the account level per AWS Region, and is specified
 *             per instance family. All new burstable performance instances in the account launch using
 *             the default credit option.</p>
 *         <p>
 *             <code>ModifyDefaultCreditSpecification</code> is an asynchronous operation, which works at an AWS
 *             Region level and modifies the credit option for each Availability Zone. All zones in a
 *             Region are updated within five minutes. But if instances are launched during this
 *             operation, they might not get the new credit option until the zone is updated. To verify
 *             whether the update has occurred, you can call <code>GetDefaultCreditSpecification</code> and check
 *             <code>DefaultCreditSpecification</code> for updates.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *             performance instances</a> in the <i>Amazon Elastic Compute Cloud User
 *                 Guide</i>.</p>
 */
export class ModifyDefaultCreditSpecificationCommand extends $Command<
  ModifyDefaultCreditSpecificationCommandInput,
  ModifyDefaultCreditSpecificationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyDefaultCreditSpecificationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDefaultCreditSpecificationCommandInput, ModifyDefaultCreditSpecificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyDefaultCreditSpecificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDefaultCreditSpecificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyDefaultCreditSpecificationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyDefaultCreditSpecificationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyDefaultCreditSpecificationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDefaultCreditSpecificationCommandOutput> {
    return deserializeAws_ec2ModifyDefaultCreditSpecificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
