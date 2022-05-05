// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { ComprehendMedicalClient } from "./ComprehendMedicalClient";

/**
 * <p> Comprehend Medical; extracts structured information from unstructured clinical text. Use these actions
 *       to gain insight in your documents. </p>
 */
export class ComprehendMedical extends ComprehendMedicalClient {
  /**
   * <p>Gets the properties associated with a medical entities detection job. Use this operation
   *       to get the status of a detection job.</p>
   */
  public describeEntitiesDetectionV2Job(
    args: DescribeEntitiesDetectionV2JobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEntitiesDetectionV2JobCommandOutput>;
  public describeEntitiesDetectionV2Job(
    args: DescribeEntitiesDetectionV2JobCommandInput,
    cb: (err: any, data?: DescribeEntitiesDetectionV2JobCommandOutput) => void
  ): void;
  public describeEntitiesDetectionV2Job(
    args: DescribeEntitiesDetectionV2JobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEntitiesDetectionV2JobCommandOutput) => void
  ): void;
  public describeEntitiesDetectionV2Job(
    args: DescribeEntitiesDetectionV2JobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEntitiesDetectionV2JobCommandOutput) => void),
    cb?: (err: any, data?: DescribeEntitiesDetectionV2JobCommandOutput) => void
  ): Promise<DescribeEntitiesDetectionV2JobCommandOutput> | void {
    const command = new DescribeEntitiesDetectionV2JobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the properties associated with an InferICD10CM job. Use this operation to get the
   *       status of an inference job.</p>
   */
  public describeICD10CMInferenceJob(
    args: DescribeICD10CMInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeICD10CMInferenceJobCommandOutput>;
  public describeICD10CMInferenceJob(
    args: DescribeICD10CMInferenceJobCommandInput,
    cb: (err: any, data?: DescribeICD10CMInferenceJobCommandOutput) => void
  ): void;
  public describeICD10CMInferenceJob(
    args: DescribeICD10CMInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeICD10CMInferenceJobCommandOutput) => void
  ): void;
  public describeICD10CMInferenceJob(
    args: DescribeICD10CMInferenceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeICD10CMInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeICD10CMInferenceJobCommandOutput) => void
  ): Promise<DescribeICD10CMInferenceJobCommandOutput> | void {
    const command = new DescribeICD10CMInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the properties associated with a protected health information (PHI) detection job.
   *       Use this operation to get the status of a detection job.</p>
   */
  public describePHIDetectionJob(
    args: DescribePHIDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePHIDetectionJobCommandOutput>;
  public describePHIDetectionJob(
    args: DescribePHIDetectionJobCommandInput,
    cb: (err: any, data?: DescribePHIDetectionJobCommandOutput) => void
  ): void;
  public describePHIDetectionJob(
    args: DescribePHIDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePHIDetectionJobCommandOutput) => void
  ): void;
  public describePHIDetectionJob(
    args: DescribePHIDetectionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePHIDetectionJobCommandOutput) => void),
    cb?: (err: any, data?: DescribePHIDetectionJobCommandOutput) => void
  ): Promise<DescribePHIDetectionJobCommandOutput> | void {
    const command = new DescribePHIDetectionJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the properties associated with an InferRxNorm job. Use this operation to get the
   *       status of an inference job.</p>
   */
  public describeRxNormInferenceJob(
    args: DescribeRxNormInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRxNormInferenceJobCommandOutput>;
  public describeRxNormInferenceJob(
    args: DescribeRxNormInferenceJobCommandInput,
    cb: (err: any, data?: DescribeRxNormInferenceJobCommandOutput) => void
  ): void;
  public describeRxNormInferenceJob(
    args: DescribeRxNormInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRxNormInferenceJobCommandOutput) => void
  ): void;
  public describeRxNormInferenceJob(
    args: DescribeRxNormInferenceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRxNormInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeRxNormInferenceJobCommandOutput) => void
  ): Promise<DescribeRxNormInferenceJobCommandOutput> | void {
    const command = new DescribeRxNormInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job.
   *     </p>
   */
  public describeSNOMEDCTInferenceJob(
    args: DescribeSNOMEDCTInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSNOMEDCTInferenceJobCommandOutput>;
  public describeSNOMEDCTInferenceJob(
    args: DescribeSNOMEDCTInferenceJobCommandInput,
    cb: (err: any, data?: DescribeSNOMEDCTInferenceJobCommandOutput) => void
  ): void;
  public describeSNOMEDCTInferenceJob(
    args: DescribeSNOMEDCTInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSNOMEDCTInferenceJobCommandOutput) => void
  ): void;
  public describeSNOMEDCTInferenceJob(
    args: DescribeSNOMEDCTInferenceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSNOMEDCTInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeSNOMEDCTInferenceJobCommandOutput) => void
  ): Promise<DescribeSNOMEDCTInferenceJobCommandOutput> | void {
    const command = new DescribeSNOMEDCTInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p>
   *          <p> Inspects the clinical text for a variety of medical entities and returns specific
   *       information about them such as entity category, location, and confidence score on that
   *       information .</p>
   */
  public detectEntities(
    args: DetectEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectEntitiesCommandOutput>;
  public detectEntities(
    args: DetectEntitiesCommandInput,
    cb: (err: any, data?: DetectEntitiesCommandOutput) => void
  ): void;
  public detectEntities(
    args: DetectEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectEntitiesCommandOutput) => void
  ): void;
  public detectEntities(
    args: DetectEntitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetectEntitiesCommandOutput) => void),
    cb?: (err: any, data?: DetectEntitiesCommandOutput) => void
  ): Promise<DetectEntitiesCommandOutput> | void {
    const command = new DetectEntitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Inspects the clinical text for a variety of medical entities and returns specific
   *       information about them such as entity category, location, and confidence score on that
   *       information. Amazon Comprehend Medical only detects medical entities in English language
   *       texts.</p>
   *          <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a>
   *       operation. This new action uses a different model for determining the entities in your medical
   *       text and changes the way that some entities are returned in the output. You should use the
   *         <code>DetectEntitiesV2</code> operation in all new applications.</p>
   *          <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and
   *         <code>Direction</code> entities as attributes instead of types. </p>
   */
  public detectEntitiesV2(
    args: DetectEntitiesV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectEntitiesV2CommandOutput>;
  public detectEntitiesV2(
    args: DetectEntitiesV2CommandInput,
    cb: (err: any, data?: DetectEntitiesV2CommandOutput) => void
  ): void;
  public detectEntitiesV2(
    args: DetectEntitiesV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectEntitiesV2CommandOutput) => void
  ): void;
  public detectEntitiesV2(
    args: DetectEntitiesV2CommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetectEntitiesV2CommandOutput) => void),
    cb?: (err: any, data?: DetectEntitiesV2CommandOutput) => void
  ): Promise<DetectEntitiesV2CommandOutput> | void {
    const command = new DetectEntitiesV2Command(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Inspects the clinical text for protected health information (PHI) entities and returns
   *       the entity category, location, and confidence score for each entity. Amazon Comprehend Medical
   *       only detects entities in English language texts.</p>
   */
  public detectPHI(args: DetectPHICommandInput, options?: __HttpHandlerOptions): Promise<DetectPHICommandOutput>;
  public detectPHI(args: DetectPHICommandInput, cb: (err: any, data?: DetectPHICommandOutput) => void): void;
  public detectPHI(
    args: DetectPHICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectPHICommandOutput) => void
  ): void;
  public detectPHI(
    args: DetectPHICommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetectPHICommandOutput) => void),
    cb?: (err: any, data?: DetectPHICommandOutput) => void
  ): Promise<DetectPHICommandOutput> | void {
    const command = new DetectPHICommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>InferICD10CM detects medical conditions as entities listed in a patient record and links
   *       those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the
   *       Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in
   *       English language texts.  </p>
   */
  public inferICD10CM(
    args: InferICD10CMCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InferICD10CMCommandOutput>;
  public inferICD10CM(args: InferICD10CMCommandInput, cb: (err: any, data?: InferICD10CMCommandOutput) => void): void;
  public inferICD10CM(
    args: InferICD10CMCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InferICD10CMCommandOutput) => void
  ): void;
  public inferICD10CM(
    args: InferICD10CMCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InferICD10CMCommandOutput) => void),
    cb?: (err: any, data?: InferICD10CMCommandOutput) => void
  ): Promise<InferICD10CMCommandOutput> | void {
    const command = new InferICD10CMCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>InferRxNorm detects medications as entities listed in a patient record and links to the
   *       normalized concept identifiers in the RxNorm database from the National Library of Medicine.
   *       Amazon Comprehend Medical only detects medical entities in English language texts.  </p>
   */
  public inferRxNorm(args: InferRxNormCommandInput, options?: __HttpHandlerOptions): Promise<InferRxNormCommandOutput>;
  public inferRxNorm(args: InferRxNormCommandInput, cb: (err: any, data?: InferRxNormCommandOutput) => void): void;
  public inferRxNorm(
    args: InferRxNormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InferRxNormCommandOutput) => void
  ): void;
  public inferRxNorm(
    args: InferRxNormCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InferRxNormCommandOutput) => void),
    cb?: (err: any, data?: InferRxNormCommandOutput) => void
  ): Promise<InferRxNormCommandOutput> | void {
    const command = new InferRxNormCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology</p>
   */
  public inferSNOMEDCT(
    args: InferSNOMEDCTCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InferSNOMEDCTCommandOutput>;
  public inferSNOMEDCT(
    args: InferSNOMEDCTCommandInput,
    cb: (err: any, data?: InferSNOMEDCTCommandOutput) => void
  ): void;
  public inferSNOMEDCT(
    args: InferSNOMEDCTCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InferSNOMEDCTCommandOutput) => void
  ): void;
  public inferSNOMEDCT(
    args: InferSNOMEDCTCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InferSNOMEDCTCommandOutput) => void),
    cb?: (err: any, data?: InferSNOMEDCTCommandOutput) => void
  ): Promise<InferSNOMEDCTCommandOutput> | void {
    const command = new InferSNOMEDCTCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of medical entity detection jobs that you have submitted.</p>
   */
  public listEntitiesDetectionV2Jobs(
    args: ListEntitiesDetectionV2JobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitiesDetectionV2JobsCommandOutput>;
  public listEntitiesDetectionV2Jobs(
    args: ListEntitiesDetectionV2JobsCommandInput,
    cb: (err: any, data?: ListEntitiesDetectionV2JobsCommandOutput) => void
  ): void;
  public listEntitiesDetectionV2Jobs(
    args: ListEntitiesDetectionV2JobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesDetectionV2JobsCommandOutput) => void
  ): void;
  public listEntitiesDetectionV2Jobs(
    args: ListEntitiesDetectionV2JobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEntitiesDetectionV2JobsCommandOutput) => void),
    cb?: (err: any, data?: ListEntitiesDetectionV2JobsCommandOutput) => void
  ): Promise<ListEntitiesDetectionV2JobsCommandOutput> | void {
    const command = new ListEntitiesDetectionV2JobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of InferICD10CM jobs that you have submitted.</p>
   */
  public listICD10CMInferenceJobs(
    args: ListICD10CMInferenceJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListICD10CMInferenceJobsCommandOutput>;
  public listICD10CMInferenceJobs(
    args: ListICD10CMInferenceJobsCommandInput,
    cb: (err: any, data?: ListICD10CMInferenceJobsCommandOutput) => void
  ): void;
  public listICD10CMInferenceJobs(
    args: ListICD10CMInferenceJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListICD10CMInferenceJobsCommandOutput) => void
  ): void;
  public listICD10CMInferenceJobs(
    args: ListICD10CMInferenceJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListICD10CMInferenceJobsCommandOutput) => void),
    cb?: (err: any, data?: ListICD10CMInferenceJobsCommandOutput) => void
  ): Promise<ListICD10CMInferenceJobsCommandOutput> | void {
    const command = new ListICD10CMInferenceJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of protected health information (PHI) detection jobs that you have
   *       submitted.</p>
   */
  public listPHIDetectionJobs(
    args: ListPHIDetectionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPHIDetectionJobsCommandOutput>;
  public listPHIDetectionJobs(
    args: ListPHIDetectionJobsCommandInput,
    cb: (err: any, data?: ListPHIDetectionJobsCommandOutput) => void
  ): void;
  public listPHIDetectionJobs(
    args: ListPHIDetectionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPHIDetectionJobsCommandOutput) => void
  ): void;
  public listPHIDetectionJobs(
    args: ListPHIDetectionJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPHIDetectionJobsCommandOutput) => void),
    cb?: (err: any, data?: ListPHIDetectionJobsCommandOutput) => void
  ): Promise<ListPHIDetectionJobsCommandOutput> | void {
    const command = new ListPHIDetectionJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of InferRxNorm jobs that you have submitted.</p>
   */
  public listRxNormInferenceJobs(
    args: ListRxNormInferenceJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRxNormInferenceJobsCommandOutput>;
  public listRxNormInferenceJobs(
    args: ListRxNormInferenceJobsCommandInput,
    cb: (err: any, data?: ListRxNormInferenceJobsCommandOutput) => void
  ): void;
  public listRxNormInferenceJobs(
    args: ListRxNormInferenceJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRxNormInferenceJobsCommandOutput) => void
  ): void;
  public listRxNormInferenceJobs(
    args: ListRxNormInferenceJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRxNormInferenceJobsCommandOutput) => void),
    cb?: (err: any, data?: ListRxNormInferenceJobsCommandOutput) => void
  ): Promise<ListRxNormInferenceJobsCommandOutput> | void {
    const command = new ListRxNormInferenceJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Gets a list of InferSNOMEDCT jobs a user has submitted.
   *     </p>
   */
  public listSNOMEDCTInferenceJobs(
    args: ListSNOMEDCTInferenceJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSNOMEDCTInferenceJobsCommandOutput>;
  public listSNOMEDCTInferenceJobs(
    args: ListSNOMEDCTInferenceJobsCommandInput,
    cb: (err: any, data?: ListSNOMEDCTInferenceJobsCommandOutput) => void
  ): void;
  public listSNOMEDCTInferenceJobs(
    args: ListSNOMEDCTInferenceJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSNOMEDCTInferenceJobsCommandOutput) => void
  ): void;
  public listSNOMEDCTInferenceJobs(
    args: ListSNOMEDCTInferenceJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSNOMEDCTInferenceJobsCommandOutput) => void),
    cb?: (err: any, data?: ListSNOMEDCTInferenceJobsCommandOutput) => void
  ): Promise<ListSNOMEDCTInferenceJobsCommandOutput> | void {
    const command = new ListSNOMEDCTInferenceJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an asynchronous medical entity detection job for a collection of documents. Use the
   *         <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.</p>
   */
  public startEntitiesDetectionV2Job(
    args: StartEntitiesDetectionV2JobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEntitiesDetectionV2JobCommandOutput>;
  public startEntitiesDetectionV2Job(
    args: StartEntitiesDetectionV2JobCommandInput,
    cb: (err: any, data?: StartEntitiesDetectionV2JobCommandOutput) => void
  ): void;
  public startEntitiesDetectionV2Job(
    args: StartEntitiesDetectionV2JobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEntitiesDetectionV2JobCommandOutput) => void
  ): void;
  public startEntitiesDetectionV2Job(
    args: StartEntitiesDetectionV2JobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartEntitiesDetectionV2JobCommandOutput) => void),
    cb?: (err: any, data?: StartEntitiesDetectionV2JobCommandOutput) => void
  ): Promise<StartEntitiesDetectionV2JobCommandOutput> | void {
    const command = new StartEntitiesDetectionV2JobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM
   *       ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a
   *       job.</p>
   */
  public startICD10CMInferenceJob(
    args: StartICD10CMInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartICD10CMInferenceJobCommandOutput>;
  public startICD10CMInferenceJob(
    args: StartICD10CMInferenceJobCommandInput,
    cb: (err: any, data?: StartICD10CMInferenceJobCommandOutput) => void
  ): void;
  public startICD10CMInferenceJob(
    args: StartICD10CMInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartICD10CMInferenceJobCommandOutput) => void
  ): void;
  public startICD10CMInferenceJob(
    args: StartICD10CMInferenceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartICD10CMInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: StartICD10CMInferenceJobCommandOutput) => void
  ): Promise<StartICD10CMInferenceJobCommandOutput> | void {
    const command = new StartICD10CMInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an asynchronous job to detect protected health information (PHI). Use the
   *         <code>DescribePHIDetectionJob</code> operation to track the status of a job.</p>
   */
  public startPHIDetectionJob(
    args: StartPHIDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPHIDetectionJobCommandOutput>;
  public startPHIDetectionJob(
    args: StartPHIDetectionJobCommandInput,
    cb: (err: any, data?: StartPHIDetectionJobCommandOutput) => void
  ): void;
  public startPHIDetectionJob(
    args: StartPHIDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPHIDetectionJobCommandOutput) => void
  ): void;
  public startPHIDetectionJob(
    args: StartPHIDetectionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartPHIDetectionJobCommandOutput) => void),
    cb?: (err: any, data?: StartPHIDetectionJobCommandOutput) => void
  ): Promise<StartPHIDetectionJobCommandOutput> | void {
    const command = new StartPHIDetectionJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an asynchronous job to detect medication entities and link them to the RxNorm
   *       ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a
   *       job.</p>
   */
  public startRxNormInferenceJob(
    args: StartRxNormInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRxNormInferenceJobCommandOutput>;
  public startRxNormInferenceJob(
    args: StartRxNormInferenceJobCommandInput,
    cb: (err: any, data?: StartRxNormInferenceJobCommandOutput) => void
  ): void;
  public startRxNormInferenceJob(
    args: StartRxNormInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRxNormInferenceJobCommandOutput) => void
  ): void;
  public startRxNormInferenceJob(
    args: StartRxNormInferenceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartRxNormInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: StartRxNormInferenceJobCommandOutput) => void
  ): Promise<StartRxNormInferenceJobCommandOutput> | void {
    const command = new StartRxNormInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job.
   *     </p>
   */
  public startSNOMEDCTInferenceJob(
    args: StartSNOMEDCTInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSNOMEDCTInferenceJobCommandOutput>;
  public startSNOMEDCTInferenceJob(
    args: StartSNOMEDCTInferenceJobCommandInput,
    cb: (err: any, data?: StartSNOMEDCTInferenceJobCommandOutput) => void
  ): void;
  public startSNOMEDCTInferenceJob(
    args: StartSNOMEDCTInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSNOMEDCTInferenceJobCommandOutput) => void
  ): void;
  public startSNOMEDCTInferenceJob(
    args: StartSNOMEDCTInferenceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSNOMEDCTInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: StartSNOMEDCTInferenceJobCommandOutput) => void
  ): Promise<StartSNOMEDCTInferenceJobCommandOutput> | void {
    const command = new StartSNOMEDCTInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops a medical entities detection job in progress.</p>
   */
  public stopEntitiesDetectionV2Job(
    args: StopEntitiesDetectionV2JobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEntitiesDetectionV2JobCommandOutput>;
  public stopEntitiesDetectionV2Job(
    args: StopEntitiesDetectionV2JobCommandInput,
    cb: (err: any, data?: StopEntitiesDetectionV2JobCommandOutput) => void
  ): void;
  public stopEntitiesDetectionV2Job(
    args: StopEntitiesDetectionV2JobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEntitiesDetectionV2JobCommandOutput) => void
  ): void;
  public stopEntitiesDetectionV2Job(
    args: StopEntitiesDetectionV2JobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopEntitiesDetectionV2JobCommandOutput) => void),
    cb?: (err: any, data?: StopEntitiesDetectionV2JobCommandOutput) => void
  ): Promise<StopEntitiesDetectionV2JobCommandOutput> | void {
    const command = new StopEntitiesDetectionV2JobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops an InferICD10CM inference job in progress.</p>
   */
  public stopICD10CMInferenceJob(
    args: StopICD10CMInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopICD10CMInferenceJobCommandOutput>;
  public stopICD10CMInferenceJob(
    args: StopICD10CMInferenceJobCommandInput,
    cb: (err: any, data?: StopICD10CMInferenceJobCommandOutput) => void
  ): void;
  public stopICD10CMInferenceJob(
    args: StopICD10CMInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopICD10CMInferenceJobCommandOutput) => void
  ): void;
  public stopICD10CMInferenceJob(
    args: StopICD10CMInferenceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopICD10CMInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: StopICD10CMInferenceJobCommandOutput) => void
  ): Promise<StopICD10CMInferenceJobCommandOutput> | void {
    const command = new StopICD10CMInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops a protected health information (PHI) detection job in progress.</p>
   */
  public stopPHIDetectionJob(
    args: StopPHIDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopPHIDetectionJobCommandOutput>;
  public stopPHIDetectionJob(
    args: StopPHIDetectionJobCommandInput,
    cb: (err: any, data?: StopPHIDetectionJobCommandOutput) => void
  ): void;
  public stopPHIDetectionJob(
    args: StopPHIDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopPHIDetectionJobCommandOutput) => void
  ): void;
  public stopPHIDetectionJob(
    args: StopPHIDetectionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopPHIDetectionJobCommandOutput) => void),
    cb?: (err: any, data?: StopPHIDetectionJobCommandOutput) => void
  ): Promise<StopPHIDetectionJobCommandOutput> | void {
    const command = new StopPHIDetectionJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops an InferRxNorm inference job in progress.</p>
   */
  public stopRxNormInferenceJob(
    args: StopRxNormInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRxNormInferenceJobCommandOutput>;
  public stopRxNormInferenceJob(
    args: StopRxNormInferenceJobCommandInput,
    cb: (err: any, data?: StopRxNormInferenceJobCommandOutput) => void
  ): void;
  public stopRxNormInferenceJob(
    args: StopRxNormInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRxNormInferenceJobCommandOutput) => void
  ): void;
  public stopRxNormInferenceJob(
    args: StopRxNormInferenceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopRxNormInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: StopRxNormInferenceJobCommandOutput) => void
  ): Promise<StopRxNormInferenceJobCommandOutput> | void {
    const command = new StopRxNormInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Stops an InferSNOMEDCT inference job in progress.
   *     </p>
   */
  public stopSNOMEDCTInferenceJob(
    args: StopSNOMEDCTInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSNOMEDCTInferenceJobCommandOutput>;
  public stopSNOMEDCTInferenceJob(
    args: StopSNOMEDCTInferenceJobCommandInput,
    cb: (err: any, data?: StopSNOMEDCTInferenceJobCommandOutput) => void
  ): void;
  public stopSNOMEDCTInferenceJob(
    args: StopSNOMEDCTInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSNOMEDCTInferenceJobCommandOutput) => void
  ): void;
  public stopSNOMEDCTInferenceJob(
    args: StopSNOMEDCTInferenceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopSNOMEDCTInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: StopSNOMEDCTInferenceJobCommandOutput) => void
  ): Promise<StopSNOMEDCTInferenceJobCommandOutput> | void {
    const command = new StopSNOMEDCTInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
