// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportLensInput, ExportLensOutput } from "../models/models_0";
import { ExportLens$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExportLensCommand}.
 */
export interface ExportLensCommandInput extends ExportLensInput {}
/**
 * @public
 *
 * The output of {@link ExportLensCommand}.
 */
export interface ExportLensCommandOutput extends ExportLensOutput, __MetadataBearer {}

/**
 * Export an existing lens.
 *
 * Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.
 *
 * Lenses are defined in JSON. For more information, see [JSON format specification](https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html) in the *Well-Architected Tool User Guide*.
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
 * import { WellArchitectedClient, ExportLensCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ExportLensCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ExportLensInput
 *   LensAlias: "STRING_VALUE", // required
 *   LensVersion: "STRING_VALUE",
 * };
 * const command = new ExportLensCommand(input);
 * const response = await client.send(command);
 * // { // ExportLensOutput
 * //   LensJSON: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportLensCommandInput - {@link ExportLensCommandInput}
 * @returns {@link ExportLensCommandOutput}
 * @see {@link ExportLensCommandInput} for command's `input` shape.
 * @see {@link ExportLensCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
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
export class ExportLensCommand extends command<ExportLensCommandInput, ExportLensCommandOutput>(
  _ep0,
  _mw0,
  "ExportLens",
  ExportLens$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportLensInput;
      output: ExportLensOutput;
    };
    sdk: {
      input: ExportLensCommandInput;
      output: ExportLensCommandOutput;
    };
  };
}
