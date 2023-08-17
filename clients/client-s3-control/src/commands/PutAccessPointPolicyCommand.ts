// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import { PutAccessPointPolicyRequest } from "../models/models_0";
import { de_PutAccessPointPolicyCommand, se_PutAccessPointPolicyCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutAccessPointPolicyCommand}.
 */
export interface PutAccessPointPolicyCommandInput extends PutAccessPointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutAccessPointPolicyCommand}.
 */
export interface PutAccessPointPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Associates an access policy with the specified access point. Each access point can have only one policy,
 *          so a request made to this API replaces any existing policy associated with the specified
 *          access point.</p>
 *          <p></p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html#API_control_PutAccessPointPolicy_Examples">Examples</a> section.</p>
 *          <p>The following actions are related to <code>PutAccessPointPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html">GetAccessPointPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessPointPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessPointPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // PutAccessPointPolicyRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutAccessPointPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccessPointPolicyCommandInput - {@link PutAccessPointPolicyCommandInput}
 * @returns {@link PutAccessPointPolicyCommandOutput}
 * @see {@link PutAccessPointPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAccessPointPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class PutAccessPointPolicyCommand extends $Command<
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccessPointName: { type: "contextParams", name: "AccessPointName" },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutAccessPointPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccessPointPolicyCommandInput, PutAccessPointPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAccessPointPolicyCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "PutAccessPointPolicyCommand";
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
  private serialize(input: PutAccessPointPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutAccessPointPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccessPointPolicyCommandOutput> {
    return de_PutAccessPointPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
