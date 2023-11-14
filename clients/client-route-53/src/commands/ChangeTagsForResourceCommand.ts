// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ChangeTagsForResourceRequest, ChangeTagsForResourceResponse } from "../models/models_0";
import { de_ChangeTagsForResourceCommand, se_ChangeTagsForResourceCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ChangeTagsForResourceCommand}.
 */
export interface ChangeTagsForResourceCommandInput extends ChangeTagsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ChangeTagsForResourceCommand}.
 */
export interface ChangeTagsForResourceCommandOutput extends ChangeTagsForResourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds, edits, or deletes tags for a health check or a hosted zone.</p>
 *          <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 * 				Tags</a> in the <i>Billing and Cost Management User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ChangeTagsForResourceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ChangeTagsForResourceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ChangeTagsForResourceRequest
 *   ResourceType: "healthcheck" || "hostedzone", // required
 *   ResourceId: "STRING_VALUE", // required
 *   AddTags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveTagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ChangeTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ChangeTagsForResourceCommandInput - {@link ChangeTagsForResourceCommandInput}
 * @returns {@link ChangeTagsForResourceCommandOutput}
 * @see {@link ChangeTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ChangeTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHealthCheck} (client fault)
 *  <p>No health check exists with the specified ID.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *  <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @example To add or remove tags from a hosted zone or health check
 * ```javascript
 * // The following example adds two tags and removes one tag from the hosted zone with ID Z3M3LMPEXAMPLE.
 * const input = {
 *   "AddTags": [
 *     {
 *       "Key": "apex",
 *       "Value": "3874"
 *     },
 *     {
 *       "Key": "acme",
 *       "Value": "4938"
 *     }
 *   ],
 *   "RemoveTagKeys": [
 *     "Nadir"
 *   ],
 *   "ResourceId": "Z3M3LMPEXAMPLE",
 *   "ResourceType": "hostedzone"
 * };
 * const command = new ChangeTagsForResourceCommand(input);
 * await client.send(command);
 * // example id: to-add-or-remove-tags-from-a-hosted-zone-or-health-check-1484084752409
 * ```
 *
 */
export class ChangeTagsForResourceCommand extends $Command<
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
  Route53ClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ChangeTagsForResourceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ChangeTagsForResourceCommandInput, ChangeTagsForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ChangeTagsForResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ChangeTagsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "ChangeTagsForResource",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ChangeTagsForResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ChangeTagsForResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChangeTagsForResourceCommandOutput> {
    return de_ChangeTagsForResourceCommand(output, context);
  }
}
