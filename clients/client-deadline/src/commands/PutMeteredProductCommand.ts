// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutMeteredProductRequest, PutMeteredProductResponse } from "../models/models_1";
import { PutMeteredProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutMeteredProductCommand}.
 */
export interface PutMeteredProductCommandInput extends PutMeteredProductRequest {}
/**
 * @public
 *
 * The output of {@link PutMeteredProductCommand}.
 */
export interface PutMeteredProductCommandOutput extends PutMeteredProductResponse, __MetadataBearer {}

/**
 * <p>Adds a metered product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, PutMeteredProductCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, PutMeteredProductCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // PutMeteredProductRequest
 *   licenseEndpointId: "STRING_VALUE", // required
 *   productId: "STRING_VALUE", // required
 * };
 * const command = new PutMeteredProductCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutMeteredProductCommandInput - {@link PutMeteredProductCommandInput}
 * @returns {@link PutMeteredProductCommandOutput}
 * @see {@link PutMeteredProductCommandInput} for command's `input` shape.
 * @see {@link PutMeteredProductCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class PutMeteredProductCommand extends $Command
  .classBuilder<
    PutMeteredProductCommandInput,
    PutMeteredProductCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "PutMeteredProduct", {})
  .n("DeadlineClient", "PutMeteredProductCommand")
  .sc(PutMeteredProduct$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMeteredProductRequest;
      output: {};
    };
    sdk: {
      input: PutMeteredProductCommandInput;
      output: PutMeteredProductCommandOutput;
    };
  };
}
