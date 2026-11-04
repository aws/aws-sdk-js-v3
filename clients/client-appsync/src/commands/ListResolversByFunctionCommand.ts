// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResolversByFunctionRequest, ListResolversByFunctionResponse } from "../models/models_0";
import { ListResolversByFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List the resolvers that are associated with a specific function.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListResolversByFunctionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListResolversByFunctionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
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
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class ListResolversByFunctionCommand extends command<ListResolversByFunctionCommandInput, ListResolversByFunctionCommandOutput>(
  _ep0,
  _mw0,
  "ListResolversByFunction",
  ListResolversByFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResolversByFunctionRequest;
      output: ListResolversByFunctionResponse;
    };
    sdk: {
      input: ListResolversByFunctionCommandInput;
      output: ListResolversByFunctionCommandOutput;
    };
  };
}
