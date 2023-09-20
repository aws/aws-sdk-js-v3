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
import { GetDatabasesRequest, GetDatabasesResponse } from "../models/models_1";
import { de_GetDatabasesCommand, se_GetDatabasesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDatabasesCommand}.
 */
export interface GetDatabasesCommandInput extends GetDatabasesRequest {}
/**
 * @public
 *
 * The output of {@link GetDatabasesCommand}.
 */
export interface GetDatabasesCommandOutput extends GetDatabasesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves all databases defined in a given Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDatabasesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDatabasesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetDatabasesRequest
 *   CatalogId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ResourceShareType: "FOREIGN" || "ALL" || "FEDERATED",
 * };
 * const command = new GetDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // GetDatabasesResponse
 * //   DatabaseList: [ // DatabaseList // required
 * //     { // Database
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       LocationUri: "STRING_VALUE",
 * //       Parameters: { // ParametersMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       CreateTableDefaultPermissions: [ // PrincipalPermissionsList
 * //         { // PrincipalPermissions
 * //           Principal: { // DataLakePrincipal
 * //             DataLakePrincipalIdentifier: "STRING_VALUE",
 * //           },
 * //           Permissions: [ // PermissionList
 * //             "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS",
 * //           ],
 * //         },
 * //       ],
 * //       TargetDatabase: { // DatabaseIdentifier
 * //         CatalogId: "STRING_VALUE",
 * //         DatabaseName: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
 * //       CatalogId: "STRING_VALUE",
 * //       FederatedDatabase: { // FederatedDatabase
 * //         Identifier: "STRING_VALUE",
 * //         ConnectionName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDatabasesCommandInput - {@link GetDatabasesCommandInput}
 * @returns {@link GetDatabasesCommandOutput}
 * @see {@link GetDatabasesCommandInput} for command's `input` shape.
 * @see {@link GetDatabasesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
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
export class GetDatabasesCommand extends $Command<
  GetDatabasesCommandInput,
  GetDatabasesCommandOutput,
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
  constructor(readonly input: GetDatabasesCommandInput) {
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
  ): Handler<GetDatabasesCommandInput, GetDatabasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDatabasesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDatabasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetDatabases",
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
  private serialize(input: GetDatabasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDatabasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDatabasesCommandOutput> {
    return de_GetDatabasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
