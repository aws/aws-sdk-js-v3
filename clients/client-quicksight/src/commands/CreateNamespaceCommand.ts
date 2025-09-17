// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNamespaceRequest, CreateNamespaceResponse } from "../models/models_3";
import { de_CreateNamespaceCommand, se_CreateNamespaceCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNamespaceCommand}.
 */
export interface CreateNamespaceCommandInput extends CreateNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateNamespaceCommand}.
 */
export interface CreateNamespaceCommandOutput extends CreateNamespaceResponse, __MetadataBearer {}

/**
 * <p>(Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight.</p>
 *          <p>A namespace allows you to isolate the QuickSight users and groups that are registered
 *             for that namespace. Users that access the namespace can share assets only with other
 *             users or groups in the same namespace. They can't see users and groups in other
 *             namespaces. You can create a namespace after your Amazon Web Services account is subscribed to
 *             QuickSight. The namespace must be unique within the Amazon Web Services account. By default, there is a
 *             limit of 100 namespaces per Amazon Web Services account. To increase your limit, create a ticket with
 *             Amazon Web Services Support. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateNamespaceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateNamespaceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateNamespaceRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   IdentityStore: "QUICKSIGHT", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateNamespaceResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   CapacityRegion: "STRING_VALUE",
 * //   CreationStatus: "CREATED" || "CREATING" || "DELETING" || "RETRYABLE_FAILURE" || "NON_RETRYABLE_FAILURE",
 * //   IdentityStore: "QUICKSIGHT",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateNamespaceCommandInput - {@link CreateNamespaceCommandInput}
 * @returns {@link CreateNamespaceCommandOutput}
 * @see {@link CreateNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateNamespaceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class CreateNamespaceCommand extends $Command
  .classBuilder<
    CreateNamespaceCommandInput,
    CreateNamespaceCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "CreateNamespace", {})
  .n("QuickSightClient", "CreateNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_CreateNamespaceCommand)
  .de(de_CreateNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNamespaceRequest;
      output: CreateNamespaceResponse;
    };
    sdk: {
      input: CreateNamespaceCommandInput;
      output: CreateNamespaceCommandOutput;
    };
  };
}
