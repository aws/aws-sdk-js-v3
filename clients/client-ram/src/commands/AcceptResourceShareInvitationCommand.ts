// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptResourceShareInvitationRequest, AcceptResourceShareInvitationResponse } from "../models/models_0";
import { AcceptResourceShareInvitation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptResourceShareInvitationCommand}.
 */
export interface AcceptResourceShareInvitationCommandInput extends AcceptResourceShareInvitationRequest {}
/**
 * @public
 *
 * The output of {@link AcceptResourceShareInvitationCommand}.
 */
export interface AcceptResourceShareInvitationCommandOutput extends AcceptResourceShareInvitationResponse, __MetadataBearer {}

/**
 * Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AcceptResourceShareInvitationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AcceptResourceShareInvitationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // AcceptResourceShareInvitationRequest
 *   resourceShareInvitationArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AcceptResourceShareInvitationCommand(input);
 * const response = await client.send(command);
 * // { // AcceptResourceShareInvitationResponse
 * //   resourceShareInvitation: { // ResourceShareInvitation
 * //     resourceShareInvitationArn: "STRING_VALUE",
 * //     resourceShareName: "STRING_VALUE",
 * //     resourceShareArn: "STRING_VALUE",
 * //     senderAccountId: "STRING_VALUE",
 * //     receiverAccountId: "STRING_VALUE",
 * //     invitationTimestamp: new Date("TIMESTAMP"),
 * //     status: "PENDING" || "ACCEPTED" || "REJECTED" || "EXPIRED",
 * //     resourceShareAssociations: [ // ResourceShareAssociationList
 * //       { // ResourceShareAssociation
 * //         resourceShareArn: "STRING_VALUE",
 * //         resourceShareName: "STRING_VALUE",
 * //         associatedEntity: "STRING_VALUE",
 * //         associationType: "PRINCIPAL" || "RESOURCE" || "SOURCE",
 * //         status: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED" || "SUSPENDED" || "SUSPENDING" || "RESTORING",
 * //         statusMessage: "STRING_VALUE",
 * //         creationTime: new Date("TIMESTAMP"),
 * //         lastUpdatedTime: new Date("TIMESTAMP"),
 * //         external: true || false,
 * //       },
 * //     ],
 * //     receiverArn: "STRING_VALUE",
 * //   },
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AcceptResourceShareInvitationCommandInput - {@link AcceptResourceShareInvitationCommandInput}
 * @returns {@link AcceptResourceShareInvitationCommandOutput}
 * @see {@link AcceptResourceShareInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptResourceShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * The operation failed because the client token input parameter matched one that was used with a previous call to the operation, but at least one of the other input parameters is different from the previous call.
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *
 * The operation failed because the specified client token isn't valid.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The operation failed because the requested operation isn't permitted.
 *
 * @throws {@link ResourceShareInvitationAlreadyAcceptedException} (client fault)
 *
 * The operation failed because the specified invitation was already accepted.
 *
 * @throws {@link ResourceShareInvitationAlreadyRejectedException} (client fault)
 *
 * The operation failed because the specified invitation was already rejected.
 *
 * @throws {@link ResourceShareInvitationArnNotFoundException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) for an invitation was not found.
 *
 * @throws {@link ResourceShareInvitationExpiredException} (client fault)
 *
 * The operation failed because the specified invitation is past its expiration date and time.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link RAMServiceException}
 *
 * Base exception class for all service exceptions from RAM service.
 *
 * @public
 */
export class AcceptResourceShareInvitationCommand extends command<AcceptResourceShareInvitationCommandInput, AcceptResourceShareInvitationCommandOutput>(
  _ep0,
  _mw0,
  "AcceptResourceShareInvitation",
  AcceptResourceShareInvitation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptResourceShareInvitationRequest;
      output: AcceptResourceShareInvitationResponse;
    };
    sdk: {
      input: AcceptResourceShareInvitationCommandInput;
      output: AcceptResourceShareInvitationCommandOutput;
    };
  };
}
