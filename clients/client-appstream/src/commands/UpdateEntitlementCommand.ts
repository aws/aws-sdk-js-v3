// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEntitlementRequest, UpdateEntitlementResult } from "../models/models_0";
import { UpdateEntitlement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEntitlementCommand}.
 */
export interface UpdateEntitlementCommandInput extends UpdateEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEntitlementCommand}.
 */
export interface UpdateEntitlementCommandOutput extends UpdateEntitlementResult, __MetadataBearer {}

/**
 * Updates the specified entitlement.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateEntitlementCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateEntitlementCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // UpdateEntitlementRequest
 *   Name: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AppVisibility: "ALL" || "ASSOCIATED",
 *   Attributes: [ // EntitlementAttributeList
 *     { // EntitlementAttribute
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateEntitlementCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEntitlementResult
 * //   Entitlement: { // Entitlement
 * //     Name: "STRING_VALUE", // required
 * //     StackName: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     AppVisibility: "ALL" || "ASSOCIATED", // required
 * //     Attributes: [ // EntitlementAttributeList // required
 * //       { // EntitlementAttribute
 * //         Name: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEntitlementCommandInput - {@link UpdateEntitlementCommandInput}
 * @returns {@link UpdateEntitlementCommandOutput}
 * @see {@link UpdateEntitlementCommandInput} for command's `input` shape.
 * @see {@link UpdateEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link EntitlementNotFoundException} (client fault)
 *
 * The entitlement can't be found.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class UpdateEntitlementCommand extends command<UpdateEntitlementCommandInput, UpdateEntitlementCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEntitlement",
  UpdateEntitlement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEntitlementRequest;
      output: UpdateEntitlementResult;
    };
    sdk: {
      input: UpdateEntitlementCommandInput;
      output: UpdateEntitlementCommandOutput;
    };
  };
}
