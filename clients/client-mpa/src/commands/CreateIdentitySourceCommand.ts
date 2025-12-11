// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateIdentitySourceRequest, CreateIdentitySourceResponse } from "../models/models_0";
import type { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { CreateIdentitySource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIdentitySourceCommand}.
 */
export interface CreateIdentitySourceCommandInput extends CreateIdentitySourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateIdentitySourceCommand}.
 */
export interface CreateIdentitySourceCommandOutput extends CreateIdentitySourceResponse, __MetadataBearer {}

/**
 * <p>Creates a new identity source. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html">Identity Source</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, CreateIdentitySourceCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, CreateIdentitySourceCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // CreateIdentitySourceRequest
 *   IdentitySourceParameters: { // IdentitySourceParameters
 *     IamIdentityCenter: { // IamIdentityCenter
 *       InstanceArn: "STRING_VALUE", // required
 *       Region: "STRING_VALUE", // required
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIdentitySourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdentitySourceResponse
 * //   IdentitySourceType: "IAM_IDENTITY_CENTER",
 * //   IdentitySourceArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateIdentitySourceCommandInput - {@link CreateIdentitySourceCommandInput}
 * @returns {@link CreateIdentitySourceCommandOutput}
 * @see {@link CreateIdentitySourceCommandInput} for command's `input` shape.
 * @see {@link CreateIdentitySourceCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Check your permissions, and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds the service quota for your account. Request a quota increase or reduce your request size.</p>
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
export class CreateIdentitySourceCommand extends $Command
  .classBuilder<
    CreateIdentitySourceCommandInput,
    CreateIdentitySourceCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "CreateIdentitySource", {})
  .n("MPAClient", "CreateIdentitySourceCommand")
  .sc(CreateIdentitySource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIdentitySourceRequest;
      output: CreateIdentitySourceResponse;
    };
    sdk: {
      input: CreateIdentitySourceCommandInput;
      output: CreateIdentitySourceCommandOutput;
    };
  };
}
