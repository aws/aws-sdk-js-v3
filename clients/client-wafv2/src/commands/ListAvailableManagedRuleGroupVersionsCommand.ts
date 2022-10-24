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
  ListAvailableManagedRuleGroupVersionsRequest,
  ListAvailableManagedRuleGroupVersionsRequestFilterSensitiveLog,
  ListAvailableManagedRuleGroupVersionsResponse,
  ListAvailableManagedRuleGroupVersionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand,
  serializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface ListAvailableManagedRuleGroupVersionsCommandInput
  extends ListAvailableManagedRuleGroupVersionsRequest {}
export interface ListAvailableManagedRuleGroupVersionsCommandOutput
  extends ListAvailableManagedRuleGroupVersionsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the available versions for the specified managed rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListAvailableManagedRuleGroupVersionsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListAvailableManagedRuleGroupVersionsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListAvailableManagedRuleGroupVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAvailableManagedRuleGroupVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableManagedRuleGroupVersionsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 */
export class ListAvailableManagedRuleGroupVersionsCommand extends $Command<
  ListAvailableManagedRuleGroupVersionsCommandInput,
  ListAvailableManagedRuleGroupVersionsCommandOutput,
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

  constructor(readonly input: ListAvailableManagedRuleGroupVersionsCommandInput) {
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
  ): Handler<ListAvailableManagedRuleGroupVersionsCommandInput, ListAvailableManagedRuleGroupVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAvailableManagedRuleGroupVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "ListAvailableManagedRuleGroupVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAvailableManagedRuleGroupVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAvailableManagedRuleGroupVersionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAvailableManagedRuleGroupVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAvailableManagedRuleGroupVersionsCommandOutput> {
    return deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
