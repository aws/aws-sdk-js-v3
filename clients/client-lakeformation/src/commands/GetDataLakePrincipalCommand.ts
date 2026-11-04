// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataLakePrincipalRequest, GetDataLakePrincipalResponse } from "../models/models_0";
import { GetDataLakePrincipal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataLakePrincipalCommand}.
 */
export interface GetDataLakePrincipalCommandInput extends GetDataLakePrincipalRequest {}
/**
 * @public
 *
 * The output of {@link GetDataLakePrincipalCommand}.
 */
export interface GetDataLakePrincipalCommandOutput extends GetDataLakePrincipalResponse, __MetadataBearer {}

/**
 * Returns the identity of the invoking principal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetDataLakePrincipalCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetDataLakePrincipalCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = {};
 * const command = new GetDataLakePrincipalCommand(input);
 * const response = await client.send(command);
 * // { // GetDataLakePrincipalResponse
 * //   Identity: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataLakePrincipalCommandInput - {@link GetDataLakePrincipalCommandInput}
 * @returns {@link GetDataLakePrincipalCommandOutput}
 * @see {@link GetDataLakePrincipalCommandInput} for command's `input` shape.
 * @see {@link GetDataLakePrincipalCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class GetDataLakePrincipalCommand extends command<GetDataLakePrincipalCommandInput, GetDataLakePrincipalCommandOutput>(
  _ep0,
  _mw0,
  "GetDataLakePrincipal",
  GetDataLakePrincipal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDataLakePrincipalResponse;
    };
    sdk: {
      input: GetDataLakePrincipalCommandInput;
      output: GetDataLakePrincipalCommandOutput;
    };
  };
}
