// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAdapterVersionRequest, DeleteAdapterVersionResponse } from "../models/models_0";
import { DeleteAdapterVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAdapterVersionCommand}.
 */
export interface DeleteAdapterVersionCommandInput extends DeleteAdapterVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAdapterVersionCommand}.
 */
export interface DeleteAdapterVersionCommandOutput extends DeleteAdapterVersionResponse, __MetadataBearer {}

/**
 * Deletes an Amazon Textract adapter version. Requires that you specify both an AdapterId and a AdapterVersion. Deletes the adapter version specified by the AdapterId and the AdapterVersion.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, DeleteAdapterVersionCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, DeleteAdapterVersionCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // DeleteAdapterVersionRequest
 *   AdapterId: "STRING_VALUE", // required
 *   AdapterVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteAdapterVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAdapterVersionCommandInput - {@link DeleteAdapterVersionCommandInput}
 * @returns {@link DeleteAdapterVersionCommandOutput}
 * @see {@link DeleteAdapterVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteAdapterVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Textract experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * An input parameter violated a constraint. For example, in synchronous operations, an `InvalidParameterException` exception occurs when neither of the `S3Object` or `Bytes` values are supplied in the `Document` request parameter. Validate your parameter before calling the API operation again.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Textract.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Returned when an operation tried to access a nonexistent resource.
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
export class DeleteAdapterVersionCommand extends command<DeleteAdapterVersionCommandInput, DeleteAdapterVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAdapterVersion",
  DeleteAdapterVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAdapterVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteAdapterVersionCommandInput;
      output: DeleteAdapterVersionCommandOutput;
    };
  };
}
