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
import { AssociateSubnetCidrBlockRequest, AssociateSubnetCidrBlockResult } from "../models/models_0";
import { de_AssociateSubnetCidrBlockCommand, se_AssociateSubnetCidrBlockCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateSubnetCidrBlockCommand}.
 */
export interface AssociateSubnetCidrBlockCommandInput extends AssociateSubnetCidrBlockRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSubnetCidrBlockCommand}.
 */
export interface AssociateSubnetCidrBlockCommandOutput extends AssociateSubnetCidrBlockResult, __MetadataBearer {}

/**
 * @public
 * <p>Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR
 *             block with your subnet. An IPv6 CIDR block must have a prefix length of /64.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateSubnetCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateSubnetCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateSubnetCidrBlockRequest
 *   Ipv6CidrBlock: "STRING_VALUE", // required
 *   SubnetId: "STRING_VALUE", // required
 * };
 * const command = new AssociateSubnetCidrBlockCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSubnetCidrBlockResult
 * //   Ipv6CidrBlockAssociation: { // SubnetIpv6CidrBlockAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     Ipv6CidrBlock: "STRING_VALUE",
 * //     Ipv6CidrBlockState: { // SubnetCidrBlockState
 * //       State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   },
 * //   SubnetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateSubnetCidrBlockCommandInput - {@link AssociateSubnetCidrBlockCommandInput}
 * @returns {@link AssociateSubnetCidrBlockCommandOutput}
 * @see {@link AssociateSubnetCidrBlockCommandInput} for command's `input` shape.
 * @see {@link AssociateSubnetCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class AssociateSubnetCidrBlockCommand extends $Command<
  AssociateSubnetCidrBlockCommandInput,
  AssociateSubnetCidrBlockCommandOutput,
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
  constructor(readonly input: AssociateSubnetCidrBlockCommandInput) {
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
  ): Handler<AssociateSubnetCidrBlockCommandInput, AssociateSubnetCidrBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateSubnetCidrBlockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateSubnetCidrBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "AssociateSubnetCidrBlock",
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
  private serialize(input: AssociateSubnetCidrBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateSubnetCidrBlockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateSubnetCidrBlockCommandOutput> {
    return de_AssociateSubnetCidrBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
