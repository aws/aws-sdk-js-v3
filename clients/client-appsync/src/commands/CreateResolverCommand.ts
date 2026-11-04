// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateResolverRequest, CreateResolverResponse } from "../models/models_0";
import { CreateResolver$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateResolverCommand}.
 */
export interface CreateResolverCommandInput extends CreateResolverRequest {}
/**
 * @public
 *
 * The output of {@link CreateResolverCommand}.
 */
export interface CreateResolverCommandOutput extends CreateResolverResponse, __MetadataBearer {}

/**
 * Creates a `Resolver` object.
 *
 * A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateResolverCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateResolverCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // CreateResolverRequest
 *   apiId: "STRING_VALUE", // required
 *   typeName: "STRING_VALUE", // required
 *   fieldName: "STRING_VALUE", // required
 *   dataSourceName: "STRING_VALUE",
 *   requestMappingTemplate: "STRING_VALUE",
 *   responseMappingTemplate: "STRING_VALUE",
 *   kind: "UNIT" || "PIPELINE",
 *   pipelineConfig: { // PipelineConfig
 *     functions: [ // FunctionsIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   syncConfig: { // SyncConfig
 *     conflictHandler: "OPTIMISTIC_CONCURRENCY" || "LAMBDA" || "AUTOMERGE" || "NONE",
 *     conflictDetection: "VERSION" || "NONE",
 *     lambdaConflictHandlerConfig: { // LambdaConflictHandlerConfig
 *       lambdaConflictHandlerArn: "STRING_VALUE",
 *     },
 *   },
 *   cachingConfig: { // CachingConfig
 *     ttl: Number("long"), // required
 *     cachingKeys: [ // CachingKeys
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxBatchSize: Number("int"),
 *   runtime: { // AppSyncRuntime
 *     name: "APPSYNC_JS", // required
 *     runtimeVersion: "STRING_VALUE", // required
 *   },
 *   code: "STRING_VALUE",
 *   metricsConfig: "ENABLED" || "DISABLED",
 * };
 * const command = new CreateResolverCommand(input);
 * const response = await client.send(command);
 * // { // CreateResolverResponse
 * //   resolver: { // Resolver
 * //     typeName: "STRING_VALUE",
 * //     fieldName: "STRING_VALUE",
 * //     dataSourceName: "STRING_VALUE",
 * //     resolverArn: "STRING_VALUE",
 * //     requestMappingTemplate: "STRING_VALUE",
 * //     responseMappingTemplate: "STRING_VALUE",
 * //     kind: "UNIT" || "PIPELINE",
 * //     pipelineConfig: { // PipelineConfig
 * //       functions: [ // FunctionsIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     syncConfig: { // SyncConfig
 * //       conflictHandler: "OPTIMISTIC_CONCURRENCY" || "LAMBDA" || "AUTOMERGE" || "NONE",
 * //       conflictDetection: "VERSION" || "NONE",
 * //       lambdaConflictHandlerConfig: { // LambdaConflictHandlerConfig
 * //         lambdaConflictHandlerArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     cachingConfig: { // CachingConfig
 * //       ttl: Number("long"), // required
 * //       cachingKeys: [ // CachingKeys
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     maxBatchSize: Number("int"),
 * //     runtime: { // AppSyncRuntime
 * //       name: "APPSYNC_JS", // required
 * //       runtimeVersion: "STRING_VALUE", // required
 * //     },
 * //     code: "STRING_VALUE",
 * //     metricsConfig: "ENABLED" || "DISABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateResolverCommandInput - {@link CreateResolverCommandInput}
 * @returns {@link CreateResolverCommandOutput}
 * @see {@link CreateResolverCommandInput} for command's `input` shape.
 * @see {@link CreateResolverCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Another modification is in progress at this time and it must complete before you can make your change.
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
export class CreateResolverCommand extends command<CreateResolverCommandInput, CreateResolverCommandOutput>(
  _ep0,
  _mw0,
  "CreateResolver",
  CreateResolver$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResolverRequest;
      output: CreateResolverResponse;
    };
    sdk: {
      input: CreateResolverCommandInput;
      output: CreateResolverCommandOutput;
    };
  };
}
