// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetApplicationRequest, GetApplicationResponse } from "../models/models_0";
import { GetApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandInput extends GetApplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandOutput extends GetApplicationResponse, __MetadataBearer {}

/**
 * Gets an Amazon Web Services Migration Hub Refactor Spaces application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, GetApplicationCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, GetApplicationCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * // import type { MigrationHubRefactorSpacesClientConfig } from "@aws-sdk/client-migration-hub-refactor-spaces";
 * const config = {}; // type is MigrationHubRefactorSpacesClientConfig
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const input = { // GetApplicationRequest
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   OwnerAccountId: "STRING_VALUE",
 * //   CreatedByAccountId: "STRING_VALUE",
 * //   ApplicationId: "STRING_VALUE",
 * //   EnvironmentId: "STRING_VALUE",
 * //   VpcId: "STRING_VALUE",
 * //   ProxyType: "STRING_VALUE",
 * //   ApiGatewayProxy: { // ApiGatewayProxyConfig
 * //     ProxyUrl: "STRING_VALUE",
 * //     ApiGatewayId: "STRING_VALUE",
 * //     VpcLinkId: "STRING_VALUE",
 * //     NlbArn: "STRING_VALUE",
 * //     NlbName: "STRING_VALUE",
 * //     EndpointType: "STRING_VALUE",
 * //     StageName: "STRING_VALUE",
 * //   },
 * //   State: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Error: { // ErrorResponse
 * //     Code: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //     ResourceIdentifier: "STRING_VALUE",
 * //     ResourceType: "STRING_VALUE",
 * //     AdditionalDetails: { // AdditionalDetails
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   CreatedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetApplicationCommandInput - {@link GetApplicationCommandInput}
 * @returns {@link GetApplicationCommandOutput}
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubRefactorSpacesClientResolvedConfig | config} for MigrationHubRefactorSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user does not have sufficient access to perform this action.
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
export class GetApplicationCommand extends command<GetApplicationCommandInput, GetApplicationCommandOutput>(
  _ep0,
  _mw0,
  "GetApplication",
  GetApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationRequest;
      output: GetApplicationResponse;
    };
    sdk: {
      input: GetApplicationCommandInput;
      output: GetApplicationCommandOutput;
    };
  };
}
