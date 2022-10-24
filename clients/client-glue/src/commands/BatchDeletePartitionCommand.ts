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
  BatchDeletePartitionRequest,
  BatchDeletePartitionRequestFilterSensitiveLog,
  BatchDeletePartitionResponse,
  BatchDeletePartitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchDeletePartitionCommand,
  serializeAws_json1_1BatchDeletePartitionCommand,
} from "../protocols/Aws_json1_1";

export interface BatchDeletePartitionCommandInput extends BatchDeletePartitionRequest {}
export interface BatchDeletePartitionCommandOutput extends BatchDeletePartitionResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more partitions in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeletePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeletePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchDeletePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeletePartitionCommandInput} for command's `input` shape.
 * @see {@link BatchDeletePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class BatchDeletePartitionCommand extends $Command<
  BatchDeletePartitionCommandInput,
  BatchDeletePartitionCommandOutput,
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

  constructor(readonly input: BatchDeletePartitionCommandInput) {
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
  ): Handler<BatchDeletePartitionCommandInput, BatchDeletePartitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeletePartitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchDeletePartitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeletePartitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDeletePartitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeletePartitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDeletePartitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeletePartitionCommandOutput> {
    return deserializeAws_json1_1BatchDeletePartitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
