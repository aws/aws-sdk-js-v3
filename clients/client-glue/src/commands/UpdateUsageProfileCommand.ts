// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUsageProfileRequest, UpdateUsageProfileResponse } from "../models/models_3";
import { UpdateUsageProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUsageProfileCommand}.
 */
export interface UpdateUsageProfileCommandInput extends UpdateUsageProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUsageProfileCommand}.
 */
export interface UpdateUsageProfileCommandOutput extends UpdateUsageProfileResponse, __MetadataBearer {}

/**
 * Update an Glue usage profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateUsageProfileCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateUsageProfileCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateUsageProfileRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Configuration: { // ProfileConfiguration
 *     SessionConfiguration: { // ConfigurationMap
 *       "<keys>": { // ConfigurationObject
 *         DefaultValue: "STRING_VALUE",
 *         AllowedValues: [ // AllowedValuesStringList
 *           "STRING_VALUE",
 *         ],
 *         MinValue: "STRING_VALUE",
 *         MaxValue: "STRING_VALUE",
 *       },
 *     },
 *     JobConfiguration: {
 *       "<keys>": {
 *         DefaultValue: "STRING_VALUE",
 *         AllowedValues: [
 *           "STRING_VALUE",
 *         ],
 *         MinValue: "STRING_VALUE",
 *         MaxValue: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateUsageProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUsageProfileResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateUsageProfileCommandInput - {@link UpdateUsageProfileCommandInput}
 * @returns {@link UpdateUsageProfileCommandOutput}
 * @see {@link UpdateUsageProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUsageProfileCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * The operation is not available in the region.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class UpdateUsageProfileCommand extends command<UpdateUsageProfileCommandInput, UpdateUsageProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUsageProfile",
  UpdateUsageProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUsageProfileRequest;
      output: UpdateUsageProfileResponse;
    };
    sdk: {
      input: UpdateUsageProfileCommandInput;
      output: UpdateUsageProfileCommandOutput;
    };
  };
}
