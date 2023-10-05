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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListHostedZonesRequest, ListHostedZonesResponse } from "../models/models_0";
import { de_ListHostedZonesCommand, se_ListHostedZonesCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHostedZonesCommand}.
 */
export interface ListHostedZonesCommandInput extends ListHostedZonesRequest {}
/**
 * @public
 *
 * The output of {@link ListHostedZonesCommand}.
 */
export interface ListHostedZonesCommandOutput extends ListHostedZonesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of the public and private hosted zones that are associated with the
 * 			current Amazon Web Services account. The response includes a <code>HostedZones</code>
 * 			child element for each hosted zone.</p>
 *          <p>Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of
 * 			hosted zones, you can use the <code>maxitems</code> parameter to list them in groups of
 * 			up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ListHostedZonesRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   DelegationSetId: "STRING_VALUE",
 *   HostedZoneType: "PrivateHostedZone",
 * };
 * const command = new ListHostedZonesCommand(input);
 * const response = await client.send(command);
 * // { // ListHostedZonesResponse
 * //   HostedZones: [ // HostedZones // required
 * //     { // HostedZone
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       CallerReference: "STRING_VALUE", // required
 * //       Config: { // HostedZoneConfig
 * //         Comment: "STRING_VALUE",
 * //         PrivateZone: true || false,
 * //       },
 * //       ResourceRecordSetCount: Number("long"),
 * //       LinkedService: { // LinkedService
 * //         ServicePrincipal: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE", // required
 * //   IsTruncated: true || false, // required
 * //   NextMarker: "STRING_VALUE",
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListHostedZonesCommandInput - {@link ListHostedZonesCommandInput}
 * @returns {@link ListHostedZonesCommandOutput}
 * @see {@link ListHostedZonesCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link DelegationSetNotReusable} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchDelegationSet} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class ListHostedZonesCommand extends $Command<
  ListHostedZonesCommandInput,
  ListHostedZonesCommandOutput,
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
  constructor(readonly input: ListHostedZonesCommandInput) {
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
  ): Handler<ListHostedZonesCommandInput, ListHostedZonesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHostedZonesCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListHostedZonesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "ListHostedZones",
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
  private serialize(input: ListHostedZonesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHostedZonesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHostedZonesCommandOutput> {
    return de_ListHostedZonesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
