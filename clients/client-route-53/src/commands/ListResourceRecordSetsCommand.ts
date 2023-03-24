// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ListResourceRecordSetsRequest, ListResourceRecordSetsResponse } from "../models/models_0";
import {
  deserializeAws_restXmlListResourceRecordSetsCommand,
  serializeAws_restXmlListResourceRecordSetsCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 *
 * The input for {@link ListResourceRecordSetsCommand}.
 */
export interface ListResourceRecordSetsCommandInput extends ListResourceRecordSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceRecordSetsCommand}.
 */
export interface ListResourceRecordSetsCommandOutput extends ListResourceRecordSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the resource record sets in a specified hosted zone.</p>
 *          <p>
 *             <code>ListResourceRecordSets</code> returns up to 300 resource record sets at a time
 * 			in ASCII order, beginning at a position specified by the <code>name</code> and
 * 				<code>type</code> elements.</p>
 *          <p>
 *             <b>Sort order</b>
 *          </p>
 *          <p>
 *             <code>ListResourceRecordSets</code> sorts results first by DNS name with the labels
 * 			reversed, for example:</p>
 *          <p>
 *             <code>com.example.www.</code>
 *          </p>
 *          <p>Note the trailing dot, which can change the sort order when the record name contains
 * 			characters that appear before <code>.</code> (decimal 46) in the ASCII table. These
 * 			characters include the following: <code>! " # $ % & ' ( ) * + , -</code>
 *          </p>
 *          <p>When multiple records have the same DNS name, <code>ListResourceRecordSets</code>
 * 			sorts results by the record type.</p>
 *          <p>
 *             <b>Specifying where to start listing records</b>
 *          </p>
 *          <p>You can use the name and type elements to specify the resource record set that the
 * 			list begins with:</p>
 *          <dl>
 *             <dt>If you do not specify Name or Type</dt>
 *             <dd>
 *                <p>The results begin with the first resource record set that the hosted zone
 * 						contains.</p>
 *             </dd>
 *             <dt>If you specify Name but not Type</dt>
 *             <dd>
 *                <p>The results begin with the first resource record set in the list whose
 * 						name is greater than or equal to <code>Name</code>.</p>
 *             </dd>
 *             <dt>If you specify Type but not Name</dt>
 *             <dd>
 *                <p>Amazon Route 53 returns the <code>InvalidInput</code> error.</p>
 *             </dd>
 *             <dt>If you specify both Name and Type</dt>
 *             <dd>
 *                <p>The results begin with the first resource record set in the list whose
 * 						name is greater than or equal to <code>Name</code>, and whose type is
 * 						greater than or equal to <code>Type</code>.</p>
 *             </dd>
 *          </dl>
 *          <p>
 *             <b>Resource record sets that are PENDING</b>
 *          </p>
 *          <p>This action returns the most current version of the records. This includes records
 * 			that are <code>PENDING</code>, and that are not yet available on all Route 53 DNS
 * 			servers.</p>
 *          <p>
 *             <b>Changing resource record sets</b>
 *          </p>
 *          <p>To ensure that you get an accurate listing of the resource record sets for a hosted
 * 			zone at a point in time, do not submit a <code>ChangeResourceRecordSets</code> request
 * 			while you're paging through the results of a <code>ListResourceRecordSets</code>
 * 			request. If you do, some pages may display results without the latest changes while
 * 			other pages display results with the latest changes.</p>
 *          <p>
 *             <b>Displaying the next page of results</b>
 *          </p>
 *          <p>If a <code>ListResourceRecordSets</code> command returns more than one page of
 * 			results, the value of <code>IsTruncated</code> is <code>true</code>. To display the next
 * 			page of results, get the values of <code>NextRecordName</code>,
 * 				<code>NextRecordType</code>, and <code>NextRecordIdentifier</code> (if any) from the
 * 			response. Then submit another <code>ListResourceRecordSets</code> request, and specify
 * 			those values for <code>StartRecordName</code>, <code>StartRecordType</code>, and
 * 				<code>StartRecordIdentifier</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListResourceRecordSetsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListResourceRecordSetsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = {
 *   HostedZoneId: "STRING_VALUE", // required
 *   StartRecordName: "STRING_VALUE",
 *   StartRecordType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS",
 *   StartRecordIdentifier: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListResourceRecordSetsCommandInput - {@link ListResourceRecordSetsCommandInput}
 * @returns {@link ListResourceRecordSetsCommandOutput}
 * @see {@link ListResourceRecordSetsCommandInput} for command's `input` shape.
 * @see {@link ListResourceRecordSetsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 *
 */
export class ListResourceRecordSetsCommand extends $Command<
  ListResourceRecordSetsCommandInput,
  ListResourceRecordSetsCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: ListResourceRecordSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceRecordSetsCommandInput, ListResourceRecordSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourceRecordSetsCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListResourceRecordSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListResourceRecordSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListResourceRecordSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourceRecordSetsCommandOutput> {
    return deserializeAws_restXmlListResourceRecordSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
