import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListAttributesRequest, ListAttributesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAttributesCommand,
  serializeAws_json1_1ListAttributesCommand,
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

export type ListAttributesCommandInput = ListAttributesRequest;
export type ListAttributesCommandOutput = ListAttributesResponse & __MetadataBearer;

/**
 * <p>Lists the attributes for Amazon ECS resources within a specified target type and cluster.
 * 			When you specify a target type and cluster, <code>ListAttributes</code> returns a list
 * 			of attribute objects, one for each attribute on each resource. You can filter the list
 * 			of results to a single attribute name to only return results that have that name. You
 * 			can also filter the results by attribute name and value, for example, to see which
 * 			container instances in a cluster are running a Linux AMI
 * 			(<code>ecs.os-type=linux</code>). </p>
 */
export class ListAttributesCommand extends $Command<
  ListAttributesCommandInput,
  ListAttributesCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAttributesCommandInput, ListAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttributesCommandOutput> {
    return deserializeAws_json1_1ListAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
