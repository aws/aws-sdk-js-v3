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
  PutDataCatalogEncryptionSettingsRequest,
  PutDataCatalogEncryptionSettingsRequestFilterSensitiveLog,
  PutDataCatalogEncryptionSettingsResponse,
  PutDataCatalogEncryptionSettingsResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand,
  serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand,
} from "../protocols/Aws_json1_1";

export interface PutDataCatalogEncryptionSettingsCommandInput extends PutDataCatalogEncryptionSettingsRequest {}
export interface PutDataCatalogEncryptionSettingsCommandOutput
  extends PutDataCatalogEncryptionSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Sets the security configuration for a specified catalog. After the configuration has been
 *       set, the specified encryption is applied to every catalog write thereafter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutDataCatalogEncryptionSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutDataCatalogEncryptionSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new PutDataCatalogEncryptionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDataCatalogEncryptionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutDataCatalogEncryptionSettingsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
      inputFilterSensitiveLog: PutDataCatalogEncryptionSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutDataCatalogEncryptionSettingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutDataCatalogEncryptionSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDataCatalogEncryptionSettingsCommandOutput> {
    return deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
