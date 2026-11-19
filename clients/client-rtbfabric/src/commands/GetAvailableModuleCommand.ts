// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAvailableModuleRequest, GetAvailableModuleResponse } from "../models/models_0";
import { GetAvailableModule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAvailableModuleCommand}.
 */
export interface GetAvailableModuleCommandInput extends GetAvailableModuleRequest {}
/**
 * @public
 *
 * The output of {@link GetAvailableModuleCommand}.
 */
export interface GetAvailableModuleCommandOutput extends GetAvailableModuleResponse, __MetadataBearer {}

/**
 * <p>Returns a module that you can attach. If you can't attach the module, the operation returns ResourceNotFoundException, the same as for a missing one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, GetAvailableModuleCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, GetAvailableModuleCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // GetAvailableModuleRequest
 *   moduleId: "STRING_VALUE", // required
 * };
 * const command = new GetAvailableModuleCommand(input);
 * const response = await client.send(command);
 * // { // GetAvailableModuleResponse
 * //   moduleId: "STRING_VALUE", // required
 * //   moduleArn: "STRING_VALUE", // required
 * //   moduleName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   subscriptionType: "MARKETPLACE" || "PRIVATE" || "AWS_BUILT_IN", // required
 * //   subscriptionStatus: "ACTIVE" || "EXPIRED", // required
 * //   marketplaceProductId: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetAvailableModuleCommandInput - {@link GetAvailableModuleCommandInput}
 * @returns {@link GetAvailableModuleCommandOutput}
 * @see {@link GetAvailableModuleCommandInput} for command's `input` shape.
 * @see {@link GetAvailableModuleCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example Get a module
 * ```javascript
 * // Gets a Marketplace module that you can attach.
 * const input = {
 *   moduleId: "module-8kq2p9wx3fnv1c5htj7bd0ral"
 * };
 * const command = new GetAvailableModuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2026-10-01T12:00:00Z",
 *   description: "Drops bid requests whose floor price is below a value that you set.",
 *   marketplaceProductId: "prod-abcd1234efgh5",
 *   moduleArn: "arn:aws:rtbfabric:us-east-1::modules/module-8kq2p9wx3fnv1c5htj7bd0ral",
 *   moduleId: "module-8kq2p9wx3fnv1c5htj7bd0ral",
 *   moduleName: "bid-floor-filter",
 *   subscriptionStatus: "ACTIVE",
 *   subscriptionType: "MARKETPLACE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAvailableModuleCommand extends command<GetAvailableModuleCommandInput, GetAvailableModuleCommandOutput>(
  _ep0,
  _mw0,
  "GetAvailableModule",
  GetAvailableModule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAvailableModuleRequest;
      output: GetAvailableModuleResponse;
    };
    sdk: {
      input: GetAvailableModuleCommandInput;
      output: GetAvailableModuleCommandOutput;
    };
  };
}
