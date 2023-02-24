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
  GetColumnStatisticsForTableRequest,
  GetColumnStatisticsForTableRequestFilterSensitiveLog,
  GetColumnStatisticsForTableResponse,
  GetColumnStatisticsForTableResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetColumnStatisticsForTableCommand,
  serializeAws_json1_1GetColumnStatisticsForTableCommand,
} from "../protocols/Aws_json1_1";

export interface GetColumnStatisticsForTableCommandInput extends GetColumnStatisticsForTableRequest {}
export interface GetColumnStatisticsForTableCommandOutput
  extends GetColumnStatisticsForTableResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves table statistics of columns.</p>
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsForTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsForTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetColumnStatisticsForTableCommand extends $Command<
  GetColumnStatisticsForTableCommandInput,
  GetColumnStatisticsForTableCommandOutput,
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

  constructor(readonly input: GetColumnStatisticsForTableCommandInput) {
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
  ): Handler<GetColumnStatisticsForTableCommandInput, GetColumnStatisticsForTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetColumnStatisticsForTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetColumnStatisticsForTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetColumnStatisticsForTableRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetColumnStatisticsForTableResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetColumnStatisticsForTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetColumnStatisticsForTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetColumnStatisticsForTableCommandOutput> {
    return deserializeAws_json1_1GetColumnStatisticsForTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
