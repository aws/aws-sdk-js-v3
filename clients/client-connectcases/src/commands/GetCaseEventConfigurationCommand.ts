// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCaseEventConfigurationRequest, GetCaseEventConfigurationResponse } from "../models/models_0";
import { GetCaseEventConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCaseEventConfigurationCommand}.
 */
export interface GetCaseEventConfigurationCommandInput extends GetCaseEventConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetCaseEventConfigurationCommand}.
 */
export interface GetCaseEventConfigurationCommandOutput extends GetCaseEventConfigurationResponse, __MetadataBearer {}

/**
 * Returns the case event publishing configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, GetCaseEventConfigurationCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, GetCaseEventConfigurationCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // GetCaseEventConfigurationRequest
 *   domainId: "STRING_VALUE", // required
 * };
 * const command = new GetCaseEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetCaseEventConfigurationResponse
 * //   eventBridge: { // EventBridgeConfiguration
 * //     enabled: true || false, // required
 * //     includedData: { // EventIncludedData
 * //       caseData: { // CaseEventIncludedData
 * //         fields: [ // FieldIdentifierList // required
 * //           { // FieldIdentifier
 * //             id: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       relatedItemData: { // RelatedItemEventIncludedData
 * //         includeContent: true || false, // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCaseEventConfigurationCommandInput - {@link GetCaseEventConfigurationCommandInput}
 * @returns {@link GetCaseEventConfigurationCommandOutput}
 * @see {@link GetCaseEventConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetCaseEventConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class GetCaseEventConfigurationCommand extends command<GetCaseEventConfigurationCommandInput, GetCaseEventConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetCaseEventConfiguration",
  GetCaseEventConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCaseEventConfigurationRequest;
      output: GetCaseEventConfigurationResponse;
    };
    sdk: {
      input: GetCaseEventConfigurationCommandInput;
      output: GetCaseEventConfigurationCommandOutput;
    };
  };
}
