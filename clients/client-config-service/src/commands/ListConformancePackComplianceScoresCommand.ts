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
  ListConformancePackComplianceScoresRequest,
  ListConformancePackComplianceScoresRequestFilterSensitiveLog,
  ListConformancePackComplianceScoresResponse,
  ListConformancePackComplianceScoresResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListConformancePackComplianceScoresCommand,
  serializeAws_json1_1ListConformancePackComplianceScoresCommand,
} from "../protocols/Aws_json1_1";

export interface ListConformancePackComplianceScoresCommandInput extends ListConformancePackComplianceScoresRequest {}
export interface ListConformancePackComplianceScoresCommandOutput
  extends ListConformancePackComplianceScoresResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of conformance pack compliance scores.
 * 			A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack.
 * 			This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand
 * 			the level of compliance in your conformance packs.</p>
 * 		       <note>
 *             <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListConformancePackComplianceScoresCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListConformancePackComplianceScoresCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new ListConformancePackComplianceScoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConformancePackComplianceScoresCommandInput} for command's `input` shape.
 * @see {@link ListConformancePackComplianceScoresCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class ListConformancePackComplianceScoresCommand extends $Command<
  ListConformancePackComplianceScoresCommandInput,
  ListConformancePackComplianceScoresCommandOutput,
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

  constructor(readonly input: ListConformancePackComplianceScoresCommandInput) {
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
  ): Handler<ListConformancePackComplianceScoresCommandInput, ListConformancePackComplianceScoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConformancePackComplianceScoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "ListConformancePackComplianceScoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConformancePackComplianceScoresRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListConformancePackComplianceScoresResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListConformancePackComplianceScoresCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListConformancePackComplianceScoresCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConformancePackComplianceScoresCommandOutput> {
    return deserializeAws_json1_1ListConformancePackComplianceScoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
