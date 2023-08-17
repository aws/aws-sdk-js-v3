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

import { PutRecordRequest } from "../models/models_0";
import { de_PutRecordCommand, se_PutRecordCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerFeatureStoreRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerFeatureStoreRuntimeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRecordCommand}.
 */
export interface PutRecordCommandInput extends PutRecordRequest {}
/**
 * @public
 *
 * The output of {@link PutRecordCommand}.
 */
export interface PutRecordCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>The <code>PutRecord</code> API is used to ingest a list of <code>Records</code> into
 *          your feature group. </p>
 *          <p>If a new record’s <code>EventTime</code> is greater, the new record is written to both
 *          the <code>OnlineStore</code> and <code>OfflineStore</code>. Otherwise, the record is a
 *          historic record and it is written only to the <code>OfflineStore</code>. </p>
 *          <p>You can specify the ingestion to be applied to the <code>OnlineStore</code>,
 *             <code>OfflineStore</code>, or both by using the <code>TargetStores</code> request
 *          parameter. </p>
 *          <p>You can set the ingested record to expire at a given time to live (TTL) duration after
 *          the record’s event time, <code>ExpiresAt</code> = <code>EventTime</code> +
 *             <code>TtlDuration</code>, by specifying the <code>TtlDuration</code> parameter. A record
 *          level <code>TtlDuration</code> is set when specifying the <code>TtlDuration</code>
 *          parameter using the <code>PutRecord</code> API call. If the input <code>TtlDuration</code>
 *          is <code>null</code> or unspecified, <code>TtlDuration</code> is set to the default feature
 *          group level <code>TtlDuration</code>. A record level <code>TtlDuration</code> supersedes
 *          the group level <code>TtlDuration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, PutRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, PutRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const input = { // PutRecordRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   Record: [ // Record // required
 *     { // FeatureValue
 *       FeatureName: "STRING_VALUE", // required
 *       ValueAsString: "STRING_VALUE", // required
 *     },
 *   ],
 *   TargetStores: [ // TargetStores
 *     "OnlineStore" || "OfflineStore",
 *   ],
 *   TtlDuration: { // TtlDuration
 *     Unit: "Seconds" || "Minutes" || "Hours" || "Days" || "Weeks", // required
 *     Value: Number("int"), // required
 *   },
 * };
 * const command = new PutRecordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRecordCommandInput - {@link PutRecordCommandInput}
 * @returns {@link PutRecordCommandOutput}
 * @see {@link PutRecordCommandInput} for command's `input` shape.
 * @see {@link PutRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for SageMakerFeatureStoreRuntimeClient's `config` shape.
 *
 * @throws {@link AccessForbidden} (client fault)
 *  <p>You do not have permission to perform an action.</p>
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p>An internal failure occurred. Try your request again. If the problem persists, contact
 *             Amazon Web Services customer support.</p>
 *
 * @throws {@link ServiceUnavailable} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p>There was an error validating your request.</p>
 *
 * @throws {@link SageMakerFeatureStoreRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerFeatureStoreRuntime service.</p>
 *
 */
export class PutRecordCommand extends $Command<
  PutRecordCommandInput,
  PutRecordCommandOutput,
  SageMakerFeatureStoreRuntimeClientResolvedConfig
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
  constructor(readonly input: PutRecordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerFeatureStoreRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRecordCommandInput, PutRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutRecordCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerFeatureStoreRuntimeClient";
    const commandName = "PutRecordCommand";
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
  private serialize(input: PutRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutRecordCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRecordCommandOutput> {
    return de_PutRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
