// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateContactFlowVersionRequest, CreateContactFlowVersionResponse } from "../models/models_0";
import { CreateContactFlowVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContactFlowVersionCommand}.
 */
export interface CreateContactFlowVersionCommandInput extends CreateContactFlowVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateContactFlowVersionCommand}.
 */
export interface CreateContactFlowVersionCommandOutput extends CreateContactFlowVersionResponse, __MetadataBearer {}

/**
 * <p>Publishes a new version of the flow provided. Versions are immutable and monotonically increasing. If the
 *     <code>FlowContentSha256</code> provided is different from the <code>FlowContentSha256</code> of the
 *     <code>$LATEST</code> published flow content, then an error is returned. This API only supports creating versions for
 *    flows of type <code>Campaign</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateContactFlowVersionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateContactFlowVersionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateContactFlowVersionRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ContactFlowId: "STRING_VALUE", // required
 *   FlowContentSha256: "STRING_VALUE",
 *   ContactFlowVersion: Number("long"),
 *   LastModifiedTime: new Date("TIMESTAMP"),
 *   LastModifiedRegion: "STRING_VALUE",
 * };
 * const command = new CreateContactFlowVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateContactFlowVersionResponse
 * //   ContactFlowArn: "STRING_VALUE",
 * //   Version: Number("long"),
 * // };
 *
 * ```
 *
 * @param CreateContactFlowVersionCommandInput - {@link CreateContactFlowVersionCommandInput}
 * @returns {@link CreateContactFlowVersionCommandOutput}
 * @see {@link CreateContactFlowVersionCommandInput} for command's `input` shape.
 * @see {@link CreateContactFlowVersionCommandOutput} for command's `response` shape.
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
export class CreateContactFlowVersionCommand extends $Command
  .classBuilder<
    CreateContactFlowVersionCommandInput,
    CreateContactFlowVersionCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateContactFlowVersion", {})
  .n("ConnectClient", "CreateContactFlowVersionCommand")
  .sc(CreateContactFlowVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContactFlowVersionRequest;
      output: CreateContactFlowVersionResponse;
    };
    sdk: {
      input: CreateContactFlowVersionCommandInput;
      output: CreateContactFlowVersionCommandOutput;
    };
  };
}
