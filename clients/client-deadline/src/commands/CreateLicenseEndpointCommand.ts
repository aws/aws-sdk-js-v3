// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLicenseEndpointRequest, CreateLicenseEndpointResponse } from "../models/models_0";
import { de_CreateLicenseEndpointCommand, se_CreateLicenseEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLicenseEndpointCommand}.
 */
export interface CreateLicenseEndpointCommandInput extends CreateLicenseEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateLicenseEndpointCommand}.
 */
export interface CreateLicenseEndpointCommandOutput extends CreateLicenseEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates a license endpoint to integrate your various licensed software used for rendering on Deadline Cloud.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateLicenseEndpointCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateLicenseEndpointCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // CreateLicenseEndpointRequest
 *   clientToken: "STRING_VALUE",
 *   vpcId: "STRING_VALUE", // required
 *   subnetIds: [ // SubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   securityGroupIds: [ // SecurityGroupIdList // required
 *     "STRING_VALUE",
 *   ],
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLicenseEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateLicenseEndpointResponse
 * //   licenseEndpointId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateLicenseEndpointCommandInput - {@link CreateLicenseEndpointCommandInput}
 * @returns {@link CreateLicenseEndpointCommandOutput}
 * @see {@link CreateLicenseEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseEndpointCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the maximum number of service resources or operations for your Amazon Web Services account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class CreateLicenseEndpointCommand extends $Command
  .classBuilder<
    CreateLicenseEndpointCommandInput,
    CreateLicenseEndpointCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "CreateLicenseEndpoint", {})
  .n("DeadlineClient", "CreateLicenseEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateLicenseEndpointCommand)
  .de(de_CreateLicenseEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLicenseEndpointRequest;
      output: CreateLicenseEndpointResponse;
    };
    sdk: {
      input: CreateLicenseEndpointCommandInput;
      output: CreateLicenseEndpointCommandOutput;
    };
  };
}
