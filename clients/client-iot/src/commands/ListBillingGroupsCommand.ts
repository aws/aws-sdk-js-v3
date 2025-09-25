// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListBillingGroupsRequest, ListBillingGroupsResponse } from "../models/models_1";
import { ListBillingGroups } from "../schemas/schemas_27_Billing";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBillingGroupsCommand}.
 */
export interface ListBillingGroupsCommandInput extends ListBillingGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListBillingGroupsCommand}.
 */
export interface ListBillingGroupsCommandOutput extends ListBillingGroupsResponse, __MetadataBearer {}

/**
 * <p>Lists the billing groups you have created.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListBillingGroups</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListBillingGroupsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListBillingGroupsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListBillingGroupsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   namePrefixFilter: "STRING_VALUE",
 * };
 * const command = new ListBillingGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillingGroupsResponse
 * //   billingGroups: [ // BillingGroupNameAndArnList
 * //     { // GroupNameAndArn
 * //       groupName: "STRING_VALUE",
 * //       groupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillingGroupsCommandInput - {@link ListBillingGroupsCommandInput}
 * @returns {@link ListBillingGroupsCommandOutput}
 * @see {@link ListBillingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListBillingGroupsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListBillingGroupsCommand extends $Command
  .classBuilder<
    ListBillingGroupsCommandInput,
    ListBillingGroupsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListBillingGroups", {})
  .n("IoTClient", "ListBillingGroupsCommand")
  .sc(ListBillingGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillingGroupsRequest;
      output: ListBillingGroupsResponse;
    };
    sdk: {
      input: ListBillingGroupsCommandInput;
      output: ListBillingGroupsCommandOutput;
    };
  };
}
