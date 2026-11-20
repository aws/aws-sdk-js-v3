// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBlueprintVersionRequest, CreateBlueprintVersionResponse } from "../models/models_0";
import { CreateBlueprintVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBlueprintVersionCommand}.
 */
export interface CreateBlueprintVersionCommandInput extends CreateBlueprintVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateBlueprintVersionCommand}.
 */
export interface CreateBlueprintVersionCommandOutput extends CreateBlueprintVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new, immutable version of an existing blueprint so that projects can pin to a
 *          specific version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, CreateBlueprintVersionCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, CreateBlueprintVersionCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // CreateBlueprintVersionRequest
 *   BlueprintArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateBlueprintVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateBlueprintVersionResponse
 * //   BlueprintArn: "STRING_VALUE", // required
 * //   BlueprintVersion: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateBlueprintVersionCommandInput - {@link CreateBlueprintVersionCommandInput}
 * @returns {@link CreateBlueprintVersionCommandOutput}
 * @see {@link CreateBlueprintVersionCommandInput} for command's `input` shape.
 * @see {@link CreateBlueprintVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> Returned when an operation tried to access a nonexistent resource. </p>
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
export class CreateBlueprintVersionCommand extends command<CreateBlueprintVersionCommandInput, CreateBlueprintVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateBlueprintVersion",
  CreateBlueprintVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBlueprintVersionRequest;
      output: CreateBlueprintVersionResponse;
    };
    sdk: {
      input: CreateBlueprintVersionCommandInput;
      output: CreateBlueprintVersionCommandOutput;
    };
  };
}
