// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListApplicationVersionsRequest, ListApplicationVersionsResponse } from "../models/models_0";
import { ListApplicationVersions } from "../schemas/schemas_1_Application";
import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServerlessApplicationRepositoryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationVersionsCommand}.
 */
export interface ListApplicationVersionsCommandInput extends ListApplicationVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationVersionsCommand}.
 */
export interface ListApplicationVersionsCommandOutput extends ListApplicationVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists versions for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, ListApplicationVersionsCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, ListApplicationVersionsCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * // import type { ServerlessApplicationRepositoryClientConfig } from "@aws-sdk/client-serverlessapplicationrepository";
 * const config = {}; // type is ServerlessApplicationRepositoryClientConfig
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // ListApplicationVersionsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   MaxItems: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationVersionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Versions: [ // __listOfVersionSummary
 * //     { // VersionSummary
 * //       ApplicationId: "STRING_VALUE", // required
 * //       CreationTime: "STRING_VALUE", // required
 * //       SemanticVersion: "STRING_VALUE", // required
 * //       SourceCodeUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListApplicationVersionsCommandInput - {@link ListApplicationVersionsCommandInput}
 * @returns {@link ListApplicationVersionsCommandOutput}
 * @see {@link ListApplicationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationVersionsCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for ServerlessApplicationRepositoryClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is not authenticated.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The AWS Serverless Application Repository service encountered an internal error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The client is sending more than the allowed number of requests per unit of time.</p>
 *
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 * <p>Base exception class for all service exceptions from ServerlessApplicationRepository service.</p>
 *
 *
 * @public
 */
export class ListApplicationVersionsCommand extends $Command
  .classBuilder<
    ListApplicationVersionsCommandInput,
    ListApplicationVersionsCommandOutput,
    ServerlessApplicationRepositoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServerlessApplicationRepositoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServerlessApplicationRepository", "ListApplicationVersions", {})
  .n("ServerlessApplicationRepositoryClient", "ListApplicationVersionsCommand")
  .sc(ListApplicationVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationVersionsRequest;
      output: ListApplicationVersionsResponse;
    };
    sdk: {
      input: ListApplicationVersionsCommandInput;
      output: ListApplicationVersionsCommandOutput;
    };
  };
}
