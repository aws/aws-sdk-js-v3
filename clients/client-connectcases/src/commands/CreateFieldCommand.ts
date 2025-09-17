// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFieldRequest, CreateFieldResponse } from "../models/models_0";
import { de_CreateFieldCommand, se_CreateFieldCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFieldCommand}.
 */
export interface CreateFieldCommandInput extends CreateFieldRequest {}
/**
 * @public
 *
 * The output of {@link CreateFieldCommand}.
 */
export interface CreateFieldCommandOutput extends CreateFieldResponse, __MetadataBearer {}

/**
 * <p>Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateFieldCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateFieldCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // CreateFieldRequest
 *   domainId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateFieldCommand(input);
 * const response = await client.send(command);
 * // { // CreateFieldResponse
 * //   fieldId: "STRING_VALUE", // required
 * //   fieldArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateFieldCommandInput - {@link CreateFieldCommandInput}
 * @returns {@link CreateFieldCommandOutput}
 * @see {@link CreateFieldCommandInput} for command's `input` shape.
 * @see {@link CreateFieldCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 *
 * @public
 */
export class CreateFieldCommand extends $Command
  .classBuilder<
    CreateFieldCommandInput,
    CreateFieldCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCases", "CreateField", {})
  .n("ConnectCasesClient", "CreateFieldCommand")
  .f(void 0, void 0)
  .ser(se_CreateFieldCommand)
  .de(de_CreateFieldCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFieldRequest;
      output: CreateFieldResponse;
    };
    sdk: {
      input: CreateFieldCommandInput;
      output: CreateFieldCommandOutput;
    };
  };
}
