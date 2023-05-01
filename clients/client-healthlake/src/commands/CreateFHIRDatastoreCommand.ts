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

import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { CreateFHIRDatastoreRequest, CreateFHIRDatastoreResponse } from "../models/models_0";
import { de_CreateFHIRDatastoreCommand, se_CreateFHIRDatastoreCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link CreateFHIRDatastoreCommand}.
 */
export interface CreateFHIRDatastoreCommandInput extends CreateFHIRDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateFHIRDatastoreCommand}.
 */
export interface CreateFHIRDatastoreCommandOutput extends CreateFHIRDatastoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Data Store that can ingest and export FHIR formatted data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, CreateFHIRDatastoreCommand } from '@aws-sdk/client-healthlake'; // ES Modules import
 * // const { HealthLakeClient, CreateFHIRDatastoreCommand } = require('@aws-sdk/client-healthlake'); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const input = { // CreateFHIRDatastoreRequest
 *   DatastoreName: 'STRING_VALUE',
 *   DatastoreTypeVersion: 'STRING_VALUE', // required
 *   SseConfiguration: { // SseConfiguration
 *     KmsEncryptionConfig: { // KmsEncryptionConfig
 *       CmkType: 'STRING_VALUE', // required
 *       KmsKeyId: 'STRING_VALUE',
 *     },
 *   },
 *   PreloadDataConfig: { // PreloadDataConfig
 *     PreloadDataType: 'STRING_VALUE', // required
 *   },
 *   ClientToken: 'STRING_VALUE',
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: 'STRING_VALUE', // required
 *       Value: 'STRING_VALUE', // required
 *     },
 *   ],
 * };
 * const command = new CreateFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * /**
 * { // CreateFHIRDatastoreResponse
 *   DatastoreId: 'STRING_VALUE', // required
 *   DatastoreArn: 'STRING_VALUE', // required
 *   DatastoreStatus: 'STRING_VALUE', // required
 *   DatastoreEndpoint: 'STRING_VALUE', // required
 * };
 *
 * ```
 *
 * @param CreateFHIRDatastoreCommandInput - {@link CreateFHIRDatastoreCommandInput}
 * @returns {@link CreateFHIRDatastoreCommandOutput}
 * @see {@link CreateFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link CreateFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unknown error occurs in the service.</p>
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
export class CreateFHIRDatastoreCommand extends $Command<
  CreateFHIRDatastoreCommandInput,
  CreateFHIRDatastoreCommandOutput,
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
  constructor(readonly input: CreateFHIRDatastoreCommandInput) {
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
  ): Handler<CreateFHIRDatastoreCommandInput, CreateFHIRDatastoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFHIRDatastoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "CreateFHIRDatastoreCommand";
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
  private serialize(input: CreateFHIRDatastoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFHIRDatastoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFHIRDatastoreCommandOutput> {
    return de_CreateFHIRDatastoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
