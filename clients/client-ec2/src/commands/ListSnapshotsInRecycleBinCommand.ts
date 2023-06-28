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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ListSnapshotsInRecycleBinRequest, ListSnapshotsInRecycleBinResult } from "../models/models_6";
import { de_ListSnapshotsInRecycleBinCommand, se_ListSnapshotsInRecycleBinCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSnapshotsInRecycleBinCommand}.
 */
export interface ListSnapshotsInRecycleBinCommandInput extends ListSnapshotsInRecycleBinRequest {}
/**
 * @public
 *
 * The output of {@link ListSnapshotsInRecycleBinCommand}.
 */
export interface ListSnapshotsInRecycleBinCommandOutput extends ListSnapshotsInRecycleBinResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists one or more snapshots that are currently in the Recycle Bin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ListSnapshotsInRecycleBinCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ListSnapshotsInRecycleBinCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ListSnapshotsInRecycleBinRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SnapshotIds: [ // SnapshotIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ListSnapshotsInRecycleBinCommand(input);
 * const response = await client.send(command);
 * // { // ListSnapshotsInRecycleBinResult
 * //   Snapshots: [ // SnapshotRecycleBinInfoList
 * //     { // SnapshotRecycleBinInfo
 * //       SnapshotId: "STRING_VALUE",
 * //       RecycleBinEnterTime: new Date("TIMESTAMP"),
 * //       RecycleBinExitTime: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSnapshotsInRecycleBinCommandInput - {@link ListSnapshotsInRecycleBinCommandInput}
 * @returns {@link ListSnapshotsInRecycleBinCommandOutput}
 * @see {@link ListSnapshotsInRecycleBinCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotsInRecycleBinCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ListSnapshotsInRecycleBinCommand extends $Command<
  ListSnapshotsInRecycleBinCommandInput,
  ListSnapshotsInRecycleBinCommandOutput,
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
  constructor(readonly input: ListSnapshotsInRecycleBinCommandInput) {
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
  ): Handler<ListSnapshotsInRecycleBinCommandInput, ListSnapshotsInRecycleBinCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSnapshotsInRecycleBinCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ListSnapshotsInRecycleBinCommand";
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
  private serialize(input: ListSnapshotsInRecycleBinCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSnapshotsInRecycleBinCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSnapshotsInRecycleBinCommandOutput> {
    return de_ListSnapshotsInRecycleBinCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
