// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupRequest, GetGroupResponse } from "../models/models_0";
import { de_GetGroupCommand, se_GetGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGroupCommand}.
 */
export interface GetGroupCommandInput extends GetGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupCommand}.
 */
export interface GetGroupCommandOutput extends GetGroupResponse, __MetadataBearer {}

/**
 * Retrieves information about a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetGroupCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetGroupCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // GetGroupRequest
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new GetGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LastUpdatedTimestamp: "STRING_VALUE",
 * //   LatestVersion: "STRING_VALUE",
 * //   LatestVersionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGroupCommandInput - {@link GetGroupCommandInput}
 * @returns {@link GetGroupCommandOutput}
 * @see {@link GetGroupCommandInput} for command's `input` shape.
 * @see {@link GetGroupCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class GetGroupCommand extends $Command
  .classBuilder<
    GetGroupCommandInput,
    GetGroupCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "GetGroup", {})
  .n("GreengrassClient", "GetGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetGroupCommand)
  .de(de_GetGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupRequest;
      output: GetGroupResponse;
    };
    sdk: {
      input: GetGroupCommandInput;
      output: GetGroupCommandOutput;
    };
  };
}
