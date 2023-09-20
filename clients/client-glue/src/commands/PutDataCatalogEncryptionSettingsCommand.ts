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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { PutDataCatalogEncryptionSettingsRequest, PutDataCatalogEncryptionSettingsResponse } from "../models/models_2";
import {
  de_PutDataCatalogEncryptionSettingsCommand,
  se_PutDataCatalogEncryptionSettingsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutDataCatalogEncryptionSettingsCommand}.
 */
export interface PutDataCatalogEncryptionSettingsCommandInput extends PutDataCatalogEncryptionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutDataCatalogEncryptionSettingsCommand}.
 */
export interface PutDataCatalogEncryptionSettingsCommandOutput
  extends PutDataCatalogEncryptionSettingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Sets the security configuration for a specified catalog. After the configuration has been
 *       set, the specified encryption is applied to every catalog write thereafter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutDataCatalogEncryptionSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutDataCatalogEncryptionSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // PutDataCatalogEncryptionSettingsRequest
 *   CatalogId: "STRING_VALUE",
 *   DataCatalogEncryptionSettings: { // DataCatalogEncryptionSettings
 *     EncryptionAtRest: { // EncryptionAtRest
 *       CatalogEncryptionMode: "DISABLED" || "SSE-KMS", // required
 *       SseAwsKmsKeyId: "STRING_VALUE",
 *     },
 *     ConnectionPasswordEncryption: { // ConnectionPasswordEncryption
 *       ReturnConnectionPasswordEncrypted: true || false, // required
 *       AwsKmsKeyId: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new PutDataCatalogEncryptionSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDataCatalogEncryptionSettingsCommandInput - {@link PutDataCatalogEncryptionSettingsCommandInput}
 * @returns {@link PutDataCatalogEncryptionSettingsCommandOutput}
 * @see {@link PutDataCatalogEncryptionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutDataCatalogEncryptionSettingsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class PutDataCatalogEncryptionSettingsCommand extends $Command<
  PutDataCatalogEncryptionSettingsCommandInput,
  PutDataCatalogEncryptionSettingsCommandOutput,
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
  constructor(readonly input: PutDataCatalogEncryptionSettingsCommandInput) {
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
  ): Handler<PutDataCatalogEncryptionSettingsCommandInput, PutDataCatalogEncryptionSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDataCatalogEncryptionSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "PutDataCatalogEncryptionSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "PutDataCatalogEncryptionSettings",
      },
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
  private serialize(
    input: PutDataCatalogEncryptionSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutDataCatalogEncryptionSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDataCatalogEncryptionSettingsCommandOutput> {
    return de_PutDataCatalogEncryptionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
