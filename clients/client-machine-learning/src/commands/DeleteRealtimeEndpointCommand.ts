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

import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import {
  DeleteRealtimeEndpointInput,
  DeleteRealtimeEndpointInputFilterSensitiveLog,
  DeleteRealtimeEndpointOutput,
  DeleteRealtimeEndpointOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteRealtimeEndpointCommand,
  serializeAws_json1_1DeleteRealtimeEndpointCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteRealtimeEndpointCommandInput extends DeleteRealtimeEndpointInput {}
export interface DeleteRealtimeEndpointCommandOutput extends DeleteRealtimeEndpointOutput, __MetadataBearer {}

/**
 * <p>Deletes a real time endpoint of an <code>MLModel</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteRealtimeEndpointCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteRealtimeEndpointCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DeleteRealtimeEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRealtimeEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteRealtimeEndpointCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 */
export class DeleteRealtimeEndpointCommand extends $Command<
  DeleteRealtimeEndpointCommandInput,
  DeleteRealtimeEndpointCommandOutput,
  MachineLearningClientResolvedConfig
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

  constructor(readonly input: DeleteRealtimeEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRealtimeEndpointCommandInput, DeleteRealtimeEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteRealtimeEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "DeleteRealtimeEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRealtimeEndpointInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteRealtimeEndpointOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRealtimeEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRealtimeEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRealtimeEndpointCommandOutput> {
    return deserializeAws_json1_1DeleteRealtimeEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
