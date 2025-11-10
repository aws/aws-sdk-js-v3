// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterDeviceRequest, DeregisterDeviceResponse } from "../models/models_0";
import { DeregisterDevice } from "../schemas/schemas_0";
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
 * The input for {@link DeregisterDeviceCommand}.
 */
export interface DeregisterDeviceCommandInput extends DeregisterDeviceRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterDeviceCommand}.
 */
export interface DeregisterDeviceCommandOutput extends DeregisterDeviceResponse, __MetadataBearer {}

/**
 * <p>Deregisters a thin client device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, DeregisterDeviceCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, DeregisterDeviceCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * // import type { WorkSpacesThinClientClientConfig } from "@aws-sdk/client-workspaces-thin-client";
 * const config = {}; // type is WorkSpacesThinClientClientConfig
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // DeregisterDeviceRequest
 *   id: "STRING_VALUE", // required
 *   targetDeviceStatus: "DEREGISTERED" || "ARCHIVED",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeregisterDeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterDeviceCommandInput - {@link DeregisterDeviceCommandInput}
 * @returns {@link DeregisterDeviceCommandOutput}
 * @see {@link DeregisterDeviceCommandInput} for command's `input` shape.
 * @see {@link DeregisterDeviceCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesThinClientClientResolvedConfig | config} for WorkSpacesThinClientClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.</p>
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
 *
 * @public
 */
export class DeregisterDeviceCommand extends $Command
  .classBuilder<
    DeregisterDeviceCommandInput,
    DeregisterDeviceCommandOutput,
    WorkSpacesThinClientClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesThinClientClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ThinClient", "DeregisterDevice", {})
  .n("WorkSpacesThinClientClient", "DeregisterDeviceCommand")
  .sc(DeregisterDevice)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterDeviceRequest;
      output: {};
    };
    sdk: {
      input: DeregisterDeviceCommandInput;
      output: DeregisterDeviceCommandOutput;
    };
  };
}
