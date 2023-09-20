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
import { CopyImageRequest, CopyImageResult } from "../models/models_0";
import { de_CopyImageCommand, se_CopyImageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CopyImageCommand}.
 */
export interface CopyImageCommandInput extends CopyImageRequest {}
/**
 * @public
 *
 * The output of {@link CopyImageCommand}.
 */
export interface CopyImageCommandOutput extends CopyImageResult, __MetadataBearer {}

/**
 * @public
 * <p>Initiates the copy of an AMI. You can copy an AMI from one Region to another, or from a
 *       Region to an Outpost. You can't copy an AMI from an Outpost to a Region, from one Outpost
 *       to another, or within the same Outpost. To copy an AMI to another partition, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateStoreImageTask.html">CreateStoreImageTask</a>.</p>
 *          <p>To copy an AMI from one Region to another, specify the source Region using the
 *      		<b>SourceRegion</b> parameter, and specify the
 *      		destination Region using its endpoint. Copies of encrypted backing snapshots for
 *      		the AMI are encrypted. Copies of unencrypted backing snapshots remain unencrypted,
 *      		unless you set <code>Encrypted</code> during the copy operation. You cannot
 *      		create an unencrypted copy of an encrypted backing snapshot.</p>
 *          <p>To copy an AMI from a Region to an Outpost, specify the source Region using the
 *    		<b>SourceRegion</b> parameter, and specify the
 *    		ARN of the destination Outpost using <b>DestinationOutpostArn</b>.
 *    		Backing snapshots copied to an Outpost are encrypted by default using the default
 *    		encryption key for the Region, or a different key that you specify in the request using
 *    		<b>KmsKeyId</b>. Outposts do not support unencrypted
 *    		snapshots. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#ami">
 *    			Amazon EBS local snapshots on Outposts</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>For more information about the prerequisites and limits when copying an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html">Copy an AMI</a> in the
 *         <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopyImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopyImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CopyImageRequest
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Encrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   SourceImageId: "STRING_VALUE", // required
 *   SourceRegion: "STRING_VALUE", // required
 *   DestinationOutpostArn: "STRING_VALUE",
 *   DryRun: true || false,
 *   CopyImageTags: true || false,
 * };
 * const command = new CopyImageCommand(input);
 * const response = await client.send(command);
 * // { // CopyImageResult
 * //   ImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CopyImageCommandInput - {@link CopyImageCommandInput}
 * @returns {@link CopyImageCommandOutput}
 * @see {@link CopyImageCommandInput} for command's `input` shape.
 * @see {@link CopyImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To copy an AMI to another region
 * ```javascript
 * // This example copies the specified AMI from the us-east-1 region to the current region.
 * const input = {
 *   "Description": "",
 *   "Name": "My server",
 *   "SourceImageId": "ami-5731123e",
 *   "SourceRegion": "us-east-1"
 * };
 * const command = new CopyImageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ImageId": "ami-438bea42"
 * }
 * *\/
 * // example id: to-copy-an-ami-to-another-region-1529022820832
 * ```
 *
 */
export class CopyImageCommand extends $Command<CopyImageCommandInput, CopyImageCommandOutput, EC2ClientResolvedConfig> {
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
  constructor(readonly input: CopyImageCommandInput) {
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
  ): Handler<CopyImageCommandInput, CopyImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CopyImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CopyImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CopyImage",
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
  private serialize(input: CopyImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CopyImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyImageCommandOutput> {
    return de_CopyImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
