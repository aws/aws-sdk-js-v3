// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAssetFilterInput } from "../models/models_1";
import type { GetAssetFilterOutput } from "../models/models_2";
import { GetAssetFilter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAssetFilterCommand}.
 */
export interface GetAssetFilterCommandInput extends GetAssetFilterInput {}
/**
 * @public
 *
 * The output of {@link GetAssetFilterCommand}.
 */
export interface GetAssetFilterCommandOutput extends GetAssetFilterOutput, __MetadataBearer {}

/**
 * Gets an asset filter.
 *
 * Prerequisites:
 *
 * - Domain (`--domain-identifier`), asset (`--asset-identifier`), and filter (`--identifier`) must all exist.
 * - The asset filter should not have been deleted.
 * - The asset must still exist (since the filter is linked to it).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetAssetFilterCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetAssetFilterCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetAssetFilterInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   assetIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetAssetFilterCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetFilterOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   assetId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "VALID" || "INVALID",
 * //   configuration: { // AssetFilterConfiguration Union: only one key present
 * //     columnConfiguration: { // ColumnFilterConfiguration
 * //       includedColumnNames: [ // ColumnNameList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     rowConfiguration: { // RowFilterConfiguration
 * //       rowFilter: { // RowFilter Union: only one key present
 * //         expression: { // RowFilterExpression Union: only one key present
 * //           equalTo: { // EqualToExpression
 * //             columnName: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //           notEqualTo: { // NotEqualToExpression
 * //             columnName: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //           greaterThan: { // GreaterThanExpression
 * //             columnName: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //           lessThan: { // LessThanExpression
 * //             columnName: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //           greaterThanOrEqualTo: { // GreaterThanOrEqualToExpression
 * //             columnName: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //           lessThanOrEqualTo: { // LessThanOrEqualToExpression
 * //             columnName: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //           isNull: { // IsNullExpression
 * //             columnName: "STRING_VALUE", // required
 * //           },
 * //           isNotNull: { // IsNotNullExpression
 * //             columnName: "STRING_VALUE", // required
 * //           },
 * //           in: { // InExpression
 * //             columnName: "STRING_VALUE", // required
 * //             values: [ // StringList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           notIn: { // NotInExpression
 * //             columnName: "STRING_VALUE", // required
 * //             values: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           like: { // LikeExpression
 * //             columnName: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //           notLike: { // NotLikeExpression
 * //             columnName: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         and: [ // RowFilterList
 * //           {//  Union: only one key present
 * //             expression: {//  Union: only one key present
 * //               equalTo: {
 * //                 columnName: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               notEqualTo: {
 * //                 columnName: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               greaterThan: {
 * //                 columnName: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               lessThan: {
 * //                 columnName: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               greaterThanOrEqualTo: {
 * //                 columnName: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               lessThanOrEqualTo: {
 * //                 columnName: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               isNull: {
 * //                 columnName: "STRING_VALUE", // required
 * //               },
 * //               isNotNull: {
 * //                 columnName: "STRING_VALUE", // required
 * //               },
 * //               in: {
 * //                 columnName: "STRING_VALUE", // required
 * //                 values: [ // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               notIn: {
 * //                 columnName: "STRING_VALUE", // required
 * //                 values: [ // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               like: {
 * //                 columnName: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               notLike: {
 * //                 columnName: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             and: [
 * //               "<RowFilter>",
 * //             ],
 * //             or: [
 * //               "<RowFilter>",
 * //             ],
 * //           },
 * //         ],
 * //         or: [
 * //           "<RowFilter>",
 * //         ],
 * //       },
 * //       sensitive: true || false,
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   errorMessage: "STRING_VALUE",
 * //   effectiveColumnNames: [
 * //     "STRING_VALUE",
 * //   ],
 * //   effectiveRowFilter: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAssetFilterCommandInput - {@link GetAssetFilterCommandInput}
 * @returns {@link GetAssetFilterCommandOutput}
 * @see {@link GetAssetFilterCommandInput} for command's `input` shape.
 * @see {@link GetAssetFilterCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class GetAssetFilterCommand extends command<GetAssetFilterCommandInput, GetAssetFilterCommandOutput>(
  _ep0,
  _mw0,
  "GetAssetFilter",
  GetAssetFilter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetFilterInput;
      output: GetAssetFilterOutput;
    };
    sdk: {
      input: GetAssetFilterCommandInput;
      output: GetAssetFilterCommandOutput;
    };
  };
}
