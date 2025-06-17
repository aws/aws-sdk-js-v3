// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetIdentitySourceRequest, GetIdentitySourceResponse } from "../models/models_0";
import { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { de_GetIdentitySourceCommand, se_GetIdentitySourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdentitySourceCommand}.
 */
export interface GetIdentitySourceCommandInput extends GetIdentitySourceRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentitySourceCommand}.
 */
export interface GetIdentitySourceCommandOutput extends GetIdentitySourceResponse, __MetadataBearer {}

/**
 * <p>Returns details for an identity source. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html">Identity Source</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, GetIdentitySourceCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, GetIdentitySourceCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * const client = new MPAClient(config);
 * const input = { // GetIdentitySourceRequest
 *   IdentitySourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetIdentitySourceCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentitySourceResponse
 * //   IdentitySourceType: "IAM_IDENTITY_CENTER",
 * //   IdentitySourceParameters: { // IdentitySourceParametersForGet Union: only one key present
 * //     IamIdentityCenter: { // IamIdentityCenterForGet
 * //       InstanceArn: "STRING_VALUE",
 * //       ApprovalPortalUrl: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //   },
 * //   IdentitySourceArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Status: "CREATING" || "ACTIVE" || "DELETING" || "ERROR",
 * //   StatusCode: "ACCESS_DENIED" || "DELETION_FAILED" || "IDC_INSTANCE_NOT_FOUND" || "IDC_INSTANCE_NOT_VALID",
 * //   StatusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIdentitySourceCommandInput - {@link GetIdentitySourceCommandInput}
 * @returns {@link GetIdentitySourceCommandOutput}
 * @see {@link GetIdentitySourceCommandInput} for command's `input` shape.
 * @see {@link GetIdentitySourceCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Check your permissions, and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check the resource ID, and try again.</p>
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
export class GetIdentitySourceCommand extends $Command
  .classBuilder<
    GetIdentitySourceCommandInput,
    GetIdentitySourceCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFluffyCoreService", "GetIdentitySource", {})
  .n("MPAClient", "GetIdentitySourceCommand")
  .f(void 0, void 0)
  .ser(se_GetIdentitySourceCommand)
  .de(de_GetIdentitySourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdentitySourceRequest;
      output: GetIdentitySourceResponse;
    };
    sdk: {
      input: GetIdentitySourceCommandInput;
      output: GetIdentitySourceCommandOutput;
    };
  };
}
