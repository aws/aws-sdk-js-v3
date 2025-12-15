// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteShareRequest, DeleteShareResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { DeleteShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteShareCommand}.
 */
export interface DeleteShareCommandInput extends DeleteShareRequest {}
/**
 * @public
 *
 * The output of {@link DeleteShareCommand}.
 */
export interface DeleteShareCommandOutput extends DeleteShareResponse, __MetadataBearer {}

/**
 * <p>Deletes a resource share. If you are the resource owner, the subscriber will no longer have access to the shared resource. If you are the subscriber, this operation deletes your access to the share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteShareCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteShareCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteShareRequest
 *   shareId: "STRING_VALUE", // required
 * };
 * const command = new DeleteShareCommand(input);
 * const response = await client.send(command);
 * // { // DeleteShareResponse
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteShareCommandInput - {@link DeleteShareCommandInput}
 * @returns {@link DeleteShareCommandOutput}
 * @see {@link DeleteShareCommandInput} for command's `input` shape.
 * @see {@link DeleteShareCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class DeleteShareCommand extends $Command
  .classBuilder<
    DeleteShareCommandInput,
    DeleteShareCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "DeleteShare", {})
  .n("OmicsClient", "DeleteShareCommand")
  .sc(DeleteShare$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteShareRequest;
      output: DeleteShareResponse;
    };
    sdk: {
      input: DeleteShareCommandInput;
      output: DeleteShareCommandOutput;
    };
  };
}
