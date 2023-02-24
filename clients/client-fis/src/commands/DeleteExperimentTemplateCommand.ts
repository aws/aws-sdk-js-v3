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

import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import {
  DeleteExperimentTemplateRequest,
  DeleteExperimentTemplateRequestFilterSensitiveLog,
  DeleteExperimentTemplateResponse,
  DeleteExperimentTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteExperimentTemplateCommand,
  serializeAws_restJson1DeleteExperimentTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteExperimentTemplateCommandInput extends DeleteExperimentTemplateRequest {}
export interface DeleteExperimentTemplateCommandOutput extends DeleteExperimentTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, DeleteExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, DeleteExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new DeleteExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 */
export class DeleteExperimentTemplateCommand extends $Command<
  DeleteExperimentTemplateCommandInput,
  DeleteExperimentTemplateCommandOutput,
  FisClientResolvedConfig
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

  constructor(readonly input: DeleteExperimentTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteExperimentTemplateCommandInput, DeleteExperimentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteExperimentTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "DeleteExperimentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteExperimentTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteExperimentTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteExperimentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteExperimentTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteExperimentTemplateCommandOutput> {
    return deserializeAws_restJson1DeleteExperimentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
