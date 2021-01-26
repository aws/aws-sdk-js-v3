import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DescribeContainerInput, DescribeContainerOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeContainerCommand,
  serializeAws_json1_1DescribeContainerCommand,
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

export type DescribeContainerCommandInput = DescribeContainerInput;
export type DescribeContainerCommandOutput = DescribeContainerOutput & __MetadataBearer;

/**
 * <p>Retrieves the properties of the requested container. This request is commonly used to
 *          retrieve the endpoint of a container. An endpoint is a value assigned by the service when a
 *          new container is created. A container's endpoint does not change after it has been
 *          assigned. The <code>DescribeContainer</code> request returns a single
 *             <code>Container</code> object based on <code>ContainerName</code>. To return all
 *             <code>Container</code> objects that are associated with a specified AWS account, use
 *             <a>ListContainers</a>.</p>
 */
export class DescribeContainerCommand extends $Command<
  DescribeContainerCommandInput,
  DescribeContainerCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeContainerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeContainerCommandInput, DescribeContainerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "DescribeContainerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeContainerInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeContainerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeContainerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeContainerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeContainerCommandOutput> {
    return deserializeAws_json1_1DescribeContainerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
