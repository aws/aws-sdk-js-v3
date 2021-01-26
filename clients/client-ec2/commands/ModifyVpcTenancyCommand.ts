import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcTenancyRequest, ModifyVpcTenancyResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyVpcTenancyCommand,
  serializeAws_ec2ModifyVpcTenancyCommand,
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

export type ModifyVpcTenancyCommandInput = ModifyVpcTenancyRequest;
export type ModifyVpcTenancyCommandOutput = ModifyVpcTenancyResult & __MetadataBearer;

/**
 * <p>Modifies the instance tenancy attribute of the specified VPC. You can change the
 *             instance tenancy attribute of a VPC to <code>default</code> only. You cannot change the
 *             instance tenancy attribute to <code>dedicated</code>.</p>
 *         <p>After you modify the tenancy of the VPC, any new instances that you launch into the
 *             VPC have a tenancy of <code>default</code>, unless you specify otherwise during launch.
 *             The tenancy of any existing instances in the VPC is not affected.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class ModifyVpcTenancyCommand extends $Command<
  ModifyVpcTenancyCommandInput,
  ModifyVpcTenancyCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpcTenancyCommandInput) {
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
  ): Handler<ModifyVpcTenancyCommandInput, ModifyVpcTenancyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcTenancyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpcTenancyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpcTenancyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyVpcTenancyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpcTenancyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVpcTenancyCommandOutput> {
    return deserializeAws_ec2ModifyVpcTenancyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
