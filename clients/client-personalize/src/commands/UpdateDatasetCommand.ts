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

import { UpdateDatasetRequest, UpdateDatasetResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_UpdateDatasetCommand, se_UpdateDatasetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandInput extends UpdateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandOutput extends UpdateDatasetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update a dataset to replace its schema with a new or existing one. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/updating-dataset-schema.html">Replacing a dataset's schema</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, UpdateDatasetCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, UpdateDatasetCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // UpdateDatasetRequest
 *   datasetArn: "STRING_VALUE", // required
 *   schemaArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDatasetResponse
 * //   datasetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDatasetCommandInput - {@link UpdateDatasetCommandInput}
 * @returns {@link UpdateDatasetCommandOutput}
 * @see {@link UpdateDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 */
export class UpdateDatasetCommand extends $Command<
  UpdateDatasetCommandInput,
  UpdateDatasetCommandOutput,
  PersonalizeClientResolvedConfig
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
  constructor(readonly input: UpdateDatasetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDatasetCommandInput, UpdateDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateDatasetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "UpdateDatasetCommand";
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
  private serialize(input: UpdateDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDatasetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDatasetCommandOutput> {
    return de_UpdateDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
