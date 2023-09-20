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
import {
  GetTransitGatewayPolicyTableAssociationsRequest,
  GetTransitGatewayPolicyTableAssociationsResult,
} from "../models/models_5";
import {
  de_GetTransitGatewayPolicyTableAssociationsCommand,
  se_GetTransitGatewayPolicyTableAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayPolicyTableAssociationsCommand}.
 */
export interface GetTransitGatewayPolicyTableAssociationsCommandInput
  extends GetTransitGatewayPolicyTableAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayPolicyTableAssociationsCommand}.
 */
export interface GetTransitGatewayPolicyTableAssociationsCommandOutput
  extends GetTransitGatewayPolicyTableAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of the transit gateway policy table associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayPolicyTableAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayPolicyTableAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayPolicyTableAssociationsRequest
 *   TransitGatewayPolicyTableId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetTransitGatewayPolicyTableAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayPolicyTableAssociationsResult
 * //   Associations: [ // TransitGatewayPolicyTableAssociationList
 * //     { // TransitGatewayPolicyTableAssociation
 * //       TransitGatewayPolicyTableId: "STRING_VALUE",
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //       State: "associating" || "associated" || "disassociating" || "disassociated",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayPolicyTableAssociationsCommandInput - {@link GetTransitGatewayPolicyTableAssociationsCommandInput}
 * @returns {@link GetTransitGatewayPolicyTableAssociationsCommandOutput}
 * @see {@link GetTransitGatewayPolicyTableAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayPolicyTableAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetTransitGatewayPolicyTableAssociationsCommand extends $Command<
  GetTransitGatewayPolicyTableAssociationsCommandInput,
  GetTransitGatewayPolicyTableAssociationsCommandOutput,
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
  constructor(readonly input: GetTransitGatewayPolicyTableAssociationsCommandInput) {
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
  ): Handler<
    GetTransitGatewayPolicyTableAssociationsCommandInput,
    GetTransitGatewayPolicyTableAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetTransitGatewayPolicyTableAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetTransitGatewayPolicyTableAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetTransitGatewayPolicyTableAssociations",
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
  private serialize(
    input: GetTransitGatewayPolicyTableAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTransitGatewayPolicyTableAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayPolicyTableAssociationsCommandOutput> {
    return de_GetTransitGatewayPolicyTableAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
