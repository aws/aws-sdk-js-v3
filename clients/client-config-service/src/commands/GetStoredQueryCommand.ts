// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStoredQueryRequest, GetStoredQueryResponse } from "../models/models_0";
import { GetStoredQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStoredQueryCommand}.
 */
export interface GetStoredQueryCommandInput extends GetStoredQueryRequest {}
/**
 * @public
 *
 * The output of {@link GetStoredQueryCommand}.
 */
export interface GetStoredQueryCommandOutput extends GetStoredQueryResponse, __MetadataBearer {}

/**
 * Returns the details of a specific stored query.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetStoredQueryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetStoredQueryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // GetStoredQueryRequest
 *   QueryName: "STRING_VALUE", // required
 * };
 * const command = new GetStoredQueryCommand(input);
 * const response = await client.send(command);
 * // { // GetStoredQueryResponse
 * //   StoredQuery: { // StoredQuery
 * //     QueryId: "STRING_VALUE",
 * //     QueryArn: "STRING_VALUE",
 * //     QueryName: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Expression: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStoredQueryCommandInput - {@link GetStoredQueryCommandInput}
 * @returns {@link GetStoredQueryCommandOutput}
 * @see {@link GetStoredQueryCommandInput} for command's `input` shape.
 * @see {@link GetStoredQueryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You have specified a resource that does not exist.
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
export class GetStoredQueryCommand extends command<GetStoredQueryCommandInput, GetStoredQueryCommandOutput>(
  _ep0,
  _mw0,
  "GetStoredQuery",
  GetStoredQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStoredQueryRequest;
      output: GetStoredQueryResponse;
    };
    sdk: {
      input: GetStoredQueryCommandInput;
      output: GetStoredQueryCommandOutput;
    };
  };
}
