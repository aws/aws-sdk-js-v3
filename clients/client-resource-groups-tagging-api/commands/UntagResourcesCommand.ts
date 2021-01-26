import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { UntagResourcesInput, UntagResourcesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UntagResourcesCommand,
  serializeAws_json1_1UntagResourcesCommand,
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

export type UntagResourcesCommandInput = UntagResourcesInput;
export type UntagResourcesCommandOutput = UntagResourcesOutput & __MetadataBearer;

/**
 * <p>Removes the specified tags from the specified resources. When you specify a tag key,
 *             the action removes both that key and its associated value. The operation succeeds even
 *             if you attempt to remove tags from a resource that were already removed. Note the
 *             following:</p>
 *         <ul>
 *             <li>
 *                 <p>To remove tags from a resource, you need the necessary permissions for the
 *                     service that the resource belongs to as well as permissions for removing tags.
 *                     For more information, see <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html">this list</a>.</p>
 *             </li>
 *             <li>
 *                 <p>You can only tag resources that are located in the specified Region for the
 *                     AWS account.</p>
 *             </li>
 *          </ul>
 */
export class UntagResourcesCommand extends $Command<
  UntagResourcesCommandInput,
  UntagResourcesCommandOutput,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UntagResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsTaggingAPIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagResourcesCommandInput, UntagResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "UntagResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: UntagResourcesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UntagResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UntagResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UntagResourcesCommandOutput> {
    return deserializeAws_json1_1UntagResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
