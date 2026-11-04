// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateContactFlowModuleMetadataRequest,
  UpdateContactFlowModuleMetadataResponse,
} from "../models/models_3";
import { UpdateContactFlowModuleMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateContactFlowModuleMetadataCommand}.
 */
export interface UpdateContactFlowModuleMetadataCommandInput extends UpdateContactFlowModuleMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactFlowModuleMetadataCommand}.
 */
export interface UpdateContactFlowModuleMetadataCommandOutput extends UpdateContactFlowModuleMetadataResponse, __MetadataBearer {}

/**
 * Updates metadata about specified flow module.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowModuleMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowModuleMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactFlowModuleMetadataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowModuleId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   State: "ACTIVE" || "ARCHIVED",
 * };
 * const command = new UpdateContactFlowModuleMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactFlowModuleMetadataCommandInput - {@link UpdateContactFlowModuleMetadataCommandInput}
 * @returns {@link UpdateContactFlowModuleMetadataCommandOutput}
 * @see {@link UpdateContactFlowModuleMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowModuleMetadataCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateContactFlowModuleMetadataCommand extends command<UpdateContactFlowModuleMetadataCommandInput, UpdateContactFlowModuleMetadataCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContactFlowModuleMetadata",
  UpdateContactFlowModuleMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactFlowModuleMetadataRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactFlowModuleMetadataCommandInput;
      output: UpdateContactFlowModuleMetadataCommandOutput;
    };
  };
}
