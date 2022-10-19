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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  PutRemediationConfigurationsRequest,
  PutRemediationConfigurationsRequestFilterSensitiveLog,
  PutRemediationConfigurationsResponse,
  PutRemediationConfigurationsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1PutRemediationConfigurationsCommand,
  serializeAws_json1_1PutRemediationConfigurationsCommand,
} from "../protocols/Aws_json1_1";

export interface PutRemediationConfigurationsCommandInput extends PutRemediationConfigurationsRequest {}
export interface PutRemediationConfigurationsCommandOutput
  extends PutRemediationConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Adds or updates the remediation configuration with a specific Config rule with the
 * 			selected target or action.
 * 			The API creates the <code>RemediationConfiguration</code> object for the Config rule.
 * 		The Config rule must already exist for you to add a remediation configuration.
 * 		The target (SSM document) must exist and have permissions to use the target. </p>
 * 		       <note>
 *             <p>If you make backward incompatible changes to the SSM document,
 * 			you must call this again to ensure the remediations can run.</p>
 * 			         <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules,
 * 				the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p>
 *          </note>
 * 		       <note>
 *             <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field  to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p>
 * 			         <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRemediationConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRemediationConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutRemediationConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRemediationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link PutRemediationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class PutRemediationConfigurationsCommand extends $Command<
  PutRemediationConfigurationsCommandInput,
  PutRemediationConfigurationsCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: PutRemediationConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRemediationConfigurationsCommandInput, PutRemediationConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRemediationConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutRemediationConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRemediationConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutRemediationConfigurationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRemediationConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRemediationConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRemediationConfigurationsCommandOutput> {
    return deserializeAws_json1_1PutRemediationConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
