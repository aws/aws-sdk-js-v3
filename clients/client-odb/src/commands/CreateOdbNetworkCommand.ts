// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOdbNetworkInput, CreateOdbNetworkOutput } from "../models/models_0";
import { CreateOdbNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOdbNetworkCommand}.
 */
export interface CreateOdbNetworkCommandInput extends CreateOdbNetworkInput {}
/**
 * @public
 *
 * The output of {@link CreateOdbNetworkCommand}.
 */
export interface CreateOdbNetworkCommandOutput extends CreateOdbNetworkOutput, __MetadataBearer {}

/**
 * Creates an ODB network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, CreateOdbNetworkCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, CreateOdbNetworkCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // CreateOdbNetworkInput
 *   displayName: "STRING_VALUE", // required
 *   availabilityZone: "STRING_VALUE",
 *   availabilityZoneId: "STRING_VALUE",
 *   clientSubnetCidr: "STRING_VALUE", // required
 *   backupSubnetCidr: "STRING_VALUE",
 *   customDomainName: "STRING_VALUE",
 *   defaultDnsPrefix: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   s3Access: "ENABLED" || "DISABLED",
 *   zeroEtlAccess: "ENABLED" || "DISABLED",
 *   stsAccess: "ENABLED" || "DISABLED",
 *   kmsAccess: "ENABLED" || "DISABLED",
 *   s3PolicyDocument: "STRING_VALUE",
 *   stsPolicyDocument: "STRING_VALUE",
 *   kmsPolicyDocument: "STRING_VALUE",
 *   crossRegionS3RestoreSourcesToEnable: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateOdbNetworkCommand(input);
 * const response = await client.send(command);
 * // { // CreateOdbNetworkOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   odbNetworkId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateOdbNetworkCommandInput - {@link CreateOdbNetworkCommandInput}
 * @returns {@link CreateOdbNetworkCommandOutput}
 * @see {@link CreateOdbNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateOdbNetworkCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class CreateOdbNetworkCommand extends command<CreateOdbNetworkCommandInput, CreateOdbNetworkCommandOutput>(
  _ep0,
  _mw0,
  "CreateOdbNetwork",
  CreateOdbNetwork$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOdbNetworkInput;
      output: CreateOdbNetworkOutput;
    };
    sdk: {
      input: CreateOdbNetworkCommandInput;
      output: CreateOdbNetworkCommandOutput;
    };
  };
}
