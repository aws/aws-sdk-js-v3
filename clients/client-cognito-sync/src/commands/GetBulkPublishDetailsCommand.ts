// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBulkPublishDetailsRequest, GetBulkPublishDetailsResponse } from "../models/models_0";
import { GetBulkPublishDetails } from "../schemas/schemas_3_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBulkPublishDetailsCommand}.
 */
export interface GetBulkPublishDetailsCommandInput extends GetBulkPublishDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetBulkPublishDetailsCommand}.
 */
export interface GetBulkPublishDetailsCommandOutput extends GetBulkPublishDetailsResponse, __MetadataBearer {}

/**
 * <p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, GetBulkPublishDetailsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, GetBulkPublishDetailsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * // import type { CognitoSyncClientConfig } from "@aws-sdk/client-cognito-sync";
 * const config = {}; // type is CognitoSyncClientConfig
 * const client = new CognitoSyncClient(config);
 * const input = { // GetBulkPublishDetailsRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 * };
 * const command = new GetBulkPublishDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetBulkPublishDetailsResponse
 * //   IdentityPoolId: "STRING_VALUE",
 * //   BulkPublishStartTime: new Date("TIMESTAMP"),
 * //   BulkPublishCompleteTime: new Date("TIMESTAMP"),
 * //   BulkPublishStatus: "NOT_STARTED" || "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //   FailureMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBulkPublishDetailsCommandInput - {@link GetBulkPublishDetailsCommandInput}
 * @returns {@link GetBulkPublishDetailsCommandOutput}
 * @see {@link GetBulkPublishDetailsCommandInput} for command's `input` shape.
 * @see {@link GetBulkPublishDetailsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  Indicates an internal service
 *       error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Thrown when a request parameter does not comply
 *       with the associated constraints.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  Thrown when a user is not authorized to access the
 *       requested resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Thrown if the resource doesn't
 *       exist.
 *
 * @throws {@link CognitoSyncServiceException}
 * <p>Base exception class for all service exceptions from CognitoSync service.</p>
 *
 *
 * @public
 */
export class GetBulkPublishDetailsCommand extends $Command
  .classBuilder<
    GetBulkPublishDetailsCommandInput,
    GetBulkPublishDetailsCommandOutput,
    CognitoSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoSyncService", "GetBulkPublishDetails", {})
  .n("CognitoSyncClient", "GetBulkPublishDetailsCommand")
  .sc(GetBulkPublishDetails)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBulkPublishDetailsRequest;
      output: GetBulkPublishDetailsResponse;
    };
    sdk: {
      input: GetBulkPublishDetailsCommandInput;
      output: GetBulkPublishDetailsCommandOutput;
    };
  };
}
