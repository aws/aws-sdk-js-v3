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
import { CancelSpotInstanceRequestsRequest, CancelSpotInstanceRequestsResult } from "../models/models_0";
import { de_CancelSpotInstanceRequestsCommand, se_CancelSpotInstanceRequestsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelSpotInstanceRequestsCommand}.
 */
export interface CancelSpotInstanceRequestsCommandInput extends CancelSpotInstanceRequestsRequest {}
/**
 * @public
 *
 * The output of {@link CancelSpotInstanceRequestsCommand}.
 */
export interface CancelSpotInstanceRequestsCommandOutput extends CancelSpotInstanceRequestsResult, __MetadataBearer {}

/**
 * @public
 * <p>Cancels one or more Spot Instance requests.</p>
 *          <important>
 *             <p>Canceling a Spot Instance request does not terminate running Spot Instances
 *                 associated with the request.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelSpotInstanceRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelSpotInstanceRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CancelSpotInstanceRequestsRequest
 *   DryRun: true || false,
 *   SpotInstanceRequestIds: [ // SpotInstanceRequestIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CancelSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * // { // CancelSpotInstanceRequestsResult
 * //   CancelledSpotInstanceRequests: [ // CancelledSpotInstanceRequestList
 * //     { // CancelledSpotInstanceRequest
 * //       SpotInstanceRequestId: "STRING_VALUE",
 * //       State: "active" || "open" || "closed" || "cancelled" || "completed",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CancelSpotInstanceRequestsCommandInput - {@link CancelSpotInstanceRequestsCommandInput}
 * @returns {@link CancelSpotInstanceRequestsCommandOutput}
 * @see {@link CancelSpotInstanceRequestsCommandInput} for command's `input` shape.
 * @see {@link CancelSpotInstanceRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To cancel Spot Instance requests
 * ```javascript
 * // This example cancels a Spot Instance request.
 * const input = {
 *   "SpotInstanceRequestIds": [
 *     "sir-08b93456"
 *   ]
 * };
 * const command = new CancelSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CancelledSpotInstanceRequests": [
 *     {
 *       "SpotInstanceRequestId": "sir-08b93456",
 *       "State": "cancelled"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-cancel-spot-instance-requests-1
 * ```
 *
 */
export class CancelSpotInstanceRequestsCommand extends $Command<
  CancelSpotInstanceRequestsCommandInput,
  CancelSpotInstanceRequestsCommandOutput,
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
  constructor(readonly input: CancelSpotInstanceRequestsCommandInput) {
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
  ): Handler<CancelSpotInstanceRequestsCommandInput, CancelSpotInstanceRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelSpotInstanceRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelSpotInstanceRequestsCommand";
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
  private serialize(input: CancelSpotInstanceRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelSpotInstanceRequestsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelSpotInstanceRequestsCommandOutput> {
    return de_CancelSpotInstanceRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
