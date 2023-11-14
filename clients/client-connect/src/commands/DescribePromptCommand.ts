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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribePromptRequest, DescribePromptResponse } from "../models/models_0";
import { de_DescribePromptCommand, se_DescribePromptCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePromptCommand}.
 */
export interface DescribePromptCommandInput extends DescribePromptRequest {}
/**
 * @public
 *
 * The output of {@link DescribePromptCommand}.
 */
export interface DescribePromptCommandOutput extends DescribePromptResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the prompt.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribePromptCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribePromptCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribePromptRequest
 *   InstanceId: "STRING_VALUE", // required
 *   PromptId: "STRING_VALUE", // required
 * };
 * const command = new DescribePromptCommand(input);
 * const response = await client.send(command);
 * // { // DescribePromptResponse
 * //   Prompt: { // Prompt
 * //     PromptARN: "STRING_VALUE",
 * //     PromptId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePromptCommandInput - {@link DescribePromptCommandInput}
 * @returns {@link DescribePromptCommandOutput}
 * @see {@link DescribePromptCommandInput} for command's `input` shape.
 * @see {@link DescribePromptCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class DescribePromptCommand extends $Command<
  DescribePromptCommandInput,
  DescribePromptCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: DescribePromptCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePromptCommandInput, DescribePromptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePromptCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribePromptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "DescribePrompt",
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
  private serialize(input: DescribePromptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePromptCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePromptCommandOutput> {
    return de_DescribePromptCommand(output, context);
  }
}
