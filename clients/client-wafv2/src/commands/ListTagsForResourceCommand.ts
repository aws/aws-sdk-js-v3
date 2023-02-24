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
  ListTagsForResourceRequest,
  ListTagsForResourceRequestFilterSensitiveLog,
  ListTagsForResourceResponse,
  ListTagsForResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListTagsForResourceCommand,
  serializeAws_json1_1ListTagsForResourceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface ListTagsForResourceCommandInput extends ListTagsForResourceRequest {}
export interface ListTagsForResourceCommandOutput extends ListTagsForResourceResponse, __MetadataBearer {}

/**
 * <p>Retrieves the <a>TagInfoForResource</a> for the specified resource. Tags are
 *          key:value pairs that you can use to categorize and manage your resources, for purposes like
 *          billing. For example, you might set the tag key to "customer" and the value to the customer
 *          name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags
 *          for a resource.</p>
 *          <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule
 *          groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF
 *          console. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListTagsForResourceCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListTagsForResourceCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 */
export class ListTagsForResourceCommand extends $Command<
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
  WAFV2ClientResolvedConfig
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

  constructor(readonly input: ListTagsForResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTagsForResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "ListTagsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsForResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTagsForResourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsForResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTagsForResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsForResourceCommandOutput> {
    return deserializeAws_json1_1ListTagsForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
