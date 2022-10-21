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
  DeletePartitionIndexRequest,
  DeletePartitionIndexRequestFilterSensitiveLog,
  DeletePartitionIndexResponse,
  DeletePartitionIndexResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1DeletePartitionIndexCommand,
  serializeAws_json1_1DeletePartitionIndexCommand,
} from "../protocols/Aws_json1_1";

export interface DeletePartitionIndexCommandInput extends DeletePartitionIndexRequest {}
export interface DeletePartitionIndexCommandOutput extends DeletePartitionIndexResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified partition index from an existing table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeletePartitionIndexCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeletePartitionIndexCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeletePartitionIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePartitionIndexCommandInput} for command's `input` shape.
 * @see {@link DeletePartitionIndexCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class DeletePartitionIndexCommand extends $Command<
  DeletePartitionIndexCommandInput,
  DeletePartitionIndexCommandOutput,
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

  constructor(readonly input: DeletePartitionIndexCommandInput) {
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
  ): Handler<DeletePartitionIndexCommandInput, DeletePartitionIndexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePartitionIndexCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeletePartitionIndexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePartitionIndexRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeletePartitionIndexResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePartitionIndexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePartitionIndexCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePartitionIndexCommandOutput> {
    return deserializeAws_json1_1DeletePartitionIndexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
