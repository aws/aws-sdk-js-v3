// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type DescribeEntitiesDetectionV2JobCommandInput,
  type DescribeEntitiesDetectionV2JobCommandOutput,
  DescribeEntitiesDetectionV2JobCommand,
} from "./commands/DescribeEntitiesDetectionV2JobCommand";
import {
  type DescribeICD10CMInferenceJobCommandInput,
  type DescribeICD10CMInferenceJobCommandOutput,
  DescribeICD10CMInferenceJobCommand,
} from "./commands/DescribeICD10CMInferenceJobCommand";
import {
  type DescribePHIDetectionJobCommandInput,
  type DescribePHIDetectionJobCommandOutput,
  DescribePHIDetectionJobCommand,
} from "./commands/DescribePHIDetectionJobCommand";
import {
  type DescribeRxNormInferenceJobCommandInput,
  type DescribeRxNormInferenceJobCommandOutput,
  DescribeRxNormInferenceJobCommand,
} from "./commands/DescribeRxNormInferenceJobCommand";
import {
  type DescribeSNOMEDCTInferenceJobCommandInput,
  type DescribeSNOMEDCTInferenceJobCommandOutput,
  DescribeSNOMEDCTInferenceJobCommand,
} from "./commands/DescribeSNOMEDCTInferenceJobCommand";
import {
  type DetectEntitiesCommandInput,
  type DetectEntitiesCommandOutput,
  DetectEntitiesCommand,
} from "./commands/DetectEntitiesCommand";
import {
  type DetectEntitiesV2CommandInput,
  type DetectEntitiesV2CommandOutput,
  DetectEntitiesV2Command,
} from "./commands/DetectEntitiesV2Command";
import { type DetectPHICommandInput, type DetectPHICommandOutput, DetectPHICommand } from "./commands/DetectPHICommand";
import {
  type InferICD10CMCommandInput,
  type InferICD10CMCommandOutput,
  InferICD10CMCommand,
} from "./commands/InferICD10CMCommand";
import {
  type InferRxNormCommandInput,
  type InferRxNormCommandOutput,
  InferRxNormCommand,
} from "./commands/InferRxNormCommand";
import {
  type InferSNOMEDCTCommandInput,
  type InferSNOMEDCTCommandOutput,
  InferSNOMEDCTCommand,
} from "./commands/InferSNOMEDCTCommand";
import {
  type ListEntitiesDetectionV2JobsCommandInput,
  type ListEntitiesDetectionV2JobsCommandOutput,
  ListEntitiesDetectionV2JobsCommand,
} from "./commands/ListEntitiesDetectionV2JobsCommand";
import {
  type ListICD10CMInferenceJobsCommandInput,
  type ListICD10CMInferenceJobsCommandOutput,
  ListICD10CMInferenceJobsCommand,
} from "./commands/ListICD10CMInferenceJobsCommand";
import {
  type ListPHIDetectionJobsCommandInput,
  type ListPHIDetectionJobsCommandOutput,
  ListPHIDetectionJobsCommand,
} from "./commands/ListPHIDetectionJobsCommand";
import {
  type ListRxNormInferenceJobsCommandInput,
  type ListRxNormInferenceJobsCommandOutput,
  ListRxNormInferenceJobsCommand,
} from "./commands/ListRxNormInferenceJobsCommand";
import {
  type ListSNOMEDCTInferenceJobsCommandInput,
  type ListSNOMEDCTInferenceJobsCommandOutput,
  ListSNOMEDCTInferenceJobsCommand,
} from "./commands/ListSNOMEDCTInferenceJobsCommand";
import {
  type StartEntitiesDetectionV2JobCommandInput,
  type StartEntitiesDetectionV2JobCommandOutput,
  StartEntitiesDetectionV2JobCommand,
} from "./commands/StartEntitiesDetectionV2JobCommand";
import {
  type StartICD10CMInferenceJobCommandInput,
  type StartICD10CMInferenceJobCommandOutput,
  StartICD10CMInferenceJobCommand,
} from "./commands/StartICD10CMInferenceJobCommand";
import {
  type StartPHIDetectionJobCommandInput,
  type StartPHIDetectionJobCommandOutput,
  StartPHIDetectionJobCommand,
} from "./commands/StartPHIDetectionJobCommand";
import {
  type StartRxNormInferenceJobCommandInput,
  type StartRxNormInferenceJobCommandOutput,
  StartRxNormInferenceJobCommand,
} from "./commands/StartRxNormInferenceJobCommand";
import {
  type StartSNOMEDCTInferenceJobCommandInput,
  type StartSNOMEDCTInferenceJobCommandOutput,
  StartSNOMEDCTInferenceJobCommand,
} from "./commands/StartSNOMEDCTInferenceJobCommand";
import {
  type StopEntitiesDetectionV2JobCommandInput,
  type StopEntitiesDetectionV2JobCommandOutput,
  StopEntitiesDetectionV2JobCommand,
} from "./commands/StopEntitiesDetectionV2JobCommand";
import {
  type StopICD10CMInferenceJobCommandInput,
  type StopICD10CMInferenceJobCommandOutput,
  StopICD10CMInferenceJobCommand,
} from "./commands/StopICD10CMInferenceJobCommand";
import {
  type StopPHIDetectionJobCommandInput,
  type StopPHIDetectionJobCommandOutput,
  StopPHIDetectionJobCommand,
} from "./commands/StopPHIDetectionJobCommand";
import {
  type StopRxNormInferenceJobCommandInput,
  type StopRxNormInferenceJobCommandOutput,
  StopRxNormInferenceJobCommand,
} from "./commands/StopRxNormInferenceJobCommand";
import {
  type StopSNOMEDCTInferenceJobCommandInput,
  type StopSNOMEDCTInferenceJobCommandOutput,
  StopSNOMEDCTInferenceJobCommand,
} from "./commands/StopSNOMEDCTInferenceJobCommand";
import { ComprehendMedicalClient } from "./ComprehendMedicalClient";

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
  detectEntities(
    args: DetectEntitiesCommandInput,
    cb: (err: any, data?: DetectEntitiesCommandOutput) => void
  ): void;
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
  detectPHI(
    args: DetectPHICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectPHICommandOutput>;
  detectPHI(
    args: DetectPHICommandInput,
    cb: (err: any, data?: DetectPHICommandOutput) => void
  ): void;
  detectPHI(
    args: DetectPHICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectPHICommandOutput) => void
  ): void;

  /**
   * @see {@link InferICD10CMCommand}
   */
  inferICD10CM(
    args: InferICD10CMCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InferICD10CMCommandOutput>;
  inferICD10CM(
    args: InferICD10CMCommandInput,
    cb: (err: any, data?: InferICD10CMCommandOutput) => void
  ): void;
  inferICD10CM(
    args: InferICD10CMCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InferICD10CMCommandOutput) => void
  ): void;

  /**
   * @see {@link InferRxNormCommand}
   */
  inferRxNorm(
    args: InferRxNormCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InferRxNormCommandOutput>;
  inferRxNorm(
    args: InferRxNormCommandInput,
    cb: (err: any, data?: InferRxNormCommandOutput) => void
  ): void;
  inferRxNorm(
    args: InferRxNormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InferRxNormCommandOutput) => void
  ): void;

  /**
   * @see {@link InferSNOMEDCTCommand}
   */
  inferSNOMEDCT(
    args: InferSNOMEDCTCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InferSNOMEDCTCommandOutput>;
  inferSNOMEDCT(
    args: InferSNOMEDCTCommandInput,
    cb: (err: any, data?: InferSNOMEDCTCommandOutput) => void
  ): void;
  inferSNOMEDCT(
    args: InferSNOMEDCTCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InferSNOMEDCTCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitiesDetectionV2JobsCommand}
   */
  listEntitiesDetectionV2Jobs(): Promise<ListEntitiesDetectionV2JobsCommandOutput>;
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
  listICD10CMInferenceJobs(): Promise<ListICD10CMInferenceJobsCommandOutput>;
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
  listPHIDetectionJobs(): Promise<ListPHIDetectionJobsCommandOutput>;
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
  listRxNormInferenceJobs(): Promise<ListRxNormInferenceJobsCommandOutput>;
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
  listSNOMEDCTInferenceJobs(): Promise<ListSNOMEDCTInferenceJobsCommandOutput>;
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
 * <p>Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents. Amazon Comprehend Medical only detects entities in English language texts. Amazon Comprehend Medical places limits on the sizes of files allowed for different API operations. To learn more, see <a href="https://docs.aws.amazon.com/comprehend-medical/latest/dev/comprehendmedical-quotas.html">Guidelines and quotas</a> in the <i>Amazon Comprehend Medical Developer Guide</i>.</p>
 * @public
 */
export class ComprehendMedical extends ComprehendMedicalClient implements ComprehendMedical {}
createAggregatedClient(commands, ComprehendMedical);
