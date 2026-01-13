// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeContactFlowModuleAliasRequest, DescribeContactFlowModuleAliasResponse } from "../models/models_1";
import { DescribeContactFlowModuleAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeContactFlowModuleAliasCommand}.
 */
export interface DescribeContactFlowModuleAliasCommandInput extends DescribeContactFlowModuleAliasRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContactFlowModuleAliasCommand}.
 */
export interface DescribeContactFlowModuleAliasCommandOutput extends DescribeContactFlowModuleAliasResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific alias, including which version it currently points to and its
 *    metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeContactFlowModuleAliasCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeContactFlowModuleAliasCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeContactFlowModuleAliasRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowModuleId: "STRING_VALUE", // required
 *   AliasId: "STRING_VALUE", // required
 * };
 * const command = new DescribeContactFlowModuleAliasCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContactFlowModuleAliasResponse
 * //   ContactFlowModuleAlias: { // ContactFlowModuleAliasInfo
 * //     ContactFlowModuleId: "STRING_VALUE",
 * //     ContactFlowModuleArn: "STRING_VALUE",
 * //     AliasId: "STRING_VALUE",
 * //     Version: Number("long"),
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     LastModifiedRegion: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContactFlowModuleAliasCommandInput - {@link DescribeContactFlowModuleAliasCommandInput}
 * @returns {@link DescribeContactFlowModuleAliasCommandOutput}
 * @see {@link DescribeContactFlowModuleAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeContactFlowModuleAliasCommandOutput} for command's `response` shape.
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
export class DescribeContactFlowModuleAliasCommand extends $Command
  .classBuilder<
    DescribeContactFlowModuleAliasCommandInput,
    DescribeContactFlowModuleAliasCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeContactFlowModuleAlias", {})
  .n("ConnectClient", "DescribeContactFlowModuleAliasCommand")
  .sc(DescribeContactFlowModuleAlias$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContactFlowModuleAliasRequest;
      output: DescribeContactFlowModuleAliasResponse;
    };
    sdk: {
      input: DescribeContactFlowModuleAliasCommandInput;
      output: DescribeContactFlowModuleAliasCommandOutput;
    };
  };
}
