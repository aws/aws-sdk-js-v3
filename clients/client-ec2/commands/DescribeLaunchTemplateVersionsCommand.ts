import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLaunchTemplateVersionsRequest, DescribeLaunchTemplateVersionsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeLaunchTemplateVersionsCommand,
  serializeAws_ec2DescribeLaunchTemplateVersionsCommand,
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

export type DescribeLaunchTemplateVersionsCommandInput = DescribeLaunchTemplateVersionsRequest;
export type DescribeLaunchTemplateVersionsCommandOutput = DescribeLaunchTemplateVersionsResult & __MetadataBearer;

/**
 * <p>Describes one or more versions of a specified launch template. You can describe all
 *             versions, individual versions, or a range of versions. You can also describe all the
 *             latest versions or all the default versions of all the launch templates in your
 *             account.</p>
 */
export class DescribeLaunchTemplateVersionsCommand extends $Command<
  DescribeLaunchTemplateVersionsCommandInput,
  DescribeLaunchTemplateVersionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLaunchTemplateVersionsCommandInput) {
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
  ): Handler<DescribeLaunchTemplateVersionsCommandInput, DescribeLaunchTemplateVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLaunchTemplateVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLaunchTemplateVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLaunchTemplateVersionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeLaunchTemplateVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeLaunchTemplateVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLaunchTemplateVersionsCommandOutput> {
    return deserializeAws_ec2DescribeLaunchTemplateVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
