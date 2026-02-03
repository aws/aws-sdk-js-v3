// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateTestCaseRequest, UpdateTestCaseResponse } from "../models/models_3";
import { UpdateTestCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTestCaseCommand}.
 */
export interface UpdateTestCaseCommandInput extends UpdateTestCaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTestCaseCommand}.
 */
export interface UpdateTestCaseCommandOutput extends UpdateTestCaseResponse, __MetadataBearer {}

/**
 * <p>Updates any of the metadata for a test case, such as the name, description, and status or content of an existing test case. This API doesn't allow customers to update the tags of the test case resource for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateTestCaseCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateTestCaseCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateTestCaseRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TestCaseId: "STRING_VALUE", // required
 *   Content: "STRING_VALUE",
 *   EntryPoint: { // TestCaseEntryPoint
 *     Type: "VOICE_CALL",
 *     VoiceCallEntryPointParameters: { // VoiceCallEntryPointParameters
 *       SourcePhoneNumber: "STRING_VALUE",
 *       DestinationPhoneNumber: "STRING_VALUE",
 *       FlowId: "STRING_VALUE",
 *     },
 *   },
 *   InitializationData: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Status: "PUBLISHED" || "SAVED",
 *   LastModifiedTime: new Date("TIMESTAMP"),
 *   LastModifiedRegion: "STRING_VALUE",
 * };
 * const command = new UpdateTestCaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTestCaseCommandInput - {@link UpdateTestCaseCommandInput}
 * @returns {@link UpdateTestCaseCommandOutput}
 * @see {@link UpdateTestCaseCommandInput} for command's `input` shape.
 * @see {@link UpdateTestCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
 * @throws {@link InvalidTestCaseException} (client fault)
 *  <p>The test is not valid.</p>
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
export class UpdateTestCaseCommand extends $Command
  .classBuilder<
    UpdateTestCaseCommandInput,
    UpdateTestCaseCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateTestCase", {})
  .n("ConnectClient", "UpdateTestCaseCommand")
  .sc(UpdateTestCase$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTestCaseRequest;
      output: {};
    };
    sdk: {
      input: UpdateTestCaseCommandInput;
      output: UpdateTestCaseCommandOutput;
    };
  };
}
