// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDatasetRequest, DeleteDatasetResponse } from "../models/models_0";
import { de_DeleteDatasetCommand, se_DeleteDatasetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDatasetCommand}.
 */
export interface DeleteDatasetCommandInput extends DeleteDatasetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatasetCommand}.
 */
export interface DeleteDatasetCommandOutput extends DeleteDatasetResponse, __MetadataBearer {}

/**
 * <p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't
 *          be undone. Datasets that this dataset was merged with will no longer report the merge. Any
 *          subsequent operation on this dataset will result in a
 *             ResourceNotFoundException.</p>
 *           <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, DeleteDatasetCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, DeleteDatasetCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const input = { // DeleteDatasetRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE", // required
 *   DatasetName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDatasetResponse
 * //   Dataset: { // Dataset
 * //     IdentityId: "STRING_VALUE",
 * //     DatasetName: "STRING_VALUE",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     LastModifiedBy: "STRING_VALUE",
 * //     DataStorage: Number("long"),
 * //     NumRecords: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDatasetCommandInput - {@link DeleteDatasetCommandInput}
 * @returns {@link DeleteDatasetCommandOutput}
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  Thrown if an update can't be applied because
 *       the resource was changed by another call and this would result in a conflict.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Thrown if the resource doesn't
 *       exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Thrown if the request is
 *       throttled.
 *
 * @throws {@link CognitoSyncServiceException}
 * <p>Base exception class for all service exceptions from CognitoSync service.</p>
 *
 * @public
 */
export class DeleteDatasetCommand extends $Command
  .classBuilder<
    DeleteDatasetCommandInput,
    DeleteDatasetCommandOutput,
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
  .s("AWSCognitoSyncService", "DeleteDataset", {})
  .n("CognitoSyncClient", "DeleteDatasetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDatasetCommand)
  .de(de_DeleteDatasetCommand)
  .build() {}
