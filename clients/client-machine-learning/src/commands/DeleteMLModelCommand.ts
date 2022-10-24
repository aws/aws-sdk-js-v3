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
  DeleteMLModelInput,
  DeleteMLModelInputFilterSensitiveLog,
  DeleteMLModelOutput,
  DeleteMLModelOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteMLModelCommand,
  serializeAws_json1_1DeleteMLModelCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteMLModelCommandInput extends DeleteMLModelInput {}
export interface DeleteMLModelCommandOutput extends DeleteMLModelOutput, __MetadataBearer {}

/**
 * <p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p>
 *         <p>After using the <code>DeleteMLModel</code> operation, you can use the
 *           <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p>
 *
 *         <p>
 *             <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DeleteMLModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMLModelCommandInput} for command's `input` shape.
 * @see {@link DeleteMLModelCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 */
export class DeleteMLModelCommand extends $Command<
  DeleteMLModelCommandInput,
  DeleteMLModelCommandOutput,
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

  constructor(readonly input: DeleteMLModelCommandInput) {
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
  ): Handler<DeleteMLModelCommandInput, DeleteMLModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteMLModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "DeleteMLModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMLModelInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteMLModelOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMLModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteMLModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMLModelCommandOutput> {
    return deserializeAws_json1_1DeleteMLModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
