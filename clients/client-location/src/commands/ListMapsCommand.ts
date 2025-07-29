// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListMapsRequest, ListMapsResponse, ListMapsResponseFilterSensitiveLog } from "../models/models_0";
import { de_ListMapsCommand, se_ListMapsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMapsCommand}.
 */
export interface ListMapsCommandInput extends ListMapsRequest {}
/**
 * @public
 *
 * The output of {@link ListMapsCommand}.
 */
export interface ListMapsCommandOutput extends ListMapsResponse, __MetadataBearer {}

/**
 * <p>Lists map resources in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListMapsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListMapsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // ListMapsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListMapsCommand(input);
 * const response = await client.send(command);
 * // { // ListMapsResponse
 * //   Entries: [ // ListMapsResponseEntryList // required
 * //     { // ListMapsResponseEntry
 * //       MapName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       DataSource: "STRING_VALUE", // required
 * //       PricingPlan: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       UpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMapsCommandInput - {@link ListMapsCommandInput}
 * @returns {@link ListMapsCommandOutput}
 * @see {@link ListMapsCommandInput} for command's `input` shape.
 * @see {@link ListMapsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class ListMapsCommand extends $Command
  .classBuilder<
    ListMapsCommandInput,
    ListMapsCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "ListMaps", {})
  .n("LocationClient", "ListMapsCommand")
  .f(void 0, ListMapsResponseFilterSensitiveLog)
  .ser(se_ListMapsCommand)
  .de(de_ListMapsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMapsRequest;
      output: ListMapsResponse;
    };
    sdk: {
      input: ListMapsCommandInput;
      output: ListMapsCommandOutput;
    };
  };
}
