// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFieldRequest, UpdateFieldResponse } from "../models/models_0";
import { UpdateField$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFieldCommand}.
 */
export interface UpdateFieldCommandInput extends UpdateFieldRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFieldCommand}.
 */
export interface UpdateFieldCommandOutput extends UpdateFieldResponse, __MetadataBearer {}

/**
 * Updates the properties of an existing field.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, UpdateFieldCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, UpdateFieldCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // UpdateFieldRequest
 *   domainId: "STRING_VALUE", // required
 *   fieldId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   attributes: { // FieldAttributes Union: only one key present
 *     text: { // TextAttributes
 *       isMultiline: true || false, // required
 *     },
 *   },
 * };
 * const command = new UpdateFieldCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFieldCommandInput - {@link UpdateFieldCommandInput}
 * @returns {@link UpdateFieldCommandOutput}
 * @see {@link UpdateFieldCommandInput} for command's `input` shape.
 * @see {@link UpdateFieldCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class UpdateFieldCommand extends command<UpdateFieldCommandInput, UpdateFieldCommandOutput>(
  _ep0,
  _mw0,
  "UpdateField",
  UpdateField$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFieldRequest;
      output: {};
    };
    sdk: {
      input: UpdateFieldCommandInput;
      output: UpdateFieldCommandOutput;
    };
  };
}
