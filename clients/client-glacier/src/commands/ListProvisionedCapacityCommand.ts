// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListProvisionedCapacityInput, ListProvisionedCapacityOutput } from "../models/models_0";
import { de_ListProvisionedCapacityCommand, se_ListProvisionedCapacityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProvisionedCapacityCommand}.
 */
export interface ListProvisionedCapacityCommandInput extends ListProvisionedCapacityInput {}
/**
 * @public
 *
 * The output of {@link ListProvisionedCapacityCommand}.
 */
export interface ListProvisionedCapacityCommandOutput extends ListProvisionedCapacityOutput, __MetadataBearer {}

/**
 * <p>This operation lists the provisioned capacity units for the specified AWS
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListProvisionedCapacityCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListProvisionedCapacityCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlacierClient(config);
 * const input = { // ListProvisionedCapacityInput
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new ListProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisionedCapacityOutput
 * //   ProvisionedCapacityList: [ // ProvisionedCapacityList
 * //     { // ProvisionedCapacityDescription
 * //       CapacityId: "STRING_VALUE",
 * //       StartDate: "STRING_VALUE",
 * //       ExpirationDate: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListProvisionedCapacityCommandInput - {@link ListProvisionedCapacityCommandInput}
 * @returns {@link ListProvisionedCapacityCommandOutput}
 * @see {@link ListProvisionedCapacityCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedCapacityCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @public
 * @example To list the provisioned capacity units for an account
 * ```javascript
 * // The example lists the provisioned capacity units for an account.
 * const input = {
 *   "accountId": "-"
 * };
 * const command = new ListProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ProvisionedCapacityList": [
 *     {
 *       "CapacityId": "zSaq7NzHFQDANTfQkDen4V7z",
 *       "ExpirationDate": "2016-12-12T00:00:00.000Z",
 *       "StartDate": "2016-11-11T20:11:51.095Z"
 *     },
 *     {
 *       "CapacityId": "yXaq7NzHFQNADTfQkDen4V7z",
 *       "ExpirationDate": "2017-01-15T00:00:00.000Z",
 *       "StartDate": "2016-12-13T20:11:51.095Z"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-provisioned-capacity-units-for-an-account-1481923656130
 * ```
 *
 */
export class ListProvisionedCapacityCommand extends $Command
  .classBuilder<
    ListProvisionedCapacityCommandInput,
    ListProvisionedCapacityCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "ListProvisionedCapacity", {})
  .n("GlacierClient", "ListProvisionedCapacityCommand")
  .f(void 0, void 0)
  .ser(se_ListProvisionedCapacityCommand)
  .de(de_ListProvisionedCapacityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProvisionedCapacityInput;
      output: ListProvisionedCapacityOutput;
    };
    sdk: {
      input: ListProvisionedCapacityCommandInput;
      output: ListProvisionedCapacityCommandOutput;
    };
  };
}
