// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAdapterRequest, UpdateAdapterResponse } from "../models/models_0";
import { UpdateAdapter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAdapterCommand}.
 */
export interface UpdateAdapterCommandInput extends UpdateAdapterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAdapterCommand}.
 */
export interface UpdateAdapterCommandOutput extends UpdateAdapterResponse, __MetadataBearer {}

/**
 * Update the configuration for an adapter. FeatureTypes configurations cannot be updated. At least one new parameter must be specified as an argument.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, UpdateAdapterCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, UpdateAdapterCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * // import type { TextractClientConfig } from "@aws-sdk/client-textract";
 * const config = {}; // type is TextractClientConfig
 * const client = new TextractClient(config);
 * const input = { // UpdateAdapterRequest
 *   AdapterId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AdapterName: "STRING_VALUE",
 *   AutoUpdate: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateAdapterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAdapterResponse
 * //   AdapterId: "STRING_VALUE",
 * //   AdapterName: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   FeatureTypes: [ // FeatureTypes
 * //     "TABLES" || "FORMS" || "QUERIES" || "SIGNATURES" || "LAYOUT",
 * //   ],
 * //   AutoUpdate: "ENABLED" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param UpdateAdapterCommandInput - {@link UpdateAdapterCommandInput}
 * @returns {@link UpdateAdapterCommandOutput}
 * @see {@link UpdateAdapterCommandInput} for command's `input` shape.
 * @see {@link UpdateAdapterCommandOutput} for command's `response` shape.
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
export class UpdateAdapterCommand extends command<UpdateAdapterCommandInput, UpdateAdapterCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAdapter",
  UpdateAdapter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAdapterRequest;
      output: UpdateAdapterResponse;
    };
    sdk: {
      input: UpdateAdapterCommandInput;
      output: UpdateAdapterCommandOutput;
    };
  };
}
