// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DescribeEntitiesDetectionV2JobCommand,
  DescribeEntitiesDetectionV2JobCommandInput,
  DescribeEntitiesDetectionV2JobCommandOutput,
} from "./commands/DescribeEntitiesDetectionV2JobCommand";
import {
  DescribeICD10CMInferenceJobCommand,
  DescribeICD10CMInferenceJobCommandInput,
  DescribeICD10CMInferenceJobCommandOutput,
} from "./commands/DescribeICD10CMInferenceJobCommand";
import {
  DescribePHIDetectionJobCommand,
  DescribePHIDetectionJobCommandInput,
  DescribePHIDetectionJobCommandOutput,
} from "./commands/DescribePHIDetectionJobCommand";
import {
  DescribeRxNormInferenceJobCommand,
  DescribeRxNormInferenceJobCommandInput,
  DescribeRxNormInferenceJobCommandOutput,
} from "./commands/DescribeRxNormInferenceJobCommand";
import {
  DescribeSNOMEDCTInferenceJobCommand,
  DescribeSNOMEDCTInferenceJobCommandInput,
  DescribeSNOMEDCTInferenceJobCommandOutput,
} from "./commands/DescribeSNOMEDCTInferenceJobCommand";
import {
  DetectEntitiesCommand,
  DetectEntitiesCommandInput,
  DetectEntitiesCommandOutput,
} from "./commands/DetectEntitiesCommand";
import {
  DetectEntitiesV2Command,
  DetectEntitiesV2CommandInput,
  DetectEntitiesV2CommandOutput,
} from "./commands/DetectEntitiesV2Command";
import { DetectPHICommand, DetectPHICommandInput, DetectPHICommandOutput } from "./commands/DetectPHICommand";
import {
  InferICD10CMCommand,
  InferICD10CMCommandInput,
  InferICD10CMCommandOutput,
} from "./commands/InferICD10CMCommand";
import { InferRxNormCommand, InferRxNormCommandInput, InferRxNormCommandOutput } from "./commands/InferRxNormCommand";
import {
  InferSNOMEDCTCommand,
  InferSNOMEDCTCommandInput,
  InferSNOMEDCTCommandOutput,
} from "./commands/InferSNOMEDCTCommand";
import {
  ListEntitiesDetectionV2JobsCommand,
  ListEntitiesDetectionV2JobsCommandInput,
  ListEntitiesDetectionV2JobsCommandOutput,
} from "./commands/ListEntitiesDetectionV2JobsCommand";
import {
  ListICD10CMInferenceJobsCommand,
  ListICD10CMInferenceJobsCommandInput,
  ListICD10CMInferenceJobsCommandOutput,
} from "./commands/ListICD10CMInferenceJobsCommand";
import {
  ListPHIDetectionJobsCommand,
  ListPHIDetectionJobsCommandInput,
  ListPHIDetectionJobsCommandOutput,
} from "./commands/ListPHIDetectionJobsCommand";
import {
  ListRxNormInferenceJobsCommand,
  ListRxNormInferenceJobsCommandInput,
  ListRxNormInferenceJobsCommandOutput,
} from "./commands/ListRxNormInferenceJobsCommand";
import {
  ListSNOMEDCTInferenceJobsCommand,
  ListSNOMEDCTInferenceJobsCommandInput,
  ListSNOMEDCTInferenceJobsCommandOutput,
} from "./commands/ListSNOMEDCTInferenceJobsCommand";
import {
  StartEntitiesDetectionV2JobCommand,
  StartEntitiesDetectionV2JobCommandInput,
  StartEntitiesDetectionV2JobCommandOutput,
} from "./commands/StartEntitiesDetectionV2JobCommand";
import {
  StartICD10CMInferenceJobCommand,
  StartICD10CMInferenceJobCommandInput,
  StartICD10CMInferenceJobCommandOutput,
} from "./commands/StartICD10CMInferenceJobCommand";
import {
  StartPHIDetectionJobCommand,
  StartPHIDetectionJobCommandInput,
  StartPHIDetectionJobCommandOutput,
} from "./commands/StartPHIDetectionJobCommand";
import {
  StartRxNormInferenceJobCommand,
  StartRxNormInferenceJobCommandInput,
  StartRxNormInferenceJobCommandOutput,
} from "./commands/StartRxNormInferenceJobCommand";
import {
  StartSNOMEDCTInferenceJobCommand,
  StartSNOMEDCTInferenceJobCommandInput,
  StartSNOMEDCTInferenceJobCommandOutput,
} from "./commands/StartSNOMEDCTInferenceJobCommand";
import {
  StopEntitiesDetectionV2JobCommand,
  StopEntitiesDetectionV2JobCommandInput,
  StopEntitiesDetectionV2JobCommandOutput,
} from "./commands/StopEntitiesDetectionV2JobCommand";
import {
  StopICD10CMInferenceJobCommand,
  StopICD10CMInferenceJobCommandInput,
  StopICD10CMInferenceJobCommandOutput,
} from "./commands/StopICD10CMInferenceJobCommand";
import {
  StopPHIDetectionJobCommand,
  StopPHIDetectionJobCommandInput,
  StopPHIDetectionJobCommandOutput,
} from "./commands/StopPHIDetectionJobCommand";
import {
  StopRxNormInferenceJobCommand,
  StopRxNormInferenceJobCommandInput,
  StopRxNormInferenceJobCommandOutput,
} from "./commands/StopRxNormInferenceJobCommand";
import {
  StopSNOMEDCTInferenceJobCommand,
  StopSNOMEDCTInferenceJobCommandInput,
  StopSNOMEDCTInferenceJobCommandOutput,
} from "./commands/StopSNOMEDCTInferenceJobCommand";
import { ComprehendMedicalClient, ComprehendMedicalClientConfig } from "./ComprehendMedicalClient";

const commands = {
  DescribeEntitiesDetectionV2JobCommand,
  DescribeICD10CMInferenceJobCommand,
  DescribePHIDetectionJobCommand,
  DescribeRxNormInferenceJobCommand,
  DescribeSNOMEDCTInferenceJobCommand,
  DetectEntitiesCommand,
  DetectEntitiesV2Command,
  DetectPHICommand,
  InferICD10CMCommand,
  InferRxNormCommand,
  InferSNOMEDCTCommand,
  ListEntitiesDetectionV2JobsCommand,
  ListICD10CMInferenceJobsCommand,
  ListPHIDetectionJobsCommand,
  ListRxNormInferenceJobsCommand,
  ListSNOMEDCTInferenceJobsCommand,
  StartEntitiesDetectionV2JobCommand,
  StartICD10CMInferenceJobCommand,
  StartPHIDetectionJobCommand,
  StartRxNormInferenceJobCommand,
  StartSNOMEDCTInferenceJobCommand,
  StopEntitiesDetectionV2JobCommand,
  StopICD10CMInferenceJobCommand,
  StopPHIDetectionJobCommand,
  StopRxNormInferenceJobCommand,
  StopSNOMEDCTInferenceJobCommand,
};

export interface ComprehendMedical {
  /**
   * @see {@link DescribeEntitiesDetectionV2JobCommand}
   */
  describeEntitiesDetectionV2Job(
    args: DescribeEntitiesDetectionV2JobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEntitiesDetectionV2JobCommandOutput>;
  describeEntitiesDetectionV2Job(
    args: DescribeEntitiesDetectionV2JobCommandInput,
    cb: (err: any, data?: DescribeEntitiesDetectionV2JobCommandOutput) => void
  ): void;
  describeEntitiesDetectionV2Job(
    args: DescribeEntitiesDetectionV2JobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEntitiesDetectionV2JobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeICD10CMInferenceJobCommand}
   */
  describeICD10CMInferenceJob(
    args: DescribeICD10CMInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeICD10CMInferenceJobCommandOutput>;
  describeICD10CMInferenceJob(
    args: DescribeICD10CMInferenceJobCommandInput,
    cb: (err: any, data?: DescribeICD10CMInferenceJobCommandOutput) => void
  ): void;
  describeICD10CMInferenceJob(
    args: DescribeICD10CMInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeICD10CMInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePHIDetectionJobCommand}
   */
  describePHIDetectionJob(
    args: DescribePHIDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePHIDetectionJobCommandOutput>;
  describePHIDetectionJob(
    args: DescribePHIDetectionJobCommandInput,
    cb: (err: any, data?: DescribePHIDetectionJobCommandOutput) => void
  ): void;
  describePHIDetectionJob(
    args: DescribePHIDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePHIDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRxNormInferenceJobCommand}
   */
  describeRxNormInferenceJob(
    args: DescribeRxNormInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRxNormInferenceJobCommandOutput>;
  describeRxNormInferenceJob(
    args: DescribeRxNormInferenceJobCommandInput,
    cb: (err: any, data?: DescribeRxNormInferenceJobCommandOutput) => void
  ): void;
  describeRxNormInferenceJob(
    args: DescribeRxNormInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRxNormInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSNOMEDCTInferenceJobCommand}
   */
  describeSNOMEDCTInferenceJob(
    args: DescribeSNOMEDCTInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSNOMEDCTInferenceJobCommandOutput>;
  describeSNOMEDCTInferenceJob(
    args: DescribeSNOMEDCTInferenceJobCommandInput,
    cb: (err: any, data?: DescribeSNOMEDCTInferenceJobCommandOutput) => void
  ): void;
  describeSNOMEDCTInferenceJob(
    args: DescribeSNOMEDCTInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSNOMEDCTInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectEntitiesCommand}
   */
  detectEntities(
    args: DetectEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectEntitiesCommandOutput>;
  detectEntities(args: DetectEntitiesCommandInput, cb: (err: any, data?: DetectEntitiesCommandOutput) => void): void;
  detectEntities(
    args: DetectEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectEntitiesV2Command}
   */
  detectEntitiesV2(
    args: DetectEntitiesV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectEntitiesV2CommandOutput>;
  detectEntitiesV2(
    args: DetectEntitiesV2CommandInput,
    cb: (err: any, data?: DetectEntitiesV2CommandOutput) => void
  ): void;
  detectEntitiesV2(
    args: DetectEntitiesV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectEntitiesV2CommandOutput) => void
  ): void;

  /**
   * @see {@link DetectPHICommand}
   */
  detectPHI(args: DetectPHICommandInput, options?: __HttpHandlerOptions): Promise<DetectPHICommandOutput>;
  detectPHI(args: DetectPHICommandInput, cb: (err: any, data?: DetectPHICommandOutput) => void): void;
  detectPHI(
    args: DetectPHICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectPHICommandOutput) => void
  ): void;

  /**
   * @see {@link InferICD10CMCommand}
   */
  inferICD10CM(args: InferICD10CMCommandInput, options?: __HttpHandlerOptions): Promise<InferICD10CMCommandOutput>;
  inferICD10CM(args: InferICD10CMCommandInput, cb: (err: any, data?: InferICD10CMCommandOutput) => void): void;
  inferICD10CM(
    args: InferICD10CMCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InferICD10CMCommandOutput) => void
  ): void;

  /**
   * @see {@link InferRxNormCommand}
   */
  inferRxNorm(args: InferRxNormCommandInput, options?: __HttpHandlerOptions): Promise<InferRxNormCommandOutput>;
  inferRxNorm(args: InferRxNormCommandInput, cb: (err: any, data?: InferRxNormCommandOutput) => void): void;
  inferRxNorm(
    args: InferRxNormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InferRxNormCommandOutput) => void
  ): void;

  /**
   * @see {@link InferSNOMEDCTCommand}
   */
  inferSNOMEDCT(args: InferSNOMEDCTCommandInput, options?: __HttpHandlerOptions): Promise<InferSNOMEDCTCommandOutput>;
  inferSNOMEDCT(args: InferSNOMEDCTCommandInput, cb: (err: any, data?: InferSNOMEDCTCommandOutput) => void): void;
  inferSNOMEDCT(
    args: InferSNOMEDCTCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InferSNOMEDCTCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitiesDetectionV2JobsCommand}
   */
  listEntitiesDetectionV2Jobs(
    args: ListEntitiesDetectionV2JobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitiesDetectionV2JobsCommandOutput>;
  listEntitiesDetectionV2Jobs(
    args: ListEntitiesDetectionV2JobsCommandInput,
    cb: (err: any, data?: ListEntitiesDetectionV2JobsCommandOutput) => void
  ): void;
  listEntitiesDetectionV2Jobs(
    args: ListEntitiesDetectionV2JobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesDetectionV2JobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListICD10CMInferenceJobsCommand}
   */
  listICD10CMInferenceJobs(
    args: ListICD10CMInferenceJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListICD10CMInferenceJobsCommandOutput>;
  listICD10CMInferenceJobs(
    args: ListICD10CMInferenceJobsCommandInput,
    cb: (err: any, data?: ListICD10CMInferenceJobsCommandOutput) => void
  ): void;
  listICD10CMInferenceJobs(
    args: ListICD10CMInferenceJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListICD10CMInferenceJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPHIDetectionJobsCommand}
   */
  listPHIDetectionJobs(
    args: ListPHIDetectionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPHIDetectionJobsCommandOutput>;
  listPHIDetectionJobs(
    args: ListPHIDetectionJobsCommandInput,
    cb: (err: any, data?: ListPHIDetectionJobsCommandOutput) => void
  ): void;
  listPHIDetectionJobs(
    args: ListPHIDetectionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPHIDetectionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRxNormInferenceJobsCommand}
   */
  listRxNormInferenceJobs(
    args: ListRxNormInferenceJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRxNormInferenceJobsCommandOutput>;
  listRxNormInferenceJobs(
    args: ListRxNormInferenceJobsCommandInput,
    cb: (err: any, data?: ListRxNormInferenceJobsCommandOutput) => void
  ): void;
  listRxNormInferenceJobs(
    args: ListRxNormInferenceJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRxNormInferenceJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSNOMEDCTInferenceJobsCommand}
   */
  listSNOMEDCTInferenceJobs(
    args: ListSNOMEDCTInferenceJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSNOMEDCTInferenceJobsCommandOutput>;
  listSNOMEDCTInferenceJobs(
    args: ListSNOMEDCTInferenceJobsCommandInput,
    cb: (err: any, data?: ListSNOMEDCTInferenceJobsCommandOutput) => void
  ): void;
  listSNOMEDCTInferenceJobs(
    args: ListSNOMEDCTInferenceJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSNOMEDCTInferenceJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEntitiesDetectionV2JobCommand}
   */
  startEntitiesDetectionV2Job(
    args: StartEntitiesDetectionV2JobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEntitiesDetectionV2JobCommandOutput>;
  startEntitiesDetectionV2Job(
    args: StartEntitiesDetectionV2JobCommandInput,
    cb: (err: any, data?: StartEntitiesDetectionV2JobCommandOutput) => void
  ): void;
  startEntitiesDetectionV2Job(
    args: StartEntitiesDetectionV2JobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEntitiesDetectionV2JobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartICD10CMInferenceJobCommand}
   */
  startICD10CMInferenceJob(
    args: StartICD10CMInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartICD10CMInferenceJobCommandOutput>;
  startICD10CMInferenceJob(
    args: StartICD10CMInferenceJobCommandInput,
    cb: (err: any, data?: StartICD10CMInferenceJobCommandOutput) => void
  ): void;
  startICD10CMInferenceJob(
    args: StartICD10CMInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartICD10CMInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPHIDetectionJobCommand}
   */
  startPHIDetectionJob(
    args: StartPHIDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPHIDetectionJobCommandOutput>;
  startPHIDetectionJob(
    args: StartPHIDetectionJobCommandInput,
    cb: (err: any, data?: StartPHIDetectionJobCommandOutput) => void
  ): void;
  startPHIDetectionJob(
    args: StartPHIDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPHIDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRxNormInferenceJobCommand}
   */
  startRxNormInferenceJob(
    args: StartRxNormInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRxNormInferenceJobCommandOutput>;
  startRxNormInferenceJob(
    args: StartRxNormInferenceJobCommandInput,
    cb: (err: any, data?: StartRxNormInferenceJobCommandOutput) => void
  ): void;
  startRxNormInferenceJob(
    args: StartRxNormInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRxNormInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSNOMEDCTInferenceJobCommand}
   */
  startSNOMEDCTInferenceJob(
    args: StartSNOMEDCTInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSNOMEDCTInferenceJobCommandOutput>;
  startSNOMEDCTInferenceJob(
    args: StartSNOMEDCTInferenceJobCommandInput,
    cb: (err: any, data?: StartSNOMEDCTInferenceJobCommandOutput) => void
  ): void;
  startSNOMEDCTInferenceJob(
    args: StartSNOMEDCTInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSNOMEDCTInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopEntitiesDetectionV2JobCommand}
   */
  stopEntitiesDetectionV2Job(
    args: StopEntitiesDetectionV2JobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEntitiesDetectionV2JobCommandOutput>;
  stopEntitiesDetectionV2Job(
    args: StopEntitiesDetectionV2JobCommandInput,
    cb: (err: any, data?: StopEntitiesDetectionV2JobCommandOutput) => void
  ): void;
  stopEntitiesDetectionV2Job(
    args: StopEntitiesDetectionV2JobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEntitiesDetectionV2JobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopICD10CMInferenceJobCommand}
   */
  stopICD10CMInferenceJob(
    args: StopICD10CMInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopICD10CMInferenceJobCommandOutput>;
  stopICD10CMInferenceJob(
    args: StopICD10CMInferenceJobCommandInput,
    cb: (err: any, data?: StopICD10CMInferenceJobCommandOutput) => void
  ): void;
  stopICD10CMInferenceJob(
    args: StopICD10CMInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopICD10CMInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopPHIDetectionJobCommand}
   */
  stopPHIDetectionJob(
    args: StopPHIDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopPHIDetectionJobCommandOutput>;
  stopPHIDetectionJob(
    args: StopPHIDetectionJobCommandInput,
    cb: (err: any, data?: StopPHIDetectionJobCommandOutput) => void
  ): void;
  stopPHIDetectionJob(
    args: StopPHIDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopPHIDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopRxNormInferenceJobCommand}
   */
  stopRxNormInferenceJob(
    args: StopRxNormInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRxNormInferenceJobCommandOutput>;
  stopRxNormInferenceJob(
    args: StopRxNormInferenceJobCommandInput,
    cb: (err: any, data?: StopRxNormInferenceJobCommandOutput) => void
  ): void;
  stopRxNormInferenceJob(
    args: StopRxNormInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRxNormInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSNOMEDCTInferenceJobCommand}
   */
  stopSNOMEDCTInferenceJob(
    args: StopSNOMEDCTInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSNOMEDCTInferenceJobCommandOutput>;
  stopSNOMEDCTInferenceJob(
    args: StopSNOMEDCTInferenceJobCommandInput,
    cb: (err: any, data?: StopSNOMEDCTInferenceJobCommandOutput) => void
  ): void;
  stopSNOMEDCTInferenceJob(
    args: StopSNOMEDCTInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSNOMEDCTInferenceJobCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents. Amazon Comprehend Medical only detects entities in English language texts. Amazon Comprehend Medical places limits on the sizes of files allowed for different API operations. To learn more, see <a href="https://docs.aws.amazon.com/comprehend-medical/latest/dev/comprehendmedical-quotas.html">Guidelines and quotas</a> in the <i>Amazon Comprehend Medical Developer Guide</i>.</p>
 */
export class ComprehendMedical extends ComprehendMedicalClient implements ComprehendMedical {}
createAggregatedClient(commands, ComprehendMedical);
