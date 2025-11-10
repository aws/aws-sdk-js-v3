// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrafficDistributionGroupRequest, DeleteTrafficDistributionGroupResponse } from "../models/models_1";
import { DeleteTrafficDistributionGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrafficDistributionGroupCommand}.
 */
export interface DeleteTrafficDistributionGroupCommandInput extends DeleteTrafficDistributionGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrafficDistributionGroupCommand}.
 */
export interface DeleteTrafficDistributionGroupCommandOutput
  extends DeleteTrafficDistributionGroupResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a traffic distribution group. This API can be called only in the Region where the traffic distribution group is
 *    created.</p>
 *          <p>For more information about deleting traffic distribution groups, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/delete-traffic-distribution-groups.html">Delete traffic distribution groups</a> in
 *    the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteTrafficDistributionGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteTrafficDistributionGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteTrafficDistributionGroupRequest
 *   TrafficDistributionGroupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrafficDistributionGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrafficDistributionGroupCommandInput - {@link DeleteTrafficDistributionGroupCommandInput}
 * @returns {@link DeleteTrafficDistributionGroupCommandOutput}
 * @see {@link DeleteTrafficDistributionGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficDistributionGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use (for example, you're trying to add a record with the same
 *    name as an existing record). If you are trying to delete a resource (for example,
 *    DeleteHoursOfOperation or DeletePredefinedAttribute), remove its reference from related resources
 *    and then try again.</p>
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
export class DeleteTrafficDistributionGroupCommand extends $Command
  .classBuilder<
    DeleteTrafficDistributionGroupCommandInput,
    DeleteTrafficDistributionGroupCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteTrafficDistributionGroup", {})
  .n("ConnectClient", "DeleteTrafficDistributionGroupCommand")
  .sc(DeleteTrafficDistributionGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrafficDistributionGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrafficDistributionGroupCommandInput;
      output: DeleteTrafficDistributionGroupCommandOutput;
    };
  };
}
