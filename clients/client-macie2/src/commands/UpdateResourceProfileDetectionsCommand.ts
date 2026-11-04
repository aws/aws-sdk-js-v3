// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateResourceProfileDetectionsRequest,
  UpdateResourceProfileDetectionsResponse,
} from "../models/models_0";
import { UpdateResourceProfileDetections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateResourceProfileDetectionsCommand}.
 */
export interface UpdateResourceProfileDetectionsCommandInput extends UpdateResourceProfileDetectionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceProfileDetectionsCommand}.
 */
export interface UpdateResourceProfileDetectionsCommandOutput extends UpdateResourceProfileDetectionsResponse, __MetadataBearer {}

/**
 * Updates the sensitivity scoring settings for an S3 bucket.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateResourceProfileDetectionsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateResourceProfileDetectionsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // UpdateResourceProfileDetectionsRequest
 *   resourceArn: "STRING_VALUE", // required
 *   suppressDataIdentifiers: [ // __listOfSuppressDataIdentifier
 *     { // SuppressDataIdentifier
 *       id: "STRING_VALUE",
 *       type: "CUSTOM" || "MANAGED",
 *     },
 *   ],
 * };
 * const command = new UpdateResourceProfileDetectionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResourceProfileDetectionsCommandInput - {@link UpdateResourceProfileDetectionsCommandInput}
 * @returns {@link UpdateResourceProfileDetectionsCommandOutput}
 * @see {@link UpdateResourceProfileDetectionsCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceProfileDetectionsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Provides information about an error that occurred due to insufficient access to a specified resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Provides information about an error that occurred due to an unknown internal server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Provides information about an error that occurred because a specified resource wasn't found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Provides information about an error that occurred due to one or more service quotas for an account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Provides information about an error that occurred because too many requests were sent during a certain amount of time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Provides information about an error that occurred due to a syntax error in a request.
 *
 * @throws {@link Macie2ServiceException}
 *
 * Base exception class for all service exceptions from Macie2 service.
 *
 * @public
 */
export class UpdateResourceProfileDetectionsCommand extends command<UpdateResourceProfileDetectionsCommandInput, UpdateResourceProfileDetectionsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateResourceProfileDetections",
  UpdateResourceProfileDetections$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceProfileDetectionsRequest;
      output: {};
    };
    sdk: {
      input: UpdateResourceProfileDetectionsCommandInput;
      output: UpdateResourceProfileDetectionsCommandOutput;
    };
  };
}
