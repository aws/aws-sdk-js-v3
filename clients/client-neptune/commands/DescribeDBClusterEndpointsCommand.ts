import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBClusterEndpointMessage, DescribeDBClusterEndpointsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBClusterEndpointsCommand,
  serializeAws_queryDescribeDBClusterEndpointsCommand,
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

export type DescribeDBClusterEndpointsCommandInput = DescribeDBClusterEndpointsMessage;
export type DescribeDBClusterEndpointsCommandOutput = DBClusterEndpointMessage & __MetadataBearer;

/**
 * <p>Returns information about endpoints for an Amazon Neptune DB cluster.</p>
 *          <note>
 *             <p>This operation can also return information for Amazon RDS clusters
 *         and Amazon DocDB clusters.</p>
 *          </note>
 */
export class DescribeDBClusterEndpointsCommand extends $Command<
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBClusterEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBClusterEndpointsCommandInput, DescribeDBClusterEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeDBClusterEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBClusterEndpointsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBClusterEndpointMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBClusterEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBClusterEndpointsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterEndpointsCommandOutput> {
    return deserializeAws_queryDescribeDBClusterEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
