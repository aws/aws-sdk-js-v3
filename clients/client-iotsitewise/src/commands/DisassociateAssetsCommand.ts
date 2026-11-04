// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateAssetsRequest } from "../models/models_1";
import { DisassociateAssets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateAssetsCommand}.
 */
export interface DisassociateAssetsCommandInput extends DisassociateAssetsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAssetsCommand}.
 */
export interface DisassociateAssetsCommandOutput extends __MetadataBearer {}

/**
 * Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DisassociateAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DisassociateAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DisassociateAssetsRequest
 *   assetId: "STRING_VALUE", // required
 *   hierarchyId: "STRING_VALUE", // required
 *   childAssetId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateAssetsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAssetsCommandInput - {@link DisassociateAssetsCommandInput}
 * @returns {@link DisassociateAssetsCommandOutput}
 * @see {@link DisassociateAssetsCommandInput} for command's `input` shape.
 * @see {@link DisassociateAssetsCommandOutput} for command's `response` shape.
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
export class DisassociateAssetsCommand extends command<DisassociateAssetsCommandInput, DisassociateAssetsCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateAssets",
  DisassociateAssets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAssetsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateAssetsCommandInput;
      output: DisassociateAssetsCommandOutput;
    };
  };
}
