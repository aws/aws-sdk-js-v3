import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifySnapshotAttributeRequest } from "../models/models_4";
import {
  deserializeAws_ec2ModifySnapshotAttributeCommand,
  serializeAws_ec2ModifySnapshotAttributeCommand,
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

export type ModifySnapshotAttributeCommandInput = ModifySnapshotAttributeRequest;
export type ModifySnapshotAttributeCommandOutput = __MetadataBearer;

/**
 * <p>Adds or removes permission settings for the specified snapshot. You may add or remove
 *       specified AWS account IDs from a snapshot's list of create volume permissions, but you cannot
 *       do both in a single operation. If you need to both add and remove account IDs for a snapshot,
 *       you must use multiple operations. You can make up to 500 modifications to a snapshot in a single operation.</p>
 *          <p>Encrypted snapshots and snapshots with AWS Marketplace product codes cannot be made
 *       public. Snapshots encrypted with your default CMK cannot be shared with other accounts.</p>
 *          <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Sharing snapshots</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class ModifySnapshotAttributeCommand extends $Command<
  ModifySnapshotAttributeCommandInput,
  ModifySnapshotAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifySnapshotAttributeCommandInput) {
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
  ): Handler<ModifySnapshotAttributeCommandInput, ModifySnapshotAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifySnapshotAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifySnapshotAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifySnapshotAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifySnapshotAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySnapshotAttributeCommandOutput> {
    return deserializeAws_ec2ModifySnapshotAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
