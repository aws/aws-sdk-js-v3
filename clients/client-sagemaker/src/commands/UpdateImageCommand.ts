// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateImageRequest, UpdateImageResponse } from "../models/models_5";
import { UpdateImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateImageCommand}.
 */
export interface UpdateImageCommandInput extends UpdateImageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateImageCommand}.
 */
export interface UpdateImageCommandOutput extends UpdateImageResponse, __MetadataBearer {}

/**
 * Updates the properties of a SageMaker AI image. To change the image's tags, use the [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html) and [DeleteTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteTags.html) APIs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateImageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateImageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateImageRequest
 *   DeleteProperties: [ // ImageDeletePropertyList
 *     "STRING_VALUE",
 *   ],
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 *   ImageName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateImageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateImageResponse
 * //   ImageArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateImageCommandInput - {@link UpdateImageCommandInput}
 * @returns {@link UpdateImageCommandOutput}
 * @see {@link UpdateImageCommandInput} for command's `input` shape.
 * @see {@link UpdateImageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *
 * Resource being accessed is in use.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class UpdateImageCommand extends command<UpdateImageCommandInput, UpdateImageCommandOutput>(
  _ep0,
  _mw0,
  "UpdateImage",
  UpdateImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateImageRequest;
      output: UpdateImageResponse;
    };
    sdk: {
      input: UpdateImageCommandInput;
      output: UpdateImageCommandOutput;
    };
  };
}
