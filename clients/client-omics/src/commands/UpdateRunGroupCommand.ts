// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRunGroupRequest } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { UpdateRunGroup } from "../schemas/schemas_11_Run";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRunGroupCommand}.
 */
export interface UpdateRunGroupCommandInput extends UpdateRunGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRunGroupCommand}.
 */
export interface UpdateRunGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the settings of a run group and returns a response with no body if the operation is successful.</p> <p>You can update the following settings with <code>UpdateRunGroup</code>:</p> <ul> <li> <p>Maximum number of CPUs</p> </li> <li> <p>Run time (measured in minutes)</p> </li> <li> <p>Number of GPUs</p> </li> <li> <p>Number of concurrent runs</p> </li> <li> <p>Group name</p> </li> </ul> <p>To confirm that the settings have been successfully updated, use the <code>ListRunGroups</code> or <code>GetRunGroup</code> API operations to verify that the desired changes have been made.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UpdateRunGroupCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UpdateRunGroupCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // UpdateRunGroupRequest
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   maxCpus: Number("int"),
 *   maxRuns: Number("int"),
 *   maxDuration: Number("int"),
 *   maxGpus: Number("int"),
 * };
 * const command = new UpdateRunGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRunGroupCommandInput - {@link UpdateRunGroupCommandInput}
 * @returns {@link UpdateRunGroupCommandOutput}
 * @see {@link UpdateRunGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRunGroupCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class UpdateRunGroupCommand extends $Command
  .classBuilder<
    UpdateRunGroupCommandInput,
    UpdateRunGroupCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "UpdateRunGroup", {})
  .n("OmicsClient", "UpdateRunGroupCommand")
  .sc(UpdateRunGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRunGroupRequest;
      output: {};
    };
    sdk: {
      input: UpdateRunGroupCommandInput;
      output: UpdateRunGroupCommandOutput;
    };
  };
}
