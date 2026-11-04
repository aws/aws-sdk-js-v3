// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetModelManifestRequest, GetModelManifestResponse } from "../models/models_0";
import { GetModelManifest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetModelManifestCommand}.
 */
export interface GetModelManifestCommandInput extends GetModelManifestRequest {}
/**
 * @public
 *
 * The output of {@link GetModelManifestCommand}.
 */
export interface GetModelManifestCommandOutput extends GetModelManifestResponse, __MetadataBearer {}

/**
 * Retrieves information about a vehicle model (model manifest).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetModelManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetModelManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetModelManifestRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetModelManifestCommand(input);
 * const response = await client.send(command);
 * // { // GetModelManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   signalCatalogArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DRAFT" || "INVALID" || "VALIDATING",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModificationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetModelManifestCommandInput - {@link GetModelManifestCommandInput}
 * @returns {@link GetModelManifestCommandOutput}
 * @see {@link GetModelManifestCommandInput} for command's `input` shape.
 * @see {@link GetModelManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class GetModelManifestCommand extends command<GetModelManifestCommandInput, GetModelManifestCommandOutput>(
  _ep0,
  _mw0,
  "GetModelManifest",
  GetModelManifest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetModelManifestRequest;
      output: GetModelManifestResponse;
    };
    sdk: {
      input: GetModelManifestCommandInput;
      output: GetModelManifestCommandOutput;
    };
  };
}
