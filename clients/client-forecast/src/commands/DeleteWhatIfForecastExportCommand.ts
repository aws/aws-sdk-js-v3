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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteWhatIfForecastExportRequest } from "../models/models_0";
import { de_DeleteWhatIfForecastExportCommand, se_DeleteWhatIfForecastExportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteWhatIfForecastExportCommand}.
 */
export interface DeleteWhatIfForecastExportCommandInput extends DeleteWhatIfForecastExportRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWhatIfForecastExportCommand}.
 */
export interface DeleteWhatIfForecastExportCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a>
 *       operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteWhatIfForecastExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteWhatIfForecastExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // DeleteWhatIfForecastExportRequest
 *   WhatIfForecastExportArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteWhatIfForecastExportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWhatIfForecastExportCommandInput - {@link DeleteWhatIfForecastExportCommandInput}
 * @returns {@link DeleteWhatIfForecastExportCommandOutput}
 * @see {@link DeleteWhatIfForecastExportCommandInput} for command's `input` shape.
 * @see {@link DeleteWhatIfForecastExportCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class DeleteWhatIfForecastExportCommand extends $Command<
  DeleteWhatIfForecastExportCommandInput,
  DeleteWhatIfForecastExportCommandOutput,
  ForecastClientResolvedConfig
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
  constructor(readonly input: DeleteWhatIfForecastExportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWhatIfForecastExportCommandInput, DeleteWhatIfForecastExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteWhatIfForecastExportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DeleteWhatIfForecastExportCommand";
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
  private serialize(input: DeleteWhatIfForecastExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteWhatIfForecastExportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteWhatIfForecastExportCommandOutput> {
    return de_DeleteWhatIfForecastExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
