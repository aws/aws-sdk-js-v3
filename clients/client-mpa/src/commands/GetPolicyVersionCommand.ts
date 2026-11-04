// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPolicyVersionRequest, GetPolicyVersionResponse } from "../models/models_0";
import { GetPolicyVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPolicyVersionCommand}.
 */
export interface GetPolicyVersionCommandInput extends GetPolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyVersionCommand}.
 */
export interface GetPolicyVersionCommandOutput extends GetPolicyVersionResponse, __MetadataBearer {}

/**
 * Returns details for the version of a policy. Policies define the permissions for team resources.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, GetPolicyVersionCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, GetPolicyVersionCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // GetPolicyVersionRequest
 *   PolicyVersionArn: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyVersionResponse
 * //   PolicyVersion: { // PolicyVersion
 * //     Arn: "STRING_VALUE", // required
 * //     PolicyArn: "STRING_VALUE", // required
 * //     VersionId: Number("int"), // required
 * //     PolicyType: "AWS_MANAGED" || "AWS_RAM", // required
 * //     IsDefault: true || false, // required
 * //     Name: "STRING_VALUE", // required
 * //     Status: "ATTACHABLE" || "DEPRECATED", // required
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     Document: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPolicyVersionCommandInput - {@link GetPolicyVersionCommandInput}
 * @returns {@link GetPolicyVersionCommandOutput}
 * @see {@link GetPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link GetPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action. Check your permissions, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist. Check the resource ID, and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link MPAServiceException}
 *
 * Base exception class for all service exceptions from MPA service.
 *
 * @public
 */
export class GetPolicyVersionCommand extends command<GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput>(
  _ep0,
  _mw0,
  "GetPolicyVersion",
  GetPolicyVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyVersionRequest;
      output: GetPolicyVersionResponse;
    };
    sdk: {
      input: GetPolicyVersionCommandInput;
      output: GetPolicyVersionCommandOutput;
    };
  };
}
