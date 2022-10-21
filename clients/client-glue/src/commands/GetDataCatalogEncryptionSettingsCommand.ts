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
  GetDataCatalogEncryptionSettingsRequest,
  GetDataCatalogEncryptionSettingsRequestFilterSensitiveLog,
  GetDataCatalogEncryptionSettingsResponse,
  GetDataCatalogEncryptionSettingsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand,
  serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand,
} from "../protocols/Aws_json1_1";

export interface GetDataCatalogEncryptionSettingsCommandInput extends GetDataCatalogEncryptionSettingsRequest {}
export interface GetDataCatalogEncryptionSettingsCommandOutput
  extends GetDataCatalogEncryptionSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the security configuration for a specified catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataCatalogEncryptionSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataCatalogEncryptionSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDataCatalogEncryptionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataCatalogEncryptionSettingsCommandInput} for command's `input` shape.
 * @see {@link GetDataCatalogEncryptionSettingsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetDataCatalogEncryptionSettingsCommand extends $Command<
  GetDataCatalogEncryptionSettingsCommandInput,
  GetDataCatalogEncryptionSettingsCommandOutput,
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

  constructor(readonly input: GetDataCatalogEncryptionSettingsCommandInput) {
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
      inputFilterSensitiveLog: GetDataCatalogEncryptionSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDataCatalogEncryptionSettingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetDataCatalogEncryptionSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDataCatalogEncryptionSettingsCommandOutput> {
    return deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
