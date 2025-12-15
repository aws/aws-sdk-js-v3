// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MigrationHubRefactorSpacesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubRefactorSpacesClient";
import type { ListServicesRequest, ListServicesResponse } from "../models/models_0";
import { ListServices$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServicesCommand}.
 */
export interface ListServicesCommandInput extends ListServicesRequest {}
/**
 * @public
 *
 * The output of {@link ListServicesCommand}.
 */
export interface ListServicesCommandOutput extends ListServicesResponse, __MetadataBearer {}

/**
 * <p>Lists all the Amazon Web Services Migration Hub Refactor Spaces services within an application. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, ListServicesCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, ListServicesCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * // import type { MigrationHubRefactorSpacesClientConfig } from "@aws-sdk/client-migration-hub-refactor-spaces";
 * const config = {}; // type is MigrationHubRefactorSpacesClientConfig
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const input = { // ListServicesRequest
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesResponse
 * //   ServiceSummaryList: [ // ServiceSummaries
 * //     { // ServiceSummary
 * //       ServiceId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       CreatedByAccountId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EnvironmentId: "STRING_VALUE",
 * //       ApplicationId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       EndpointType: "STRING_VALUE",
 * //       UrlEndpoint: { // UrlEndpointSummary
 * //         Url: "STRING_VALUE",
 * //         HealthUrl: "STRING_VALUE",
 * //       },
 * //       LambdaEndpoint: { // LambdaEndpointSummary
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       State: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Error: { // ErrorResponse
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //         AccountId: "STRING_VALUE",
 * //         ResourceIdentifier: "STRING_VALUE",
 * //         ResourceType: "STRING_VALUE",
 * //         AdditionalDetails: { // AdditionalDetails
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServicesCommandInput - {@link ListServicesCommandInput}
 * @returns {@link ListServicesCommandOutput}
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubRefactorSpacesClientResolvedConfig | config} for MigrationHubRefactorSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied because the request was throttled. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Service.
 *     </p>
 *
 * @throws {@link MigrationHubRefactorSpacesServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubRefactorSpaces service.</p>
 *
 *
 * @public
 */
export class ListServicesCommand extends $Command
  .classBuilder<
    ListServicesCommandInput,
    ListServicesCommandOutput,
    MigrationHubRefactorSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubRefactorSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RefactorSpaces", "ListServices", {})
  .n("MigrationHubRefactorSpacesClient", "ListServicesCommand")
  .sc(ListServices$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicesRequest;
      output: ListServicesResponse;
    };
    sdk: {
      input: ListServicesCommandInput;
      output: ListServicesCommandOutput;
    };
  };
}
