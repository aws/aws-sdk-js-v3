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
  GetColumnStatisticsForPartitionRequest,
  GetColumnStatisticsForPartitionRequestFilterSensitiveLog,
  GetColumnStatisticsForPartitionResponse,
  GetColumnStatisticsForPartitionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetColumnStatisticsForPartitionCommand,
  serializeAws_json1_1GetColumnStatisticsForPartitionCommand,
} from "../protocols/Aws_json1_1";

export interface GetColumnStatisticsForPartitionCommandInput extends GetColumnStatisticsForPartitionRequest {}
export interface GetColumnStatisticsForPartitionCommandOutput
  extends GetColumnStatisticsForPartitionResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves partition statistics of columns.</p>
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsForPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsForPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetColumnStatisticsForPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetColumnStatisticsForPartitionCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsForPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetColumnStatisticsForPartitionCommand extends $Command<
  GetColumnStatisticsForPartitionCommandInput,
  GetColumnStatisticsForPartitionCommandOutput,
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

  constructor(readonly input: GetColumnStatisticsForPartitionCommandInput) {
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
  ): Handler<GetColumnStatisticsForPartitionCommandInput, GetColumnStatisticsForPartitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetColumnStatisticsForPartitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetColumnStatisticsForPartitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetColumnStatisticsForPartitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetColumnStatisticsForPartitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetColumnStatisticsForPartitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetColumnStatisticsForPartitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetColumnStatisticsForPartitionCommandOutput> {
    return deserializeAws_json1_1GetColumnStatisticsForPartitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
