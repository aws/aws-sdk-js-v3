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

import { KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraRankingClient";
import {
  RescoreRequest,
  RescoreRequestFilterSensitiveLog,
  RescoreResult,
  RescoreResultFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_0RescoreCommand, serializeAws_json1_0RescoreCommand } from "../protocols/Aws_json1_0";

export interface RescoreCommandInput extends RescoreRequest {}
export interface RescoreCommandOutput extends RescoreResult, __MetadataBearer {}

/**
 * <p>Rescores or re-ranks search results from a search service
 *             such as OpenSearch (self managed). You use the semantic search
 *             capabilities of Amazon Kendra Intelligent Ranking to
 *             improve the search service's results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraRankingClient, RescoreCommand } from "@aws-sdk/client-kendra-ranking"; // ES Modules import
 * // const { KendraRankingClient, RescoreCommand } = require("@aws-sdk/client-kendra-ranking"); // CommonJS import
 * const client = new KendraRankingClient(config);
 * const command = new RescoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RescoreCommandInput} for command's `input` shape.
 * @see {@link RescoreCommandOutput} for command's `response` shape.
 * @see {@link KendraRankingClientResolvedConfig | config} for KendraRankingClient's `config` shape.
 *
 */
export class RescoreCommand extends $Command<
  RescoreCommandInput,
  RescoreCommandOutput,
  KendraRankingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  constructor(readonly input: RescoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraRankingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RescoreCommandInput, RescoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RescoreCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraRankingClient";
    const commandName = "RescoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RescoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RescoreResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RescoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RescoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RescoreCommandOutput> {
    return deserializeAws_json1_0RescoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
