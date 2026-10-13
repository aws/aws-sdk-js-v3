// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRLSPolicyAttachmentsRequest, ListRLSPolicyAttachmentsResponse } from "../models/models_0";
import { ListRLSPolicyAttachments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRLSPolicyAttachmentsCommand}.
 */
export interface ListRLSPolicyAttachmentsCommandInput extends ListRLSPolicyAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListRLSPolicyAttachmentsCommand}.
 */
export interface ListRLSPolicyAttachmentsCommandOutput extends ListRLSPolicyAttachmentsResponse, __MetadataBearer {}

/**
 * <p>Lists the row-level security policy attachments in the Data Catalog. You can filter the results by resource, principal, or policy name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListRLSPolicyAttachmentsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListRLSPolicyAttachmentsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // ListRLSPolicyAttachmentsRequest
 *   Resource: { // Resource
 *     Catalog: { // CatalogResource
 *       Id: "STRING_VALUE",
 *     },
 *     Database: { // DatabaseResource
 *       CatalogId: "STRING_VALUE",
 *       Name: "STRING_VALUE", // required
 *     },
 *     Table: { // TableResource
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE", // required
 *       Name: "STRING_VALUE",
 *       TableWildcard: {},
 *     },
 *     TableWithColumns: { // TableWithColumnsResource
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE", // required
 *       Name: "STRING_VALUE", // required
 *       ColumnNames: [ // ColumnNames
 *         "STRING_VALUE",
 *       ],
 *       ColumnWildcard: { // ColumnWildcard
 *         ExcludedColumnNames: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     DataLocation: { // DataLocationResource
 *       CatalogId: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE", // required
 *     },
 *     DataCellsFilter: { // DataCellsFilterResource
 *       TableCatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *     },
 *     LFTag: { // LFTagKeyResource
 *       CatalogId: "STRING_VALUE",
 *       TagKey: "STRING_VALUE", // required
 *       TagValues: [ // TagValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     LFTagPolicy: { // LFTagPolicyResource
 *       CatalogId: "STRING_VALUE",
 *       ResourceType: "DATABASE" || "TABLE", // required
 *       Expression: [ // Expression
 *         { // LFTag
 *           TagKey: "STRING_VALUE", // required
 *           TagValues: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       ExpressionName: "STRING_VALUE",
 *     },
 *     LFTagExpression: { // LFTagExpressionResource
 *       CatalogId: "STRING_VALUE",
 *       Name: "STRING_VALUE", // required
 *     },
 *     RLSPolicy: { // RLSPolicyResource
 *       CatalogId: "STRING_VALUE",
 *       Name: "STRING_VALUE", // required
 *     },
 *   },
 *   Principal: { // DataLakePrincipal
 *     DataLakePrincipalIdentifier: "STRING_VALUE",
 *   },
 *   PolicyName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRLSPolicyAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListRLSPolicyAttachmentsResponse
 * //   RLSPolicyAttachments: [ // RLSPolicyAttachmentList
 * //     { // RLSPolicyAttachment
 * //       CatalogId: "STRING_VALUE",
 * //       PolicyName: "STRING_VALUE",
 * //       Principal: { // DataLakePrincipal
 * //         DataLakePrincipalIdentifier: "STRING_VALUE",
 * //       },
 * //       Resource: { // Resource
 * //         Catalog: { // CatalogResource
 * //           Id: "STRING_VALUE",
 * //         },
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
 * //           Expression: [ // Expression
 * //             { // LFTag
 * //               TagKey: "STRING_VALUE", // required
 * //               TagValues: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           ExpressionName: "STRING_VALUE",
 * //         },
 * //         LFTagExpression: { // LFTagExpressionResource
 * //           CatalogId: "STRING_VALUE",
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         RLSPolicy: { // RLSPolicyResource
 * //           CatalogId: "STRING_VALUE",
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Condition: { // Condition
 * //         Expression: "STRING_VALUE",
 * //       },
 * //       DefaultRLSPolicy: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRLSPolicyAttachmentsCommandInput - {@link ListRLSPolicyAttachmentsCommandInput}
 * @returns {@link ListRLSPolicyAttachmentsCommandOutput}
 * @see {@link ListRLSPolicyAttachmentsCommandInput} for command's `input` shape.
 * @see {@link ListRLSPolicyAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
 *
 * @public
 */
export class ListRLSPolicyAttachmentsCommand extends command<ListRLSPolicyAttachmentsCommandInput, ListRLSPolicyAttachmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListRLSPolicyAttachments",
  ListRLSPolicyAttachments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRLSPolicyAttachmentsRequest;
      output: ListRLSPolicyAttachmentsResponse;
    };
    sdk: {
      input: ListRLSPolicyAttachmentsCommandInput;
      output: ListRLSPolicyAttachmentsCommandOutput;
    };
  };
}
