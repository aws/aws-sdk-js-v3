// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  ListAcmeExternalAccountBindingsRequest,
  ListAcmeExternalAccountBindingsResponse,
} from "../models/models_0";
import { ListAcmeExternalAccountBindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAcmeExternalAccountBindingsCommand}.
 */
export interface ListAcmeExternalAccountBindingsCommandInput extends ListAcmeExternalAccountBindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListAcmeExternalAccountBindingsCommand}.
 */
export interface ListAcmeExternalAccountBindingsCommandOutput extends ListAcmeExternalAccountBindingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of external account bindings for the specified ACME endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ListAcmeExternalAccountBindingsCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ListAcmeExternalAccountBindingsCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // ListAcmeExternalAccountBindingsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   AcmeEndpointArn: "STRING_VALUE", // required
 * };
 * const command = new ListAcmeExternalAccountBindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListAcmeExternalAccountBindingsResponse
 * //   ExternalAccountBindings: [ // AcmeExternalAccountBindingList
 * //     { // AcmeExternalAccountBindingSummary
 * //       AcmeExternalAccountBindingArn: "STRING_VALUE",
 * //       AcmeEndpointArn: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       ExpiresAt: new Date("TIMESTAMP"),
 * //       RevokedAt: new Date("TIMESTAMP"),
 * //       LastUsedAt: new Date("TIMESTAMP"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAcmeExternalAccountBindingsCommandInput - {@link ListAcmeExternalAccountBindingsCommandInput}
 * @returns {@link ListAcmeExternalAccountBindingsCommandOutput}
 * @see {@link ListAcmeExternalAccountBindingsCommandInput} for command's `input` shape.
 * @see {@link ListAcmeExternalAccountBindingsCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
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
export class ListAcmeExternalAccountBindingsCommand extends command<ListAcmeExternalAccountBindingsCommandInput, ListAcmeExternalAccountBindingsCommandOutput>(
  _ep1,
  _mw0,
  "ListAcmeExternalAccountBindings",
  ListAcmeExternalAccountBindings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAcmeExternalAccountBindingsRequest;
      output: ListAcmeExternalAccountBindingsResponse;
    };
    sdk: {
      input: ListAcmeExternalAccountBindingsCommandInput;
      output: ListAcmeExternalAccountBindingsCommandOutput;
    };
  };
}
