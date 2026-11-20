// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEventRequest, GetEventResponse } from "../models/models_0";
import { GetEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEventCommand}.
 */
export interface GetEventCommandInput extends GetEventRequest {}
/**
 * @public
 *
 * The output of {@link GetEventCommand}.
 */
export interface GetEventCommandOutput extends GetEventResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of the specified event for the specified web ACL, including the event actors that are associated with the event and the event timeline. Currently, this operation supports API Security Amazon Web Services Managed Rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetEventCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetEventCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GetEventRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   EventId: "STRING_VALUE", // required
 *   WebAclArn: "STRING_VALUE", // required
 * };
 * const command = new GetEventCommand(input);
 * const response = await client.send(command);
 * // { // GetEventResponse
 * //   Event: { // EventDetailSummary
 * //     EventId: "STRING_VALUE", // required
 * //     EventStatus: "EVENT_STARTED" || "EVENT_IN_PROGRESS" || "EVENT_COMPLETED" || "EVENT_ENDED",
 * //     EventCategory: "API_SECURITY",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ResourceArn: "STRING_VALUE",
 * //     WebAclArn: "STRING_VALUE",
 * //     ApiSecurityEventDetail: { // ApiSecurityEventDetail
 * //       Label: "STRING_VALUE",
 * //       Category: "STRING_VALUE",
 * //       Confidence: "LOW" || "MEDIUM" || "HIGH",
 * //       ApiPatterns: [ // ApiPatternList
 * //         { // ApiPattern
 * //           Method: "STRING_VALUE",
 * //           PathPattern: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           Domains: [ // DomainList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       EventActors: [ // EventActorReferenceList
 * //         { // EventActorReference
 * //           EventActorId: "STRING_VALUE",
 * //           EventActorValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Timeline: [ // EventTimelineEntryList
 * //         { // EventTimelineEntry
 * //           ChangeTime: new Date("TIMESTAMP"),
 * //           Label: "STRING_VALUE",
 * //           Confidence: "LOW" || "MEDIUM" || "HIGH",
 * //           ApiPatterns: [
 * //             {
 * //               Method: "STRING_VALUE",
 * //               PathPattern: "STRING_VALUE",
 * //               Port: Number("int"),
 * //               Domains: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventCommandInput - {@link GetEventCommandInput}
 * @returns {@link GetEventCommandOutput}
 * @see {@link GetEventCommandInput} for command's `input` shape.
 * @see {@link GetEventCommandOutput} for command's `response` shape.
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
export class GetEventCommand extends command<GetEventCommandInput, GetEventCommandOutput>(
  _ep0,
  _mw0,
  "GetEvent",
  GetEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventRequest;
      output: GetEventResponse;
    };
    sdk: {
      input: GetEventCommandInput;
      output: GetEventCommandOutput;
    };
  };
}
