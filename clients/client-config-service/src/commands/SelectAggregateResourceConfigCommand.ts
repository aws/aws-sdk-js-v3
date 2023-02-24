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
  SelectAggregateResourceConfigRequest,
  SelectAggregateResourceConfigRequestFilterSensitiveLog,
  SelectAggregateResourceConfigResponse,
  SelectAggregateResourceConfigResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1SelectAggregateResourceConfigCommand,
  serializeAws_json1_1SelectAggregateResourceConfigCommand,
} from "../protocols/Aws_json1_1";

export interface SelectAggregateResourceConfigCommandInput extends SelectAggregateResourceConfigRequest {}
export interface SelectAggregateResourceConfigCommandOutput
  extends SelectAggregateResourceConfigResponse,
    __MetadataBearer {}

/**
 * <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions,
 * 			performs the corresponding search, and returns resource configurations matching the properties.</p>
 * 		       <p>For more information about query components, see the
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
 *                <b>Query Components</b>
 *             </a> section in the Config Developer Guide.</p>
 *
 * 		       <note>
 * 			         <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>)
 * 				and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p>
 *
 * 			         <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>)
 * 				and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, SelectAggregateResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, SelectAggregateResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new SelectAggregateResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SelectAggregateResourceConfigCommandInput} for command's `input` shape.
 * @see {@link SelectAggregateResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class SelectAggregateResourceConfigCommand extends $Command<
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput,
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

  constructor(readonly input: SelectAggregateResourceConfigCommandInput) {
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
  ): Handler<SelectAggregateResourceConfigCommandInput, SelectAggregateResourceConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SelectAggregateResourceConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "SelectAggregateResourceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SelectAggregateResourceConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SelectAggregateResourceConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SelectAggregateResourceConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SelectAggregateResourceConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SelectAggregateResourceConfigCommandOutput> {
    return deserializeAws_json1_1SelectAggregateResourceConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
