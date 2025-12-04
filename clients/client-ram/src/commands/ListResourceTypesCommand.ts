// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListResourceTypesRequest, ListResourceTypesResponse } from "../models/models_0";
import type { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { ListResourceTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceTypesCommand}.
 */
export interface ListResourceTypesCommandInput extends ListResourceTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceTypesCommand}.
 */
export interface ListResourceTypesCommandOutput extends ListResourceTypesResponse, __MetadataBearer {}

/**
 * <p>Lists the resource types that can be shared by RAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListResourceTypesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListResourceTypesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // ListResourceTypesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   resourceRegionScope: "ALL" || "REGIONAL" || "GLOBAL",
 * };
 * const command = new ListResourceTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceTypesResponse
 * //   resourceTypes: [ // ServiceNameAndResourceTypeList
 * //     { // ServiceNameAndResourceType
 * //       resourceType: "STRING_VALUE",
 * //       serviceName: "STRING_VALUE",
 * //       resourceRegionScope: "REGIONAL" || "GLOBAL",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceTypesCommandInput - {@link ListResourceTypesCommandInput}
 * @returns {@link ListResourceTypesCommandOutput}
 * @see {@link ListResourceTypesCommandInput} for command's `input` shape.
 * @see {@link ListResourceTypesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class ListResourceTypesCommand extends $Command
  .classBuilder<
    ListResourceTypesCommandInput,
    ListResourceTypesCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonResourceSharing", "ListResourceTypes", {})
  .n("RAMClient", "ListResourceTypesCommand")
  .sc(ListResourceTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceTypesRequest;
      output: ListResourceTypesResponse;
    };
    sdk: {
      input: ListResourceTypesCommandInput;
      output: ListResourceTypesCommandOutput;
    };
  };
}
