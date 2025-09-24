// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UnshareApplicationRequest } from "../models/models_0";
import { UnshareApplication } from "../schemas/schemas_1_Application";
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
 * The input for {@link UnshareApplicationCommand}.
 */
export interface UnshareApplicationCommandInput extends UnshareApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UnshareApplicationCommand}.
 */
export interface UnshareApplicationCommandOutput extends __MetadataBearer {}

/**
 * <p>Unshares an application from an AWS Organization.</p><p>This operation can be called only from the organization's master account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, UnshareApplicationCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, UnshareApplicationCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * // import type { ServerlessApplicationRepositoryClientConfig } from "@aws-sdk/client-serverlessapplicationrepository";
 * const config = {}; // type is ServerlessApplicationRepositoryClientConfig
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // UnshareApplicationRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new UnshareApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnshareApplicationCommandInput - {@link UnshareApplicationCommandInput}
 * @returns {@link UnshareApplicationCommandOutput}
 * @see {@link UnshareApplicationCommandInput} for command's `input` shape.
 * @see {@link UnshareApplicationCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The client is sending more than the allowed number of requests per unit of time.</p>
 *
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 * <p>Base exception class for all service exceptions from ServerlessApplicationRepository service.</p>
 *
 *
 * @public
 */
export class UnshareApplicationCommand extends $Command
  .classBuilder<
    UnshareApplicationCommandInput,
    UnshareApplicationCommandOutput,
    ServerlessApplicationRepositoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServerlessApplicationRepositoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServerlessApplicationRepository", "UnshareApplication", {})
  .n("ServerlessApplicationRepositoryClient", "UnshareApplicationCommand")
  .sc(UnshareApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnshareApplicationRequest;
      output: {};
    };
    sdk: {
      input: UnshareApplicationCommandInput;
      output: UnshareApplicationCommandOutput;
    };
  };
}
