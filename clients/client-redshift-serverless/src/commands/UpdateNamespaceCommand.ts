// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateNamespaceRequest, UpdateNamespaceResponse } from "../models/models_0";
import { UpdateNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateNamespaceCommand}.
 */
export interface UpdateNamespaceCommandInput extends UpdateNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNamespaceCommand}.
 */
export interface UpdateNamespaceCommandOutput extends UpdateNamespaceResponse, __MetadataBearer {}

/**
 * Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both `adminUsername` and `adminUserPassword` to update either field, but you can't update both `kmsKeyId` and `logExports` in a single request.
 *
 * Similarly, an S3 Tables log-publishing update (a request where `logDestinationType` is `s3table`) cannot be combined with any other namespace configuration change and must be submitted as its own request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateNamespaceCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateNamespaceCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateNamespaceRequest
 *   namespaceName: "STRING_VALUE", // required
 *   adminUserPassword: "STRING_VALUE",
 *   adminUsername: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE",
 *   defaultIamRoleArn: "STRING_VALUE",
 *   iamRoles: [ // IamRoleArnList
 *     "STRING_VALUE",
 *   ],
 *   logExports: [ // LogExportList
 *     "STRING_VALUE",
 *   ],
 *   manageAdminPassword: true || false,
 *   adminPasswordSecretKmsKeyId: "STRING_VALUE",
 *   logDestinationType: "STRING_VALUE",
 *   s3TableAction: "STRING_VALUE",
 *   s3TableNames: [ // S3TableNameList
 *     "STRING_VALUE",
 *   ],
 *   s3TableKmsKeyId: "STRING_VALUE",
 *   s3TableGranularity: "STRING_VALUE",
 * };
 * const command = new UpdateNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNamespaceResponse
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
 * //     s3TablePublishStatus: { // S3TablePublishStatus
 * //       s3Tables: [ // S3TableNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       s3TableNamespace: "STRING_VALUE",
 * //       s3TableGranularity: "STRING_VALUE",
 * //       enabledAll: true || false,
 * //       lastIngestionTimes: { // S3TableLastIngestionTimeMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateNamespaceCommandInput - {@link UpdateNamespaceCommandInput}
 * @returns {@link UpdateNamespaceCommandOutput}
 * @see {@link UpdateNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdateNamespaceCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The submitted action has conflicts.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link RedshiftServerlessServiceException}
 *
 * Base exception class for all service exceptions from RedshiftServerless service.
 *
 * @public
 */
export class UpdateNamespaceCommand extends command<UpdateNamespaceCommandInput, UpdateNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateNamespace",
  UpdateNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNamespaceRequest;
      output: UpdateNamespaceResponse;
    };
    sdk: {
      input: UpdateNamespaceCommandInput;
      output: UpdateNamespaceCommandOutput;
    };
  };
}
