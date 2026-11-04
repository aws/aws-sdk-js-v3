// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDirectoryLimitsRequest, GetDirectoryLimitsResult } from "../models/models_0";
import { GetDirectoryLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Obtains directory limit information for the current Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, GetDirectoryLimitsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, GetDirectoryLimitsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
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
 *
 * A client exception has occurred.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @example To get directory limits
 * ```javascript
 * // The following example obtains directory limit information for the current region.
 * const input = { /* empty *\/ };
 * const command = new GetDirectoryLimitsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DirectoryLimits: {
 *     CloudOnlyDirectoriesCurrentCount: 2,
 *     CloudOnlyDirectoriesLimit: 10,
 *     CloudOnlyDirectoriesLimitReached: false,
 *     CloudOnlyMicrosoftADCurrentCount: 2,
 *     CloudOnlyMicrosoftADLimit: 10,
 *     CloudOnlyMicrosoftADLimitReached: false,
 *     ConnectedDirectoriesCurrentCount: 1,
 *     ConnectedDirectoriesLimit: 10,
 *     ConnectedDirectoriesLimitReached: false
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDirectoryLimitsCommand extends command<GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput>(
  _ep0,
  _mw0,
  "GetDirectoryLimits",
  GetDirectoryLimits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDirectoryLimitsResult;
    };
    sdk: {
      input: GetDirectoryLimitsCommandInput;
      output: GetDirectoryLimitsCommandOutput;
    };
  };
}
