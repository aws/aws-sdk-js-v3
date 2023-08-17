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

import { UpdateImageVersionRequest, UpdateImageVersionResponse } from "../models/models_4";
import { de_UpdateImageVersionCommand, se_UpdateImageVersionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateImageVersionCommand}.
 */
export interface UpdateImageVersionCommandInput extends UpdateImageVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateImageVersionCommand}.
 */
export interface UpdateImageVersionCommandOutput extends UpdateImageVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the properties of a SageMaker image version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateImageVersionRequest
 *   ImageName: "STRING_VALUE", // required
 *   Alias: "STRING_VALUE",
 *   Version: Number("int"),
 *   AliasesToAdd: [ // SageMakerImageVersionAliases
 *     "STRING_VALUE",
 *   ],
 *   AliasesToDelete: [
 *     "STRING_VALUE",
 *   ],
 *   VendorGuidance: "NOT_PROVIDED" || "STABLE" || "TO_BE_ARCHIVED" || "ARCHIVED",
 *   JobType: "TRAINING" || "INFERENCE" || "NOTEBOOK_KERNEL",
 *   MLFramework: "STRING_VALUE",
 *   ProgrammingLang: "STRING_VALUE",
 *   Processor: "CPU" || "GPU",
 *   Horovod: true || false,
 *   ReleaseNotes: "STRING_VALUE",
 * };
 * const command = new UpdateImageVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateImageVersionResponse
 * //   ImageVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateImageVersionCommandInput - {@link UpdateImageVersionCommandInput}
 * @returns {@link UpdateImageVersionCommandOutput}
 * @see {@link UpdateImageVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateImageVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateImageVersionCommand extends $Command<
  UpdateImageVersionCommandInput,
  UpdateImageVersionCommandOutput,
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
  constructor(readonly input: UpdateImageVersionCommandInput) {
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
  ): Handler<UpdateImageVersionCommandInput, UpdateImageVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateImageVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateImageVersionCommand";
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
  private serialize(input: UpdateImageVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateImageVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateImageVersionCommandOutput> {
    return de_UpdateImageVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
