// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableProactiveEngagementRequest, EnableProactiveEngagementResponse } from "../models/models_0";
import { EnableProactiveEngagement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableProactiveEngagementCommand}.
 */
export interface EnableProactiveEngagementCommandInput extends EnableProactiveEngagementRequest {}
/**
 * @public
 *
 * The output of {@link EnableProactiveEngagementCommand}.
 */
export interface EnableProactiveEngagementCommandOutput extends EnableProactiveEngagementResponse, __MetadataBearer {}

/**
 * Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, EnableProactiveEngagementCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, EnableProactiveEngagementCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = {};
 * const command = new EnableProactiveEngagementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableProactiveEngagementCommandInput - {@link EnableProactiveEngagementCommandInput}
 * @returns {@link EnableProactiveEngagementCommandOutput}
 * @see {@link EnableProactiveEngagementCommandInput} for command's `input` shape.
 * @see {@link EnableProactiveEngagementCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * Exception that indicates that the operation would not cause any change to occur.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties.
 *
 * @throws {@link OptimisticLockException} (client fault)
 *
 * Exception that indicates that the resource state has been modified by another client. Retrieve the resource and then retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties.
 *
 * @throws {@link ShieldServiceException}
 *
 * Base exception class for all service exceptions from Shield service.
 *
 * @public
 */
export class EnableProactiveEngagementCommand extends command<EnableProactiveEngagementCommandInput, EnableProactiveEngagementCommandOutput>(
  _ep0,
  _mw0,
  "EnableProactiveEngagement",
  EnableProactiveEngagement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EnableProactiveEngagementCommandInput;
      output: EnableProactiveEngagementCommandOutput;
    };
  };
}
