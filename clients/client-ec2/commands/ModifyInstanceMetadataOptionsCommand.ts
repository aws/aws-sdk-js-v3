import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceMetadataOptionsRequest, ModifyInstanceMetadataOptionsResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyInstanceMetadataOptionsCommand,
  serializeAws_ec2ModifyInstanceMetadataOptionsCommand,
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

export type ModifyInstanceMetadataOptionsCommandInput = ModifyInstanceMetadataOptionsRequest;
export type ModifyInstanceMetadataOptionsCommandOutput = ModifyInstanceMetadataOptionsResult & __MetadataBearer;

/**
 * <p>Modify the instance metadata parameters on a running or stopped instance. When you
 *             modify the parameters on a stopped instance, they are applied when the instance is
 *             started. When you modify the parameters on a running instance, the API responds with a
 *             state of “pending”. After the parameter modifications are successfully applied to the
 *             instance, the state of the modifications changes from “pending” to “applied” in
 *             subsequent describe-instances API calls. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a>.</p>
 */
export class ModifyInstanceMetadataOptionsCommand extends $Command<
  ModifyInstanceMetadataOptionsCommandInput,
  ModifyInstanceMetadataOptionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyInstanceMetadataOptionsCommandInput) {
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
  ): Handler<ModifyInstanceMetadataOptionsCommandInput, ModifyInstanceMetadataOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstanceMetadataOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyInstanceMetadataOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyInstanceMetadataOptionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyInstanceMetadataOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyInstanceMetadataOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyInstanceMetadataOptionsCommandOutput> {
    return deserializeAws_ec2ModifyInstanceMetadataOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
