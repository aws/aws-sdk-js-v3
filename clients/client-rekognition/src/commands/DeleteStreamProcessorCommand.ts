// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteStreamProcessorRequest, DeleteStreamProcessorResponse } from "../models/models_0";
import { DeleteStreamProcessor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteStreamProcessorCommand}.
 */
export interface DeleteStreamProcessorCommandInput extends DeleteStreamProcessorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStreamProcessorCommand}.
 */
export interface DeleteStreamProcessorCommandOutput extends DeleteStreamProcessorResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see [Rekognition feature availability changes](https://docs.aws.amazon.com/rekognition/latest/dg/rekognition-availability-changes.html).
 * >
 * > **This change does not impact the availability of other Amazon Rekognition features.**
 *
 * Deletes the stream processor identified by `Name`. You assign the value for `Name` when you create the stream processor with CreateStreamProcessor. You might not be able to use the same name for a stream processor for a few seconds after calling `DeleteStreamProcessor`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // DeleteStreamProcessorRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteStreamProcessorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStreamProcessorCommandInput - {@link DeleteStreamProcessorCommandInput}
 * @returns {@link DeleteStreamProcessorCommandOutput}
 * @see {@link DeleteStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is already being used.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @public
 */
export class DeleteStreamProcessorCommand extends command<DeleteStreamProcessorCommandInput, DeleteStreamProcessorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteStreamProcessor",
  DeleteStreamProcessor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStreamProcessorRequest;
      output: {};
    };
    sdk: {
      input: DeleteStreamProcessorCommandInput;
      output: DeleteStreamProcessorCommandOutput;
    };
  };
}
