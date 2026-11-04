// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelIngestionRequest, CancelIngestionResponse } from "../models/models_2";
import { CancelIngestion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelIngestionCommand}.
 */
export interface CancelIngestionCommandInput extends CancelIngestionRequest {}
/**
 * @public
 *
 * The output of {@link CancelIngestionCommand}.
 */
export interface CancelIngestionCommandOutput extends CancelIngestionResponse, __MetadataBearer {}

/**
 * Cancels an ongoing ingestion of data into SPICE.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CancelIngestionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CancelIngestionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CancelIngestionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   IngestionId: "STRING_VALUE", // required
 * };
 * const command = new CancelIngestionCommand(input);
 * const response = await client.send(command);
 * // { // CancelIngestionResponse
 * //   Arn: "STRING_VALUE",
 * //   IngestionId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CancelIngestionCommandInput - {@link CancelIngestionCommandInput}
 * @returns {@link CancelIngestionCommandOutput}
 * @see {@link CancelIngestionCommandInput} for command's `input` shape.
 * @see {@link CancelIngestionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource specified already exists.
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
export class CancelIngestionCommand extends command<CancelIngestionCommandInput, CancelIngestionCommandOutput>(
  _ep0,
  _mw0,
  "CancelIngestion",
  CancelIngestion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelIngestionRequest;
      output: CancelIngestionResponse;
    };
    sdk: {
      input: CancelIngestionCommandInput;
      output: CancelIngestionCommandOutput;
    };
  };
}
