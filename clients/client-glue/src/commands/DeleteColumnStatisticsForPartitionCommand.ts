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
  DeleteColumnStatisticsForPartitionRequest,
  DeleteColumnStatisticsForPartitionRequestFilterSensitiveLog,
  DeleteColumnStatisticsForPartitionResponse,
  DeleteColumnStatisticsForPartitionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand,
  serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteColumnStatisticsForPartitionCommandInput extends DeleteColumnStatisticsForPartitionRequest {}
export interface DeleteColumnStatisticsForPartitionCommandOutput
  extends DeleteColumnStatisticsForPartitionResponse,
    __MetadataBearer {}

/**
 * <p>Delete the partition column statistics of a column.</p>
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteColumnStatisticsForPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteColumnStatisticsForPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteColumnStatisticsForPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteColumnStatisticsForPartitionCommandInput} for command's `input` shape.
 * @see {@link DeleteColumnStatisticsForPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class DeleteColumnStatisticsForPartitionCommand extends $Command<
  DeleteColumnStatisticsForPartitionCommandInput,
  DeleteColumnStatisticsForPartitionCommandOutput,
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

  constructor(readonly input: DeleteColumnStatisticsForPartitionCommandInput) {
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
  ): Handler<DeleteColumnStatisticsForPartitionCommandInput, DeleteColumnStatisticsForPartitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteColumnStatisticsForPartitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteColumnStatisticsForPartitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteColumnStatisticsForPartitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteColumnStatisticsForPartitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteColumnStatisticsForPartitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteColumnStatisticsForPartitionCommandOutput> {
    return deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
