// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetOpsMetadataRequest, GetOpsMetadataResult } from "../models/models_0";
import { GetOpsMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetOpsMetadataCommand}.
 */
export interface GetOpsMetadataCommandInput extends GetOpsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetOpsMetadataCommand}.
 */
export interface GetOpsMetadataCommandOutput extends GetOpsMetadataResult, __MetadataBearer {}

/**
 * View operational metadata related to an application in Application Manager.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetOpsMetadataRequest
 *   OpsMetadataArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetOpsMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetOpsMetadataResult
 * //   ResourceId: "STRING_VALUE",
 * //   Metadata: { // MetadataMap
 * //     "<keys>": { // MetadataValue
 * //       Value: "STRING_VALUE",
 * //     },
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOpsMetadataCommandInput - {@link GetOpsMetadataCommandInput}
 * @returns {@link GetOpsMetadataCommandOutput}
 * @see {@link GetOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link GetOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link OpsMetadataInvalidArgumentException} (client fault)
 *
 * One of the arguments passed is invalid.
 *
 * @throws {@link OpsMetadataNotFoundException} (client fault)
 *
 * The OpsMetadata object doesn't exist.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class GetOpsMetadataCommand extends command<GetOpsMetadataCommandInput, GetOpsMetadataCommandOutput>(
  _ep0,
  _mw0,
  "GetOpsMetadata",
  GetOpsMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOpsMetadataRequest;
      output: GetOpsMetadataResult;
    };
    sdk: {
      input: GetOpsMetadataCommandInput;
      output: GetOpsMetadataCommandOutput;
    };
  };
}
