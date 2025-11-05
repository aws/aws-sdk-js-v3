// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProjectMembershipInput, CreateProjectMembershipOutput } from "../models/models_1";
import { de_CreateProjectMembershipCommand, se_CreateProjectMembershipCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProjectMembershipCommand}.
 */
export interface CreateProjectMembershipCommandInput extends CreateProjectMembershipInput {}
/**
 * @public
 *
 * The output of {@link CreateProjectMembershipCommand}.
 */
export interface CreateProjectMembershipCommandOutput extends CreateProjectMembershipOutput, __MetadataBearer {}

/**
 * <p>Creates a project membership in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateProjectMembershipCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateProjectMembershipCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateProjectMembershipInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   projectIdentifier: "STRING_VALUE", // required
 *   member: { // Member Union: only one key present
 *     userIdentifier: "STRING_VALUE",
 *     groupIdentifier: "STRING_VALUE",
 *   },
 *   designation: "PROJECT_OWNER" || "PROJECT_CONTRIBUTOR" || "PROJECT_CATALOG_VIEWER" || "PROJECT_CATALOG_CONSUMER" || "PROJECT_CATALOG_STEWARD", // required
 * };
 * const command = new CreateProjectMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateProjectMembershipCommandInput - {@link CreateProjectMembershipCommandInput}
 * @returns {@link CreateProjectMembershipCommandOutput}
 * @see {@link CreateProjectMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateProjectMembershipCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class CreateProjectMembershipCommand extends $Command
  .classBuilder<
    CreateProjectMembershipCommandInput,
    CreateProjectMembershipCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "CreateProjectMembership", {})
  .n("DataZoneClient", "CreateProjectMembershipCommand")
  .f(void 0, void 0)
  .ser(se_CreateProjectMembershipCommand)
  .de(de_CreateProjectMembershipCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProjectMembershipInput;
      output: {};
    };
    sdk: {
      input: CreateProjectMembershipCommandInput;
      output: CreateProjectMembershipCommandOutput;
    };
  };
}
