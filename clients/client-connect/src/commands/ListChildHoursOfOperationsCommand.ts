// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListChildHoursOfOperationsRequest, ListChildHoursOfOperationsResponse } from "../models/models_2";
import { ListChildHoursOfOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChildHoursOfOperationsCommand}.
 */
export interface ListChildHoursOfOperationsCommandInput extends ListChildHoursOfOperationsRequest {}
/**
 * @public
 *
 * The output of {@link ListChildHoursOfOperationsCommand}.
 */
export interface ListChildHoursOfOperationsCommandOutput extends ListChildHoursOfOperationsResponse, __MetadataBearer {}

/**
 * <p>Provides information about the child hours of operations for the specified parent hours of operation.</p>
 *          <p>For more information about child hours of operations, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/">Link overrides from different hours of operation</a> in the
 *      <i> Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListChildHoursOfOperationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListChildHoursOfOperationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListChildHoursOfOperationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListChildHoursOfOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListChildHoursOfOperationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ChildHoursOfOperationsSummaryList: [ // ChildHoursOfOperationsList
 * //     { // HoursOfOperationsIdentifier
 * //       Name: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChildHoursOfOperationsCommandInput - {@link ListChildHoursOfOperationsCommandInput}
 * @returns {@link ListChildHoursOfOperationsCommandOutput}
 * @see {@link ListChildHoursOfOperationsCommandInput} for command's `input` shape.
 * @see {@link ListChildHoursOfOperationsCommandOutput} for command's `response` shape.
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
export class ListChildHoursOfOperationsCommand extends $Command
  .classBuilder<
    ListChildHoursOfOperationsCommandInput,
    ListChildHoursOfOperationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListChildHoursOfOperations", {})
  .n("ConnectClient", "ListChildHoursOfOperationsCommand")
  .sc(ListChildHoursOfOperations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChildHoursOfOperationsRequest;
      output: ListChildHoursOfOperationsResponse;
    };
    sdk: {
      input: ListChildHoursOfOperationsCommandInput;
      output: ListChildHoursOfOperationsCommandOutput;
    };
  };
}
