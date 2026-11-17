// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMetricMetadataRequest, UpdateMetricMetadataResponse } from "../models/models_3";
import { UpdateMetricMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMetricMetadataCommand}.
 */
export interface UpdateMetricMetadataCommandInput extends UpdateMetricMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMetricMetadataCommand}.
 */
export interface UpdateMetricMetadataCommandOutput extends UpdateMetricMetadataResponse, __MetadataBearer {}

/**
 * <p>Updates the name and/or description of an existing metric in the specified Connect Customer instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateMetricMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateMetricMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateMetricMetadataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MetricId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateMetricMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMetricMetadataCommandInput - {@link UpdateMetricMetadataCommandInput}
 * @returns {@link UpdateMetricMetadataCommandOutput}
 * @see {@link UpdateMetricMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateMetricMetadataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateMetricMetadataCommand extends command<UpdateMetricMetadataCommandInput, UpdateMetricMetadataCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMetricMetadata",
  UpdateMetricMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMetricMetadataRequest;
      output: {};
    };
    sdk: {
      input: UpdateMetricMetadataCommandInput;
      output: UpdateMetricMetadataCommandOutput;
    };
  };
}
