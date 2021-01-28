import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReleaseHostsRequest, ReleaseHostsResult } from "../models/models_4";
import { deserializeAws_ec2ReleaseHostsCommand, serializeAws_ec2ReleaseHostsCommand } from "../protocols/Aws_ec2";
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

export type ReleaseHostsCommandInput = ReleaseHostsRequest;
export type ReleaseHostsCommandOutput = ReleaseHostsResult & __MetadataBearer;

/**
 * <p>When you no longer want to use an On-Demand Dedicated Host it can be released.
 *             On-Demand billing is stopped and the host goes into <code>released</code> state. The
 *             host ID of Dedicated Hosts that have been released can no longer be specified in another
 *             request, for example, to modify the host. You must stop or terminate all instances on a
 *             host before it can be released.</p>
 *         <p>When Dedicated Hosts are released, it may take some time for them to stop counting
 *             toward your limit and you may receive capacity errors when trying to allocate new
 *             Dedicated Hosts. Wait a few minutes and then try again.</p>
 *         <p>Released hosts still appear in a <a>DescribeHosts</a> response.</p>
 */
export class ReleaseHostsCommand extends $Command<
  ReleaseHostsCommandInput,
  ReleaseHostsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReleaseHostsCommandInput) {
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
  ): Handler<ReleaseHostsCommandInput, ReleaseHostsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReleaseHostsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReleaseHostsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReleaseHostsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReleaseHostsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReleaseHostsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReleaseHostsCommandOutput> {
    return deserializeAws_ec2ReleaseHostsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
