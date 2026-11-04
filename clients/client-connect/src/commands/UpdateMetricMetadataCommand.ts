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
 * Updates the name and/or description of an existing metric in the specified Connect Customer instance.
 *
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
