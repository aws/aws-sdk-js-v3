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

import { GetHostedZoneRequest, GetHostedZoneResponse } from "../models/models_0";
import {
  deserializeAws_restXmlGetHostedZoneCommand,
  serializeAws_restXmlGetHostedZoneCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 *
 * The input for {@link GetHostedZoneCommand}.
 */
export interface GetHostedZoneCommandInput extends GetHostedZoneRequest {}
/**
 * @public
 *
 * The output of {@link GetHostedZoneCommand}.
 */
export interface GetHostedZoneCommandOutput extends GetHostedZoneResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a specified hosted zone including the four name servers
 * 			assigned to the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // GetHostedZoneRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetHostedZoneCommandInput - {@link GetHostedZoneCommandInput}
 * @returns {@link GetHostedZoneCommandOutput}
 * @see {@link GetHostedZoneCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 *
 * @example To get information about a hosted zone
 * ```javascript
 * // The following example gets information about the Z3M3LMPEXAMPLE hosted zone.
 * const input = {
 *   "Id": "Z3M3LMPEXAMPLE"
 * };
 * const command = new GetHostedZoneCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DelegationSet": {
 *     "NameServers": [
 *       "ns-2048.awsdns-64.com",
 *       "ns-2049.awsdns-65.net",
 *       "ns-2050.awsdns-66.org",
 *       "ns-2051.awsdns-67.co.uk"
 *     ]
 *   },
 *   "HostedZone": {
 *     "CallerReference": "C741617D-04E4-F8DE-B9D7-0D150FC61C2E",
 *     "Config": {
 *       "PrivateZone": false
 *     },
 *     "Id": "/hostedzone/Z3M3LMPEXAMPLE",
 *     "Name": "myawsbucket.com.",
 *     "ResourceRecordSetCount": 8
 *   }
 * }
 * *\/
 * // example id: to-get-information-about-a-hosted-zone-1481752361124
 * ```
 *
 */
export class GetHostedZoneCommand extends $Command<
  GetHostedZoneCommandInput,
  GetHostedZoneCommandOutput,
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
  constructor(readonly input: GetHostedZoneCommandInput) {
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
  ): Handler<GetHostedZoneCommandInput, GetHostedZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetHostedZoneCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHostedZoneCommand";
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
  private serialize(input: GetHostedZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetHostedZoneCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHostedZoneCommandOutput> {
    return deserializeAws_restXmlGetHostedZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
