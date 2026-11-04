// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAdapterRequest, CreateAdapterResponse } from "../models/models_0";
import { CreateAdapter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAdapterCommand}.
 */
export interface CreateAdapterCommandInput extends CreateAdapterRequest {}
/**
 * @public
 *
 * The output of {@link CreateAdapterCommand}.
 */
export interface CreateAdapterCommandOutput extends CreateAdapterResponse, __MetadataBearer {}

/**
 * Creates an adapter, which can be fine-tuned for enhanced performance on user provided documents. Takes an AdapterName and FeatureType. Currently the only supported feature type is `QUERIES`. You can also provide a Description, Tags, and a ClientRequestToken. You can choose whether or not the adapter should be AutoUpdated with the AutoUpdate argument. By default, AutoUpdate is set to DISABLED.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, CreateAdapterCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, CreateAdapterCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // CreateAdapterRequest
 *   AdapterName: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   FeatureTypes: [ // FeatureTypes // required
 *     "TABLES" || "FORMS" || "QUERIES" || "SIGNATURES" || "LAYOUT",
 *   ],
 *   AutoUpdate: "ENABLED" || "DISABLED",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAdapterCommand(input);
 * const response = await client.send(command);
 * // { // CreateAdapterResponse
 * //   AdapterId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAdapterCommandInput - {@link CreateAdapterCommandInput}
 * @returns {@link CreateAdapterCommandOutput}
 * @see {@link CreateAdapterCommandInput} for command's `input` shape.
 * @see {@link CreateAdapterCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You aren't authorized to perform the action. Use the Amazon Resource Name (ARN) of an authorized user or IAM role to perform the operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * A `ClientRequestToken` input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Textract experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * An input parameter violated a constraint. For example, in synchronous operations, an `InvalidParameterException` exception occurs when neither of the `S3Object` or `Bytes` values are supplied in the `Document` request parameter. Validate your parameter before calling the API operation again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An Amazon Textract service limit was exceeded. For example, if you start too many asynchronous jobs concurrently, calls to start operations (`StartDocumentTextDetection`, for example) raise a LimitExceededException exception (HTTP status code: 400) until the number of concurrently running jobs is below the Amazon Textract service limit.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Returned when a request cannot be completed as it would exceed a maximum service quota.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Textract is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that a request was not valid. Check request for proper formatting.
 *
 * @throws {@link TextractServiceException}
 *
 * Base exception class for all service exceptions from Textract service.
 *
 * @public
 */
export class CreateAdapterCommand extends command<CreateAdapterCommandInput, CreateAdapterCommandOutput>(
  _ep0,
  _mw0,
  "CreateAdapter",
  CreateAdapter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAdapterRequest;
      output: CreateAdapterResponse;
    };
    sdk: {
      input: CreateAdapterCommandInput;
      output: CreateAdapterCommandOutput;
    };
  };
}
