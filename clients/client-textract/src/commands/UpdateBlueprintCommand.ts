// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBlueprintRequest, UpdateBlueprintResponse } from "../models/models_0";
import { UpdateBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBlueprintCommand}.
 */
export interface UpdateBlueprintCommandInput extends UpdateBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBlueprintCommand}.
 */
export interface UpdateBlueprintCommandOutput extends UpdateBlueprintResponse, __MetadataBearer {}

/**
 * <p>Updates an existing blueprint, replacing its schema and, optionally, its encryption
 *          configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, UpdateBlueprintCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, UpdateBlueprintCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // UpdateBlueprintRequest
 *   BlueprintArn: "STRING_VALUE", // required
 *   Schema: "STRING_VALUE",
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KmsKeyId: "STRING_VALUE", // required
 *     KmsEncryptionContext: { // KmsEncryptionContext
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBlueprintResponse
 * //   BlueprintArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateBlueprintCommandInput - {@link UpdateBlueprintCommandInput}
 * @returns {@link UpdateBlueprintCommandOutput}
 * @see {@link UpdateBlueprintCommandInput} for command's `input` shape.
 * @see {@link UpdateBlueprintCommandOutput} for command's `response` shape.
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
export class UpdateBlueprintCommand extends command<UpdateBlueprintCommandInput, UpdateBlueprintCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBlueprint",
  UpdateBlueprint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBlueprintRequest;
      output: UpdateBlueprintResponse;
    };
    sdk: {
      input: UpdateBlueprintCommandInput;
      output: UpdateBlueprintCommandOutput;
    };
  };
}
