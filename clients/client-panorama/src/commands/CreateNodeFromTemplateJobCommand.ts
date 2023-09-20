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

import {
  CreateNodeFromTemplateJobRequest,
  CreateNodeFromTemplateJobRequestFilterSensitiveLog,
  CreateNodeFromTemplateJobResponse,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_CreateNodeFromTemplateJobCommand, se_CreateNodeFromTemplateJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNodeFromTemplateJobCommand}.
 */
export interface CreateNodeFromTemplateJobCommandInput extends CreateNodeFromTemplateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateNodeFromTemplateJobCommand}.
 */
export interface CreateNodeFromTemplateJobCommandOutput extends CreateNodeFromTemplateJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a camera stream node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, CreateNodeFromTemplateJobCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, CreateNodeFromTemplateJobCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // CreateNodeFromTemplateJobRequest
 *   TemplateType: "STRING_VALUE", // required
 *   OutputPackageName: "STRING_VALUE", // required
 *   OutputPackageVersion: "STRING_VALUE", // required
 *   NodeName: "STRING_VALUE", // required
 *   NodeDescription: "STRING_VALUE",
 *   TemplateParameters: { // TemplateParametersMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   JobTags: [ // JobTagsList
 *     { // JobResourceTags
 *       ResourceType: "STRING_VALUE", // required
 *       Tags: { // TagMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateNodeFromTemplateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateNodeFromTemplateJobResponse
 * //   JobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateNodeFromTemplateJobCommandInput - {@link CreateNodeFromTemplateJobCommandInput}
 * @returns {@link CreateNodeFromTemplateJobCommandOutput}
 * @see {@link CreateNodeFromTemplateJobCommandInput} for command's `input` shape.
 * @see {@link CreateNodeFromTemplateJobCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 */
export class CreateNodeFromTemplateJobCommand extends $Command<
  CreateNodeFromTemplateJobCommandInput,
  CreateNodeFromTemplateJobCommandOutput,
  PanoramaClientResolvedConfig
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
  constructor(readonly input: CreateNodeFromTemplateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNodeFromTemplateJobCommandInput, CreateNodeFromTemplateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNodeFromTemplateJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "CreateNodeFromTemplateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNodeFromTemplateJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OmniCloudServiceLambda",
        operation: "CreateNodeFromTemplateJob",
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
  private serialize(input: CreateNodeFromTemplateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateNodeFromTemplateJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNodeFromTemplateJobCommandOutput> {
    return de_CreateNodeFromTemplateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
