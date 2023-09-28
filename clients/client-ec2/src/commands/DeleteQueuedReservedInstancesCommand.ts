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
import { DeleteQueuedReservedInstancesRequest, DeleteQueuedReservedInstancesResult } from "../models/models_3";
import { de_DeleteQueuedReservedInstancesCommand, se_DeleteQueuedReservedInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteQueuedReservedInstancesCommand}.
 */
export interface DeleteQueuedReservedInstancesCommandInput extends DeleteQueuedReservedInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueuedReservedInstancesCommand}.
 */
export interface DeleteQueuedReservedInstancesCommandOutput
  extends DeleteQueuedReservedInstancesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the queued purchases for the specified Reserved Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteQueuedReservedInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteQueuedReservedInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteQueuedReservedInstancesRequest
 *   DryRun: true || false,
 *   ReservedInstancesIds: [ // DeleteQueuedReservedInstancesIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteQueuedReservedInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteQueuedReservedInstancesResult
 * //   SuccessfulQueuedPurchaseDeletions: [ // SuccessfulQueuedPurchaseDeletionSet
 * //     { // SuccessfulQueuedPurchaseDeletion
 * //       ReservedInstancesId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FailedQueuedPurchaseDeletions: [ // FailedQueuedPurchaseDeletionSet
 * //     { // FailedQueuedPurchaseDeletion
 * //       Error: { // DeleteQueuedReservedInstancesError
 * //         Code: "reserved-instances-id-invalid" || "reserved-instances-not-in-queued-state" || "unexpected-error",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ReservedInstancesId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteQueuedReservedInstancesCommandInput - {@link DeleteQueuedReservedInstancesCommandInput}
 * @returns {@link DeleteQueuedReservedInstancesCommandOutput}
 * @see {@link DeleteQueuedReservedInstancesCommandInput} for command's `input` shape.
 * @see {@link DeleteQueuedReservedInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteQueuedReservedInstancesCommand extends $Command<
  DeleteQueuedReservedInstancesCommandInput,
  DeleteQueuedReservedInstancesCommandOutput,
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
  constructor(readonly input: DeleteQueuedReservedInstancesCommandInput) {
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
  ): Handler<DeleteQueuedReservedInstancesCommandInput, DeleteQueuedReservedInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteQueuedReservedInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteQueuedReservedInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeleteQueuedReservedInstances",
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
  private serialize(input: DeleteQueuedReservedInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteQueuedReservedInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteQueuedReservedInstancesCommandOutput> {
    return de_DeleteQueuedReservedInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
