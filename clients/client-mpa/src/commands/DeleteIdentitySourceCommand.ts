// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIdentitySourceRequest } from "../models/models_0";
import { DeleteIdentitySource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIdentitySourceCommand}.
 */
export interface DeleteIdentitySourceCommandInput extends DeleteIdentitySourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentitySourceCommand}.
 */
export interface DeleteIdentitySourceCommandOutput extends __MetadataBearer {}

/**
 * Deletes an identity source. For more information, see [Identity Source](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html) in the *Multi-party approval User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, DeleteIdentitySourceCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, DeleteIdentitySourceCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // DeleteIdentitySourceRequest
 *   IdentitySourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentitySourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentitySourceCommandInput - {@link DeleteIdentitySourceCommandInput}
 * @returns {@link DeleteIdentitySourceCommandOutput}
 * @see {@link DeleteIdentitySourceCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentitySourceCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action. Check your permissions, and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be completed because it conflicts with the current state of a resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.
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
export class DeleteIdentitySourceCommand extends command<DeleteIdentitySourceCommandInput, DeleteIdentitySourceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIdentitySource",
  DeleteIdentitySource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdentitySourceRequest;
      output: {};
    };
    sdk: {
      input: DeleteIdentitySourceCommandInput;
      output: DeleteIdentitySourceCommandOutput;
    };
  };
}
