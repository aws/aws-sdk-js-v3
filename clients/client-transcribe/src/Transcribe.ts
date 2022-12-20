// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateCallAnalyticsCategoryCommand,
  CreateCallAnalyticsCategoryCommandInput,
  CreateCallAnalyticsCategoryCommandOutput,
} from "./commands/CreateCallAnalyticsCategoryCommand";
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
  DeleteCallAnalyticsCategoryCommand,
  DeleteCallAnalyticsCategoryCommandInput,
  DeleteCallAnalyticsCategoryCommandOutput,
} from "./commands/DeleteCallAnalyticsCategoryCommand";
import {
  DeleteCallAnalyticsJobCommand,
  DeleteCallAnalyticsJobCommandInput,
  DeleteCallAnalyticsJobCommandOutput,
} from "./commands/DeleteCallAnalyticsJobCommand";
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
  GetCallAnalyticsCategoryCommand,
  GetCallAnalyticsCategoryCommandInput,
  GetCallAnalyticsCategoryCommandOutput,
} from "./commands/GetCallAnalyticsCategoryCommand";
import {
  GetCallAnalyticsJobCommand,
  GetCallAnalyticsJobCommandInput,
  GetCallAnalyticsJobCommandOutput,
} from "./commands/GetCallAnalyticsJobCommand";
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
  ListCallAnalyticsCategoriesCommand,
  ListCallAnalyticsCategoriesCommandInput,
  ListCallAnalyticsCategoriesCommandOutput,
} from "./commands/ListCallAnalyticsCategoriesCommand";
import {
  ListCallAnalyticsJobsCommand,
  ListCallAnalyticsJobsCommandInput,
  ListCallAnalyticsJobsCommandOutput,
} from "./commands/ListCallAnalyticsJobsCommand";
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
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
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
  StartCallAnalyticsJobCommand,
  StartCallAnalyticsJobCommandInput,
  StartCallAnalyticsJobCommandOutput,
} from "./commands/StartCallAnalyticsJobCommand";
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
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCallAnalyticsCategoryCommand,
  UpdateCallAnalyticsCategoryCommandInput,
  UpdateCallAnalyticsCategoryCommandOutput,
} from "./commands/UpdateCallAnalyticsCategoryCommand";
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
import { TranscribeClient } from "./TranscribeClient";

/**
 * <p>Amazon Transcribe offers three main types of batch transcription: <b>Standard</b>, <b>Medical</b>, and
 *                 <b>Call Analytics</b>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Standard transcriptions</b> are the most common
 *                     option. Refer to  for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Medical transcriptions</b> are tailored to
 *                     medical professionals and incorporate medical terms. A common use case for this
 *                     service is transcribing doctor-patient dialogue into after-visit notes. Refer to
 *                          for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Call Analytics transcriptions</b> are designed
 *                     for use with call center audio on two different channels; if you're looking for
 *                     insight into customer service calls, use this option. Refer to  for details.</p>
 *             </li>
 *          </ul>
 */
export class Transcribe extends TranscribeClient {
  /**
   * <p>Creates a new Call Analytics category.</p>
   *          <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in
   *             order to apply categories to your transcriptions, you must create them before submitting your
   *             transcription request, as categories cannot be applied retroactively.</p>
   *          <p>When creating a new category, you can use the <code>InputType</code> parameter to
   *             label the category as a batch category (<code>POST_CALL</code>) or a streaming category
   *             (<code>REAL_TIME</code>). Batch categories can only be applied to batch transcriptions and
   *             streaming categories can only be applied to streaming transcriptions. If you do not include
   *             <code>InputType</code>, your category is created as a batch category by default.</p>
   *          <p>Call Analytics categories are composed of rules. For each category, you must create
   *             between 1 and 20 rules. Rules can include these parameters: , , , and .</p>
   *          <p>To update an existing category, see .</p>
   *          <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for batch
   *             transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for
   *                 streaming transcriptions</a>.</p>
   */
  public createCallAnalyticsCategory(
    args: CreateCallAnalyticsCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCallAnalyticsCategoryCommandOutput>;
  public createCallAnalyticsCategory(
    args: CreateCallAnalyticsCategoryCommandInput,
    cb: (err: any, data?: CreateCallAnalyticsCategoryCommandOutput) => void
  ): void;
  public createCallAnalyticsCategory(
    args: CreateCallAnalyticsCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCallAnalyticsCategoryCommandOutput) => void
  ): void;
  public createCallAnalyticsCategory(
    args: CreateCallAnalyticsCategoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCallAnalyticsCategoryCommandOutput) => void),
    cb?: (err: any, data?: CreateCallAnalyticsCategoryCommandOutput) => void
  ): Promise<CreateCallAnalyticsCategoryCommandOutput> | void {
    const command = new CreateCallAnalyticsCategoryCommand(args);
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
   * <p>Creates a new custom language model.</p>
   *          <p>When creating a new custom language model, you must specify:</p>
   *          <ul>
   *             <li>
   *                <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband
   *                     (audio sample rates under 16,000 Hz) base model</p>
   *             </li>
   *             <li>
   *                <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p>
   *             </li>
   *             <li>
   *                <p>The language of your model</p>
   *             </li>
   *             <li>
   *                <p>A unique name for your model</p>
   *             </li>
   *          </ul>
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
   * <p>Creates a new custom medical vocabulary.</p>
   *          <p>Before creating a new custom medical vocabulary, you must first upload a text file
   *             that contains your new entries, phrases, and terms into an Amazon S3 bucket.
   *             Note that this differs from , where you can
   *             include a list of terms within your request using the <code>Phrases</code> flag;
   *                 <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code>
   *             flag.</p>
   *          <p>Each language has a character set that contains all allowed characters for that
   *             specific language. If you use unsupported characters, your custom vocabulary request
   *             fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your
   *             language.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom
   *             vocabularies</a>.</p>
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
   * <p>Creates a new custom vocabulary.</p>
   *          <p>When creating a new custom vocabulary, you can either upload a text file that contains
   *             your new entries, phrases, and terms into an Amazon S3 bucket and include the
   *             URI in your request. Or you can include a list of terms directly in your request using
   *             the <code>Phrases</code> flag.</p>
   *          <p>Each language has a character set that contains all allowed characters for that
   *             specific language. If you use unsupported characters, your custom vocabulary request
   *             fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your
   *             language.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom
   *             vocabularies</a>.</p>
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
   * <p>Creates a new custom vocabulary filter.</p>
   *          <p>You can use custom vocabulary filters to mask, delete, or flag specific words from
   *             your transcript. Custom vocabulary filters are commonly used to mask profanity in
   *             transcripts.</p>
   *          <p>Each language has a character set that contains all allowed characters for that
   *             specific language. If you use unsupported characters, your custom vocabulary filter
   *             request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom
   *                 Vocabularies</a> to get the character set for your language.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary
   *             filtering</a>.</p>
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
   * <p>Deletes a Call Analytics category. To use this operation, specify the name of the
   *             category you want to delete using <code>CategoryName</code>. Category names are case
   *             sensitive.</p>
   */
  public deleteCallAnalyticsCategory(
    args: DeleteCallAnalyticsCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCallAnalyticsCategoryCommandOutput>;
  public deleteCallAnalyticsCategory(
    args: DeleteCallAnalyticsCategoryCommandInput,
    cb: (err: any, data?: DeleteCallAnalyticsCategoryCommandOutput) => void
  ): void;
  public deleteCallAnalyticsCategory(
    args: DeleteCallAnalyticsCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCallAnalyticsCategoryCommandOutput) => void
  ): void;
  public deleteCallAnalyticsCategory(
    args: DeleteCallAnalyticsCategoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCallAnalyticsCategoryCommandOutput) => void),
    cb?: (err: any, data?: DeleteCallAnalyticsCategoryCommandOutput) => void
  ): Promise<DeleteCallAnalyticsCategoryCommandOutput> | void {
    const command = new DeleteCallAnalyticsCategoryCommand(args);
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
   * <p>Deletes a Call Analytics job. To use this operation, specify the name of the job you
   *             want to delete using <code>CallAnalyticsJobName</code>. Job names are case
   *             sensitive.</p>
   */
  public deleteCallAnalyticsJob(
    args: DeleteCallAnalyticsJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCallAnalyticsJobCommandOutput>;
  public deleteCallAnalyticsJob(
    args: DeleteCallAnalyticsJobCommandInput,
    cb: (err: any, data?: DeleteCallAnalyticsJobCommandOutput) => void
  ): void;
  public deleteCallAnalyticsJob(
    args: DeleteCallAnalyticsJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCallAnalyticsJobCommandOutput) => void
  ): void;
  public deleteCallAnalyticsJob(
    args: DeleteCallAnalyticsJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCallAnalyticsJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteCallAnalyticsJobCommandOutput) => void
  ): Promise<DeleteCallAnalyticsJobCommandOutput> | void {
    const command = new DeleteCallAnalyticsJobCommand(args);
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
   * <p>Deletes a custom language model. To use this operation, specify the name of the
   *             language model you want to delete using <code>ModelName</code>. custom language model
   *             names are case sensitive.</p>
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
   * <p>Deletes a medical transcription job. To use this operation, specify the name of the
   *             job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are
   *             case sensitive.</p>
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
   * <p>Deletes a custom medical vocabulary. To use this operation, specify the name of the
   *             custom vocabulary you want to delete using <code>VocabularyName</code>. Custom
   *             vocabulary names are case sensitive.</p>
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
   * <p>Deletes a transcription job. To use this operation, specify the name of the job you
   *             want to delete using <code>TranscriptionJobName</code>. Job names are case
   *             sensitive.</p>
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
   * <p>Deletes a custom vocabulary. To use this operation, specify the name of the custom
   *             vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names
   *             are case sensitive.</p>
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
   * <p>Deletes a custom vocabulary filter. To use this operation, specify the name of the
   *             custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>.
   *             Custom vocabulary filter names are case sensitive.</p>
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
   * <p>Provides information about the specified custom language model.</p>
   *          <p>This operation also shows if the base language model that you used to create your
   *             custom language model has been updated. If Amazon Transcribe has updated the base
   *             model, you can create a new custom language model using the updated base model.</p>
   *          <p>If you tried to create a new custom language model and the request wasn't successful,
   *             you can use <code>DescribeLanguageModel</code> to help identify the reason for this
   *             failure.</p>
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
   * <p>Provides information about the specified Call Analytics category.</p>
   *          <p>To get a list of your Call Analytics categories, use the  operation.</p>
   */
  public getCallAnalyticsCategory(
    args: GetCallAnalyticsCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCallAnalyticsCategoryCommandOutput>;
  public getCallAnalyticsCategory(
    args: GetCallAnalyticsCategoryCommandInput,
    cb: (err: any, data?: GetCallAnalyticsCategoryCommandOutput) => void
  ): void;
  public getCallAnalyticsCategory(
    args: GetCallAnalyticsCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCallAnalyticsCategoryCommandOutput) => void
  ): void;
  public getCallAnalyticsCategory(
    args: GetCallAnalyticsCategoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCallAnalyticsCategoryCommandOutput) => void),
    cb?: (err: any, data?: GetCallAnalyticsCategoryCommandOutput) => void
  ): Promise<GetCallAnalyticsCategoryCommandOutput> | void {
    const command = new GetCallAnalyticsCategoryCommand(args);
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
   * <p>Provides information about the specified Call Analytics job.</p>
   *          <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status
   *             is <code>COMPLETED</code>, the job is finished. You can find your completed transcript
   *             at the URI specified in <code>TranscriptFileUri</code>. If the status is
   *                 <code>FAILED</code>, <code>FailureReason</code> provides details on why your
   *             transcription job failed.</p>
   *          <p>If you enabled personally identifiable information (PII) redaction, the redacted
   *             transcript appears at the location specified in
   *             <code>RedactedTranscriptFileUri</code>.</p>
   *          <p>If you chose to redact the audio in your media file, you can find your redacted media
   *             file at the location specified in <code>RedactedMediaFileUri</code>.</p>
   *          <p>To get a list of your Call Analytics jobs, use the  operation.</p>
   */
  public getCallAnalyticsJob(
    args: GetCallAnalyticsJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCallAnalyticsJobCommandOutput>;
  public getCallAnalyticsJob(
    args: GetCallAnalyticsJobCommandInput,
    cb: (err: any, data?: GetCallAnalyticsJobCommandOutput) => void
  ): void;
  public getCallAnalyticsJob(
    args: GetCallAnalyticsJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCallAnalyticsJobCommandOutput) => void
  ): void;
  public getCallAnalyticsJob(
    args: GetCallAnalyticsJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCallAnalyticsJobCommandOutput) => void),
    cb?: (err: any, data?: GetCallAnalyticsJobCommandOutput) => void
  ): Promise<GetCallAnalyticsJobCommandOutput> | void {
    const command = new GetCallAnalyticsJobCommand(args);
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
   * <p>Provides information about the specified medical transcription job.</p>
   *          <p>To view the status of the specified medical transcription job, check the
   *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
   *             the job is finished. You can find the results at the location specified in
   *                 <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>,
   *                 <code>FailureReason</code> provides details on why your transcription job
   *             failed.</p>
   *          <p>To get a list of your medical transcription jobs, use the  operation.</p>
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
   * <p>Provides information about the specified custom medical vocabulary.</p>
   *          <p>To view the status of the specified custom medical vocabulary, check the
   *                 <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom
   *             vocabulary is available to use. If the status is <code>FAILED</code>,
   *                 <code>FailureReason</code> provides details on why your vocabulary failed.</p>
   *          <p>To get a list of your custom medical vocabularies, use the  operation.</p>
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
   * <p>Provides information about the specified transcription job.</p>
   *          <p>To view the status of the specified transcription job, check the
   *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
   *             the job is finished. You can find the results at the location specified in
   *                 <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>,
   *                 <code>FailureReason</code> provides details on why your transcription job
   *             failed.</p>
   *          <p>If you enabled content redaction, the redacted transcript can be found at the location
   *             specified in <code>RedactedTranscriptFileUri</code>.</p>
   *          <p>To get a list of your transcription jobs, use the  operation.</p>
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
   * <p>Provides information about the specified custom vocabulary.</p>
   *          <p>To view the status of the specified custom vocabulary, check the
   *                 <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom
   *             vocabulary is available to use. If the status is <code>FAILED</code>,
   *                 <code>FailureReason</code> provides details on why your custom vocabulary
   *             failed.</p>
   *          <p>To get a list of your custom vocabularies, use the  operation.</p>
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
   * <p>Provides information about the specified custom vocabulary filter.</p>
   *          <p>To get a list of your custom vocabulary filters, use the  operation.</p>
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
   * <p>Provides a list of Call Analytics categories, including all rules that make up each
   *             category.</p>
   *          <p>To get detailed information about a specific Call Analytics category, use the  operation.</p>
   */
  public listCallAnalyticsCategories(
    args: ListCallAnalyticsCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCallAnalyticsCategoriesCommandOutput>;
  public listCallAnalyticsCategories(
    args: ListCallAnalyticsCategoriesCommandInput,
    cb: (err: any, data?: ListCallAnalyticsCategoriesCommandOutput) => void
  ): void;
  public listCallAnalyticsCategories(
    args: ListCallAnalyticsCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCallAnalyticsCategoriesCommandOutput) => void
  ): void;
  public listCallAnalyticsCategories(
    args: ListCallAnalyticsCategoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCallAnalyticsCategoriesCommandOutput) => void),
    cb?: (err: any, data?: ListCallAnalyticsCategoriesCommandOutput) => void
  ): Promise<ListCallAnalyticsCategoriesCommandOutput> | void {
    const command = new ListCallAnalyticsCategoriesCommand(args);
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
   * <p>Provides a list of Call Analytics jobs that match the specified criteria. If no
   *             criteria are specified, all Call Analytics jobs are returned.</p>
   *          <p>To get detailed information about a specific Call Analytics job, use the  operation.</p>
   */
  public listCallAnalyticsJobs(
    args: ListCallAnalyticsJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCallAnalyticsJobsCommandOutput>;
  public listCallAnalyticsJobs(
    args: ListCallAnalyticsJobsCommandInput,
    cb: (err: any, data?: ListCallAnalyticsJobsCommandOutput) => void
  ): void;
  public listCallAnalyticsJobs(
    args: ListCallAnalyticsJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCallAnalyticsJobsCommandOutput) => void
  ): void;
  public listCallAnalyticsJobs(
    args: ListCallAnalyticsJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCallAnalyticsJobsCommandOutput) => void),
    cb?: (err: any, data?: ListCallAnalyticsJobsCommandOutput) => void
  ): Promise<ListCallAnalyticsJobsCommandOutput> | void {
    const command = new ListCallAnalyticsJobsCommand(args);
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
   * <p>Provides a list of custom language models that match the specified criteria. If no
   *             criteria are specified, all custom language models are returned.</p>
   *          <p>To get detailed information about a specific custom language model, use the  operation.</p>
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
   * <p>Provides a list of medical transcription jobs that match the specified criteria. If no
   *             criteria are specified, all medical transcription jobs are returned.</p>
   *          <p>To get detailed information about a specific medical transcription job, use the  operation.</p>
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
   * <p>Provides a list of custom medical vocabularies that match the specified criteria. If
   *             no criteria are specified, all custom medical vocabularies are returned.</p>
   *          <p>To get detailed information about a specific custom medical vocabulary, use the  operation.</p>
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
   * <p>Lists all tags associated with the specified transcription job, vocabulary, model, or
   *             resource.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *                 resources</a>.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Provides a list of transcription jobs that match the specified criteria. If no
   *             criteria are specified, all transcription jobs are returned.</p>
   *          <p>To get detailed information about a specific transcription job, use the  operation.</p>
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
   * <p>Provides a list of custom vocabularies that match the specified criteria. If no
   *             criteria are specified, all custom vocabularies are returned.</p>
   *          <p>To get detailed information about a specific custom vocabulary, use the  operation.</p>
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
   * <p>Provides a list of custom vocabulary filters that match the specified criteria. If no
   *             criteria are specified, all custom vocabularies are returned.</p>
   *          <p>To get detailed information about a specific custom vocabulary filter, use the  operation.</p>
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
   * <p>Transcribes the audio from a customer service call and applies any additional Request
   *             Parameters you choose to include in your request.</p>
   *          <p>In addition to many standard transcription features, Call Analytics provides you with
   *             call characteristics, call summarization, speaker sentiment, and optional redaction of
   *             your text transcript and your audio file. You can also apply custom categories to flag
   *             specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call
   *                 center audio with Call Analytics</a>.</p>
   *          <p>If you want to apply categories to your Call Analytics job, you must create them
   *             before submitting your job request. Categories cannot be retroactively applied to a job.
   *             To create a new category, use the
   *             operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for batch
   *                 transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for
   *                     streaming transcriptions</a>.</p>
   *          <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media
   *             file into an Amazon S3 bucket; you can then specify the Amazon S3
   *             location of the file using the <code>Media</code> parameter.</p>
   *          <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code>
   *             request:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>region</code>: The Amazon Web Services Region where you are making your
   *                     request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and
   *                         quotas</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CallAnalyticsJobName</code>: A custom name that you create for your
   *                     transcription job that's unique within your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role
   *                     that has permissions to access the Amazon S3 bucket that contains your
   *                     input files.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Media</code> (<code>MediaFileUri</code> or
   *                         <code>RedactedMediaFileUri</code>): The Amazon S3 location of your
   *                     media file.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>With Call Analytics, you can redact the audio contained in your media file by
   *                 including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>,
   *                 to specify the location of your input audio. If you choose to redact your audio, you
   *                 can find your redacted media at the location specified in the
   *                     <code>RedactedMediaFileUri</code> field of your response.</p>
   *          </note>
   */
  public startCallAnalyticsJob(
    args: StartCallAnalyticsJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCallAnalyticsJobCommandOutput>;
  public startCallAnalyticsJob(
    args: StartCallAnalyticsJobCommandInput,
    cb: (err: any, data?: StartCallAnalyticsJobCommandOutput) => void
  ): void;
  public startCallAnalyticsJob(
    args: StartCallAnalyticsJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCallAnalyticsJobCommandOutput) => void
  ): void;
  public startCallAnalyticsJob(
    args: StartCallAnalyticsJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartCallAnalyticsJobCommandOutput) => void),
    cb?: (err: any, data?: StartCallAnalyticsJobCommandOutput) => void
  ): Promise<StartCallAnalyticsJobCommandOutput> | void {
    const command = new StartCallAnalyticsJobCommand(args);
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
   * <p>Transcribes the audio from a medical dictation or conversation and applies any
   *             additional Request Parameters you choose to include in your request.</p>
   *          <p>In addition to many standard transcription features, Amazon Transcribe Medical
   *             provides you with a robust medical vocabulary and, optionally, content identification,
   *             which adds flags to personal health information (PHI). To learn more about these
   *             features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical
   *                 works</a>.</p>
   *          <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload
   *             your media file into an Amazon S3 bucket; you can then specify the S3 location
   *             of the file using the <code>Media</code> parameter.</p>
   *          <p>You must include the following parameters in your
   *                 <code>StartMedicalTranscriptionJob</code> request:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>region</code>: The Amazon Web Services Region where you are making your
   *                     request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and
   *                         quotas</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MedicalTranscriptionJobName</code>: A custom name you create for your
   *                     transcription job that is unique within your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location
   *                     of your media file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LanguageCode</code>: This must be <code>en-US</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OutputBucketName</code>: The Amazon S3 bucket where you want
   *                     your transcript stored. If you want your output stored in a sub-folder of this
   *                     bucket, you must also include <code>OutputKey</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Type</code>: Choose whether your audio is a conversation or a
   *                     dictation.</p>
   *             </li>
   *          </ul>
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
   * <p>Transcribes the audio from a media file and applies any additional Request Parameters
   *             you choose to include in your request.</p>
   *          <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media
   *             file into an Amazon S3 bucket; you can then specify the Amazon S3
   *             location of the file using the <code>Media</code> parameter.</p>
   *          <p>You must include the following parameters in your <code>StartTranscriptionJob</code>
   *             request:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>region</code>: The Amazon Web Services Region where you are making your
   *                     request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and
   *                         quotas</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TranscriptionJobName</code>: A custom name you create for your
   *                     transcription job that is unique within your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location
   *                     of your media file.</p>
   *             </li>
   *             <li>
   *                <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or
   *                         <code>IdentifyMultipleLanguages</code>: If you know the language of your
   *                     media file, specify it using the <code>LanguageCode</code> parameter; you can
   *                     find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *                         languages</a> table. If you don't know the languages spoken in your
   *                     media, use either <code>IdentifyLanguage</code> or
   *                         <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify
   *                     the languages for you.</p>
   *             </li>
   *          </ul>
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
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to the specified
   *             resource.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *                 resources</a>.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes the specified tags from the specified Amazon Transcribe resource.</p>
   *          <p>If you include <code>UntagResource</code> in your request, you must also include
   *                 <code>ResourceArn</code> and <code>TagKeys</code>.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Updates the specified Call Analytics category with new rules. Note that the
   *                 <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules
   *             contained in the specified category. You cannot append additional rules onto an existing
   *             category.</p>
   *          <p>To create a new category, see .</p>
   */
  public updateCallAnalyticsCategory(
    args: UpdateCallAnalyticsCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCallAnalyticsCategoryCommandOutput>;
  public updateCallAnalyticsCategory(
    args: UpdateCallAnalyticsCategoryCommandInput,
    cb: (err: any, data?: UpdateCallAnalyticsCategoryCommandOutput) => void
  ): void;
  public updateCallAnalyticsCategory(
    args: UpdateCallAnalyticsCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCallAnalyticsCategoryCommandOutput) => void
  ): void;
  public updateCallAnalyticsCategory(
    args: UpdateCallAnalyticsCategoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCallAnalyticsCategoryCommandOutput) => void),
    cb?: (err: any, data?: UpdateCallAnalyticsCategoryCommandOutput) => void
  ): Promise<UpdateCallAnalyticsCategoryCommandOutput> | void {
    const command = new UpdateCallAnalyticsCategoryCommand(args);
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
   * <p>Updates an existing custom medical vocabulary with new values. This operation
   *             overwrites all existing information with your new values; you cannot append new terms
   *             onto an existing custom vocabulary.</p>
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
   * <p>Updates an existing custom vocabulary with new values. This operation overwrites all
   *             existing information with your new values; you cannot append new terms onto an existing
   *             custom vocabulary.</p>
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
   * <p>Updates an existing custom vocabulary filter with a new list of words. The new list
   *             you provide overwrites all previous entries; you cannot append new terms onto an
   *             existing custom vocabulary filter.</p>
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
