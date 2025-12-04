// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSnapshotCopyGrantMessage, CreateSnapshotCopyGrantResult } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateSnapshotCopyGrant } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotCopyGrantCommand}.
 */
export interface CreateSnapshotCopyGrantCommandInput extends CreateSnapshotCopyGrantMessage {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCopyGrantCommand}.
 */
export interface CreateSnapshotCopyGrantCommandOutput extends CreateSnapshotCopyGrantResult, __MetadataBearer {}

/**
 * <p>Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key
 *             from Key Management Service (KMS) to encrypt copied snapshots in a
 *             destination region.</p>
 *          <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateSnapshotCopyGrantCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateSnapshotCopyGrantCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateSnapshotCopyGrantMessage
 *   SnapshotCopyGrantName: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateSnapshotCopyGrantCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapshotCopyGrantResult
 * //   SnapshotCopyGrant: { // SnapshotCopyGrant
 * //     SnapshotCopyGrantName: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSnapshotCopyGrantCommandInput - {@link CreateSnapshotCopyGrantCommandInput}
 * @returns {@link CreateSnapshotCopyGrantCommandOutput}
 * @see {@link CreateSnapshotCopyGrantCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCopyGrantCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceRequestThrottlingFault} (client fault)
 *  <p>The request cannot be completed because a dependent service is throttling requests
 *             made by Amazon Redshift on your behalf. Wait and retry the request.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>The encryption key has exceeded its grant limit in Amazon Web Services KMS.</p>
 *
 * @throws {@link SnapshotCopyGrantAlreadyExistsFault} (client fault)
 *  <p>The snapshot copy grant can't be created because a grant with the same name already
 *             exists.</p>
 *
 * @throws {@link SnapshotCopyGrantQuotaExceededFault} (client fault)
 *  <p>The Amazon Web Services account has exceeded the maximum number of snapshot copy grants in this
 *             region.</p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class CreateSnapshotCopyGrantCommand extends $Command
  .classBuilder<
    CreateSnapshotCopyGrantCommandInput,
    CreateSnapshotCopyGrantCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "CreateSnapshotCopyGrant", {})
  .n("RedshiftClient", "CreateSnapshotCopyGrantCommand")
  .sc(CreateSnapshotCopyGrant)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapshotCopyGrantMessage;
      output: CreateSnapshotCopyGrantResult;
    };
    sdk: {
      input: CreateSnapshotCopyGrantCommandInput;
      output: CreateSnapshotCopyGrantCommandOutput;
    };
  };
}
