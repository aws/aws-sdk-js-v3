// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutCaseEventConfigurationRequest, PutCaseEventConfigurationResponse } from "../models/models_0";
import { PutCaseEventConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutCaseEventConfigurationCommand}.
 */
export interface PutCaseEventConfigurationCommandInput extends PutCaseEventConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutCaseEventConfigurationCommand}.
 */
export interface PutCaseEventConfigurationCommandOutput extends PutCaseEventConfigurationResponse, __MetadataBearer {}

/**
 * Adds case event publishing configuration. For a complete list of fields you can add to the event message, see [Create case fields](https://docs.aws.amazon.com/connect/latest/adminguide/case-fields.html) in the *Amazon Connect Administrator Guide*
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, PutCaseEventConfigurationCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, PutCaseEventConfigurationCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // PutCaseEventConfigurationRequest
 *   domainId: "STRING_VALUE", // required
 *   eventBridge: { // EventBridgeConfiguration
 *     enabled: true || false, // required
 *     includedData: { // EventIncludedData
 *       caseData: { // CaseEventIncludedData
 *         fields: [ // FieldIdentifierList // required
 *           { // FieldIdentifier
 *             id: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       relatedItemData: { // RelatedItemEventIncludedData
 *         includeContent: true || false, // required
 *       },
 *     },
 *   },
 * };
 * const command = new PutCaseEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutCaseEventConfigurationCommandInput - {@link PutCaseEventConfigurationCommandInput}
 * @returns {@link PutCaseEventConfigurationCommandOutput}
 * @see {@link PutCaseEventConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutCaseEventConfigurationCommandOutput} for command's `response` shape.
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
export class PutCaseEventConfigurationCommand extends command<PutCaseEventConfigurationCommandInput, PutCaseEventConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutCaseEventConfiguration",
  PutCaseEventConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutCaseEventConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutCaseEventConfigurationCommandInput;
      output: PutCaseEventConfigurationCommandOutput;
    };
  };
}
