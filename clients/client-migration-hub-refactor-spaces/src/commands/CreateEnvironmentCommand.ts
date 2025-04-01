// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubRefactorSpacesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubRefactorSpacesClient";
import {
  CreateEnvironmentRequest,
  CreateEnvironmentRequestFilterSensitiveLog,
  CreateEnvironmentResponse,
  CreateEnvironmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateEnvironmentCommand, se_CreateEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandInput extends CreateEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandOutput extends CreateEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Web Services Migration Hub Refactor Spaces environment. The caller owns the environment resource, and all
 *       Refactor Spaces applications, services, and routes created within the environment. They are referred
 *       to as the <i>environment owner</i>. The environment owner has cross-account
 *       visibility and control of Refactor Spaces resources that are added to the environment by other
 *       accounts that the environment is shared with.</p>
 *          <p>When creating an environment with a <a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType">CreateEnvironment:NetworkFabricType</a> of <code>TRANSIT_GATEWAY</code>, Refactor Spaces
 *       provisions a transit gateway to enable services in VPCs to communicate directly across
 *       accounts. If <a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType">CreateEnvironment:NetworkFabricType</a> is <code>NONE</code>, Refactor Spaces does not create
 *       a transit gateway and you must use your network infrastructure to route traffic to services
 *       with private URL endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, CreateEnvironmentCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, CreateEnvironmentCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const input = { // CreateEnvironmentRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   NetworkFabricType: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EnvironmentId: "STRING_VALUE",
 * //   NetworkFabricType: "STRING_VALUE",
 * //   OwnerAccountId: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   CreatedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateEnvironmentCommandInput - {@link CreateEnvironmentCommandInput}
 * @returns {@link CreateEnvironmentCommandOutput}
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
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
export class CreateEnvironmentCommand extends $Command
  .classBuilder<
    CreateEnvironmentCommandInput,
    CreateEnvironmentCommandOutput,
    MigrationHubRefactorSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubRefactorSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RefactorSpaces", "CreateEnvironment", {})
  .n("MigrationHubRefactorSpacesClient", "CreateEnvironmentCommand")
  .f(CreateEnvironmentRequestFilterSensitiveLog, CreateEnvironmentResponseFilterSensitiveLog)
  .ser(se_CreateEnvironmentCommand)
  .de(de_CreateEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentRequest;
      output: CreateEnvironmentResponse;
    };
    sdk: {
      input: CreateEnvironmentCommandInput;
      output: CreateEnvironmentCommandOutput;
    };
  };
}
