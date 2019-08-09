import { TranscribeClient } from "./TranscribeClient";
import { BadRequestException } from "./types/BadRequestException";
import { ConflictException } from "./types/ConflictException";
import { CreateVocabularyInput } from "./types/CreateVocabularyInput";
import { CreateVocabularyOutput } from "./types/CreateVocabularyOutput";
import { DeleteTranscriptionJobInput } from "./types/DeleteTranscriptionJobInput";
import { DeleteTranscriptionJobOutput } from "./types/DeleteTranscriptionJobOutput";
import { DeleteVocabularyInput } from "./types/DeleteVocabularyInput";
import { DeleteVocabularyOutput } from "./types/DeleteVocabularyOutput";
import { GetTranscriptionJobInput } from "./types/GetTranscriptionJobInput";
import { GetTranscriptionJobOutput } from "./types/GetTranscriptionJobOutput";
import { GetVocabularyInput } from "./types/GetVocabularyInput";
import { GetVocabularyOutput } from "./types/GetVocabularyOutput";
import { InternalFailureException } from "./types/InternalFailureException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListTranscriptionJobsInput } from "./types/ListTranscriptionJobsInput";
import { ListTranscriptionJobsOutput } from "./types/ListTranscriptionJobsOutput";
import { ListVocabulariesInput } from "./types/ListVocabulariesInput";
import { ListVocabulariesOutput } from "./types/ListVocabulariesOutput";
import { NotFoundException } from "./types/NotFoundException";
import { StartTranscriptionJobInput } from "./types/StartTranscriptionJobInput";
import { StartTranscriptionJobOutput } from "./types/StartTranscriptionJobOutput";
import { UpdateVocabularyInput } from "./types/UpdateVocabularyInput";
import { UpdateVocabularyOutput } from "./types/UpdateVocabularyOutput";
import { CreateVocabularyCommand } from "./commands/CreateVocabularyCommand";
import { DeleteTranscriptionJobCommand } from "./commands/DeleteTranscriptionJobCommand";
import { DeleteVocabularyCommand } from "./commands/DeleteVocabularyCommand";
import { GetTranscriptionJobCommand } from "./commands/GetTranscriptionJobCommand";
import { GetVocabularyCommand } from "./commands/GetVocabularyCommand";
import { ListTranscriptionJobsCommand } from "./commands/ListTranscriptionJobsCommand";
import { ListVocabulariesCommand } from "./commands/ListVocabulariesCommand";
import { StartTranscriptionJobCommand } from "./commands/StartTranscriptionJobCommand";
import { UpdateVocabularyCommand } from "./commands/UpdateVocabularyCommand";

export class Transcribe extends TranscribeClient {
  /**
   * <p>Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Your request didn't pass one or more validation tests. For example, if the transcription you're trying to delete doesn't exist or if it is in a non-terminal state (for example, it's "in progress"). See the exception <code>Message</code> field for more information.</p>
   *   - {LimitExceededException} <p>Either you have sent too many requests or your input file is too long. Wait before you resend your request, or use a smaller file and resend the request.</p>
   *   - {InternalFailureException} <p>There was an internal error. Check the error message and try your request again.</p>
   *   - {ConflictException} <p>When you are using the <code>StartTranscriptionJob</code> operation, the <code>JobName</code> field is a duplicate of a previously entered job name. Resend your request with a different name.</p> <p>When you are using the <code>UpdateVocabulary</code> operation, there are two jobs running at the same time. Resend the second request later.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVocabulary(
    args: CreateVocabularyInput
  ): Promise<CreateVocabularyOutput>;
  public createVocabulary(
    args: CreateVocabularyInput,
    cb: (err: any, data?: CreateVocabularyOutput) => void
  ): void;
  public createVocabulary(
    args: CreateVocabularyInput,
    cb?: (err: any, data?: CreateVocabularyOutput) => void
  ): Promise<CreateVocabularyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVocabularyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a previously submitted transcription job along with any other generated results such as the transcription, models, and so on.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>Either you have sent too many requests or your input file is too long. Wait before you resend your request, or use a smaller file and resend the request.</p>
   *   - {BadRequestException} <p>Your request didn't pass one or more validation tests. For example, if the transcription you're trying to delete doesn't exist or if it is in a non-terminal state (for example, it's "in progress"). See the exception <code>Message</code> field for more information.</p>
   *   - {InternalFailureException} <p>There was an internal error. Check the error message and try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTranscriptionJob(
    args: DeleteTranscriptionJobInput
  ): Promise<DeleteTranscriptionJobOutput>;
  public deleteTranscriptionJob(
    args: DeleteTranscriptionJobInput,
    cb: (err: any, data?: DeleteTranscriptionJobOutput) => void
  ): void;
  public deleteTranscriptionJob(
    args: DeleteTranscriptionJobInput,
    cb?: (err: any, data?: DeleteTranscriptionJobOutput) => void
  ): Promise<DeleteTranscriptionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTranscriptionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a vocabulary from Amazon Transcribe. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>We can't find the requested resource. Check the name and try your request again.</p>
   *   - {LimitExceededException} <p>Either you have sent too many requests or your input file is too long. Wait before you resend your request, or use a smaller file and resend the request.</p>
   *   - {BadRequestException} <p>Your request didn't pass one or more validation tests. For example, if the transcription you're trying to delete doesn't exist or if it is in a non-terminal state (for example, it's "in progress"). See the exception <code>Message</code> field for more information.</p>
   *   - {InternalFailureException} <p>There was an internal error. Check the error message and try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVocabulary(
    args: DeleteVocabularyInput
  ): Promise<DeleteVocabularyOutput>;
  public deleteVocabulary(
    args: DeleteVocabularyInput,
    cb: (err: any, data?: DeleteVocabularyOutput) => void
  ): void;
  public deleteVocabulary(
    args: DeleteVocabularyInput,
    cb?: (err: any, data?: DeleteVocabularyOutput) => void
  ): Promise<DeleteVocabularyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVocabularyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a transcription job. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptionFileUri</code> field.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Your request didn't pass one or more validation tests. For example, if the transcription you're trying to delete doesn't exist or if it is in a non-terminal state (for example, it's "in progress"). See the exception <code>Message</code> field for more information.</p>
   *   - {LimitExceededException} <p>Either you have sent too many requests or your input file is too long. Wait before you resend your request, or use a smaller file and resend the request.</p>
   *   - {InternalFailureException} <p>There was an internal error. Check the error message and try your request again.</p>
   *   - {NotFoundException} <p>We can't find the requested resource. Check the name and try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTranscriptionJob(
    args: GetTranscriptionJobInput
  ): Promise<GetTranscriptionJobOutput>;
  public getTranscriptionJob(
    args: GetTranscriptionJobInput,
    cb: (err: any, data?: GetTranscriptionJobOutput) => void
  ): void;
  public getTranscriptionJob(
    args: GetTranscriptionJobInput,
    cb?: (err: any, data?: GetTranscriptionJobOutput) => void
  ): Promise<GetTranscriptionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTranscriptionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a vocabulary. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>We can't find the requested resource. Check the name and try your request again.</p>
   *   - {LimitExceededException} <p>Either you have sent too many requests or your input file is too long. Wait before you resend your request, or use a smaller file and resend the request.</p>
   *   - {InternalFailureException} <p>There was an internal error. Check the error message and try your request again.</p>
   *   - {BadRequestException} <p>Your request didn't pass one or more validation tests. For example, if the transcription you're trying to delete doesn't exist or if it is in a non-terminal state (for example, it's "in progress"). See the exception <code>Message</code> field for more information.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getVocabulary(args: GetVocabularyInput): Promise<GetVocabularyOutput>;
  public getVocabulary(
    args: GetVocabularyInput,
    cb: (err: any, data?: GetVocabularyOutput) => void
  ): void;
  public getVocabulary(
    args: GetVocabularyInput,
    cb?: (err: any, data?: GetVocabularyOutput) => void
  ): Promise<GetVocabularyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetVocabularyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists transcription jobs with the specified status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Your request didn't pass one or more validation tests. For example, if the transcription you're trying to delete doesn't exist or if it is in a non-terminal state (for example, it's "in progress"). See the exception <code>Message</code> field for more information.</p>
   *   - {LimitExceededException} <p>Either you have sent too many requests or your input file is too long. Wait before you resend your request, or use a smaller file and resend the request.</p>
   *   - {InternalFailureException} <p>There was an internal error. Check the error message and try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTranscriptionJobs(
    args: ListTranscriptionJobsInput
  ): Promise<ListTranscriptionJobsOutput>;
  public listTranscriptionJobs(
    args: ListTranscriptionJobsInput,
    cb: (err: any, data?: ListTranscriptionJobsOutput) => void
  ): void;
  public listTranscriptionJobs(
    args: ListTranscriptionJobsInput,
    cb?: (err: any, data?: ListTranscriptionJobsOutput) => void
  ): Promise<ListTranscriptionJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTranscriptionJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Your request didn't pass one or more validation tests. For example, if the transcription you're trying to delete doesn't exist or if it is in a non-terminal state (for example, it's "in progress"). See the exception <code>Message</code> field for more information.</p>
   *   - {LimitExceededException} <p>Either you have sent too many requests or your input file is too long. Wait before you resend your request, or use a smaller file and resend the request.</p>
   *   - {InternalFailureException} <p>There was an internal error. Check the error message and try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVocabularies(
    args: ListVocabulariesInput
  ): Promise<ListVocabulariesOutput>;
  public listVocabularies(
    args: ListVocabulariesInput,
    cb: (err: any, data?: ListVocabulariesOutput) => void
  ): void;
  public listVocabularies(
    args: ListVocabulariesInput,
    cb?: (err: any, data?: ListVocabulariesOutput) => void
  ): Promise<ListVocabulariesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVocabulariesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an asynchronous job to transcribe speech to text. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Your request didn't pass one or more validation tests. For example, if the transcription you're trying to delete doesn't exist or if it is in a non-terminal state (for example, it's "in progress"). See the exception <code>Message</code> field for more information.</p>
   *   - {LimitExceededException} <p>Either you have sent too many requests or your input file is too long. Wait before you resend your request, or use a smaller file and resend the request.</p>
   *   - {InternalFailureException} <p>There was an internal error. Check the error message and try your request again.</p>
   *   - {ConflictException} <p>When you are using the <code>StartTranscriptionJob</code> operation, the <code>JobName</code> field is a duplicate of a previously entered job name. Resend your request with a different name.</p> <p>When you are using the <code>UpdateVocabulary</code> operation, there are two jobs running at the same time. Resend the second request later.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startTranscriptionJob(
    args: StartTranscriptionJobInput
  ): Promise<StartTranscriptionJobOutput>;
  public startTranscriptionJob(
    args: StartTranscriptionJobInput,
    cb: (err: any, data?: StartTranscriptionJobOutput) => void
  ): void;
  public startTranscriptionJob(
    args: StartTranscriptionJobInput,
    cb?: (err: any, data?: StartTranscriptionJobOutput) => void
  ): Promise<StartTranscriptionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartTranscriptionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Your request didn't pass one or more validation tests. For example, if the transcription you're trying to delete doesn't exist or if it is in a non-terminal state (for example, it's "in progress"). See the exception <code>Message</code> field for more information.</p>
   *   - {LimitExceededException} <p>Either you have sent too many requests or your input file is too long. Wait before you resend your request, or use a smaller file and resend the request.</p>
   *   - {InternalFailureException} <p>There was an internal error. Check the error message and try your request again.</p>
   *   - {NotFoundException} <p>We can't find the requested resource. Check the name and try your request again.</p>
   *   - {ConflictException} <p>When you are using the <code>StartTranscriptionJob</code> operation, the <code>JobName</code> field is a duplicate of a previously entered job name. Resend your request with a different name.</p> <p>When you are using the <code>UpdateVocabulary</code> operation, there are two jobs running at the same time. Resend the second request later.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateVocabulary(
    args: UpdateVocabularyInput
  ): Promise<UpdateVocabularyOutput>;
  public updateVocabulary(
    args: UpdateVocabularyInput,
    cb: (err: any, data?: UpdateVocabularyOutput) => void
  ): void;
  public updateVocabulary(
    args: UpdateVocabularyInput,
    cb?: (err: any, data?: UpdateVocabularyOutput) => void
  ): Promise<UpdateVocabularyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateVocabularyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
