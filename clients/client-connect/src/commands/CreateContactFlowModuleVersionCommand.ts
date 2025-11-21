// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateContactFlowModuleVersionRequest, CreateContactFlowModuleVersionResponse } from "../models/models_0";
import { CreateContactFlowModuleVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContactFlowModuleVersionCommand}.
 */
export interface CreateContactFlowModuleVersionCommandInput extends CreateContactFlowModuleVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateContactFlowModuleVersionCommand}.
 */
export interface CreateContactFlowModuleVersionCommandOutput
  extends CreateContactFlowModuleVersionResponse,
    __MetadataBearer {}

/**
 * <p>Creates an immutable snapshot of a contact flow module, preserving its content and settings at a specific point in time for version control and rollback capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateContactFlowModuleVersionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateContactFlowModuleVersionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateContactFlowModuleVersionRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ContactFlowModuleId: "STRING_VALUE", // required
 *   FlowModuleContentSha256: "STRING_VALUE",
 * };
 * const command = new CreateContactFlowModuleVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateContactFlowModuleVersionResponse
 * //   ContactFlowModuleArn: "STRING_VALUE",
 * //   Version: Number("long"),
 * // };
 *
 * ```
 *
 * @param CreateContactFlowModuleVersionCommandInput - {@link CreateContactFlowModuleVersionCommandInput}
 * @returns {@link CreateContactFlowModuleVersionCommandOutput}
 * @see {@link CreateContactFlowModuleVersionCommandInput} for command's `input` shape.
 * @see {@link CreateContactFlowModuleVersionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
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
export class CreateContactFlowModuleVersionCommand extends $Command
  .classBuilder<
    CreateContactFlowModuleVersionCommandInput,
    CreateContactFlowModuleVersionCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateContactFlowModuleVersion", {})
  .n("ConnectClient", "CreateContactFlowModuleVersionCommand")
  .sc(CreateContactFlowModuleVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContactFlowModuleVersionRequest;
      output: CreateContactFlowModuleVersionResponse;
    };
    sdk: {
      input: CreateContactFlowModuleVersionCommandInput;
      output: CreateContactFlowModuleVersionCommandOutput;
    };
  };
}
