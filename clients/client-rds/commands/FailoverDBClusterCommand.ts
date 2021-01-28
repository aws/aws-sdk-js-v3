import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { FailoverDBClusterMessage, FailoverDBClusterResult } from "../models/models_1";
import {
  deserializeAws_queryFailoverDBClusterCommand,
  serializeAws_queryFailoverDBClusterCommand,
} from "../protocols/Aws_query";
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

export type FailoverDBClusterCommandInput = FailoverDBClusterMessage;
export type FailoverDBClusterCommandOutput = FailoverDBClusterResult & __MetadataBearer;

/**
 * <p>Forces a failover for a DB cluster.</p>
 *          <p>A failover for a DB cluster promotes one of the Aurora Replicas (read-only instances)
 *           in the DB cluster to be the primary instance (the cluster writer).</p>
 *          <p>Amazon Aurora will automatically fail over to an Aurora Replica, if one exists,
 *           when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing.
 *           Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing
 *           connections that use those endpoint addresses when the failover is complete.</p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 */
export class FailoverDBClusterCommand extends $Command<
  FailoverDBClusterCommandInput,
  FailoverDBClusterCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FailoverDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "FailoverDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FailoverDBClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: FailoverDBClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FailoverDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryFailoverDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FailoverDBClusterCommandOutput> {
    return deserializeAws_queryFailoverDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
