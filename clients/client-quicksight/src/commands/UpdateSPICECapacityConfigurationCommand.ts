// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateSPICECapacityConfigurationRequest,
  UpdateSPICECapacityConfigurationResponse,
} from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateSPICECapacityConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface UpdateSPICECapacityConfigurationCommandOutput
  extends UpdateSPICECapacityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the SPICE capacity configuration for a Quick Sight account.</p>
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
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateSPICECapacityConfigurationCommand extends $Command
  .classBuilder<
    UpdateSPICECapacityConfigurationCommandInput,
    UpdateSPICECapacityConfigurationCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateSPICECapacityConfiguration", {})
  .n("QuickSightClient", "UpdateSPICECapacityConfigurationCommand")
  .sc(UpdateSPICECapacityConfiguration)
  .build() {
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
