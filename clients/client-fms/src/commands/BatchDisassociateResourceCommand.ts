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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { BatchDisassociateResourceRequest, BatchDisassociateResourceResponse } from "../models/models_0";
import { de_BatchDisassociateResourceCommand, se_BatchDisassociateResourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateResourceCommand}.
 */
export interface BatchDisassociateResourceCommandInput extends BatchDisassociateResourceRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateResourceCommand}.
 */
export interface BatchDisassociateResourceCommandOutput extends BatchDisassociateResourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Disassociates resources from a Firewall Manager resource set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, BatchDisassociateResourceCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, BatchDisassociateResourceCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // BatchDisassociateResourceRequest
 *   ResourceSetIdentifier: "STRING_VALUE", // required
 *   Items: [ // IdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDisassociateResourceCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateResourceResponse
 * //   ResourceSetIdentifier: "STRING_VALUE", // required
 * //   FailedItems: [ // FailedItemList // required
 * //     { // FailedItem
 * //       URI: "STRING_VALUE",
 * //       Reason: "NOT_VALID_ARN" || "NOT_VALID_PARTITION" || "NOT_VALID_REGION" || "NOT_VALID_SERVICE" || "NOT_VALID_RESOURCE_TYPE" || "NOT_VALID_ACCOUNT_ID",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateResourceCommandInput - {@link BatchDisassociateResourceCommandInput}
 * @returns {@link BatchDisassociateResourceCommandOutput}
 * @see {@link BatchDisassociateResourceCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateResourceCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 */
export class BatchDisassociateResourceCommand extends $Command<
  BatchDisassociateResourceCommandInput,
  BatchDisassociateResourceCommandOutput,
  FMSClientResolvedConfig
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
  constructor(readonly input: BatchDisassociateResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDisassociateResourceCommandInput, BatchDisassociateResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDisassociateResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "BatchDisassociateResourceCommand";
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
  private serialize(input: BatchDisassociateResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDisassociateResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateResourceCommandOutput> {
    return de_BatchDisassociateResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
