// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConfiguredAudienceModelPolicyRequest } from "../models/models_0";
import { DeleteConfiguredAudienceModelPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredAudienceModelPolicyCommand}.
 */
export interface DeleteConfiguredAudienceModelPolicyCommandInput extends DeleteConfiguredAudienceModelPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredAudienceModelPolicyCommand}.
 */
export interface DeleteConfiguredAudienceModelPolicyCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified configured audience model policy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteConfiguredAudienceModelPolicyCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteConfiguredAudienceModelPolicyCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteConfiguredAudienceModelPolicyRequest
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfiguredAudienceModelPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredAudienceModelPolicyCommandInput - {@link DeleteConfiguredAudienceModelPolicyCommandInput}
 * @returns {@link DeleteConfiguredAudienceModelPolicyCommandOutput}
 * @see {@link DeleteConfiguredAudienceModelPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredAudienceModelPolicyCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you are requesting does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request parameters for this request are incorrect.
 *
 * @throws {@link CleanRoomsMLServiceException}
 *
 * Base exception class for all service exceptions from CleanRoomsML service.
 *
 * @public
 */
export class DeleteConfiguredAudienceModelPolicyCommand extends command<DeleteConfiguredAudienceModelPolicyCommandInput, DeleteConfiguredAudienceModelPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConfiguredAudienceModelPolicy",
  DeleteConfiguredAudienceModelPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredAudienceModelPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredAudienceModelPolicyCommandInput;
      output: DeleteConfiguredAudienceModelPolicyCommandOutput;
    };
  };
}
