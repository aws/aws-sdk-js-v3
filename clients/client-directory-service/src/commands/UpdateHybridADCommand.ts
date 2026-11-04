// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateHybridADRequest, UpdateHybridADResult } from "../models/models_0";
import { UpdateHybridAD$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateHybridADCommand}.
 */
export interface UpdateHybridADCommandInput extends UpdateHybridADRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHybridADCommand}.
 */
export interface UpdateHybridADCommandOutput extends UpdateHybridADResult, __MetadataBearer {}

/**
 * Updates the configuration of an existing hybrid directory. You can recover hybrid directory administrator account or modify self-managed instance settings.
 *
 * Updates are applied asynchronously. Use DescribeHybridADUpdate to monitor the progress of configuration changes.
 *
 * The `InstanceIds` must have a one-to-one correspondence with `CustomerDnsIps`, meaning that if the IP address for instance i-10243410 is 10.24.34.100 and the IP address for instance i-10243420 is 10.24.34.200, then the input arrays must maintain the same order relationship, either [10.24.34.100, 10.24.34.200] paired with [i-10243410, i-10243420] or [10.24.34.200, 10.24.34.100] paired with [i-10243420, i-10243410].
 *
 * > **Note:** You must provide at least one update to UpdateHybridADRequest$HybridAdministratorAccountUpdate or UpdateHybridADRequest$SelfManagedInstancesSettings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateHybridADCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateHybridADCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateHybridADRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   HybridAdministratorAccountUpdate: { // HybridAdministratorAccountUpdate
 *     SecretArn: "STRING_VALUE", // required
 *   },
 *   SelfManagedInstancesSettings: { // HybridCustomerInstancesSettings
 *     CustomerDnsIps: [ // CustomerDnsIps // required
 *       "STRING_VALUE",
 *     ],
 *     InstanceIds: [ // AssessmentInstanceIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateHybridADCommand(input);
 * const response = await client.send(command);
 * // { // UpdateHybridADResult
 * //   DirectoryId: "STRING_VALUE",
 * //   AssessmentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateHybridADCommandInput - {@link UpdateHybridADCommandInput}
 * @returns {@link UpdateHybridADCommandOutput}
 * @see {@link UpdateHybridADCommandInput} for command's `input` shape.
 * @see {@link UpdateHybridADCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ADAssessmentLimitExceededException} (client fault)
 *
 * A directory assessment is automatically created when you create a hybrid directory. There are two types of assessments: `CUSTOMER` and `SYSTEM`. Your Amazon Web Services account has a limit of 100 `CUSTOMER` directory assessments.
 *
 * If you attempt to create a hybrid directory; and you already have 100 `CUSTOMER` directory assessments;, you will encounter an error. Delete assessments to free up capacity before trying again.
 *
 * You can request an increase to your `CUSTOMER` directory assessment quota by contacting customer support or delete existing CUSTOMER directory assessments; to free up capacity.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class UpdateHybridADCommand extends command<UpdateHybridADCommandInput, UpdateHybridADCommandOutput>(
  _ep0,
  _mw0,
  "UpdateHybridAD",
  UpdateHybridAD$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHybridADRequest;
      output: UpdateHybridADResult;
    };
    sdk: {
      input: UpdateHybridADCommandInput;
      output: UpdateHybridADCommandOutput;
    };
  };
}
