// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProfileAssociationsRequest, ListProfileAssociationsResponse } from "../models/models_0";
import { ListProfileAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProfileAssociationsCommand}.
 */
export interface ListProfileAssociationsCommandInput extends ListProfileAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListProfileAssociationsCommand}.
 */
export interface ListProfileAssociationsCommandOutput extends ListProfileAssociationsResponse, __MetadataBearer {}

/**
 * Lists all the VPCs that the specified Route 53 Profile is associated with.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ProfilesClient, ListProfileAssociationsCommand } from "@aws-sdk/client-route53profiles"; // ES Modules import
 * // const { Route53ProfilesClient, ListProfileAssociationsCommand } = require("@aws-sdk/client-route53profiles"); // CommonJS import
 * // import type { Route53ProfilesClientConfig } from "@aws-sdk/client-route53profiles";
 * const config = {}; // type is Route53ProfilesClientConfig
 * const client = new Route53ProfilesClient(config);
 * const input = { // ListProfileAssociationsRequest
 *   ResourceId: "STRING_VALUE",
 *   ProfileId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListProfileAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileAssociationsResponse
 * //   ProfileAssociations: [ // ProfileAssociations
 * //     { // ProfileAssociation
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       ProfileId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       Status: "COMPLETE" || "DELETING" || "UPDATING" || "CREATING" || "DELETED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfileAssociationsCommandInput - {@link ListProfileAssociationsCommandInput}
 * @returns {@link ListProfileAssociationsCommandOutput}
 * @see {@link ListProfileAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListProfileAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ProfilesClientResolvedConfig | config} for Route53ProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The current account doesn't have the IAM permissions required to perform the specified operation.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` you provided isn;t valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters in this request are not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled. Try again in a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You have provided an invalid command.
 *
 * @throws {@link Route53ProfilesServiceException}
 *
 * Base exception class for all service exceptions from Route53Profiles service.
 *
 * @public
 */
export class ListProfileAssociationsCommand extends command<ListProfileAssociationsCommandInput, ListProfileAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListProfileAssociations",
  ListProfileAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfileAssociationsRequest;
      output: ListProfileAssociationsResponse;
    };
    sdk: {
      input: ListProfileAssociationsCommandInput;
      output: ListProfileAssociationsCommandOutput;
    };
  };
}
