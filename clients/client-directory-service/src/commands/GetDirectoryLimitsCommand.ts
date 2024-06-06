// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDirectoryLimitsRequest, GetDirectoryLimitsResult } from "../models/models_0";
import { de_GetDirectoryLimitsCommand, se_GetDirectoryLimitsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDirectoryLimitsCommand}.
 */
export interface GetDirectoryLimitsCommandInput extends GetDirectoryLimitsRequest {}
/**
 * @public
 *
 * The output of {@link GetDirectoryLimitsCommand}.
 */
export interface GetDirectoryLimitsCommandOutput extends GetDirectoryLimitsResult, __MetadataBearer {}

/**
 * <p>Obtains directory limit information for the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, GetDirectoryLimitsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, GetDirectoryLimitsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = {};
 * const command = new GetDirectoryLimitsCommand(input);
 * const response = await client.send(command);
 * // { // GetDirectoryLimitsResult
 * //   DirectoryLimits: { // DirectoryLimits
 * //     CloudOnlyDirectoriesLimit: Number("int"),
 * //     CloudOnlyDirectoriesCurrentCount: Number("int"),
 * //     CloudOnlyDirectoriesLimitReached: true || false,
 * //     CloudOnlyMicrosoftADLimit: Number("int"),
 * //     CloudOnlyMicrosoftADCurrentCount: Number("int"),
 * //     CloudOnlyMicrosoftADLimitReached: true || false,
 * //     ConnectedDirectoriesLimit: Number("int"),
 * //     ConnectedDirectoriesCurrentCount: Number("int"),
 * //     ConnectedDirectoriesLimitReached: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDirectoryLimitsCommandInput - {@link GetDirectoryLimitsCommandInput}
 * @returns {@link GetDirectoryLimitsCommandOutput}
 * @see {@link GetDirectoryLimitsCommandInput} for command's `input` shape.
 * @see {@link GetDirectoryLimitsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetDirectoryLimitsCommand extends $Command
  .classBuilder<
    GetDirectoryLimitsCommandInput,
    GetDirectoryLimitsCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "GetDirectoryLimits", {})
  .n("DirectoryServiceClient", "GetDirectoryLimitsCommand")
  .f(void 0, void 0)
  .ser(se_GetDirectoryLimitsCommand)
  .de(de_GetDirectoryLimitsCommand)
  .build() {}
