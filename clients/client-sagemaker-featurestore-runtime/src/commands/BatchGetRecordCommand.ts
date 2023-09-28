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

import { BatchGetRecordRequest, BatchGetRecordResponse } from "../models/models_0";
import { de_BatchGetRecordCommand, se_BatchGetRecordCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link BatchGetRecordCommand}.
 */
export interface BatchGetRecordCommandInput extends BatchGetRecordRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetRecordCommand}.
 */
export interface BatchGetRecordCommandOutput extends BatchGetRecordResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, BatchGetRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, BatchGetRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const input = { // BatchGetRecordRequest
 *   Identifiers: [ // BatchGetRecordIdentifiers // required
 *     { // BatchGetRecordIdentifier
 *       FeatureGroupName: "STRING_VALUE", // required
 *       RecordIdentifiersValueAsString: [ // RecordIdentifiers // required
 *         "STRING_VALUE",
 *       ],
 *       FeatureNames: [ // FeatureNames
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ExpirationTimeResponse: "Enabled" || "Disabled",
 * };
 * const command = new BatchGetRecordCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetRecordResponse
 * //   Records: [ // BatchGetRecordResultDetails // required
 * //     { // BatchGetRecordResultDetail
 * //       FeatureGroupName: "STRING_VALUE", // required
 * //       RecordIdentifierValueAsString: "STRING_VALUE", // required
 * //       Record: [ // Record // required
 * //         { // FeatureValue
 * //           FeatureName: "STRING_VALUE", // required
 * //           ValueAsString: "STRING_VALUE",
 * //           ValueAsStringList: [ // ValueAsStringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ExpiresAt: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Errors: [ // BatchGetRecordErrors // required
 * //     { // BatchGetRecordError
 * //       FeatureGroupName: "STRING_VALUE", // required
 * //       RecordIdentifierValueAsString: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   UnprocessedIdentifiers: [ // UnprocessedIdentifiers // required
 * //     { // BatchGetRecordIdentifier
 * //       FeatureGroupName: "STRING_VALUE", // required
 * //       RecordIdentifiersValueAsString: [ // RecordIdentifiers // required
 * //         "STRING_VALUE",
 * //       ],
 * //       FeatureNames: [ // FeatureNames
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetRecordCommandInput - {@link BatchGetRecordCommandInput}
 * @returns {@link BatchGetRecordCommandOutput}
 * @see {@link BatchGetRecordCommandInput} for command's `input` shape.
 * @see {@link BatchGetRecordCommandOutput} for command's `response` shape.
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
export class BatchGetRecordCommand extends $Command<
  BatchGetRecordCommandInput,
  BatchGetRecordCommandOutput,
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
  constructor(readonly input: BatchGetRecordCommandInput) {
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
  ): Handler<BatchGetRecordCommandInput, BatchGetRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetRecordCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerFeatureStoreRuntimeClient";
    const commandName = "BatchGetRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSageMakerFeatureStoreRuntime",
        operation: "BatchGetRecord",
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
  private serialize(input: BatchGetRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetRecordCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetRecordCommandOutput> {
    return de_BatchGetRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
