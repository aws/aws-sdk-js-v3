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
  ListSchemaVersionsInput,
  ListSchemaVersionsInputFilterSensitiveLog,
  ListSchemaVersionsResponse,
  ListSchemaVersionsResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1ListSchemaVersionsCommand,
  serializeAws_json1_1ListSchemaVersionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListSchemaVersionsCommandInput extends ListSchemaVersionsInput {}
export interface ListSchemaVersionsCommandOutput extends ListSchemaVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListSchemaVersionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListSchemaVersionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemaVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaVersionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class ListSchemaVersionsCommand extends $Command<
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
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

  constructor(readonly input: ListSchemaVersionsCommandInput) {
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
  ): Handler<ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSchemaVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListSchemaVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSchemaVersionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListSchemaVersionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSchemaVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSchemaVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSchemaVersionsCommandOutput> {
    return deserializeAws_json1_1ListSchemaVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
