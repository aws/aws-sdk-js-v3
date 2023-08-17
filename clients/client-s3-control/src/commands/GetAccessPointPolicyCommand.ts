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

import { GetAccessPointPolicyRequest, GetAccessPointPolicyResult } from "../models/models_0";
import { de_GetAccessPointPolicyCommand, se_GetAccessPointPolicyCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccessPointPolicyCommand}.
 */
export interface GetAccessPointPolicyCommandInput extends GetAccessPointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPointPolicyCommand}.
 */
export interface GetAccessPointPolicyCommandOutput extends GetAccessPointPolicyResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns the access point policy associated with the specified access point.</p>
 *          <p>The following actions are related to <code>GetAccessPointPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a>
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
 * import { S3ControlClient, GetAccessPointPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessPointPolicyRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPointPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPointPolicyResult
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccessPointPolicyCommandInput - {@link GetAccessPointPolicyCommandInput}
 * @returns {@link GetAccessPointPolicyCommandOutput}
 * @see {@link GetAccessPointPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class GetAccessPointPolicyCommand extends $Command<
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput,
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
  constructor(readonly input: GetAccessPointPolicyCommandInput) {
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
  ): Handler<GetAccessPointPolicyCommandInput, GetAccessPointPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccessPointPolicyCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetAccessPointPolicyCommand";
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
  private serialize(input: GetAccessPointPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAccessPointPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccessPointPolicyCommandOutput> {
    return de_GetAccessPointPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
