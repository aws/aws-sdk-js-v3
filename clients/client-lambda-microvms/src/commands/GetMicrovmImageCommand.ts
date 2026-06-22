// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LambdaMicrovmsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaMicrovmsClient";
import type { GetMicrovmImageInput, GetMicrovmImageOutput } from "../models/models_0";
import { GetMicrovmImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMicrovmImageCommand}.
 */
export interface GetMicrovmImageCommandInput extends GetMicrovmImageInput {}
/**
 * @public
 *
 * The output of {@link GetMicrovmImageCommand}.
 */
export interface GetMicrovmImageCommandOutput extends GetMicrovmImageOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details of a MicroVM image, including its state, versions, and configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, GetMicrovmImageCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, GetMicrovmImageCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // GetMicrovmImageInput
 *   imageIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetMicrovmImageCommand(input);
 * const response = await client.send(command);
 * // { // GetMicrovmImageOutput
 * //   imageArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   state: "CREATING" || "CREATED" || "CREATE_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * //   latestActiveImageVersion: "STRING_VALUE",
 * //   latestFailedImageVersion: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetMicrovmImageCommandInput - {@link GetMicrovmImageCommandInput}
 * @returns {@link GetMicrovmImageCommandOutput}
 * @see {@link GetMicrovmImageCommandInput} for command's `input` shape.
 * @see {@link GetMicrovmImageCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service.</p>
 *
 * @throws {@link LambdaMicrovmsServiceException}
 * <p>Base exception class for all service exceptions from LambdaMicrovms service.</p>
 *
 *
 * @public
 */
export class GetMicrovmImageCommand extends $Command
  .classBuilder<
    GetMicrovmImageCommandInput,
    GetMicrovmImageCommandOutput,
    LambdaMicrovmsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaMicrovmsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LambdaMicrovms", "GetMicrovmImage", {})
  .n("LambdaMicrovmsClient", "GetMicrovmImageCommand")
  .sc(GetMicrovmImage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMicrovmImageInput;
      output: GetMicrovmImageOutput;
    };
    sdk: {
      input: GetMicrovmImageCommandInput;
      output: GetMicrovmImageCommandOutput;
    };
  };
}
