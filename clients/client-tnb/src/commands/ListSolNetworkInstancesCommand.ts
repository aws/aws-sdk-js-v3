// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSolNetworkInstancesInput, ListSolNetworkInstancesOutput } from "../models/models_0";
import { de_ListSolNetworkInstancesCommand, se_ListSolNetworkInstancesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSolNetworkInstancesCommand}.
 */
export interface ListSolNetworkInstancesCommandInput extends ListSolNetworkInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListSolNetworkInstancesCommand}.
 */
export interface ListSolNetworkInstancesCommandOutput extends ListSolNetworkInstancesOutput, __MetadataBearer {}

/**
 * <p>Lists your network instances.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolNetworkInstancesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolNetworkInstancesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TnbClient(config);
 * const input = { // ListSolNetworkInstancesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolNetworkInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListSolNetworkInstancesOutput
 * //   nextToken: "STRING_VALUE",
 * //   networkInstances: [ // ListSolNetworkInstanceResources
 * //     { // ListSolNetworkInstanceInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       nsInstanceName: "STRING_VALUE", // required
 * //       nsInstanceDescription: "STRING_VALUE", // required
 * //       nsdId: "STRING_VALUE", // required
 * //       nsdInfoId: "STRING_VALUE", // required
 * //       nsState: "INSTANTIATED" || "NOT_INSTANTIATED" || "UPDATED" || "IMPAIRED" || "UPDATE_FAILED" || "STOPPED" || "DELETED" || "INSTANTIATE_IN_PROGRESS" || "INTENT_TO_UPDATE_IN_PROGRESS" || "UPDATE_IN_PROGRESS" || "TERMINATE_IN_PROGRESS", // required
 * //       metadata: { // ListSolNetworkInstanceMetadata
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolNetworkInstancesCommandInput - {@link ListSolNetworkInstancesCommandInput}
 * @returns {@link ListSolNetworkInstancesCommandOutput}
 * @see {@link ListSolNetworkInstancesCommandInput} for command's `input` shape.
 * @see {@link ListSolNetworkInstancesCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy
 *          request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 * @public
 */
export class ListSolNetworkInstancesCommand extends $Command
  .classBuilder<
    ListSolNetworkInstancesCommandInput,
    ListSolNetworkInstancesCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "ListSolNetworkInstances", {})
  .n("TnbClient", "ListSolNetworkInstancesCommand")
  .f(void 0, void 0)
  .ser(se_ListSolNetworkInstancesCommand)
  .de(de_ListSolNetworkInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSolNetworkInstancesInput;
      output: ListSolNetworkInstancesOutput;
    };
    sdk: {
      input: ListSolNetworkInstancesCommandInput;
      output: ListSolNetworkInstancesCommandOutput;
    };
  };
}
