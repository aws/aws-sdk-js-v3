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
  GetTransitGatewayPolicyTableEntriesRequest,
  GetTransitGatewayPolicyTableEntriesResult,
} from "../models/models_5";
import {
  de_GetTransitGatewayPolicyTableEntriesCommand,
  se_GetTransitGatewayPolicyTableEntriesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayPolicyTableEntriesCommand}.
 */
export interface GetTransitGatewayPolicyTableEntriesCommandInput extends GetTransitGatewayPolicyTableEntriesRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayPolicyTableEntriesCommand}.
 */
export interface GetTransitGatewayPolicyTableEntriesCommandOutput
  extends GetTransitGatewayPolicyTableEntriesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of transit gateway policy table entries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayPolicyTableEntriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayPolicyTableEntriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayPolicyTableEntriesRequest
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
 * const command = new GetTransitGatewayPolicyTableEntriesCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayPolicyTableEntriesResult
 * //   TransitGatewayPolicyTableEntries: [ // TransitGatewayPolicyTableEntryList
 * //     { // TransitGatewayPolicyTableEntry
 * //       PolicyRuleNumber: "STRING_VALUE",
 * //       PolicyRule: { // TransitGatewayPolicyRule
 * //         SourceCidrBlock: "STRING_VALUE",
 * //         SourcePortRange: "STRING_VALUE",
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         DestinationPortRange: "STRING_VALUE",
 * //         Protocol: "STRING_VALUE",
 * //         MetaData: { // TransitGatewayPolicyRuleMetaData
 * //           MetaDataKey: "STRING_VALUE",
 * //           MetaDataValue: "STRING_VALUE",
 * //         },
 * //       },
 * //       TargetRouteTableId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayPolicyTableEntriesCommandInput - {@link GetTransitGatewayPolicyTableEntriesCommandInput}
 * @returns {@link GetTransitGatewayPolicyTableEntriesCommandOutput}
 * @see {@link GetTransitGatewayPolicyTableEntriesCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayPolicyTableEntriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetTransitGatewayPolicyTableEntriesCommand extends $Command<
  GetTransitGatewayPolicyTableEntriesCommandInput,
  GetTransitGatewayPolicyTableEntriesCommandOutput,
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
  constructor(readonly input: GetTransitGatewayPolicyTableEntriesCommandInput) {
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
  ): Handler<GetTransitGatewayPolicyTableEntriesCommandInput, GetTransitGatewayPolicyTableEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTransitGatewayPolicyTableEntriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetTransitGatewayPolicyTableEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetTransitGatewayPolicyTableEntries",
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
    input: GetTransitGatewayPolicyTableEntriesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTransitGatewayPolicyTableEntriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayPolicyTableEntriesCommandOutput> {
    return de_GetTransitGatewayPolicyTableEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
