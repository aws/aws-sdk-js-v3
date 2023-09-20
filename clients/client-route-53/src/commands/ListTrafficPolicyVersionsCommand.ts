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

import { ListTrafficPolicyVersionsRequest, ListTrafficPolicyVersionsResponse } from "../models/models_0";
import { de_ListTrafficPolicyVersionsCommand, se_ListTrafficPolicyVersionsCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTrafficPolicyVersionsCommand}.
 */
export interface ListTrafficPolicyVersionsCommandInput extends ListTrafficPolicyVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficPolicyVersionsCommand}.
 */
export interface ListTrafficPolicyVersionsCommandOutput extends ListTrafficPolicyVersionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about all of the versions for a specified traffic policy.</p>
 *          <p>Traffic policy versions are listed in numerical order by
 * 			<code>VersionNumber</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyVersionsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyVersionsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ListTrafficPolicyVersionsRequest
 *   Id: "STRING_VALUE", // required
 *   TrafficPolicyVersionMarker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListTrafficPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficPolicyVersionsResponse
 * //   TrafficPolicies: [ // TrafficPolicies // required
 * //     { // TrafficPolicy
 * //       Id: "STRING_VALUE", // required
 * //       Version: Number("int"), // required
 * //       Name: "STRING_VALUE", // required
 * //       Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS", // required
 * //       Document: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE",
 * //     },
 * //   ],
 * //   IsTruncated: true || false, // required
 * //   TrafficPolicyVersionMarker: "STRING_VALUE", // required
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListTrafficPolicyVersionsCommandInput - {@link ListTrafficPolicyVersionsCommandInput}
 * @returns {@link ListTrafficPolicyVersionsCommandOutput}
 * @see {@link ListTrafficPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyVersionsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicy} (client fault)
 *  <p>No traffic policy exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class ListTrafficPolicyVersionsCommand extends $Command<
  ListTrafficPolicyVersionsCommandInput,
  ListTrafficPolicyVersionsCommandOutput,
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
  constructor(readonly input: ListTrafficPolicyVersionsCommandInput) {
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
  ): Handler<ListTrafficPolicyVersionsCommandInput, ListTrafficPolicyVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrafficPolicyVersionsCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListTrafficPolicyVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "ListTrafficPolicyVersions",
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
  private serialize(input: ListTrafficPolicyVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTrafficPolicyVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrafficPolicyVersionsCommandOutput> {
    return de_ListTrafficPolicyVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
