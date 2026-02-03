// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeTestCaseRequest, DescribeTestCaseResponse } from "../models/models_1";
import { DescribeTestCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTestCaseCommand}.
 */
export interface DescribeTestCaseCommandInput extends DescribeTestCaseRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTestCaseCommand}.
 */
export interface DescribeTestCaseCommandOutput extends DescribeTestCaseResponse, __MetadataBearer {}

/**
 * <p>Describes the specified test case and allows you to get the content and metadata of the test case for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeTestCaseCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeTestCaseCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeTestCaseRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TestCaseId: "STRING_VALUE", // required
 *   Status: "PUBLISHED" || "SAVED",
 * };
 * const command = new DescribeTestCaseCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTestCaseResponse
 * //   TestCase: { // TestCase
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Content: "STRING_VALUE",
 * //     EntryPoint: { // TestCaseEntryPoint
 * //       Type: "VOICE_CALL",
 * //       VoiceCallEntryPointParameters: { // VoiceCallEntryPointParameters
 * //         SourcePhoneNumber: "STRING_VALUE",
 * //         DestinationPhoneNumber: "STRING_VALUE",
 * //         FlowId: "STRING_VALUE",
 * //       },
 * //     },
 * //     InitializationData: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "PUBLISHED" || "SAVED",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     TestCaseSha256: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTestCaseCommandInput - {@link DescribeTestCaseCommandInput}
 * @returns {@link DescribeTestCaseCommandOutput}
 * @see {@link DescribeTestCaseCommandInput} for command's `input` shape.
 * @see {@link DescribeTestCaseCommandOutput} for command's `response` shape.
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
export class DescribeTestCaseCommand extends $Command
  .classBuilder<
    DescribeTestCaseCommandInput,
    DescribeTestCaseCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeTestCase", {})
  .n("ConnectClient", "DescribeTestCaseCommand")
  .sc(DescribeTestCase$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTestCaseRequest;
      output: DescribeTestCaseResponse;
    };
    sdk: {
      input: DescribeTestCaseCommandInput;
      output: DescribeTestCaseCommandOutput;
    };
  };
}
