// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListResolversByFunctionRequest, ListResolversByFunctionResponse } from "../models/models_0";
import { de_ListResolversByFunctionCommand, se_ListResolversByFunctionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResolversByFunctionCommand}.
 */
export interface ListResolversByFunctionCommandInput extends ListResolversByFunctionRequest {}
/**
 * @public
 *
 * The output of {@link ListResolversByFunctionCommand}.
 */
export interface ListResolversByFunctionCommandOutput extends ListResolversByFunctionResponse, __MetadataBearer {}

/**
 * <p>List the resolvers that are associated with a specific function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListResolversByFunctionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListResolversByFunctionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // ListResolversByFunctionRequest
 *   apiId: "STRING_VALUE", // required
 *   functionId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListResolversByFunctionCommand(input);
 * const response = await client.send(command);
 * // { // ListResolversByFunctionResponse
 * //   resolvers: [ // Resolvers
 * //     { // Resolver
 * //       typeName: "STRING_VALUE",
 * //       fieldName: "STRING_VALUE",
 * //       dataSourceName: "STRING_VALUE",
 * //       resolverArn: "STRING_VALUE",
 * //       requestMappingTemplate: "STRING_VALUE",
 * //       responseMappingTemplate: "STRING_VALUE",
 * //       kind: "UNIT" || "PIPELINE",
 * //       pipelineConfig: { // PipelineConfig
 * //         functions: [ // FunctionsIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       syncConfig: { // SyncConfig
 * //         conflictHandler: "OPTIMISTIC_CONCURRENCY" || "LAMBDA" || "AUTOMERGE" || "NONE",
 * //         conflictDetection: "VERSION" || "NONE",
 * //         lambdaConflictHandlerConfig: { // LambdaConflictHandlerConfig
 * //           lambdaConflictHandlerArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       cachingConfig: { // CachingConfig
 * //         ttl: Number("long"), // required
 * //         cachingKeys: [ // CachingKeys
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       maxBatchSize: Number("int"),
 * //       runtime: { // AppSyncRuntime
 * //         name: "APPSYNC_JS", // required
 * //         runtimeVersion: "STRING_VALUE", // required
 * //       },
 * //       code: "STRING_VALUE",
 * //       metricsConfig: "ENABLED" || "DISABLED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResolversByFunctionCommandInput - {@link ListResolversByFunctionCommandInput}
 * @returns {@link ListResolversByFunctionCommandOutput}
 * @see {@link ListResolversByFunctionCommandInput} for command's `input` shape.
 * @see {@link ListResolversByFunctionCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the
 *          field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 * @public
 */
export class ListResolversByFunctionCommand extends $Command
  .classBuilder<
    ListResolversByFunctionCommandInput,
    ListResolversByFunctionCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "ListResolversByFunction", {})
  .n("AppSyncClient", "ListResolversByFunctionCommand")
  .f(void 0, void 0)
  .ser(se_ListResolversByFunctionCommand)
  .de(de_ListResolversByFunctionCommand)
  .build() {}
