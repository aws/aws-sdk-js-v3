// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BulkPublishRequest, BulkPublishResponse } from "../models/models_0";
import { de_BulkPublishCommand, se_BulkPublishCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BulkPublishCommand}.
 */
export interface BulkPublishCommandInput extends BulkPublishRequest {}
/**
 * @public
 *
 * The output of {@link BulkPublishCommand}.
 */
export interface BulkPublishCommandOutput extends BulkPublishResponse, __MetadataBearer {}

/**
 * <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, BulkPublishCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, BulkPublishCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const input = { // BulkPublishRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 * };
 * const command = new BulkPublishCommand(input);
 * const response = await client.send(command);
 * // { // BulkPublishResponse
 * //   IdentityPoolId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BulkPublishCommandInput - {@link BulkPublishCommandInput}
 * @returns {@link BulkPublishCommandOutput}
 * @see {@link BulkPublishCommandInput} for command's `input` shape.
 * @see {@link BulkPublishCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 * @throws {@link AlreadyStreamedException} (client fault)
 *  An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully.
 *
 * @throws {@link DuplicateRequestException} (client fault)
 *  An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool.
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
 * @public
 */
export class BulkPublishCommand extends $Command
  .classBuilder<
    BulkPublishCommandInput,
    BulkPublishCommandOutput,
    CognitoSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CognitoSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoSyncService", "BulkPublish", {})
  .n("CognitoSyncClient", "BulkPublishCommand")
  .f(void 0, void 0)
  .ser(se_BulkPublishCommand)
  .de(de_BulkPublishCommand)
  .build() {}
