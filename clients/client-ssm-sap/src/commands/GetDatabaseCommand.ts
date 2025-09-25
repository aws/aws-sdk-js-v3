// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDatabaseInput, GetDatabaseOutput } from "../models/models_0";
import { GetDatabase } from "../schemas/schemas_2_List";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDatabaseCommand}.
 */
export interface GetDatabaseCommandInput extends GetDatabaseInput {}
/**
 * @public
 *
 * The output of {@link GetDatabaseCommand}.
 */
export interface GetDatabaseCommandOutput extends GetDatabaseOutput, __MetadataBearer {}

/**
 * <p>Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, GetDatabaseCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, GetDatabaseCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // GetDatabaseInput
 *   ApplicationId: "STRING_VALUE",
 *   ComponentId: "STRING_VALUE",
 *   DatabaseId: "STRING_VALUE",
 *   DatabaseArn: "STRING_VALUE",
 * };
 * const command = new GetDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // GetDatabaseOutput
 * //   Database: { // Database
 * //     ApplicationId: "STRING_VALUE",
 * //     ComponentId: "STRING_VALUE",
 * //     Credentials: [ // ApplicationCredentialList
 * //       { // ApplicationCredential
 * //         DatabaseName: "STRING_VALUE", // required
 * //         CredentialType: "ADMIN", // required
 * //         SecretId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     DatabaseId: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     DatabaseType: "SYSTEM" || "TENANT",
 * //     Arn: "STRING_VALUE",
 * //     Status: "RUNNING" || "STARTING" || "STOPPED" || "WARNING" || "UNKNOWN" || "ERROR",
 * //     PrimaryHost: "STRING_VALUE",
 * //     SQLPort: Number("int"),
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     ConnectedComponentArns: [ // ComponentArnList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDatabaseCommandInput - {@link GetDatabaseCommandInput}
 * @returns {@link GetDatabaseCommandOutput}
 * @see {@link GetDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetDatabaseCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class GetDatabaseCommand extends $Command
  .classBuilder<
    GetDatabaseCommandInput,
    GetDatabaseCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "GetDatabase", {})
  .n("SsmSapClient", "GetDatabaseCommand")
  .sc(GetDatabase)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatabaseInput;
      output: GetDatabaseOutput;
    };
    sdk: {
      input: GetDatabaseCommandInput;
      output: GetDatabaseCommandOutput;
    };
  };
}
