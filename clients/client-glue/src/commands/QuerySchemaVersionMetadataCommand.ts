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
import { QuerySchemaVersionMetadataInput, QuerySchemaVersionMetadataResponse } from "../models/models_2";
import { de_QuerySchemaVersionMetadataCommand, se_QuerySchemaVersionMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QuerySchemaVersionMetadataCommand}.
 */
export interface QuerySchemaVersionMetadataCommandInput extends QuerySchemaVersionMetadataInput {}
/**
 * @public
 *
 * The output of {@link QuerySchemaVersionMetadataCommand}.
 */
export interface QuerySchemaVersionMetadataCommandOutput extends QuerySchemaVersionMetadataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Queries for the schema version metadata information. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, QuerySchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, QuerySchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // QuerySchemaVersionMetadataInput
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
 *   MetadataList: [ // MetadataList
 *     { // MetadataKeyValuePair
 *       MetadataKey: "STRING_VALUE",
 *       MetadataValue: "STRING_VALUE",
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new QuerySchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * // { // QuerySchemaVersionMetadataResponse
 * //   MetadataInfoMap: { // MetadataInfoMap
 * //     "<keys>": { // MetadataInfo
 * //       MetadataValue: "STRING_VALUE",
 * //       CreatedTime: "STRING_VALUE",
 * //       OtherMetadataValueList: [ // OtherMetadataValueList
 * //         { // OtherMetadataValueListItem
 * //           MetadataValue: "STRING_VALUE",
 * //           CreatedTime: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   SchemaVersionId: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param QuerySchemaVersionMetadataCommandInput - {@link QuerySchemaVersionMetadataCommandInput}
 * @returns {@link QuerySchemaVersionMetadataCommandOutput}
 * @see {@link QuerySchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link QuerySchemaVersionMetadataCommandOutput} for command's `response` shape.
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
export class QuerySchemaVersionMetadataCommand extends $Command<
  QuerySchemaVersionMetadataCommandInput,
  QuerySchemaVersionMetadataCommandOutput,
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
  constructor(readonly input: QuerySchemaVersionMetadataCommandInput) {
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
  ): Handler<QuerySchemaVersionMetadataCommandInput, QuerySchemaVersionMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, QuerySchemaVersionMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "QuerySchemaVersionMetadataCommand";
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
  private serialize(input: QuerySchemaVersionMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QuerySchemaVersionMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<QuerySchemaVersionMetadataCommandOutput> {
    return de_QuerySchemaVersionMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
