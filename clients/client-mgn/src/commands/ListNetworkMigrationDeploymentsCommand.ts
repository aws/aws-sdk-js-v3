// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListNetworkMigrationDeployerJobResponse,
  ListNetworkMigrationDeploymentsRequest,
} from "../models/models_0";
import { ListNetworkMigrationDeployments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationDeploymentsCommand}.
 */
export interface ListNetworkMigrationDeploymentsCommandInput extends ListNetworkMigrationDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationDeploymentsCommand}.
 */
export interface ListNetworkMigrationDeploymentsCommandOutput extends ListNetworkMigrationDeployerJobResponse, __MetadataBearer {}

/**
 * Lists network migration deployment jobs and their current status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationDeploymentsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationDeploymentsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationDeploymentsRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   filters: { // ListNetworkMigrationDeployerJobFilters
 *     jobIDs: [ // ListNetworkMigrationDeployerJobIDsFilters
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkMigrationDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationDeployerJobResponse
 * //   items: [ // NetworkMigrationDeployerJobList
 * //     { // NetworkMigrationDeployerJobDetails
 * //       jobID: "STRING_VALUE",
 * //       networkMigrationExecutionID: "STRING_VALUE",
 * //       networkMigrationDefinitionID: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       statusDetails: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkMigrationDeploymentsCommandInput - {@link ListNetworkMigrationDeploymentsCommandInput}
 * @returns {@link ListNetworkMigrationDeploymentsCommandOutput}
 * @see {@link ListNetworkMigrationDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Operation denied due to a file permission or access check error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found exception.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Reached throttling quota exception.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validate exception.
 *
 * @throws {@link MgnServiceException}
 *
 * Base exception class for all service exceptions from Mgn service.
 *
 * @example Sample ListNetworkMigrationDeployments call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab"
 * };
 * const command = new ListNetworkMigrationDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: 1735334198,
 *       endedAt: 1735334258,
 *       jobID: "01234567-abcd-abcd-efab-0123456789ab",
 *       networkMigrationDefinitionID: "nmd-01234567891234567",
 *       networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab",
 *       status: "SUCCEEDED",
 *       statusDetails: "Job status details"
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworkMigrationDeploymentsCommand extends command<ListNetworkMigrationDeploymentsCommandInput, ListNetworkMigrationDeploymentsCommandOutput>(
  _ep0,
  _mw0,
  "ListNetworkMigrationDeployments",
  ListNetworkMigrationDeployments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationDeploymentsRequest;
      output: ListNetworkMigrationDeployerJobResponse;
    };
    sdk: {
      input: ListNetworkMigrationDeploymentsCommandInput;
      output: ListNetworkMigrationDeploymentsCommandOutput;
    };
  };
}
