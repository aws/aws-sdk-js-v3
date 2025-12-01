// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAssetFilterInput } from "../models/models_1";
import type { GetAssetFilterOutput } from "../models/models_2";
import { GetAssetFilter } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets an asset filter.</p> <p>Prerequisites:</p> <ul> <li> <p>Domain (<code>--domain-identifier</code>), asset (<code>--asset-identifier</code>), and filter (<code>--identifier</code>) must all exist. </p> </li> <li> <p>The asset filter should not have been deleted.</p> </li> <li> <p>The asset must still exist (since the filter is linked to it).</p> </li> </ul>
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
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetAssetFilterCommand extends $Command
  .classBuilder<
    GetAssetFilterCommandInput,
    GetAssetFilterCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetAssetFilter", {})
  .n("DataZoneClient", "GetAssetFilterCommand")
  .sc(GetAssetFilter)
  .build() {
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
