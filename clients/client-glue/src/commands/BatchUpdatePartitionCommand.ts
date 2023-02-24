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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  BatchUpdatePartitionRequest,
  BatchUpdatePartitionRequestFilterSensitiveLog,
  BatchUpdatePartitionResponse,
  BatchUpdatePartitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchUpdatePartitionCommand,
  serializeAws_json1_1BatchUpdatePartitionCommand,
} from "../protocols/Aws_json1_1";

export interface BatchUpdatePartitionCommandInput extends BatchUpdatePartitionRequest {}
export interface BatchUpdatePartitionCommandOutput extends BatchUpdatePartitionResponse, __MetadataBearer {}

/**
 * <p>Updates one or more partitions in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchUpdatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchUpdatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchUpdatePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdatePartitionCommandInput} for command's `input` shape.
 * @see {@link BatchUpdatePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class BatchUpdatePartitionCommand extends $Command<
  BatchUpdatePartitionCommandInput,
  BatchUpdatePartitionCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: BatchUpdatePartitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdatePartitionCommandInput, BatchUpdatePartitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdatePartitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchUpdatePartitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdatePartitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdatePartitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUpdatePartitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchUpdatePartitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdatePartitionCommandOutput> {
    return deserializeAws_json1_1BatchUpdatePartitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
