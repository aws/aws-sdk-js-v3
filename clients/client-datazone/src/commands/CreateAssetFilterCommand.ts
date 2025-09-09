// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAssetFilterInput,
  CreateAssetFilterInputFilterSensitiveLog,
  CreateAssetFilterOutput,
  CreateAssetFilterOutputFilterSensitiveLog,
} from "../models/models_2";
import { de_CreateAssetFilterCommand, se_CreateAssetFilterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAssetFilterCommand}.
 */
export interface CreateAssetFilterCommandInput extends CreateAssetFilterInput {}
/**
 * @public
 *
 * The output of {@link CreateAssetFilterCommand}.
 */
export interface CreateAssetFilterCommandOutput extends CreateAssetFilterOutput, __MetadataBearer {}

/**
 * <p>Creates a data asset filter.</p> <p>Asset filters provide a sophisticated way to create controlled views of data assets by selecting specific columns or applying row-level filters. This capability is crucial for organizations that need to share data while maintaining security and privacy controls. For example, your database might be filtered to show only non-PII fields to certain users, or sales data might be filtered by region for different regional teams. Asset filters enable fine-grained access control while maintaining a single source of truth.</p> <p>Prerequisites:</p> <ul> <li> <p>A valid domain (<code>--domain-identifier</code>) must exist. </p> </li> <li> <p>A data asset (<code>--asset-identifier</code>) must already be created under that domain.</p> </li> <li> <p>The asset must have the referenced columns available in its schema for column-based filtering.</p> </li> <li> <p>You cannot specify both (<code>columnConfiguration</code>, <code>rowConfiguration</code>)at the same time.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateAssetFilterCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateAssetFilterCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateAssetFilterInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   assetIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
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
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAssetFilterCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssetFilterOutput
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
 * @param CreateAssetFilterCommandInput - {@link CreateAssetFilterCommandInput}
 * @returns {@link CreateAssetFilterCommandOutput}
 * @see {@link CreateAssetFilterCommandInput} for command's `input` shape.
 * @see {@link CreateAssetFilterCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
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
export class CreateAssetFilterCommand extends $Command
  .classBuilder<
    CreateAssetFilterCommandInput,
    CreateAssetFilterCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "CreateAssetFilter", {})
  .n("DataZoneClient", "CreateAssetFilterCommand")
  .f(CreateAssetFilterInputFilterSensitiveLog, CreateAssetFilterOutputFilterSensitiveLog)
  .ser(se_CreateAssetFilterCommand)
  .de(de_CreateAssetFilterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssetFilterInput;
      output: CreateAssetFilterOutput;
    };
    sdk: {
      input: CreateAssetFilterCommandInput;
      output: CreateAssetFilterCommandOutput;
    };
  };
}
