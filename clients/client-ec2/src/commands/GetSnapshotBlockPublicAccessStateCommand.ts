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
import { GetSnapshotBlockPublicAccessStateRequest, GetSnapshotBlockPublicAccessStateResult } from "../models/models_6";
import {
  de_GetSnapshotBlockPublicAccessStateCommand,
  se_GetSnapshotBlockPublicAccessStateCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSnapshotBlockPublicAccessStateCommand}.
 */
export interface GetSnapshotBlockPublicAccessStateCommandInput extends GetSnapshotBlockPublicAccessStateRequest {}
/**
 * @public
 *
 * The output of {@link GetSnapshotBlockPublicAccessStateCommand}.
 */
export interface GetSnapshotBlockPublicAccessStateCommandOutput
  extends GetSnapshotBlockPublicAccessStateResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the current state of <i>block public access for snapshots</i> setting
 *       for the account and Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-public-access-snapshots.html">
 *       Block public access for snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSnapshotBlockPublicAccessStateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSnapshotBlockPublicAccessStateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetSnapshotBlockPublicAccessStateRequest
 *   DryRun: true || false,
 * };
 * const command = new GetSnapshotBlockPublicAccessStateCommand(input);
 * const response = await client.send(command);
 * // { // GetSnapshotBlockPublicAccessStateResult
 * //   State: "block-all-sharing" || "block-new-sharing" || "unblocked",
 * // };
 *
 * ```
 *
 * @param GetSnapshotBlockPublicAccessStateCommandInput - {@link GetSnapshotBlockPublicAccessStateCommandInput}
 * @returns {@link GetSnapshotBlockPublicAccessStateCommandOutput}
 * @see {@link GetSnapshotBlockPublicAccessStateCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotBlockPublicAccessStateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetSnapshotBlockPublicAccessStateCommand extends $Command<
  GetSnapshotBlockPublicAccessStateCommandInput,
  GetSnapshotBlockPublicAccessStateCommandOutput,
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
  constructor(readonly input: GetSnapshotBlockPublicAccessStateCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSnapshotBlockPublicAccessStateCommandInput, GetSnapshotBlockPublicAccessStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSnapshotBlockPublicAccessStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetSnapshotBlockPublicAccessStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetSnapshotBlockPublicAccessState",
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
    input: GetSnapshotBlockPublicAccessStateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetSnapshotBlockPublicAccessStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSnapshotBlockPublicAccessStateCommandOutput> {
    return de_GetSnapshotBlockPublicAccessStateCommand(output, context);
  }
}
