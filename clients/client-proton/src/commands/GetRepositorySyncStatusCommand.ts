// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRepositorySyncStatusInput, GetRepositorySyncStatusOutput } from "../models/models_0";
import { de_GetRepositorySyncStatusCommand, se_GetRepositorySyncStatusCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRepositorySyncStatusCommand}.
 */
export interface GetRepositorySyncStatusCommandInput extends GetRepositorySyncStatusInput {}
/**
 * @public
 *
 * The output of {@link GetRepositorySyncStatusCommand}.
 */
export interface GetRepositorySyncStatusCommandOutput extends GetRepositorySyncStatusOutput, __MetadataBearer {}

/**
 * <p>Get the sync status of a repository used for Proton template sync. For more information about template sync, see .</p>
 *          <note>
 *             <p>A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource
 *         have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control
 *         (ABAC).</p>
 *             <p>For more information about ABAC, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags">ABAC</a> in the <i>Proton User
 *           Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetRepositorySyncStatusCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetRepositorySyncStatusCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // GetRepositorySyncStatusInput
 *   repositoryName: "STRING_VALUE", // required
 *   repositoryProvider: "STRING_VALUE", // required
 *   branch: "STRING_VALUE", // required
 *   syncType: "STRING_VALUE", // required
 * };
 * const command = new GetRepositorySyncStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositorySyncStatusOutput
 * //   latestSync: { // RepositorySyncAttempt
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     events: [ // RepositorySyncEvents // required
 * //       { // RepositorySyncEvent
 * //         type: "STRING_VALUE", // required
 * //         externalId: "STRING_VALUE",
 * //         time: new Date("TIMESTAMP"), // required
 * //         event: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRepositorySyncStatusCommandInput - {@link GetRepositorySyncStatusCommandInput}
 * @returns {@link GetRepositorySyncStatusCommandOutput}
 * @see {@link GetRepositorySyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetRepositorySyncStatusCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 * @public
 */
export class GetRepositorySyncStatusCommand extends $Command
  .classBuilder<
    GetRepositorySyncStatusCommandInput,
    GetRepositorySyncStatusCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "GetRepositorySyncStatus", {})
  .n("ProtonClient", "GetRepositorySyncStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetRepositorySyncStatusCommand)
  .de(de_GetRepositorySyncStatusCommand)
  .build() {}
