// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetResolverRequest, GetResolverResponse } from "../models/models_0";
import { de_GetResolverCommand, se_GetResolverCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResolverCommand}.
 */
export interface GetResolverCommandInput extends GetResolverRequest {}
/**
 * @public
 *
 * The output of {@link GetResolverCommand}.
 */
export interface GetResolverCommandOutput extends GetResolverResponse, __MetadataBearer {}

/**
 * <p>Retrieves a <code>Resolver</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetResolverCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetResolverCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // GetResolverRequest
 *   apiId: "STRING_VALUE", // required
 *   typeName: "STRING_VALUE", // required
 *   fieldName: "STRING_VALUE", // required
 * };
 * const command = new GetResolverCommand(input);
 * const response = await client.send(command);
 * // { // GetResolverResponse
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
 * @param GetResolverCommandInput - {@link GetResolverCommandInput}
 * @returns {@link GetResolverCommandOutput}
 * @see {@link GetResolverCommandInput} for command's `input` shape.
 * @see {@link GetResolverCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
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
 * @public
 */
export class GetResolverCommand extends $Command
  .classBuilder<
    GetResolverCommandInput,
    GetResolverCommandOutput,
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
  .s("AWSDeepdishControlPlaneService", "GetResolver", {})
  .n("AppSyncClient", "GetResolverCommand")
  .f(void 0, void 0)
  .ser(se_GetResolverCommand)
  .de(de_GetResolverCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResolverRequest;
      output: GetResolverResponse;
    };
    sdk: {
      input: GetResolverCommandInput;
      output: GetResolverCommandOutput;
    };
  };
}
