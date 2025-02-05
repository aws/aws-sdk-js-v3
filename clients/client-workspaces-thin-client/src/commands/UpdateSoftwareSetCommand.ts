// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSoftwareSetRequest, UpdateSoftwareSetResponse } from "../models/models_0";
import { de_UpdateSoftwareSetCommand, se_UpdateSoftwareSetCommand } from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesThinClientClientResolvedConfig,
} from "../WorkSpacesThinClientClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSoftwareSetCommand}.
 */
export interface UpdateSoftwareSetCommandInput extends UpdateSoftwareSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSoftwareSetCommand}.
 */
export interface UpdateSoftwareSetCommandOutput extends UpdateSoftwareSetResponse, __MetadataBearer {}

/**
 * <p>Updates a software set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, UpdateSoftwareSetCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, UpdateSoftwareSetCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // UpdateSoftwareSetRequest
 *   id: "STRING_VALUE", // required
 *   validationStatus: "VALIDATED" || "NOT_VALIDATED", // required
 * };
 * const command = new UpdateSoftwareSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSoftwareSetCommandInput - {@link UpdateSoftwareSetCommandInput}
 * @returns {@link UpdateSoftwareSetCommandOutput}
 * @see {@link UpdateSoftwareSetCommandInput} for command's `input` shape.
 * @see {@link UpdateSoftwareSetCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesThinClientClientResolvedConfig | config} for WorkSpacesThinClientClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link WorkSpacesThinClientServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesThinClient service.</p>
 *
 * @public
 */
export class UpdateSoftwareSetCommand extends $Command
  .classBuilder<
    UpdateSoftwareSetCommandInput,
    UpdateSoftwareSetCommandOutput,
    WorkSpacesThinClientClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesThinClientClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ThinClient", "UpdateSoftwareSet", {})
  .n("WorkSpacesThinClientClient", "UpdateSoftwareSetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSoftwareSetCommand)
  .de(de_UpdateSoftwareSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSoftwareSetRequest;
      output: {};
    };
    sdk: {
      input: UpdateSoftwareSetCommandInput;
      output: UpdateSoftwareSetCommandOutput;
    };
  };
}
