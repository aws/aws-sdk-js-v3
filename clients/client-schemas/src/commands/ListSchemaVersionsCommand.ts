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

import { ListSchemaVersionsRequest, ListSchemaVersionsResponse } from "../models/models_0";
import { de_ListSchemaVersionsCommand, se_ListSchemaVersionsCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSchemaVersionsCommand}.
 */
export interface ListSchemaVersionsCommandInput extends ListSchemaVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSchemaVersionsCommand}.
 */
export interface ListSchemaVersionsCommandOutput extends ListSchemaVersionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of the schema versions and related information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListSchemaVersionsCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListSchemaVersionsCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // ListSchemaVersionsRequest
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 * };
 * const command = new ListSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSchemaVersionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   SchemaVersions: [ // __listOfSchemaVersionSummary
 * //     { // SchemaVersionSummary
 * //       SchemaArn: "STRING_VALUE",
 * //       SchemaName: "STRING_VALUE",
 * //       SchemaVersion: "STRING_VALUE",
 * //       Type: "OpenApi3" || "JSONSchemaDraft4",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSchemaVersionsCommandInput - {@link ListSchemaVersionsCommandInput}
 * @returns {@link ListSchemaVersionsCommandOutput}
 * @see {@link ListSchemaVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaVersionsCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 */
export class ListSchemaVersionsCommand extends $Command<
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
  SchemasClientResolvedConfig
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
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSchemaVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "ListSchemaVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "schemas",
        operation: "ListSchemaVersions",
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
  private serialize(input: ListSchemaVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSchemaVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSchemaVersionsCommandOutput> {
    return de_ListSchemaVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
