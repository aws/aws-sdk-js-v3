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
  PutManagedRuleSetVersionsRequest,
  PutManagedRuleSetVersionsRequestFilterSensitiveLog,
  PutManagedRuleSetVersionsResponse,
  PutManagedRuleSetVersionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutManagedRuleSetVersionsCommand,
  serializeAws_json1_1PutManagedRuleSetVersionsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface PutManagedRuleSetVersionsCommandInput extends PutManagedRuleSetVersionsRequest {}
export interface PutManagedRuleSetVersionsCommandOutput extends PutManagedRuleSetVersionsResponse, __MetadataBearer {}

/**
 * <p>Defines the versions of your managed rule set that you are offering to the customers.
 *          Customers see your offerings as managed rule groups with versioning.</p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 *          <p>Customers retrieve their managed rule group list by calling <a>ListAvailableManagedRuleGroups</a>. The name that you provide here for your
 *          managed rule set is the name the customer sees for the corresponding managed rule group.
 *          Customers can retrieve the available versions for a managed rule group by calling <a>ListAvailableManagedRuleGroupVersions</a>. You provide a rule group
 *          specification for each version. For each managed rule set, you must specify a version that
 *          you recommend using. </p>
 *          <p>To initiate the expiration of a managed rule group version, use <a>UpdateManagedRuleSetVersionExpiryDate</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, PutManagedRuleSetVersionsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, PutManagedRuleSetVersionsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new PutManagedRuleSetVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutManagedRuleSetVersionsCommandInput} for command's `input` shape.
 * @see {@link PutManagedRuleSetVersionsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 */
export class PutManagedRuleSetVersionsCommand extends $Command<
  PutManagedRuleSetVersionsCommandInput,
  PutManagedRuleSetVersionsCommandOutput,
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

  constructor(readonly input: PutManagedRuleSetVersionsCommandInput) {
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
  ): Handler<PutManagedRuleSetVersionsCommandInput, PutManagedRuleSetVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutManagedRuleSetVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "PutManagedRuleSetVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutManagedRuleSetVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutManagedRuleSetVersionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutManagedRuleSetVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutManagedRuleSetVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutManagedRuleSetVersionsCommandOutput> {
    return deserializeAws_json1_1PutManagedRuleSetVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
