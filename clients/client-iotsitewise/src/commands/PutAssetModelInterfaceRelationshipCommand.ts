// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutAssetModelInterfaceRelationshipRequest,
  PutAssetModelInterfaceRelationshipResponse,
} from "../models/models_1";
import { PutAssetModelInterfaceRelationship$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAssetModelInterfaceRelationshipCommand}.
 */
export interface PutAssetModelInterfaceRelationshipCommandInput extends PutAssetModelInterfaceRelationshipRequest {}
/**
 * @public
 *
 * The output of {@link PutAssetModelInterfaceRelationshipCommand}.
 */
export interface PutAssetModelInterfaceRelationshipCommandOutput extends PutAssetModelInterfaceRelationshipResponse, __MetadataBearer {}

/**
 * Creates or updates an interface relationship between an asset model and an interface asset model. This operation applies an interface to an asset model.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, PutAssetModelInterfaceRelationshipCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, PutAssetModelInterfaceRelationshipCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // PutAssetModelInterfaceRelationshipRequest
 *   assetModelId: "STRING_VALUE", // required
 *   interfaceAssetModelId: "STRING_VALUE", // required
 *   propertyMappingConfiguration: { // PropertyMappingConfiguration
 *     matchByPropertyName: true || false,
 *     createMissingProperty: true || false,
 *     overrides: [ // PropertyMappings
 *       { // PropertyMapping
 *         assetModelPropertyId: "STRING_VALUE", // required
 *         interfaceAssetModelPropertyId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutAssetModelInterfaceRelationshipCommand(input);
 * const response = await client.send(command);
 * // { // PutAssetModelInterfaceRelationshipResponse
 * //   assetModelId: "STRING_VALUE", // required
 * //   interfaceAssetModelId: "STRING_VALUE", // required
 * //   assetModelArn: "STRING_VALUE", // required
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
 * // };
 *
 * ```
 *
 * @param PutAssetModelInterfaceRelationshipCommandInput - {@link PutAssetModelInterfaceRelationshipCommandInput}
 * @returns {@link PutAssetModelInterfaceRelationshipCommandOutput}
 * @see {@link PutAssetModelInterfaceRelationshipCommandInput} for command's `input` shape.
 * @see {@link PutAssetModelInterfaceRelationshipCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * You've reached the quota for a resource. For example, this can occur if you're trying to associate more than the allowed number of child assets or attempting to create more than the allowed number of properties for an asset model.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
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
export class PutAssetModelInterfaceRelationshipCommand extends command<PutAssetModelInterfaceRelationshipCommandInput, PutAssetModelInterfaceRelationshipCommandOutput>(
  _ep0,
  _mw0,
  "PutAssetModelInterfaceRelationship",
  PutAssetModelInterfaceRelationship$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAssetModelInterfaceRelationshipRequest;
      output: PutAssetModelInterfaceRelationshipResponse;
    };
    sdk: {
      input: PutAssetModelInterfaceRelationshipCommandInput;
      output: PutAssetModelInterfaceRelationshipCommandOutput;
    };
  };
}
