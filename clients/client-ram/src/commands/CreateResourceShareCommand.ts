// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateResourceShareRequest, CreateResourceShareResponse } from "../models/models_0";
import { de_CreateResourceShareCommand, se_CreateResourceShareCommand } from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceShareCommand}.
 */
export interface CreateResourceShareCommandInput extends CreateResourceShareRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceShareCommand}.
 */
export interface CreateResourceShareCommandOutput extends CreateResourceShareResponse, __MetadataBearer {}

/**
 * <p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you
 *             want to share, a list of principals you want to share the resources with, and the
 *             permissions to grant those principals.</p>
 *          <note>
 *             <p>Sharing a resource makes it available for use by principals outside of the
 *                 Amazon Web Services account that created the resource. Sharing doesn't change any permissions or
 *                 quotas that apply to the resource in the account that created it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, CreateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, CreateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // CreateResourceShareRequest
 *   name: "STRING_VALUE", // required
 *   resourceArns: [ // ResourceArnList
 *     "STRING_VALUE",
 *   ],
 *   principals: [ // PrincipalArnOrIdList
 *     "STRING_VALUE",
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   allowExternalPrincipals: true || false,
 *   clientToken: "STRING_VALUE",
 *   permissionArns: [ // PermissionArnList
 *     "STRING_VALUE",
 *   ],
 *   sources: [ // SourceArnOrAccountList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateResourceShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceShareResponse
 * //   resourceShare: { // ResourceShare
 * //     resourceShareArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     owningAccountId: "STRING_VALUE",
 * //     allowExternalPrincipals: true || false,
 * //     status: "PENDING" || "ACTIVE" || "FAILED" || "DELETING" || "DELETED",
 * //     statusMessage: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdatedTime: new Date("TIMESTAMP"),
 * //     featureSet: "CREATED_FROM_POLICY" || "PROMOTING_TO_STANDARD" || "STANDARD",
 * //   },
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourceShareCommandInput - {@link CreateResourceShareCommandInput}
 * @returns {@link CreateResourceShareCommandOutput}
 * @see {@link CreateResourceShareCommandInput} for command's `input` shape.
 * @see {@link CreateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *  <p>The operation failed because the requested operation isn't valid for the resource
 *             share in its current state.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ResourceShareLimitExceededException} (client fault)
 *  <p>The operation failed because it would exceed the limit for resource shares for your account. To
 *             view the limits for your Amazon Web Services account, see the <a href="https://console.aws.amazon.com/servicequotas/home/services/ram/quotas">RAM page in the Service Quotas
 *                 console</a>.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link TagLimitExceededException} (client fault)
 *  <p>The operation failed because it would exceed the limit for tags for your
 *             Amazon Web Services account.</p>
 *
 * @throws {@link TagPolicyViolationException} (client fault)
 *  <p>The operation failed because the specified tag key is a reserved word and can't be
 *             used.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class CreateResourceShareCommand extends $Command
  .classBuilder<
    CreateResourceShareCommandInput,
    CreateResourceShareCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonResourceSharing", "CreateResourceShare", {})
  .n("RAMClient", "CreateResourceShareCommand")
  .f(void 0, void 0)
  .ser(se_CreateResourceShareCommand)
  .de(de_CreateResourceShareCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceShareRequest;
      output: CreateResourceShareResponse;
    };
    sdk: {
      input: CreateResourceShareCommandInput;
      output: CreateResourceShareCommandOutput;
    };
  };
}
