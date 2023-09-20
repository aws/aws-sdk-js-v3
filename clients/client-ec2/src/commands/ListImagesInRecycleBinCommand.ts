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
import { ListImagesInRecycleBinRequest, ListImagesInRecycleBinResult } from "../models/models_6";
import { de_ListImagesInRecycleBinCommand, se_ListImagesInRecycleBinCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListImagesInRecycleBinCommand}.
 */
export interface ListImagesInRecycleBinCommandInput extends ListImagesInRecycleBinRequest {}
/**
 * @public
 *
 * The output of {@link ListImagesInRecycleBinCommand}.
 */
export interface ListImagesInRecycleBinCommandOutput extends ListImagesInRecycleBinResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists one or more AMIs that are currently in the Recycle Bin. For more information,
 *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle
 *         Bin</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ListImagesInRecycleBinCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ListImagesInRecycleBinCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ListImagesInRecycleBinRequest
 *   ImageIds: [ // ImageIdStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new ListImagesInRecycleBinCommand(input);
 * const response = await client.send(command);
 * // { // ListImagesInRecycleBinResult
 * //   Images: [ // ImageRecycleBinInfoList
 * //     { // ImageRecycleBinInfo
 * //       ImageId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       RecycleBinEnterTime: new Date("TIMESTAMP"),
 * //       RecycleBinExitTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImagesInRecycleBinCommandInput - {@link ListImagesInRecycleBinCommandInput}
 * @returns {@link ListImagesInRecycleBinCommandOutput}
 * @see {@link ListImagesInRecycleBinCommandInput} for command's `input` shape.
 * @see {@link ListImagesInRecycleBinCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ListImagesInRecycleBinCommand extends $Command<
  ListImagesInRecycleBinCommandInput,
  ListImagesInRecycleBinCommandOutput,
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
  constructor(readonly input: ListImagesInRecycleBinCommandInput) {
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
  ): Handler<ListImagesInRecycleBinCommandInput, ListImagesInRecycleBinCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListImagesInRecycleBinCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ListImagesInRecycleBinCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ListImagesInRecycleBin",
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
  private serialize(input: ListImagesInRecycleBinCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListImagesInRecycleBinCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImagesInRecycleBinCommandOutput> {
    return de_ListImagesInRecycleBinCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
