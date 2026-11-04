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
 * Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what certificate operations the ACME client can perform.
 *
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
 *
 * You do not have access required to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified certificate cannot be found in the caller's account or the caller's account cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded a quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The supplied input failed to satisfy constraints of an Amazon Web Services service.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
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
