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
  ListAvailableManagedRuleGroupsRequest,
  ListAvailableManagedRuleGroupsRequestFilterSensitiveLog,
  ListAvailableManagedRuleGroupsResponse,
  ListAvailableManagedRuleGroupsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand,
  serializeAws_json1_1ListAvailableManagedRuleGroupsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface ListAvailableManagedRuleGroupsCommandInput extends ListAvailableManagedRuleGroupsRequest {}
export interface ListAvailableManagedRuleGroupsCommandOutput
  extends ListAvailableManagedRuleGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves an array of managed rule groups that are available for you to use. This list
 *          includes all Amazon Web Services Managed Rules rule groups and all of the Amazon Web Services Marketplace managed rule groups that you're
 *          subscribed to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListAvailableManagedRuleGroupsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListAvailableManagedRuleGroupsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListAvailableManagedRuleGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAvailableManagedRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableManagedRuleGroupsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 */
export class ListAvailableManagedRuleGroupsCommand extends $Command<
  ListAvailableManagedRuleGroupsCommandInput,
  ListAvailableManagedRuleGroupsCommandOutput,
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

  constructor(readonly input: ListAvailableManagedRuleGroupsCommandInput) {
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
  ): Handler<ListAvailableManagedRuleGroupsCommandInput, ListAvailableManagedRuleGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAvailableManagedRuleGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "ListAvailableManagedRuleGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAvailableManagedRuleGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAvailableManagedRuleGroupsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAvailableManagedRuleGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAvailableManagedRuleGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAvailableManagedRuleGroupsCommandOutput> {
    return deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
