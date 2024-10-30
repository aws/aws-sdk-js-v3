// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetApiAssociationRequest, GetApiAssociationResponse } from "../models/models_0";
import { de_GetApiAssociationCommand, se_GetApiAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApiAssociationCommand}.
 */
export interface GetApiAssociationCommandInput extends GetApiAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetApiAssociationCommand}.
 */
export interface GetApiAssociationCommandOutput extends GetApiAssociationResponse, __MetadataBearer {}

/**
 * <p>Retrieves an <code>ApiAssociation</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetApiAssociationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetApiAssociationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // GetApiAssociationRequest
 *   domainName: "STRING_VALUE", // required
 * };
 * const command = new GetApiAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetApiAssociationResponse
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
 * @param GetApiAssociationCommandInput - {@link GetApiAssociationCommandInput}
 * @returns {@link GetApiAssociationCommandOutput}
 * @see {@link GetApiAssociationCommandInput} for command's `input` shape.
 * @see {@link GetApiAssociationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetApiAssociationCommand extends $Command
  .classBuilder<
    GetApiAssociationCommandInput,
    GetApiAssociationCommandOutput,
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
  .s("AWSDeepdishControlPlaneService", "GetApiAssociation", {})
  .n("AppSyncClient", "GetApiAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetApiAssociationCommand)
  .de(de_GetApiAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApiAssociationRequest;
      output: GetApiAssociationResponse;
    };
    sdk: {
      input: GetApiAssociationCommandInput;
      output: GetApiAssociationCommandOutput;
    };
  };
}
