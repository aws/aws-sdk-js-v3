// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIdentitySourceRequest, CreateIdentitySourceResponse } from "../models/models_0";
import { CreateIdentitySource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIdentitySourceCommand}.
 */
export interface CreateIdentitySourceCommandInput extends CreateIdentitySourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateIdentitySourceCommand}.
 */
export interface CreateIdentitySourceCommandOutput extends CreateIdentitySourceResponse, __MetadataBearer {}

/**
 * Creates a new identity source. For more information, see [Identity Source](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html) in the *Multi-party approval User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, CreateIdentitySourceCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, CreateIdentitySourceCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // CreateIdentitySourceRequest
 *   IdentitySourceParameters: { // IdentitySourceParameters
 *     IamIdentityCenter: { // IamIdentityCenter
 *       InstanceArn: "STRING_VALUE", // required
 *       Region: "STRING_VALUE", // required
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIdentitySourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdentitySourceResponse
 * //   IdentitySourceType: "IAM_IDENTITY_CENTER",
 * //   IdentitySourceArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateIdentitySourceCommandInput - {@link CreateIdentitySourceCommandInput}
 * @returns {@link CreateIdentitySourceCommandOutput}
 * @see {@link CreateIdentitySourceCommandInput} for command's `input` shape.
 * @see {@link CreateIdentitySourceCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action. Check your permissions, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds the service quota for your account. Request a quota increase or reduce your request size.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link MPAServiceException}
 *
 * Base exception class for all service exceptions from MPA service.
 *
 * @public
 */
export class CreateIdentitySourceCommand extends command<CreateIdentitySourceCommandInput, CreateIdentitySourceCommandOutput>(
  _ep0,
  _mw0,
  "CreateIdentitySource",
  CreateIdentitySource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIdentitySourceRequest;
      output: CreateIdentitySourceResponse;
    };
    sdk: {
      input: CreateIdentitySourceCommandInput;
      output: CreateIdentitySourceCommandOutput;
    };
  };
}
