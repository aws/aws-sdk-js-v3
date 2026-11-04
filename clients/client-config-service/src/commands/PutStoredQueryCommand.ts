// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutStoredQueryRequest, PutStoredQueryResponse } from "../models/models_0";
import { PutStoredQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutStoredQueryCommand}.
 */
export interface PutStoredQueryCommandInput extends PutStoredQueryRequest {}
/**
 * @public
 *
 * The output of {@link PutStoredQueryCommand}.
 */
export interface PutStoredQueryCommandOutput extends PutStoredQueryResponse, __MetadataBearer {}

/**
 * Saves a new query or updates an existing saved query. The `QueryName` must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.
 *
 * > **Note:**
 * >
 * > **Tags are added at creation and cannot be updated**
 * >
 * > `PutStoredQuery` is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different `tags` values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, `tags` will not be updated, even if they are different.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutStoredQueryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutStoredQueryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // PutStoredQueryRequest
 *   StoredQuery: { // StoredQuery
 *     QueryId: "STRING_VALUE",
 *     QueryArn: "STRING_VALUE",
 *     QueryName: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     Expression: "STRING_VALUE",
 *   },
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutStoredQueryCommand(input);
 * const response = await client.send(command);
 * // { // PutStoredQueryResponse
 * //   QueryArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutStoredQueryCommandInput - {@link PutStoredQueryCommandInput}
 * @returns {@link PutStoredQueryCommandOutput}
 * @see {@link PutStoredQueryCommandInput} for command's `input` shape.
 * @see {@link PutStoredQueryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ResourceConcurrentModificationException} (client fault)
 *
 * Two users are trying to modify the same query at the same time. Wait for a moment and try again.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * You have reached the limit of the number of tags you can use. For more information, see [**Service Limits**](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *Config Developer Guide*.
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
export class PutStoredQueryCommand extends command<PutStoredQueryCommandInput, PutStoredQueryCommandOutput>(
  _ep0,
  _mw0,
  "PutStoredQuery",
  PutStoredQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutStoredQueryRequest;
      output: PutStoredQueryResponse;
    };
    sdk: {
      input: PutStoredQueryCommandInput;
      output: PutStoredQueryCommandOutput;
    };
  };
}
