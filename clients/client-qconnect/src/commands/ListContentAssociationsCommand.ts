// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContentAssociationsRequest, ListContentAssociationsResponse } from "../models/models_0";
import { ListContentAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContentAssociationsCommand}.
 */
export interface ListContentAssociationsCommandInput extends ListContentAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListContentAssociationsCommand}.
 */
export interface ListContentAssociationsCommandOutput extends ListContentAssociationsResponse, __MetadataBearer {}

/**
 * Lists the content associations.
 *
 * For more information about content associations--what they are and when they are used--see [Integrate Amazon Q in Connect with step-by-step guides](https://docs.aws.amazon.com/connect/latest/adminguide/integrate-q-with-guides.html) in the *Connect Customer Administrator Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListContentAssociationsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListContentAssociationsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ListContentAssociationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentId: "STRING_VALUE", // required
 * };
 * const command = new ListContentAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListContentAssociationsResponse
 * //   contentAssociationSummaries: [ // ContentAssociationSummaryList // required
 * //     { // ContentAssociationSummary
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       contentId: "STRING_VALUE", // required
 * //       contentArn: "STRING_VALUE", // required
 * //       contentAssociationId: "STRING_VALUE", // required
 * //       contentAssociationArn: "STRING_VALUE", // required
 * //       associationType: "STRING_VALUE", // required
 * //       associationData: { // ContentAssociationContents Union: only one key present
 * //         amazonConnectGuideAssociation: { // AmazonConnectGuideAssociationData
 * //           flowId: "STRING_VALUE",
 * //         },
 * //       },
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContentAssociationsCommandInput - {@link ListContentAssociationsCommandInput}
 * @returns {@link ListContentAssociationsCommandOutput}
 * @see {@link ListContentAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListContentAssociationsCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class ListContentAssociationsCommand extends command<ListContentAssociationsCommandInput, ListContentAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListContentAssociations",
  ListContentAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContentAssociationsRequest;
      output: ListContentAssociationsResponse;
    };
    sdk: {
      input: ListContentAssociationsCommandInput;
      output: ListContentAssociationsCommandOutput;
    };
  };
}
