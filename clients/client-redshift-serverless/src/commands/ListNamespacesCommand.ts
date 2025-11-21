// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListNamespacesRequest, ListNamespacesResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { ListNamespaces } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNamespacesCommand}.
 */
export interface ListNamespacesCommandInput extends ListNamespacesRequest {}
/**
 * @public
 *
 * The output of {@link ListNamespacesCommand}.
 */
export interface ListNamespacesCommandOutput extends ListNamespacesResponse, __MetadataBearer {}

/**
 * <p>Returns information about a list of specified namespaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListNamespacesCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListNamespacesCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListNamespacesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListNamespacesResponse
 * //   nextToken: "STRING_VALUE",
 * //   namespaces: [ // NamespaceList // required
 * //     { // Namespace
 * //       namespaceArn: "STRING_VALUE",
 * //       namespaceId: "STRING_VALUE",
 * //       namespaceName: "STRING_VALUE",
 * //       adminUsername: "STRING_VALUE",
 * //       dbName: "STRING_VALUE",
 * //       kmsKeyId: "STRING_VALUE",
 * //       defaultIamRoleArn: "STRING_VALUE",
 * //       iamRoles: [ // IamRoleArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       logExports: [ // LogExportList
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //       adminPasswordSecretArn: "STRING_VALUE",
 * //       adminPasswordSecretKmsKeyId: "STRING_VALUE",
 * //       lakehouseRegistrationStatus: "STRING_VALUE",
 * //       catalogArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListNamespacesCommandInput - {@link ListNamespacesCommandInput}
 * @returns {@link ListNamespacesCommandOutput}
 * @see {@link ListNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListNamespacesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
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
export class ListNamespacesCommand extends $Command
  .classBuilder<
    ListNamespacesCommandInput,
    ListNamespacesCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "ListNamespaces", {})
  .n("RedshiftServerlessClient", "ListNamespacesCommand")
  .sc(ListNamespaces)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNamespacesRequest;
      output: ListNamespacesResponse;
    };
    sdk: {
      input: ListNamespacesCommandInput;
      output: ListNamespacesCommandOutput;
    };
  };
}
