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

import { TagInput, TagInputFilterSensitiveLog, TagOutput, TagOutputFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_restJson1TagCommand, serializeAws_restJson1TagCommand } from "../protocols/Aws_restJson1";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";

export interface TagCommandInput extends TagInput {}
export interface TagCommandOutput extends TagOutput, __MetadataBearer {}

/**
 * <p>Adds tags to a resource group with the specified ARN. Existing tags on a resource
 *             group are not changed if they are not specified in the request parameters.</p>
 *          <important>
 *             <p>Do not store personally identifiable information (PII) or other confidential or
 *                 sensitive information in tags. We use tags to provide you with billing and
 *                 administration services. Tags are not intended to be used for private or sensitive
 *                 data.</p>
 *          </important>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:Tag</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, TagCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, TagCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new TagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagCommandInput} for command's `input` shape.
 * @see {@link TagCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 */
export class TagCommand extends $Command<TagCommandInput, TagCommandOutput, ResourceGroupsClientResolvedConfig> {
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

  constructor(readonly input: TagCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagCommandInput, TagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TagCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsClient";
    const commandName = "TagCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagInputFilterSensitiveLog,
      outputFilterSensitiveLog: TagOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TagCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagCommandOutput> {
    return deserializeAws_restJson1TagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
