// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateApprovedOriginRequest } from "../models/models_0";
import { de_AssociateApprovedOriginCommand, se_AssociateApprovedOriginCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateApprovedOriginCommand}.
 */
export interface AssociateApprovedOriginCommandInput extends AssociateApprovedOriginRequest {}
/**
 * @public
 *
 * The output of {@link AssociateApprovedOriginCommand}.
 */
export interface AssociateApprovedOriginCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates an approved origin to an Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateApprovedOriginCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateApprovedOriginCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateApprovedOriginRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Origin: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new AssociateApprovedOriginCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateApprovedOriginCommandInput - {@link AssociateApprovedOriginCommandInput}
 * @returns {@link AssociateApprovedOriginCommandOutput}
 * @see {@link AssociateApprovedOriginCommandInput} for command's `input` shape.
 * @see {@link AssociateApprovedOriginCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class AssociateApprovedOriginCommand extends $Command
  .classBuilder<
    AssociateApprovedOriginCommandInput,
    AssociateApprovedOriginCommandOutput,
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
  .s("AmazonConnectService", "AssociateApprovedOrigin", {})
  .n("ConnectClient", "AssociateApprovedOriginCommand")
  .f(void 0, void 0)
  .ser(se_AssociateApprovedOriginCommand)
  .de(de_AssociateApprovedOriginCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateApprovedOriginRequest;
      output: {};
    };
    sdk: {
      input: AssociateApprovedOriginCommandInput;
      output: AssociateApprovedOriginCommandOutput;
    };
  };
}
