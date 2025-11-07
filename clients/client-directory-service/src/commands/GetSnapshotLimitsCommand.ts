// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSnapshotLimitsRequest, GetSnapshotLimitsResult } from "../models/models_0";
import { GetSnapshotLimits } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSnapshotLimitsCommand}.
 */
export interface GetSnapshotLimitsCommandInput extends GetSnapshotLimitsRequest {}
/**
 * @public
 *
 * The output of {@link GetSnapshotLimitsCommand}.
 */
export interface GetSnapshotLimitsCommandOutput extends GetSnapshotLimitsResult, __MetadataBearer {}

/**
 * <p>Obtains the manual snapshot limits for a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, GetSnapshotLimitsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, GetSnapshotLimitsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // GetSnapshotLimitsRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new GetSnapshotLimitsCommand(input);
 * const response = await client.send(command);
 * // { // GetSnapshotLimitsResult
 * //   SnapshotLimits: { // SnapshotLimits
 * //     ManualSnapshotsLimit: Number("int"),
 * //     ManualSnapshotsCurrentCount: Number("int"),
 * //     ManualSnapshotsLimitReached: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSnapshotLimitsCommandInput - {@link GetSnapshotLimitsCommandInput}
 * @returns {@link GetSnapshotLimitsCommandOutput}
 * @see {@link GetSnapshotLimitsCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotLimitsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To get snapshot limits
 * ```javascript
 * // The following example obtains the manual snapshot limits for a specified directory.
 * const input = {
 *   DirectoryId: "d-92654abfed"
 * };
 * const command = new GetSnapshotLimitsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SnapshotLimits: {
 *     ManualSnapshotsCurrentCount: 1,
 *     ManualSnapshotsLimit: 5,
 *     ManualSnapshotsLimitReached: false
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSnapshotLimitsCommand extends $Command
  .classBuilder<
    GetSnapshotLimitsCommandInput,
    GetSnapshotLimitsCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "GetSnapshotLimits", {})
  .n("DirectoryServiceClient", "GetSnapshotLimitsCommand")
  .sc(GetSnapshotLimits)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSnapshotLimitsRequest;
      output: GetSnapshotLimitsResult;
    };
    sdk: {
      input: GetSnapshotLimitsCommandInput;
      output: GetSnapshotLimitsCommandOutput;
    };
  };
}
