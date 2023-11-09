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
import { EnableSnapshotBlockPublicAccessRequest, EnableSnapshotBlockPublicAccessResult } from "../models/models_5";
import {
  de_EnableSnapshotBlockPublicAccessCommand,
  se_EnableSnapshotBlockPublicAccessCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableSnapshotBlockPublicAccessCommand}.
 */
export interface EnableSnapshotBlockPublicAccessCommandInput extends EnableSnapshotBlockPublicAccessRequest {}
/**
 * @public
 *
 * The output of {@link EnableSnapshotBlockPublicAccessCommand}.
 */
export interface EnableSnapshotBlockPublicAccessCommandOutput
  extends EnableSnapshotBlockPublicAccessResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Enables or modifies the <i>block public access for snapshots</i>
 *       setting at the account level for the specified Amazon Web Services Region. After you enable block
 *       public access for snapshots in a Region, users can no longer request public sharing
 *       for snapshots in that Region. Snapshots that are already publicly shared are either
 *       treated as private or they remain publicly shared, depending on the
 *       <b>State</b> that you specify.</p>
 *          <p>If block public access is enabled in <code>block-all-sharing</code> mode, and
 *       you change the mode to <code>block-new-sharing</code>, all snapshots that were
 *       previously publicly shared are no longer treated as private and they become publicly
 *       accessible again.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-public-access-snapshots.html">
 *       Block public access for snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableSnapshotBlockPublicAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableSnapshotBlockPublicAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableSnapshotBlockPublicAccessRequest
 *   State: "block-all-sharing" || "block-new-sharing" || "unblocked", // required
 *   DryRun: true || false,
 * };
 * const command = new EnableSnapshotBlockPublicAccessCommand(input);
 * const response = await client.send(command);
 * // { // EnableSnapshotBlockPublicAccessResult
 * //   State: "block-all-sharing" || "block-new-sharing" || "unblocked",
 * // };
 *
 * ```
 *
 * @param EnableSnapshotBlockPublicAccessCommandInput - {@link EnableSnapshotBlockPublicAccessCommandInput}
 * @returns {@link EnableSnapshotBlockPublicAccessCommandOutput}
 * @see {@link EnableSnapshotBlockPublicAccessCommandInput} for command's `input` shape.
 * @see {@link EnableSnapshotBlockPublicAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class EnableSnapshotBlockPublicAccessCommand extends $Command<
  EnableSnapshotBlockPublicAccessCommandInput,
  EnableSnapshotBlockPublicAccessCommandOutput,
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
  constructor(readonly input: EnableSnapshotBlockPublicAccessCommandInput) {
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
  ): Handler<EnableSnapshotBlockPublicAccessCommandInput, EnableSnapshotBlockPublicAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableSnapshotBlockPublicAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableSnapshotBlockPublicAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "EnableSnapshotBlockPublicAccess",
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
    input: EnableSnapshotBlockPublicAccessCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_EnableSnapshotBlockPublicAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableSnapshotBlockPublicAccessCommandOutput> {
    return de_EnableSnapshotBlockPublicAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
