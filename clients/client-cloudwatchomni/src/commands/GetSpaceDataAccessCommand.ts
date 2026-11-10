// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSpaceDataAccessInput, GetSpaceDataAccessOutput } from "../models/models_0";
import { GetSpaceDataAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSpaceDataAccessCommand}.
 */
export interface GetSpaceDataAccessCommandInput extends GetSpaceDataAccessInput {}
/**
 * @public
 *
 * The output of {@link GetSpaceDataAccessCommand}.
 */
export interface GetSpaceDataAccessCommandOutput extends GetSpaceDataAccessOutput, __MetadataBearer {}

/**
 * Returns temporary credentials for working with data in a space, limited to the actions
 * you request.
 *
 * The credentials allow only the requested actions that can be granted in the space and
 * that your access grants allow. Requested actions that cannot be conferred are ignored
 * rather than rejected.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, GetSpaceDataAccessCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, GetSpaceDataAccessCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // GetSpaceDataAccessInput
 *   spaceId: "STRING_VALUE", // required
 *   targetScopes: [ // DataAccessTargetList // required
 *     { // DataAccessTarget
 *       actions: [ // DataAccessActionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   durationSeconds: Number("int"),
 *   auditContext: { // DataAccessAuditContext
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetSpaceDataAccessCommand(input);
 * const response = await client.send(command);
 * // { // GetSpaceDataAccessOutput
 * //   credentials: { // AwsCredentials
 * //     accessKeyId: "STRING_VALUE", // required
 * //     secretAccessKey: "STRING_VALUE", // required
 * //     sessionToken: "STRING_VALUE", // required
 * //     expiration: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSpaceDataAccessCommandInput - {@link GetSpaceDataAccessCommandInput}
 * @returns {@link GetSpaceDataAccessCommandOutput}
 * @see {@link GetSpaceDataAccessCommandInput} for command's `input` shape.
 * @see {@link GetSpaceDataAccessCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link PolicyTooLargeException} (client fault)
 *  The requested actions produce a credential that exceeds the maximum size. Request fewer
 * actions.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Get data credentials for log queries
 * ```javascript
 * // The following example requests credentials that allow running log queries and reading metric data in a space. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   auditContext: {
 *     source: "logs-console"
 *   },
 *   durationSeconds: 3600,
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *   targetScopes: [
 *     {
 *       actions: [
 *         "logs:StartQuery",
 *         "logs:GetQueryResults"
 *       ]
 *     },
 *     {
 *       actions: [
 *         "cloudwatch:GetMetricData"
 *       ]
 *     }
 *   ]
 * };
 * const command = new GetSpaceDataAccessCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   credentials: {
 *     accessKeyId: "ASIAIOSFODNN7EXAMPLE",
 *     expiration: "2026-10-20T19:22:31Z",
 *     secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
 *     sessionToken: "EXAMPLE-SESSION-TOKEN"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSpaceDataAccessCommand extends command<GetSpaceDataAccessCommandInput, GetSpaceDataAccessCommandOutput>(
  _ep0,
  _mw0,
  "GetSpaceDataAccess",
  GetSpaceDataAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSpaceDataAccessInput;
      output: GetSpaceDataAccessOutput;
    };
    sdk: {
      input: GetSpaceDataAccessCommandInput;
      output: GetSpaceDataAccessCommandOutput;
    };
  };
}
