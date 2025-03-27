// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBackendJobsRequest, ListBackendJobsResponse } from "../models/models_0";
import { de_ListBackendJobsCommand, se_ListBackendJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBackendJobsCommand}.
 */
export interface ListBackendJobsCommandInput extends ListBackendJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListBackendJobsCommand}.
 */
export interface ListBackendJobsCommandOutput extends ListBackendJobsResponse, __MetadataBearer {}

/**
 * <p>Lists the jobs for the backend of an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, ListBackendJobsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, ListBackendJobsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // ListBackendJobsRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Operation: "STRING_VALUE",
 *   Status: "STRING_VALUE",
 * };
 * const command = new ListBackendJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListBackendJobsResponse
 * //   Jobs: [ // ListOfBackendJobRespObj
 * //     { // BackendJobRespObj
 * //       AppId: "STRING_VALUE", // required
 * //       BackendEnvironmentName: "STRING_VALUE", // required
 * //       CreateTime: "STRING_VALUE",
 * //       Error: "STRING_VALUE",
 * //       JobId: "STRING_VALUE",
 * //       Operation: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       UpdateTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBackendJobsCommandInput - {@link ListBackendJobsCommandInput}
 * @returns {@link ListBackendJobsCommandOutput}
 * @see {@link ListBackendJobsCommandInput} for command's `input` shape.
 * @see {@link ListBackendJobsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>An error returned if a request is not formed properly.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>An error returned if there's a temporary issue with the service.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An error returned when a specific resource type is not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 *
 * @throws {@link AmplifyBackendServiceException}
 * <p>Base exception class for all service exceptions from AmplifyBackend service.</p>
 *
 *
 * @public
 */
export class ListBackendJobsCommand extends $Command
  .classBuilder<
    ListBackendJobsCommandInput,
    ListBackendJobsCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyBackend", "ListBackendJobs", {})
  .n("AmplifyBackendClient", "ListBackendJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListBackendJobsCommand)
  .de(de_ListBackendJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBackendJobsRequest;
      output: ListBackendJobsResponse;
    };
    sdk: {
      input: ListBackendJobsCommandInput;
      output: ListBackendJobsCommandOutput;
    };
  };
}
