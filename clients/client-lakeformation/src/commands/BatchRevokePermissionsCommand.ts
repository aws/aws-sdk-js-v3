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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { BatchRevokePermissionsRequest, BatchRevokePermissionsResponse } from "../models/models_0";
import { de_BatchRevokePermissionsCommand, se_BatchRevokePermissionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchRevokePermissionsCommand}.
 */
export interface BatchRevokePermissionsCommandInput extends BatchRevokePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link BatchRevokePermissionsCommand}.
 */
export interface BatchRevokePermissionsCommandOutput extends BatchRevokePermissionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Batch operation to revoke permissions from the principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, BatchRevokePermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, BatchRevokePermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // BatchRevokePermissionsRequest
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
 * const command = new BatchRevokePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchRevokePermissionsResponse
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
 * @param BatchRevokePermissionsCommandInput - {@link BatchRevokePermissionsCommandInput}
 * @returns {@link BatchRevokePermissionsCommandOutput}
 * @see {@link BatchRevokePermissionsCommandInput} for command's `input` shape.
 * @see {@link BatchRevokePermissionsCommandOutput} for command's `response` shape.
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
export class BatchRevokePermissionsCommand extends $Command<
  BatchRevokePermissionsCommandInput,
  BatchRevokePermissionsCommandOutput,
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
  constructor(readonly input: BatchRevokePermissionsCommandInput) {
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
  ): Handler<BatchRevokePermissionsCommandInput, BatchRevokePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchRevokePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "BatchRevokePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "BatchRevokePermissions",
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
  private serialize(input: BatchRevokePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchRevokePermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchRevokePermissionsCommandOutput> {
    return de_BatchRevokePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
