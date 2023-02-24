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
  GetPartitionIndexesRequest,
  GetPartitionIndexesRequestFilterSensitiveLog,
  GetPartitionIndexesResponse,
  GetPartitionIndexesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetPartitionIndexesCommand,
  serializeAws_json1_1GetPartitionIndexesCommand,
} from "../protocols/Aws_json1_1";

export interface GetPartitionIndexesCommandInput extends GetPartitionIndexesRequest {}
export interface GetPartitionIndexesCommandOutput extends GetPartitionIndexesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the partition indexes associated with a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPartitionIndexesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPartitionIndexesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetPartitionIndexesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartitionIndexesCommandInput} for command's `input` shape.
 * @see {@link GetPartitionIndexesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetPartitionIndexesCommand extends $Command<
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
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

  constructor(readonly input: GetPartitionIndexesCommandInput) {
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
  ): Handler<GetPartitionIndexesCommandInput, GetPartitionIndexesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPartitionIndexesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetPartitionIndexesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPartitionIndexesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPartitionIndexesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPartitionIndexesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPartitionIndexesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPartitionIndexesCommandOutput> {
    return deserializeAws_json1_1GetPartitionIndexesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
