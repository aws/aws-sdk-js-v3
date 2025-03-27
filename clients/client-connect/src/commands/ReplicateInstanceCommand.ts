// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ReplicateInstanceRequest,
  ReplicateInstanceRequestFilterSensitiveLog,
  ReplicateInstanceResponse,
} from "../models/models_2";
import { de_ReplicateInstanceCommand, se_ReplicateInstanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReplicateInstanceCommand}.
 */
export interface ReplicateInstanceCommandInput extends ReplicateInstanceRequest {}
/**
 * @public
 *
 * The output of {@link ReplicateInstanceCommand}.
 */
export interface ReplicateInstanceCommandOutput extends ReplicateInstanceResponse, __MetadataBearer {}

/**
 * <p>Replicates an Amazon Connect instance in the specified Amazon Web Services Region and
 *    copies configuration information for Amazon Connect resources across Amazon Web Services Regions. </p>
 *          <p>For more information about replicating an Amazon Connect instance, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-replica-connect-instance.html">Create
 *     a replica of your existing Amazon Connect instance</a> in the <i>Amazon Connect
 *     Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ReplicateInstanceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ReplicateInstanceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ReplicateInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ReplicaRegion: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   ReplicaAlias: "STRING_VALUE", // required
 * };
 * const command = new ReplicateInstanceCommand(input);
 * const response = await client.send(command);
 * // { // ReplicateInstanceResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReplicateInstanceCommandInput - {@link ReplicateInstanceCommandInput}
 * @returns {@link ReplicateInstanceCommandOutput}
 * @see {@link ReplicateInstanceCommandInput} for command's `input` shape.
 * @see {@link ReplicateInstanceCommandOutput} for command's `response` shape.
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
export class ReplicateInstanceCommand extends $Command
  .classBuilder<
    ReplicateInstanceCommandInput,
    ReplicateInstanceCommandOutput,
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
  .s("AmazonConnectService", "ReplicateInstance", {})
  .n("ConnectClient", "ReplicateInstanceCommand")
  .f(ReplicateInstanceRequestFilterSensitiveLog, void 0)
  .ser(se_ReplicateInstanceCommand)
  .de(de_ReplicateInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplicateInstanceRequest;
      output: ReplicateInstanceResponse;
    };
    sdk: {
      input: ReplicateInstanceCommandInput;
      output: ReplicateInstanceCommandOutput;
    };
  };
}
