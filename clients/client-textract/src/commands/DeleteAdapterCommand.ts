// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAdapterRequest, DeleteAdapterResponse } from "../models/models_0";
import { DeleteAdapter } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAdapterCommand}.
 */
export interface DeleteAdapterCommandInput extends DeleteAdapterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAdapterCommand}.
 */
export interface DeleteAdapterCommandOutput extends DeleteAdapterResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon Textract adapter. Takes an AdapterId and deletes the adapter specified by the ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, DeleteAdapterCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, DeleteAdapterCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // DeleteAdapterRequest
 *   AdapterId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAdapterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAdapterCommandInput - {@link DeleteAdapterCommandInput}
 * @returns {@link DeleteAdapterCommandOutput}
 * @see {@link DeleteAdapterCommandInput} for command's `input` shape.
 * @see {@link DeleteAdapterCommandOutput} for command's `response` shape.
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
export class DeleteAdapterCommand extends $Command
  .classBuilder<
    DeleteAdapterCommandInput,
    DeleteAdapterCommandOutput,
    TextractClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TextractClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Textract", "DeleteAdapter", {})
  .n("TextractClient", "DeleteAdapterCommand")
  .sc(DeleteAdapter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAdapterRequest;
      output: {};
    };
    sdk: {
      input: DeleteAdapterCommandInput;
      output: DeleteAdapterCommandOutput;
    };
  };
}
