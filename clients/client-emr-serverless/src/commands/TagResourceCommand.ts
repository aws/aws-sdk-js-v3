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

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import {
  TagResourceRequest,
  TagResourceRequestFilterSensitiveLog,
  TagResourceResponse,
  TagResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1TagResourceCommand,
  serializeAws_restJson1TagResourceCommand,
} from "../protocols/Aws_restJson1";

export interface TagResourceCommandInput extends TagResourceRequest {}
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}

/**
 * <p>Assigns tags to resources. A tag is a label that you assign to an AWS resource. Each tag
 *          consists of a key and an optional value, both of which you define. Tags enable you to
 *          categorize your AWS resources by attributes such as purpose, owner, or environment. When
 *          you have many resources of the same type, you can quickly identify a specific resource
 *          based on the tags you've assigned to it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, TagResourceCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, TagResourceCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * const client = new EMRServerlessClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 */
export class TagResourceCommand extends $Command<
  TagResourceCommandInput,
  TagResourceCommandOutput,
  EMRServerlessClientResolvedConfig
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
    configuration: EMRServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagResourceCommandInput, TagResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TagResourceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRServerlessClient";
    const commandName = "TagResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TagResourceResponseFilterSensitiveLog,
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
