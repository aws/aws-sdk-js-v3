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
import type { ListManagedMicrovmImagesInput, ListManagedMicrovmImagesOutput } from "../models/models_0";
import { ListManagedMicrovmImages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedMicrovmImagesCommand}.
 */
export interface ListManagedMicrovmImagesCommandInput extends ListManagedMicrovmImagesInput {}
/**
 * @public
 *
 * The output of {@link ListManagedMicrovmImagesCommand}.
 */
export interface ListManagedMicrovmImagesCommandOutput extends ListManagedMicrovmImagesOutput, __MetadataBearer {}

/**
 * <p>Lists AWS managed MicroVM images available for use as base images. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, ListManagedMicrovmImagesCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, ListManagedMicrovmImagesCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // ListManagedMicrovmImagesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedMicrovmImagesCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedMicrovmImagesOutput
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // ManagedMicrovmImageSummaryList // required
 * //     { // ManagedMicrovmImageSummary
 * //       imageArn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedMicrovmImagesCommandInput - {@link ListManagedMicrovmImagesCommandInput}
 * @returns {@link ListManagedMicrovmImagesCommandOutput}
 * @see {@link ListManagedMicrovmImagesCommandInput} for command's `input` shape.
 * @see {@link ListManagedMicrovmImagesCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request later.</p>
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
export class ListManagedMicrovmImagesCommand extends $Command
  .classBuilder<
    ListManagedMicrovmImagesCommandInput,
    ListManagedMicrovmImagesCommandOutput,
    LambdaMicrovmsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaMicrovmsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LambdaMicrovms", "ListManagedMicrovmImages", {})
  .n("LambdaMicrovmsClient", "ListManagedMicrovmImagesCommand")
  .sc(ListManagedMicrovmImages$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedMicrovmImagesInput;
      output: ListManagedMicrovmImagesOutput;
    };
    sdk: {
      input: ListManagedMicrovmImagesCommandInput;
      output: ListManagedMicrovmImagesCommandOutput;
    };
  };
}
