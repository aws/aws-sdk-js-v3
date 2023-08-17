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

import { CreateHumanTaskUiRequest, CreateHumanTaskUiResponse } from "../models/models_1";
import { de_CreateHumanTaskUiCommand, se_CreateHumanTaskUiCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateHumanTaskUiCommand}.
 */
export interface CreateHumanTaskUiCommandInput extends CreateHumanTaskUiRequest {}
/**
 * @public
 *
 * The output of {@link CreateHumanTaskUiCommand}.
 */
export interface CreateHumanTaskUiCommandOutput extends CreateHumanTaskUiResponse, __MetadataBearer {}

/**
 * @public
 * <p>Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateHumanTaskUiCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateHumanTaskUiCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateHumanTaskUiRequest
 *   HumanTaskUiName: "STRING_VALUE", // required
 *   UiTemplate: { // UiTemplate
 *     Content: "STRING_VALUE", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateHumanTaskUiCommand(input);
 * const response = await client.send(command);
 * // { // CreateHumanTaskUiResponse
 * //   HumanTaskUiArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateHumanTaskUiCommandInput - {@link CreateHumanTaskUiCommandInput}
 * @returns {@link CreateHumanTaskUiCommandOutput}
 * @see {@link CreateHumanTaskUiCommandInput} for command's `input` shape.
 * @see {@link CreateHumanTaskUiCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateHumanTaskUiCommand extends $Command<
  CreateHumanTaskUiCommandInput,
  CreateHumanTaskUiCommandOutput,
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
  constructor(readonly input: CreateHumanTaskUiCommandInput) {
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
  ): Handler<CreateHumanTaskUiCommandInput, CreateHumanTaskUiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateHumanTaskUiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateHumanTaskUiCommand";
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
  private serialize(input: CreateHumanTaskUiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateHumanTaskUiCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHumanTaskUiCommandOutput> {
    return de_CreateHumanTaskUiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
