// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListApplicationDependenciesRequest, ListApplicationDependenciesResponse } from "../models/models_0";
import { ListApplicationDependencies } from "../schemas/schemas_0";
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
 * The input for {@link ListApplicationDependenciesCommand}.
 */
export interface ListApplicationDependenciesCommandInput extends ListApplicationDependenciesRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationDependenciesCommand}.
 */
export interface ListApplicationDependenciesCommandOutput
  extends ListApplicationDependenciesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the list of applications nested in the containing application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, ListApplicationDependenciesCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, ListApplicationDependenciesCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * // import type { ServerlessApplicationRepositoryClientConfig } from "@aws-sdk/client-serverlessapplicationrepository";
 * const config = {}; // type is ServerlessApplicationRepositoryClientConfig
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // ListApplicationDependenciesRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   MaxItems: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SemanticVersion: "STRING_VALUE",
 * };
 * const command = new ListApplicationDependenciesCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationDependenciesResponse
 * //   Dependencies: [ // __listOfApplicationDependencySummary
 * //     { // ApplicationDependencySummary
 * //       ApplicationId: "STRING_VALUE", // required
 * //       SemanticVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationDependenciesCommandInput - {@link ListApplicationDependenciesCommandInput}
 * @returns {@link ListApplicationDependenciesCommandOutput}
 * @see {@link ListApplicationDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationDependenciesCommandOutput} for command's `response` shape.
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
export class ListApplicationDependenciesCommand extends $Command
  .classBuilder<
    ListApplicationDependenciesCommandInput,
    ListApplicationDependenciesCommandOutput,
    ServerlessApplicationRepositoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServerlessApplicationRepositoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServerlessApplicationRepository", "ListApplicationDependencies", {})
  .n("ServerlessApplicationRepositoryClient", "ListApplicationDependenciesCommand")
  .sc(ListApplicationDependencies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationDependenciesRequest;
      output: ListApplicationDependenciesResponse;
    };
    sdk: {
      input: ListApplicationDependenciesCommandInput;
      output: ListApplicationDependenciesCommandOutput;
    };
  };
}
