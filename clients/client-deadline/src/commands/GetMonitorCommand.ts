// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMonitorRequest, GetMonitorResponse } from "../models/models_1";
import { GetMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about the specified monitor.
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
 * //   identityCenterRegion: "STRING_VALUE",
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
 *  You don't have permission to perform the action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class GetMonitorCommand extends command<GetMonitorCommandInput, GetMonitorCommandOutput>(
  _ep0,
  _mw0,
  "GetMonitor",
  GetMonitor$
) {
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
