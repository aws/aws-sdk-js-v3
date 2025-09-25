// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTagsForResourcesRequest, ListTagsForResourcesResponse } from "../models/models_0";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { ListTagsForResources } from "../schemas/schemas_17_ListTagsForResources";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForResourcesCommand}.
 */
export interface ListTagsForResourcesCommandInput extends ListTagsForResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForResourcesCommand}.
 */
export interface ListTagsForResourcesCommandOutput extends ListTagsForResourcesResponse, __MetadataBearer {}

/**
 * <p>Lists the tags for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, ListTagsForResourcesCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, ListTagsForResourcesCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // ListTagsForResourcesRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourcesResponse
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsForResourcesCommandInput - {@link ListTagsForResourcesCommandInput}
 * @returns {@link ListTagsForResourcesCommandOutput}
 * @see {@link ListTagsForResourcesCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourcesCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link Route53RecoveryReadinessServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryReadiness service.</p>
 *
 *
 * @public
 */
export class ListTagsForResourcesCommand extends $Command
  .classBuilder<
    ListTagsForResourcesCommandInput,
    ListTagsForResourcesCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryReadiness", "ListTagsForResources", {})
  .n("Route53RecoveryReadinessClient", "ListTagsForResourcesCommand")
  .sc(ListTagsForResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForResourcesRequest;
      output: ListTagsForResourcesResponse;
    };
    sdk: {
      input: ListTagsForResourcesCommandInput;
      output: ListTagsForResourcesCommandOutput;
    };
  };
}
