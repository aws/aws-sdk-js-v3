import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreatePlacementGroupRequest, CreatePlacementGroupResult } from "../models/models_1";
import {
  deserializeAws_ec2CreatePlacementGroupCommand,
  serializeAws_ec2CreatePlacementGroupCommand,
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

export type CreatePlacementGroupCommandInput = CreatePlacementGroupRequest;
export type CreatePlacementGroupCommandOutput = CreatePlacementGroupResult & __MetadataBearer;

/**
 * <p>Creates a placement group in which to launch instances. The strategy of the placement
 *             group determines how the instances are organized within the group. </p>
 *         <p>A <code>cluster</code> placement group is a logical grouping of instances within a
 *             single Availability Zone that benefit from low network latency, high network throughput.
 *             A <code>spread</code> placement group places instances on distinct hardware. A
 *                 <code>partition</code> placement group places groups of instances in different
 *             partitions, where instances in one partition do not share the same hardware with
 *             instances in another partition.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class CreatePlacementGroupCommand extends $Command<
  CreatePlacementGroupCommandInput,
  CreatePlacementGroupCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePlacementGroupCommandInput) {
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
  ): Handler<CreatePlacementGroupCommandInput, CreatePlacementGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreatePlacementGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePlacementGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePlacementGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePlacementGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreatePlacementGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePlacementGroupCommandOutput> {
    return deserializeAws_ec2CreatePlacementGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
