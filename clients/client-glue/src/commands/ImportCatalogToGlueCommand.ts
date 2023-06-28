// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ImportCatalogToGlueRequest, ImportCatalogToGlueResponse } from "../models/models_2";
import { de_ImportCatalogToGlueCommand, se_ImportCatalogToGlueCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportCatalogToGlueCommand}.
 */
export interface ImportCatalogToGlueCommandInput extends ImportCatalogToGlueRequest {}
/**
 * @public
 *
 * The output of {@link ImportCatalogToGlueCommand}.
 */
export interface ImportCatalogToGlueCommandOutput extends ImportCatalogToGlueResponse, __MetadataBearer {}

/**
 * @public
 * <p>Imports an existing Amazon Athena Data Catalog to Glue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ImportCatalogToGlueCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ImportCatalogToGlueCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ImportCatalogToGlueRequest
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new ImportCatalogToGlueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ImportCatalogToGlueCommandInput - {@link ImportCatalogToGlueCommandInput}
 * @returns {@link ImportCatalogToGlueCommandOutput}
 * @see {@link ImportCatalogToGlueCommandInput} for command's `input` shape.
 * @see {@link ImportCatalogToGlueCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ImportCatalogToGlueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportCatalogToGlueCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportCatalogToGlueCommandOutput> {
    return de_ImportCatalogToGlueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
