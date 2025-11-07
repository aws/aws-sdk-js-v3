// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSessionStatusRequest, GetSessionStatusResponse } from "../models/models_0";
import { GetSessionStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionStatusCommand}.
 */
export interface GetSessionStatusCommandInput extends GetSessionStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionStatusCommand}.
 */
export interface GetSessionStatusCommandOutput extends GetSessionStatusResponse, __MetadataBearer {}

/**
 * <p>Gets the current status of a session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetSessionStatusCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetSessionStatusCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetSessionStatusRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionStatusResponse
 * //   SessionId: "STRING_VALUE",
 * //   Status: { // SessionStatus
 * //     StartDateTime: new Date("TIMESTAMP"),
 * //     LastModifiedDateTime: new Date("TIMESTAMP"),
 * //     EndDateTime: new Date("TIMESTAMP"),
 * //     IdleSinceDateTime: new Date("TIMESTAMP"),
 * //     State: "CREATING" || "CREATED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "DEGRADED" || "FAILED",
 * //     StateChangeReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionStatusCommandInput - {@link GetSessionStatusCommandInput}
 * @returns {@link GetSessionStatusCommandOutput}
 * @see {@link GetSessionStatusCommandInput} for command's `input` shape.
 * @see {@link GetSessionStatusCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class GetSessionStatusCommand extends $Command
  .classBuilder<
    GetSessionStatusCommandInput,
    GetSessionStatusCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "GetSessionStatus", {})
  .n("AthenaClient", "GetSessionStatusCommand")
  .sc(GetSessionStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionStatusRequest;
      output: GetSessionStatusResponse;
    };
    sdk: {
      input: GetSessionStatusCommandInput;
      output: GetSessionStatusCommandOutput;
    };
  };
}
