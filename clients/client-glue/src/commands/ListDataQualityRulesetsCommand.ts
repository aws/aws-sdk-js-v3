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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  ListDataQualityRulesetsRequest,
  ListDataQualityRulesetsRequestFilterSensitiveLog,
  ListDataQualityRulesetsResponse,
  ListDataQualityRulesetsResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1ListDataQualityRulesetsCommand,
  serializeAws_json1_1ListDataQualityRulesetsCommand,
} from "../protocols/Aws_json1_1";

export interface ListDataQualityRulesetsCommandInput extends ListDataQualityRulesetsRequest {}
export interface ListDataQualityRulesetsCommandOutput extends ListDataQualityRulesetsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of rulesets for the specified list of Glue tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDataQualityRulesetsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDataQualityRulesetsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListDataQualityRulesetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataQualityRulesetsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityRulesetsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class ListDataQualityRulesetsCommand extends $Command<
  ListDataQualityRulesetsCommandInput,
  ListDataQualityRulesetsCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: ListDataQualityRulesetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataQualityRulesetsCommandInput, ListDataQualityRulesetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataQualityRulesetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListDataQualityRulesetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDataQualityRulesetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDataQualityRulesetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDataQualityRulesetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDataQualityRulesetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataQualityRulesetsCommandOutput> {
    return deserializeAws_json1_1ListDataQualityRulesetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
