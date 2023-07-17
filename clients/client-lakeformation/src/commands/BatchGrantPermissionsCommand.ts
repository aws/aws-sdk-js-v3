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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { BatchGrantPermissionsRequest, BatchGrantPermissionsResponse } from "../models/models_0";
import { de_BatchGrantPermissionsCommand, se_BatchGrantPermissionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGrantPermissionsCommand}.
 */
export interface BatchGrantPermissionsCommandInput extends BatchGrantPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGrantPermissionsCommand}.
 */
export interface BatchGrantPermissionsCommandOutput extends BatchGrantPermissionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Batch operation to grant permissions to the principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, BatchGrantPermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, BatchGrantPermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // BatchGrantPermissionsRequest
 *   CatalogId: "STRING_VALUE",
 *   Entries: [ // BatchPermissionsRequestEntryList // required
 *     { // BatchPermissionsRequestEntry
 *       Id: "STRING_VALUE", // required
 *       Principal: { // DataLakePrincipal
 *         DataLakePrincipalIdentifier: "STRING_VALUE",
 *       },
 *       Resource: { // Resource
 *         Catalog: {},
 *         Database: { // DatabaseResource
 *           CatalogId: "STRING_VALUE",
 *           Name: "STRING_VALUE", // required
 *         },
 *         Table: { // TableResource
 *           CatalogId: "STRING_VALUE",
 *           DatabaseName: "STRING_VALUE", // required
 *           Name: "STRING_VALUE",
 *           TableWildcard: {},
 *         },
 *         TableWithColumns: { // TableWithColumnsResource
 *           CatalogId: "STRING_VALUE",
 *           DatabaseName: "STRING_VALUE", // required
 *           Name: "STRING_VALUE", // required
 *           ColumnNames: [ // ColumnNames
 *             "STRING_VALUE",
 *           ],
 *           ColumnWildcard: { // ColumnWildcard
 *             ExcludedColumnNames: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *         DataLocation: { // DataLocationResource
 *           CatalogId: "STRING_VALUE",
 *           ResourceArn: "STRING_VALUE", // required
 *         },
 *         DataCellsFilter: { // DataCellsFilterResource
 *           TableCatalogId: "STRING_VALUE",
 *           DatabaseName: "STRING_VALUE",
 *           TableName: "STRING_VALUE",
 *           Name: "STRING_VALUE",
 *         },
 *         LFTag: { // LFTagKeyResource
 *           CatalogId: "STRING_VALUE",
 *           TagKey: "STRING_VALUE", // required
 *           TagValues: [ // TagValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         LFTagPolicy: { // LFTagPolicyResource
 *           CatalogId: "STRING_VALUE",
 *           ResourceType: "DATABASE" || "TABLE", // required
 *           Expression: [ // Expression // required
 *             { // LFTag
 *               TagKey: "STRING_VALUE", // required
 *               TagValues: [ // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *         },
 *       },
 *       Permissions: [ // PermissionList
 *         "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION",
 *       ],
 *       PermissionsWithGrantOption: [
 *         "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION",
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchGrantPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGrantPermissionsResponse
 * //   Failures: [ // BatchPermissionsFailureList
 * //     { // BatchPermissionsFailureEntry
 * //       RequestEntry: { // BatchPermissionsRequestEntry
 * //         Id: "STRING_VALUE", // required
 * //         Principal: { // DataLakePrincipal
 * //           DataLakePrincipalIdentifier: "STRING_VALUE",
 * //         },
 * //         Resource: { // Resource
 * //           Catalog: {},
 * //           Database: { // DatabaseResource
 * //             CatalogId: "STRING_VALUE",
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //           Table: { // TableResource
 * //             CatalogId: "STRING_VALUE",
 * //             DatabaseName: "STRING_VALUE", // required
 * //             Name: "STRING_VALUE",
 * //             TableWildcard: {},
 * //           },
 * //           TableWithColumns: { // TableWithColumnsResource
 * //             CatalogId: "STRING_VALUE",
 * //             DatabaseName: "STRING_VALUE", // required
 * //             Name: "STRING_VALUE", // required
 * //             ColumnNames: [ // ColumnNames
 * //               "STRING_VALUE",
 * //             ],
 * //             ColumnWildcard: { // ColumnWildcard
 * //               ExcludedColumnNames: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           DataLocation: { // DataLocationResource
 * //             CatalogId: "STRING_VALUE",
 * //             ResourceArn: "STRING_VALUE", // required
 * //           },
 * //           DataCellsFilter: { // DataCellsFilterResource
 * //             TableCatalogId: "STRING_VALUE",
 * //             DatabaseName: "STRING_VALUE",
 * //             TableName: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //           LFTag: { // LFTagKeyResource
 * //             CatalogId: "STRING_VALUE",
 * //             TagKey: "STRING_VALUE", // required
 * //             TagValues: [ // TagValueList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           LFTagPolicy: { // LFTagPolicyResource
 * //             CatalogId: "STRING_VALUE",
 * //             ResourceType: "DATABASE" || "TABLE", // required
 * //             Expression: [ // Expression // required
 * //               { // LFTag
 * //                 TagKey: "STRING_VALUE", // required
 * //                 TagValues: [ // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Permissions: [ // PermissionList
 * //           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION",
 * //         ],
 * //         PermissionsWithGrantOption: [
 * //           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION",
 * //         ],
 * //       },
 * //       Error: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGrantPermissionsCommandInput - {@link BatchGrantPermissionsCommandInput}
 * @returns {@link BatchGrantPermissionsCommandOutput}
 * @see {@link BatchGrantPermissionsCommandInput} for command's `input` shape.
 * @see {@link BatchGrantPermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class BatchGrantPermissionsCommand extends $Command<
  BatchGrantPermissionsCommandInput,
  BatchGrantPermissionsCommandOutput,
  LakeFormationClientResolvedConfig
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
  constructor(readonly input: BatchGrantPermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGrantPermissionsCommandInput, BatchGrantPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGrantPermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "BatchGrantPermissionsCommand";
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
  private serialize(input: BatchGrantPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGrantPermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGrantPermissionsCommandOutput> {
    return de_BatchGrantPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
