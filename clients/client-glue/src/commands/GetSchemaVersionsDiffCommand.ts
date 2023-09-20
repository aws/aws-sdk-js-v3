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
import { GetSchemaVersionsDiffInput, GetSchemaVersionsDiffResponse } from "../models/models_1";
import { de_GetSchemaVersionsDiffCommand, se_GetSchemaVersionsDiffCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaVersionsDiffCommand}.
 */
export interface GetSchemaVersionsDiffCommandInput extends GetSchemaVersionsDiffInput {}
/**
 * @public
 *
 * The output of {@link GetSchemaVersionsDiffCommand}.
 */
export interface GetSchemaVersionsDiffCommandOutput extends GetSchemaVersionsDiffResponse, __MetadataBearer {}

/**
 * @public
 * <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p>
 *          <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSchemaVersionsDiffCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSchemaVersionsDiffCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetSchemaVersionsDiffInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 *   FirstSchemaVersionNumber: { // SchemaVersionNumber
 *     LatestVersion: true || false,
 *     VersionNumber: Number("long"),
 *   },
 *   SecondSchemaVersionNumber: {
 *     LatestVersion: true || false,
 *     VersionNumber: Number("long"),
 *   },
 *   SchemaDiffType: "SYNTAX_DIFF", // required
 * };
 * const command = new GetSchemaVersionsDiffCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaVersionsDiffResponse
 * //   Diff: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSchemaVersionsDiffCommandInput - {@link GetSchemaVersionsDiffCommandInput}
 * @returns {@link GetSchemaVersionsDiffCommandOutput}
 * @see {@link GetSchemaVersionsDiffCommandInput} for command's `input` shape.
 * @see {@link GetSchemaVersionsDiffCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetSchemaVersionsDiffCommand extends $Command<
  GetSchemaVersionsDiffCommandInput,
  GetSchemaVersionsDiffCommandOutput,
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
  constructor(readonly input: GetSchemaVersionsDiffCommandInput) {
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
  ): Handler<GetSchemaVersionsDiffCommandInput, GetSchemaVersionsDiffCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSchemaVersionsDiffCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetSchemaVersionsDiffCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetSchemaVersionsDiff",
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
  private serialize(input: GetSchemaVersionsDiffCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSchemaVersionsDiffCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSchemaVersionsDiffCommandOutput> {
    return de_GetSchemaVersionsDiffCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
