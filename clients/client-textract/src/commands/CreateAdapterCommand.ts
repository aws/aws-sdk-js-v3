// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAdapterRequest, CreateAdapterResponse } from "../models/models_0";
import { de_CreateAdapterCommand, se_CreateAdapterCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates an adapter, which can be fine-tuned for enhanced performance on user provided
 *          documents. Takes an AdapterName and FeatureType. Currently the only supported feature type
 *          is <code>QUERIES</code>. You can also provide a Description, Tags, and a
 *          ClientRequestToken. You can choose whether or not the adapter should be AutoUpdated with
 *          the AutoUpdate argument. By default, AutoUpdate is set to DISABLED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, CreateAdapterCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, CreateAdapterCommand } = require("@aws-sdk/client-textract"); // CommonJS import
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
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at
 *          least one of the other input parameters is different from the previous call to the
 *          operation. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Textract experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Textract service limit was exceeded. For example, if you start too many
 *          asynchronous jobs concurrently, calls to start operations
 *             (<code>StartDocumentTextDetection</code>, for example) raise a LimitExceededException
 *          exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *          the Amazon Textract service limit. </p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Returned when a request cannot be completed as it would exceed a maximum service quota.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>  Indicates that a request was not valid. Check request for proper formatting. </p>
 *
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 *
 * @public
 */
export class CreateAdapterCommand extends $Command
  .classBuilder<
    CreateAdapterCommandInput,
    CreateAdapterCommandOutput,
    TextractClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TextractClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Textract", "CreateAdapter", {})
  .n("TextractClient", "CreateAdapterCommand")
  .f(void 0, void 0)
  .ser(se_CreateAdapterCommand)
  .de(de_CreateAdapterCommand)
  .build() {
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
