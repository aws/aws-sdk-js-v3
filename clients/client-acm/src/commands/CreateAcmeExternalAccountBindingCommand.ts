// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  CreateAcmeExternalAccountBindingRequest,
  CreateAcmeExternalAccountBindingResponse,
} from "../models/models_0";
import { CreateAcmeExternalAccountBinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAcmeExternalAccountBindingCommand}.
 */
export interface CreateAcmeExternalAccountBindingCommandInput extends CreateAcmeExternalAccountBindingRequest {}
/**
 * @public
 *
 * The output of {@link CreateAcmeExternalAccountBindingCommand}.
 */
export interface CreateAcmeExternalAccountBindingCommandOutput extends CreateAcmeExternalAccountBindingResponse, __MetadataBearer {}

/**
 * <p>Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what certificate operations the ACME client can perform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, CreateAcmeExternalAccountBindingCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, CreateAcmeExternalAccountBindingCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // CreateAcmeExternalAccountBindingRequest
 *   IdempotencyToken: "STRING_VALUE",
 *   AcmeEndpointArn: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   Expiration: { // Expiration
 *     Value: Number("long"), // required
 *     Type: "MINUTES" || "HOURS" || "DAYS", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateAcmeExternalAccountBindingCommand(input);
 * const response = await client.send(command);
 * // { // CreateAcmeExternalAccountBindingResponse
 * //   ExternalAccountBinding: { // AcmeExternalAccountBinding
 * //     AcmeExternalAccountBindingArn: "STRING_VALUE",
 * //     AcmeEndpointArn: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     ExpiresAt: new Date("TIMESTAMP"),
 * //     RevokedAt: new Date("TIMESTAMP"),
 * //     LastUsedAt: new Date("TIMESTAMP"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAcmeExternalAccountBindingCommandInput - {@link CreateAcmeExternalAccountBindingCommandInput}
 * @returns {@link CreateAcmeExternalAccountBindingCommandOutput}
 * @see {@link CreateAcmeExternalAccountBindingCommandInput} for command's `input` shape.
 * @see {@link CreateAcmeExternalAccountBindingCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class CreateAcmeExternalAccountBindingCommand extends command<CreateAcmeExternalAccountBindingCommandInput, CreateAcmeExternalAccountBindingCommandOutput>(
  _ep1,
  _mw0,
  "CreateAcmeExternalAccountBinding",
  CreateAcmeExternalAccountBinding$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAcmeExternalAccountBindingRequest;
      output: CreateAcmeExternalAccountBindingResponse;
    };
    sdk: {
      input: CreateAcmeExternalAccountBindingCommandInput;
      output: CreateAcmeExternalAccountBindingCommandOutput;
    };
  };
}
