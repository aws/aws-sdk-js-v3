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

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { GetCodegenJobRequest, GetCodegenJobResponse } from "../models/models_0";
import { de_GetCodegenJobCommand, se_GetCodegenJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Returns an existing code generation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, GetCodegenJobCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, GetCodegenJobCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
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
 */
export class GetCodegenJobCommand extends $Command<
  GetCodegenJobCommandInput,
  GetCodegenJobCommandOutput,
  AmplifyUIBuilderClientResolvedConfig
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
  constructor(readonly input: GetCodegenJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyUIBuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCodegenJobCommandInput, GetCodegenJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetCodegenJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyUIBuilderClient";
    const commandName = "GetCodegenJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmplifyUIBuilder",
        operation: "GetCodegenJob",
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
  private serialize(input: GetCodegenJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCodegenJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCodegenJobCommandOutput> {
    return de_GetCodegenJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
