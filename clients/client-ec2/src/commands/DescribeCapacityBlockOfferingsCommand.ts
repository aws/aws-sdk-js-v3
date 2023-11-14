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
import { DescribeCapacityBlockOfferingsRequest, DescribeCapacityBlockOfferingsResult } from "../models/models_3";
import {
  de_DescribeCapacityBlockOfferingsCommand,
  se_DescribeCapacityBlockOfferingsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityBlockOfferingsCommand}.
 */
export interface DescribeCapacityBlockOfferingsCommandInput extends DescribeCapacityBlockOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityBlockOfferingsCommand}.
 */
export interface DescribeCapacityBlockOfferingsCommandOutput
  extends DescribeCapacityBlockOfferingsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes Capacity Block offerings available for purchase. With Capacity Blocks, you purchase a specific instance type for a period of time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityBlockOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityBlockOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeCapacityBlockOfferingsRequest
 *   DryRun: true || false,
 *   InstanceType: "STRING_VALUE", // required
 *   InstanceCount: Number("int"), // required
 *   StartDateRange: new Date("TIMESTAMP"),
 *   EndDateRange: new Date("TIMESTAMP"),
 *   CapacityDurationHours: Number("int"), // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeCapacityBlockOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityBlockOfferingsResult
 * //   CapacityBlockOfferings: [ // CapacityBlockOfferingSet
 * //     { // CapacityBlockOffering
 * //       CapacityBlockOfferingId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       InstanceCount: Number("int"),
 * //       StartDate: new Date("TIMESTAMP"),
 * //       EndDate: new Date("TIMESTAMP"),
 * //       CapacityBlockDurationHours: Number("int"),
 * //       UpfrontFee: "STRING_VALUE",
 * //       CurrencyCode: "STRING_VALUE",
 * //       Tenancy: "default" || "dedicated",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCapacityBlockOfferingsCommandInput - {@link DescribeCapacityBlockOfferingsCommandInput}
 * @returns {@link DescribeCapacityBlockOfferingsCommandOutput}
 * @see {@link DescribeCapacityBlockOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityBlockOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeCapacityBlockOfferingsCommand extends $Command<
  DescribeCapacityBlockOfferingsCommandInput,
  DescribeCapacityBlockOfferingsCommandOutput,
  EC2ClientResolvedConfig
> {
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
  constructor(readonly input: DescribeCapacityBlockOfferingsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCapacityBlockOfferingsCommandInput, DescribeCapacityBlockOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCapacityBlockOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeCapacityBlockOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeCapacityBlockOfferings",
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
    input: DescribeCapacityBlockOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeCapacityBlockOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCapacityBlockOfferingsCommandOutput> {
    return de_DescribeCapacityBlockOfferingsCommand(output, context);
  }
}
