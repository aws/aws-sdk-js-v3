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
import { GetCatalogImportStatusRequest, GetCatalogImportStatusResponse } from "../models/models_1";
import { de_GetCatalogImportStatusCommand, se_GetCatalogImportStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCatalogImportStatusCommand}.
 */
export interface GetCatalogImportStatusCommandInput extends GetCatalogImportStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetCatalogImportStatusCommand}.
 */
export interface GetCatalogImportStatusCommandOutput extends GetCatalogImportStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the status of a migration operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCatalogImportStatusCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCatalogImportStatusCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetCatalogImportStatusRequest
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new GetCatalogImportStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetCatalogImportStatusResponse
 * //   ImportStatus: { // CatalogImportStatus
 * //     ImportCompleted: true || false,
 * //     ImportTime: new Date("TIMESTAMP"),
 * //     ImportedBy: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCatalogImportStatusCommandInput - {@link GetCatalogImportStatusCommandInput}
 * @returns {@link GetCatalogImportStatusCommandOutput}
 * @see {@link GetCatalogImportStatusCommandInput} for command's `input` shape.
 * @see {@link GetCatalogImportStatusCommandOutput} for command's `response` shape.
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
export class GetCatalogImportStatusCommand extends $Command<
  GetCatalogImportStatusCommandInput,
  GetCatalogImportStatusCommandOutput,
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
  constructor(readonly input: GetCatalogImportStatusCommandInput) {
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
  ): Handler<GetCatalogImportStatusCommandInput, GetCatalogImportStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCatalogImportStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetCatalogImportStatusCommand";
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
  private serialize(input: GetCatalogImportStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCatalogImportStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCatalogImportStatusCommandOutput> {
    return de_GetCatalogImportStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
