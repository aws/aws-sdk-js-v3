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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import {
  PutManagedInsightRulesInput,
  PutManagedInsightRulesInputFilterSensitiveLog,
  PutManagedInsightRulesOutput,
  PutManagedInsightRulesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryPutManagedInsightRulesCommand,
  serializeAws_queryPutManagedInsightRulesCommand,
} from "../protocols/Aws_query";

export interface PutManagedInsightRulesCommandInput extends PutManagedInsightRulesInput {}
export interface PutManagedInsightRulesCommandOutput extends PutManagedInsightRulesOutput, __MetadataBearer {}

/**
 * <p>
 * 			Creates a managed Contributor Insights rule
 * 			for a specified Amazon Web Services resource.
 * 			When you enable a managed rule,
 * 			you create a Contributor Insights rule
 * 			that collects data
 * 			from Amazon Web Services services.
 * 			You cannot edit these rules
 * 			with <code>PutInsightRule</code>.
 * 			The rules can be enabled, disabled, and deleted using <code>EnableInsightRules</code>, <code>DisableInsightRules</code>, and <code>DeleteInsightRules</code>.
 * 			If a previously created managed rule is currently disabled,
 * 			a subsequent call
 * 			to this API will re-enable it.
 * 			Use <code>ListManagedInsightRules</code>
 * 			to describe all available rules.
 *
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutManagedInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutManagedInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutManagedInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutManagedInsightRulesCommandInput} for command's `input` shape.
 * @see {@link PutManagedInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class PutManagedInsightRulesCommand extends $Command<
  PutManagedInsightRulesCommandInput,
  PutManagedInsightRulesCommandOutput,
  CloudWatchClientResolvedConfig
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

  constructor(readonly input: PutManagedInsightRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutManagedInsightRulesCommandInput, PutManagedInsightRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutManagedInsightRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutManagedInsightRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutManagedInsightRulesInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutManagedInsightRulesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutManagedInsightRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutManagedInsightRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutManagedInsightRulesCommandOutput> {
    return deserializeAws_queryPutManagedInsightRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
