// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutLaunchActionRequest, PutLaunchActionResponse } from "../models/models_0";
import { PutLaunchAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutLaunchActionCommand}.
 */
export interface PutLaunchActionCommandInput extends PutLaunchActionRequest {}
/**
 * @public
 *
 * The output of {@link PutLaunchActionCommand}.
 */
export interface PutLaunchActionCommandOutput extends PutLaunchActionResponse, __MetadataBearer {}

/**
 * Puts a resource launch action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, PutLaunchActionCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, PutLaunchActionCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // PutLaunchActionRequest
 *   resourceId: "STRING_VALUE", // required
 *   actionCode: "STRING_VALUE", // required
 *   order: Number("int"), // required
 *   actionId: "STRING_VALUE", // required
 *   optional: true || false, // required
 *   active: true || false, // required
 *   name: "STRING_VALUE", // required
 *   actionVersion: "STRING_VALUE", // required
 *   category: "STRING_VALUE", // required
 *   parameters: { // LaunchActionParameters
 *     "<keys>": { // LaunchActionParameter
 *       value: "STRING_VALUE",
 *       type: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE", // required
 * };
 * const command = new PutLaunchActionCommand(input);
 * const response = await client.send(command);
 * // { // PutLaunchActionResponse
 * //   resourceId: "STRING_VALUE",
 * //   actionId: "STRING_VALUE",
 * //   actionCode: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   active: true || false,
 * //   order: Number("int"),
 * //   actionVersion: "STRING_VALUE",
 * //   optional: true || false,
 * //   parameters: { // LaunchActionParameters
 * //     "<keys>": { // LaunchActionParameter
 * //       value: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * //   category: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutLaunchActionCommandInput - {@link PutLaunchActionCommandInput}
 * @returns {@link PutLaunchActionCommandOutput}
 * @see {@link PutLaunchActionCommandInput} for command's `input` shape.
 * @see {@link PutLaunchActionCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the AWS service.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class PutLaunchActionCommand extends command<PutLaunchActionCommandInput, PutLaunchActionCommandOutput>(
  _ep0,
  _mw0,
  "PutLaunchAction",
  PutLaunchAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLaunchActionRequest;
      output: PutLaunchActionResponse;
    };
    sdk: {
      input: PutLaunchActionCommandInput;
      output: PutLaunchActionCommandOutput;
    };
  };
}
