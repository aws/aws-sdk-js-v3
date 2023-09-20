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

import { DescribeClusterTracksMessage, TrackListMessage } from "../models/models_0";
import { de_DescribeClusterTracksCommand, se_DescribeClusterTracksCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterTracksCommand}.
 */
export interface DescribeClusterTracksCommandInput extends DescribeClusterTracksMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClusterTracksCommand}.
 */
export interface DescribeClusterTracksCommandOutput extends TrackListMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all the available maintenance tracks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterTracksCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterTracksCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClusterTracksMessage
 *   MaintenanceTrackName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeClusterTracksCommand(input);
 * const response = await client.send(command);
 * // { // TrackListMessage
 * //   MaintenanceTracks: [ // TrackList
 * //     { // MaintenanceTrack
 * //       MaintenanceTrackName: "STRING_VALUE",
 * //       DatabaseVersion: "STRING_VALUE",
 * //       UpdateTargets: [ // EligibleTracksToUpdateList
 * //         { // UpdateTarget
 * //           MaintenanceTrackName: "STRING_VALUE",
 * //           DatabaseVersion: "STRING_VALUE",
 * //           SupportedOperations: [ // SupportedOperationList
 * //             { // SupportedOperation
 * //               OperationName: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClusterTracksCommandInput - {@link DescribeClusterTracksCommandInput}
 * @returns {@link DescribeClusterTracksCommandOutput}
 * @see {@link DescribeClusterTracksCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterTracksCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidClusterTrackFault} (client fault)
 *  <p>The provided cluster track name is not valid.</p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeClusterTracksCommand extends $Command<
  DescribeClusterTracksCommandInput,
  DescribeClusterTracksCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DescribeClusterTracksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClusterTracksCommandInput, DescribeClusterTracksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterTracksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterTracksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "DescribeClusterTracks",
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
  private serialize(input: DescribeClusterTracksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClusterTracksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClusterTracksCommandOutput> {
    return de_DescribeClusterTracksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
