// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCapabilitiesRequest, ListCapabilitiesResponse } from "../models/models_0";
import { de_ListCapabilitiesCommand, se_ListCapabilitiesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCapabilitiesCommand}.
 */
export interface ListCapabilitiesCommandInput extends ListCapabilitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListCapabilitiesCommand}.
 */
export interface ListCapabilitiesCommandOutput extends ListCapabilitiesResponse, __MetadataBearer {}

/**
 * <p>Lists the capabilities associated with your Amazon Web Services account for your current or specified region. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, ListCapabilitiesCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, ListCapabilitiesCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // ListCapabilitiesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCapabilitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListCapabilitiesResponse
 * //   capabilities: [ // CapabilityList // required
 * //     { // CapabilitySummary
 * //       capabilityId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       type: "edi", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCapabilitiesCommandInput - {@link ListCapabilitiesCommandInput}
 * @returns {@link ListCapabilitiesCommandOutput}
 * @see {@link ListCapabilitiesCommandInput} for command's `input` shape.
 * @see {@link ListCapabilitiesCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @public
 * @example Sample ListCapabilities call
 * ```javascript
 * //
 * const input = {
 *   "maxResults": 50,
 *   "nextToken": "foo"
 * };
 * const command = new ListCapabilitiesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "capabilities": [
 *     {
 *       "name": "b2biexample",
 *       "type": "edi",
 *       "capabilityId": "ca-963a8121e4fc4e348",
 *       "createdAt": "2023-11-01T21:51:05.504Z",
 *       "modifiedAt": "2023-11-01T21:51:05.504Z"
 *     }
 *   ],
 *   "nextToken": "foo"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class ListCapabilitiesCommand extends $Command
  .classBuilder<
    ListCapabilitiesCommandInput,
    ListCapabilitiesCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("B2BI", "ListCapabilities", {})
  .n("B2biClient", "ListCapabilitiesCommand")
  .f(void 0, void 0)
  .ser(se_ListCapabilitiesCommand)
  .de(de_ListCapabilitiesCommand)
  .build() {}
