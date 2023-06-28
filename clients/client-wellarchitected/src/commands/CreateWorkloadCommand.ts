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

import { CreateWorkloadInput, CreateWorkloadOutput } from "../models/models_0";
import { de_CreateWorkloadCommand, se_CreateWorkloadCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkloadCommand}.
 */
export interface CreateWorkloadCommandInput extends CreateWorkloadInput {}
/**
 * @public
 *
 * The output of {@link CreateWorkloadCommand}.
 */
export interface CreateWorkloadCommandOutput extends CreateWorkloadOutput, __MetadataBearer {}

/**
 * @public
 * <p>Create a new workload.</p>
 *          <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users,
 *             an organization, and organizational units (OUs)
 *             in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the
 *                 <i>Well-Architected Tool User Guide</i>.</p>
 *          <important>
 *             <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when
 *                 creating a workload.</p>
 *             <p>You also must specify <code>ReviewOwner</code>, even though the
 *                 parameter is listed as not being required in the following section.
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateWorkloadInput
 *   WorkloadName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Environment: "PRODUCTION" || "PREPRODUCTION", // required
 *   AccountIds: [ // WorkloadAccountIds
 *     "STRING_VALUE",
 *   ],
 *   AwsRegions: [ // WorkloadAwsRegions
 *     "STRING_VALUE",
 *   ],
 *   NonAwsRegions: [ // WorkloadNonAwsRegions
 *     "STRING_VALUE",
 *   ],
 *   PillarPriorities: [ // WorkloadPillarPriorities
 *     "STRING_VALUE",
 *   ],
 *   ArchitecturalDesign: "STRING_VALUE",
 *   ReviewOwner: "STRING_VALUE",
 *   IndustryType: "STRING_VALUE",
 *   Industry: "STRING_VALUE",
 *   Lenses: [ // WorkloadLenses // required
 *     "STRING_VALUE",
 *   ],
 *   Notes: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DiscoveryConfig: { // WorkloadDiscoveryConfig
 *     TrustedAdvisorIntegrationStatus: "ENABLED" || "DISABLED",
 *     WorkloadResourceDefinition: [ // WorkloadResourceDefinition
 *       "WORKLOAD_METADATA" || "APP_REGISTRY",
 *     ],
 *   },
 *   Applications: [ // WorkloadApplications
 *     "STRING_VALUE",
 *   ],
 *   ProfileArns: [ // WorkloadProfileArns
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateWorkloadCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkloadOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   WorkloadArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkloadCommandInput - {@link CreateWorkloadCommandInput}
 * @returns {@link CreateWorkloadCommandOutput}
 * @see {@link CreateWorkloadCommandInput} for command's `input` shape.
 * @see {@link CreateWorkloadCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class CreateWorkloadCommand extends $Command<
  CreateWorkloadCommandInput,
  CreateWorkloadCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: CreateWorkloadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorkloadCommandInput, CreateWorkloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkloadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "CreateWorkloadCommand";
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
  private serialize(input: CreateWorkloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWorkloadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkloadCommandOutput> {
    return de_CreateWorkloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
