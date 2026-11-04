// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataSourceIntrospectionRequest, GetDataSourceIntrospectionResponse } from "../models/models_0";
import { GetDataSourceIntrospection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the record of an existing introspection. If the retrieval is successful, the result of the instrospection will also be returned. If the retrieval fails the operation, an error message will be returned instead.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetDataSourceIntrospectionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetDataSourceIntrospectionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
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
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class GetDataSourceIntrospectionCommand extends command<GetDataSourceIntrospectionCommandInput, GetDataSourceIntrospectionCommandOutput>(
  _ep0,
  _mw0,
  "GetDataSourceIntrospection",
  GetDataSourceIntrospection$
) {
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
