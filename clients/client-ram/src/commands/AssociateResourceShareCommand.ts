// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateResourceShareRequest, AssociateResourceShareResponse } from "../models/models_0";
import { AssociateResourceShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateResourceShareCommand}.
 */
export interface AssociateResourceShareCommandInput extends AssociateResourceShareRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResourceShareCommand}.
 */
export interface AssociateResourceShareCommandOutput extends AssociateResourceShareResponse, __MetadataBearer {}

/**
 * Adds the specified list of principals, resources, and source constraints to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AssociateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AssociateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // AssociateResourceShareRequest
 *   resourceShareArn: "STRING_VALUE", // required
 *   resourceArns: [ // ResourceArnList
 *     "STRING_VALUE",
 *   ],
 *   principals: [ // PrincipalArnOrIdList
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 *   sources: [ // SourceArnOrAccountList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateResourceShareCommand(input);
 * const response = await client.send(command);
 * // { // AssociateResourceShareResponse
 * //   resourceShareAssociations: [ // ResourceShareAssociationList
 * //     { // ResourceShareAssociation
 * //       resourceShareArn: "STRING_VALUE",
 * //       resourceShareName: "STRING_VALUE",
 * //       associatedEntity: "STRING_VALUE",
 * //       associationType: "PRINCIPAL" || "RESOURCE" || "SOURCE",
 * //       status: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED" || "SUSPENDED" || "SUSPENDING" || "RESTORING",
 * //       statusMessage: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       external: true || false,
 * //     },
 * //   ],
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateResourceShareCommandInput - {@link AssociateResourceShareCommandInput}
 * @returns {@link AssociateResourceShareCommandOutput}
 * @see {@link AssociateResourceShareCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceShareCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *
 * The operation failed because the requested operation isn't valid for the resource share in its current state.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The operation failed because the requested operation isn't permitted.
 *
 * @throws {@link ResourceShareLimitExceededException} (client fault)
 *
 * The operation failed because it would exceed the limit for resource shares for your account. You can associate up to 100 resources per call. To view the limits for your Amazon Web Services account, see the [RAM page in the Service Quotas console](https://console.aws.amazon.com/servicequotas/home/services/ram/quotas).
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The operation failed because it exceeded the rate at which you are allowed to perform this operation. Please try again later.
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
export class AssociateResourceShareCommand extends command<AssociateResourceShareCommandInput, AssociateResourceShareCommandOutput>(
  _ep0,
  _mw0,
  "AssociateResourceShare",
  AssociateResourceShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateResourceShareRequest;
      output: AssociateResourceShareResponse;
    };
    sdk: {
      input: AssociateResourceShareCommandInput;
      output: AssociateResourceShareCommandOutput;
    };
  };
}
