// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListModelsRequest, ListModelsResponse } from "../models/models_0";
import type { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { ListModels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListModelsCommand}.
 */
export interface ListModelsCommandInput extends ListModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelsCommand}.
 */
export interface ListModelsCommandOutput extends ListModelsResponse, __MetadataBearer {}

/**
 * <p>Lists all available AI models that can be used for workflow execution, including their status and compatibility information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, ListModelsCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, ListModelsCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // ListModelsRequest
 *   clientCompatibilityVersion: Number("int"), // required
 * };
 * const command = new ListModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelsResponse
 * //   modelSummaries: [ // ModelSummaries // required
 * //     { // ModelSummary
 * //       modelId: "STRING_VALUE", // required
 * //       modelLifecycle: { // ModelLifecycle
 * //         status: "ACTIVE" || "LEGACY" || "DEPRECATED" || "PREVIEW", // required
 * //       },
 * //       minimumCompatibilityVersion: Number("int"), // required
 * //     },
 * //   ],
 * //   modelAliases: [ // ModelAliases // required
 * //     { // ModelAlias
 * //       aliasName: "STRING_VALUE", // required
 * //       latestModelId: "STRING_VALUE", // required
 * //       resolvedModelId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   compatibilityInformation: { // CompatibilityInformation
 * //     clientCompatibilityVersion: Number("int"), // required
 * //     supportedModelIds: [ // ModelIdList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListModelsCommandInput - {@link ListModelsCommandInput}
 * @returns {@link ListModelsCommandOutput}
 * @see {@link ListModelsCommandInput} for command's `input` shape.
 * @see {@link ListModelsCommandOutput} for command's `response` shape.
 * @see {@link NovaActClientResolvedConfig | config} for NovaActClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Please try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please try again later.</p>
 *
 * @throws {@link NovaActServiceException}
 * <p>Base exception class for all service exceptions from NovaAct service.</p>
 *
 *
 * @public
 */
export class ListModelsCommand extends $Command
  .classBuilder<
    ListModelsCommandInput,
    ListModelsCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "ListModels", {})
  .n("NovaActClient", "ListModelsCommand")
  .sc(ListModels$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelsRequest;
      output: ListModelsResponse;
    };
    sdk: {
      input: ListModelsCommandInput;
      output: ListModelsCommandOutput;
    };
  };
}
