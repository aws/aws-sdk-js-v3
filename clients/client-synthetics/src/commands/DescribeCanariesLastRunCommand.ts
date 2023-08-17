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

import { DescribeCanariesLastRunRequest, DescribeCanariesLastRunResponse } from "../models/models_0";
import { de_DescribeCanariesLastRunCommand, se_DescribeCanariesLastRunCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCanariesLastRunCommand}.
 */
export interface DescribeCanariesLastRunCommandInput extends DescribeCanariesLastRunRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCanariesLastRunCommand}.
 */
export interface DescribeCanariesLastRunCommandOutput extends DescribeCanariesLastRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to see information from the most recent run of each canary that you have created.</p>
 *
 *          <p>This operation supports resource-level authorization using an IAM policy and
 *          the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view
 *          all the canaries that you specify in your request. If you do not have permission to view any of
 *          the canaries, the request fails with a 403 response.</p>
 *          <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an
 *          IAM policy that restricts which canaries that you are allowed to view. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html">
 *             Limiting a user to viewing specific canaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeCanariesLastRunCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeCanariesLastRunCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // DescribeCanariesLastRunRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Names: [ // DescribeCanariesLastRunNameFilter
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeCanariesLastRunCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCanariesLastRunResponse
 * //   CanariesLastRun: [ // CanariesLastRun
 * //     { // CanaryLastRun
 * //       CanaryName: "STRING_VALUE",
 * //       LastRun: { // CanaryRun
 * //         Id: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Status: { // CanaryRunStatus
 * //           State: "STRING_VALUE",
 * //           StateReason: "STRING_VALUE",
 * //           StateReasonCode: "STRING_VALUE",
 * //         },
 * //         Timeline: { // CanaryRunTimeline
 * //           Started: new Date("TIMESTAMP"),
 * //           Completed: new Date("TIMESTAMP"),
 * //         },
 * //         ArtifactS3Location: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCanariesLastRunCommandInput - {@link DescribeCanariesLastRunCommandInput}
 * @returns {@link DescribeCanariesLastRunCommandOutput}
 * @see {@link DescribeCanariesLastRunCommandInput} for command's `input` shape.
 * @see {@link DescribeCanariesLastRunCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 */
export class DescribeCanariesLastRunCommand extends $Command<
  DescribeCanariesLastRunCommandInput,
  DescribeCanariesLastRunCommandOutput,
  SyntheticsClientResolvedConfig
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
  constructor(readonly input: DescribeCanariesLastRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SyntheticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCanariesLastRunCommandInput, DescribeCanariesLastRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCanariesLastRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "DescribeCanariesLastRunCommand";
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
  private serialize(input: DescribeCanariesLastRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCanariesLastRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCanariesLastRunCommandOutput> {
    return de_DescribeCanariesLastRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
