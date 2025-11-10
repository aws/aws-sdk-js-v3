// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubRefactorSpacesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubRefactorSpacesClient";
import { DeleteRouteRequest, DeleteRouteResponse } from "../models/models_0";
import { DeleteRoute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an Amazon Web Services Migration Hub Refactor Spaces route.</p>
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
export class DeleteRouteCommand extends $Command
  .classBuilder<
    DeleteRouteCommandInput,
    DeleteRouteCommandOutput,
    MigrationHubRefactorSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubRefactorSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RefactorSpaces", "DeleteRoute", {})
  .n("MigrationHubRefactorSpacesClient", "DeleteRouteCommand")
  .sc(DeleteRoute)
  .build() {
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
