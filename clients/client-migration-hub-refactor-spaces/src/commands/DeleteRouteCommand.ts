// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRouteRequest, DeleteRouteResponse } from "../models/models_0";
import { DeleteRoute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRouteCommand}.
 */
export interface DeleteRouteCommandInput extends DeleteRouteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouteCommand}.
 */
export interface DeleteRouteCommandOutput extends DeleteRouteResponse, __MetadataBearer {}

/**
 * Deletes an Amazon Web Services Migration Hub Refactor Spaces route.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, DeleteRouteCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, DeleteRouteCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * // import type { MigrationHubRefactorSpacesClientConfig } from "@aws-sdk/client-migration-hub-refactor-spaces";
 * const config = {}; // type is MigrationHubRefactorSpacesClientConfig
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const input = { // DeleteRouteRequest
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   RouteIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteRouteCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRouteResponse
 * //   RouteId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   ServiceId: "STRING_VALUE",
 * //   ApplicationId: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DeleteRouteCommandInput - {@link DeleteRouteCommandInput}
 * @returns {@link DeleteRouteCommandOutput}
 * @see {@link DeleteRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteCommandOutput} for command's `response` shape.
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
export class DeleteRouteCommand extends command<DeleteRouteCommandInput, DeleteRouteCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRoute",
  DeleteRoute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRouteRequest;
      output: DeleteRouteResponse;
    };
    sdk: {
      input: DeleteRouteCommandInput;
      output: DeleteRouteCommandOutput;
    };
  };
}
