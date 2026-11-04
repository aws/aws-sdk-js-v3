// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBackendJobsRequest, ListBackendJobsResponse } from "../models/models_0";
import { ListBackendJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the jobs for the backend of an Amplify app.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, ListBackendJobsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, ListBackendJobsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
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
 *
 * An error returned if a request is not formed properly.
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *
 * An error returned if there's a temporary issue with the service.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * An error returned when a specific resource type is not found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * An error that is returned when a limit of a specific type has been exceeded.
 *
 * @throws {@link AmplifyBackendServiceException}
 *
 * Base exception class for all service exceptions from AmplifyBackend service.
 *
 * @public
 */
export class ListBackendJobsCommand extends command<ListBackendJobsCommandInput, ListBackendJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListBackendJobs",
  ListBackendJobs$
) {
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
