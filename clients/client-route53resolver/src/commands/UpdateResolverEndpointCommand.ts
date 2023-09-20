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

import { UpdateResolverEndpointRequest, UpdateResolverEndpointResponse } from "../models/models_0";
import { de_UpdateResolverEndpointCommand, se_UpdateResolverEndpointCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateResolverEndpointCommand}.
 */
export interface UpdateResolverEndpointCommandInput extends UpdateResolverEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResolverEndpointCommand}.
 */
export interface UpdateResolverEndpointCommandOutput extends UpdateResolverEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the name, or enpoint type for an inbound or an outbound Resolver endpoint.
 * 			You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // UpdateResolverEndpointRequest
 *   ResolverEndpointId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   ResolverEndpointType: "IPV6" || "IPV4" || "DUALSTACK",
 *   UpdateIpAddresses: [ // UpdateIpAddresses
 *     { // UpdateIpAddress
 *       IpId: "STRING_VALUE", // required
 *       Ipv6: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateResolverEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResolverEndpointResponse
 * //   ResolverEndpoint: { // ResolverEndpoint
 * //     Id: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     SecurityGroupIds: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     Direction: "INBOUND" || "OUTBOUND",
 * //     IpAddressCount: Number("int"),
 * //     HostVPCId: "STRING_VALUE",
 * //     Status: "CREATING" || "OPERATIONAL" || "UPDATING" || "AUTO_RECOVERING" || "ACTION_NEEDED" || "DELETING",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //     ResolverEndpointType: "IPV6" || "IPV4" || "DUALSTACK",
 * //     OutpostArn: "STRING_VALUE",
 * //     PreferredInstanceType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateResolverEndpointCommandInput - {@link UpdateResolverEndpointCommandInput}
 * @returns {@link UpdateResolverEndpointCommandOutput}
 * @see {@link UpdateResolverEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
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
export class UpdateResolverEndpointCommand extends $Command<
  UpdateResolverEndpointCommandInput,
  UpdateResolverEndpointCommandOutput,
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
  constructor(readonly input: UpdateResolverEndpointCommandInput) {
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
  ): Handler<UpdateResolverEndpointCommandInput, UpdateResolverEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResolverEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "UpdateResolverEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Resolver",
        operation: "UpdateResolverEndpoint",
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
  private serialize(input: UpdateResolverEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateResolverEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResolverEndpointCommandOutput> {
    return de_UpdateResolverEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
