// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateActRequest, UpdateActResponse } from "../models/models_0";
import type { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { UpdateAct } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateActCommand}.
 */
export interface UpdateActCommandInput extends UpdateActRequest {}
/**
 * @public
 *
 * The output of {@link UpdateActCommand}.
 */
export interface UpdateActCommandOutput extends UpdateActResponse, __MetadataBearer {}

/**
 * <p>Updates an existing act's configuration, status, or error information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, UpdateActCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, UpdateActCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // UpdateActRequest
 *   workflowDefinitionName: "STRING_VALUE", // required
 *   workflowRunId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   actId: "STRING_VALUE", // required
 *   status: "RUNNING" || "PENDING_CLIENT_ACTION" || "PENDING_HUMAN_ACTION" || "SUCCEEDED" || "FAILED" || "TIMED_OUT", // required
 *   error: { // ActError
 *     message: "STRING_VALUE", // required
 *     type: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateActCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateActCommandInput - {@link UpdateActCommandInput}
 * @returns {@link UpdateActCommandOutput}
 * @see {@link UpdateActCommandInput} for command's `input` shape.
 * @see {@link UpdateActCommandOutput} for command's `response` shape.
 * @see {@link NovaActClientResolvedConfig | config} for NovaActClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Please try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for the request are invalid.</p>
 *
 * @throws {@link NovaActServiceException}
 * <p>Base exception class for all service exceptions from NovaAct service.</p>
 *
 *
 * @public
 */
export class UpdateActCommand extends $Command
  .classBuilder<
    UpdateActCommandInput,
    UpdateActCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "UpdateAct", {})
  .n("NovaActClient", "UpdateActCommand")
  .sc(UpdateAct)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateActRequest;
      output: {};
    };
    sdk: {
      input: UpdateActCommandInput;
      output: UpdateActCommandOutput;
    };
  };
}
