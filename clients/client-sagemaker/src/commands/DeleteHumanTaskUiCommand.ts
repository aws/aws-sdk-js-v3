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

import {
  DeleteHumanTaskUiRequest,
  DeleteHumanTaskUiRequestFilterSensitiveLog,
  DeleteHumanTaskUiResponse,
  DeleteHumanTaskUiResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1DeleteHumanTaskUiCommand,
  serializeAws_json1_1DeleteHumanTaskUiCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface DeleteHumanTaskUiCommandInput extends DeleteHumanTaskUiRequest {}
export interface DeleteHumanTaskUiCommandOutput extends DeleteHumanTaskUiResponse, __MetadataBearer {}

/**
 * <p>Use this operation to delete a human task user interface (worker task template).</p>
 *          <p>
 *       To see a list of human task user interfaces
 *       (work task templates) in your account, use .
 *       When you delete a worker task template, it no longer appears when you call <code>ListHumanTaskUis</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteHumanTaskUiCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteHumanTaskUiCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteHumanTaskUiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHumanTaskUiCommandInput} for command's `input` shape.
 * @see {@link DeleteHumanTaskUiCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class DeleteHumanTaskUiCommand extends $Command<
  DeleteHumanTaskUiCommandInput,
  DeleteHumanTaskUiCommandOutput,
  SageMakerClientResolvedConfig
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

  constructor(readonly input: DeleteHumanTaskUiCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteHumanTaskUiCommandInput, DeleteHumanTaskUiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteHumanTaskUiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteHumanTaskUiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHumanTaskUiRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteHumanTaskUiResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteHumanTaskUiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteHumanTaskUiCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHumanTaskUiCommandOutput> {
    return deserializeAws_json1_1DeleteHumanTaskUiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
