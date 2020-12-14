import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteFleetsRequest, DeleteFleetsResult } from "../models/models_1";
import { deserializeAws_ec2DeleteFleetsCommand, serializeAws_ec2DeleteFleetsCommand } from "../protocols/Aws_ec2";
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

export type DeleteFleetsCommandInput = DeleteFleetsRequest;
export type DeleteFleetsCommandOutput = DeleteFleetsResult & __MetadataBearer;

/**
 * <p>Deletes the specified EC2 Fleet.</p>
 *          <p>After you delete an EC2 Fleet, it launches no new instances.</p>
 *          <p>You must specify whether a deleted EC2 Fleet should also terminate its instances. If you
 *          choose to terminate the instances, the EC2 Fleet enters the <code>deleted_terminating</code>
 *          state. Otherwise, the EC2 Fleet enters the <code>deleted_running</code> state, and the instances
 *          continue to run until they are interrupted or you terminate them manually.</p>
 *          <p>For <code>instant</code> fleets, EC2 Fleet must terminate the instances when the fleet is
 *          deleted. A deleted <code>instant</code> fleet with running instances is not
 *          supported.</p>
 *          <p class="title">
 *             <b>Restrictions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You can delete up to 25 <code>instant</code> fleets in a single request. If you exceed this
 *                number, no <code>instant</code> fleets are deleted and an error is returned. There is no
 *                restriction on the number of fleets of type <code>maintain</code> or <code>request</code> that can be deleted
 *                in a single request.</p>
 *             </li>
 *             <li>
 *                <p>Up to 1000 instances can be terminated in a single request to delete
 *                <code>instant</code> fleets.</p>
 *             </li>
 *          </ul>
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#delete-fleet">Deleting an EC2
 *          Fleet</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class DeleteFleetsCommand extends $Command<
  DeleteFleetsCommandInput,
  DeleteFleetsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFleetsCommandInput) {
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
  ): Handler<DeleteFleetsCommandInput, DeleteFleetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteFleetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFleetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFleetsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFleetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteFleetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFleetsCommandOutput> {
    return deserializeAws_ec2DeleteFleetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
