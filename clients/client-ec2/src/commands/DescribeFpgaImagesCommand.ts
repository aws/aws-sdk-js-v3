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
import { DescribeFpgaImagesRequest, DescribeFpgaImagesResult } from "../models/models_3";
import { de_DescribeFpgaImagesCommand, se_DescribeFpgaImagesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFpgaImagesCommand}.
 */
export interface DescribeFpgaImagesCommandInput extends DescribeFpgaImagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFpgaImagesCommand}.
 */
export interface DescribeFpgaImagesCommandOutput extends DescribeFpgaImagesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the Amazon FPGA Images (AFIs) available to you. These include public AFIs,
 * 			private AFIs that you own, and AFIs owned by other Amazon Web Services accounts for which you have load
 * 			permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFpgaImagesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFpgaImagesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeFpgaImagesRequest
 *   DryRun: true || false,
 *   FpgaImageIds: [ // FpgaImageIdList
 *     "STRING_VALUE",
 *   ],
 *   Owners: [ // OwnerStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeFpgaImagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFpgaImagesResult
 * //   FpgaImages: [ // FpgaImageList
 * //     { // FpgaImage
 * //       FpgaImageId: "STRING_VALUE",
 * //       FpgaImageGlobalId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ShellVersion: "STRING_VALUE",
 * //       PciId: { // PciId
 * //         DeviceId: "STRING_VALUE",
 * //         VendorId: "STRING_VALUE",
 * //         SubsystemId: "STRING_VALUE",
 * //         SubsystemVendorId: "STRING_VALUE",
 * //       },
 * //       State: { // FpgaImageState
 * //         Code: "pending" || "failed" || "available" || "unavailable",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //       OwnerId: "STRING_VALUE",
 * //       OwnerAlias: "STRING_VALUE",
 * //       ProductCodes: [ // ProductCodeList
 * //         { // ProductCode
 * //           ProductCodeId: "STRING_VALUE",
 * //           ProductCodeType: "devpay" || "marketplace",
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Public: true || false,
 * //       DataRetentionSupport: true || false,
 * //       InstanceTypes: [ // InstanceTypesList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFpgaImagesCommandInput - {@link DescribeFpgaImagesCommandInput}
 * @returns {@link DescribeFpgaImagesCommandOutput}
 * @see {@link DescribeFpgaImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeFpgaImagesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeFpgaImagesCommand extends $Command<
  DescribeFpgaImagesCommandInput,
  DescribeFpgaImagesCommandOutput,
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
  constructor(readonly input: DescribeFpgaImagesCommandInput) {
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
  ): Handler<DescribeFpgaImagesCommandInput, DescribeFpgaImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFpgaImagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeFpgaImagesCommand";
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
  private serialize(input: DescribeFpgaImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFpgaImagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFpgaImagesCommandOutput> {
    return de_DescribeFpgaImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
