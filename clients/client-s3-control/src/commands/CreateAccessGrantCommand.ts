// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAccessGrantRequest, CreateAccessGrantResult } from "../models/models_0";
import { CreateAccessGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAccessGrantCommand}.
 */
export interface CreateAccessGrantCommandInput extends CreateAccessGrantRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessGrantCommand}.
 */
export interface CreateAccessGrantCommandOutput extends CreateAccessGrantResult, __MetadataBearer {}

/**
 * Creates an access grant that gives a grantee access to your S3 data. The grantee can be an IAM user or role or a directory user, or group. Before you can create a grant, you must have an S3 Access Grants instance in the same Region as the S3 data. You can create an S3 Access Grants instance using the [CreateAccessGrantsInstance](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessGrantsInstance.html). You must also have registered at least one S3 data location in your S3 Access Grants instance using [CreateAccessGrantsLocation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessGrantsLocation.html).
 *
 * - **Permissions**
 *
 *   You must have the `s3:CreateAccessGrant` permission to use this operation.
 *
 * - **Additional Permissions**
 *
 *   For any directory identity - `sso:DescribeInstance` and `sso:DescribeApplication`
 *
 *   For directory users - `identitystore:DescribeUser`
 *
 *   For directory groups - `identitystore:DescribeGroup`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessGrantCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessGrantCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // CreateAccessGrantRequest
 *   AccountId: "STRING_VALUE",
 *   AccessGrantsLocationId: "STRING_VALUE", // required
 *   AccessGrantsLocationConfiguration: { // AccessGrantsLocationConfiguration
 *     S3SubPrefix: "STRING_VALUE",
 *   },
 *   Grantee: { // Grantee
 *     GranteeType: "DIRECTORY_USER" || "DIRECTORY_GROUP" || "IAM",
 *     GranteeIdentifier: "STRING_VALUE",
 *   },
 *   Permission: "READ" || "WRITE" || "READWRITE", // required
 *   ApplicationArn: "STRING_VALUE",
 *   S3PrefixType: "Object",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAccessGrantCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessGrantResult
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   AccessGrantId: "STRING_VALUE",
 * //   AccessGrantArn: "STRING_VALUE",
 * //   Grantee: { // Grantee
 * //     GranteeType: "DIRECTORY_USER" || "DIRECTORY_GROUP" || "IAM",
 * //     GranteeIdentifier: "STRING_VALUE",
 * //   },
 * //   AccessGrantsLocationId: "STRING_VALUE",
 * //   AccessGrantsLocationConfiguration: { // AccessGrantsLocationConfiguration
 * //     S3SubPrefix: "STRING_VALUE",
 * //   },
 * //   Permission: "READ" || "WRITE" || "READWRITE",
 * //   ApplicationArn: "STRING_VALUE",
 * //   GrantScope: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAccessGrantCommandInput - {@link CreateAccessGrantCommandInput}
 * @returns {@link CreateAccessGrantCommandOutput}
 * @see {@link CreateAccessGrantCommandInput} for command's `input` shape.
 * @see {@link CreateAccessGrantCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class CreateAccessGrantCommand extends command<CreateAccessGrantCommandInput, CreateAccessGrantCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccessGrant",
  CreateAccessGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessGrantRequest;
      output: CreateAccessGrantResult;
    };
    sdk: {
      input: CreateAccessGrantCommandInput;
      output: CreateAccessGrantCommandOutput;
    };
  };
}
