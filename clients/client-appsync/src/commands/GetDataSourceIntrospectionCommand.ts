// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataSourceIntrospectionRequest, GetDataSourceIntrospectionResponse } from "../models/models_0";
import { de_GetDataSourceIntrospectionCommand, se_GetDataSourceIntrospectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataSourceIntrospectionCommand}.
 */
export interface GetDataSourceIntrospectionCommandInput extends GetDataSourceIntrospectionRequest {}
/**
 * @public
 *
 * The output of {@link GetDataSourceIntrospectionCommand}.
 */
export interface GetDataSourceIntrospectionCommandOutput extends GetDataSourceIntrospectionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the record of an existing introspection. If the retrieval is successful, the
 *          result of the instrospection will also be returned. If the retrieval fails the operation,
 *          an error message will be returned instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetDataSourceIntrospectionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetDataSourceIntrospectionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // GetDataSourceIntrospectionRequest
 *   introspectionId: "STRING_VALUE", // required
 *   includeModelsSDL: true || false,
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetDataSourceIntrospectionCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSourceIntrospectionResponse
 * //   introspectionId: "STRING_VALUE",
 * //   introspectionStatus: "PROCESSING" || "FAILED" || "SUCCESS",
 * //   introspectionStatusDetail: "STRING_VALUE",
 * //   introspectionResult: { // DataSourceIntrospectionResult
 * //     models: [ // DataSourceIntrospectionModels
 * //       { // DataSourceIntrospectionModel
 * //         name: "STRING_VALUE",
 * //         fields: [ // DataSourceIntrospectionModelFields
 * //           { // DataSourceIntrospectionModelField
 * //             name: "STRING_VALUE",
 * //             type: { // DataSourceIntrospectionModelFieldType
 * //               kind: "STRING_VALUE",
 * //               name: "STRING_VALUE",
 * //               type: {
 * //                 kind: "STRING_VALUE",
 * //                 name: "STRING_VALUE",
 * //                 type: "<DataSourceIntrospectionModelFieldType>",
 * //                 values: [ // DataSourceIntrospectionModelFieldTypeValues
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               values: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             length: Number("long"),
 * //           },
 * //         ],
 * //         primaryKey: { // DataSourceIntrospectionModelIndex
 * //           name: "STRING_VALUE",
 * //           fields: [ // DataSourceIntrospectionModelIndexFields
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         indexes: [ // DataSourceIntrospectionModelIndexes
 * //           {
 * //             name: "STRING_VALUE",
 * //             fields: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         sdl: "STRING_VALUE",
 * //       },
 * //     ],
 * //     nextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataSourceIntrospectionCommandInput - {@link GetDataSourceIntrospectionCommandInput}
 * @returns {@link GetDataSourceIntrospectionCommandOutput}
 * @see {@link GetDataSourceIntrospectionCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceIntrospectionCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 * @public
 */
export class GetDataSourceIntrospectionCommand extends $Command
  .classBuilder<
    GetDataSourceIntrospectionCommandInput,
    GetDataSourceIntrospectionCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "GetDataSourceIntrospection", {})
  .n("AppSyncClient", "GetDataSourceIntrospectionCommand")
  .f(void 0, void 0)
  .ser(se_GetDataSourceIntrospectionCommand)
  .de(de_GetDataSourceIntrospectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataSourceIntrospectionRequest;
      output: GetDataSourceIntrospectionResponse;
    };
    sdk: {
      input: GetDataSourceIntrospectionCommandInput;
      output: GetDataSourceIntrospectionCommandOutput;
    };
  };
}
