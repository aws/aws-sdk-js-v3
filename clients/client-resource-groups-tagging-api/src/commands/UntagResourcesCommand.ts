// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UntagResourcesInput,
  UntagResourcesInputFilterSensitiveLog,
  UntagResourcesOutput,
  UntagResourcesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UntagResourcesCommand,
  serializeAws_json1_1UntagResourcesCommand,
} from "../protocols/Aws_json1_1";
import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";

export interface UntagResourcesCommandInput extends UntagResourcesInput {}
export interface UntagResourcesCommandOutput extends UntagResourcesOutput, __MetadataBearer {}

/**
 * <p>Removes the specified tags from the specified resources. When you specify a tag key,
 *             the action removes both that key and its associated value. The operation succeeds even
 *             if you attempt to remove tags from a resource that were already removed. Note the
 *             following:</p>
 *         <ul>
 *             <li>
 *                 <p>To remove tags from a resource, you need the necessary permissions for the
 *                     service that the resource belongs to as well as permissions for removing tags.
 *                     For more information, see the documentation for the service whose resource you
 *                     want to untag.</p>
 *             </li>
 *             <li>
 *                 <p>You can only tag resources that are located in the specified Amazon Web Services Region for
 *                     the calling Amazon Web Services account.</p>
 *             </li>
 *          </ul>
 *
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *         <p>In addition to the <code>tag:UntagResources</code> permission required by this
 *             operation, you must also have the remove tags permission defined by the service that
 *             created the resource. For example, to remove the tags from an Amazon EC2 instance using the
 *                 <code>UntagResources</code> operation, you must have both of the following
 *             permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>tag:UntagResource</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ec2:DeleteTags</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, UntagResourcesCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, UntagResourcesCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new UntagResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagResourcesCommandInput} for command's `input` shape.
 * @see {@link UntagResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 */
export class UntagResourcesCommand extends $Command<
  UntagResourcesCommandInput,
  UntagResourcesCommandOutput,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UntagResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "UntagResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagResourcesInputFilterSensitiveLog,
      outputFilterSensitiveLog: UntagResourcesOutputFilterSensitiveLog,
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
