// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListApplicationsRequest, ListApplicationsResponse } from "../models/models_0";
import { de_ListApplicationsCommand, se_ListApplicationsCommand } from "../protocols/Aws_restJson1";
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
 * <p>Lists applications owned by the requester.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, ListApplicationsCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, ListApplicationsCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
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
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 * <p>Base exception class for all service exceptions from ServerlessApplicationRepository service.</p>
 *
 * @public
 */
export class ListApplicationsCommand extends $Command
  .classBuilder<
    ListApplicationsCommandInput,
    ListApplicationsCommandOutput,
    ServerlessApplicationRepositoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServerlessApplicationRepositoryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ServerlessApplicationRepository", "ListApplications", {})
  .n("ServerlessApplicationRepositoryClient", "ListApplicationsCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationsCommand)
  .de(de_ListApplicationsCommand)
  .build() {}
