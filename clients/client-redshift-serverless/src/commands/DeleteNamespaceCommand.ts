// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteNamespaceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DeleteNamespaceCommand, se_DeleteNamespaceCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNamespaceCommand}.
 */
export interface DeleteNamespaceCommandInput extends DeleteNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNamespaceCommand}.
 */
export interface DeleteNamespaceCommandOutput extends DeleteNamespaceResponse, __MetadataBearer {}

/**
 * <p>Deletes a namespace from Amazon Redshift Serverless.
 *          Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, DeleteNamespaceCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, DeleteNamespaceCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // DeleteNamespaceRequest
 *   namespaceName: "STRING_VALUE", // required
 *   finalSnapshotName: "STRING_VALUE",
 *   finalSnapshotRetentionPeriod: Number("int"),
 * };
 * const command = new DeleteNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNamespaceResponse
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
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteNamespaceCommandInput - {@link DeleteNamespaceCommandInput}
 * @returns {@link DeleteNamespaceCommandOutput}
 * @see {@link DeleteNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteNamespaceCommandOutput} for command's `response` shape.
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
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class DeleteNamespaceCommand extends $Command
  .classBuilder<
    DeleteNamespaceCommandInput,
    DeleteNamespaceCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "DeleteNamespace", {})
  .n("RedshiftServerlessClient", "DeleteNamespaceCommand")
  .f(void 0, DeleteNamespaceResponseFilterSensitiveLog)
  .ser(se_DeleteNamespaceCommand)
  .de(de_DeleteNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNamespaceRequest;
      output: DeleteNamespaceResponse;
    };
    sdk: {
      input: DeleteNamespaceCommandInput;
      output: DeleteNamespaceCommandOutput;
    };
  };
}
