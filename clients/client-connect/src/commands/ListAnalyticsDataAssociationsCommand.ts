// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAnalyticsDataAssociationsRequest, ListAnalyticsDataAssociationsResponse } from "../models/models_1";
import {
  de_ListAnalyticsDataAssociationsCommand,
  se_ListAnalyticsDataAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnalyticsDataAssociationsCommand}.
 */
export interface ListAnalyticsDataAssociationsCommandInput extends ListAnalyticsDataAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnalyticsDataAssociationsCommand}.
 */
export interface ListAnalyticsDataAssociationsCommandOutput
  extends ListAnalyticsDataAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Lists the association status of requested dataset ID for a given Amazon Connect
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListAnalyticsDataAssociationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListAnalyticsDataAssociationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListAnalyticsDataAssociationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAnalyticsDataAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnalyticsDataAssociationsResponse
 * //   Results: [ // AnalyticsDataAssociationResults
 * //     { // AnalyticsDataAssociationResult
 * //       DataSetId: "STRING_VALUE",
 * //       TargetAccountId: "STRING_VALUE",
 * //       ResourceShareId: "STRING_VALUE",
 * //       ResourceShareArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnalyticsDataAssociationsCommandInput - {@link ListAnalyticsDataAssociationsCommandInput}
 * @returns {@link ListAnalyticsDataAssociationsCommandOutput}
 * @see {@link ListAnalyticsDataAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAnalyticsDataAssociationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListAnalyticsDataAssociationsCommand extends $Command
  .classBuilder<
    ListAnalyticsDataAssociationsCommandInput,
    ListAnalyticsDataAssociationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ListAnalyticsDataAssociations", {})
  .n("ConnectClient", "ListAnalyticsDataAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListAnalyticsDataAssociationsCommand)
  .de(de_ListAnalyticsDataAssociationsCommand)
  .build() {}
