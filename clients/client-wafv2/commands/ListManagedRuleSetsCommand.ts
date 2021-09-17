import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { ListManagedRuleSetsRequest, ListManagedRuleSetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListManagedRuleSetsCommand,
  serializeAws_json1_1ListManagedRuleSetsCommand,
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

export interface ListManagedRuleSetsCommandInput extends ListManagedRuleSetsRequest {}
export interface ListManagedRuleSetsCommandOutput extends ListManagedRuleSetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the managed rule sets that you own. </p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListManagedRuleSetsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListManagedRuleSetsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListManagedRuleSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListManagedRuleSetsCommandInput} for command's `input` shape.
 * @see {@link ListManagedRuleSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListManagedRuleSetsCommand extends $Command<
  ListManagedRuleSetsCommandInput,
  ListManagedRuleSetsCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListManagedRuleSetsCommandInput) {
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
  ): Handler<ListManagedRuleSetsCommandInput, ListManagedRuleSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "ListManagedRuleSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListManagedRuleSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListManagedRuleSetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListManagedRuleSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListManagedRuleSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListManagedRuleSetsCommandOutput> {
    return deserializeAws_json1_1ListManagedRuleSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
