// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExperienceRequest, CreateExperienceResponse } from "../models/models_0";
import { CreateExperience$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateExperienceCommand}.
 */
export interface CreateExperienceCommandInput extends CreateExperienceRequest {}
/**
 * @public
 *
 * The output of {@link CreateExperienceCommand}.
 */
export interface CreateExperienceCommandOutput extends CreateExperienceResponse, __MetadataBearer {}

/**
 * Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see [Building a search experience with no code](https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateExperienceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateExperienceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * // import type { KendraClientConfig } from "@aws-sdk/client-kendra";
 * const config = {}; // type is KendraClientConfig
 * const client = new KendraClient(config);
 * const input = { // CreateExperienceRequest
 *   Name: "STRING_VALUE", // required
 *   IndexId: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE",
 *   Configuration: { // ExperienceConfiguration
 *     ContentSourceConfiguration: { // ContentSourceConfiguration
 *       DataSourceIds: [ // DataSourceIdList
 *         "STRING_VALUE",
 *       ],
 *       FaqIds: [ // FaqIdsList
 *         "STRING_VALUE",
 *       ],
 *       DirectPutContent: true || false,
 *     },
 *     UserIdentityConfiguration: { // UserIdentityConfiguration
 *       IdentityAttributeName: "STRING_VALUE",
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateExperienceCommand(input);
 * const response = await client.send(command);
 * // { // CreateExperienceResponse
 * //   Id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateExperienceCommandInput - {@link CreateExperienceCommandInput}
 * @returns {@link CreateExperienceCommandOutput}
 * @see {@link CreateExperienceCommandInput} for command's `input` shape.
 * @see {@link CreateExperienceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Please ensure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred with the request. Please fix any inconsistences with your resources and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Kendra service. Please wait a few minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you want to use doesn’t exist. Please check you have provided the correct resource and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the set limits for your Amazon Kendra service. Please see [Quotas](https://docs.aws.amazon.com/kendra/latest/dg/quotas.html) for more information, or contact [Support](http://aws.amazon.com/contact-us/) to inquire about an increase of limits.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Please reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints set by the Amazon Kendra service. Please provide the correct input and try again.
 *
 * @throws {@link KendraServiceException}
 *
 * Base exception class for all service exceptions from Kendra service.
 *
 * @public
 */
export class CreateExperienceCommand extends command<CreateExperienceCommandInput, CreateExperienceCommandOutput>(
  _ep0,
  _mw0,
  "CreateExperience",
  CreateExperience$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExperienceRequest;
      output: CreateExperienceResponse;
    };
    sdk: {
      input: CreateExperienceCommandInput;
      output: CreateExperienceCommandOutput;
    };
  };
}
