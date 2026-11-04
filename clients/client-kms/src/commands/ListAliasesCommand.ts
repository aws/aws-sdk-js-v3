// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAliasesRequest, ListAliasesResponse } from "../models/models_0";
import { ListAliases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAliasesCommand}.
 */
export interface ListAliasesCommandInput extends ListAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListAliasesCommand}.
 */
export interface ListAliasesCommandOutput extends ListAliasesResponse, __MetadataBearer {}

/**
 * Gets a list of aliases in the caller's Amazon Web Services account and region. For more information about aliases, see CreateAlias.
 *
 * By default, the `ListAliases` operation returns all aliases in the account and region. To get only the aliases associated with a particular KMS key, use the `KeyId` parameter.
 *
 * The `ListAliases` response can include aliases that you created and associated with your customer managed keys, and aliases that Amazon Web Services created and associated with Amazon Web Services managed keys in your account. You can recognize Amazon Web Services aliases because their names have the format `aws/<service-name>`, such as `aws/dynamodb`.
 *
 * The response might also include aliases that have no `TargetKeyId` field. These are predefined aliases that Amazon Web Services has created but has not yet associated with a KMS key. Aliases that Amazon Web Services creates in your account, including predefined aliases, do not count against your [KMS aliases quota](https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html#aliases-per-key).
 *
 * **Cross-account use**: No. `ListAliases` does not return aliases in other Amazon Web Services accounts.
 *
 * **Required permissions**: [kms:ListAliases](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (IAM policy)
 *
 * For details, see [Controlling access to aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-access.html) in the *Key Management Service Developer Guide*.
 *
 * **Related operations:**
 *
 * - CreateAlias
 * - DeleteAlias
 * - UpdateAlias
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListAliasesCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListAliasesCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // ListAliasesRequest
 *   KeyId: "STRING_VALUE",
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListAliasesResponse
 * //   Aliases: [ // AliasList
 * //     { // AliasListEntry
 * //       AliasName: "STRING_VALUE",
 * //       AliasArn: "STRING_VALUE",
 * //       TargetKeyId: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       LastUpdatedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * //   Truncated: true || false,
 * // };
 *
 * ```
 *
 * @param ListAliasesCommandInput - {@link ListAliasesCommandInput}
 * @returns {@link ListAliasesCommandOutput}
 * @see {@link ListAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAliasesCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The request was rejected because a specified ARN, or an ARN in a key policy, is not valid.
 *
 * @throws {@link InvalidMarkerException} (client fault)
 *
 * The request was rejected because the marker that specifies where pagination should next begin is not valid.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To list aliases
 * ```javascript
 * // The following example lists aliases.
 * const input = { /* empty *\/ };
 * const command = new ListAliasesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Aliases: [
 *     {
 *       AliasArn: "arn:aws:kms:us-east-2:111122223333:alias/aws/acm",
 *       AliasName: "alias/aws/acm",
 *       TargetKeyId: "da03f6f7-d279-427a-9cae-de48d07e5b66"
 *     },
 *     {
 *       AliasArn: "arn:aws:kms:us-east-2:111122223333:alias/aws/ebs",
 *       AliasName: "alias/aws/ebs",
 *       TargetKeyId: "25a217e7-7170-4b8c-8bf6-045ea5f70e5b"
 *     },
 *     {
 *       AliasArn: "arn:aws:kms:us-east-2:111122223333:alias/aws/rds",
 *       AliasName: "alias/aws/rds",
 *       TargetKeyId: "7ec3104e-c3f2-4b5c-bf42-bfc4772c6685"
 *     },
 *     {
 *       AliasArn: "arn:aws:kms:us-east-2:111122223333:alias/aws/redshift",
 *       AliasName: "alias/aws/redshift",
 *       TargetKeyId: "08f7a25a-69e2-4fb5-8f10-393db27326fa"
 *     },
 *     {
 *       AliasArn: "arn:aws:kms:us-east-2:111122223333:alias/aws/s3",
 *       AliasName: "alias/aws/s3",
 *       TargetKeyId: "d2b0f1a3-580d-4f79-b836-bc983be8cfa5"
 *     },
 *     {
 *       AliasArn: "arn:aws:kms:us-east-2:111122223333:alias/example1",
 *       AliasName: "alias/example1",
 *       TargetKeyId: "4da1e216-62d0-46c5-a7c0-5f3a3d2f8046"
 *     },
 *     {
 *       AliasArn: "arn:aws:kms:us-east-2:111122223333:alias/example2",
 *       AliasName: "alias/example2",
 *       TargetKeyId: "f32fef59-2cc2-445b-8573-2d73328acbee"
 *     },
 *     {
 *       AliasArn: "arn:aws:kms:us-east-2:111122223333:alias/example3",
 *       AliasName: "alias/example3",
 *       TargetKeyId: "1374ef38-d34e-4d5f-b2c9-4e0daee38855"
 *     }
 *   ],
 *   Truncated: false
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAliasesCommand extends command<ListAliasesCommandInput, ListAliasesCommandOutput>(
  _ep0,
  _mw0,
  "ListAliases",
  ListAliases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAliasesRequest;
      output: ListAliasesResponse;
    };
    sdk: {
      input: ListAliasesCommandInput;
      output: ListAliasesCommandOutput;
    };
  };
}
