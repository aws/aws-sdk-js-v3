// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEventActorRequest, GetEventActorResponse } from "../models/models_0";
import { GetEventActor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEventActorCommand}.
 */
export interface GetEventActorCommandInput extends GetEventActorRequest {}
/**
 * @public
 *
 * The output of {@link GetEventActorCommand}.
 */
export interface GetEventActorCommandOutput extends GetEventActorResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of the specified event actor. An event actor is a client that is associated with one or more events. The details include the latest observed attributes of the event actor, the events that it's associated with, and the history of changes to its attributes. Currently, this operation supports API Security Amazon Web Services Managed Rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetEventActorCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetEventActorCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GetEventActorRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   EventActorId: "STRING_VALUE", // required
 * };
 * const command = new GetEventActorCommand(input);
 * const response = await client.send(command);
 * // { // GetEventActorResponse
 * //   EventActor: { // EventActorDetail
 * //     Summary: { // EventActorDetailSummary
 * //       EventActorId: "STRING_VALUE", // required
 * //       ClientIp: "STRING_VALUE",
 * //       TlsFingerprint: "STRING_VALUE",
 * //       Asn: "STRING_VALUE",
 * //       AsnOrganization: "STRING_VALUE",
 * //       Country: "STRING_VALUE",
 * //       AuthFingerprint: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     Events: [ // RelatedEventList
 * //       { // RelatedEvent
 * //         EventId: "STRING_VALUE",
 * //         StartTime: new Date("TIMESTAMP"),
 * //         Label: "STRING_VALUE",
 * //         Category: "STRING_VALUE",
 * //         Confidence: "LOW" || "MEDIUM" || "HIGH",
 * //         ApiPatterns: [ // ApiPatternList
 * //           { // ApiPattern
 * //             Method: "STRING_VALUE",
 * //             PathPattern: "STRING_VALUE",
 * //             Port: Number("int"),
 * //             Domains: [ // DomainList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Changes: [ // EventActorChangeList
 * //       { // EventActorChange
 * //         ChangeTime: new Date("TIMESTAMP"),
 * //         ClientIp: "STRING_VALUE",
 * //         TlsFingerprint: "STRING_VALUE",
 * //         Asn: "STRING_VALUE",
 * //         AsnOrganization: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventActorCommandInput - {@link GetEventActorCommandInput}
 * @returns {@link GetEventActorCommandOutput}
 * @see {@link GetEventActorCommandInput} for command's `input` shape.
 * @see {@link GetEventActorCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class GetEventActorCommand extends command<GetEventActorCommandInput, GetEventActorCommandOutput>(
  _ep0,
  _mw0,
  "GetEventActor",
  GetEventActor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventActorRequest;
      output: GetEventActorResponse;
    };
    sdk: {
      input: GetEventActorCommandInput;
      output: GetEventActorCommandOutput;
    };
  };
}
