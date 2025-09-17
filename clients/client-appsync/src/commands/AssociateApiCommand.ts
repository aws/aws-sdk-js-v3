// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateApiRequest, AssociateApiResponse } from "../models/models_0";
import { de_AssociateApiCommand, se_AssociateApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateApiCommand}.
 */
export interface AssociateApiCommandInput extends AssociateApiRequest {}
/**
 * @public
 *
 * The output of {@link AssociateApiCommand}.
 */
export interface AssociateApiCommandOutput extends AssociateApiResponse, __MetadataBearer {}

/**
 * <p>Maps an endpoint to your custom domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, AssociateApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, AssociateApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // AssociateApiRequest
 *   domainName: "STRING_VALUE", // required
 *   apiId: "STRING_VALUE", // required
 * };
 * const command = new AssociateApiCommand(input);
 * const response = await client.send(command);
 * // { // AssociateApiResponse
 * //   apiAssociation: { // ApiAssociation
 * //     domainName: "STRING_VALUE",
 * //     apiId: "STRING_VALUE",
 * //     associationStatus: "PROCESSING" || "FAILED" || "SUCCESS",
 * //     deploymentDetail: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateApiCommandInput - {@link AssociateApiCommandInput}
 * @returns {@link AssociateApiCommandOutput}
 * @see {@link AssociateApiCommandInput} for command's `input` shape.
 * @see {@link AssociateApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class AssociateApiCommand extends $Command
  .classBuilder<
    AssociateApiCommandInput,
    AssociateApiCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "AssociateApi", {})
  .n("AppSyncClient", "AssociateApiCommand")
  .f(void 0, void 0)
  .ser(se_AssociateApiCommand)
  .de(de_AssociateApiCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateApiRequest;
      output: AssociateApiResponse;
    };
    sdk: {
      input: AssociateApiCommandInput;
      output: AssociateApiCommandOutput;
    };
  };
}
