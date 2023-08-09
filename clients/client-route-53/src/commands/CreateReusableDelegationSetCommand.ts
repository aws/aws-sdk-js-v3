// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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
} from "@smithy/types";

import { CreateReusableDelegationSetRequest, CreateReusableDelegationSetResponse } from "../models/models_0";
import { de_CreateReusableDelegationSetCommand, se_CreateReusableDelegationSetCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReusableDelegationSetCommand}.
 */
export interface CreateReusableDelegationSetCommandInput extends CreateReusableDelegationSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateReusableDelegationSetCommand}.
 */
export interface CreateReusableDelegationSetCommandOutput
  extends CreateReusableDelegationSetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a delegation set (a group of four name servers) that can be reused by multiple
 * 			hosted zones that were created by the same Amazon Web Services account. </p>
 *          <p>You can also create a reusable delegation set that uses the four name servers that are
 * 			associated with an existing hosted zone. Specify the hosted zone ID in the
 * 				<code>CreateReusableDelegationSet</code> request.</p>
 *          <note>
 *             <p>You can't associate a reusable delegation set with a private hosted zone.</p>
 *          </note>
 *          <p>For information about using a reusable delegation set to configure white label name
 * 			servers, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/white-label-name-servers.html">Configuring White
 * 				Label Name Servers</a>.</p>
 *          <p>The process for migrating existing hosted zones to use a reusable delegation set is
 * 			comparable to the process for configuring white label name servers. You need to perform
 * 			the following steps:</p>
 *          <ol>
 *             <li>
 *                <p>Create a reusable delegation set.</p>
 *             </li>
 *             <li>
 *                <p>Recreate hosted zones, and reduce the TTL to 60 seconds or less.</p>
 *             </li>
 *             <li>
 *                <p>Recreate resource record sets in the new hosted zones.</p>
 *             </li>
 *             <li>
 *                <p>Change the registrar's name servers to use the name servers for the new hosted
 * 					zones.</p>
 *             </li>
 *             <li>
 *                <p>Monitor traffic for the website or application.</p>
 *             </li>
 *             <li>
 *                <p>Change TTLs back to their original values.</p>
 *             </li>
 *          </ol>
 *          <p>If you want to migrate existing hosted zones to use a reusable delegation set, the
 * 			existing hosted zones can't use any of the name servers that are assigned to the
 * 			reusable delegation set. If one or more hosted zones do use one or more name servers
 * 			that are assigned to the reusable delegation set, you can do one of the
 * 			following:</p>
 *          <ul>
 *             <li>
 *                <p>For small numbers of hosted zones—up to a few hundred—it's
 * 					relatively easy to create reusable delegation sets until you get one that has
 * 					four name servers that don't overlap with any of the name servers in your hosted
 * 					zones.</p>
 *             </li>
 *             <li>
 *                <p>For larger numbers of hosted zones, the easiest solution is to use more than
 * 					one reusable delegation set.</p>
 *             </li>
 *             <li>
 *                <p>For larger numbers of hosted zones, you can also migrate hosted zones that
 * 					have overlapping name servers to hosted zones that don't have overlapping name
 * 					servers, then migrate the hosted zones again to use the reusable delegation
 * 					set.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // CreateReusableDelegationSetRequest
 *   CallerReference: "STRING_VALUE", // required
 *   HostedZoneId: "STRING_VALUE",
 * };
 * const command = new CreateReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateReusableDelegationSetResponse
 * //   DelegationSet: { // DelegationSet
 * //     Id: "STRING_VALUE",
 * //     CallerReference: "STRING_VALUE",
 * //     NameServers: [ // DelegationSetNameServers // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateReusableDelegationSetCommandInput - {@link CreateReusableDelegationSetCommandInput}
 * @returns {@link CreateReusableDelegationSetCommandOutput}
 * @see {@link CreateReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link CreateReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link DelegationSetAlreadyCreated} (client fault)
 *  <p>A delegation set with the same owner and caller reference combination has already been
 * 			created.</p>
 *
 * @throws {@link DelegationSetAlreadyReusable} (client fault)
 *  <p>The specified delegation set has already been marked as reusable.</p>
 *
 * @throws {@link DelegationSetNotAvailable} (client fault)
 *  <p>You can create a hosted zone that has the same name as an existing hosted zone
 * 			(example.com is common), but there is a limit to the number of hosted zones that have
 * 			the same name. If you get this error, Amazon Route 53 has reached that limit. If you own
 * 			the domain name and Route 53 generates this error, contact Customer Support.</p>
 *
 * @throws {@link HostedZoneNotFound} (client fault)
 *  <p>The specified HostedZone can't be found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>Parameter name is not valid.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link LimitsExceeded} (client fault)
 *  <p>This operation can't be completed because the current account has reached the
 * 			limit on the resource you are trying to create. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class CreateReusableDelegationSetCommand extends $Command<
  CreateReusableDelegationSetCommandInput,
  CreateReusableDelegationSetCommandOutput,
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
  constructor(readonly input: CreateReusableDelegationSetCommandInput) {
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
  ): Handler<CreateReusableDelegationSetCommandInput, CreateReusableDelegationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReusableDelegationSetCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateReusableDelegationSetCommand";
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
  private serialize(input: CreateReusableDelegationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateReusableDelegationSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReusableDelegationSetCommandOutput> {
    return de_CreateReusableDelegationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
