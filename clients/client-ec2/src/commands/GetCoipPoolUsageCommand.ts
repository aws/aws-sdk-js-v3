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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetCoipPoolUsageRequest, GetCoipPoolUsageResult } from "../models/models_5";
import { de_GetCoipPoolUsageCommand, se_GetCoipPoolUsageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCoipPoolUsageCommand}.
 */
export interface GetCoipPoolUsageCommandInput extends GetCoipPoolUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetCoipPoolUsageCommand}.
 */
export interface GetCoipPoolUsageCommandOutput extends GetCoipPoolUsageResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the allocations from the specified customer-owned address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCoipPoolUsageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCoipPoolUsageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetCoipPoolUsageRequest
 *   PoolId: "STRING_VALUE", // required
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
 * const command = new GetCoipPoolUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetCoipPoolUsageResult
 * //   CoipPoolId: "STRING_VALUE",
 * //   CoipAddressUsages: [ // CoipAddressUsageSet
 * //     { // CoipAddressUsage
 * //       AllocationId: "STRING_VALUE",
 * //       AwsAccountId: "STRING_VALUE",
 * //       AwsService: "STRING_VALUE",
 * //       CoIp: "STRING_VALUE",
 * //     },
 * //   ],
 * //   LocalGatewayRouteTableId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCoipPoolUsageCommandInput - {@link GetCoipPoolUsageCommandInput}
 * @returns {@link GetCoipPoolUsageCommandOutput}
 * @see {@link GetCoipPoolUsageCommandInput} for command's `input` shape.
 * @see {@link GetCoipPoolUsageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetCoipPoolUsageCommand extends $Command<
  GetCoipPoolUsageCommandInput,
  GetCoipPoolUsageCommandOutput,
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
  constructor(readonly input: GetCoipPoolUsageCommandInput) {
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
  ): Handler<GetCoipPoolUsageCommandInput, GetCoipPoolUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCoipPoolUsageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetCoipPoolUsageCommand";
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
  private serialize(input: GetCoipPoolUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCoipPoolUsageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCoipPoolUsageCommandOutput> {
    return de_GetCoipPoolUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
