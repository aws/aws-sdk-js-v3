// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEventConfigurationRequest, GetEventConfigurationResponse } from "../models/models_0";
import { de_GetEventConfigurationCommand, se_GetEventConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventConfigurationCommand}.
 */
export interface GetEventConfigurationCommandInput extends GetEventConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetEventConfigurationCommand}.
 */
export interface GetEventConfigurationCommandOutput extends GetEventConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current event configuration settings for the specified event data store, including details
 *          about maximum event size and context key selectors configured for the event data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetEventConfigurationCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetEventConfigurationCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // GetEventConfigurationRequest
 *   EventDataStore: "STRING_VALUE",
 * };
 * const command = new GetEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEventConfigurationResponse
 * //   EventDataStoreArn: "STRING_VALUE",
 * //   MaxEventSize: "Standard" || "Large",
 * //   ContextKeySelectors: [ // ContextKeySelectors
 * //     { // ContextKeySelector
 * //       Type: "TagContext" || "RequestContext", // required
 * //       Equals: [ // OperatorTargetList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEventConfigurationCommandInput - {@link GetEventConfigurationCommandInput}
 * @returns {@link GetEventConfigurationCommandOutput}
 * @see {@link GetEventConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEventConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link CloudTrailARNInvalidException} (client fault)
 *  <p>This exception is thrown when an operation is called with an ARN that is not valid.</p>
 *          <p>The following is the format of a trail ARN: <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
 *          </p>
 *          <p>The following is the format of an event data store ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
 *          </p>
 *          <p>The following is the format of a dashboard ARN: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
 *          </p>
 *          <p>The following is the format of a channel ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
 *          </p>
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InvalidEventDataStoreCategoryException} (client fault)
 *  <p>This exception is thrown when event categories of specified event data stores are not
 *          valid.</p>
 *
 * @throws {@link InvalidEventDataStoreStatusException} (client fault)
 *  <p>The event data store is not in a status that supports the operation.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>This exception is thrown when the combination of parameters provided is not
 *          valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class GetEventConfigurationCommand extends $Command
  .classBuilder<
    GetEventConfigurationCommandInput,
    GetEventConfigurationCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "GetEventConfiguration", {})
  .n("CloudTrailClient", "GetEventConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetEventConfigurationCommand)
  .de(de_GetEventConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventConfigurationRequest;
      output: GetEventConfigurationResponse;
    };
    sdk: {
      input: GetEventConfigurationCommandInput;
      output: GetEventConfigurationCommandOutput;
    };
  };
}
