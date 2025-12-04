// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateUserProficienciesRequest } from "../models/models_3";
import { UpdateUserProficiencies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserProficienciesCommand}.
 */
export interface UpdateUserProficienciesCommandInput extends UpdateUserProficienciesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserProficienciesCommand}.
 */
export interface UpdateUserProficienciesCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the properties associated with the proficiencies of a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserProficienciesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserProficienciesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserProficienciesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   UserProficiencies: [ // UserProficiencyList // required
 *     { // UserProficiency
 *       AttributeName: "STRING_VALUE", // required
 *       AttributeValue: "STRING_VALUE", // required
 *       Level: Number("float"), // required
 *     },
 *   ],
 * };
 * const command = new UpdateUserProficienciesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserProficienciesCommandInput - {@link UpdateUserProficienciesCommandInput}
 * @returns {@link UpdateUserProficienciesCommandOutput}
 * @see {@link UpdateUserProficienciesCommandInput} for command's `input` shape.
 * @see {@link UpdateUserProficienciesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateUserProficienciesCommand extends $Command
  .classBuilder<
    UpdateUserProficienciesCommandInput,
    UpdateUserProficienciesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateUserProficiencies", {})
  .n("ConnectClient", "UpdateUserProficienciesCommand")
  .sc(UpdateUserProficiencies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserProficienciesRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserProficienciesCommandInput;
      output: UpdateUserProficienciesCommandOutput;
    };
  };
}
