// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import type { ListSignalCatalogsRequest, ListSignalCatalogsResponse } from "../models/models_0";
import { ListSignalCatalogs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSignalCatalogsCommand}.
 */
export interface ListSignalCatalogsCommandInput extends ListSignalCatalogsRequest {}
/**
 * @public
 *
 * The output of {@link ListSignalCatalogsCommand}.
 */
export interface ListSignalCatalogsCommandOutput extends ListSignalCatalogsResponse, __MetadataBearer {}

/**
 * <p> Lists all the created signal catalogs in an Amazon Web Services account. </p>
 *          <p>You can use  to list information about
 *             each signal (node) specified in a signal catalog.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListSignalCatalogsCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListSignalCatalogsCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListSignalCatalogsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSignalCatalogsCommand(input);
 * const response = await client.send(command);
 * // { // ListSignalCatalogsResponse
 * //   summaries: [ // signalCatalogSummaries
 * //     { // SignalCatalogSummary
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSignalCatalogsCommandInput - {@link ListSignalCatalogsCommandInput}
 * @returns {@link ListSignalCatalogsCommandOutput}
 * @see {@link ListSignalCatalogsCommandInput} for command's `input` shape.
 * @see {@link ListSignalCatalogsCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class ListSignalCatalogsCommand extends $Command
  .classBuilder<
    ListSignalCatalogsCommandInput,
    ListSignalCatalogsCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "ListSignalCatalogs", {})
  .n("IoTFleetWiseClient", "ListSignalCatalogsCommand")
  .sc(ListSignalCatalogs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSignalCatalogsRequest;
      output: ListSignalCatalogsResponse;
    };
    sdk: {
      input: ListSignalCatalogsCommandInput;
      output: ListSignalCatalogsCommandOutput;
    };
  };
}
