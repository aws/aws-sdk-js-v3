// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportLensInput, ImportLensOutput } from "../models/models_0";
import { ImportLens$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportLensCommand}.
 */
export interface ImportLensCommandInput extends ImportLensInput {}
/**
 * @public
 *
 * The output of {@link ImportLensCommand}.
 */
export interface ImportLensCommandOutput extends ImportLensOutput, __MetadataBearer {}

/**
 * Import a new custom lens or update an existing custom lens.
 *
 * To update an existing custom lens, specify its ARN as the `LensAlias`. If no ARN is specified, a new custom lens is created.
 *
 * The new or updated lens will have a status of `DRAFT`. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with CreateLensVersion.
 *
 * Lenses are defined in JSON. For more information, see [JSON format specification](https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html) in the *Well-Architected Tool User Guide*.
 *
 * A custom lens cannot exceed 500 KB in size.
 *
 * > **Note:**
 * >
 * > **Disclaimer**
 * >
 * > Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ImportLensCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ImportLensCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ImportLensInput
 *   LensAlias: "STRING_VALUE",
 *   JSONString: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ImportLensCommand(input);
 * const response = await client.send(command);
 * // { // ImportLensOutput
 * //   LensArn: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "COMPLETE" || "ERROR",
 * // };
 *
 * ```
 *
 * @param ImportLensCommandInput - {@link ImportLensCommandInput}
 * @returns {@link ImportLensCommandOutput}
 * @see {@link ImportLensCommandInput} for command's `input` shape.
 * @see {@link ImportLensCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The user has reached their resource quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class ImportLensCommand extends command<ImportLensCommandInput, ImportLensCommandOutput>(
  _ep0,
  _mw0,
  "ImportLens",
  ImportLens$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportLensInput;
      output: ImportLensOutput;
    };
    sdk: {
      input: ImportLensCommandInput;
      output: ImportLensCommandOutput;
    };
  };
}
