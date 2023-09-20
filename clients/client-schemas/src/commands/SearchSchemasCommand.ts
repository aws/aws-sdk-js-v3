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

import { SearchSchemasRequest, SearchSchemasResponse } from "../models/models_0";
import { de_SearchSchemasCommand, se_SearchSchemasCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchSchemasCommand}.
 */
export interface SearchSchemasCommandInput extends SearchSchemasRequest {}
/**
 * @public
 *
 * The output of {@link SearchSchemasCommand}.
 */
export interface SearchSchemasCommandOutput extends SearchSchemasResponse, __MetadataBearer {}

/**
 * @public
 * <p>Search the schemas</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, SearchSchemasCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, SearchSchemasCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // SearchSchemasRequest
 *   Keywords: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RegistryName: "STRING_VALUE", // required
 * };
 * const command = new SearchSchemasCommand(input);
 * const response = await client.send(command);
 * // { // SearchSchemasResponse
 * //   NextToken: "STRING_VALUE",
 * //   Schemas: [ // __listOfSearchSchemaSummary
 * //     { // SearchSchemaSummary
 * //       RegistryName: "STRING_VALUE",
 * //       SchemaArn: "STRING_VALUE",
 * //       SchemaName: "STRING_VALUE",
 * //       SchemaVersions: [ // __listOfSearchSchemaVersionSummary
 * //         { // SearchSchemaVersionSummary
 * //           CreatedDate: new Date("TIMESTAMP"),
 * //           SchemaVersion: "STRING_VALUE",
 * //           Type: "OpenApi3" || "JSONSchemaDraft4",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchSchemasCommandInput - {@link SearchSchemasCommandInput}
 * @returns {@link SearchSchemasCommandOutput}
 * @see {@link SearchSchemasCommandInput} for command's `input` shape.
 * @see {@link SearchSchemasCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 */
export class SearchSchemasCommand extends $Command<
  SearchSchemasCommandInput,
  SearchSchemasCommandOutput,
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
  constructor(readonly input: SearchSchemasCommandInput) {
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
  ): Handler<SearchSchemasCommandInput, SearchSchemasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchSchemasCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "SearchSchemasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "schemas",
        operation: "SearchSchemas",
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
  private serialize(input: SearchSchemasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchSchemasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchSchemasCommandOutput> {
    return de_SearchSchemasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
