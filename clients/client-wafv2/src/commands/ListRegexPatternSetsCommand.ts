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
  ListRegexPatternSetsRequest,
  ListRegexPatternSetsRequestFilterSensitiveLog,
  ListRegexPatternSetsResponse,
  ListRegexPatternSetsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListRegexPatternSetsCommand,
  serializeAws_json1_1ListRegexPatternSetsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface ListRegexPatternSetsCommandInput extends ListRegexPatternSetsRequest {}
export interface ListRegexPatternSetsCommandOutput extends ListRegexPatternSetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves an array of <a>RegexPatternSetSummary</a> objects for the regex
 *          pattern sets that you manage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListRegexPatternSetsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListRegexPatternSetsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListRegexPatternSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRegexPatternSetsCommandInput} for command's `input` shape.
 * @see {@link ListRegexPatternSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 */
export class ListRegexPatternSetsCommand extends $Command<
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
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

  constructor(readonly input: ListRegexPatternSetsCommandInput) {
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
  ): Handler<ListRegexPatternSetsCommandInput, ListRegexPatternSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRegexPatternSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "ListRegexPatternSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRegexPatternSetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRegexPatternSetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRegexPatternSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRegexPatternSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRegexPatternSetsCommandOutput> {
    return deserializeAws_json1_1ListRegexPatternSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
