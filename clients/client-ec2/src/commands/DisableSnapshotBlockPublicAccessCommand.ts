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
import { DisableSnapshotBlockPublicAccessRequest, DisableSnapshotBlockPublicAccessResult } from "../models/models_5";
import {
  de_DisableSnapshotBlockPublicAccessCommand,
  se_DisableSnapshotBlockPublicAccessCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableSnapshotBlockPublicAccessCommand}.
 */
export interface DisableSnapshotBlockPublicAccessCommandInput extends DisableSnapshotBlockPublicAccessRequest {}
/**
 * @public
 *
 * The output of {@link DisableSnapshotBlockPublicAccessCommand}.
 */
export interface DisableSnapshotBlockPublicAccessCommandOutput
  extends DisableSnapshotBlockPublicAccessResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Disables the <i>block public access for snapshots</i> setting at
 *       the account level for the specified Amazon Web Services Region. After you disable block public
 *       access for snapshots in a Region, users can publicly share snapshots in that Region.</p>
 *          <p>If block public access is enabled in <code>block-all-sharing</code> mode, and
 *       you disable block public access, all snapshots that were previously publicly shared
 *       are no longer treated as private and they become publicly accessible again.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-public-access-snapshots.html">
 *         Block public access for snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i> .</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableSnapshotBlockPublicAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableSnapshotBlockPublicAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableSnapshotBlockPublicAccessRequest
 *   DryRun: true || false,
 * };
 * const command = new DisableSnapshotBlockPublicAccessCommand(input);
 * const response = await client.send(command);
 * // { // DisableSnapshotBlockPublicAccessResult
 * //   State: "block-all-sharing" || "block-new-sharing" || "unblocked",
 * // };
 *
 * ```
 *
 * @param DisableSnapshotBlockPublicAccessCommandInput - {@link DisableSnapshotBlockPublicAccessCommandInput}
 * @returns {@link DisableSnapshotBlockPublicAccessCommandOutput}
 * @see {@link DisableSnapshotBlockPublicAccessCommandInput} for command's `input` shape.
 * @see {@link DisableSnapshotBlockPublicAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisableSnapshotBlockPublicAccessCommand extends $Command<
  DisableSnapshotBlockPublicAccessCommandInput,
  DisableSnapshotBlockPublicAccessCommandOutput,
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
  constructor(readonly input: DisableSnapshotBlockPublicAccessCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableSnapshotBlockPublicAccessCommandInput, DisableSnapshotBlockPublicAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableSnapshotBlockPublicAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableSnapshotBlockPublicAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisableSnapshotBlockPublicAccess",
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
    input: DisableSnapshotBlockPublicAccessCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisableSnapshotBlockPublicAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableSnapshotBlockPublicAccessCommandOutput> {
    return de_DisableSnapshotBlockPublicAccessCommand(output, context);
  }
}
