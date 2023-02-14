// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CreateSnapshotsRequest,
  CreateSnapshotsRequestFilterSensitiveLog,
  CreateSnapshotsResult,
  CreateSnapshotsResultFilterSensitiveLog,
} from "../models/models_2";
import { deserializeAws_ec2CreateSnapshotsCommand, serializeAws_ec2CreateSnapshotsCommand } from "../protocols/Aws_ec2";

export interface CreateSnapshotsCommandInput extends CreateSnapshotsRequest {}
export interface CreateSnapshotsCommandOutput extends CreateSnapshotsResult, __MetadataBearer {}

/**
 * <p>Creates crash-consistent snapshots of multiple EBS volumes and stores the data in S3.
 *     Volumes are chosen by specifying an instance. Any attached volumes will produce one snapshot
 *     each that is crash-consistent across the instance.</p>
 *          <p>You can include all of the volumes currently attached to the instance, or you can exclude
 *     the root volume or specific data (non-root) volumes from the multi-volume snapshot set.</p>
 *          <p>You can create multi-volume snapshots of instances in a Region and instances on an
 *   	Outpost. If you create snapshots from an instance in a Region, the snapshots must be stored
 *   	in the same Region as the instance. If you create snapshots from an instance on an Outpost,
 *   	the snapshots can be stored on the same Outpost as the instance, or in the Region for that
 *   	Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSnapshotsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSnapshotsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotsCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateSnapshotsCommand extends $Command<
  CreateSnapshotsCommandInput,
  CreateSnapshotsCommandOutput,
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

  constructor(readonly input: CreateSnapshotsCommandInput) {
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
  ): Handler<CreateSnapshotsCommandInput, CreateSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSnapshotsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSnapshotsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateSnapshotsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotsCommandOutput> {
    return deserializeAws_ec2CreateSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
