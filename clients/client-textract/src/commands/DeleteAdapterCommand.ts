// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAdapterRequest, DeleteAdapterResponse } from "../models/models_0";
import { DeleteAdapter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an Amazon Textract adapter. Takes an AdapterId and deletes the adapter specified by the ID.
 *
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
export class DeleteAdapterCommand extends command<DeleteAdapterCommandInput, DeleteAdapterCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAdapter",
  DeleteAdapter$
) {
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
