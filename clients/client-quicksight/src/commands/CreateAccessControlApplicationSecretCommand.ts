// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateAccessControlApplicationSecretRequest,
  CreateAccessControlApplicationSecretResponse,
} from "../models/models_2";
import { CreateAccessControlApplicationSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAccessControlApplicationSecretCommand}.
 */
export interface CreateAccessControlApplicationSecretCommandInput extends CreateAccessControlApplicationSecretRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessControlApplicationSecretCommand}.
 */
export interface CreateAccessControlApplicationSecretCommandOutput extends CreateAccessControlApplicationSecretResponse, __MetadataBearer {}

/**
 * <p>Creates a client secret for an access control application. An access control application can have up to two client secrets, so that you can rotate a secret without downtime.</p>
 *          <p>Provide the Amazon Web Services Secrets Manager (Secrets Manager) secret ARN for each Region where the client secret, issued by your identity provider (IdP), is stored.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateAccessControlApplicationSecretCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateAccessControlApplicationSecretCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateAccessControlApplicationSecretRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ClientSecretConfiguration: { // ClientSecretConfiguration
 *     ClientSecretSourceType: "IDP_PROVIDED", // required
 *     ClientSecretConfigurationDetail: { // ClientSecretConfigurationDetail Union: only one key present
 *       Idp: { // IdpClientSecretInput
 *         RegionalSecretManagerArns: { // RegionalSecretManagerArnMap // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new CreateAccessControlApplicationSecretCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessControlApplicationSecretResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   ClientSecretId: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateAccessControlApplicationSecretCommandInput - {@link CreateAccessControlApplicationSecretCommandInput}
 * @returns {@link CreateAccessControlApplicationSecretCommandOutput}
 * @see {@link CreateAccessControlApplicationSecretCommandInput} for command's `input` shape.
 * @see {@link CreateAccessControlApplicationSecretCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class CreateAccessControlApplicationSecretCommand extends command<CreateAccessControlApplicationSecretCommandInput, CreateAccessControlApplicationSecretCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccessControlApplicationSecret",
  CreateAccessControlApplicationSecret$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessControlApplicationSecretRequest;
      output: CreateAccessControlApplicationSecretResponse;
    };
    sdk: {
      input: CreateAccessControlApplicationSecretCommandInput;
      output: CreateAccessControlApplicationSecretCommandOutput;
    };
  };
}
