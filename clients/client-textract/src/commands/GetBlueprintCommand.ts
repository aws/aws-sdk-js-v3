// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBlueprintRequest, GetBlueprintResponse } from "../models/models_0";
import { GetBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBlueprintCommand}.
 */
export interface GetBlueprintCommandInput extends GetBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintCommand}.
 */
export interface GetBlueprintCommandOutput extends GetBlueprintResponse, __MetadataBearer {}

/**
 * <p>Gets the details of a blueprint, including its schema, encryption settings, and
 *          timestamps.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, GetBlueprintCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, GetBlueprintCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // GetBlueprintRequest
 *   BlueprintArn: "STRING_VALUE", // required
 *   BlueprintVersion: "STRING_VALUE",
 * };
 * const command = new GetBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintResponse
 * //   BlueprintArn: "STRING_VALUE", // required
 * //   BlueprintName: "STRING_VALUE", // required
 * //   BlueprintVersion: "STRING_VALUE",
 * //   Schema: "STRING_VALUE", // required
 * //   KmsKeyId: "STRING_VALUE",
 * //   KmsEncryptionContext: { // KmsEncryptionContext
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetBlueprintCommandInput - {@link GetBlueprintCommandInput}
 * @returns {@link GetBlueprintCommandOutput}
 * @see {@link GetBlueprintCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You aren't authorized to perform the action. Use the Amazon Resource Name (ARN)
 *             of an authorized user or IAM role to perform the operation.</p>
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
export class GetBlueprintCommand extends command<GetBlueprintCommandInput, GetBlueprintCommandOutput>(
  _ep0,
  _mw0,
  "GetBlueprint",
  GetBlueprint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlueprintRequest;
      output: GetBlueprintResponse;
    };
    sdk: {
      input: GetBlueprintCommandInput;
      output: GetBlueprintCommandOutput;
    };
  };
}
