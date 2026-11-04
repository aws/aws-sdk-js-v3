// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConnectionStatusRequest, GetConnectionStatusResponse } from "../models/models_0";
import { GetConnectionStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetConnectionStatusCommand}.
 */
export interface GetConnectionStatusCommandInput extends GetConnectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectionStatusCommand}.
 */
export interface GetConnectionStatusCommandOutput extends GetConnectionStatusResponse, __MetadataBearer {}

/**
 * Retrieves the Session Manager connection status for a managed node to determine whether it is running and ready to receive Session Manager connections.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetConnectionStatusCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetConnectionStatusCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetConnectionStatusRequest
 *   Target: "STRING_VALUE", // required
 * };
 * const command = new GetConnectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionStatusResponse
 * //   Target: "STRING_VALUE",
 * //   Status: "connected" || "notconnected",
 * // };
 *
 * ```
 *
 * @param GetConnectionStatusCommandInput - {@link GetConnectionStatusCommandInput}
 * @returns {@link GetConnectionStatusCommandOutput}
 * @see {@link GetConnectionStatusCommandInput} for command's `input` shape.
 * @see {@link GetConnectionStatusCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class GetConnectionStatusCommand extends command<GetConnectionStatusCommandInput, GetConnectionStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetConnectionStatus",
  GetConnectionStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectionStatusRequest;
      output: GetConnectionStatusResponse;
    };
    sdk: {
      input: GetConnectionStatusCommandInput;
      output: GetConnectionStatusCommandOutput;
    };
  };
}
