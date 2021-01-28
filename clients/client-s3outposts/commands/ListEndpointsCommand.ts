import { S3OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3OutpostsClient";
import { ListEndpointsRequest, ListEndpointsResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListEndpointsCommand,
  serializeAws_restJson1ListEndpointsCommand,
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

export type ListEndpointsCommandInput = ListEndpointsRequest;
export type ListEndpointsCommandOutput = ListEndpointsResult & __MetadataBearer;

/**
 * <p>S3 on Outposts access points simplify managing data access at scale for shared datasets
 *             in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform
 *             actions within your virtual private cloud (VPC). </p>
 *         <p>This action lists endpoints associated with the Outpost.
 *             </p>
 *         <p></p>
 *         <p>Related actions include:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class ListEndpointsCommand extends $Command<
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
  S3OutpostsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEndpointsCommandInput, ListEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3OutpostsClient";
    const commandName = "ListEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEndpointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEndpointsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEndpointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEndpointsCommandOutput> {
    return deserializeAws_restJson1ListEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
