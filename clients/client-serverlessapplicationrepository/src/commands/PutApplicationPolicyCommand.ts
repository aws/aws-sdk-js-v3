// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutApplicationPolicyRequest, PutApplicationPolicyResponse } from "../models/models_0";
import { PutApplicationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sets the permission policy for an application. For the list of actions supported for this operation, see [Application Permissions](https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions) .
 *
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
 *
 * One of the parameters in the request is invalid.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is not authenticated.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The AWS Serverless Application Repository service encountered an internal error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource (for example, an access policy statement) specified in the request doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The client is sending more than the allowed number of requests per unit of time.
 *
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 *
 * Base exception class for all service exceptions from ServerlessApplicationRepository service.
 *
 * @public
 */
export class PutApplicationPolicyCommand extends command<PutApplicationPolicyCommandInput, PutApplicationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutApplicationPolicy",
  PutApplicationPolicy$
) {
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
