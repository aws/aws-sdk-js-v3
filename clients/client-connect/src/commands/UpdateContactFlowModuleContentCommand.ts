// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateContactFlowModuleContentRequest, UpdateContactFlowModuleContentResponse } from "../models/models_3";
import { UpdateContactFlowModuleContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactFlowModuleContentCommand}.
 */
export interface UpdateContactFlowModuleContentCommandInput extends UpdateContactFlowModuleContentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactFlowModuleContentCommand}.
 */
export interface UpdateContactFlowModuleContentCommandOutput
  extends UpdateContactFlowModuleContentResponse,
    __MetadataBearer {}

/**
 * <p>Updates specified flow module for the specified Amazon Connect instance. </p>
 *          <p>Use the <code>$SAVED</code> alias in the request to describe the <code>SAVED</code> content of a Flow. For
 *    example, <code>arn:aws:.../contact-flow/\{id\}:$SAVED</code>. After a flow is published, <code>$SAVED</code> needs to
 *    be supplied to view saved content that has not been published.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowModuleContentCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowModuleContentCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactFlowModuleContentRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowModuleId: "STRING_VALUE", // required
 *   Content: "STRING_VALUE",
 *   Settings: "STRING_VALUE",
 * };
 * const command = new UpdateContactFlowModuleContentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactFlowModuleContentCommandInput - {@link UpdateContactFlowModuleContentCommandInput}
 * @returns {@link UpdateContactFlowModuleContentCommandOutput}
 * @see {@link UpdateContactFlowModuleContentCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowModuleContentCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidContactFlowModuleException} (client fault)
 *  <p>The problems with the module. Please fix before trying again.</p>
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
export class UpdateContactFlowModuleContentCommand extends $Command
  .classBuilder<
    UpdateContactFlowModuleContentCommandInput,
    UpdateContactFlowModuleContentCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateContactFlowModuleContent", {})
  .n("ConnectClient", "UpdateContactFlowModuleContentCommand")
  .sc(UpdateContactFlowModuleContent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactFlowModuleContentRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactFlowModuleContentCommandInput;
      output: UpdateContactFlowModuleContentCommandOutput;
    };
  };
}
