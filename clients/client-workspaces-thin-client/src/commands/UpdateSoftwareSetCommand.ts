// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSoftwareSetRequest, UpdateSoftwareSetResponse } from "../models/models_0";
import { UpdateSoftwareSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSoftwareSetCommand}.
 */
export interface UpdateSoftwareSetCommandInput extends UpdateSoftwareSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSoftwareSetCommand}.
 */
export interface UpdateSoftwareSetCommandOutput extends UpdateSoftwareSetResponse, __MetadataBearer {}

/**
 * Updates a software set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, UpdateSoftwareSetCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, UpdateSoftwareSetCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * // import type { WorkSpacesThinClientClientConfig } from "@aws-sdk/client-workspaces-thin-client";
 * const config = {}; // type is WorkSpacesThinClientClientConfig
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // UpdateSoftwareSetRequest
 *   id: "STRING_VALUE", // required
 *   validationStatus: "VALIDATED" || "NOT_VALIDATED", // required
 * };
 * const command = new UpdateSoftwareSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSoftwareSetCommandInput - {@link UpdateSoftwareSetCommandInput}
 * @returns {@link UpdateSoftwareSetCommandOutput}
 * @see {@link UpdateSoftwareSetCommandInput} for command's `input` shape.
 * @see {@link UpdateSoftwareSetCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesThinClientClientResolvedConfig | config} for WorkSpacesThinClientClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link WorkSpacesThinClientServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesThinClient service.
 *
 * @public
 */
export class UpdateSoftwareSetCommand extends command<UpdateSoftwareSetCommandInput, UpdateSoftwareSetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSoftwareSet",
  UpdateSoftwareSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSoftwareSetRequest;
      output: {};
    };
    sdk: {
      input: UpdateSoftwareSetCommandInput;
      output: UpdateSoftwareSetCommandOutput;
    };
  };
}
