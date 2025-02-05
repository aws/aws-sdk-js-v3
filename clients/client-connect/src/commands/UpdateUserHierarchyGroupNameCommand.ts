// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserHierarchyGroupNameRequest } from "../models/models_3";
import {
  de_UpdateUserHierarchyGroupNameCommand,
  se_UpdateUserHierarchyGroupNameCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserHierarchyGroupNameCommand}.
 */
export interface UpdateUserHierarchyGroupNameCommandInput extends UpdateUserHierarchyGroupNameRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserHierarchyGroupNameCommand}.
 */
export interface UpdateUserHierarchyGroupNameCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the name of the user hierarchy group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserHierarchyGroupNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserHierarchyGroupNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserHierarchyGroupNameRequest
 *   Name: "STRING_VALUE", // required
 *   HierarchyGroupId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserHierarchyGroupNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserHierarchyGroupNameCommandInput - {@link UpdateUserHierarchyGroupNameCommandInput}
 * @returns {@link UpdateUserHierarchyGroupNameCommandOutput}
 * @see {@link UpdateUserHierarchyGroupNameCommandInput} for command's `input` shape.
 * @see {@link UpdateUserHierarchyGroupNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
 * @public
 */
export class UpdateUserHierarchyGroupNameCommand extends $Command
  .classBuilder<
    UpdateUserHierarchyGroupNameCommandInput,
    UpdateUserHierarchyGroupNameCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateUserHierarchyGroupName", {})
  .n("ConnectClient", "UpdateUserHierarchyGroupNameCommand")
  .f(void 0, void 0)
  .ser(se_UpdateUserHierarchyGroupNameCommand)
  .de(de_UpdateUserHierarchyGroupNameCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserHierarchyGroupNameRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserHierarchyGroupNameCommandInput;
      output: UpdateUserHierarchyGroupNameCommandOutput;
    };
  };
}
