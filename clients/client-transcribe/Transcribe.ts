import { TranscribeClient } from "./TranscribeClient";
import {
  CreateVocabularyCommand,
  CreateVocabularyCommandInput,
  CreateVocabularyCommandOutput
} from "./commands/CreateVocabularyCommand";
import {
  CreateVocabularyFilterCommand,
  CreateVocabularyFilterCommandInput,
  CreateVocabularyFilterCommandOutput
} from "./commands/CreateVocabularyFilterCommand";
import {
  DeleteTranscriptionJobCommand,
  DeleteTranscriptionJobCommandInput,
  DeleteTranscriptionJobCommandOutput
} from "./commands/DeleteTranscriptionJobCommand";
import {
  DeleteVocabularyCommand,
  DeleteVocabularyCommandInput,
  DeleteVocabularyCommandOutput
} from "./commands/DeleteVocabularyCommand";
import {
  DeleteVocabularyFilterCommand,
  DeleteVocabularyFilterCommandInput,
  DeleteVocabularyFilterCommandOutput
} from "./commands/DeleteVocabularyFilterCommand";
import {
  GetTranscriptionJobCommand,
  GetTranscriptionJobCommandInput,
  GetTranscriptionJobCommandOutput
} from "./commands/GetTranscriptionJobCommand";
import {
  GetVocabularyCommand,
  GetVocabularyCommandInput,
  GetVocabularyCommandOutput
} from "./commands/GetVocabularyCommand";
import {
  GetVocabularyFilterCommand,
  GetVocabularyFilterCommandInput,
  GetVocabularyFilterCommandOutput
} from "./commands/GetVocabularyFilterCommand";
import {
  ListTranscriptionJobsCommand,
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput
} from "./commands/ListTranscriptionJobsCommand";
import {
  ListVocabulariesCommand,
  ListVocabulariesCommandInput,
  ListVocabulariesCommandOutput
} from "./commands/ListVocabulariesCommand";
import {
  ListVocabularyFiltersCommand,
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput
} from "./commands/ListVocabularyFiltersCommand";
import {
  StartTranscriptionJobCommand,
  StartTranscriptionJobCommandInput,
  StartTranscriptionJobCommandOutput
} from "./commands/StartTranscriptionJobCommand";
import {
  UpdateVocabularyCommand,
  UpdateVocabularyCommandInput,
  UpdateVocabularyCommandOutput
} from "./commands/UpdateVocabularyCommand";
import {
  UpdateVocabularyFilterCommand,
  UpdateVocabularyFilterCommandInput,
  UpdateVocabularyFilterCommandOutput
} from "./commands/UpdateVocabularyFilterCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Operations and objects for transcribing speech to text.</p>
 */
export class Transcribe extends TranscribeClient {
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateVocabularyCommandOutput) => void),
    cb?: (err: any, data?: CreateVocabularyCommandOutput) => void
  ): Promise<CreateVocabularyCommandOutput> | void {
    const command = new CreateVocabularyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateVocabularyFilterCommandOutput) => void),
    cb?: (err: any, data?: CreateVocabularyFilterCommandOutput) => void
  ): Promise<CreateVocabularyFilterCommandOutput> | void {
    const command = new CreateVocabularyFilterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteTranscriptionJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteTranscriptionJobCommandOutput) => void
  ): Promise<DeleteTranscriptionJobCommandOutput> | void {
    const command = new DeleteTranscriptionJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVocabularyCommandOutput) => void),
    cb?: (err: any, data?: DeleteVocabularyCommandOutput) => void
  ): Promise<DeleteVocabularyCommandOutput> | void {
    const command = new DeleteVocabularyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVocabularyFilterCommandOutput) => void),
    cb?: (err: any, data?: DeleteVocabularyFilterCommandOutput) => void
  ): Promise<DeleteVocabularyFilterCommandOutput> | void {
    const command = new DeleteVocabularyFilterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a transcription job. To see the status of the job, check the
   *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
   *             the job is finished and you can find the results at the location specified in the
   *                 <code>TranscriptionFileUri</code> field.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTranscriptionJobCommandOutput) => void),
    cb?: (err: any, data?: GetTranscriptionJobCommandOutput) => void
  ): Promise<GetTranscriptionJobCommandOutput> | void {
    const command = new GetTranscriptionJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVocabularyCommandOutput) => void),
    cb?: (err: any, data?: GetVocabularyCommandOutput) => void
  ): Promise<GetVocabularyCommandOutput> | void {
    const command = new GetVocabularyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVocabularyFilterCommandOutput) => void),
    cb?: (err: any, data?: GetVocabularyFilterCommandOutput) => void
  ): Promise<GetVocabularyFilterCommandOutput> | void {
    const command = new GetVocabularyFilterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTranscriptionJobsCommandOutput) => void),
    cb?: (err: any, data?: ListTranscriptionJobsCommandOutput) => void
  ): Promise<ListTranscriptionJobsCommandOutput> | void {
    const command = new ListTranscriptionJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListVocabulariesCommandOutput) => void),
    cb?: (err: any, data?: ListVocabulariesCommandOutput) => void
  ): Promise<ListVocabulariesCommandOutput> | void {
    const command = new ListVocabulariesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListVocabularyFiltersCommandOutput) => void),
    cb?: (err: any, data?: ListVocabularyFiltersCommandOutput) => void
  ): Promise<ListVocabularyFiltersCommandOutput> | void {
    const command = new ListVocabularyFiltersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartTranscriptionJobCommandOutput) => void),
    cb?: (err: any, data?: StartTranscriptionJobCommandOutput) => void
  ): Promise<StartTranscriptionJobCommandOutput> | void {
    const command = new StartTranscriptionJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateVocabularyCommandOutput) => void),
    cb?: (err: any, data?: UpdateVocabularyCommandOutput) => void
  ): Promise<UpdateVocabularyCommandOutput> | void {
    const command = new UpdateVocabularyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateVocabularyFilterCommandOutput) => void),
    cb?: (err: any, data?: UpdateVocabularyFilterCommandOutput) => void
  ): Promise<UpdateVocabularyFilterCommandOutput> | void {
    const command = new UpdateVocabularyFilterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
