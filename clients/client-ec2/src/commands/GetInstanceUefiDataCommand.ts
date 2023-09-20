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
import { GetInstanceUefiDataRequest, GetInstanceUefiDataResult } from "../models/models_5";
import { de_GetInstanceUefiDataCommand, se_GetInstanceUefiDataCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceUefiDataCommand}.
 */
export interface GetInstanceUefiDataCommandInput extends GetInstanceUefiDataRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceUefiDataCommand}.
 */
export interface GetInstanceUefiDataCommandOutput extends GetInstanceUefiDataResult, __MetadataBearer {}

/**
 * @public
 * <p>A binary representation of the UEFI variable store. Only non-volatile variables are
 *             stored. This is a base64 encoded and zlib compressed binary value that must be properly
 *             encoded.</p>
 *          <p>When you use <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/register-image.html">register-image</a> to create
 *             an AMI, you can create an exact copy of your variable store by passing the UEFI data in
 *             the <code>UefiData</code> parameter. You can modify the UEFI data by using the <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on
 *             GitHub. You can use the tool to convert the UEFI data into a human-readable format
 *             (JSON), which you can inspect and modify, and then convert back into the binary format
 *             to use with register-image.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetInstanceUefiDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetInstanceUefiDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetInstanceUefiDataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetInstanceUefiDataCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceUefiDataResult
 * //   InstanceId: "STRING_VALUE",
 * //   UefiData: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInstanceUefiDataCommandInput - {@link GetInstanceUefiDataCommandInput}
 * @returns {@link GetInstanceUefiDataCommandOutput}
 * @see {@link GetInstanceUefiDataCommandInput} for command's `input` shape.
 * @see {@link GetInstanceUefiDataCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetInstanceUefiDataCommand extends $Command<
  GetInstanceUefiDataCommandInput,
  GetInstanceUefiDataCommandOutput,
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
  constructor(readonly input: GetInstanceUefiDataCommandInput) {
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
  ): Handler<GetInstanceUefiDataCommandInput, GetInstanceUefiDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInstanceUefiDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetInstanceUefiDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetInstanceUefiData",
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
  private serialize(input: GetInstanceUefiDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInstanceUefiDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceUefiDataCommandOutput> {
    return de_GetInstanceUefiDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
