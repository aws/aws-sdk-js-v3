// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateSPICECapacityConfigurationRequest,
  UpdateSPICECapacityConfigurationResponse,
} from "../models/models_5";
import { UpdateSPICECapacityConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSPICECapacityConfigurationCommand}.
 */
export interface UpdateSPICECapacityConfigurationCommandInput extends UpdateSPICECapacityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSPICECapacityConfigurationCommand}.
 */
export interface UpdateSPICECapacityConfigurationCommandOutput extends UpdateSPICECapacityConfigurationResponse, __MetadataBearer {}

/**
 * Updates the SPICE capacity configuration for a Quick Sight account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateSPICECapacityConfigurationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateSPICECapacityConfigurationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateSPICECapacityConfigurationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   PurchaseMode: "MANUAL" || "AUTO_PURCHASE", // required
 * };
 * const command = new UpdateSPICECapacityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSPICECapacityConfigurationResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateSPICECapacityConfigurationCommandInput - {@link UpdateSPICECapacityConfigurationCommandInput}
 * @returns {@link UpdateSPICECapacityConfigurationCommandOutput}
 * @see {@link UpdateSPICECapacityConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSPICECapacityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
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
export class UpdateSPICECapacityConfigurationCommand extends command<UpdateSPICECapacityConfigurationCommandInput, UpdateSPICECapacityConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSPICECapacityConfiguration",
  UpdateSPICECapacityConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSPICECapacityConfigurationRequest;
      output: UpdateSPICECapacityConfigurationResponse;
    };
    sdk: {
      input: UpdateSPICECapacityConfigurationCommandInput;
      output: UpdateSPICECapacityConfigurationCommandOutput;
    };
  };
}
