import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DisassociateCreatedArtifactRequest, DisassociateCreatedArtifactResult } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateCreatedArtifactCommand,
  serializeAws_json1_1DisassociateCreatedArtifactCommand,
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

export type DisassociateCreatedArtifactCommandInput = DisassociateCreatedArtifactRequest;
export type DisassociateCreatedArtifactCommandOutput = DisassociateCreatedArtifactResult & __MetadataBearer;

/**
 * <p>Disassociates a created artifact of an AWS resource with a migration task performed by a
 *          migration tool that was previously associated. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation
 *                to disassociate a created AWS Artifact from a migration task.</p>
 *             </li>
 *             <li>
 *                <p>The created artifact name must be provided in ARN (Amazon Resource Name) format
 *                which will contain information about type and region; for example:
 *                   <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p>
 *             </li>
 *             <li>
 *                <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance,
 *                or RDS instance, etc.</p>
 *             </li>
 *          </ul>
 */
export class DisassociateCreatedArtifactCommand extends $Command<
  DisassociateCreatedArtifactCommandInput,
  DisassociateCreatedArtifactCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateCreatedArtifactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateCreatedArtifactCommandInput, DisassociateCreatedArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "DisassociateCreatedArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateCreatedArtifactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateCreatedArtifactResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateCreatedArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateCreatedArtifactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateCreatedArtifactCommandOutput> {
    return deserializeAws_json1_1DisassociateCreatedArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
