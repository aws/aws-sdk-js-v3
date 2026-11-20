// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBlueprintRequest, CreateBlueprintResponse } from "../models/models_0";
import { CreateBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBlueprintCommand}.
 */
export interface CreateBlueprintCommandInput extends CreateBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link CreateBlueprintCommand}.
 */
export interface CreateBlueprintCommandOutput extends CreateBlueprintResponse, __MetadataBearer {}

/**
 * <p>Creates a blueprint that defines the schema Amazon Textract uses to extract structured
 *          data from a document during a document insights job. A blueprint describes the fields
 *          to extract and how to normalize them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, CreateBlueprintCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, CreateBlueprintCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // CreateBlueprintRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   BlueprintName: "STRING_VALUE", // required
 *   Schema: "STRING_VALUE", // required
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KmsKeyId: "STRING_VALUE", // required
 *     KmsEncryptionContext: { // KmsEncryptionContext
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // CreateBlueprintResponse
 * //   BlueprintArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateBlueprintCommandInput - {@link CreateBlueprintCommandInput}
 * @returns {@link CreateBlueprintCommandOutput}
 * @see {@link CreateBlueprintCommandInput} for command's `input` shape.
 * @see {@link CreateBlueprintCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 * @throws {@link ValidationException} (client fault)
 *  <p>  Indicates that a request was not valid. Check request for proper formatting. </p>
 *
 * @throws {@link TextractServiceException}
 * <p>Base exception class for all service exceptions from Textract service.</p>
 *
 *
 * @public
 */
export class CreateBlueprintCommand extends command<CreateBlueprintCommandInput, CreateBlueprintCommandOutput>(
  _ep0,
  _mw0,
  "CreateBlueprint",
  CreateBlueprint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBlueprintRequest;
      output: CreateBlueprintResponse;
    };
    sdk: {
      input: CreateBlueprintCommandInput;
      output: CreateBlueprintCommandOutput;
    };
  };
}
