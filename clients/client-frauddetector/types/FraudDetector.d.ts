import { FraudDetectorClient } from "./FraudDetectorClient";
import { BatchCreateVariableCommandInput, BatchCreateVariableCommandOutput } from "./commands/BatchCreateVariableCommand";
import { BatchGetVariableCommandInput, BatchGetVariableCommandOutput } from "./commands/BatchGetVariableCommand";
import { CreateDetectorVersionCommandInput, CreateDetectorVersionCommandOutput } from "./commands/CreateDetectorVersionCommand";
import { CreateModelVersionCommandInput, CreateModelVersionCommandOutput } from "./commands/CreateModelVersionCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import { CreateVariableCommandInput, CreateVariableCommandOutput } from "./commands/CreateVariableCommand";
import { DeleteDetectorVersionCommandInput, DeleteDetectorVersionCommandOutput } from "./commands/DeleteDetectorVersionCommand";
import { DeleteEventCommandInput, DeleteEventCommandOutput } from "./commands/DeleteEventCommand";
import { DescribeDetectorCommandInput, DescribeDetectorCommandOutput } from "./commands/DescribeDetectorCommand";
import { DescribeModelVersionsCommandInput, DescribeModelVersionsCommandOutput } from "./commands/DescribeModelVersionsCommand";
import { GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput } from "./commands/GetDetectorVersionCommand";
import { GetDetectorsCommandInput, GetDetectorsCommandOutput } from "./commands/GetDetectorsCommand";
import { GetExternalModelsCommandInput, GetExternalModelsCommandOutput } from "./commands/GetExternalModelsCommand";
import { GetModelVersionCommandInput, GetModelVersionCommandOutput } from "./commands/GetModelVersionCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import { GetOutcomesCommandInput, GetOutcomesCommandOutput } from "./commands/GetOutcomesCommand";
import { GetPredictionCommandInput, GetPredictionCommandOutput } from "./commands/GetPredictionCommand";
import { GetRulesCommandInput, GetRulesCommandOutput } from "./commands/GetRulesCommand";
import { GetVariablesCommandInput, GetVariablesCommandOutput } from "./commands/GetVariablesCommand";
import { PutDetectorCommandInput, PutDetectorCommandOutput } from "./commands/PutDetectorCommand";
import { PutExternalModelCommandInput, PutExternalModelCommandOutput } from "./commands/PutExternalModelCommand";
import { PutModelCommandInput, PutModelCommandOutput } from "./commands/PutModelCommand";
import { PutOutcomeCommandInput, PutOutcomeCommandOutput } from "./commands/PutOutcomeCommand";
import { UpdateDetectorVersionCommandInput, UpdateDetectorVersionCommandOutput } from "./commands/UpdateDetectorVersionCommand";
import { UpdateDetectorVersionMetadataCommandInput, UpdateDetectorVersionMetadataCommandOutput } from "./commands/UpdateDetectorVersionMetadataCommand";
import { UpdateDetectorVersionStatusCommandInput, UpdateDetectorVersionStatusCommandOutput } from "./commands/UpdateDetectorVersionStatusCommand";
import { UpdateModelVersionCommandInput, UpdateModelVersionCommandOutput } from "./commands/UpdateModelVersionCommand";
import { UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput } from "./commands/UpdateRuleMetadataCommand";
import { UpdateRuleVersionCommandInput, UpdateRuleVersionCommandOutput } from "./commands/UpdateRuleVersionCommand";
import { UpdateVariableCommandInput, UpdateVariableCommandOutput } from "./commands/UpdateVariableCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>This is the Amazon Fraud Detector API Reference. This guide is for developers who need
 *             detailed information about Amazon Fraud Detector API actions, data types, and errors. For
 *             more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.</p>
 */
export declare class FraudDetector extends FraudDetectorClient {
    /**
     * <p>Creates a batch of variables.</p>
     */
    batchCreateVariable(args: BatchCreateVariableCommandInput, options?: __HttpHandlerOptions): Promise<BatchCreateVariableCommandOutput>;
    batchCreateVariable(args: BatchCreateVariableCommandInput, cb: (err: any, data?: BatchCreateVariableCommandOutput) => void): void;
    batchCreateVariable(args: BatchCreateVariableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchCreateVariableCommandOutput) => void): void;
    /**
     * <p>Gets a batch of variables.</p>
     */
    batchGetVariable(args: BatchGetVariableCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetVariableCommandOutput>;
    batchGetVariable(args: BatchGetVariableCommandInput, cb: (err: any, data?: BatchGetVariableCommandOutput) => void): void;
    batchGetVariable(args: BatchGetVariableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetVariableCommandOutput) => void): void;
    /**
     * <p>Creates a detector version. The detector version starts in a <code>DRAFT</code> status.</p>
     */
    createDetectorVersion(args: CreateDetectorVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateDetectorVersionCommandOutput>;
    createDetectorVersion(args: CreateDetectorVersionCommandInput, cb: (err: any, data?: CreateDetectorVersionCommandOutput) => void): void;
    createDetectorVersion(args: CreateDetectorVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDetectorVersionCommandOutput) => void): void;
    /**
     * <p>Creates a version of the model using the specified model type.
     *         </p>
     */
    createModelVersion(args: CreateModelVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelVersionCommandOutput>;
    createModelVersion(args: CreateModelVersionCommandInput, cb: (err: any, data?: CreateModelVersionCommandOutput) => void): void;
    createModelVersion(args: CreateModelVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelVersionCommandOutput) => void): void;
    /**
     * <p>Creates a rule for use with the specified detector. </p>
     */
    createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
    createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
    createRule(args: CreateRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
    /**
     * <p>Creates a variable.</p>
     */
    createVariable(args: CreateVariableCommandInput, options?: __HttpHandlerOptions): Promise<CreateVariableCommandOutput>;
    createVariable(args: CreateVariableCommandInput, cb: (err: any, data?: CreateVariableCommandOutput) => void): void;
    createVariable(args: CreateVariableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVariableCommandOutput) => void): void;
    /**
     * <p>Deletes the detector version.</p>
     */
    deleteDetectorVersion(args: DeleteDetectorVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDetectorVersionCommandOutput>;
    deleteDetectorVersion(args: DeleteDetectorVersionCommandInput, cb: (err: any, data?: DeleteDetectorVersionCommandOutput) => void): void;
    deleteDetectorVersion(args: DeleteDetectorVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDetectorVersionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified event.</p>
     */
    deleteEvent(args: DeleteEventCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventCommandOutput>;
    deleteEvent(args: DeleteEventCommandInput, cb: (err: any, data?: DeleteEventCommandOutput) => void): void;
    deleteEvent(args: DeleteEventCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEventCommandOutput) => void): void;
    /**
     * <p>Gets all versions for a specified detector.</p>
     */
    describeDetector(args: DescribeDetectorCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDetectorCommandOutput>;
    describeDetector(args: DescribeDetectorCommandInput, cb: (err: any, data?: DescribeDetectorCommandOutput) => void): void;
    describeDetector(args: DescribeDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDetectorCommandOutput) => void): void;
    /**
     * <p>Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. </p>
     */
    describeModelVersions(args: DescribeModelVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelVersionsCommandOutput>;
    describeModelVersions(args: DescribeModelVersionsCommandInput, cb: (err: any, data?: DescribeModelVersionsCommandOutput) => void): void;
    describeModelVersions(args: DescribeModelVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelVersionsCommandOutput) => void): void;
    /**
     * <p>Gets a particular detector version. </p>
     */
    getDetectorVersion(args: GetDetectorVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetDetectorVersionCommandOutput>;
    getDetectorVersion(args: GetDetectorVersionCommandInput, cb: (err: any, data?: GetDetectorVersionCommandOutput) => void): void;
    getDetectorVersion(args: GetDetectorVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDetectorVersionCommandOutput) => void): void;
    /**
     * <p>Gets all of detectors. This is a paginated API. If you
     *          provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of 10 records
     *          per page. If you provide a <code>maxSizePerPage</code>, the value must be between 5 and 10.
     *          To get the next page results, provide the pagination token from the
     *             <code>GetEventTypesResponse</code> as part of your request. A null pagination token
     *          fetches the records from the beginning. </p>
     */
    getDetectors(args: GetDetectorsCommandInput, options?: __HttpHandlerOptions): Promise<GetDetectorsCommandOutput>;
    getDetectors(args: GetDetectorsCommandInput, cb: (err: any, data?: GetDetectorsCommandOutput) => void): void;
    getDetectors(args: GetDetectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDetectorsCommandOutput) => void): void;
    /**
     * <p>Gets the details for one or more Amazon SageMaker models that have been imported into the
     *          service. This is a paginated API. If you provide a null <code>maxSizePerPage</code>, this
     *          actions retrieves a maximum of 10 records per page. If you provide a
     *             <code>maxSizePerPage</code>, the value must be between 5 and 10. To get the next page
     *          results, provide the pagination token from the <code>GetExternalModelsResult</code> as part
     *          of your request. A null pagination token fetches the records from the beginning. </p>
     */
    getExternalModels(args: GetExternalModelsCommandInput, options?: __HttpHandlerOptions): Promise<GetExternalModelsCommandOutput>;
    getExternalModels(args: GetExternalModelsCommandInput, cb: (err: any, data?: GetExternalModelsCommandOutput) => void): void;
    getExternalModels(args: GetExternalModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetExternalModelsCommandOutput) => void): void;
    /**
     * <p>Gets a model version. </p>
     */
    getModelVersion(args: GetModelVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetModelVersionCommandOutput>;
    getModelVersion(args: GetModelVersionCommandInput, cb: (err: any, data?: GetModelVersionCommandOutput) => void): void;
    getModelVersion(args: GetModelVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetModelVersionCommandOutput) => void): void;
    /**
     * <p>Gets all of the models for the AWS account, or the specified model type, or gets a single model for the specified model type, model ID combination.
     *         </p>
     */
    getModels(args: GetModelsCommandInput, options?: __HttpHandlerOptions): Promise<GetModelsCommandOutput>;
    getModels(args: GetModelsCommandInput, cb: (err: any, data?: GetModelsCommandOutput) => void): void;
    getModels(args: GetModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetModelsCommandOutput) => void): void;
    /**
     * <p>Gets one or more outcomes. This is a paginated
     *          API. If you provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of
     *          10 records per page. If you provide a <code>maxSizePerPage</code>, the value must be
     *          between 50 and 100. To get the next page results, provide the pagination token from the
     *         <code>GetOutcomesResult</code> as part of your request. A null pagination token
     *          fetches the records from the beginning. </p>
     */
    getOutcomes(args: GetOutcomesCommandInput, options?: __HttpHandlerOptions): Promise<GetOutcomesCommandOutput>;
    getOutcomes(args: GetOutcomesCommandInput, cb: (err: any, data?: GetOutcomesCommandOutput) => void): void;
    getOutcomes(args: GetOutcomesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOutcomesCommandOutput) => void): void;
    /**
     * <p>Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.  </p>
     */
    getPrediction(args: GetPredictionCommandInput, options?: __HttpHandlerOptions): Promise<GetPredictionCommandOutput>;
    getPrediction(args: GetPredictionCommandInput, cb: (err: any, data?: GetPredictionCommandOutput) => void): void;
    getPrediction(args: GetPredictionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPredictionCommandOutput) => void): void;
    /**
     * <p>Gets all rules available for the specified detector.</p>
     */
    getRules(args: GetRulesCommandInput, options?: __HttpHandlerOptions): Promise<GetRulesCommandOutput>;
    getRules(args: GetRulesCommandInput, cb: (err: any, data?: GetRulesCommandOutput) => void): void;
    getRules(args: GetRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRulesCommandOutput) => void): void;
    /**
     * <p>Gets all of the variables or the specific variable. This is a
     *          paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of
     *          100 records per page. If you provide <code>maxSizePerPage</code> the value must be between
     *          50 and 100. To get the next page result, a provide a pagination token from
     *         <code>GetVariablesResult</code> as part of your request. Null pagination token
     *          fetches the records from the beginning. </p>
     */
    getVariables(args: GetVariablesCommandInput, options?: __HttpHandlerOptions): Promise<GetVariablesCommandOutput>;
    getVariables(args: GetVariablesCommandInput, cb: (err: any, data?: GetVariablesCommandOutput) => void): void;
    getVariables(args: GetVariablesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetVariablesCommandOutput) => void): void;
    /**
     * <p>Creates or updates a detector. </p>
     */
    putDetector(args: PutDetectorCommandInput, options?: __HttpHandlerOptions): Promise<PutDetectorCommandOutput>;
    putDetector(args: PutDetectorCommandInput, cb: (err: any, data?: PutDetectorCommandOutput) => void): void;
    putDetector(args: PutDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDetectorCommandOutput) => void): void;
    /**
     * <p>Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.  </p>
     */
    putExternalModel(args: PutExternalModelCommandInput, options?: __HttpHandlerOptions): Promise<PutExternalModelCommandOutput>;
    putExternalModel(args: PutExternalModelCommandInput, cb: (err: any, data?: PutExternalModelCommandOutput) => void): void;
    putExternalModel(args: PutExternalModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutExternalModelCommandOutput) => void): void;
    /**
     * <p>Creates or updates a model. </p>
     */
    putModel(args: PutModelCommandInput, options?: __HttpHandlerOptions): Promise<PutModelCommandOutput>;
    putModel(args: PutModelCommandInput, cb: (err: any, data?: PutModelCommandOutput) => void): void;
    putModel(args: PutModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutModelCommandOutput) => void): void;
    /**
     * <p>Creates or updates an outcome. </p>
     */
    putOutcome(args: PutOutcomeCommandInput, options?: __HttpHandlerOptions): Promise<PutOutcomeCommandOutput>;
    putOutcome(args: PutOutcomeCommandInput, cb: (err: any, data?: PutOutcomeCommandOutput) => void): void;
    putOutcome(args: PutOutcomeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutOutcomeCommandOutput) => void): void;
    /**
     * <p> Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, and description. You can only update a <code>DRAFT</code> detector version.</p>
     */
    updateDetectorVersion(args: UpdateDetectorVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDetectorVersionCommandOutput>;
    updateDetectorVersion(args: UpdateDetectorVersionCommandInput, cb: (err: any, data?: UpdateDetectorVersionCommandOutput) => void): void;
    updateDetectorVersion(args: UpdateDetectorVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDetectorVersionCommandOutput) => void): void;
    /**
     * <p>Updates the detector version's description. You can update the metadata for any detector version (<code>DRAFT, ACTIVE,</code> or
     *                 <code>INACTIVE</code>). </p>
     */
    updateDetectorVersionMetadata(args: UpdateDetectorVersionMetadataCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDetectorVersionMetadataCommandOutput>;
    updateDetectorVersionMetadata(args: UpdateDetectorVersionMetadataCommandInput, cb: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void): void;
    updateDetectorVersionMetadata(args: UpdateDetectorVersionMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void): void;
    /**
     * <p>Updates the detector version’s status. You can perform the following promotions or
     *             demotions using <code>UpdateDetectorVersionStatus</code>: <code>DRAFT</code> to <code>ACTIVE</code>, <code>ACTIVE</code> to <code>INACTIVE</code>, and <code>INACTIVE</code> to <code>ACTIVE</code>.</p>
     */
    updateDetectorVersionStatus(args: UpdateDetectorVersionStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDetectorVersionStatusCommandOutput>;
    updateDetectorVersionStatus(args: UpdateDetectorVersionStatusCommandInput, cb: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void): void;
    updateDetectorVersionStatus(args: UpdateDetectorVersionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void): void;
    /**
     * <p>Updates a model version. You can update the description and status attributes
     *             using this action. You can perform the following status updates: </p>
     *         <ol>
     *             <li>
     *                 <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>
     *                     </p>
     *             </li>
     *             <li>
     *                 <p>Change <code>ACTIVE</code> back to <code>TRAINING_COMPLETE</code>
     *                     </p>
     *             </li>
     *          </ol>
     */
    updateModelVersion(args: UpdateModelVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelVersionCommandOutput>;
    updateModelVersion(args: UpdateModelVersionCommandInput, cb: (err: any, data?: UpdateModelVersionCommandOutput) => void): void;
    updateModelVersion(args: UpdateModelVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateModelVersionCommandOutput) => void): void;
    /**
     * <p>Updates a rule's metadata. </p>
     */
    updateRuleMetadata(args: UpdateRuleMetadataCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleMetadataCommandOutput>;
    updateRuleMetadata(args: UpdateRuleMetadataCommandInput, cb: (err: any, data?: UpdateRuleMetadataCommandOutput) => void): void;
    updateRuleMetadata(args: UpdateRuleMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRuleMetadataCommandOutput) => void): void;
    /**
     * <p>Updates a rule version resulting in a new rule version. </p>
     */
    updateRuleVersion(args: UpdateRuleVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleVersionCommandOutput>;
    updateRuleVersion(args: UpdateRuleVersionCommandInput, cb: (err: any, data?: UpdateRuleVersionCommandOutput) => void): void;
    updateRuleVersion(args: UpdateRuleVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRuleVersionCommandOutput) => void): void;
    /**
     * <p>Updates a variable.</p>
     */
    updateVariable(args: UpdateVariableCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVariableCommandOutput>;
    updateVariable(args: UpdateVariableCommandInput, cb: (err: any, data?: UpdateVariableCommandOutput) => void): void;
    updateVariable(args: UpdateVariableCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVariableCommandOutput) => void): void;
}
