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
import type { ListManagedMicrovmImageVersionsInput, ListManagedMicrovmImageVersionsOutput } from "../models/models_0";
import { ListManagedMicrovmImageVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedMicrovmImageVersionsCommand}.
 */
export interface ListManagedMicrovmImageVersionsCommandInput extends ListManagedMicrovmImageVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListManagedMicrovmImageVersionsCommand}.
 */
export interface ListManagedMicrovmImageVersionsCommandOutput extends ListManagedMicrovmImageVersionsOutput, __MetadataBearer {}

/**
 * <p>Lists versions of a managed MicroVM image. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, ListManagedMicrovmImageVersionsCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, ListManagedMicrovmImageVersionsCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // ListManagedMicrovmImageVersionsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   imageIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListManagedMicrovmImageVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedMicrovmImageVersionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // ManagedMicrovmImageVersionList // required
 * //     { // ManagedMicrovmImageVersion
 * //       imageArn: "STRING_VALUE", // required
 * //       imageVersion: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedMicrovmImageVersionsCommandInput - {@link ListManagedMicrovmImageVersionsCommandInput}
 * @returns {@link ListManagedMicrovmImageVersionsCommandOutput}
 * @see {@link ListManagedMicrovmImageVersionsCommandInput} for command's `input` shape.
 * @see {@link ListManagedMicrovmImageVersionsCommandOutput} for command's `response` shape.
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
export class ListManagedMicrovmImageVersionsCommand extends $Command
  .classBuilder<
    ListManagedMicrovmImageVersionsCommandInput,
    ListManagedMicrovmImageVersionsCommandOutput,
    LambdaMicrovmsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaMicrovmsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LambdaMicrovms", "ListManagedMicrovmImageVersions", {})
  .n("LambdaMicrovmsClient", "ListManagedMicrovmImageVersionsCommand")
  .sc(ListManagedMicrovmImageVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedMicrovmImageVersionsInput;
      output: ListManagedMicrovmImageVersionsOutput;
    };
    sdk: {
      input: ListManagedMicrovmImageVersionsCommandInput;
      output: ListManagedMicrovmImageVersionsCommandOutput;
    };
  };
}
