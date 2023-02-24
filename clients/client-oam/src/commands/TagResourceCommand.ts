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
  TagResourceInput,
  TagResourceInputFilterSensitiveLog,
  TagResourceOutput,
  TagResourceOutputFilterSensitiveLog,
} from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import {
  deserializeAws_restJson1TagResourceCommand,
  serializeAws_restJson1TagResourceCommand,
} from "../protocols/Aws_restJson1";

export interface TagResourceCommandInput extends TagResourceInput {}
export interface TagResourceCommandOutput extends TagResourceOutput, __MetadataBearer {}

/**
 * <p>Assigns one or more tags (key-value pairs) to the specified resource.
 *             Both sinks and links can be tagged. </p>
 *         <p>Tags can help you organize and categorize your resources. You can also use them to scope user
 *             permissions by granting a user
 *             permission to access or change only resources with certain tag values.</p>
 *         <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
 *         <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm,
 *             this tag is appended to the list of tags associated
 *             with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces
 *             the previous value for that tag.</p>
 *         <p>You can associate as many as 50 tags with a resource.</p>
 *         <important>
 *             <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and
 *             sinks you must have the <code>oam:ResourceTag</code> permission. The
 *             <code>iam:ResourceTag</code> permission does not allow you to tag and untag links and
 *             sinks.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, TagResourceCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, TagResourceCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 */
export class TagResourceCommand extends $Command<
  TagResourceCommandInput,
  TagResourceCommandOutput,
  OAMClientResolvedConfig
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

  constructor(readonly input: TagResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagResourceCommandInput, TagResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TagResourceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OAMClient";
    const commandName = "TagResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagResourceInputFilterSensitiveLog,
      outputFilterSensitiveLog: TagResourceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TagResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagResourceCommandOutput> {
    return deserializeAws_restJson1TagResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
