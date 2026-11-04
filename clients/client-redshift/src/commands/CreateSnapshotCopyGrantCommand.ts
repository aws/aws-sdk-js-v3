// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSnapshotCopyGrantMessage, CreateSnapshotCopyGrantResult } from "../models/models_0";
import { CreateSnapshotCopyGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key from Key Management Service (KMS) to encrypt copied snapshots in a destination region.
 *
 * For more information about managing snapshot copy grants, go to [Amazon Redshift Database Encryption](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html) in the *Amazon Redshift Cluster Management Guide*.
 *
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
 *
 * The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.
 *
 * @throws {@link InvalidTagFault} (client fault)
 *
 * The tag is invalid.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * The encryption key has exceeded its grant limit in Amazon Web Services KMS.
 *
 * @throws {@link SnapshotCopyGrantAlreadyExistsFault} (client fault)
 *
 * The snapshot copy grant can't be created because a grant with the same name already exists.
 *
 * @throws {@link SnapshotCopyGrantQuotaExceededFault} (client fault)
 *
 * The Amazon Web Services account has exceeded the maximum number of snapshot copy grants in this region.
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *
 * You have exceeded the number of tags allowed.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class CreateSnapshotCopyGrantCommand extends command<CreateSnapshotCopyGrantCommandInput, CreateSnapshotCopyGrantCommandOutput>(
  _ep0,
  _mw0,
  "CreateSnapshotCopyGrant",
  CreateSnapshotCopyGrant$
) {
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
