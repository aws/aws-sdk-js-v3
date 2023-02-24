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
  ImportCatalogToGlueRequest,
  ImportCatalogToGlueRequestFilterSensitiveLog,
  ImportCatalogToGlueResponse,
  ImportCatalogToGlueResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ImportCatalogToGlueCommand,
  serializeAws_json1_1ImportCatalogToGlueCommand,
} from "../protocols/Aws_json1_1";

export interface ImportCatalogToGlueCommandInput extends ImportCatalogToGlueRequest {}
export interface ImportCatalogToGlueCommandOutput extends ImportCatalogToGlueResponse, __MetadataBearer {}

/**
 * <p>Imports an existing Amazon Athena Data Catalog to Glue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ImportCatalogToGlueCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ImportCatalogToGlueCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ImportCatalogToGlueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportCatalogToGlueCommandInput} for command's `input` shape.
 * @see {@link ImportCatalogToGlueCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class ImportCatalogToGlueCommand extends $Command<
  ImportCatalogToGlueCommandInput,
  ImportCatalogToGlueCommandOutput,
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

  constructor(readonly input: ImportCatalogToGlueCommandInput) {
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
  ): Handler<ImportCatalogToGlueCommandInput, ImportCatalogToGlueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportCatalogToGlueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ImportCatalogToGlueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportCatalogToGlueRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportCatalogToGlueResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportCatalogToGlueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportCatalogToGlueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportCatalogToGlueCommandOutput> {
    return deserializeAws_json1_1ImportCatalogToGlueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
