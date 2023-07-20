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

import { UpdateFeatureGroupRequest, UpdateFeatureGroupResponse } from "../models/models_4";
import { de_UpdateFeatureGroupCommand, se_UpdateFeatureGroupCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFeatureGroupCommand}.
 */
export interface UpdateFeatureGroupCommandInput extends UpdateFeatureGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFeatureGroupCommand}.
 */
export interface UpdateFeatureGroupCommandOutput extends UpdateFeatureGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the feature group by either adding features or updating the online store
 *          configuration. Use one of the following request parameters at a time while using the
 *             <code>UpdateFeatureGroup</code> API.</p>
 *          <p>You can add features for your feature group using the <code>FeatureAdditions</code>
 *          request parameter. Features cannot be removed from a feature group.</p>
 *          <p>You can update the online store configuration by using the
 *             <code>OnlineStoreConfig</code> request parameter. If a <code>TtlDuration</code> is
 *          specified, the default <code>TtlDuration</code> applies for all records added to the
 *          feature group <i>after the feature group is updated</i>. If a record level
 *             <code>TtlDuration</code> exists from using the <code>PutRecord</code> API, the record
 *          level <code>TtlDuration</code> applies to that record instead of the default
 *             <code>TtlDuration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateFeatureGroupRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   FeatureAdditions: [ // FeatureAdditions
 *     { // FeatureDefinition
 *       FeatureName: "STRING_VALUE",
 *       FeatureType: "Integral" || "Fractional" || "String",
 *     },
 *   ],
 *   OnlineStoreConfig: { // OnlineStoreConfigUpdate
 *     TtlDuration: { // TtlDuration
 *       Unit: "Seconds" || "Minutes" || "Hours" || "Days" || "Weeks",
 *       Value: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdateFeatureGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFeatureGroupResponse
 * //   FeatureGroupArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateFeatureGroupCommandInput - {@link UpdateFeatureGroupCommandInput}
 * @returns {@link UpdateFeatureGroupCommandOutput}
 * @see {@link UpdateFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateFeatureGroupCommand extends $Command<
  UpdateFeatureGroupCommandInput,
  UpdateFeatureGroupCommandOutput,
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
  constructor(readonly input: UpdateFeatureGroupCommandInput) {
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
  ): Handler<UpdateFeatureGroupCommandInput, UpdateFeatureGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFeatureGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateFeatureGroupCommand";
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
  private serialize(input: UpdateFeatureGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFeatureGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFeatureGroupCommandOutput> {
    return de_UpdateFeatureGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
