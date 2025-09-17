// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetStudioSessionMappingInput, GetStudioSessionMappingOutput } from "../models/models_0";
import { de_GetStudioSessionMappingCommand, se_GetStudioSessionMappingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStudioSessionMappingCommand}.
 */
export interface GetStudioSessionMappingCommandInput extends GetStudioSessionMappingInput {}
/**
 * @public
 *
 * The output of {@link GetStudioSessionMappingCommand}.
 */
export interface GetStudioSessionMappingCommandOutput extends GetStudioSessionMappingOutput, __MetadataBearer {}

/**
 * <p>Fetches mapping details for the specified Amazon EMR Studio and identity (user
 *          or group).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // GetStudioSessionMappingInput
 *   StudioId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE",
 *   IdentityName: "STRING_VALUE",
 *   IdentityType: "USER" || "GROUP", // required
 * };
 * const command = new GetStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * // { // GetStudioSessionMappingOutput
 * //   SessionMapping: { // SessionMappingDetail
 * //     StudioId: "STRING_VALUE",
 * //     IdentityId: "STRING_VALUE",
 * //     IdentityName: "STRING_VALUE",
 * //     IdentityType: "USER" || "GROUP",
 * //     SessionPolicyArn: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStudioSessionMappingCommandInput - {@link GetStudioSessionMappingCommandInput}
 * @returns {@link GetStudioSessionMappingCommandOutput}
 * @see {@link GetStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link GetStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class GetStudioSessionMappingCommand extends $Command
  .classBuilder<
    GetStudioSessionMappingCommandInput,
    GetStudioSessionMappingCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "GetStudioSessionMapping", {})
  .n("EMRClient", "GetStudioSessionMappingCommand")
  .f(void 0, void 0)
  .ser(se_GetStudioSessionMappingCommand)
  .de(de_GetStudioSessionMappingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStudioSessionMappingInput;
      output: GetStudioSessionMappingOutput;
    };
    sdk: {
      input: GetStudioSessionMappingCommandInput;
      output: GetStudioSessionMappingCommandOutput;
    };
  };
}
