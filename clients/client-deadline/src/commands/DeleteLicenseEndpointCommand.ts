// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLicenseEndpointRequest, DeleteLicenseEndpointResponse } from "../models/models_1";
import { DeleteLicenseEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLicenseEndpointCommand}.
 */
export interface DeleteLicenseEndpointCommandInput extends DeleteLicenseEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLicenseEndpointCommand}.
 */
export interface DeleteLicenseEndpointCommandOutput extends DeleteLicenseEndpointResponse, __MetadataBearer {}

/**
 * Deletes a license endpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteLicenseEndpointCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteLicenseEndpointCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteLicenseEndpointRequest
 *   licenseEndpointId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLicenseEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLicenseEndpointCommandInput - {@link DeleteLicenseEndpointCommandInput}
 * @returns {@link DeleteLicenseEndpointCommandOutput}
 * @see {@link DeleteLicenseEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseEndpointCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class DeleteLicenseEndpointCommand extends command<DeleteLicenseEndpointCommandInput, DeleteLicenseEndpointCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLicenseEndpoint",
  DeleteLicenseEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLicenseEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeleteLicenseEndpointCommandInput;
      output: DeleteLicenseEndpointCommandOutput;
    };
  };
}
