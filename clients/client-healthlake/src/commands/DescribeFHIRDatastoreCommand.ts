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

import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { DescribeFHIRDatastoreRequest, DescribeFHIRDatastoreResponse } from "../models/models_0";
import { de_DescribeFHIRDatastoreCommand, se_DescribeFHIRDatastoreCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFHIRDatastoreCommand}.
 */
export interface DescribeFHIRDatastoreCommandInput extends DescribeFHIRDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFHIRDatastoreCommand}.
 */
export interface DescribeFHIRDatastoreCommandOutput extends DescribeFHIRDatastoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the properties associated with the FHIR data store, including the data store ID,
 *          data store ARN, data store name, data store status, when the data store was created, data store type version, and the data store's endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const input = { // DescribeFHIRDatastoreRequest
 *   DatastoreId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFHIRDatastoreResponse
 * //   DatastoreProperties: { // DatastoreProperties
 * //     DatastoreId: "STRING_VALUE", // required
 * //     DatastoreArn: "STRING_VALUE", // required
 * //     DatastoreName: "STRING_VALUE",
 * //     DatastoreStatus: "CREATING" || "ACTIVE" || "DELETING" || "DELETED", // required
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DatastoreTypeVersion: "R4", // required
 * //     DatastoreEndpoint: "STRING_VALUE", // required
 * //     SseConfiguration: { // SseConfiguration
 * //       KmsEncryptionConfig: { // KmsEncryptionConfig
 * //         CmkType: "CUSTOMER_MANAGED_KMS_KEY" || "AWS_OWNED_KMS_KEY", // required
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //     },
 * //     PreloadDataConfig: { // PreloadDataConfig
 * //       PreloadDataType: "SYNTHEA", // required
 * //     },
 * //     IdentityProviderConfiguration: { // IdentityProviderConfiguration
 * //       AuthorizationStrategy: "SMART_ON_FHIR_V1" || "AWS_AUTH", // required
 * //       FineGrainedAuthorizationEnabled: true || false,
 * //       Metadata: "STRING_VALUE",
 * //       IdpLambdaArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFHIRDatastoreCommandInput - {@link DescribeFHIRDatastoreCommandInput}
 * @returns {@link DescribeFHIRDatastoreCommandOutput}
 * @see {@link DescribeFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unknown error occurs in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The requested data store was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 */
export class DescribeFHIRDatastoreCommand extends $Command<
  DescribeFHIRDatastoreCommandInput,
  DescribeFHIRDatastoreCommandOutput,
  HealthLakeClientResolvedConfig
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
  constructor(readonly input: DescribeFHIRDatastoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFHIRDatastoreCommandInput, DescribeFHIRDatastoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFHIRDatastoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "DescribeFHIRDatastoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "HealthLake",
        operation: "DescribeFHIRDatastore",
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
  private serialize(input: DescribeFHIRDatastoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFHIRDatastoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFHIRDatastoreCommandOutput> {
    return de_DescribeFHIRDatastoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
