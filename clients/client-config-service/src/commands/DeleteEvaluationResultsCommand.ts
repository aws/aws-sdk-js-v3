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
  DeleteEvaluationResultsRequest,
  DeleteEvaluationResultsRequestFilterSensitiveLog,
  DeleteEvaluationResultsResponse,
  DeleteEvaluationResultsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteEvaluationResultsCommand,
  serializeAws_json1_1DeleteEvaluationResultsCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteEvaluationResultsCommandInput extends DeleteEvaluationResultsRequest {}
export interface DeleteEvaluationResultsCommandOutput extends DeleteEvaluationResultsResponse, __MetadataBearer {}

/**
 * <p>Deletes the evaluation results for the specified Config
 * 			rule. You can specify one Config rule per request. After you
 * 			delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating
 * 			your Amazon Web Services resources against the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteEvaluationResultsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteEvaluationResultsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteEvaluationResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEvaluationResultsCommandInput} for command's `input` shape.
 * @see {@link DeleteEvaluationResultsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class DeleteEvaluationResultsCommand extends $Command<
  DeleteEvaluationResultsCommandInput,
  DeleteEvaluationResultsCommandOutput,
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

  constructor(readonly input: DeleteEvaluationResultsCommandInput) {
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
  ): Handler<DeleteEvaluationResultsCommandInput, DeleteEvaluationResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEvaluationResultsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DeleteEvaluationResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEvaluationResultsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteEvaluationResultsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEvaluationResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteEvaluationResultsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEvaluationResultsCommandOutput> {
    return deserializeAws_json1_1DeleteEvaluationResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
