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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetAssociatedIpv6PoolCidrsRequest, GetAssociatedIpv6PoolCidrsResult } from "../models/models_5";
import { de_GetAssociatedIpv6PoolCidrsCommand, se_GetAssociatedIpv6PoolCidrsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAssociatedIpv6PoolCidrsCommand}.
 */
export interface GetAssociatedIpv6PoolCidrsCommandInput extends GetAssociatedIpv6PoolCidrsRequest {}
/**
 * @public
 *
 * The output of {@link GetAssociatedIpv6PoolCidrsCommand}.
 */
export interface GetAssociatedIpv6PoolCidrsCommandOutput extends GetAssociatedIpv6PoolCidrsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the IPv6 CIDR block associations for a specified IPv6 address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAssociatedIpv6PoolCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAssociatedIpv6PoolCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetAssociatedIpv6PoolCidrsRequest
 *   PoolId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new GetAssociatedIpv6PoolCidrsCommand(input);
 * const response = await client.send(command);
 * // { // GetAssociatedIpv6PoolCidrsResult
 * //   Ipv6CidrAssociations: [ // Ipv6CidrAssociationSet
 * //     { // Ipv6CidrAssociation
 * //       Ipv6Cidr: "STRING_VALUE",
 * //       AssociatedResource: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAssociatedIpv6PoolCidrsCommandInput - {@link GetAssociatedIpv6PoolCidrsCommandInput}
 * @returns {@link GetAssociatedIpv6PoolCidrsCommandOutput}
 * @see {@link GetAssociatedIpv6PoolCidrsCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedIpv6PoolCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetAssociatedIpv6PoolCidrsCommand extends $Command<
  GetAssociatedIpv6PoolCidrsCommandInput,
  GetAssociatedIpv6PoolCidrsCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: GetAssociatedIpv6PoolCidrsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAssociatedIpv6PoolCidrsCommandInput, GetAssociatedIpv6PoolCidrsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAssociatedIpv6PoolCidrsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetAssociatedIpv6PoolCidrsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetAssociatedIpv6PoolCidrs",
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
  private serialize(input: GetAssociatedIpv6PoolCidrsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAssociatedIpv6PoolCidrsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAssociatedIpv6PoolCidrsCommandOutput> {
    return de_GetAssociatedIpv6PoolCidrsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
