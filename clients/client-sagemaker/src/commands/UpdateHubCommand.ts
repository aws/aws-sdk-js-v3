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

import { UpdateHubRequest, UpdateHubResponse } from "../models/models_4";
import { de_UpdateHubCommand, se_UpdateHubCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateHubCommand}.
 */
export interface UpdateHubCommandInput extends UpdateHubRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHubCommand}.
 */
export interface UpdateHubCommandOutput extends UpdateHubResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update a hub.</p>
 *          <note>
 *             <p>Hub APIs are only callable through SageMaker Studio.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateHubCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateHubCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateHubRequest
 *   HubName: "STRING_VALUE", // required
 *   HubDescription: "STRING_VALUE",
 *   HubDisplayName: "STRING_VALUE",
 *   HubSearchKeywords: [ // HubSearchKeywordList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateHubCommand(input);
 * const response = await client.send(command);
 * // { // UpdateHubResponse
 * //   HubArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateHubCommandInput - {@link UpdateHubCommandInput}
 * @returns {@link UpdateHubCommandOutput}
 * @see {@link UpdateHubCommandInput} for command's `input` shape.
 * @see {@link UpdateHubCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateHubCommand extends $Command<
  UpdateHubCommandInput,
  UpdateHubCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: UpdateHubCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateHubCommandInput, UpdateHubCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateHubCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateHubCommand";
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
  private serialize(input: UpdateHubCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateHubCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHubCommandOutput> {
    return de_UpdateHubCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
