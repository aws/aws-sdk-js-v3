// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAssetFilterInput, UpdateAssetFilterOutput } from "../models/models_2";
import { UpdateAssetFilter } from "../schemas/schemas_6_Asset";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssetFilterCommand}.
 */
export interface UpdateAssetFilterCommandInput extends UpdateAssetFilterInput {}
/**
 * @public
 *
 * The output of {@link UpdateAssetFilterCommand}.
 */
export interface UpdateAssetFilterCommandOutput extends UpdateAssetFilterOutput, __MetadataBearer {}

/**
 * <p>Updates an asset filter.</p> <p>Prerequisites:</p> <ul> <li> <p>The domain, asset, and asset filter identifier must all exist. </p> </li> <li> <p>The asset must contain the columns being referenced in the update.</p> </li> <li> <p>If applying a row filter, ensure the column referenced in the expression exists in the asset schema.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateAssetFilterCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateAssetFilterCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateAssetFilterInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   assetIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   configuration: { // AssetFilterConfiguration Union: only one key present
 *     columnConfiguration: { // ColumnFilterConfiguration
 *       includedColumnNames: [ // ColumnNameList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     rowConfiguration: { // RowFilterConfiguration
 *       rowFilter: { // RowFilter Union: only one key present
 *         expression: { // RowFilterExpression Union: only one key present
 *           equalTo: { // EqualToExpression
 *             columnName: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *           notEqualTo: { // NotEqualToExpression
 *             columnName: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *           greaterThan: { // GreaterThanExpression
 *             columnName: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *           lessThan: { // LessThanExpression
 *             columnName: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *           greaterThanOrEqualTo: { // GreaterThanOrEqualToExpression
 *             columnName: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *           lessThanOrEqualTo: { // LessThanOrEqualToExpression
 *             columnName: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *           isNull: { // IsNullExpression
 *             columnName: "STRING_VALUE", // required
 *           },
 *           isNotNull: { // IsNotNullExpression
 *             columnName: "STRING_VALUE", // required
 *           },
 *           in: { // InExpression
 *             columnName: "STRING_VALUE", // required
 *             values: [ // StringList // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *           notIn: { // NotInExpression
 *             columnName: "STRING_VALUE", // required
 *             values: [ // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *           like: { // LikeExpression
 *             columnName: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *           notLike: { // NotLikeExpression
 *             columnName: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *         },
 *         and: [ // RowFilterList
 *           {//  Union: only one key present
 *             expression: {//  Union: only one key present
 *               equalTo: {
 *                 columnName: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *               notEqualTo: {
 *                 columnName: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *               greaterThan: {
 *                 columnName: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *               lessThan: {
 *                 columnName: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *               greaterThanOrEqualTo: {
 *                 columnName: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *               lessThanOrEqualTo: {
 *                 columnName: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *               isNull: {
 *                 columnName: "STRING_VALUE", // required
 *               },
 *               isNotNull: {
 *                 columnName: "STRING_VALUE", // required
 *               },
 *               in: {
 *                 columnName: "STRING_VALUE", // required
 *                 values: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               notIn: {
 *                 columnName: "STRING_VALUE", // required
 *                 values: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               like: {
 *                 columnName: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *               notLike: {
 *                 columnName: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *             },
 *             and: [
 *               "<RowFilter>",
 *             ],
 *             or: [
 *               "<RowFilter>",
 *             ],
 *           },
 *         ],
 *         or: [
 *           "<RowFilter>",
 *         ],
 *       },
 *       sensitive: true || false,
 *     },
 *   },
 * };
 * const command = new UpdateAssetFilterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssetFilterOutput
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
 * @param UpdateAssetFilterCommandInput - {@link UpdateAssetFilterCommandInput}
 * @returns {@link UpdateAssetFilterCommandOutput}
 * @see {@link UpdateAssetFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetFilterCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class UpdateAssetFilterCommand extends $Command
  .classBuilder<
    UpdateAssetFilterCommandInput,
    UpdateAssetFilterCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "UpdateAssetFilter", {})
  .n("DataZoneClient", "UpdateAssetFilterCommand")
  .sc(UpdateAssetFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssetFilterInput;
      output: UpdateAssetFilterOutput;
    };
    sdk: {
      input: UpdateAssetFilterCommandInput;
      output: UpdateAssetFilterCommandOutput;
    };
  };
}
