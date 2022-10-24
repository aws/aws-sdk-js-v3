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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  StartPiiEntitiesDetectionJobRequest,
  StartPiiEntitiesDetectionJobRequestFilterSensitiveLog,
  StartPiiEntitiesDetectionJobResponse,
  StartPiiEntitiesDetectionJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartPiiEntitiesDetectionJobCommand,
  serializeAws_json1_1StartPiiEntitiesDetectionJobCommand,
} from "../protocols/Aws_json1_1";

export interface StartPiiEntitiesDetectionJobCommandInput extends StartPiiEntitiesDetectionJobRequest {}
export interface StartPiiEntitiesDetectionJobCommandOutput
  extends StartPiiEntitiesDetectionJobResponse,
    __MetadataBearer {}

/**
 * <p>Starts an asynchronous PII entity detection job for a collection of documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartPiiEntitiesDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartPiiEntitiesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StartPiiEntitiesDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPiiEntitiesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartPiiEntitiesDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class StartPiiEntitiesDetectionJobCommand extends $Command<
  StartPiiEntitiesDetectionJobCommandInput,
  StartPiiEntitiesDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
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

  constructor(readonly input: StartPiiEntitiesDetectionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartPiiEntitiesDetectionJobCommandInput, StartPiiEntitiesDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartPiiEntitiesDetectionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StartPiiEntitiesDetectionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartPiiEntitiesDetectionJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartPiiEntitiesDetectionJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartPiiEntitiesDetectionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartPiiEntitiesDetectionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartPiiEntitiesDetectionJobCommandOutput> {
    return deserializeAws_json1_1StartPiiEntitiesDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
