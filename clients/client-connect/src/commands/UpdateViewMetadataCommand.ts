// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateViewMetadataRequest, UpdateViewMetadataResponse } from "../models/models_4";
import { UpdateViewMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateViewMetadataCommand}.
 */
export interface UpdateViewMetadataCommandInput extends UpdateViewMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateViewMetadataCommand}.
 */
export interface UpdateViewMetadataCommandOutput extends UpdateViewMetadataResponse, __MetadataBearer {}

/**
 * Updates the view metadata. Note that either `Name` or `Description` must be provided.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateViewMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateViewMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateViewMetadataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateViewMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateViewMetadataCommandInput - {@link UpdateViewMetadataCommandInput}
 * @returns {@link UpdateViewMetadataCommandOutput}
 * @see {@link UpdateViewMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateViewMetadataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * That resource is already in use (for example, you're trying to add a record with the same name as an existing record). If you are trying to delete a resource (for example, DeleteHoursOfOperation or DeletePredefinedAttribute), remove its reference from related resources and then try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Displayed when rate-related API limits are exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateViewMetadataCommand extends command<UpdateViewMetadataCommandInput, UpdateViewMetadataCommandOutput>(
  _ep0,
  _mw0,
  "UpdateViewMetadata",
  UpdateViewMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateViewMetadataRequest;
      output: {};
    };
    sdk: {
      input: UpdateViewMetadataCommandInput;
      output: UpdateViewMetadataCommandOutput;
    };
  };
}
