// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreFromSnapshotRequest, RestoreFromSnapshotResponse } from "../models/models_0";
import { RestoreFromSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreFromSnapshotCommand}.
 */
export interface RestoreFromSnapshotCommandInput extends RestoreFromSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link RestoreFromSnapshotCommand}.
 */
export interface RestoreFromSnapshotCommandOutput extends RestoreFromSnapshotResponse, __MetadataBearer {}

/**
 * <p>Restores a namespace from a snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, RestoreFromSnapshotCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, RestoreFromSnapshotCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // RestoreFromSnapshotRequest
 *   namespaceName: "STRING_VALUE", // required
 *   workgroupName: "STRING_VALUE", // required
 *   snapshotName: "STRING_VALUE",
 *   snapshotArn: "STRING_VALUE",
 *   ownerAccount: "STRING_VALUE",
 *   manageAdminPassword: true || false,
 *   adminPasswordSecretKmsKeyId: "STRING_VALUE",
 *   maintainIntegration: true || false,
 * };
 * const command = new RestoreFromSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // RestoreFromSnapshotResponse
 * //   snapshotName: "STRING_VALUE",
 * //   ownerAccount: "STRING_VALUE",
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
 * @param RestoreFromSnapshotCommandInput - {@link RestoreFromSnapshotCommandInput}
 * @returns {@link RestoreFromSnapshotCommandOutput}
 * @see {@link RestoreFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreFromSnapshotCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service limit was exceeded.</p>
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
export class RestoreFromSnapshotCommand extends command<RestoreFromSnapshotCommandInput, RestoreFromSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "RestoreFromSnapshot",
  RestoreFromSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreFromSnapshotRequest;
      output: RestoreFromSnapshotResponse;
    };
    sdk: {
      input: RestoreFromSnapshotCommandInput;
      output: RestoreFromSnapshotCommandOutput;
    };
  };
}
