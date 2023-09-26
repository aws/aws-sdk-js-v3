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
import { GetEffectivePermissionsForPathRequest, GetEffectivePermissionsForPathResponse } from "../models/models_0";
import {
  de_GetEffectivePermissionsForPathCommand,
  se_GetEffectivePermissionsForPathCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEffectivePermissionsForPathCommand}.
 */
export interface GetEffectivePermissionsForPathCommandInput extends GetEffectivePermissionsForPathRequest {}
/**
 * @public
 *
 * The output of {@link GetEffectivePermissionsForPathCommand}.
 */
export interface GetEffectivePermissionsForPathCommandOutput
  extends GetEffectivePermissionsForPathResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the Lake Formation permissions for a specified table or database resource located
 *       at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetEffectivePermissionsForPathCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetEffectivePermissionsForPathCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // GetEffectivePermissionsForPathRequest
 *   CatalogId: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetEffectivePermissionsForPathCommand(input);
 * const response = await client.send(command);
 * // { // GetEffectivePermissionsForPathResponse
 * //   Permissions: [ // PrincipalResourcePermissionsList
 * //     { // PrincipalResourcePermissions
 * //       Principal: { // DataLakePrincipal
 * //         DataLakePrincipalIdentifier: "STRING_VALUE",
 * //       },
 * //       Resource: { // Resource
 * //         Catalog: {},
 * //         Database: { // DatabaseResource
 * //           CatalogId: "STRING_VALUE",
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         Table: { // TableResource
 * //           CatalogId: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE",
 * //           TableWildcard: {},
 * //         },
 * //         TableWithColumns: { // TableWithColumnsResource
 * //           CatalogId: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //           ColumnNames: [ // ColumnNames
 * //             "STRING_VALUE",
 * //           ],
 * //           ColumnWildcard: { // ColumnWildcard
 * //             ExcludedColumnNames: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         DataLocation: { // DataLocationResource
 * //           CatalogId: "STRING_VALUE",
 * //           ResourceArn: "STRING_VALUE", // required
 * //         },
 * //         DataCellsFilter: { // DataCellsFilterResource
 * //           TableCatalogId: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE",
 * //           TableName: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //         LFTag: { // LFTagKeyResource
 * //           CatalogId: "STRING_VALUE",
 * //           TagKey: "STRING_VALUE", // required
 * //           TagValues: [ // TagValueList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         LFTagPolicy: { // LFTagPolicyResource
 * //           CatalogId: "STRING_VALUE",
 * //           ResourceType: "DATABASE" || "TABLE", // required
 * //           Expression: [ // Expression // required
 * //             { // LFTag
 * //               TagKey: "STRING_VALUE", // required
 * //               TagValues: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       Permissions: [ // PermissionList
 * //         "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION",
 * //       ],
 * //       PermissionsWithGrantOption: [
 * //         "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION",
 * //       ],
 * //       AdditionalDetails: { // DetailsMap
 * //         ResourceShare: [ // ResourceShareList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       LastUpdatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEffectivePermissionsForPathCommandInput - {@link GetEffectivePermissionsForPathCommandInput}
 * @returns {@link GetEffectivePermissionsForPathCommandOutput}
 * @see {@link GetEffectivePermissionsForPathCommandInput} for command's `input` shape.
 * @see {@link GetEffectivePermissionsForPathCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
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
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class GetEffectivePermissionsForPathCommand extends $Command<
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
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
  constructor(readonly input: GetEffectivePermissionsForPathCommandInput) {
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
  ): Handler<GetEffectivePermissionsForPathCommandInput, GetEffectivePermissionsForPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEffectivePermissionsForPathCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "GetEffectivePermissionsForPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "GetEffectivePermissionsForPath",
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
  private serialize(
    input: GetEffectivePermissionsForPathCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetEffectivePermissionsForPathCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEffectivePermissionsForPathCommandOutput> {
    return de_GetEffectivePermissionsForPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
