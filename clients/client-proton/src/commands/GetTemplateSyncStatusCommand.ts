// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTemplateSyncStatusInput, GetTemplateSyncStatusOutput } from "../models/models_0";
import { GetTemplateSyncStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTemplateSyncStatusCommand}.
 */
export interface GetTemplateSyncStatusCommandInput extends GetTemplateSyncStatusInput {}
/**
 * @public
 *
 * The output of {@link GetTemplateSyncStatusCommand}.
 */
export interface GetTemplateSyncStatusCommandOutput extends GetTemplateSyncStatusOutput, __MetadataBearer {}

/**
 * Get the status of a template sync.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetTemplateSyncStatusCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetTemplateSyncStatusCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // GetTemplateSyncStatusInput
 *   templateName: "STRING_VALUE", // required
 *   templateType: "STRING_VALUE", // required
 *   templateVersion: "STRING_VALUE", // required
 * };
 * const command = new GetTemplateSyncStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateSyncStatusOutput
 * //   latestSync: { // ResourceSyncAttempt
 * //     initialRevision: { // Revision
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     targetRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     target: "STRING_VALUE", // required
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     events: [ // ResourceSyncEvents // required
 * //       { // ResourceSyncEvent
 * //         type: "STRING_VALUE", // required
 * //         externalId: "STRING_VALUE",
 * //         time: new Date("TIMESTAMP"), // required
 * //         event: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   latestSuccessfulSync: {
 * //     initialRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     targetRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     target: "STRING_VALUE", // required
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     events: [ // required
 * //       {
 * //         type: "STRING_VALUE", // required
 * //         externalId: "STRING_VALUE",
 * //         time: new Date("TIMESTAMP"), // required
 * //         event: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   desiredState: {
 * //     repositoryName: "STRING_VALUE", // required
 * //     repositoryProvider: "STRING_VALUE", // required
 * //     sha: "STRING_VALUE", // required
 * //     directory: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTemplateSyncStatusCommandInput - {@link GetTemplateSyncStatusCommandInput}
 * @returns {@link GetTemplateSyncStatusCommandOutput}
 * @see {@link GetTemplateSyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetTemplateSyncStatusCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class GetTemplateSyncStatusCommand extends command<GetTemplateSyncStatusCommandInput, GetTemplateSyncStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetTemplateSyncStatus",
  GetTemplateSyncStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemplateSyncStatusInput;
      output: GetTemplateSyncStatusOutput;
    };
    sdk: {
      input: GetTemplateSyncStatusCommandInput;
      output: GetTemplateSyncStatusCommandOutput;
    };
  };
}
