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

import { AddAssociationRequest, AddAssociationResponse } from "../models/models_0";
import { de_AddAssociationCommand, se_AddAssociationCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddAssociationCommand}.
 */
export interface AddAssociationCommandInput extends AddAssociationRequest {}
/**
 * @public
 *
 * The output of {@link AddAssociationCommand}.
 */
export interface AddAssociationCommandOutput extends AddAssociationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an <i>association</i> between the source and the destination. A
 *         source can be associated with multiple destinations, and a destination can be associated
 *         with multiple sources. An association is a lineage tracking entity. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AddAssociationCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AddAssociationCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // AddAssociationRequest
 *   SourceArn: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE", // required
 *   AssociationType: "ContributedTo" || "AssociatedWith" || "DerivedFrom" || "Produced",
 * };
 * const command = new AddAssociationCommand(input);
 * const response = await client.send(command);
 * // { // AddAssociationResponse
 * //   SourceArn: "STRING_VALUE",
 * //   DestinationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddAssociationCommandInput - {@link AddAssociationCommandInput}
 * @returns {@link AddAssociationCommandOutput}
 * @see {@link AddAssociationCommandInput} for command's `input` shape.
 * @see {@link AddAssociationCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class AddAssociationCommand extends $Command<
  AddAssociationCommandInput,
  AddAssociationCommandOutput,
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
  constructor(readonly input: AddAssociationCommandInput) {
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
  ): Handler<AddAssociationCommandInput, AddAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "AddAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "AddAssociation",
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
  private serialize(input: AddAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddAssociationCommandOutput> {
    return de_AddAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
