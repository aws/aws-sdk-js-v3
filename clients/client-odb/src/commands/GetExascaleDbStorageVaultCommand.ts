// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetExascaleDbStorageVaultInput, GetExascaleDbStorageVaultOutput } from "../models/models_0";
import { GetExascaleDbStorageVault$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetExascaleDbStorageVaultCommand}.
 */
export interface GetExascaleDbStorageVaultCommandInput extends GetExascaleDbStorageVaultInput {}
/**
 * @public
 *
 * The output of {@link GetExascaleDbStorageVaultCommand}.
 */
export interface GetExascaleDbStorageVaultCommandOutput extends GetExascaleDbStorageVaultOutput, __MetadataBearer {}

/**
 * <p>Returns information about the specified Exascale storage vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetExascaleDbStorageVaultCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetExascaleDbStorageVaultCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // GetExascaleDbStorageVaultInput
 *   exascaleDbStorageVaultId: "STRING_VALUE", // required
 * };
 * const command = new GetExascaleDbStorageVaultCommand(input);
 * const response = await client.send(command);
 * // { // GetExascaleDbStorageVaultOutput
 * //   exascaleDbStorageVault: { // ExascaleDbStorageVault
 * //     exascaleDbStorageVaultId: "STRING_VALUE", // required
 * //     additionalFlashCacheInPercent: Number("int"),
 * //     attachedShapeAttributes: [ // ShapeAttributeList
 * //       "SMART_STORAGE" || "BLOCK_STORAGE",
 * //     ],
 * //     autoscaleLimitInGBs: Number("int"),
 * //     availabilityZone: "STRING_VALUE",
 * //     availabilityZoneId: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     description: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     vmClusterArns: [ // ResourceArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     vmClusterCount: Number("int"),
 * //     vmClusterIds: [ // ResourceIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     exascaleDbStorageVaultArn: "STRING_VALUE",
 * //     highCapacityDatabaseStorage: { // ExascaleDbStorageDetails
 * //       availableSizeInGBs: Number("int"),
 * //       totalSizeInGBs: Number("int"),
 * //     },
 * //     isAutoscaleEnabled: true || false,
 * //     ocid: "STRING_VALUE",
 * //     ociResourceAnchorName: "STRING_VALUE",
 * //     ociUrl: "STRING_VALUE",
 * //     percentProgress: Number("float"),
 * //     status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //     statusReason: "STRING_VALUE",
 * //     timeZone: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExascaleDbStorageVaultCommandInput - {@link GetExascaleDbStorageVaultCommandInput}
 * @returns {@link GetExascaleDbStorageVaultCommandOutput}
 * @see {@link GetExascaleDbStorageVaultCommandInput} for command's `input` shape.
 * @see {@link GetExascaleDbStorageVaultCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class GetExascaleDbStorageVaultCommand extends command<GetExascaleDbStorageVaultCommandInput, GetExascaleDbStorageVaultCommandOutput>(
  _ep0,
  _mw0,
  "GetExascaleDbStorageVault",
  GetExascaleDbStorageVault$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExascaleDbStorageVaultInput;
      output: GetExascaleDbStorageVaultOutput;
    };
    sdk: {
      input: GetExascaleDbStorageVaultCommandInput;
      output: GetExascaleDbStorageVaultCommandOutput;
    };
  };
}
