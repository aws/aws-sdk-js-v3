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
  ChangeTagsForResourceRequest,
  ChangeTagsForResourceRequestFilterSensitiveLog,
  ChangeTagsForResourceResponse,
  ChangeTagsForResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlChangeTagsForResourceCommand,
  serializeAws_restXmlChangeTagsForResourceCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface ChangeTagsForResourceCommandInput extends ChangeTagsForResourceRequest {}
export interface ChangeTagsForResourceCommandOutput extends ChangeTagsForResourceResponse, __MetadataBearer {}

/**
 * <p>Adds, edits, or deletes tags for a health check or a hosted zone.</p>
 *          <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 * 				Tags</a> in the <i>Billing and Cost Management User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ChangeTagsForResourceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ChangeTagsForResourceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ChangeTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangeTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ChangeTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class ChangeTagsForResourceCommand extends $Command<
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
  Route53ClientResolvedConfig
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

  constructor(readonly input: ChangeTagsForResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ChangeTagsForResourceCommandInput, ChangeTagsForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ChangeTagsForResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ChangeTagsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ChangeTagsForResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ChangeTagsForResourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ChangeTagsForResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlChangeTagsForResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChangeTagsForResourceCommandOutput> {
    return deserializeAws_restXmlChangeTagsForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
