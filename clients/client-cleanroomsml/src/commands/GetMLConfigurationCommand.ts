// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMLConfigurationRequest, GetMLConfigurationResponse } from "../models/models_0";
import { GetMLConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMLConfigurationCommand}.
 */
export interface GetMLConfigurationCommandInput extends GetMLConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetMLConfigurationCommand}.
 */
export interface GetMLConfigurationCommandOutput extends GetMLConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific ML configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetMLConfigurationCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetMLConfigurationCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetMLConfigurationRequest
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetMLConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetMLConfigurationResponse
 * //   membershipIdentifier: "STRING_VALUE", // required
 * //   defaultOutputLocation: { // MLOutputConfiguration
 * //     destination: { // Destination
 * //       s3Destination: { // S3ConfigMap
 * //         s3Uri: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     roleArn: "STRING_VALUE", // required
 * //   },
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetMLConfigurationCommandInput - {@link GetMLConfigurationCommandInput}
 * @returns {@link GetMLConfigurationCommandOutput}
 * @see {@link GetMLConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetMLConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class GetMLConfigurationCommand extends $Command
  .classBuilder<
    GetMLConfigurationCommandInput,
    GetMLConfigurationCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "GetMLConfiguration", {})
  .n("CleanRoomsMLClient", "GetMLConfigurationCommand")
  .sc(GetMLConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMLConfigurationRequest;
      output: GetMLConfigurationResponse;
    };
    sdk: {
      input: GetMLConfigurationCommandInput;
      output: GetMLConfigurationCommandOutput;
    };
  };
}
