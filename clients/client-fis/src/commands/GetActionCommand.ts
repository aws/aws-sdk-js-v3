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

import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { GetActionRequest, GetActionResponse } from "../models/models_0";
import { de_GetActionCommand, se_GetActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetActionCommand}.
 */
export interface GetActionCommandInput extends GetActionRequest {}
/**
 * @public
 *
 * The output of {@link GetActionCommand}.
 */
export interface GetActionCommandOutput extends GetActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the specified FIS action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetActionCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetActionCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = { // GetActionRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetActionCommand(input);
 * const response = await client.send(command);
 * // { // GetActionResponse
 * //   action: { // Action
 * //     id: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     parameters: { // ActionParameterMap
 * //       "<keys>": { // ActionParameter
 * //         description: "STRING_VALUE",
 * //         required: true || false,
 * //       },
 * //     },
 * //     targets: { // ActionTargetMap
 * //       "<keys>": { // ActionTarget
 * //         resourceType: "STRING_VALUE",
 * //       },
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetActionCommandInput - {@link GetActionCommandInput}
 * @returns {@link GetActionCommandOutput}
 * @see {@link GetActionCommandInput} for command's `input` shape.
 * @see {@link GetActionCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 */
export class GetActionCommand extends $Command<GetActionCommandInput, GetActionCommandOutput, FisClientResolvedConfig> {
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
  constructor(readonly input: GetActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetActionCommandInput, GetActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetActionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "GetActionCommand";
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
  private serialize(input: GetActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetActionCommandOutput> {
    return de_GetActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
