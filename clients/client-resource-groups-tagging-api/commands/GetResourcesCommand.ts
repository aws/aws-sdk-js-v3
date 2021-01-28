import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { GetResourcesInput, GetResourcesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetResourcesCommand,
  serializeAws_json1_1GetResourcesCommand,
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

export type GetResourcesCommandInput = GetResourcesInput;
export type GetResourcesCommandOutput = GetResourcesOutput & __MetadataBearer;

/**
 * <p>Returns all the tagged or previously tagged resources that are located in the
 *             specified Region for the AWS account.</p>
 *         <p>Depending on what information you want returned, you can also specify the
 *             following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <i>Filters</i> that specify what tags and resource types you
 *                     want returned. The response includes all tags that are associated with the
 *                     requested resources.</p>
 *             </li>
 *             <li>
 *                 <p>Information about compliance with the account's effective tag policy. For more
 *                     information on tag policies, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag
 *                         Policies</a> in the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>You can check the <code>PaginationToken</code> response parameter to determine if
 *                 a query is complete. Queries occasionally return fewer results on a page than
 *                 allowed. The <code>PaginationToken</code> response parameter value is
 *                     <code>null</code>
 *                 <i>only</i> when there are no more results to display. </p>
 *         </note>
 */
export class GetResourcesCommand extends $Command<
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResourcesCommandInput) {
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
  ): Handler<GetResourcesCommandInput, GetResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "GetResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetResourcesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourcesCommandOutput> {
    return deserializeAws_json1_1GetResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
