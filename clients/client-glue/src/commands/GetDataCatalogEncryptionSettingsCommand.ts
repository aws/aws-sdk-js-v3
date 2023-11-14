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
import { GetDataCatalogEncryptionSettingsRequest, GetDataCatalogEncryptionSettingsResponse } from "../models/models_1";
import {
  de_GetDataCatalogEncryptionSettingsCommand,
  se_GetDataCatalogEncryptionSettingsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataCatalogEncryptionSettingsCommand}.
 */
export interface GetDataCatalogEncryptionSettingsCommandInput extends GetDataCatalogEncryptionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetDataCatalogEncryptionSettingsCommand}.
 */
export interface GetDataCatalogEncryptionSettingsCommandOutput
  extends GetDataCatalogEncryptionSettingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the security configuration for a specified catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataCatalogEncryptionSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataCatalogEncryptionSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetDataCatalogEncryptionSettingsRequest
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new GetDataCatalogEncryptionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetDataCatalogEncryptionSettingsResponse
 * //   DataCatalogEncryptionSettings: { // DataCatalogEncryptionSettings
 * //     EncryptionAtRest: { // EncryptionAtRest
 * //       CatalogEncryptionMode: "DISABLED" || "SSE-KMS", // required
 * //       SseAwsKmsKeyId: "STRING_VALUE",
 * //     },
 * //     ConnectionPasswordEncryption: { // ConnectionPasswordEncryption
 * //       ReturnConnectionPasswordEncrypted: true || false, // required
 * //       AwsKmsKeyId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataCatalogEncryptionSettingsCommandInput - {@link GetDataCatalogEncryptionSettingsCommandInput}
 * @returns {@link GetDataCatalogEncryptionSettingsCommandOutput}
 * @see {@link GetDataCatalogEncryptionSettingsCommandInput} for command's `input` shape.
 * @see {@link GetDataCatalogEncryptionSettingsCommandOutput} for command's `response` shape.
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
export class GetDataCatalogEncryptionSettingsCommand extends $Command<
  GetDataCatalogEncryptionSettingsCommandInput,
  GetDataCatalogEncryptionSettingsCommandOutput,
  GlueClientResolvedConfig
> {
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
  constructor(readonly input: GetDataCatalogEncryptionSettingsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataCatalogEncryptionSettingsCommandInput, GetDataCatalogEncryptionSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataCatalogEncryptionSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDataCatalogEncryptionSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetDataCatalogEncryptionSettings",
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
    input: GetDataCatalogEncryptionSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetDataCatalogEncryptionSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDataCatalogEncryptionSettingsCommandOutput> {
    return de_GetDataCatalogEncryptionSettingsCommand(output, context);
  }
}
