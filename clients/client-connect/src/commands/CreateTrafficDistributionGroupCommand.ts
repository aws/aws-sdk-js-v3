// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTrafficDistributionGroupRequest, CreateTrafficDistributionGroupResponse } from "../models/models_0";
import {
  de_CreateTrafficDistributionGroupCommand,
  se_CreateTrafficDistributionGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrafficDistributionGroupCommand}.
 */
export interface CreateTrafficDistributionGroupCommandInput extends CreateTrafficDistributionGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficDistributionGroupCommand}.
 */
export interface CreateTrafficDistributionGroupCommandOutput
  extends CreateTrafficDistributionGroupResponse,
    __MetadataBearer {}

/**
 * <p>Creates a traffic distribution group given an Amazon Connect instance that has been replicated.</p>
 *          <note>
 *             <p>The <code>SignInConfig</code> distribution is available only on a
 * default <code>TrafficDistributionGroup</code> (see the <code>IsDefault</code> parameter in the
 * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_TrafficDistributionGroup.html">TrafficDistributionGroup</a>
 *  data type). If you call
 *     <code>UpdateTrafficDistribution</code> with a modified <code>SignInConfig</code> and a non-default <code>TrafficDistributionGroup</code>,
 *     an <code>InvalidRequestException</code> is returned.</p>
 *          </note>
 *          <p>For more information about creating traffic distribution groups, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-traffic-distribution-groups.html">Set up traffic distribution groups</a> in
 *    the <i>Amazon Connect Administrator Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateTrafficDistributionGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateTrafficDistributionGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateTrafficDistributionGroupRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTrafficDistributionGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficDistributionGroupResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTrafficDistributionGroupCommandInput - {@link CreateTrafficDistributionGroupCommandInput}
 * @returns {@link CreateTrafficDistributionGroupCommandOutput}
 * @see {@link CreateTrafficDistributionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficDistributionGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>The resource is not ready.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class CreateTrafficDistributionGroupCommand extends $Command
  .classBuilder<
    CreateTrafficDistributionGroupCommandInput,
    CreateTrafficDistributionGroupCommandOutput,
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
  .s("AmazonConnectService", "CreateTrafficDistributionGroup", {})
  .n("ConnectClient", "CreateTrafficDistributionGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateTrafficDistributionGroupCommand)
  .de(de_CreateTrafficDistributionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrafficDistributionGroupRequest;
      output: CreateTrafficDistributionGroupResponse;
    };
    sdk: {
      input: CreateTrafficDistributionGroupCommandInput;
      output: CreateTrafficDistributionGroupCommandOutput;
    };
  };
}
