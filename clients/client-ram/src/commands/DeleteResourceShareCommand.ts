// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteResourceShareRequest, DeleteResourceShareResponse } from "../models/models_0";
import type { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { DeleteResourceShare } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourceShareCommand}.
 */
export interface DeleteResourceShareCommandInput extends DeleteResourceShareRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourceShareCommand}.
 */
export interface DeleteResourceShareCommandOutput extends DeleteResourceShareResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified resource share.</p>
 *          <important>
 *             <p>This doesn't delete any of the resources that were associated with the resource share; it
 *                 only stops the sharing of those resources through this resource share.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DeleteResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DeleteResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // DeleteResourceShareRequest
 *   resourceShareArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteResourceShareCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResourceShareResponse
 * //   returnValue: true || false,
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteResourceShareCommandInput - {@link DeleteResourceShareCommandInput}
 * @returns {@link DeleteResourceShareCommandOutput}
 * @see {@link DeleteResourceShareCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *  <p>The operation failed because the requested operation isn't valid for the resource
 *             share in its current state.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class DeleteResourceShareCommand extends $Command
  .classBuilder<
    DeleteResourceShareCommandInput,
    DeleteResourceShareCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonResourceSharing", "DeleteResourceShare", {})
  .n("RAMClient", "DeleteResourceShareCommand")
  .sc(DeleteResourceShare)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourceShareRequest;
      output: DeleteResourceShareResponse;
    };
    sdk: {
      input: DeleteResourceShareCommandInput;
      output: DeleteResourceShareCommandOutput;
    };
  };
}
