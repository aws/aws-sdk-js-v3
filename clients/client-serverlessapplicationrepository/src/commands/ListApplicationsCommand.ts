// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListApplicationsRequest, ListApplicationsResponse } from "../models/models_0";
import { ListApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListApplicationsCommand}.
 */
export interface ListApplicationsCommandInput extends ListApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationsCommand}.
 */
export interface ListApplicationsCommandOutput extends ListApplicationsResponse, __MetadataBearer {}

/**
 * Lists applications owned by the requester.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, ListApplicationsCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, ListApplicationsCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * // import type { ServerlessApplicationRepositoryClientConfig } from "@aws-sdk/client-serverlessapplicationrepository";
 * const config = {}; // type is ServerlessApplicationRepositoryClientConfig
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // ListApplicationsRequest
 *   MaxItems: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationsResponse
 * //   Applications: [ // __listOfApplicationSummary
 * //     { // ApplicationSummary
 * //       ApplicationId: "STRING_VALUE", // required
 * //       Author: "STRING_VALUE", // required
 * //       CreationTime: "STRING_VALUE",
 * //       Description: "STRING_VALUE", // required
 * //       HomePageUrl: "STRING_VALUE",
 * //       Labels: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       Name: "STRING_VALUE", // required
 * //       SpdxLicenseId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationsCommandInput - {@link ListApplicationsCommandInput}
 * @returns {@link ListApplicationsCommandOutput}
 * @see {@link ListApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for ServerlessApplicationRepositoryClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * One of the parameters in the request is invalid.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is not authenticated.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The AWS Serverless Application Repository service encountered an internal error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource (for example, an access policy statement) specified in the request doesn't exist.
 *
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 *
 * Base exception class for all service exceptions from ServerlessApplicationRepository service.
 *
 * @public
 */
export class ListApplicationsCommand extends command<ListApplicationsCommandInput, ListApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "ListApplications",
  ListApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationsRequest;
      output: ListApplicationsResponse;
    };
    sdk: {
      input: ListApplicationsCommandInput;
      output: ListApplicationsCommandOutput;
    };
  };
}
