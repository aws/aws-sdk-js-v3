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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { DescribeRecoverySnapshotsRequest, DescribeRecoverySnapshotsResponse } from "../models/models_0";
import { de_DescribeRecoverySnapshotsCommand, se_DescribeRecoverySnapshotsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecoverySnapshotsCommand}.
 */
export interface DescribeRecoverySnapshotsCommandInput extends DescribeRecoverySnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecoverySnapshotsCommand}.
 */
export interface DescribeRecoverySnapshotsCommandOutput extends DescribeRecoverySnapshotsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all Recovery Snapshots for a single Source Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeRecoverySnapshotsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeRecoverySnapshotsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // DescribeRecoverySnapshotsRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   filters: { // DescribeRecoverySnapshotsRequestFilters
 *     fromDateTime: "STRING_VALUE",
 *     toDateTime: "STRING_VALUE",
 *   },
 *   order: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeRecoverySnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecoverySnapshotsResponse
 * //   items: [ // RecoverySnapshotsList
 * //     { // RecoverySnapshot
 * //       snapshotID: "STRING_VALUE", // required
 * //       sourceServerID: "STRING_VALUE", // required
 * //       expectedTimestamp: "STRING_VALUE", // required
 * //       timestamp: "STRING_VALUE",
 * //       ebsSnapshots: [ // EbsSnapshotsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRecoverySnapshotsCommandInput - {@link DescribeRecoverySnapshotsCommandInput}
 * @returns {@link DescribeRecoverySnapshotsCommandOutput}
 * @see {@link DescribeRecoverySnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeRecoverySnapshotsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class DescribeRecoverySnapshotsCommand extends $Command<
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput,
  DrsClientResolvedConfig
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
  constructor(readonly input: DescribeRecoverySnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRecoverySnapshotsCommandInput, DescribeRecoverySnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRecoverySnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "DescribeRecoverySnapshotsCommand";
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
  private serialize(input: DescribeRecoverySnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRecoverySnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRecoverySnapshotsCommandOutput> {
    return de_DescribeRecoverySnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
