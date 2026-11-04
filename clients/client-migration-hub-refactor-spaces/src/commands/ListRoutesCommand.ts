// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRoutesRequest, ListRoutesResponse } from "../models/models_0";
import { ListRoutes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRoutesCommand}.
 */
export interface ListRoutesCommandInput extends ListRoutesRequest {}
/**
 * @public
 *
 * The output of {@link ListRoutesCommand}.
 */
export interface ListRoutesCommandOutput extends ListRoutesResponse, __MetadataBearer {}

/**
 * Lists all the Amazon Web Services Migration Hub Refactor Spaces routes within an application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, ListRoutesCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, ListRoutesCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * // import type { MigrationHubRefactorSpacesClientConfig } from "@aws-sdk/client-migration-hub-refactor-spaces";
 * const config = {}; // type is MigrationHubRefactorSpacesClientConfig
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const input = { // ListRoutesRequest
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRoutesCommand(input);
 * const response = await client.send(command);
 * // { // ListRoutesResponse
 * //   RouteSummaryList: [ // RouteSummaries
 * //     { // RouteSummary
 * //       RouteId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       CreatedByAccountId: "STRING_VALUE",
 * //       RouteType: "STRING_VALUE",
 * //       ServiceId: "STRING_VALUE",
 * //       ApplicationId: "STRING_VALUE",
 * //       EnvironmentId: "STRING_VALUE",
 * //       SourcePath: "STRING_VALUE",
 * //       Methods: [ // HttpMethods
 * //         "STRING_VALUE",
 * //       ],
 * //       IncludeChildPaths: true || false,
 * //       PathResourceToId: { // PathResourceToId
 * //         "<keys>": "STRING_VALUE",
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
 * //       AppendSourcePath: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoutesCommandInput - {@link ListRoutesCommandInput}
 * @returns {@link ListRoutesCommandOutput}
 * @see {@link ListRoutesCommandInput} for command's `input` shape.
 * @see {@link ListRoutesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubRefactorSpacesClientResolvedConfig | config} for MigrationHubRefactorSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied because the request was throttled.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Service.
 *
 * @throws {@link MigrationHubRefactorSpacesServiceException}
 *
 * Base exception class for all service exceptions from MigrationHubRefactorSpaces service.
 *
 * @public
 */
export class ListRoutesCommand extends command<ListRoutesCommandInput, ListRoutesCommandOutput>(
  _ep0,
  _mw0,
  "ListRoutes",
  ListRoutes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoutesRequest;
      output: ListRoutesResponse;
    };
    sdk: {
      input: ListRoutesCommandInput;
      output: ListRoutesCommandOutput;
    };
  };
}
