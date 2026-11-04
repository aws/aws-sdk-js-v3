// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUsageProfileRequest, GetUsageProfileResponse } from "../models/models_2";
import { GetUsageProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUsageProfileCommand}.
 */
export interface GetUsageProfileCommandInput extends GetUsageProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetUsageProfileCommand}.
 */
export interface GetUsageProfileCommandOutput extends GetUsageProfileResponse, __MetadataBearer {}

/**
 * Retrieves information about the specified Glue usage profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUsageProfileCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUsageProfileCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetUsageProfileRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetUsageProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetUsageProfileResponse
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Configuration: { // ProfileConfiguration
 * //     SessionConfiguration: { // ConfigurationMap
 * //       "<keys>": { // ConfigurationObject
 * //         DefaultValue: "STRING_VALUE",
 * //         AllowedValues: [ // AllowedValuesStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         MinValue: "STRING_VALUE",
 * //         MaxValue: "STRING_VALUE",
 * //       },
 * //     },
 * //     JobConfiguration: {
 * //       "<keys>": {
 * //         DefaultValue: "STRING_VALUE",
 * //         AllowedValues: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MinValue: "STRING_VALUE",
 * //         MaxValue: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   CreatedOn: new Date("TIMESTAMP"),
 * //   LastModifiedOn: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetUsageProfileCommandInput - {@link GetUsageProfileCommandInput}
 * @returns {@link GetUsageProfileCommandOutput}
 * @see {@link GetUsageProfileCommandInput} for command's `input` shape.
 * @see {@link GetUsageProfileCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class GetUsageProfileCommand extends command<GetUsageProfileCommandInput, GetUsageProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetUsageProfile",
  GetUsageProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUsageProfileRequest;
      output: GetUsageProfileResponse;
    };
    sdk: {
      input: GetUsageProfileCommandInput;
      output: GetUsageProfileCommandOutput;
    };
  };
}
