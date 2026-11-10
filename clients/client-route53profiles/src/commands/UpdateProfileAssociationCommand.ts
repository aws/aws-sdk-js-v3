// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProfileAssociationRequest, UpdateProfileAssociationResponse } from "../models/models_0";
import { UpdateProfileAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProfileAssociationCommand}.
 */
export interface UpdateProfileAssociationCommandInput extends UpdateProfileAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfileAssociationCommand}.
 */
export interface UpdateProfileAssociationCommandOutput extends UpdateProfileAssociationResponse, __MetadataBearer {}

/**
 * <p> Updates the name or priority of the specified Route 53 Profile association with a VPC. Route 53 VPC Resolver evaluates the Profile associations for a VPC in priority order, starting with the lowest value. Only the account that created the association can update it. </p> <p> When you change the priority, the association status is <code>UPDATING</code> until the change propagates, and then <code>COMPLETE</code>. While the status is <code>UPDATING</code>, Route 53 VPC Resolver might still use the previous priority for some queries. When the status is <code>COMPLETE</code>, the new priority applies to all queries from the VPC. </p> <p> The request fails with a <code>ValidationException</code> if another Profile association for the VPC already uses the priority that you specify, or if the priority is outside the range 100–9900. </p> <p> You can update an association whose status is <code>CREATING</code>, <code>UPDATING</code>, or <code>COMPLETE</code>. The request fails with a <code>ConflictException</code> if the association status is <code>DELETING</code>, <code>DELETED</code>, or <code>FAILED</code>, or if the account that owns the association is inactive. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, UpdateProfileAssociationCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, UpdateProfileAssociationCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // UpdateProfileAssociationRequest
 *   ProfileAssociationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Priority: Number("int"),
 * };
 * const command = new UpdateProfileAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfileAssociationResponse
 * //   ProfileAssociation: { // ProfileAssociation
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     ProfileId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     Status: "COMPLETE" || "DELETING" || "UPDATING" || "CREATING" || "DELETED" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ModificationTime: new Date("TIMESTAMP"),
 * //     Priority: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProfileAssociationCommandInput - {@link UpdateProfileAssociationCommandInput}
 * @returns {@link UpdateProfileAssociationCommandOutput}
 * @see {@link UpdateProfileAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileAssociationCommandOutput} for command's `response` shape.
 * @see {@link Route53ProfilesClientResolvedConfig | config} for Route53ProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The current account doesn't have the IAM permissions required to perform the specified operation. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request you submitted conflicts with an existing request. </p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p> An internal server error occured. Retry your request. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p> One or more parameters in this request are not valid. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p> The request caused one or more limits to be exceeded. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource you are associating is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was throttled. Try again in a few minutes. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> You have provided an invalid command. </p>
 *
 * @throws {@link Route53ProfilesServiceException}
 * <p>Base exception class for all service exceptions from Route53Profiles service.</p>
 *
 *
 * @public
 */
export class UpdateProfileAssociationCommand extends command<UpdateProfileAssociationCommandInput, UpdateProfileAssociationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProfileAssociation",
  UpdateProfileAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProfileAssociationRequest;
      output: UpdateProfileAssociationResponse;
    };
    sdk: {
      input: UpdateProfileAssociationCommandInput;
      output: UpdateProfileAssociationCommandOutput;
    };
  };
}
