// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAppInstanceRequest, CreateAppInstanceResponse } from "../models/models_0";
import { CreateAppInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAppInstanceCommand}.
 */
export interface CreateAppInstanceCommandInput extends CreateAppInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppInstanceCommand}.
 */
export interface CreateAppInstanceCommandOutput extends CreateAppInstanceResponse, __MetadataBearer {}

/**
 * Creates an Amazon Chime SDK messaging `AppInstance` under an AWS account. Only SDK messaging customers use this API. `CreateAppInstance` supports idempotency behavior as described in the AWS API Standard.
 *
 * identity
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, CreateAppInstanceCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, CreateAppInstanceCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // CreateAppInstanceRequest
 *   Name: "STRING_VALUE", // required
 *   Metadata: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAppInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppInstanceResponse
 * //   AppInstanceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAppInstanceCommandInput - {@link CreateAppInstanceCommandInput}
 * @returns {@link CreateAppInstanceCommandOutput}
 * @see {@link CreateAppInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKIdentity service.
 *
 * @public
 */
export class CreateAppInstanceCommand extends command<CreateAppInstanceCommandInput, CreateAppInstanceCommandOutput>(
  _ep0,
  _mw0,
  "CreateAppInstance",
  CreateAppInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppInstanceRequest;
      output: CreateAppInstanceResponse;
    };
    sdk: {
      input: CreateAppInstanceCommandInput;
      output: CreateAppInstanceCommandOutput;
    };
  };
}
