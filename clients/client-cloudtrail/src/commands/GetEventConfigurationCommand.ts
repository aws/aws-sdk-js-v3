// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEventConfigurationRequest, GetEventConfigurationResponse } from "../models/models_0";
import { GetEventConfiguration } from "../schemas/schemas_0";

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
 * <p>Retrieves the current event configuration settings for the specified event data store or trail. The response includes maximum event size configuration, the context key selectors configured for the event data store, and any aggregation settings configured for the trail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetEventConfigurationCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetEventConfigurationCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // GetEventConfigurationRequest
 *   TrailName: "STRING_VALUE",
 *   EventDataStore: "STRING_VALUE",
 * };
 * const command = new GetEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEventConfigurationResponse
 * //   TrailARN: "STRING_VALUE",
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
 * //   AggregationConfigurations: [ // AggregationConfigurations
 * //     { // AggregationConfiguration
 * //       Templates: [ // Templates // required
 * //         "API_ACTIVITY" || "RESOURCE_ACCESS" || "USER_ACTIONS",
 * //       ],
 * //       EventCategory: "Data", // required
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
 * @throws {@link InvalidTrailNameException} (client fault)
 *  <p>This exception is thrown when the provided trail name is not valid. Trail names must
 *          meet the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores
 *                (_), or dashes (-)</p>
 *             </li>
 *             <li>
 *                <p>Start with a letter or number, and end with a letter or number</p>
 *             </li>
 *             <li>
 *                <p>Be between 3 and 128 characters</p>
 *             </li>
 *             <li>
 *                <p>Have no adjacent periods, underscores or dashes. Names like
 *                   <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p>
 *             </li>
 *             <li>
 *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link TrailNotFoundException} (client fault)
 *  <p>This exception is thrown when the trail with the given name is not found.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "GetEventConfiguration", {})
  .n("CloudTrailClient", "GetEventConfigurationCommand")
  .sc(GetEventConfiguration)
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
