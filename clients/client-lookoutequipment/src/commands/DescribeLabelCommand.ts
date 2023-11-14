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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeLabelRequest, DescribeLabelResponse } from "../models/models_0";
import { de_DescribeLabelCommand, se_DescribeLabelCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLabelCommand}.
 */
export interface DescribeLabelCommandInput extends DescribeLabelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLabelCommand}.
 */
export interface DescribeLabelCommandOutput extends DescribeLabelResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns the name of the label. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeLabelCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeLabelCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DescribeLabelRequest
 *   LabelGroupName: "STRING_VALUE", // required
 *   LabelId: "STRING_VALUE", // required
 * };
 * const command = new DescribeLabelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLabelResponse
 * //   LabelGroupName: "STRING_VALUE",
 * //   LabelGroupArn: "STRING_VALUE",
 * //   LabelId: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   Rating: "ANOMALY" || "NO_ANOMALY" || "NEUTRAL",
 * //   FaultCode: "STRING_VALUE",
 * //   Notes: "STRING_VALUE",
 * //   Equipment: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeLabelCommandInput - {@link DescribeLabelCommandInput}
 * @returns {@link DescribeLabelCommandOutput}
 * @see {@link DescribeLabelCommandInput} for command's `input` shape.
 * @see {@link DescribeLabelCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 */
export class DescribeLabelCommand extends $Command<
  DescribeLabelCommandInput,
  DescribeLabelCommandOutput,
  LookoutEquipmentClientResolvedConfig
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
  constructor(readonly input: DescribeLabelCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLabelCommandInput, DescribeLabelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeLabelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "DescribeLabelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLookoutEquipmentFrontendService",
        operation: "DescribeLabel",
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
  private serialize(input: DescribeLabelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLabelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLabelCommandOutput> {
    return de_DescribeLabelCommand(output, context);
  }
}
