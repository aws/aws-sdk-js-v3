// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { ListFHIRDatastoresRequest, ListFHIRDatastoresResponse } from "../models/models_0";
import { de_ListFHIRDatastoresCommand, se_ListFHIRDatastoresCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link ListFHIRDatastoresCommand}.
 */
export interface ListFHIRDatastoresCommandInput extends ListFHIRDatastoresRequest {}
/**
 * @public
 *
 * The output of {@link ListFHIRDatastoresCommand}.
 */
export interface ListFHIRDatastoresCommandOutput extends ListFHIRDatastoresResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store
 *          status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListFHIRDatastoresCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListFHIRDatastoresCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const input = { // ListFHIRDatastoresRequest
 *   Filter: { // DatastoreFilter
 *     DatastoreName: "STRING_VALUE",
 *     DatastoreStatus: "STRING_VALUE",
 *     CreatedBefore: new Date("TIMESTAMP"),
 *     CreatedAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFHIRDatastoresCommand(input);
 * const response = await client.send(command);
 * // { // ListFHIRDatastoresResponse
 * //   DatastorePropertiesList: [ // DatastorePropertiesList // required
 * //     { // DatastoreProperties
 * //       DatastoreId: "STRING_VALUE", // required
 * //       DatastoreArn: "STRING_VALUE", // required
 * //       DatastoreName: "STRING_VALUE",
 * //       DatastoreStatus: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       DatastoreTypeVersion: "STRING_VALUE", // required
 * //       DatastoreEndpoint: "STRING_VALUE", // required
 * //       SseConfiguration: { // SseConfiguration
 * //         KmsEncryptionConfig: { // KmsEncryptionConfig
 * //           CmkType: "STRING_VALUE", // required
 * //           KmsKeyId: "STRING_VALUE",
 * //         },
 * //       },
 * //       PreloadDataConfig: { // PreloadDataConfig
 * //         PreloadDataType: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFHIRDatastoresCommandInput - {@link ListFHIRDatastoresCommandInput}
 * @returns {@link ListFHIRDatastoresCommandOutput}
 * @see {@link ListFHIRDatastoresCommandInput} for command's `input` shape.
 * @see {@link ListFHIRDatastoresCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
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
export class ListFHIRDatastoresCommand extends $Command<
  ListFHIRDatastoresCommandInput,
  ListFHIRDatastoresCommandOutput,
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
  constructor(readonly input: ListFHIRDatastoresCommandInput) {
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
  ): Handler<ListFHIRDatastoresCommandInput, ListFHIRDatastoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFHIRDatastoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "ListFHIRDatastoresCommand";
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
  private serialize(input: ListFHIRDatastoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFHIRDatastoresCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFHIRDatastoresCommandOutput> {
    return de_ListFHIRDatastoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
