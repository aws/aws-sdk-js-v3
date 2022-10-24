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
  QuerySchemaVersionMetadataInput,
  QuerySchemaVersionMetadataInputFilterSensitiveLog,
  QuerySchemaVersionMetadataResponse,
  QuerySchemaVersionMetadataResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1QuerySchemaVersionMetadataCommand,
  serializeAws_json1_1QuerySchemaVersionMetadataCommand,
} from "../protocols/Aws_json1_1";

export interface QuerySchemaVersionMetadataCommandInput extends QuerySchemaVersionMetadataInput {}
export interface QuerySchemaVersionMetadataCommandOutput extends QuerySchemaVersionMetadataResponse, __MetadataBearer {}

/**
 * <p>Queries for the schema version metadata information. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, QuerySchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, QuerySchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new QuerySchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QuerySchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link QuerySchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class QuerySchemaVersionMetadataCommand extends $Command<
  QuerySchemaVersionMetadataCommandInput,
  QuerySchemaVersionMetadataCommandOutput,
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

  constructor(readonly input: QuerySchemaVersionMetadataCommandInput) {
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
  ): Handler<QuerySchemaVersionMetadataCommandInput, QuerySchemaVersionMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, QuerySchemaVersionMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "QuerySchemaVersionMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QuerySchemaVersionMetadataInputFilterSensitiveLog,
      outputFilterSensitiveLog: QuerySchemaVersionMetadataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QuerySchemaVersionMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1QuerySchemaVersionMetadataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<QuerySchemaVersionMetadataCommandOutput> {
    return deserializeAws_json1_1QuerySchemaVersionMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
