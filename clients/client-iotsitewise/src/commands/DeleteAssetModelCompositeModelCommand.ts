// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAssetModelCompositeModelRequest, DeleteAssetModelCompositeModelResponse } from "../models/models_0";
import { DeleteAssetModelCompositeModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAssetModelCompositeModelCommand}.
 */
export interface DeleteAssetModelCompositeModelCommandInput extends DeleteAssetModelCompositeModelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssetModelCompositeModelCommand}.
 */
export interface DeleteAssetModelCompositeModelCommandOutput extends DeleteAssetModelCompositeModelResponse, __MetadataBearer {}

/**
 * Deletes a composite model. This action can't be undone. You must delete all assets created from a composite model before you can delete the model. Also, you can't delete a composite model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see [Deleting assets and models](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html) in the *IoT SiteWise User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeleteAssetModelCompositeModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteAssetModelCompositeModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DeleteAssetModelCompositeModelRequest
 *   assetModelId: "STRING_VALUE", // required
 *   assetModelCompositeModelId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   ifMatch: "STRING_VALUE",
 *   ifNoneMatch: "STRING_VALUE",
 *   matchForVersionType: "LATEST" || "ACTIVE",
 * };
 * const command = new DeleteAssetModelCompositeModelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAssetModelCompositeModelResponse
 * //   assetModelStatus: { // AssetModelStatus
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "PROPAGATING" || "DELETING" || "FAILED", // required
 * //     error: { // ErrorDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //       details: [ // DetailedErrors
 * //         { // DetailedError
 * //           code: "INCOMPATIBLE_COMPUTE_LOCATION" || "INCOMPATIBLE_FORWARDING_CONFIGURATION", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   assetModelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAssetModelCompositeModelCommandInput - {@link DeleteAssetModelCompositeModelCommandInput}
 * @returns {@link DeleteAssetModelCompositeModelCommandOutput}
 * @see {@link DeleteAssetModelCompositeModelCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetModelCompositeModelCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * The precondition in one or more of the request-header fields evaluated to `FALSE`.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class DeleteAssetModelCompositeModelCommand extends command<DeleteAssetModelCompositeModelCommandInput, DeleteAssetModelCompositeModelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAssetModelCompositeModel",
  DeleteAssetModelCompositeModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssetModelCompositeModelRequest;
      output: DeleteAssetModelCompositeModelResponse;
    };
    sdk: {
      input: DeleteAssetModelCompositeModelCommandInput;
      output: DeleteAssetModelCompositeModelCommandOutput;
    };
  };
}
