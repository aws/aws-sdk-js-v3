// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateResolverRequest, UpdateResolverResponse } from "../models/models_0";
import { UpdateResolver } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResolverCommand}.
 */
export interface UpdateResolverCommandInput extends UpdateResolverRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResolverCommand}.
 */
export interface UpdateResolverCommandOutput extends UpdateResolverResponse, __MetadataBearer {}

/**
 * <p>Updates a <code>Resolver</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateResolverCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateResolverCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // UpdateResolverRequest
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
 * const command = new UpdateResolverCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResolverResponse
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
 * @param UpdateResolverCommandInput - {@link UpdateResolverCommandInput}
 * @returns {@link UpdateResolverCommandOutput}
 * @see {@link UpdateResolverCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class UpdateResolverCommand extends $Command
  .classBuilder<
    UpdateResolverCommandInput,
    UpdateResolverCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "UpdateResolver", {})
  .n("AppSyncClient", "UpdateResolverCommand")
  .sc(UpdateResolver)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResolverRequest;
      output: UpdateResolverResponse;
    };
    sdk: {
      input: UpdateResolverCommandInput;
      output: UpdateResolverCommandOutput;
    };
  };
}
