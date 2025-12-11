// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetMonitorRequest, GetMonitorResponse } from "../models/models_1";
import { GetMonitor } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMonitorCommand}.
 */
export interface GetMonitorCommandInput extends GetMonitorRequest {}
/**
 * @public
 *
 * The output of {@link GetMonitorCommand}.
 */
export interface GetMonitorCommandOutput extends GetMonitorResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetMonitorCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetMonitorCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetMonitorRequest
 *   monitorId: "STRING_VALUE", // required
 * };
 * const command = new GetMonitorCommand(input);
 * const response = await client.send(command);
 * // { // GetMonitorResponse
 * //   monitorId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE", // required
 * //   subdomain: "STRING_VALUE", // required
 * //   url: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   identityCenterInstanceArn: "STRING_VALUE", // required
 * //   identityCenterApplicationArn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMonitorCommandInput - {@link GetMonitorCommandInput}
 * @returns {@link GetMonitorCommandOutput}
 * @see {@link GetMonitorCommandInput} for command's `input` shape.
 * @see {@link GetMonitorCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class GetMonitorCommand extends $Command
  .classBuilder<
    GetMonitorCommandInput,
    GetMonitorCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "GetMonitor", {})
  .n("DeadlineClient", "GetMonitorCommand")
  .sc(GetMonitor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMonitorRequest;
      output: GetMonitorResponse;
    };
    sdk: {
      input: GetMonitorCommandInput;
      output: GetMonitorCommandOutput;
    };
  };
}
