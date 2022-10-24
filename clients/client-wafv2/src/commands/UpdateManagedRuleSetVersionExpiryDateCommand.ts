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
  UpdateManagedRuleSetVersionExpiryDateRequest,
  UpdateManagedRuleSetVersionExpiryDateRequestFilterSensitiveLog,
  UpdateManagedRuleSetVersionExpiryDateResponse,
  UpdateManagedRuleSetVersionExpiryDateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateCommand,
  serializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface UpdateManagedRuleSetVersionExpiryDateCommandInput
  extends UpdateManagedRuleSetVersionExpiryDateRequest {}
export interface UpdateManagedRuleSetVersionExpiryDateCommandOutput
  extends UpdateManagedRuleSetVersionExpiryDateResponse,
    __MetadataBearer {}

/**
 * <p>Updates the expiration information for your managed rule set. Use this to initiate the
 *          expiration of a managed rule group version. After you initiate expiration for a version,
 *          WAF excludes it from the response to <a>ListAvailableManagedRuleGroupVersions</a> for the managed rule group. </p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateManagedRuleSetVersionExpiryDateCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateManagedRuleSetVersionExpiryDateCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new UpdateManagedRuleSetVersionExpiryDateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateManagedRuleSetVersionExpiryDateCommandInput} for command's `input` shape.
 * @see {@link UpdateManagedRuleSetVersionExpiryDateCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 */
export class UpdateManagedRuleSetVersionExpiryDateCommand extends $Command<
  UpdateManagedRuleSetVersionExpiryDateCommandInput,
  UpdateManagedRuleSetVersionExpiryDateCommandOutput,
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

  constructor(readonly input: UpdateManagedRuleSetVersionExpiryDateCommandInput) {
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
  ): Handler<UpdateManagedRuleSetVersionExpiryDateCommandInput, UpdateManagedRuleSetVersionExpiryDateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateManagedRuleSetVersionExpiryDateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "UpdateManagedRuleSetVersionExpiryDateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateManagedRuleSetVersionExpiryDateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateManagedRuleSetVersionExpiryDateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateManagedRuleSetVersionExpiryDateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateManagedRuleSetVersionExpiryDateCommandOutput> {
    return deserializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
