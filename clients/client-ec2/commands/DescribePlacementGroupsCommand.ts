import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribePlacementGroupsRequest, DescribePlacementGroupsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribePlacementGroupsCommand,
  serializeAws_ec2DescribePlacementGroupsCommand,
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

export type DescribePlacementGroupsCommandInput = DescribePlacementGroupsRequest;
export type DescribePlacementGroupsCommandOutput = DescribePlacementGroupsResult & __MetadataBearer;

/**
 * <p>Describes the specified placement groups or all of your placement groups. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class DescribePlacementGroupsCommand extends $Command<
  DescribePlacementGroupsCommandInput,
  DescribePlacementGroupsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePlacementGroupsCommandInput) {
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
  ): Handler<DescribePlacementGroupsCommandInput, DescribePlacementGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribePlacementGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePlacementGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePlacementGroupsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePlacementGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribePlacementGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePlacementGroupsCommandOutput> {
    return deserializeAws_ec2DescribePlacementGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
