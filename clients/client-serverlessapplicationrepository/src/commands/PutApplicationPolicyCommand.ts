// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutApplicationPolicyRequest, PutApplicationPolicyResponse } from "../models/models_0";
import { PutApplicationPolicy } from "../schemas/schemas_0";
import type {
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
 * The input for {@link PutApplicationPolicyCommand}.
 */
export interface PutApplicationPolicyCommandInput extends PutApplicationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutApplicationPolicyCommand}.
 */
export interface PutApplicationPolicyCommandOutput extends PutApplicationPolicyResponse, __MetadataBearer {}

/**
 * <p>Sets the permission policy for an application. For the list of actions supported for this operation, see
 *  <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
 *  Permissions</a>
 *  .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, PutApplicationPolicyCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, PutApplicationPolicyCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * // import type { ServerlessApplicationRepositoryClientConfig } from "@aws-sdk/client-serverlessapplicationrepository";
 * const config = {}; // type is ServerlessApplicationRepositoryClientConfig
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // PutApplicationPolicyRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   Statements: [ // __listOfApplicationPolicyStatement // required
 *     { // ApplicationPolicyStatement
 *       Actions: [ // __listOf__string // required
 *         "STRING_VALUE",
 *       ],
 *       PrincipalOrgIDs: [
 *         "STRING_VALUE",
 *       ],
 *       Principals: [ // required
 *         "STRING_VALUE",
 *       ],
 *       StatementId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutApplicationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutApplicationPolicyResponse
 * //   Statements: [ // __listOfApplicationPolicyStatement
 * //     { // ApplicationPolicyStatement
 * //       Actions: [ // __listOf__string // required
 * //         "STRING_VALUE",
 * //       ],
 * //       PrincipalOrgIDs: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Principals: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       StatementId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutApplicationPolicyCommandInput - {@link PutApplicationPolicyCommandInput}
 * @returns {@link PutApplicationPolicyCommandOutput}
 * @see {@link PutApplicationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutApplicationPolicyCommandOutput} for command's `response` shape.
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
export class PutApplicationPolicyCommand extends $Command
  .classBuilder<
    PutApplicationPolicyCommandInput,
    PutApplicationPolicyCommandOutput,
    ServerlessApplicationRepositoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServerlessApplicationRepositoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServerlessApplicationRepository", "PutApplicationPolicy", {})
  .n("ServerlessApplicationRepositoryClient", "PutApplicationPolicyCommand")
  .sc(PutApplicationPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutApplicationPolicyRequest;
      output: PutApplicationPolicyResponse;
    };
    sdk: {
      input: PutApplicationPolicyCommandInput;
      output: PutApplicationPolicyCommandOutput;
    };
  };
}
