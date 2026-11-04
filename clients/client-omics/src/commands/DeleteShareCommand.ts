// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteShareRequest, DeleteShareResponse } from "../models/models_0";
import { DeleteShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteShareCommand}.
 */
export interface DeleteShareCommandInput extends DeleteShareRequest {}
/**
 * @public
 *
 * The output of {@link DeleteShareCommand}.
 */
export interface DeleteShareCommandOutput extends DeleteShareResponse, __MetadataBearer {}

/**
 * Deletes a resource share. If you are the resource owner, the subscriber will no longer have access to the shared resource. If you are the subscriber, this operation deletes your access to the share.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteShareCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteShareCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteShareRequest
 *   shareId: "STRING_VALUE", // required
 * };
 * const command = new DeleteShareCommand(input);
 * const response = await client.send(command);
 * // { // DeleteShareResponse
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteShareCommandInput - {@link DeleteShareCommandInput}
 * @returns {@link DeleteShareCommandOutput}
 * @see {@link DeleteShareCommandInput} for command's `input` shape.
 * @see {@link DeleteShareCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class DeleteShareCommand extends command<DeleteShareCommandInput, DeleteShareCommandOutput>(
  _ep0,
  _mw0,
  "DeleteShare",
  DeleteShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteShareRequest;
      output: DeleteShareResponse;
    };
    sdk: {
      input: DeleteShareCommandInput;
      output: DeleteShareCommandOutput;
    };
  };
}
