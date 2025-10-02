// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCodegenJobRequest, GetCodegenJobResponse } from "../models/models_0";
import { de_GetCodegenJobCommand, se_GetCodegenJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCodegenJobCommand}.
 */
export interface GetCodegenJobCommandInput extends GetCodegenJobRequest {}
/**
 * @public
 *
 * The output of {@link GetCodegenJobCommand}.
 */
export interface GetCodegenJobCommandOutput extends GetCodegenJobResponse, __MetadataBearer {}

/**
 * <p>Returns an existing code generation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, GetCodegenJobCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, GetCodegenJobCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // GetCodegenJobRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetCodegenJobCommand(input);
 * const response = await client.send(command);
 * // { // GetCodegenJobResponse
 * //   job: { // CodegenJob
 * //     id: "STRING_VALUE", // required
 * //     appId: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     renderConfig: { // CodegenJobRenderConfig Union: only one key present
 * //       react: { // ReactStartCodegenJobData
 * //         module: "es2020" || "esnext",
 * //         target: "es2015" || "es2020",
 * //         script: "jsx" || "tsx" || "js",
 * //         renderTypeDeclarations: true || false,
 * //         inlineSourceMap: true || false,
 * //         apiConfiguration: { // ApiConfiguration Union: only one key present
 * //           graphQLConfig: { // GraphQLRenderConfig
 * //             typesFilePath: "STRING_VALUE", // required
 * //             queriesFilePath: "STRING_VALUE", // required
 * //             mutationsFilePath: "STRING_VALUE", // required
 * //             subscriptionsFilePath: "STRING_VALUE", // required
 * //             fragmentsFilePath: "STRING_VALUE", // required
 * //           },
 * //           dataStoreConfig: {},
 * //           noApiConfig: {},
 * //         },
 * //         dependencies: { // ReactCodegenDependencies
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     genericDataSchema: { // CodegenJobGenericDataSchema
 * //       dataSourceType: "DataStore", // required
 * //       models: { // CodegenGenericDataModels // required
 * //         "<keys>": { // CodegenGenericDataModel
 * //           fields: { // CodegenGenericDataFields // required
 * //             "<keys>": { // CodegenGenericDataField
 * //               dataType: "ID" || "String" || "Int" || "Float" || "AWSDate" || "AWSTime" || "AWSDateTime" || "AWSTimestamp" || "AWSEmail" || "AWSURL" || "AWSIPAddress" || "Boolean" || "AWSJSON" || "AWSPhone" || "Enum" || "Model" || "NonModel", // required
 * //               dataTypeValue: "STRING_VALUE", // required
 * //               required: true || false, // required
 * //               readOnly: true || false, // required
 * //               isArray: true || false, // required
 * //               relationship: { // CodegenGenericDataRelationshipType
 * //                 type: "HAS_MANY" || "HAS_ONE" || "BELONGS_TO", // required
 * //                 relatedModelName: "STRING_VALUE", // required
 * //                 relatedModelFields: [ // RelatedModelFieldsList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 canUnlinkAssociatedModel: true || false,
 * //                 relatedJoinFieldName: "STRING_VALUE",
 * //                 relatedJoinTableName: "STRING_VALUE",
 * //                 belongsToFieldOnRelatedModel: "STRING_VALUE",
 * //                 associatedFields: [ // AssociatedFieldsList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 isHasManyIndex: true || false,
 * //               },
 * //             },
 * //           },
 * //           isJoinTable: true || false,
 * //           primaryKeys: [ // CodegenPrimaryKeysList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       enums: { // CodegenGenericDataEnums // required
 * //         "<keys>": { // CodegenGenericDataEnum
 * //           values: [ // CodegenGenericDataEnumValuesList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       nonModels: { // CodegenGenericDataNonModels // required
 * //         "<keys>": { // CodegenGenericDataNonModel
 * //           fields: { // CodegenGenericDataNonModelFields // required
 * //             "<keys>": {
 * //               dataType: "ID" || "String" || "Int" || "Float" || "AWSDate" || "AWSTime" || "AWSDateTime" || "AWSTimestamp" || "AWSEmail" || "AWSURL" || "AWSIPAddress" || "Boolean" || "AWSJSON" || "AWSPhone" || "Enum" || "Model" || "NonModel", // required
 * //               dataTypeValue: "STRING_VALUE", // required
 * //               required: true || false, // required
 * //               readOnly: true || false, // required
 * //               isArray: true || false, // required
 * //               relationship: {
 * //                 type: "HAS_MANY" || "HAS_ONE" || "BELONGS_TO", // required
 * //                 relatedModelName: "STRING_VALUE", // required
 * //                 relatedModelFields: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 canUnlinkAssociatedModel: true || false,
 * //                 relatedJoinFieldName: "STRING_VALUE",
 * //                 relatedJoinTableName: "STRING_VALUE",
 * //                 belongsToFieldOnRelatedModel: "STRING_VALUE",
 * //                 associatedFields: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 isHasManyIndex: true || false,
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //     autoGenerateForms: true || false,
 * //     features: { // CodegenFeatureFlags
 * //       isRelationshipSupported: true || false,
 * //       isNonModelSupported: true || false,
 * //     },
 * //     status: "in_progress" || "failed" || "succeeded",
 * //     statusMessage: "STRING_VALUE",
 * //     asset: { // CodegenJobAsset
 * //       downloadUrl: "STRING_VALUE",
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     dependencies: [ // CodegenDependencies
 * //       { // CodegenDependency
 * //         name: "STRING_VALUE",
 * //         supportedVersion: "STRING_VALUE",
 * //         isSemVer: true || false,
 * //         reason: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCodegenJobCommandInput - {@link GetCodegenJobCommandInput}
 * @returns {@link GetCodegenJobCommandOutput}
 * @see {@link GetCodegenJobCommandInput} for command's `input` shape.
 * @see {@link GetCodegenJobCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 *
 * @public
 */
export class GetCodegenJobCommand extends $Command
  .classBuilder<
    GetCodegenJobCommandInput,
    GetCodegenJobCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyUIBuilder", "GetCodegenJob", {})
  .n("AmplifyUIBuilderClient", "GetCodegenJobCommand")
  .f(void 0, void 0)
  .ser(se_GetCodegenJobCommand)
  .de(de_GetCodegenJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCodegenJobRequest;
      output: GetCodegenJobResponse;
    };
    sdk: {
      input: GetCodegenJobCommandInput;
      output: GetCodegenJobCommandOutput;
    };
  };
}
