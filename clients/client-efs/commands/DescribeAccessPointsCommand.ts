import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DescribeAccessPointsRequest, DescribeAccessPointsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAccessPointsCommand,
  serializeAws_restJson1DescribeAccessPointsCommand,
} from "../protocols/Aws_restJson1";
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

export type DescribeAccessPointsCommandInput = DescribeAccessPointsRequest;
export type DescribeAccessPointsCommandOutput = DescribeAccessPointsResponse & __MetadataBearer;

/**
 * <p>Returns the description of a specific Amazon EFS access point if the <code>AccessPointId</code> is provided.
 *       If you provide an EFS <code>FileSystemId</code>, it returns descriptions of all access points for that file system.
 *       You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in the request, but not both. </p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
 */
export class DescribeAccessPointsCommand extends $Command<
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAccessPointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccessPointsCommandInput, DescribeAccessPointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeAccessPointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccessPointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccessPointsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccessPointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAccessPointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccessPointsCommandOutput> {
    return deserializeAws_restJson1DescribeAccessPointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
