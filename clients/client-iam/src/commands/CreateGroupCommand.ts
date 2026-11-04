// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGroupRequest, CreateGroupResponse } from "../models/models_0";
import { CreateGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGroupCommand}.
 */
export interface CreateGroupCommandInput extends CreateGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateGroupCommand}.
 */
export interface CreateGroupCommandOutput extends CreateGroupResponse, __MetadataBearer {}

/**
 * Creates a new group.
 *
 * For information about the number of groups you can create, see [IAM and STS quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // CreateGroupRequest
 *   Path: "STRING_VALUE",
 *   GroupName: "STRING_VALUE", // required
 * };
 * const command = new CreateGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupResponse
 * //   Group: { // Group
 * //     Path: "STRING_VALUE", // required
 * //     GroupName: "STRING_VALUE", // required
 * //     GroupId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGroupCommandInput - {@link CreateGroupCommandInput}
 * @returns {@link CreateGroupCommandOutput}
 * @see {@link CreateGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The request was rejected because it attempted to create a resource that already exists.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @example To create an IAM group
 * ```javascript
 * // The following command creates an IAM group named Admins.
 * const input = {
 *   GroupName: "Admins"
 * };
 * const command = new CreateGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Group: {
 *     Arn: "arn:aws:iam::123456789012:group/Admins",
 *     CreateDate: "2015-03-09T20:30:24.940Z",
 *     GroupId: "AIDGPMS9RO4H3FEXAMPLE",
 *     GroupName: "Admins",
 *     Path: "/"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateGroupCommand extends command<CreateGroupCommandInput, CreateGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateGroup",
  CreateGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGroupRequest;
      output: CreateGroupResponse;
    };
    sdk: {
      input: CreateGroupCommandInput;
      output: CreateGroupCommandOutput;
    };
  };
}
