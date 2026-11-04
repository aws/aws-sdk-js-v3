// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutDataSetRefreshPropertiesRequest, PutDataSetRefreshPropertiesResponse } from "../models/models_5";
import { PutDataSetRefreshProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutDataSetRefreshPropertiesCommand}.
 */
export interface PutDataSetRefreshPropertiesCommandInput extends PutDataSetRefreshPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link PutDataSetRefreshPropertiesCommand}.
 */
export interface PutDataSetRefreshPropertiesCommandOutput extends PutDataSetRefreshPropertiesResponse, __MetadataBearer {}

/**
 * Creates or updates the dataset refresh properties for the dataset.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, PutDataSetRefreshPropertiesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, PutDataSetRefreshPropertiesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // PutDataSetRefreshPropertiesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   DataSetRefreshProperties: { // DataSetRefreshProperties
 *     RefreshConfiguration: { // RefreshConfiguration
 *       IncrementalRefresh: { // IncrementalRefresh
 *         LookbackWindow: { // LookbackWindow
 *           ColumnName: "STRING_VALUE", // required
 *           Size: Number("long"), // required
 *           SizeUnit: "HOUR" || "DAY" || "WEEK", // required
 *         },
 *       },
 *     },
 *     FailureConfiguration: { // RefreshFailureConfiguration
 *       EmailAlert: { // RefreshFailureEmailAlert
 *         AlertStatus: "ENABLED" || "DISABLED",
 *       },
 *     },
 *   },
 * };
 * const command = new PutDataSetRefreshPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // PutDataSetRefreshPropertiesResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param PutDataSetRefreshPropertiesCommandInput - {@link PutDataSetRefreshPropertiesCommandInput}
 * @returns {@link PutDataSetRefreshPropertiesCommandOutput}
 * @see {@link PutDataSetRefreshPropertiesCommandInput} for command's `input` shape.
 * @see {@link PutDataSetRefreshPropertiesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class PutDataSetRefreshPropertiesCommand extends command<PutDataSetRefreshPropertiesCommandInput, PutDataSetRefreshPropertiesCommandOutput>(
  _ep0,
  _mw0,
  "PutDataSetRefreshProperties",
  PutDataSetRefreshProperties$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDataSetRefreshPropertiesRequest;
      output: PutDataSetRefreshPropertiesResponse;
    };
    sdk: {
      input: PutDataSetRefreshPropertiesCommandInput;
      output: PutDataSetRefreshPropertiesCommandOutput;
    };
  };
}
