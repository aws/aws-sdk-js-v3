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
  PutExternalEvaluationRequest,
  PutExternalEvaluationRequestFilterSensitiveLog,
  PutExternalEvaluationResponse,
  PutExternalEvaluationResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1PutExternalEvaluationCommand,
  serializeAws_json1_1PutExternalEvaluationCommand,
} from "../protocols/Aws_json1_1";

export interface PutExternalEvaluationCommandInput extends PutExternalEvaluationRequest {}
export interface PutExternalEvaluationCommandOutput extends PutExternalEvaluationResponse, __MetadataBearer {}

/**
 * <p>Add or updates the evaluations for process checks.
 * 			This API checks if the rule is a process check when the name of the Config rule is provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutExternalEvaluationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutExternalEvaluationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutExternalEvaluationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutExternalEvaluationCommandInput} for command's `input` shape.
 * @see {@link PutExternalEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class PutExternalEvaluationCommand extends $Command<
  PutExternalEvaluationCommandInput,
  PutExternalEvaluationCommandOutput,
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

  constructor(readonly input: PutExternalEvaluationCommandInput) {
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
  ): Handler<PutExternalEvaluationCommandInput, PutExternalEvaluationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutExternalEvaluationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutExternalEvaluationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutExternalEvaluationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutExternalEvaluationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutExternalEvaluationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutExternalEvaluationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutExternalEvaluationCommandOutput> {
    return deserializeAws_json1_1PutExternalEvaluationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
