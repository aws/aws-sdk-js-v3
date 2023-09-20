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
import { RemoveSchemaVersionMetadataInput, RemoveSchemaVersionMetadataResponse } from "../models/models_2";
import { de_RemoveSchemaVersionMetadataCommand, se_RemoveSchemaVersionMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RemoveSchemaVersionMetadataCommand}.
 */
export interface RemoveSchemaVersionMetadataCommandInput extends RemoveSchemaVersionMetadataInput {}
/**
 * @public
 *
 * The output of {@link RemoveSchemaVersionMetadataCommand}.
 */
export interface RemoveSchemaVersionMetadataCommandOutput
  extends RemoveSchemaVersionMetadataResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Removes a key value pair from the schema version metadata for the specified schema version ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, RemoveSchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, RemoveSchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // RemoveSchemaVersionMetadataInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 *   SchemaVersionNumber: { // SchemaVersionNumber
 *     LatestVersion: true || false,
 *     VersionNumber: Number("long"),
 *   },
 *   SchemaVersionId: "STRING_VALUE",
 *   MetadataKeyValue: { // MetadataKeyValuePair
 *     MetadataKey: "STRING_VALUE",
 *     MetadataValue: "STRING_VALUE",
 *   },
 * };
 * const command = new RemoveSchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * // { // RemoveSchemaVersionMetadataResponse
 * //   SchemaArn: "STRING_VALUE",
 * //   SchemaName: "STRING_VALUE",
 * //   RegistryName: "STRING_VALUE",
 * //   LatestVersion: true || false,
 * //   VersionNumber: Number("long"),
 * //   SchemaVersionId: "STRING_VALUE",
 * //   MetadataKey: "STRING_VALUE",
 * //   MetadataValue: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveSchemaVersionMetadataCommandInput - {@link RemoveSchemaVersionMetadataCommandInput}
 * @returns {@link RemoveSchemaVersionMetadataCommandOutput}
 * @see {@link RemoveSchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link RemoveSchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "RemoveSchemaVersionMetadata",
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
  private serialize(input: RemoveSchemaVersionMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RemoveSchemaVersionMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveSchemaVersionMetadataCommandOutput> {
    return de_RemoveSchemaVersionMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
