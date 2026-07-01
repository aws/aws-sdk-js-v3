// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetApplicationPolicyRequest, GetApplicationPolicyResponse } from "../models/models_0";
import { GetApplicationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetApplicationPolicyCommand}.
 */
export interface GetApplicationPolicyCommandInput extends GetApplicationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationPolicyCommand}.
 */
export interface GetApplicationPolicyCommandOutput extends GetApplicationPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the policy for the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, GetApplicationPolicyCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, GetApplicationPolicyCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * // import type { ServerlessApplicationRepositoryClientConfig } from "@aws-sdk/client-serverlessapplicationrepository";
 * const config = {}; // type is ServerlessApplicationRepositoryClientConfig
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // GetApplicationPolicyRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationPolicyResponse
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
 * @param GetApplicationPolicyCommandInput - {@link GetApplicationPolicyCommandInput}
 * @returns {@link GetApplicationPolicyCommandOutput}
 * @see {@link GetApplicationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetApplicationPolicyCommandOutput} for command's `response` shape.
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
export class GetApplicationPolicyCommand extends command<GetApplicationPolicyCommandInput, GetApplicationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetApplicationPolicy",
  GetApplicationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationPolicyRequest;
      output: GetApplicationPolicyResponse;
    };
    sdk: {
      input: GetApplicationPolicyCommandInput;
      output: GetApplicationPolicyCommandOutput;
    };
  };
}
