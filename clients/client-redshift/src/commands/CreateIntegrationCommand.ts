// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIntegrationMessage, Integration } from "../models/models_0";
import { CreateIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIntegrationCommand}.
 */
export interface CreateIntegrationCommandInput extends CreateIntegrationMessage {}
/**
 * @public
 *
 * The output of {@link CreateIntegrationCommand}.
 */
export interface CreateIntegrationCommandOutput extends Integration, __MetadataBearer {}

/**
 * Creates a zero-ETL integration or S3 event integration with Amazon Redshift.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateIntegrationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateIntegrationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateIntegrationMessage
 *   SourceArn: "STRING_VALUE", // required
 *   TargetArn: "STRING_VALUE", // required
 *   IntegrationName: "STRING_VALUE", // required
 *   KMSKeyId: "STRING_VALUE",
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   AdditionalEncryptionContext: { // EncryptionContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 * };
 * const command = new CreateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // Integration
 * //   IntegrationArn: "STRING_VALUE",
 * //   IntegrationName: "STRING_VALUE",
 * //   SourceArn: "STRING_VALUE",
 * //   TargetArn: "STRING_VALUE",
 * //   Status: "creating" || "active" || "modifying" || "failed" || "deleting" || "syncing" || "needs_attention",
 * //   Errors: [ // IntegrationErrorList
 * //     { // IntegrationError
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   CreateTime: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   KMSKeyId: "STRING_VALUE",
 * //   AdditionalEncryptionContext: { // EncryptionContextMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateIntegrationCommandInput - {@link CreateIntegrationCommandInput}
 * @returns {@link CreateIntegrationCommandOutput}
 * @see {@link CreateIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link IntegrationAlreadyExistsFault} (client fault)
 *
 * The integration you are trying to create already exists.
 *
 * @throws {@link IntegrationConflictOperationFault} (client fault)
 *
 * A conflicting conditional operation is currently in progress against this resource. This typically occurs when there are multiple requests being made to the same resource at the same time, and these requests conflict with each other.
 *
 * @throws {@link IntegrationQuotaExceededFault} (client fault)
 *
 * You can't create any more zero-ETL or S3 event integrations because the quota has been reached.
 *
 * @throws {@link IntegrationSourceNotFoundFault} (client fault)
 *
 * The specified integration source can't be found.
 *
 * @throws {@link IntegrationTargetNotFoundFault} (client fault)
 *
 * The specified integration target can't be found.
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *
 * The specified cluster is not in the `available` state.
 *
 * @throws {@link InvalidTagFault} (client fault)
 *
 * The tag is invalid.
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *
 * You have exceeded the number of tags allowed.
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *
 * The requested operation isn't supported.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class CreateIntegrationCommand extends command<CreateIntegrationCommandInput, CreateIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "CreateIntegration",
  CreateIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIntegrationMessage;
      output: Integration;
    };
    sdk: {
      input: CreateIntegrationCommandInput;
      output: CreateIntegrationCommandOutput;
    };
  };
}
