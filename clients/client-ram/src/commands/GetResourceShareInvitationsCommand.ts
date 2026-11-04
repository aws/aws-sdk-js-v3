// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourceShareInvitationsRequest, GetResourceShareInvitationsResponse } from "../models/models_0";
import { GetResourceShareInvitations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourceShareInvitationsCommand}.
 */
export interface GetResourceShareInvitationsCommandInput extends GetResourceShareInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceShareInvitationsCommand}.
 */
export interface GetResourceShareInvitationsCommandOutput extends GetResourceShareInvitationsResponse, __MetadataBearer {}

/**
 * Retrieves details about invitations that you have received for resource shares.
 *
 * > **Note:** Always check the `NextToken` response parameter for a `null` value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The `NextToken` response parameter value is `null` *only* when there are no more results to display.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceShareInvitationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceShareInvitationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // GetResourceShareInvitationsRequest
 *   resourceShareInvitationArns: [ // ResourceShareInvitationArnList
 *     "STRING_VALUE",
 *   ],
 *   resourceShareArns: [ // ResourceShareArnList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetResourceShareInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceShareInvitationsResponse
 * //   resourceShareInvitations: [ // ResourceShareInvitationList
 * //     { // ResourceShareInvitation
 * //       resourceShareInvitationArn: "STRING_VALUE",
 * //       resourceShareName: "STRING_VALUE",
 * //       resourceShareArn: "STRING_VALUE",
 * //       senderAccountId: "STRING_VALUE",
 * //       receiverAccountId: "STRING_VALUE",
 * //       invitationTimestamp: new Date("TIMESTAMP"),
 * //       status: "PENDING" || "ACCEPTED" || "REJECTED" || "EXPIRED",
 * //       resourceShareAssociations: [ // ResourceShareAssociationList
 * //         { // ResourceShareAssociation
 * //           resourceShareArn: "STRING_VALUE",
 * //           resourceShareName: "STRING_VALUE",
 * //           associatedEntity: "STRING_VALUE",
 * //           associationType: "PRINCIPAL" || "RESOURCE" || "SOURCE",
 * //           status: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED" || "SUSPENDED" || "SUSPENDING" || "RESTORING",
 * //           statusMessage: "STRING_VALUE",
 * //           creationTime: new Date("TIMESTAMP"),
 * //           lastUpdatedTime: new Date("TIMESTAMP"),
 * //           external: true || false,
 * //         },
 * //       ],
 * //       receiverArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceShareInvitationsCommandInput - {@link GetResourceShareInvitationsCommandInput}
 * @returns {@link GetResourceShareInvitationsCommandOutput}
 * @see {@link GetResourceShareInvitationsCommandInput} for command's `input` shape.
 * @see {@link GetResourceShareInvitationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *
 * The operation failed because the specified value for `MaxResults` isn't valid.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The operation failed because the specified value for `NextToken` isn't valid. You must specify a value you received in the `NextToken` response of a previous call to this operation.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link ResourceShareInvitationArnNotFoundException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) for an invitation was not found.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link UnknownResourceException} (client fault)
 *
 * The operation failed because a specified resource couldn't be found.
 *
 * @throws {@link RAMServiceException}
 *
 * Base exception class for all service exceptions from RAM service.
 *
 * @public
 */
export class GetResourceShareInvitationsCommand extends command<GetResourceShareInvitationsCommandInput, GetResourceShareInvitationsCommandOutput>(
  _ep0,
  _mw0,
  "GetResourceShareInvitations",
  GetResourceShareInvitations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceShareInvitationsRequest;
      output: GetResourceShareInvitationsResponse;
    };
    sdk: {
      input: GetResourceShareInvitationsCommandInput;
      output: GetResourceShareInvitationsCommandOutput;
    };
  };
}
