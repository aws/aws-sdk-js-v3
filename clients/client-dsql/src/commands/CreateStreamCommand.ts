// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateStreamInput, CreateStreamOutput } from "../models/models_0";
import { CreateStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new change data capture (CDC) stream for a cluster. The stream captures database changes and delivers them to the specified target destination.</p> <p> <b>Required permissions</b> </p> <dl> <dt>dsql:CreateStream</dt> <dd> <p>Permission to create a new stream.</p> <p>Resources: <code>arn:aws:dsql:region:account-id:cluster/cluster-id</code> </p> </dd> <dt>iam:PassRole</dt> <dd> <p>Permission to pass the IAM role specified in the target definition to the service.</p> <p>Resources: ARN of the IAM role specified in <code>targetDefinition.kinesis.roleArn</code> </p> </dd> <dt>kms:Decrypt</dt> <dd> <p>Required when the cluster uses a customer managed KMS key (CMK). Permission to decrypt data using the cluster's CMK.</p> <p>Resources: ARN of the KMS key used by the cluster</p> </dd> </dl>
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
 *  <p>The submitted action has conflicts.</p>
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
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link DSQLServiceException}
 * <p>Base exception class for all service exceptions from DSQL service.</p>
 *
 *
 * @public
 */
export class CreateStreamCommand extends $Command
  .classBuilder<
    CreateStreamCommandInput,
    CreateStreamCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DSQL", "CreateStream", {})
  .n("DSQLClient", "CreateStreamCommand")
  .sc(CreateStream$)
  .build() {
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
