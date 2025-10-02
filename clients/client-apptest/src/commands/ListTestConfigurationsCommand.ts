// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTestConfigurationsRequest, ListTestConfigurationsResponse } from "../models/models_0";
import { de_ListTestConfigurationsCommand, se_ListTestConfigurationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestConfigurationsCommand}.
 */
export interface ListTestConfigurationsCommandInput extends ListTestConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestConfigurationsCommand}.
 */
export interface ListTestConfigurationsCommandOutput extends ListTestConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Lists test configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, ListTestConfigurationsCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, ListTestConfigurationsCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * // import type { AppTestClientConfig } from "@aws-sdk/client-apptest";
 * const config = {}; // type is AppTestClientConfig
 * const client = new AppTestClient(config);
 * const input = { // ListTestConfigurationsRequest
 *   testConfigurationIds: [ // TestConfigurationIdList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTestConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestConfigurationsResponse
 * //   testConfigurations: [ // TestConfigurationList // required
 * //     { // TestConfigurationSummary
 * //       testConfigurationId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //       latestVersion: Number("int"), // required
 * //       testConfigurationArn: "STRING_VALUE", // required
 * //       status: "Active" || "Deleting", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastUpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestConfigurationsCommandInput - {@link ListTestConfigurationsCommandInput}
 * @returns {@link ListTestConfigurationsCommandOutput}
 * @see {@link ListTestConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListTestConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AppTestClientResolvedConfig | config} for AppTestClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter provided in the request is not valid.</p>
 *
 * @throws {@link AppTestServiceException}
 * <p>Base exception class for all service exceptions from AppTest service.</p>
 *
 *
 * @public
 */
export class ListTestConfigurationsCommand extends $Command
  .classBuilder<
    ListTestConfigurationsCommandInput,
    ListTestConfigurationsCommandOutput,
    AppTestClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppTestClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsApptestControlPlaneService", "ListTestConfigurations", {})
  .n("AppTestClient", "ListTestConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListTestConfigurationsCommand)
  .de(de_ListTestConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestConfigurationsRequest;
      output: ListTestConfigurationsResponse;
    };
    sdk: {
      input: ListTestConfigurationsCommandInput;
      output: ListTestConfigurationsCommandOutput;
    };
  };
}
