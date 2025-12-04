// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RestoreFromRecoveryPointRequest, RestoreFromRecoveryPointResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { RestoreFromRecoveryPoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreFromRecoveryPointCommand}.
 */
export interface RestoreFromRecoveryPointCommandInput extends RestoreFromRecoveryPointRequest {}
/**
 * @public
 *
 * The output of {@link RestoreFromRecoveryPointCommand}.
 */
export interface RestoreFromRecoveryPointCommandOutput extends RestoreFromRecoveryPointResponse, __MetadataBearer {}

/**
 * <p>Restore the data from a recovery point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, RestoreFromRecoveryPointCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, RestoreFromRecoveryPointCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // RestoreFromRecoveryPointRequest
 *   recoveryPointId: "STRING_VALUE", // required
 *   namespaceName: "STRING_VALUE", // required
 *   workgroupName: "STRING_VALUE", // required
 * };
 * const command = new RestoreFromRecoveryPointCommand(input);
 * const response = await client.send(command);
 * // { // RestoreFromRecoveryPointResponse
 * //   recoveryPointId: "STRING_VALUE",
 * //   namespace: { // Namespace
 * //     namespaceArn: "STRING_VALUE",
 * //     namespaceId: "STRING_VALUE",
 * //     namespaceName: "STRING_VALUE",
 * //     adminUsername: "STRING_VALUE",
 * //     dbName: "STRING_VALUE",
 * //     kmsKeyId: "STRING_VALUE",
 * //     defaultIamRoleArn: "STRING_VALUE",
 * //     iamRoles: [ // IamRoleArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     logExports: [ // LogExportList
 * //       "STRING_VALUE",
 * //     ],
 * //     status: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     adminPasswordSecretArn: "STRING_VALUE",
 * //     adminPasswordSecretKmsKeyId: "STRING_VALUE",
 * //     lakehouseRegistrationStatus: "STRING_VALUE",
 * //     catalogArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreFromRecoveryPointCommandInput - {@link RestoreFromRecoveryPointCommandInput}
 * @returns {@link RestoreFromRecoveryPointCommandOutput}
 * @see {@link RestoreFromRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link RestoreFromRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class RestoreFromRecoveryPointCommand extends $Command
  .classBuilder<
    RestoreFromRecoveryPointCommandInput,
    RestoreFromRecoveryPointCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "RestoreFromRecoveryPoint", {})
  .n("RedshiftServerlessClient", "RestoreFromRecoveryPointCommand")
  .sc(RestoreFromRecoveryPoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreFromRecoveryPointRequest;
      output: RestoreFromRecoveryPointResponse;
    };
    sdk: {
      input: RestoreFromRecoveryPointCommandInput;
      output: RestoreFromRecoveryPointCommandOutput;
    };
  };
}
