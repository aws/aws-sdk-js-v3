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
  BatchDeleteTableRequest,
  BatchDeleteTableRequestFilterSensitiveLog,
  BatchDeleteTableResponse,
  BatchDeleteTableResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchDeleteTableCommand,
  serializeAws_json1_1BatchDeleteTableCommand,
} from "../protocols/Aws_json1_1";

export interface BatchDeleteTableCommandInput extends BatchDeleteTableRequest {}
export interface BatchDeleteTableCommandOutput extends BatchDeleteTableResponse, __MetadataBearer {}

/**
 * <p>Deletes multiple tables at once.</p>
 *          <note>
 *             <p>After completing this operation, you no longer have access to the table versions and
 *         partitions that belong to the deleted table. Glue deletes these "orphaned" resources
 *         asynchronously in a timely manner, at the discretion of the service.</p>
 *             <p>To ensure the immediate deletion of all related resources, before calling
 *           <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or
 *           <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or
 *           <code>BatchDeletePartition</code>, to delete any resources that belong to the
 *         table.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeleteTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeleteTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchDeleteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteTableCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class BatchDeleteTableCommand extends $Command<
  BatchDeleteTableCommandInput,
  BatchDeleteTableCommandOutput,
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

  constructor(readonly input: BatchDeleteTableCommandInput) {
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
  ): Handler<BatchDeleteTableCommandInput, BatchDeleteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchDeleteTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteTableRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteTableResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDeleteTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteTableCommandOutput> {
    return deserializeAws_json1_1BatchDeleteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
