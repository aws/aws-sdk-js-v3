// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteResourceShareRequest, DeleteResourceShareResponse } from "../models/models_0";
import { DeleteResourceShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified resource share.
 *
 * > **Important:** This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.
 *
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
 *
 * The operation failed because the client token input parameter matched one that was used with a previous call to the operation, but at least one of the other input parameters is different from the previous call.
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *
 * The operation failed because the specified client token isn't valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *
 * The operation failed because the requested operation isn't valid for the resource share in its current state.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The operation failed because the requested operation isn't permitted.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The operation failed because it exceeded the rate at which you are allowed to perform this operation. Please try again later.
 *
 * @throws {@link UnknownResourceException} (client fault)
 *
 * The operation failed because a specified resource couldn't be found.
 *
 * @throws {@link RAMServiceException}
 *
 * Base exception class for all service exceptions from RAM service.
 *
 * @public
 */
export class DeleteResourceShareCommand extends command<DeleteResourceShareCommandInput, DeleteResourceShareCommandOutput>(
  _ep0,
  _mw0,
  "DeleteResourceShare",
  DeleteResourceShare$
) {
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
