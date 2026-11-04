// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAcceleratorAttributesRequest, UpdateAcceleratorAttributesResponse } from "../models/models_0";
import { UpdateAcceleratorAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAcceleratorAttributesCommand}.
 */
export interface UpdateAcceleratorAttributesCommandInput extends UpdateAcceleratorAttributesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAcceleratorAttributesCommand}.
 */
export interface UpdateAcceleratorAttributesCommandOutput extends UpdateAcceleratorAttributesResponse, __MetadataBearer {}

/**
 * Update the attributes for an accelerator.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateAcceleratorAttributesRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   FlowLogsEnabled: true || false,
 *   FlowLogsS3Bucket: "STRING_VALUE",
 *   FlowLogsS3Prefix: "STRING_VALUE",
 * };
 * const command = new UpdateAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAcceleratorAttributesResponse
 * //   AcceleratorAttributes: { // AcceleratorAttributes
 * //     FlowLogsEnabled: true || false,
 * //     FlowLogsS3Bucket: "STRING_VALUE",
 * //     FlowLogsS3Prefix: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAcceleratorAttributesCommandInput - {@link UpdateAcceleratorAttributesCommandInput}
 * @returns {@link UpdateAcceleratorAttributesCommandOutput}
 * @see {@link UpdateAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *
 * The accelerator that you specified doesn't exist.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access permission.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *
 * There's already a transaction in progress. Another transaction can't be processed.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class UpdateAcceleratorAttributesCommand extends command<UpdateAcceleratorAttributesCommandInput, UpdateAcceleratorAttributesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAcceleratorAttributes",
  UpdateAcceleratorAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAcceleratorAttributesRequest;
      output: UpdateAcceleratorAttributesResponse;
    };
    sdk: {
      input: UpdateAcceleratorAttributesCommandInput;
      output: UpdateAcceleratorAttributesCommandOutput;
    };
  };
}
