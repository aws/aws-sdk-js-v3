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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  UpdateComputeEnvironmentRequest,
  UpdateComputeEnvironmentRequestFilterSensitiveLog,
  UpdateComputeEnvironmentResponse,
  UpdateComputeEnvironmentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateComputeEnvironmentCommand,
  serializeAws_restJson1UpdateComputeEnvironmentCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateComputeEnvironmentCommandInput extends UpdateComputeEnvironmentRequest {}
export interface UpdateComputeEnvironmentCommandOutput extends UpdateComputeEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Updates an Batch compute environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateComputeEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateComputeEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new UpdateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateComputeEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateComputeEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 */
export class UpdateComputeEnvironmentCommand extends $Command<
  UpdateComputeEnvironmentCommandInput,
  UpdateComputeEnvironmentCommandOutput,
  BatchClientResolvedConfig
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

  constructor(readonly input: UpdateComputeEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateComputeEnvironmentCommandInput, UpdateComputeEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateComputeEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "UpdateComputeEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateComputeEnvironmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateComputeEnvironmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateComputeEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateComputeEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateComputeEnvironmentCommandOutput> {
    return deserializeAws_restJson1UpdateComputeEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
