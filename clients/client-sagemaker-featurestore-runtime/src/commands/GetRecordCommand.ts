// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GetRecordRequest, GetRecordResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRecordCommand,
  serializeAws_restJson1GetRecordCommand,
} from "../protocols/Aws_restJson1";
import {
  SageMakerFeatureStoreRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerFeatureStoreRuntimeClient";

/**
 * @public
 *
 * The input for {@link GetRecordCommand}.
 */
export interface GetRecordCommandInput extends GetRecordRequest {}
/**
 * @public
 *
 * The output of {@link GetRecordCommand}.
 */
export interface GetRecordCommandOutput extends GetRecordResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the
 *          latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with
 *             <code>RecordIdentifierValue</code> is found, then an empty result is returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, GetRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, GetRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const command = new GetRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetRecordCommandInput - {@link GetRecordCommandInput}
 * @returns {@link GetRecordCommandOutput}
 * @see {@link GetRecordCommandInput} for command's `input` shape.
 * @see {@link GetRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for SageMakerFeatureStoreRuntimeClient's `config` shape.
 *
 * @throws {@link AccessForbidden} (client fault)
 *  <p>You do not have permission to perform an action.</p>
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p>An internal failure occurred. Try your request again. If the problem
 *          persists, contact Amazon Web Services customer support.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>A resource that is required to perform an action was not found.</p>
 *
 * @throws {@link ServiceUnavailable} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p>There was an error validating your request.</p>
 *
 *
 */
export class GetRecordCommand extends $Command<
  GetRecordCommandInput,
  GetRecordCommandOutput,
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
  constructor(readonly input: GetRecordCommandInput) {
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
  ): Handler<GetRecordCommandInput, GetRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRecordCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerFeatureStoreRuntimeClient";
    const commandName = "GetRecordCommand";
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
  private serialize(input: GetRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRecordCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRecordCommandOutput> {
    return deserializeAws_restJson1GetRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
