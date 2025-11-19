// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListHoursOfOperationsRequest, ListHoursOfOperationsResponse } from "../models/models_1";
import { ListHoursOfOperations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHoursOfOperationsCommand}.
 */
export interface ListHoursOfOperationsCommandInput extends ListHoursOfOperationsRequest {}
/**
 * @public
 *
 * The output of {@link ListHoursOfOperationsCommand}.
 */
export interface ListHoursOfOperationsCommandOutput extends ListHoursOfOperationsResponse, __MetadataBearer {}

/**
 * <p>Provides information about the hours of operation for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about hours of operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html">Set the Hours of Operation for a
 *     Queue</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListHoursOfOperationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListHoursOfOperationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListHoursOfOperationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListHoursOfOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListHoursOfOperationsResponse
 * //   HoursOfOperationSummaryList: [ // HoursOfOperationSummaryList
 * //     { // HoursOfOperationSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHoursOfOperationsCommandInput - {@link ListHoursOfOperationsCommandInput}
 * @returns {@link ListHoursOfOperationsCommandOutput}
 * @see {@link ListHoursOfOperationsCommandInput} for command's `input` shape.
 * @see {@link ListHoursOfOperationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListHoursOfOperationsCommand extends $Command
  .classBuilder<
    ListHoursOfOperationsCommandInput,
    ListHoursOfOperationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListHoursOfOperations", {})
  .n("ConnectClient", "ListHoursOfOperationsCommand")
  .sc(ListHoursOfOperations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHoursOfOperationsRequest;
      output: ListHoursOfOperationsResponse;
    };
    sdk: {
      input: ListHoursOfOperationsCommandInput;
      output: ListHoursOfOperationsCommandOutput;
    };
  };
}
