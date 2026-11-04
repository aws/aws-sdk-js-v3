// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBrandRequest, DeleteBrandResponse } from "../models/models_3";
import { DeleteBrand$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBrandCommand}.
 */
export interface DeleteBrandCommandInput extends DeleteBrandRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBrandCommand}.
 */
export interface DeleteBrandCommandOutput extends DeleteBrandResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This API permanently deletes the specified Quick Sight brand. When you delete a brand:
 * >
 * > - The brand and all its associated branding elements are permanently removed
 * > - Any applications or dashboards using this brand will revert to default styling
 * > - This action cannot be undone through the API
 * >
 * > **Before proceeding:** Verify that the brand is no longer needed and consider the impact on any applications currently using this brand.
 *
 * Deletes an Quick Sight brand.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteBrandCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteBrandCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteBrandRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   BrandId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBrandCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBrandResponse
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBrandCommandInput - {@link DeleteBrandCommandInput}
 * @returns {@link DeleteBrandCommandOutput}
 * @see {@link DeleteBrandCommandInput} for command's `input` shape.
 * @see {@link DeleteBrandCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service exception.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.
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
export class DeleteBrandCommand extends command<DeleteBrandCommandInput, DeleteBrandCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBrand",
  DeleteBrand$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBrandRequest;
      output: DeleteBrandResponse;
    };
    sdk: {
      input: DeleteBrandCommandInput;
      output: DeleteBrandCommandOutput;
    };
  };
}
