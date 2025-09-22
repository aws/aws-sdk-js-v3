// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Locations } from "../models/models_0";
import { DescribeLocations } from "../schemas/schemas_3_DescribeLocations";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationsCommand}.
 */
export interface DescribeLocationsCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeLocationsCommand}.
 */
export interface DescribeLocationsCommandOutput extends Locations, __MetadataBearer {}

/**
 * <p>Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling
 *       <a>CreateConnection</a> or <a>CreateInterconnect</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeLocationsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeLocationsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = {};
 * const command = new DescribeLocationsCommand(input);
 * const response = await client.send(command);
 * // { // Locations
 * //   locations: [ // LocationList
 * //     { // Location
 * //       locationCode: "STRING_VALUE",
 * //       locationName: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       availablePortSpeeds: [ // AvailablePortSpeeds
 * //         "STRING_VALUE",
 * //       ],
 * //       availableProviders: [ // ProviderList
 * //         "STRING_VALUE",
 * //       ],
 * //       availableMacSecPortSpeeds: [ // AvailableMacSecPortSpeeds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLocationsCommandInput - {@link DescribeLocationsCommandInput}
 * @returns {@link DescribeLocationsCommandOutput}
 * @see {@link DescribeLocationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class DescribeLocationsCommand extends $Command
  .classBuilder<
    DescribeLocationsCommandInput,
    DescribeLocationsCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DescribeLocations", {})
  .n("DirectConnectClient", "DescribeLocationsCommand")
  .sc(DescribeLocations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: Locations;
    };
    sdk: {
      input: DescribeLocationsCommandInput;
      output: DescribeLocationsCommandOutput;
    };
  };
}
