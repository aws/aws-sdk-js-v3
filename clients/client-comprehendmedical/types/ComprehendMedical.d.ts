import { ComprehendMedicalClient } from "./ComprehendMedicalClient";
import { DescribeEntitiesDetectionV2JobCommandInput, DescribeEntitiesDetectionV2JobCommandOutput } from "./commands/DescribeEntitiesDetectionV2JobCommand";
import { DescribePHIDetectionJobCommandInput, DescribePHIDetectionJobCommandOutput } from "./commands/DescribePHIDetectionJobCommand";
import { DetectEntitiesCommandInput, DetectEntitiesCommandOutput } from "./commands/DetectEntitiesCommand";
import { DetectEntitiesV2CommandInput, DetectEntitiesV2CommandOutput } from "./commands/DetectEntitiesV2Command";
import { DetectPHICommandInput, DetectPHICommandOutput } from "./commands/DetectPHICommand";
import { InferICD10CMCommandInput, InferICD10CMCommandOutput } from "./commands/InferICD10CMCommand";
import { InferRxNormCommandInput, InferRxNormCommandOutput } from "./commands/InferRxNormCommand";
import { ListEntitiesDetectionV2JobsCommandInput, ListEntitiesDetectionV2JobsCommandOutput } from "./commands/ListEntitiesDetectionV2JobsCommand";
import { ListPHIDetectionJobsCommandInput, ListPHIDetectionJobsCommandOutput } from "./commands/ListPHIDetectionJobsCommand";
import { StartEntitiesDetectionV2JobCommandInput, StartEntitiesDetectionV2JobCommandOutput } from "./commands/StartEntitiesDetectionV2JobCommand";
import { StartPHIDetectionJobCommandInput, StartPHIDetectionJobCommandOutput } from "./commands/StartPHIDetectionJobCommand";
import { StopEntitiesDetectionV2JobCommandInput, StopEntitiesDetectionV2JobCommandOutput } from "./commands/StopEntitiesDetectionV2JobCommand";
import { StopPHIDetectionJobCommandInput, StopPHIDetectionJobCommandOutput } from "./commands/StopPHIDetectionJobCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p> Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions
 *    to gain insight in your documents. </p>
 */
export declare class ComprehendMedical extends ComprehendMedicalClient {
    /**
     * <p>Gets the properties associated with a medical entities detection job. Use this operation to
     *    get the status of a detection job.</p>
     */
    describeEntitiesDetectionV2Job(args: DescribeEntitiesDetectionV2JobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEntitiesDetectionV2JobCommandOutput>;
    describeEntitiesDetectionV2Job(args: DescribeEntitiesDetectionV2JobCommandInput, cb: (err: any, data?: DescribeEntitiesDetectionV2JobCommandOutput) => void): void;
    describeEntitiesDetectionV2Job(args: DescribeEntitiesDetectionV2JobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEntitiesDetectionV2JobCommandOutput) => void): void;
    /**
     * <p>Gets the properties associated with a protected health information (PHI) detection job. Use
     *    this operation to get the status of a detection job.</p>
     */
    describePHIDetectionJob(args: DescribePHIDetectionJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribePHIDetectionJobCommandOutput>;
    describePHIDetectionJob(args: DescribePHIDetectionJobCommandInput, cb: (err: any, data?: DescribePHIDetectionJobCommandOutput) => void): void;
    describePHIDetectionJob(args: DescribePHIDetectionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePHIDetectionJobCommandOutput) => void): void;
    /**
     * <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p>
     *          <p> Inspects the clinical text for a variety of medical entities and returns specific
     *    information about them such as entity category, location, and confidence score on that
     *    information .</p>
     */
    detectEntities(args: DetectEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<DetectEntitiesCommandOutput>;
    detectEntities(args: DetectEntitiesCommandInput, cb: (err: any, data?: DetectEntitiesCommandOutput) => void): void;
    detectEntities(args: DetectEntitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetectEntitiesCommandOutput) => void): void;
    /**
     * <p>Inspects the clinical text for a variety of medical entities and returns specific
     *    information about them such as entity category, location, and confidence score on that
     *    information.</p>
     *          <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a>
     *    operation. This new action uses a different model for determining the entities in your medical
     *    text and changes the way that some entities are returned in the output. You should use the
     *     <code>DetectEntitiesV2</code> operation in all new applications.</p>
     *          <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and
     *     <code>Direction</code> entities as attributes instead of types. </p>
     */
    detectEntitiesV2(args: DetectEntitiesV2CommandInput, options?: __HttpHandlerOptions): Promise<DetectEntitiesV2CommandOutput>;
    detectEntitiesV2(args: DetectEntitiesV2CommandInput, cb: (err: any, data?: DetectEntitiesV2CommandOutput) => void): void;
    detectEntitiesV2(args: DetectEntitiesV2CommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetectEntitiesV2CommandOutput) => void): void;
    /**
     * <p> Inspects the clinical text for protected health information (PHI) entities and entity
     *    category, location, and confidence score on that information.</p>
     */
    detectPHI(args: DetectPHICommandInput, options?: __HttpHandlerOptions): Promise<DetectPHICommandOutput>;
    detectPHI(args: DetectPHICommandInput, cb: (err: any, data?: DetectPHICommandOutput) => void): void;
    detectPHI(args: DetectPHICommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetectPHICommandOutput) => void): void;
    /**
     * <p>InferICD10CM detects medical conditions as entities listed in a patient record and links those
     *    entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control.</p>
     */
    inferICD10CM(args: InferICD10CMCommandInput, options?: __HttpHandlerOptions): Promise<InferICD10CMCommandOutput>;
    inferICD10CM(args: InferICD10CMCommandInput, cb: (err: any, data?: InferICD10CMCommandOutput) => void): void;
    inferICD10CM(args: InferICD10CMCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InferICD10CMCommandOutput) => void): void;
    /**
     * <p>InferRxNorm detects medications as entities listed in a patient record and links to the normalized
     *    concept identifiers in the RxNorm database from the National Library of Medicine.</p>
     */
    inferRxNorm(args: InferRxNormCommandInput, options?: __HttpHandlerOptions): Promise<InferRxNormCommandOutput>;
    inferRxNorm(args: InferRxNormCommandInput, cb: (err: any, data?: InferRxNormCommandOutput) => void): void;
    inferRxNorm(args: InferRxNormCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InferRxNormCommandOutput) => void): void;
    /**
     * <p>Gets a list of medical entity detection jobs that you have submitted.</p>
     */
    listEntitiesDetectionV2Jobs(args: ListEntitiesDetectionV2JobsCommandInput, options?: __HttpHandlerOptions): Promise<ListEntitiesDetectionV2JobsCommandOutput>;
    listEntitiesDetectionV2Jobs(args: ListEntitiesDetectionV2JobsCommandInput, cb: (err: any, data?: ListEntitiesDetectionV2JobsCommandOutput) => void): void;
    listEntitiesDetectionV2Jobs(args: ListEntitiesDetectionV2JobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEntitiesDetectionV2JobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of protected health information (PHI) detection jobs that you have
     *    submitted.</p>
     */
    listPHIDetectionJobs(args: ListPHIDetectionJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListPHIDetectionJobsCommandOutput>;
    listPHIDetectionJobs(args: ListPHIDetectionJobsCommandInput, cb: (err: any, data?: ListPHIDetectionJobsCommandOutput) => void): void;
    listPHIDetectionJobs(args: ListPHIDetectionJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPHIDetectionJobsCommandOutput) => void): void;
    /**
     * <p>Starts an asynchronous medical entity detection job for a collection of documents. Use the
     *     <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.</p>
     */
    startEntitiesDetectionV2Job(args: StartEntitiesDetectionV2JobCommandInput, options?: __HttpHandlerOptions): Promise<StartEntitiesDetectionV2JobCommandOutput>;
    startEntitiesDetectionV2Job(args: StartEntitiesDetectionV2JobCommandInput, cb: (err: any, data?: StartEntitiesDetectionV2JobCommandOutput) => void): void;
    startEntitiesDetectionV2Job(args: StartEntitiesDetectionV2JobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartEntitiesDetectionV2JobCommandOutput) => void): void;
    /**
     * <p>Starts an asynchronous job to detect protected health information (PHI). Use the
     *     <code>DescribePHIDetectionJob</code> operation to track the status of a job.</p>
     */
    startPHIDetectionJob(args: StartPHIDetectionJobCommandInput, options?: __HttpHandlerOptions): Promise<StartPHIDetectionJobCommandOutput>;
    startPHIDetectionJob(args: StartPHIDetectionJobCommandInput, cb: (err: any, data?: StartPHIDetectionJobCommandOutput) => void): void;
    startPHIDetectionJob(args: StartPHIDetectionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartPHIDetectionJobCommandOutput) => void): void;
    /**
     * <p>Stops a medical entities detection job in progress.</p>
     */
    stopEntitiesDetectionV2Job(args: StopEntitiesDetectionV2JobCommandInput, options?: __HttpHandlerOptions): Promise<StopEntitiesDetectionV2JobCommandOutput>;
    stopEntitiesDetectionV2Job(args: StopEntitiesDetectionV2JobCommandInput, cb: (err: any, data?: StopEntitiesDetectionV2JobCommandOutput) => void): void;
    stopEntitiesDetectionV2Job(args: StopEntitiesDetectionV2JobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopEntitiesDetectionV2JobCommandOutput) => void): void;
    /**
     * <p>Stops a protected health information (PHI) detection job in progress.</p>
     */
    stopPHIDetectionJob(args: StopPHIDetectionJobCommandInput, options?: __HttpHandlerOptions): Promise<StopPHIDetectionJobCommandOutput>;
    stopPHIDetectionJob(args: StopPHIDetectionJobCommandInput, cb: (err: any, data?: StopPHIDetectionJobCommandOutput) => void): void;
    stopPHIDetectionJob(args: StopPHIDetectionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopPHIDetectionJobCommandOutput) => void): void;
}
