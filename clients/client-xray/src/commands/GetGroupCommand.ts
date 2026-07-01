// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGroupRequest, GetGroupResult } from "../models/models_0";
import { GetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGroupCommand}.
 */
export interface GetGroupCommandInput extends GetGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupCommand}.
 */
export interface GetGroupCommandOutput extends GetGroupResult, __MetadataBearer {}

/**
 * <p>Retrieves group resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetGroupCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetGroupCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // GetGroupRequest
 *   GroupName: "STRING_VALUE",
 *   GroupARN: "STRING_VALUE",
 * };
 * const command = new GetGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupResult
 * //   Group: { // Group
 * //     GroupName: "STRING_VALUE",
 * //     GroupARN: "STRING_VALUE",
 * //     FilterExpression: "STRING_VALUE",
 * //     InsightsConfiguration: { // InsightsConfiguration
 * //       InsightsEnabled: true || false,
 * //       NotificationsEnabled: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGroupCommandInput - {@link GetGroupCommandInput}
 * @returns {@link GetGroupCommandOutput}
 * @see {@link GetGroupCommandInput} for command's `input` shape.
 * @see {@link GetGroupCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class GetGroupCommand extends command<GetGroupCommandInput, GetGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetGroup",
  GetGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupRequest;
      output: GetGroupResult;
    };
    sdk: {
      input: GetGroupCommandInput;
      output: GetGroupCommandOutput;
    };
  };
}
