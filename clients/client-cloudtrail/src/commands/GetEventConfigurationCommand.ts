// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEventConfigurationRequest, GetEventConfigurationResponse } from "../models/models_0";
import { GetEventConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the current event configuration settings for the specified event data store or trail. The response includes maximum event size configuration, the context key selectors configured for the event data store, and any aggregation settings configured for the trail.
 *
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
 *
 * This exception is thrown when an operation is called with an ARN that is not valid.
 *
 * The following is the format of a trail ARN: `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
 *
 * The following is the format of an event data store ARN: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
 *
 * The following is the format of a dashboard ARN: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
 *
 * The following is the format of a channel ARN: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *
 * The specified event data store ARN is not valid or does not map to an event data store in your account.
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *
 * The specified event data store was not found.
 *
 * @throws {@link InvalidEventDataStoreCategoryException} (client fault)
 *
 * This exception is thrown when event categories of specified event data stores are not valid.
 *
 * @throws {@link InvalidEventDataStoreStatusException} (client fault)
 *
 * The event data store is not in a status that supports the operation.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * This exception is thrown when the combination of parameters provided is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *
 * This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:
 *
 * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
 * - Start with a letter or number, and end with a letter or number
 * - Be between 3 and 128 characters
 * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
 * - Not be in IP address format (for example, 192.168.5.4)
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *
 * This exception is thrown when the management account does not have a service-linked role.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link TrailNotFoundException} (client fault)
 *
 * This exception is thrown when the trail with the given name is not found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class GetEventConfigurationCommand extends command<GetEventConfigurationCommandInput, GetEventConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetEventConfiguration",
  GetEventConfiguration$
) {
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
