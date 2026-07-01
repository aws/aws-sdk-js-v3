// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetActionRequest, GetActionResponse } from "../models/models_0";
import { GetAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetActionCommand}.
 */
export interface GetActionCommandInput extends GetActionRequest {}
/**
 * @public
 *
 * The output of {@link GetActionCommand}.
 */
export interface GetActionCommandOutput extends GetActionResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified FIS action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetActionCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetActionCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // GetActionRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetActionCommand(input);
 * const response = await client.send(command);
 * // { // GetActionResponse
 * //   action: { // Action
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     parameters: { // ActionParameterMap
 * //       "<keys>": { // ActionParameter
 * //         description: "STRING_VALUE",
 * //         required: true || false,
 * //       },
 * //     },
 * //     targets: { // ActionTargetMap
 * //       "<keys>": { // ActionTarget
 * //         resourceType: "STRING_VALUE",
 * //       },
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetActionCommandInput - {@link GetActionCommandInput}
 * @returns {@link GetActionCommandOutput}
 * @see {@link GetActionCommandInput} for command's `input` shape.
 * @see {@link GetActionCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 *
 * @public
 */
export class GetActionCommand extends command<GetActionCommandInput, GetActionCommandOutput>(
  _ep0,
  _mw0,
  "GetAction",
  GetAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetActionRequest;
      output: GetActionResponse;
    };
    sdk: {
      input: GetActionCommandInput;
      output: GetActionCommandOutput;
    };
  };
}
