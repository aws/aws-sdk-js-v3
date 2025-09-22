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
import { CreateServiceRequest, CreateServiceResponse } from "../models/models_0";
import { CreateService } from "../schemas/schemas_1_Delete";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceCommand}.
 */
export interface CreateServiceCommandInput extends CreateServiceRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceCommand}.
 */
export interface CreateServiceCommandOutput extends CreateServiceResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Web Services Migration Hub Refactor Spaces service. The account owner of the service is always the
 *       environment owner, regardless of which account in the environment creates the service.
 *       Services have either a URL endpoint in a virtual private cloud (VPC), or a Lambda
 *       function endpoint.</p>
 *          <important>
 *             <p>If an Amazon Web Services resource is launched in a service VPC, and you want it to be
 *         accessible to all of an environment’s services with VPCs and routes, apply the
 *           <code>RefactorSpacesSecurityGroup</code> to the resource. Alternatively, to add more
 *         cross-account constraints, apply your own security group.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, CreateServiceCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, CreateServiceCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * // import type { MigrationHubRefactorSpacesClientConfig } from "@aws-sdk/client-migration-hub-refactor-spaces";
 * const config = {}; // type is MigrationHubRefactorSpacesClientConfig
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const input = { // CreateServiceRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE",
 *   EndpointType: "STRING_VALUE", // required
 *   UrlEndpoint: { // UrlEndpointInput
 *     Url: "STRING_VALUE", // required
 *     HealthUrl: "STRING_VALUE",
 *   },
 *   LambdaEndpoint: { // LambdaEndpointInput
 *     Arn: "STRING_VALUE", // required
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceResponse
 * //   ServiceId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   OwnerAccountId: "STRING_VALUE",
 * //   CreatedByAccountId: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EnvironmentId: "STRING_VALUE",
 * //   ApplicationId: "STRING_VALUE",
 * //   VpcId: "STRING_VALUE",
 * //   EndpointType: "STRING_VALUE",
 * //   UrlEndpoint: { // UrlEndpointInput
 * //     Url: "STRING_VALUE", // required
 * //     HealthUrl: "STRING_VALUE",
 * //   },
 * //   LambdaEndpoint: { // LambdaEndpointInput
 * //     Arn: "STRING_VALUE", // required
 * //   },
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
 * @param CreateServiceCommandInput - {@link CreateServiceCommandInput}
 * @returns {@link CreateServiceCommandOutput}
 * @see {@link CreateServiceCommandInput} for command's `input` shape.
 * @see {@link CreateServiceCommandOutput} for command's `response` shape.
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
export class CreateServiceCommand extends $Command
  .classBuilder<
    CreateServiceCommandInput,
    CreateServiceCommandOutput,
    MigrationHubRefactorSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubRefactorSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RefactorSpaces", "CreateService", {})
  .n("MigrationHubRefactorSpacesClient", "CreateServiceCommand")
  .sc(CreateService)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceRequest;
      output: CreateServiceResponse;
    };
    sdk: {
      input: CreateServiceCommandInput;
      output: CreateServiceCommandOutput;
    };
  };
}
