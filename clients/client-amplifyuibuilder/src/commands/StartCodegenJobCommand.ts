// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AmplifyUIBuilderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartCodegenJobRequest, StartCodegenJobResponse } from "../models/models_0";
import { StartCodegenJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCodegenJobCommand}.
 */
export interface StartCodegenJobCommandInput extends StartCodegenJobRequest {}
/**
 * @public
 *
 * The output of {@link StartCodegenJobCommand}.
 */
export interface StartCodegenJobCommandOutput extends StartCodegenJobResponse, __MetadataBearer {}

/**
 * <p>Starts a code generation job for a specified Amplify app and backend environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, StartCodegenJobCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, StartCodegenJobCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // StartCodegenJobRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   codegenJobToCreate: { // StartCodegenJobData
 *     renderConfig: { // CodegenJobRenderConfig Union: only one key present
 *       react: { // ReactStartCodegenJobData
 *         module: "es2020" || "esnext",
 *         target: "es2015" || "es2020",
 *         script: "jsx" || "tsx" || "js",
 *         renderTypeDeclarations: true || false,
 *         inlineSourceMap: true || false,
 *         apiConfiguration: { // ApiConfiguration Union: only one key present
 *           graphQLConfig: { // GraphQLRenderConfig
 *             typesFilePath: "STRING_VALUE", // required
 *             queriesFilePath: "STRING_VALUE", // required
 *             mutationsFilePath: "STRING_VALUE", // required
 *             subscriptionsFilePath: "STRING_VALUE", // required
 *             fragmentsFilePath: "STRING_VALUE", // required
 *           },
 *           dataStoreConfig: {},
 *           noApiConfig: {},
 *         },
 *         dependencies: { // ReactCodegenDependencies
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *     genericDataSchema: { // CodegenJobGenericDataSchema
 *       dataSourceType: "DataStore", // required
 *       models: { // CodegenGenericDataModels // required
 *         "<keys>": { // CodegenGenericDataModel
 *           fields: { // CodegenGenericDataFields // required
 *             "<keys>": { // CodegenGenericDataField
 *               dataType: "ID" || "String" || "Int" || "Float" || "AWSDate" || "AWSTime" || "AWSDateTime" || "AWSTimestamp" || "AWSEmail" || "AWSURL" || "AWSIPAddress" || "Boolean" || "AWSJSON" || "AWSPhone" || "Enum" || "Model" || "NonModel", // required
 *               dataTypeValue: "STRING_VALUE", // required
 *               required: true || false, // required
 *               readOnly: true || false, // required
 *               isArray: true || false, // required
 *               relationship: { // CodegenGenericDataRelationshipType
 *                 type: "HAS_MANY" || "HAS_ONE" || "BELONGS_TO", // required
 *                 relatedModelName: "STRING_VALUE", // required
 *                 relatedModelFields: [ // RelatedModelFieldsList
 *                   "STRING_VALUE",
 *                 ],
 *                 canUnlinkAssociatedModel: true || false,
 *                 relatedJoinFieldName: "STRING_VALUE",
 *                 relatedJoinTableName: "STRING_VALUE",
 *                 belongsToFieldOnRelatedModel: "STRING_VALUE",
 *                 associatedFields: [ // AssociatedFieldsList
 *                   "STRING_VALUE",
 *                 ],
 *                 isHasManyIndex: true || false,
 *               },
 *             },
 *           },
 *           isJoinTable: true || false,
 *           primaryKeys: [ // CodegenPrimaryKeysList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       enums: { // CodegenGenericDataEnums // required
 *         "<keys>": { // CodegenGenericDataEnum
 *           values: [ // CodegenGenericDataEnumValuesList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       nonModels: { // CodegenGenericDataNonModels // required
 *         "<keys>": { // CodegenGenericDataNonModel
 *           fields: { // CodegenGenericDataNonModelFields // required
 *             "<keys>": {
 *               dataType: "ID" || "String" || "Int" || "Float" || "AWSDate" || "AWSTime" || "AWSDateTime" || "AWSTimestamp" || "AWSEmail" || "AWSURL" || "AWSIPAddress" || "Boolean" || "AWSJSON" || "AWSPhone" || "Enum" || "Model" || "NonModel", // required
 *               dataTypeValue: "STRING_VALUE", // required
 *               required: true || false, // required
 *               readOnly: true || false, // required
 *               isArray: true || false, // required
 *               relationship: {
 *                 type: "HAS_MANY" || "HAS_ONE" || "BELONGS_TO", // required
 *                 relatedModelName: "STRING_VALUE", // required
 *                 relatedModelFields: [
 *                   "STRING_VALUE",
 *                 ],
 *                 canUnlinkAssociatedModel: true || false,
 *                 relatedJoinFieldName: "STRING_VALUE",
 *                 relatedJoinTableName: "STRING_VALUE",
 *                 belongsToFieldOnRelatedModel: "STRING_VALUE",
 *                 associatedFields: [
 *                   "STRING_VALUE",
 *                 ],
 *                 isHasManyIndex: true || false,
 *               },
 *             },
 *           },
 *         },
 *       },
 *     },
 *     autoGenerateForms: true || false,
 *     features: { // CodegenFeatureFlags
 *       isRelationshipSupported: true || false,
 *       isNonModelSupported: true || false,
 *     },
 *     tags: { // Tags
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new StartCodegenJobCommand(input);
 * const response = await client.send(command);
 * // { // StartCodegenJobResponse
 * //   entity: { // CodegenJob
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
 * @param StartCodegenJobCommandInput - {@link StartCodegenJobCommandInput}
 * @returns {@link StartCodegenJobCommandOutput}
 * @see {@link StartCodegenJobCommandInput} for command's `input` shape.
 * @see {@link StartCodegenJobCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
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
export class StartCodegenJobCommand extends $Command
  .classBuilder<
    StartCodegenJobCommandInput,
    StartCodegenJobCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyUIBuilder", "StartCodegenJob", {})
  .n("AmplifyUIBuilderClient", "StartCodegenJobCommand")
  .sc(StartCodegenJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCodegenJobRequest;
      output: StartCodegenJobResponse;
    };
    sdk: {
      input: StartCodegenJobCommandInput;
      output: StartCodegenJobCommandOutput;
    };
  };
}
