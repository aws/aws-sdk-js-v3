// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPromptFileRequest, GetPromptFileResponse } from "../models/models_1";
import { GetPromptFile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPromptFileCommand}.
 */
export interface GetPromptFileCommandInput extends GetPromptFileRequest {}
/**
 * @public
 *
 * The output of {@link GetPromptFileCommand}.
 */
export interface GetPromptFileCommandOutput extends GetPromptFileResponse, __MetadataBearer {}

/**
 * <p>Gets the prompt file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetPromptFileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetPromptFileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetPromptFileRequest
 *   InstanceId: "STRING_VALUE", // required
 *   PromptId: "STRING_VALUE", // required
 * };
 * const command = new GetPromptFileCommand(input);
 * const response = await client.send(command);
 * // { // GetPromptFileResponse
 * //   PromptPresignedUrl: "STRING_VALUE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPromptFileCommandInput - {@link GetPromptFileCommandInput}
 * @returns {@link GetPromptFileCommandOutput}
 * @see {@link GetPromptFileCommandInput} for command's `input` shape.
 * @see {@link GetPromptFileCommandOutput} for command's `response` shape.
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
export class GetPromptFileCommand extends $Command
  .classBuilder<
    GetPromptFileCommandInput,
    GetPromptFileCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "GetPromptFile", {})
  .n("ConnectClient", "GetPromptFileCommand")
  .sc(GetPromptFile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPromptFileRequest;
      output: GetPromptFileResponse;
    };
    sdk: {
      input: GetPromptFileCommandInput;
      output: GetPromptFileCommandOutput;
    };
  };
}
