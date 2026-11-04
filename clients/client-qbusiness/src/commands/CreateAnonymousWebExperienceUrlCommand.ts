// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateAnonymousWebExperienceUrlRequest,
  CreateAnonymousWebExperienceUrlResponse,
} from "../models/models_0";
import { CreateAnonymousWebExperienceUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAnonymousWebExperienceUrlCommand}.
 */
export interface CreateAnonymousWebExperienceUrlCommandInput extends CreateAnonymousWebExperienceUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreateAnonymousWebExperienceUrlCommand}.
 */
export interface CreateAnonymousWebExperienceUrlCommandOutput extends CreateAnonymousWebExperienceUrlResponse, __MetadataBearer {}

/**
 * Creates a unique URL for anonymous Amazon Q Business web experience. This URL can only be used once and must be used within 5 minutes after it's generated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CreateAnonymousWebExperienceUrlCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CreateAnonymousWebExperienceUrlCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // CreateAnonymousWebExperienceUrlRequest
 *   applicationId: "STRING_VALUE", // required
 *   webExperienceId: "STRING_VALUE", // required
 *   sessionDurationInMinutes: Number("int"),
 * };
 * const command = new CreateAnonymousWebExperienceUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnonymousWebExperienceUrlResponse
 * //   anonymousUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAnonymousWebExperienceUrlCommandInput - {@link CreateAnonymousWebExperienceUrlCommandInput}
 * @returns {@link CreateAnonymousWebExperienceUrlCommandOutput}
 * @see {@link CreateAnonymousWebExperienceUrlCommandInput} for command's `input` shape.
 * @see {@link CreateAnonymousWebExperienceUrlCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the set limits for your Amazon Q Business service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class CreateAnonymousWebExperienceUrlCommand extends command<CreateAnonymousWebExperienceUrlCommandInput, CreateAnonymousWebExperienceUrlCommandOutput>(
  _ep0,
  _mw0,
  "CreateAnonymousWebExperienceUrl",
  CreateAnonymousWebExperienceUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAnonymousWebExperienceUrlRequest;
      output: CreateAnonymousWebExperienceUrlResponse;
    };
    sdk: {
      input: CreateAnonymousWebExperienceUrlCommandInput;
      output: CreateAnonymousWebExperienceUrlCommandOutput;
    };
  };
}
