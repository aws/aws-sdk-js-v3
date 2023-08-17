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
} from "@smithy/types";

import { ListResolverEndpointIpAddressesRequest, ListResolverEndpointIpAddressesResponse } from "../models/models_0";
import {
  de_ListResolverEndpointIpAddressesCommand,
  se_ListResolverEndpointIpAddressesCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResolverEndpointIpAddressesCommand}.
 */
export interface ListResolverEndpointIpAddressesCommandInput extends ListResolverEndpointIpAddressesRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverEndpointIpAddressesCommand}.
 */
export interface ListResolverEndpointIpAddressesCommandOutput
  extends ListResolverEndpointIpAddressesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the IP addresses for a specified Resolver endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverEndpointIpAddressesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverEndpointIpAddressesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverEndpointIpAddressesRequest
 *   ResolverEndpointId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResolverEndpointIpAddressesCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverEndpointIpAddressesResponse
 * //   NextToken: "STRING_VALUE",
 * //   MaxResults: Number("int"),
 * //   IpAddresses: [ // IpAddressesResponse
 * //     { // IpAddressResponse
 * //       IpId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       Ip: "STRING_VALUE",
 * //       Ipv6: "STRING_VALUE",
 * //       Status: "CREATING" || "FAILED_CREATION" || "ATTACHING" || "ATTACHED" || "REMAP_DETACHING" || "REMAP_ATTACHING" || "DETACHING" || "FAILED_RESOURCE_GONE" || "DELETING" || "DELETE_FAILED_FAS_EXPIRED" || "UPDATING" || "UPDATE_FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       ModificationTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverEndpointIpAddressesCommandInput - {@link ListResolverEndpointIpAddressesCommandInput}
 * @returns {@link ListResolverEndpointIpAddressesCommandOutput}
 * @see {@link ListResolverEndpointIpAddressesCommandInput} for command's `input` shape.
 * @see {@link ListResolverEndpointIpAddressesCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 */
export class ListResolverEndpointIpAddressesCommand extends $Command<
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput,
  Route53ResolverClientResolvedConfig
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
  constructor(readonly input: ListResolverEndpointIpAddressesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResolverEndpointIpAddressesCommandInput, ListResolverEndpointIpAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResolverEndpointIpAddressesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListResolverEndpointIpAddressesCommand";
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
  private serialize(
    input: ListResolverEndpointIpAddressesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListResolverEndpointIpAddressesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResolverEndpointIpAddressesCommandOutput> {
    return de_ListResolverEndpointIpAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
