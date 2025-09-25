// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIdentitySourceRequest } from "../models/models_0";
import { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { DeleteIdentitySource } from "../schemas/schemas_7_ApprovalTeam";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentitySourceCommand}.
 */
export interface DeleteIdentitySourceCommandInput extends DeleteIdentitySourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentitySourceCommand}.
 */
export interface DeleteIdentitySourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an identity source. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html">Identity Source</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, DeleteIdentitySourceCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, DeleteIdentitySourceCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // DeleteIdentitySourceRequest
 *   IdentitySourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentitySourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentitySourceCommandInput - {@link DeleteIdentitySourceCommandInput}
 * @returns {@link DeleteIdentitySourceCommandOutput}
 * @see {@link DeleteIdentitySourceCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentitySourceCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Check your permissions, and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be completed because it conflicts with the current state of a resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link MPAServiceException}
 * <p>Base exception class for all service exceptions from MPA service.</p>
 *
 *
 * @public
 */
export class DeleteIdentitySourceCommand extends $Command
  .classBuilder<
    DeleteIdentitySourceCommandInput,
    DeleteIdentitySourceCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "DeleteIdentitySource", {})
  .n("MPAClient", "DeleteIdentitySourceCommand")
  .sc(DeleteIdentitySource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdentitySourceRequest;
      output: {};
    };
    sdk: {
      input: DeleteIdentitySourceCommandInput;
      output: DeleteIdentitySourceCommandOutput;
    };
  };
}
