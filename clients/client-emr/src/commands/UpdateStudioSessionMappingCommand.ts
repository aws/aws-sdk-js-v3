// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateStudioSessionMappingInput } from "../models/models_0";
import { UpdateStudioSessionMapping } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStudioSessionMappingCommand}.
 */
export interface UpdateStudioSessionMappingCommandInput extends UpdateStudioSessionMappingInput {}
/**
 * @public
 *
 * The output of {@link UpdateStudioSessionMappingCommand}.
 */
export interface UpdateStudioSessionMappingCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the session policy attached to the user or group for the specified Amazon EMR Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, UpdateStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, UpdateStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // UpdateStudioSessionMappingInput
 *   StudioId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE",
 *   IdentityName: "STRING_VALUE",
 *   IdentityType: "USER" || "GROUP", // required
 *   SessionPolicyArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStudioSessionMappingCommandInput - {@link UpdateStudioSessionMappingCommandInput}
 * @returns {@link UpdateStudioSessionMappingCommandOutput}
 * @see {@link UpdateStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class UpdateStudioSessionMappingCommand extends $Command
  .classBuilder<
    UpdateStudioSessionMappingCommandInput,
    UpdateStudioSessionMappingCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "UpdateStudioSessionMapping", {})
  .n("EMRClient", "UpdateStudioSessionMappingCommand")
  .sc(UpdateStudioSessionMapping)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStudioSessionMappingInput;
      output: {};
    };
    sdk: {
      input: UpdateStudioSessionMappingCommandInput;
      output: UpdateStudioSessionMappingCommandOutput;
    };
  };
}
