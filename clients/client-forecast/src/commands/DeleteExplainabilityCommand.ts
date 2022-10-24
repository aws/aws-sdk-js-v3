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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteExplainabilityRequest, DeleteExplainabilityRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteExplainabilityCommand,
  serializeAws_json1_1DeleteExplainabilityCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteExplainabilityCommandInput extends DeleteExplainabilityRequest {}
export interface DeleteExplainabilityCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Explainability resource.</p>
 *         <p>You can delete only predictor that have a status of <code>ACTIVE</code> or
 *                 <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeExplainability</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteExplainabilityCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteExplainabilityCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteExplainabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteExplainabilityCommandInput} for command's `input` shape.
 * @see {@link DeleteExplainabilityCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class DeleteExplainabilityCommand extends $Command<
  DeleteExplainabilityCommandInput,
  DeleteExplainabilityCommandOutput,
  ForecastClientResolvedConfig
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

  constructor(readonly input: DeleteExplainabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteExplainabilityCommandInput, DeleteExplainabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteExplainabilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DeleteExplainabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteExplainabilityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteExplainabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteExplainabilityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteExplainabilityCommandOutput> {
    return deserializeAws_json1_1DeleteExplainabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
