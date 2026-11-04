// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConfigurationRecordersRequest, ListConfigurationRecordersResponse } from "../models/models_0";
import { ListConfigurationRecorders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConfigurationRecordersCommand}.
 */
export interface ListConfigurationRecordersCommandInput extends ListConfigurationRecordersRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationRecordersCommand}.
 */
export interface ListConfigurationRecordersCommandOutput extends ListConfigurationRecordersResponse, __MetadataBearer {}

/**
 * Returns a list of configuration recorders depending on the filters you specify.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListConfigurationRecordersCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListConfigurationRecordersCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // ListConfigurationRecordersRequest
 *   Filters: [ // ConfigurationRecorderFilterList
 *     { // ConfigurationRecorderFilter
 *       filterName: "recordingScope",
 *       filterValue: [ // ConfigurationRecorderFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConfigurationRecordersCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationRecordersResponse
 * //   ConfigurationRecorderSummaries: [ // ConfigurationRecorderSummaries // required
 * //     { // ConfigurationRecorderSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       servicePrincipal: "STRING_VALUE",
 * //       recordingScope: "INTERNAL" || "PAID", // required
 * //       provider: "AZURE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationRecordersCommandInput - {@link ListConfigurationRecordersCommandInput}
 * @returns {@link ListConfigurationRecordersCommandOutput}
 * @see {@link ListConfigurationRecordersCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationRecordersCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The requested operation is not valid. You will see this exception if there are missing required fields or if the input value fails the validation.
 *
 * For [PutStoredQuery](https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html), one of the following errors:
 *
 * - There are missing required fields.
 * - The input value fails the validation.
 * - You are trying to create more than 300 queries.
 *
 * For [DescribeConfigurationRecorders](https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html) and [DescribeConfigurationRecorderStatus](https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html), one of the following errors:
 *
 * - You have specified more than one configuration recorder.
 * - You have provided a service principal for service-linked configuration recorder that is not valid.
 *
 * For [AssociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html) and [DisassociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html), one of the following errors:
 *
 * - Your configuraiton recorder has a recording strategy that does not allow the association or disassociation of resource types.
 * - One or more of the specified resource types are already associated or disassociated with the configuration recorder.
 * - For service-linked configuration recorders, the configuration recorder does not record one or more of the specified resource types.
 *
 * For [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html), one of the following errors:
 *
 * - You have provided both `Arn` and `ServicePrincipal`. Only one of `Arn` or `ServicePrincipal` can be specified.
 * - You have provided a service principal for service-linked configuration recorder that is not valid.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class ListConfigurationRecordersCommand extends command<ListConfigurationRecordersCommandInput, ListConfigurationRecordersCommandOutput>(
  _ep0,
  _mw0,
  "ListConfigurationRecorders",
  ListConfigurationRecorders$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationRecordersRequest;
      output: ListConfigurationRecordersResponse;
    };
    sdk: {
      input: ListConfigurationRecordersCommandInput;
      output: ListConfigurationRecordersCommandOutput;
    };
  };
}
