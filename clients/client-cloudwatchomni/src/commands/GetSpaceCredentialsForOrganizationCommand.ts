// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetSpaceCredentialsForOrganizationInput,
  GetSpaceCredentialsForOrganizationOutput,
} from "../models/models_0";
import { GetSpaceCredentialsForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSpaceCredentialsForOrganizationCommand}.
 */
export interface GetSpaceCredentialsForOrganizationCommandInput extends GetSpaceCredentialsForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link GetSpaceCredentialsForOrganizationCommand}.
 */
export interface GetSpaceCredentialsForOrganizationCommandOutput extends GetSpaceCredentialsForOrganizationOutput, __MetadataBearer {}

/**
 * Returns temporary credentials for a space in an organization member account.
 * The credentials are valid for one hour.
 *
 * The caller must be the organization's management account or a delegated
 * administrator with access to the target space. The target account must be an
 * active member of the same organization as the domain, and the space must
 * already exist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, GetSpaceCredentialsForOrganizationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, GetSpaceCredentialsForOrganizationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // GetSpaceCredentialsForOrganizationInput
 *   context: { // SpaceCredentialRequestContext
 *     spaceId: "STRING_VALUE",
 *     domainId: "STRING_VALUE",
 *     targetAccountId: "STRING_VALUE",
 *   },
 *   credentialType: "SPACE_OPERATION", // required
 * };
 * const command = new GetSpaceCredentialsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // GetSpaceCredentialsForOrganizationOutput
 * //   credentials: { // AwsCredentials
 * //     accessKeyId: "STRING_VALUE", // required
 * //     secretAccessKey: "STRING_VALUE", // required
 * //     sessionToken: "STRING_VALUE", // required
 * //     expiration: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSpaceCredentialsForOrganizationCommandInput - {@link GetSpaceCredentialsForOrganizationCommandInput}
 * @returns {@link GetSpaceCredentialsForOrganizationCommandOutput}
 * @see {@link GetSpaceCredentialsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link GetSpaceCredentialsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Get space credentials for an organization member account
 * ```javascript
 * // The following example returns temporary, space-scoped AWS credentials for an existing space in an organization member account, selected by spaceId. The credentials are valid for one hour, as reflected by the expiration timestamp. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   context: {
 *     spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 *   },
 *   credentialType: "SPACE_OPERATION"
 * };
 * const command = new GetSpaceCredentialsForOrganizationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   credentials: {
 *     accessKeyId: "ASIAIOSFODNN7EXAMPLE",
 *     expiration: "2026-09-16T15:22:31Z",
 *     secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
 *     sessionToken: "IQoJb3JpZ2luX2VjEXAMPLESESSIONTOKEN1234567890"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSpaceCredentialsForOrganizationCommand extends command<GetSpaceCredentialsForOrganizationCommandInput, GetSpaceCredentialsForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "GetSpaceCredentialsForOrganization",
  GetSpaceCredentialsForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSpaceCredentialsForOrganizationInput;
      output: GetSpaceCredentialsForOrganizationOutput;
    };
    sdk: {
      input: GetSpaceCredentialsForOrganizationCommandInput;
      output: GetSpaceCredentialsForOrganizationCommandOutput;
    };
  };
}
