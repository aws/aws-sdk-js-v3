// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccessGrantsInstancesRequest, ListAccessGrantsInstancesResult } from "../models/models_0";
import { ListAccessGrantsInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccessGrantsInstancesCommand}.
 */
export interface ListAccessGrantsInstancesCommandInput extends ListAccessGrantsInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessGrantsInstancesCommand}.
 */
export interface ListAccessGrantsInstancesCommandOutput extends ListAccessGrantsInstancesResult, __MetadataBearer {}

/**
 * <p>Returns a list of S3 Access Grants instances. An S3 Access Grants instance serves as a logical grouping for your individual access grants. You can only have one S3 Access Grants instance per Region per account.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:ListAccessGrantsInstances</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListAccessGrantsInstancesCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListAccessGrantsInstancesCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // ListAccessGrantsInstancesRequest
 *   AccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAccessGrantsInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessGrantsInstancesResult
 * //   NextToken: "STRING_VALUE",
 * //   AccessGrantsInstancesList: [ // AccessGrantsInstancesList
 * //     { // ListAccessGrantsInstanceEntry
 * //       AccessGrantsInstanceId: "STRING_VALUE",
 * //       AccessGrantsInstanceArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       IdentityCenterArn: "STRING_VALUE",
 * //       IdentityCenterInstanceArn: "STRING_VALUE",
 * //       IdentityCenterApplicationArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccessGrantsInstancesCommandInput - {@link ListAccessGrantsInstancesCommandInput}
 * @returns {@link ListAccessGrantsInstancesCommandOutput}
 * @see {@link ListAccessGrantsInstancesCommandInput} for command's `input` shape.
 * @see {@link ListAccessGrantsInstancesCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListAccessGrantsInstancesCommand extends command<ListAccessGrantsInstancesCommandInput, ListAccessGrantsInstancesCommandOutput>(
  _ep0,
  _mw0,
  "ListAccessGrantsInstances",
  ListAccessGrantsInstances$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessGrantsInstancesRequest;
      output: ListAccessGrantsInstancesResult;
    };
    sdk: {
      input: ListAccessGrantsInstancesCommandInput;
      output: ListAccessGrantsInstancesCommandOutput;
    };
  };
}
