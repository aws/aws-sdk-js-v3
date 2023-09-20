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
  GetTransitGatewayPrefixListReferencesRequest,
  GetTransitGatewayPrefixListReferencesResult,
} from "../models/models_5";
import {
  de_GetTransitGatewayPrefixListReferencesCommand,
  se_GetTransitGatewayPrefixListReferencesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayPrefixListReferencesCommand}.
 */
export interface GetTransitGatewayPrefixListReferencesCommandInput
  extends GetTransitGatewayPrefixListReferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayPrefixListReferencesCommand}.
 */
export interface GetTransitGatewayPrefixListReferencesCommandOutput
  extends GetTransitGatewayPrefixListReferencesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the prefix list references in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayPrefixListReferencesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayPrefixListReferencesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayPrefixListReferencesRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
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
 * const command = new GetTransitGatewayPrefixListReferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayPrefixListReferencesResult
 * //   TransitGatewayPrefixListReferences: [ // TransitGatewayPrefixListReferenceSet
 * //     { // TransitGatewayPrefixListReference
 * //       TransitGatewayRouteTableId: "STRING_VALUE",
 * //       PrefixListId: "STRING_VALUE",
 * //       PrefixListOwnerId: "STRING_VALUE",
 * //       State: "pending" || "available" || "modifying" || "deleting",
 * //       Blackhole: true || false,
 * //       TransitGatewayAttachment: { // TransitGatewayPrefixListAttachment
 * //         TransitGatewayAttachmentId: "STRING_VALUE",
 * //         ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //         ResourceId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayPrefixListReferencesCommandInput - {@link GetTransitGatewayPrefixListReferencesCommandInput}
 * @returns {@link GetTransitGatewayPrefixListReferencesCommandOutput}
 * @see {@link GetTransitGatewayPrefixListReferencesCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayPrefixListReferencesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetTransitGatewayPrefixListReferencesCommand extends $Command<
  GetTransitGatewayPrefixListReferencesCommandInput,
  GetTransitGatewayPrefixListReferencesCommandOutput,
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
  constructor(readonly input: GetTransitGatewayPrefixListReferencesCommandInput) {
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
  ): Handler<GetTransitGatewayPrefixListReferencesCommandInput, GetTransitGatewayPrefixListReferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTransitGatewayPrefixListReferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetTransitGatewayPrefixListReferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetTransitGatewayPrefixListReferences",
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
    input: GetTransitGatewayPrefixListReferencesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTransitGatewayPrefixListReferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayPrefixListReferencesCommandOutput> {
    return de_GetTransitGatewayPrefixListReferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
