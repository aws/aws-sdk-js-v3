import { TranscribeClient } from "./TranscribeClient";
import {
  CreateLanguageModelCommand,
  CreateLanguageModelCommandInput,
  CreateLanguageModelCommandOutput,
} from "./commands/CreateLanguageModelCommand";
import {
  CreateMedicalVocabularyCommand,
  CreateMedicalVocabularyCommandInput,
  CreateMedicalVocabularyCommandOutput,
} from "./commands/CreateMedicalVocabularyCommand";
import {
  CreateVocabularyCommand,
  CreateVocabularyCommandInput,
  CreateVocabularyCommandOutput,
} from "./commands/CreateVocabularyCommand";
import {
  CreateVocabularyFilterCommand,
  CreateVocabularyFilterCommandInput,
  CreateVocabularyFilterCommandOutput,
} from "./commands/CreateVocabularyFilterCommand";
import {
  DeleteLanguageModelCommand,
  DeleteLanguageModelCommandInput,
  DeleteLanguageModelCommandOutput,
} from "./commands/DeleteLanguageModelCommand";
import {
  DeleteMedicalTranscriptionJobCommand,
  DeleteMedicalTranscriptionJobCommandInput,
  DeleteMedicalTranscriptionJobCommandOutput,
} from "./commands/DeleteMedicalTranscriptionJobCommand";
import {
  DeleteMedicalVocabularyCommand,
  DeleteMedicalVocabularyCommandInput,
  DeleteMedicalVocabularyCommandOutput,
} from "./commands/DeleteMedicalVocabularyCommand";
import {
  DeleteTranscriptionJobCommand,
  DeleteTranscriptionJobCommandInput,
  DeleteTranscriptionJobCommandOutput,
} from "./commands/DeleteTranscriptionJobCommand";
import {
  DeleteVocabularyCommand,
  DeleteVocabularyCommandInput,
  DeleteVocabularyCommandOutput,
} from "./commands/DeleteVocabularyCommand";
import {
  DeleteVocabularyFilterCommand,
  DeleteVocabularyFilterCommandInput,
  DeleteVocabularyFilterCommandOutput,
} from "./commands/DeleteVocabularyFilterCommand";
import {
  DescribeLanguageModelCommand,
  DescribeLanguageModelCommandInput,
  DescribeLanguageModelCommandOutput,
} from "./commands/DescribeLanguageModelCommand";
import {
  GetMedicalTranscriptionJobCommand,
  GetMedicalTranscriptionJobCommandInput,
  GetMedicalTranscriptionJobCommandOutput,
} from "./commands/GetMedicalTranscriptionJobCommand";
import {
  GetMedicalVocabularyCommand,
  GetMedicalVocabularyCommandInput,
  GetMedicalVocabularyCommandOutput,
} from "./commands/GetMedicalVocabularyCommand";
import {
  GetTranscriptionJobCommand,
  GetTranscriptionJobCommandInput,
  GetTranscriptionJobCommandOutput,
} from "./commands/GetTranscriptionJobCommand";
import {
  GetVocabularyCommand,
  GetVocabularyCommandInput,
  GetVocabularyCommandOutput,
} from "./commands/GetVocabularyCommand";
import {
  GetVocabularyFilterCommand,
  GetVocabularyFilterCommandInput,
  GetVocabularyFilterCommandOutput,
} from "./commands/GetVocabularyFilterCommand";
import {
  ListLanguageModelsCommand,
  ListLanguageModelsCommandInput,
  ListLanguageModelsCommandOutput,
} from "./commands/ListLanguageModelsCommand";
import {
  ListMedicalTranscriptionJobsCommand,
  ListMedicalTranscriptionJobsCommandInput,
  ListMedicalTranscriptionJobsCommandOutput,
} from "./commands/ListMedicalTranscriptionJobsCommand";
import {
  ListMedicalVocabulariesCommand,
  ListMedicalVocabulariesCommandInput,
  ListMedicalVocabulariesCommandOutput,
} from "./commands/ListMedicalVocabulariesCommand";
import {
  ListTranscriptionJobsCommand,
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
} from "./commands/ListTranscriptionJobsCommand";
import {
  ListVocabulariesCommand,
  ListVocabulariesCommandInput,
  ListVocabulariesCommandOutput,
} from "./commands/ListVocabulariesCommand";
import {
  ListVocabularyFiltersCommand,
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput,
} from "./commands/ListVocabularyFiltersCommand";
import {
  StartMedicalTranscriptionJobCommand,
  StartMedicalTranscriptionJobCommandInput,
  StartMedicalTranscriptionJobCommandOutput,
} from "./commands/StartMedicalTranscriptionJobCommand";
import {
  StartTranscriptionJobCommand,
  StartTranscriptionJobCommandInput,
  StartTranscriptionJobCommandOutput,
} from "./commands/StartTranscriptionJobCommand";
import {
  UpdateMedicalVocabularyCommand,
  UpdateMedicalVocabularyCommandInput,
  UpdateMedicalVocabularyCommandOutput,
} from "./commands/UpdateMedicalVocabularyCommand";
import {
  UpdateVocabularyCommand,
  UpdateVocabularyCommandInput,
  UpdateVocabularyCommandOutput,
} from "./commands/UpdateVocabularyCommand";
import {
  UpdateVocabularyFilterCommand,
  UpdateVocabularyFilterCommandInput,
  UpdateVocabularyFilterCommandOutput,
} from "./commands/UpdateVocabularyFilterCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Operations and objects for transcribing speech to text.</p>
 */
export class Transcribe extends TranscribeClient {
  /**
   * <p>Creates a new custom language model. Use Amazon S3 prefixes to provide the location of your
   *             input files. The time it takes to create your model depends on the size of your training
   *             data.</p>
   */
  public createLanguageModel(
    args: CreateLanguageModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLanguageModelCommandOutput>;
  public createLanguageModel(
    args: CreateLanguageModelCommandInput,
    cb: (err: any, data?: CreateLanguageModelCommandOutput) => void
  ): void;
  public createLanguageModel(
    args: CreateLanguageModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLanguageModelCommandOutput) => void
  ): void;
  public createLanguageModel(
    args: CreateLanguageModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLanguageModelCommandOutput) => void),
    cb?: (err: any, data?: CreateLanguageModelCommandOutput) => void
  ): Promise<CreateLanguageModelCommandOutput> | void {
    const command = new CreateLanguageModelCommand(args);
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
   * <p>Creates a new custom vocabulary that you can use to
   *             change
   *             how Amazon Transcribe Medical transcribes your audio file.</p>
   */
  public createMedicalVocabulary(
    args: CreateMedicalVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMedicalVocabularyCommandOutput>;
  public createMedicalVocabulary(
    args: CreateMedicalVocabularyCommandInput,
    cb: (err: any, data?: CreateMedicalVocabularyCommandOutput) => void
  ): void;
  public createMedicalVocabulary(
    args: CreateMedicalVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMedicalVocabularyCommandOutput) => void
  ): void;
  public createMedicalVocabulary(
    args: CreateMedicalVocabularyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMedicalVocabularyCommandOutput) => void),
    cb?: (err: any, data?: CreateMedicalVocabularyCommandOutput) => void
  ): Promise<CreateMedicalVocabularyCommandOutput> | void {
    const command = new CreateMedicalVocabularyCommand(args);
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
   * <p>Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles
   *             transcription of an audio file. </p>
   */
  public createVocabulary(
    args: CreateVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVocabularyCommandOutput>;
  public createVocabulary(
    args: CreateVocabularyCommandInput,
    cb: (err: any, data?: CreateVocabularyCommandOutput) => void
  ): void;
  public createVocabulary(
    args: CreateVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVocabularyCommandOutput) => void
  ): void;
  public createVocabulary(
    args: CreateVocabularyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVocabularyCommandOutput) => void),
    cb?: (err: any, data?: CreateVocabularyCommandOutput) => void
  ): Promise<CreateVocabularyCommandOutput> | void {
    const command = new CreateVocabularyCommand(args);
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
   * <p>Creates a new vocabulary filter that you can use to filter words, such as profane
   *             words, from the output of a transcription job.</p>
   */
  public createVocabularyFilter(
    args: CreateVocabularyFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVocabularyFilterCommandOutput>;
  public createVocabularyFilter(
    args: CreateVocabularyFilterCommandInput,
    cb: (err: any, data?: CreateVocabularyFilterCommandOutput) => void
  ): void;
  public createVocabularyFilter(
    args: CreateVocabularyFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVocabularyFilterCommandOutput) => void
  ): void;
  public createVocabularyFilter(
    args: CreateVocabularyFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVocabularyFilterCommandOutput) => void),
    cb?: (err: any, data?: CreateVocabularyFilterCommandOutput) => void
  ): Promise<CreateVocabularyFilterCommandOutput> | void {
    const command = new CreateVocabularyFilterCommand(args);
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
   * <p>Deletes a custom language model using its name.</p>
   */
  public deleteLanguageModel(
    args: DeleteLanguageModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLanguageModelCommandOutput>;
  public deleteLanguageModel(
    args: DeleteLanguageModelCommandInput,
    cb: (err: any, data?: DeleteLanguageModelCommandOutput) => void
  ): void;
  public deleteLanguageModel(
    args: DeleteLanguageModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLanguageModelCommandOutput) => void
  ): void;
  public deleteLanguageModel(
    args: DeleteLanguageModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLanguageModelCommandOutput) => void),
    cb?: (err: any, data?: DeleteLanguageModelCommandOutput) => void
  ): Promise<DeleteLanguageModelCommandOutput> | void {
    const command = new DeleteLanguageModelCommand(args);
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
   * <p>Deletes a transcription job generated by Amazon Transcribe Medical and any related information.</p>
   */
  public deleteMedicalTranscriptionJob(
    args: DeleteMedicalTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMedicalTranscriptionJobCommandOutput>;
  public deleteMedicalTranscriptionJob(
    args: DeleteMedicalTranscriptionJobCommandInput,
    cb: (err: any, data?: DeleteMedicalTranscriptionJobCommandOutput) => void
  ): void;
  public deleteMedicalTranscriptionJob(
    args: DeleteMedicalTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMedicalTranscriptionJobCommandOutput) => void
  ): void;
  public deleteMedicalTranscriptionJob(
    args: DeleteMedicalTranscriptionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMedicalTranscriptionJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteMedicalTranscriptionJobCommandOutput) => void
  ): Promise<DeleteMedicalTranscriptionJobCommandOutput> | void {
    const command = new DeleteMedicalTranscriptionJobCommand(args);
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
   * <p>Deletes a vocabulary from Amazon Transcribe Medical.</p>
   */
  public deleteMedicalVocabulary(
    args: DeleteMedicalVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMedicalVocabularyCommandOutput>;
  public deleteMedicalVocabulary(
    args: DeleteMedicalVocabularyCommandInput,
    cb: (err: any, data?: DeleteMedicalVocabularyCommandOutput) => void
  ): void;
  public deleteMedicalVocabulary(
    args: DeleteMedicalVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMedicalVocabularyCommandOutput) => void
  ): void;
  public deleteMedicalVocabulary(
    args: DeleteMedicalVocabularyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMedicalVocabularyCommandOutput) => void),
    cb?: (err: any, data?: DeleteMedicalVocabularyCommandOutput) => void
  ): Promise<DeleteMedicalVocabularyCommandOutput> | void {
    const command = new DeleteMedicalVocabularyCommand(args);
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
   * <p>Deletes a previously submitted transcription job along with any other generated
   *             results such as the transcription, models, and so on.</p>
   */
  public deleteTranscriptionJob(
    args: DeleteTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTranscriptionJobCommandOutput>;
  public deleteTranscriptionJob(
    args: DeleteTranscriptionJobCommandInput,
    cb: (err: any, data?: DeleteTranscriptionJobCommandOutput) => void
  ): void;
  public deleteTranscriptionJob(
    args: DeleteTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTranscriptionJobCommandOutput) => void
  ): void;
  public deleteTranscriptionJob(
    args: DeleteTranscriptionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTranscriptionJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteTranscriptionJobCommandOutput) => void
  ): Promise<DeleteTranscriptionJobCommandOutput> | void {
    const command = new DeleteTranscriptionJobCommand(args);
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
   * <p>Deletes a vocabulary from Amazon Transcribe. </p>
   */
  public deleteVocabulary(
    args: DeleteVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVocabularyCommandOutput>;
  public deleteVocabulary(
    args: DeleteVocabularyCommandInput,
    cb: (err: any, data?: DeleteVocabularyCommandOutput) => void
  ): void;
  public deleteVocabulary(
    args: DeleteVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVocabularyCommandOutput) => void
  ): void;
  public deleteVocabulary(
    args: DeleteVocabularyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVocabularyCommandOutput) => void),
    cb?: (err: any, data?: DeleteVocabularyCommandOutput) => void
  ): Promise<DeleteVocabularyCommandOutput> | void {
    const command = new DeleteVocabularyCommand(args);
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
   * <p>Removes a vocabulary filter.</p>
   */
  public deleteVocabularyFilter(
    args: DeleteVocabularyFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVocabularyFilterCommandOutput>;
  public deleteVocabularyFilter(
    args: DeleteVocabularyFilterCommandInput,
    cb: (err: any, data?: DeleteVocabularyFilterCommandOutput) => void
  ): void;
  public deleteVocabularyFilter(
    args: DeleteVocabularyFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVocabularyFilterCommandOutput) => void
  ): void;
  public deleteVocabularyFilter(
    args: DeleteVocabularyFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVocabularyFilterCommandOutput) => void),
    cb?: (err: any, data?: DeleteVocabularyFilterCommandOutput) => void
  ): Promise<DeleteVocabularyFilterCommandOutput> | void {
    const command = new DeleteVocabularyFilterCommand(args);
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
   * <p>Gets information about a single custom language model. Use this information to see
   *             details about the language model in your AWS account. You can also see whether the base
   *             language model used to create your custom language model has been updated. If Amazon Transcribe has
   *             updated the base model, you can create a new custom language model using the updated
   *             base model. If the language model wasn't created, you can use this operation to
   *             understand why Amazon Transcribe couldn't create it. </p>
   */
  public describeLanguageModel(
    args: DescribeLanguageModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLanguageModelCommandOutput>;
  public describeLanguageModel(
    args: DescribeLanguageModelCommandInput,
    cb: (err: any, data?: DescribeLanguageModelCommandOutput) => void
  ): void;
  public describeLanguageModel(
    args: DescribeLanguageModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLanguageModelCommandOutput) => void
  ): void;
  public describeLanguageModel(
    args: DescribeLanguageModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLanguageModelCommandOutput) => void),
    cb?: (err: any, data?: DescribeLanguageModelCommandOutput) => void
  ): Promise<DescribeLanguageModelCommandOutput> | void {
    const command = new DescribeLanguageModelCommand(args);
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
   * <p>Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the
   *             job, check the <code>TranscriptionJobStatus</code> field. If the status is
   *                 <code>COMPLETED</code>, the job is finished. You find the results of the completed
   *             job in the <code>TranscriptFileUri</code> field.</p>
   */
  public getMedicalTranscriptionJob(
    args: GetMedicalTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMedicalTranscriptionJobCommandOutput>;
  public getMedicalTranscriptionJob(
    args: GetMedicalTranscriptionJobCommandInput,
    cb: (err: any, data?: GetMedicalTranscriptionJobCommandOutput) => void
  ): void;
  public getMedicalTranscriptionJob(
    args: GetMedicalTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMedicalTranscriptionJobCommandOutput) => void
  ): void;
  public getMedicalTranscriptionJob(
    args: GetMedicalTranscriptionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMedicalTranscriptionJobCommandOutput) => void),
    cb?: (err: any, data?: GetMedicalTranscriptionJobCommandOutput) => void
  ): Promise<GetMedicalTranscriptionJobCommandOutput> | void {
    const command = new GetMedicalTranscriptionJobCommand(args);
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
   * <p>Retrieves information about a medical vocabulary.</p>
   */
  public getMedicalVocabulary(
    args: GetMedicalVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMedicalVocabularyCommandOutput>;
  public getMedicalVocabulary(
    args: GetMedicalVocabularyCommandInput,
    cb: (err: any, data?: GetMedicalVocabularyCommandOutput) => void
  ): void;
  public getMedicalVocabulary(
    args: GetMedicalVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMedicalVocabularyCommandOutput) => void
  ): void;
  public getMedicalVocabulary(
    args: GetMedicalVocabularyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMedicalVocabularyCommandOutput) => void),
    cb?: (err: any, data?: GetMedicalVocabularyCommandOutput) => void
  ): Promise<GetMedicalVocabularyCommandOutput> | void {
    const command = new GetMedicalVocabularyCommand(args);
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
   * <p>Returns information about a transcription job. To see the status of the job, check the
   *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
   *             the job is finished and you can find the results at the location specified in the
   *                 <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted
   *             transcript appears in <code>RedactedTranscriptFileUri</code>.</p>
   */
  public getTranscriptionJob(
    args: GetTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTranscriptionJobCommandOutput>;
  public getTranscriptionJob(
    args: GetTranscriptionJobCommandInput,
    cb: (err: any, data?: GetTranscriptionJobCommandOutput) => void
  ): void;
  public getTranscriptionJob(
    args: GetTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTranscriptionJobCommandOutput) => void
  ): void;
  public getTranscriptionJob(
    args: GetTranscriptionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTranscriptionJobCommandOutput) => void),
    cb?: (err: any, data?: GetTranscriptionJobCommandOutput) => void
  ): Promise<GetTranscriptionJobCommandOutput> | void {
    const command = new GetTranscriptionJobCommand(args);
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
   * <p>Gets information about a vocabulary. </p>
   */
  public getVocabulary(
    args: GetVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVocabularyCommandOutput>;
  public getVocabulary(
    args: GetVocabularyCommandInput,
    cb: (err: any, data?: GetVocabularyCommandOutput) => void
  ): void;
  public getVocabulary(
    args: GetVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVocabularyCommandOutput) => void
  ): void;
  public getVocabulary(
    args: GetVocabularyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVocabularyCommandOutput) => void),
    cb?: (err: any, data?: GetVocabularyCommandOutput) => void
  ): Promise<GetVocabularyCommandOutput> | void {
    const command = new GetVocabularyCommand(args);
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
   * <p>Returns information about a vocabulary filter.</p>
   */
  public getVocabularyFilter(
    args: GetVocabularyFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVocabularyFilterCommandOutput>;
  public getVocabularyFilter(
    args: GetVocabularyFilterCommandInput,
    cb: (err: any, data?: GetVocabularyFilterCommandOutput) => void
  ): void;
  public getVocabularyFilter(
    args: GetVocabularyFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVocabularyFilterCommandOutput) => void
  ): void;
  public getVocabularyFilter(
    args: GetVocabularyFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVocabularyFilterCommandOutput) => void),
    cb?: (err: any, data?: GetVocabularyFilterCommandOutput) => void
  ): Promise<GetVocabularyFilterCommandOutput> | void {
    const command = new GetVocabularyFilterCommand(args);
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
   * <p>Provides more information about the custom language models you've created. You can use
   *             the information in this list to find a specific custom language model. You can then use
   *             the  operation to get more information about
   *             it.</p>
   */
  public listLanguageModels(
    args: ListLanguageModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLanguageModelsCommandOutput>;
  public listLanguageModels(
    args: ListLanguageModelsCommandInput,
    cb: (err: any, data?: ListLanguageModelsCommandOutput) => void
  ): void;
  public listLanguageModels(
    args: ListLanguageModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLanguageModelsCommandOutput) => void
  ): void;
  public listLanguageModels(
    args: ListLanguageModelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLanguageModelsCommandOutput) => void),
    cb?: (err: any, data?: ListLanguageModelsCommandOutput) => void
  ): Promise<ListLanguageModelsCommandOutput> | void {
    const command = new ListLanguageModelsCommand(args);
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
   * <p>Lists medical transcription jobs with a specified status or substring that matches
   *             their names.</p>
   */
  public listMedicalTranscriptionJobs(
    args: ListMedicalTranscriptionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMedicalTranscriptionJobsCommandOutput>;
  public listMedicalTranscriptionJobs(
    args: ListMedicalTranscriptionJobsCommandInput,
    cb: (err: any, data?: ListMedicalTranscriptionJobsCommandOutput) => void
  ): void;
  public listMedicalTranscriptionJobs(
    args: ListMedicalTranscriptionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMedicalTranscriptionJobsCommandOutput) => void
  ): void;
  public listMedicalTranscriptionJobs(
    args: ListMedicalTranscriptionJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMedicalTranscriptionJobsCommandOutput) => void),
    cb?: (err: any, data?: ListMedicalTranscriptionJobsCommandOutput) => void
  ): Promise<ListMedicalTranscriptionJobsCommandOutput> | void {
    const command = new ListMedicalTranscriptionJobsCommand(args);
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
   * <p>Returns a list of vocabularies that match the specified criteria. If you don't enter a
   *             value in any of the request parameters, returns the entire list of vocabularies.</p>
   */
  public listMedicalVocabularies(
    args: ListMedicalVocabulariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMedicalVocabulariesCommandOutput>;
  public listMedicalVocabularies(
    args: ListMedicalVocabulariesCommandInput,
    cb: (err: any, data?: ListMedicalVocabulariesCommandOutput) => void
  ): void;
  public listMedicalVocabularies(
    args: ListMedicalVocabulariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMedicalVocabulariesCommandOutput) => void
  ): void;
  public listMedicalVocabularies(
    args: ListMedicalVocabulariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMedicalVocabulariesCommandOutput) => void),
    cb?: (err: any, data?: ListMedicalVocabulariesCommandOutput) => void
  ): Promise<ListMedicalVocabulariesCommandOutput> | void {
    const command = new ListMedicalVocabulariesCommand(args);
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
   * <p>Lists transcription jobs with the specified status.</p>
   */
  public listTranscriptionJobs(
    args: ListTranscriptionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTranscriptionJobsCommandOutput>;
  public listTranscriptionJobs(
    args: ListTranscriptionJobsCommandInput,
    cb: (err: any, data?: ListTranscriptionJobsCommandOutput) => void
  ): void;
  public listTranscriptionJobs(
    args: ListTranscriptionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTranscriptionJobsCommandOutput) => void
  ): void;
  public listTranscriptionJobs(
    args: ListTranscriptionJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTranscriptionJobsCommandOutput) => void),
    cb?: (err: any, data?: ListTranscriptionJobsCommandOutput) => void
  ): Promise<ListTranscriptionJobsCommandOutput> | void {
    const command = new ListTranscriptionJobsCommand(args);
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
   * <p>Returns a list of vocabularies that match the specified criteria. If no criteria are
   *             specified, returns the entire list of vocabularies.</p>
   */
  public listVocabularies(
    args: ListVocabulariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVocabulariesCommandOutput>;
  public listVocabularies(
    args: ListVocabulariesCommandInput,
    cb: (err: any, data?: ListVocabulariesCommandOutput) => void
  ): void;
  public listVocabularies(
    args: ListVocabulariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVocabulariesCommandOutput) => void
  ): void;
  public listVocabularies(
    args: ListVocabulariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVocabulariesCommandOutput) => void),
    cb?: (err: any, data?: ListVocabulariesCommandOutput) => void
  ): Promise<ListVocabulariesCommandOutput> | void {
    const command = new ListVocabulariesCommand(args);
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
   * <p>Gets information about vocabulary filters.</p>
   */
  public listVocabularyFilters(
    args: ListVocabularyFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVocabularyFiltersCommandOutput>;
  public listVocabularyFilters(
    args: ListVocabularyFiltersCommandInput,
    cb: (err: any, data?: ListVocabularyFiltersCommandOutput) => void
  ): void;
  public listVocabularyFilters(
    args: ListVocabularyFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVocabularyFiltersCommandOutput) => void
  ): void;
  public listVocabularyFilters(
    args: ListVocabularyFiltersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVocabularyFiltersCommandOutput) => void),
    cb?: (err: any, data?: ListVocabularyFiltersCommandOutput) => void
  ): Promise<ListVocabularyFiltersCommandOutput> | void {
    const command = new ListVocabularyFiltersCommand(args);
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
   * <p>Starts a batch job to transcribe medical speech to text.</p>
   */
  public startMedicalTranscriptionJob(
    args: StartMedicalTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMedicalTranscriptionJobCommandOutput>;
  public startMedicalTranscriptionJob(
    args: StartMedicalTranscriptionJobCommandInput,
    cb: (err: any, data?: StartMedicalTranscriptionJobCommandOutput) => void
  ): void;
  public startMedicalTranscriptionJob(
    args: StartMedicalTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMedicalTranscriptionJobCommandOutput) => void
  ): void;
  public startMedicalTranscriptionJob(
    args: StartMedicalTranscriptionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMedicalTranscriptionJobCommandOutput) => void),
    cb?: (err: any, data?: StartMedicalTranscriptionJobCommandOutput) => void
  ): Promise<StartMedicalTranscriptionJobCommandOutput> | void {
    const command = new StartMedicalTranscriptionJobCommand(args);
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
   * <p>Starts an asynchronous job to transcribe speech to text. </p>
   */
  public startTranscriptionJob(
    args: StartTranscriptionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTranscriptionJobCommandOutput>;
  public startTranscriptionJob(
    args: StartTranscriptionJobCommandInput,
    cb: (err: any, data?: StartTranscriptionJobCommandOutput) => void
  ): void;
  public startTranscriptionJob(
    args: StartTranscriptionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTranscriptionJobCommandOutput) => void
  ): void;
  public startTranscriptionJob(
    args: StartTranscriptionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartTranscriptionJobCommandOutput) => void),
    cb?: (err: any, data?: StartTranscriptionJobCommandOutput) => void
  ): Promise<StartTranscriptionJobCommandOutput> | void {
    const command = new StartTranscriptionJobCommand(args);
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
   * <p>Updates a vocabulary with new values that you provide in a different text file from
   *             the one you used to create the vocabulary. The <code>UpdateMedicalVocabulary</code>
   *             operation overwrites all of the existing information with the values that you provide in
   *             the request.</p>
   */
  public updateMedicalVocabulary(
    args: UpdateMedicalVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMedicalVocabularyCommandOutput>;
  public updateMedicalVocabulary(
    args: UpdateMedicalVocabularyCommandInput,
    cb: (err: any, data?: UpdateMedicalVocabularyCommandOutput) => void
  ): void;
  public updateMedicalVocabulary(
    args: UpdateMedicalVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMedicalVocabularyCommandOutput) => void
  ): void;
  public updateMedicalVocabulary(
    args: UpdateMedicalVocabularyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMedicalVocabularyCommandOutput) => void),
    cb?: (err: any, data?: UpdateMedicalVocabularyCommandOutput) => void
  ): Promise<UpdateMedicalVocabularyCommandOutput> | void {
    const command = new UpdateMedicalVocabularyCommand(args);
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
   * <p>Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code>
   *             operation overwrites all of the existing information with the values that you provide in
   *             the request. </p>
   */
  public updateVocabulary(
    args: UpdateVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVocabularyCommandOutput>;
  public updateVocabulary(
    args: UpdateVocabularyCommandInput,
    cb: (err: any, data?: UpdateVocabularyCommandOutput) => void
  ): void;
  public updateVocabulary(
    args: UpdateVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVocabularyCommandOutput) => void
  ): void;
  public updateVocabulary(
    args: UpdateVocabularyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVocabularyCommandOutput) => void),
    cb?: (err: any, data?: UpdateVocabularyCommandOutput) => void
  ): Promise<UpdateVocabularyCommandOutput> | void {
    const command = new UpdateVocabularyCommand(args);
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
   * <p>Updates a vocabulary filter with a new list of filtered words.</p>
   */
  public updateVocabularyFilter(
    args: UpdateVocabularyFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVocabularyFilterCommandOutput>;
  public updateVocabularyFilter(
    args: UpdateVocabularyFilterCommandInput,
    cb: (err: any, data?: UpdateVocabularyFilterCommandOutput) => void
  ): void;
  public updateVocabularyFilter(
    args: UpdateVocabularyFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVocabularyFilterCommandOutput) => void
  ): void;
  public updateVocabularyFilter(
    args: UpdateVocabularyFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVocabularyFilterCommandOutput) => void),
    cb?: (err: any, data?: UpdateVocabularyFilterCommandOutput) => void
  ): Promise<UpdateVocabularyFilterCommandOutput> | void {
    const command = new UpdateVocabularyFilterCommand(args);
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
