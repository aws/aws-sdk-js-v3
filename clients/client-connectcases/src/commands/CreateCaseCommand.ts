// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCaseRequest, CreateCaseResponse } from "../models/models_0";
import { CreateCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCaseCommand}.
 */
export interface CreateCaseCommandInput extends CreateCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateCaseCommand}.
 */
export interface CreateCaseCommandOutput extends CreateCaseResponse, __MetadataBearer {}

/**
 * > **Note:** If you provide a value for `PerformedBy.UserArn` you must also have [connect:DescribeUser](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html) permission on the User ARN resource that you provide
 *
 * Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.
 *
 * When creating a case from a template that has tag propagation configurations, the specified tags are automatically applied to the case.
 *
 * The following fields are required when creating a case:
 *
 * - `customer_id` - You must provide the full customer profile ARN in this format: `arn:aws:profile:your_AWS_Region:your_AWS_account ID:domains/your_profiles_domain_name/profiles/profile_ID`
 * - `title`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateCaseCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateCaseCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // CreateCaseRequest
 *   domainId: "STRING_VALUE", // required
 *   templateId: "STRING_VALUE", // required
 *   fields: [ // FieldValueList // required
 *     { // FieldValue
 *       id: "STRING_VALUE", // required
 *       value: { // FieldValueUnion Union: only one key present
 *         stringValue: "STRING_VALUE",
 *         doubleValue: Number("double"),
 *         booleanValue: true || false,
 *         emptyValue: {},
 *         userArnValue: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   performedBy: { // UserUnion Union: only one key present
 *     userArn: "STRING_VALUE",
 *     customEntity: "STRING_VALUE",
 *   },
 *   tags: { // MutableTags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateCaseResponse
 * //   caseId: "STRING_VALUE", // required
 * //   caseArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCaseCommandInput - {@link CreateCaseCommandInput}
 * @returns {@link CreateCaseCommandOutput}
 * @see {@link CreateCaseCommandInput} for command's `input` shape.
 * @see {@link CreateCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class CreateCaseCommand extends command<CreateCaseCommandInput, CreateCaseCommandOutput>(
  _ep0,
  _mw0,
  "CreateCase",
  CreateCase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCaseRequest;
      output: CreateCaseResponse;
    };
    sdk: {
      input: CreateCaseCommandInput;
      output: CreateCaseCommandOutput;
    };
  };
}
