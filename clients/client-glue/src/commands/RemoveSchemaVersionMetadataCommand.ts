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
  RemoveSchemaVersionMetadataInput,
  RemoveSchemaVersionMetadataInputFilterSensitiveLog,
  RemoveSchemaVersionMetadataResponse,
  RemoveSchemaVersionMetadataResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1RemoveSchemaVersionMetadataCommand,
  serializeAws_json1_1RemoveSchemaVersionMetadataCommand,
} from "../protocols/Aws_json1_1";

export interface RemoveSchemaVersionMetadataCommandInput extends RemoveSchemaVersionMetadataInput {}
export interface RemoveSchemaVersionMetadataCommandOutput
  extends RemoveSchemaVersionMetadataResponse,
    __MetadataBearer {}

/**
 * <p>Removes a key value pair from the schema version metadata for the specified schema version ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, RemoveSchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, RemoveSchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new RemoveSchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveSchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link RemoveSchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class RemoveSchemaVersionMetadataCommand extends $Command<
  RemoveSchemaVersionMetadataCommandInput,
  RemoveSchemaVersionMetadataCommandOutput,
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

  constructor(readonly input: RemoveSchemaVersionMetadataCommandInput) {
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
  ): Handler<RemoveSchemaVersionMetadataCommandInput, RemoveSchemaVersionMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveSchemaVersionMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "RemoveSchemaVersionMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveSchemaVersionMetadataInputFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveSchemaVersionMetadataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveSchemaVersionMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveSchemaVersionMetadataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveSchemaVersionMetadataCommandOutput> {
    return deserializeAws_json1_1RemoveSchemaVersionMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
