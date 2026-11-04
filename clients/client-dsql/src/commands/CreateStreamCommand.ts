// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStreamInput, CreateStreamOutput } from "../models/models_0";
import { CreateStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStreamCommand}.
 */
export interface CreateStreamCommandInput extends CreateStreamInput {}
/**
 * @public
 *
 * The output of {@link CreateStreamCommand}.
 */
export interface CreateStreamCommandOutput extends CreateStreamOutput, __MetadataBearer {}

/**
 * Creates a new change data capture (CDC) stream for a cluster. The stream captures database changes and delivers them to the specified target destination.
 *
 * **Required permissions**
 *
 * - **dsql:CreateStream**
 *
 *   Permission to create a new stream.
 *
 *   Resources: `arn:aws:dsql:region:account-id:cluster/cluster-id`
 *
 * - **iam:PassRole**
 *
 *   Permission to pass the IAM role specified in the target definition to the service.
 *
 *   Resources: ARN of the IAM role specified in `targetDefinition.kinesis.roleArn`
 *
 * - **kms:Decrypt**
 *
 *   Required when the cluster uses a customer managed KMS key (CMK). Permission to decrypt data using the cluster's CMK.
 *
 *   Resources: ARN of the KMS key used by the cluster
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, CreateStreamCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, CreateStreamCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // CreateStreamInput
 *   clusterIdentifier: "STRING_VALUE", // required
 *   targetDefinition: { // TargetDefinition Union: only one key present
 *     kinesis: { // KinesisTargetDefinition
 *       streamArn: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   },
 *   ordering: "UNORDERED", // required
 *   format: "JSON", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateStreamCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamOutput
 * //   clusterIdentifier: "STRING_VALUE", // required
 * //   streamIdentifier: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "FAILED" || "IMPAIRED", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   ordering: "UNORDERED", // required
 * //   format: "JSON", // required
 * // };
 *
 * ```
 *
 * @param CreateStreamCommandInput - {@link CreateStreamCommandInput}
 * @returns {@link CreateStreamCommandOutput}
 * @see {@link CreateStreamCommandInput} for command's `input` shape.
 * @see {@link CreateStreamCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The submitted action has conflicts.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service limit was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link DSQLServiceException}
 *
 * Base exception class for all service exceptions from DSQL service.
 *
 * @public
 */
export class CreateStreamCommand extends command<CreateStreamCommandInput, CreateStreamCommandOutput>(
  _ep0,
  _mw0,
  "CreateStream",
  CreateStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamInput;
      output: CreateStreamOutput;
    };
    sdk: {
      input: CreateStreamCommandInput;
      output: CreateStreamCommandOutput;
    };
  };
}
