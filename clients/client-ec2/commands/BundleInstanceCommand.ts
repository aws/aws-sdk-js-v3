import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { BundleInstanceRequest, BundleInstanceResult } from "../models/models_0";
import { deserializeAws_ec2BundleInstanceCommand, serializeAws_ec2BundleInstanceCommand } from "../protocols/Aws_ec2";
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

export type BundleInstanceCommandInput = BundleInstanceRequest;
export type BundleInstanceCommandOutput = BundleInstanceResult & __MetadataBearer;

/**
 * <p>Bundles an Amazon instance store-backed Windows instance.</p>
 *          <p>During bundling, only the root device volume (C:\) is bundled. Data on other instance store volumes is not preserved.</p>
 *          <note>
 *             <p>This action is not applicable for Linux/Unix instances or Windows instances that are backed by Amazon EBS.</p>
 * 			      </note>
 */
export class BundleInstanceCommand extends $Command<
  BundleInstanceCommandInput,
  BundleInstanceCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BundleInstanceCommandInput) {
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
  ): Handler<BundleInstanceCommandInput, BundleInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "BundleInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BundleInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BundleInstanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BundleInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2BundleInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BundleInstanceCommandOutput> {
    return deserializeAws_ec2BundleInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
