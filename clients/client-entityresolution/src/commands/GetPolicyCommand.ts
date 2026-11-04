// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPolicyInput, GetPolicyOutput } from "../models/models_0";
import { GetPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandInput extends GetPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandOutput extends GetPolicyOutput, __MetadataBearer {}

/**
 * Returns the resource-based policy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetPolicyCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetPolicyCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // GetPolicyInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyOutput
 * //   arn: "STRING_VALUE", // required
 * //   token: "STRING_VALUE", // required
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPolicyCommandInput - {@link GetPolicyCommandInput}
 * @returns {@link GetPolicyCommandOutput}
 * @see {@link GetPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPolicyCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class GetPolicyCommand extends command<GetPolicyCommandInput, GetPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetPolicy",
  GetPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyInput;
      output: GetPolicyOutput;
    };
    sdk: {
      input: GetPolicyCommandInput;
      output: GetPolicyCommandOutput;
    };
  };
}
