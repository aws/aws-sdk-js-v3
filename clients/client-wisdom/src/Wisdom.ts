// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateAssistantAssociationCommand,
  CreateAssistantAssociationCommandInput,
  CreateAssistantAssociationCommandOutput,
} from "./commands/CreateAssistantAssociationCommand";
import {
  CreateAssistantCommand,
  CreateAssistantCommandInput,
  CreateAssistantCommandOutput,
} from "./commands/CreateAssistantCommand";
import {
  CreateContentCommand,
  CreateContentCommandInput,
  CreateContentCommandOutput,
} from "./commands/CreateContentCommand";
import {
  CreateKnowledgeBaseCommand,
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "./commands/CreateKnowledgeBaseCommand";
import {
  CreateSessionCommand,
  CreateSessionCommandInput,
  CreateSessionCommandOutput,
} from "./commands/CreateSessionCommand";
import {
  DeleteAssistantAssociationCommand,
  DeleteAssistantAssociationCommandInput,
  DeleteAssistantAssociationCommandOutput,
} from "./commands/DeleteAssistantAssociationCommand";
import {
  DeleteAssistantCommand,
  DeleteAssistantCommandInput,
  DeleteAssistantCommandOutput,
} from "./commands/DeleteAssistantCommand";
import {
  DeleteContentCommand,
  DeleteContentCommandInput,
  DeleteContentCommandOutput,
} from "./commands/DeleteContentCommand";
import {
  DeleteKnowledgeBaseCommand,
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  GetAssistantAssociationCommand,
  GetAssistantAssociationCommandInput,
  GetAssistantAssociationCommandOutput,
} from "./commands/GetAssistantAssociationCommand";
import {
  GetAssistantCommand,
  GetAssistantCommandInput,
  GetAssistantCommandOutput,
} from "./commands/GetAssistantCommand";
import { GetContentCommand, GetContentCommandInput, GetContentCommandOutput } from "./commands/GetContentCommand";
import {
  GetContentSummaryCommand,
  GetContentSummaryCommandInput,
  GetContentSummaryCommandOutput,
} from "./commands/GetContentSummaryCommand";
import {
  GetKnowledgeBaseCommand,
  GetKnowledgeBaseCommandInput,
  GetKnowledgeBaseCommandOutput,
} from "./commands/GetKnowledgeBaseCommand";
import {
  GetRecommendationsCommand,
  GetRecommendationsCommandInput,
  GetRecommendationsCommandOutput,
} from "./commands/GetRecommendationsCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import {
  ListAssistantAssociationsCommand,
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "./commands/ListAssistantAssociationsCommand";
import {
  ListAssistantsCommand,
  ListAssistantsCommandInput,
  ListAssistantsCommandOutput,
} from "./commands/ListAssistantsCommand";
import {
  ListContentsCommand,
  ListContentsCommandInput,
  ListContentsCommandOutput,
} from "./commands/ListContentsCommand";
import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "./commands/ListKnowledgeBasesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  NotifyRecommendationsReceivedCommand,
  NotifyRecommendationsReceivedCommandInput,
  NotifyRecommendationsReceivedCommandOutput,
} from "./commands/NotifyRecommendationsReceivedCommand";
import {
  QueryAssistantCommand,
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput,
} from "./commands/QueryAssistantCommand";
import {
  RemoveKnowledgeBaseTemplateUriCommand,
  RemoveKnowledgeBaseTemplateUriCommandInput,
  RemoveKnowledgeBaseTemplateUriCommandOutput,
} from "./commands/RemoveKnowledgeBaseTemplateUriCommand";
import {
  SearchContentCommand,
  SearchContentCommandInput,
  SearchContentCommandOutput,
} from "./commands/SearchContentCommand";
import {
  SearchSessionsCommand,
  SearchSessionsCommandInput,
  SearchSessionsCommandOutput,
} from "./commands/SearchSessionsCommand";
import {
  StartContentUploadCommand,
  StartContentUploadCommandInput,
  StartContentUploadCommandOutput,
} from "./commands/StartContentUploadCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateContentCommand,
  UpdateContentCommandInput,
  UpdateContentCommandOutput,
} from "./commands/UpdateContentCommand";
import {
  UpdateKnowledgeBaseTemplateUriCommand,
  UpdateKnowledgeBaseTemplateUriCommandInput,
  UpdateKnowledgeBaseTemplateUriCommandOutput,
} from "./commands/UpdateKnowledgeBaseTemplateUriCommand";
import { WisdomClient } from "./WisdomClient";

/**
 * <p>Amazon Connect Wisdom delivers agents the information they need to solve customer issues as they're actively
 *         speaking with customers. Agents can search across connected repositories from within their agent desktop
 *         to find answers quickly. Use the Amazon Connect Wisdom APIs to create an assistant and a knowledge base, for example, or manage content by uploading custom files.</p>
 */
export class Wisdom extends WisdomClient {
  /**
   * <p>Creates an Amazon Connect Wisdom assistant.</p>
   */
  public createAssistant(
    args: CreateAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssistantCommandOutput>;
  public createAssistant(
    args: CreateAssistantCommandInput,
    cb: (err: any, data?: CreateAssistantCommandOutput) => void
  ): void;
  public createAssistant(
    args: CreateAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssistantCommandOutput) => void
  ): void;
  public createAssistant(
    args: CreateAssistantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAssistantCommandOutput) => void),
    cb?: (err: any, data?: CreateAssistantCommandOutput) => void
  ): Promise<CreateAssistantCommandOutput> | void {
    const command = new CreateAssistantCommand(args);
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
   * <p>Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the
   *       only supported association is with a knowledge base. An assistant can have only a single
   *       association.</p>
   */
  public createAssistantAssociation(
    args: CreateAssistantAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssistantAssociationCommandOutput>;
  public createAssistantAssociation(
    args: CreateAssistantAssociationCommandInput,
    cb: (err: any, data?: CreateAssistantAssociationCommandOutput) => void
  ): void;
  public createAssistantAssociation(
    args: CreateAssistantAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssistantAssociationCommandOutput) => void
  ): void;
  public createAssistantAssociation(
    args: CreateAssistantAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAssistantAssociationCommandOutput) => void),
    cb?: (err: any, data?: CreateAssistantAssociationCommandOutput) => void
  ): Promise<CreateAssistantAssociationCommandOutput> | void {
    const command = new CreateAssistantAssociationCommand(args);
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
   * <p>Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to
   *       upload an asset.</p>
   */
  public createContent(
    args: CreateContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContentCommandOutput>;
  public createContent(
    args: CreateContentCommandInput,
    cb: (err: any, data?: CreateContentCommandOutput) => void
  ): void;
  public createContent(
    args: CreateContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContentCommandOutput) => void
  ): void;
  public createContent(
    args: CreateContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateContentCommandOutput) => void),
    cb?: (err: any, data?: CreateContentCommandOutput) => void
  ): Promise<CreateContentCommandOutput> | void {
    const command = new CreateContentCommand(args);
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
   * <p>Creates a knowledge base.</p>
   *          <note>
   *             <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a>
   *         DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do,
   *         you'll get an <code>InvalidRequestException</code> error. </p>
   *
   *             <p>For example, you're programmatically managing your external knowledge base, and you want
   *         to add or remove one of the fields that is being ingested from Salesforce. Do the
   *         following:</p>
   *             <ol>
   *                <li>
   *                   <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p>
   *                </li>
   *                <li>
   *                   <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p>
   *                </li>
   *                <li>
   *                   <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different
   *             one.</p>
   *                </li>
   *                <li>
   *                   <p>Call CreateKnowledgeBase.</p>
   *                </li>
   *             </ol>
   *          </note>
   */
  public createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKnowledgeBaseCommandOutput>;
  public createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void
  ): void;
  public createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void
  ): void;
  public createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateKnowledgeBaseCommandOutput) => void),
    cb?: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void
  ): Promise<CreateKnowledgeBaseCommandOutput> | void {
    const command = new CreateKnowledgeBaseCommand(args);
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
   * <p>Creates a session. A session is a contextual container used for generating
   *       recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is
   *       enabled.</p>
   */
  public createSession(
    args: CreateSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSessionCommandOutput>;
  public createSession(
    args: CreateSessionCommandInput,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;
  public createSession(
    args: CreateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;
  public createSession(
    args: CreateSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSessionCommandOutput) => void),
    cb?: (err: any, data?: CreateSessionCommandOutput) => void
  ): Promise<CreateSessionCommandOutput> | void {
    const command = new CreateSessionCommand(args);
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
   * <p>Deletes an assistant.</p>
   */
  public deleteAssistant(
    args: DeleteAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssistantCommandOutput>;
  public deleteAssistant(
    args: DeleteAssistantCommandInput,
    cb: (err: any, data?: DeleteAssistantCommandOutput) => void
  ): void;
  public deleteAssistant(
    args: DeleteAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssistantCommandOutput) => void
  ): void;
  public deleteAssistant(
    args: DeleteAssistantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssistantCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssistantCommandOutput) => void
  ): Promise<DeleteAssistantCommandOutput> | void {
    const command = new DeleteAssistantCommand(args);
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
   * <p>Deletes an assistant association.</p>
   */
  public deleteAssistantAssociation(
    args: DeleteAssistantAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssistantAssociationCommandOutput>;
  public deleteAssistantAssociation(
    args: DeleteAssistantAssociationCommandInput,
    cb: (err: any, data?: DeleteAssistantAssociationCommandOutput) => void
  ): void;
  public deleteAssistantAssociation(
    args: DeleteAssistantAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssistantAssociationCommandOutput) => void
  ): void;
  public deleteAssistantAssociation(
    args: DeleteAssistantAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssistantAssociationCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssistantAssociationCommandOutput) => void
  ): Promise<DeleteAssistantAssociationCommandOutput> | void {
    const command = new DeleteAssistantAssociationCommand(args);
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
   * <p>Deletes the content.</p>
   */
  public deleteContent(
    args: DeleteContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContentCommandOutput>;
  public deleteContent(
    args: DeleteContentCommandInput,
    cb: (err: any, data?: DeleteContentCommandOutput) => void
  ): void;
  public deleteContent(
    args: DeleteContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContentCommandOutput) => void
  ): void;
  public deleteContent(
    args: DeleteContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteContentCommandOutput) => void),
    cb?: (err: any, data?: DeleteContentCommandOutput) => void
  ): Promise<DeleteContentCommandOutput> | void {
    const command = new DeleteContentCommand(args);
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
   * <p>Deletes the knowledge base.</p>
   *          <note>
   *             <p>When you use this API to delete an external knowledge base such as Salesforce or
   *         ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration.
   *         This is because you can't reuse the DataIntegration after it's been associated with an
   *         external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API
   *         Reference</i>.</p>
   *          </note>
   */
  public deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKnowledgeBaseCommandOutput>;
  public deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void
  ): void;
  public deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void
  ): void;
  public deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteKnowledgeBaseCommandOutput) => void),
    cb?: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void
  ): Promise<DeleteKnowledgeBaseCommandOutput> | void {
    const command = new DeleteKnowledgeBaseCommand(args);
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
   * <p>Retrieves information about an assistant.</p>
   */
  public getAssistant(
    args: GetAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssistantCommandOutput>;
  public getAssistant(args: GetAssistantCommandInput, cb: (err: any, data?: GetAssistantCommandOutput) => void): void;
  public getAssistant(
    args: GetAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssistantCommandOutput) => void
  ): void;
  public getAssistant(
    args: GetAssistantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssistantCommandOutput) => void),
    cb?: (err: any, data?: GetAssistantCommandOutput) => void
  ): Promise<GetAssistantCommandOutput> | void {
    const command = new GetAssistantCommand(args);
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
   * <p>Retrieves information about an assistant association.</p>
   */
  public getAssistantAssociation(
    args: GetAssistantAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssistantAssociationCommandOutput>;
  public getAssistantAssociation(
    args: GetAssistantAssociationCommandInput,
    cb: (err: any, data?: GetAssistantAssociationCommandOutput) => void
  ): void;
  public getAssistantAssociation(
    args: GetAssistantAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssistantAssociationCommandOutput) => void
  ): void;
  public getAssistantAssociation(
    args: GetAssistantAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssistantAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetAssistantAssociationCommandOutput) => void
  ): Promise<GetAssistantAssociationCommandOutput> | void {
    const command = new GetAssistantAssociationCommand(args);
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
   * <p>Retrieves content, including a pre-signed URL to download the content.</p>
   */
  public getContent(args: GetContentCommandInput, options?: __HttpHandlerOptions): Promise<GetContentCommandOutput>;
  public getContent(args: GetContentCommandInput, cb: (err: any, data?: GetContentCommandOutput) => void): void;
  public getContent(
    args: GetContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContentCommandOutput) => void
  ): void;
  public getContent(
    args: GetContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContentCommandOutput) => void),
    cb?: (err: any, data?: GetContentCommandOutput) => void
  ): Promise<GetContentCommandOutput> | void {
    const command = new GetContentCommand(args);
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
   * <p>Retrieves summary information about the content.</p>
   */
  public getContentSummary(
    args: GetContentSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContentSummaryCommandOutput>;
  public getContentSummary(
    args: GetContentSummaryCommandInput,
    cb: (err: any, data?: GetContentSummaryCommandOutput) => void
  ): void;
  public getContentSummary(
    args: GetContentSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContentSummaryCommandOutput) => void
  ): void;
  public getContentSummary(
    args: GetContentSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContentSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetContentSummaryCommandOutput) => void
  ): Promise<GetContentSummaryCommandOutput> | void {
    const command = new GetContentSummaryCommand(args);
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
   * <p>Retrieves information about the knowledge base.</p>
   */
  public getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKnowledgeBaseCommandOutput>;
  public getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    cb: (err: any, data?: GetKnowledgeBaseCommandOutput) => void
  ): void;
  public getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKnowledgeBaseCommandOutput) => void
  ): void;
  public getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetKnowledgeBaseCommandOutput) => void),
    cb?: (err: any, data?: GetKnowledgeBaseCommandOutput) => void
  ): Promise<GetKnowledgeBaseCommandOutput> | void {
    const command = new GetKnowledgeBaseCommand(args);
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
   * <p>Retrieves recommendations for the specified session. To avoid retrieving the same
   *       recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the
   *         <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns
   *       recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.</p>
   */
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationsCommandOutput>;
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): Promise<GetRecommendationsCommandOutput> | void {
    const command = new GetRecommendationsCommand(args);
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
   * <p>Retrieves information for a specified session.</p>
   */
  public getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
  public getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
  public getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;
  public getSession(
    args: GetSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSessionCommandOutput) => void),
    cb?: (err: any, data?: GetSessionCommandOutput) => void
  ): Promise<GetSessionCommandOutput> | void {
    const command = new GetSessionCommand(args);
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
   * <p>Lists information about assistant associations.</p>
   */
  public listAssistantAssociations(
    args: ListAssistantAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssistantAssociationsCommandOutput>;
  public listAssistantAssociations(
    args: ListAssistantAssociationsCommandInput,
    cb: (err: any, data?: ListAssistantAssociationsCommandOutput) => void
  ): void;
  public listAssistantAssociations(
    args: ListAssistantAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssistantAssociationsCommandOutput) => void
  ): void;
  public listAssistantAssociations(
    args: ListAssistantAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssistantAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListAssistantAssociationsCommandOutput) => void
  ): Promise<ListAssistantAssociationsCommandOutput> | void {
    const command = new ListAssistantAssociationsCommand(args);
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
   * <p>Lists information about assistants.</p>
   */
  public listAssistants(
    args: ListAssistantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssistantsCommandOutput>;
  public listAssistants(
    args: ListAssistantsCommandInput,
    cb: (err: any, data?: ListAssistantsCommandOutput) => void
  ): void;
  public listAssistants(
    args: ListAssistantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssistantsCommandOutput) => void
  ): void;
  public listAssistants(
    args: ListAssistantsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssistantsCommandOutput) => void),
    cb?: (err: any, data?: ListAssistantsCommandOutput) => void
  ): Promise<ListAssistantsCommandOutput> | void {
    const command = new ListAssistantsCommand(args);
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
   * <p>Lists the content.</p>
   */
  public listContents(
    args: ListContentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContentsCommandOutput>;
  public listContents(args: ListContentsCommandInput, cb: (err: any, data?: ListContentsCommandOutput) => void): void;
  public listContents(
    args: ListContentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContentsCommandOutput) => void
  ): void;
  public listContents(
    args: ListContentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListContentsCommandOutput) => void),
    cb?: (err: any, data?: ListContentsCommandOutput) => void
  ): Promise<ListContentsCommandOutput> | void {
    const command = new ListContentsCommand(args);
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
   * <p>Lists the knowledge bases.</p>
   */
  public listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKnowledgeBasesCommandOutput>;
  public listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void
  ): void;
  public listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void
  ): void;
  public listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListKnowledgeBasesCommandOutput) => void),
    cb?: (err: any, data?: ListKnowledgeBasesCommandOutput) => void
  ): Promise<ListKnowledgeBasesCommandOutput> | void {
    const command = new ListKnowledgeBasesCommand(args);
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
   * <p>Lists the tags for the specified resource.</p>
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
   * <p>Removes the specified recommendations from the specified assistant's queue of newly
   *       available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling
   *       behavior and avoiding duplicate recommendations.</p>
   */
  public notifyRecommendationsReceived(
    args: NotifyRecommendationsReceivedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyRecommendationsReceivedCommandOutput>;
  public notifyRecommendationsReceived(
    args: NotifyRecommendationsReceivedCommandInput,
    cb: (err: any, data?: NotifyRecommendationsReceivedCommandOutput) => void
  ): void;
  public notifyRecommendationsReceived(
    args: NotifyRecommendationsReceivedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyRecommendationsReceivedCommandOutput) => void
  ): void;
  public notifyRecommendationsReceived(
    args: NotifyRecommendationsReceivedCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NotifyRecommendationsReceivedCommandOutput) => void),
    cb?: (err: any, data?: NotifyRecommendationsReceivedCommandOutput) => void
  ): Promise<NotifyRecommendationsReceivedCommandOutput> | void {
    const command = new NotifyRecommendationsReceivedCommand(args);
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
   * <p>Performs a manual search against the specified assistant. To retrieve recommendations for
   *       an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>.
   *     </p>
   */
  public queryAssistant(
    args: QueryAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryAssistantCommandOutput>;
  public queryAssistant(
    args: QueryAssistantCommandInput,
    cb: (err: any, data?: QueryAssistantCommandOutput) => void
  ): void;
  public queryAssistant(
    args: QueryAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryAssistantCommandOutput) => void
  ): void;
  public queryAssistant(
    args: QueryAssistantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryAssistantCommandOutput) => void),
    cb?: (err: any, data?: QueryAssistantCommandOutput) => void
  ): Promise<QueryAssistantCommandOutput> | void {
    const command = new QueryAssistantCommand(args);
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
   * <p>Removes a URI template from a knowledge base.</p>
   */
  public removeKnowledgeBaseTemplateUri(
    args: RemoveKnowledgeBaseTemplateUriCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveKnowledgeBaseTemplateUriCommandOutput>;
  public removeKnowledgeBaseTemplateUri(
    args: RemoveKnowledgeBaseTemplateUriCommandInput,
    cb: (err: any, data?: RemoveKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;
  public removeKnowledgeBaseTemplateUri(
    args: RemoveKnowledgeBaseTemplateUriCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;
  public removeKnowledgeBaseTemplateUri(
    args: RemoveKnowledgeBaseTemplateUriCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveKnowledgeBaseTemplateUriCommandOutput) => void),
    cb?: (err: any, data?: RemoveKnowledgeBaseTemplateUriCommandOutput) => void
  ): Promise<RemoveKnowledgeBaseTemplateUriCommandOutput> | void {
    const command = new RemoveKnowledgeBaseTemplateUriCommand(args);
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
   * <p>Searches for content in a specified knowledge base. Can be used to get a specific content
   *       resource by its name.</p>
   */
  public searchContent(
    args: SearchContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchContentCommandOutput>;
  public searchContent(
    args: SearchContentCommandInput,
    cb: (err: any, data?: SearchContentCommandOutput) => void
  ): void;
  public searchContent(
    args: SearchContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchContentCommandOutput) => void
  ): void;
  public searchContent(
    args: SearchContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchContentCommandOutput) => void),
    cb?: (err: any, data?: SearchContentCommandOutput) => void
  ): Promise<SearchContentCommandOutput> | void {
    const command = new SearchContentCommand(args);
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
   * <p>Searches for sessions.</p>
   */
  public searchSessions(
    args: SearchSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSessionsCommandOutput>;
  public searchSessions(
    args: SearchSessionsCommandInput,
    cb: (err: any, data?: SearchSessionsCommandOutput) => void
  ): void;
  public searchSessions(
    args: SearchSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSessionsCommandOutput) => void
  ): void;
  public searchSessions(
    args: SearchSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchSessionsCommandOutput) => void),
    cb?: (err: any, data?: SearchSessionsCommandOutput) => void
  ): Promise<SearchSessionsCommandOutput> | void {
    const command = new SearchSessionsCommand(args);
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
   * <p>Get a URL to upload content to a knowledge base. To upload content, first make a PUT
   *       request to the returned URL with your file, making sure to include the required headers. Then
   *       use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a
   *       knowledge base of type CUSTOM.</p>
   */
  public startContentUpload(
    args: StartContentUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartContentUploadCommandOutput>;
  public startContentUpload(
    args: StartContentUploadCommandInput,
    cb: (err: any, data?: StartContentUploadCommandOutput) => void
  ): void;
  public startContentUpload(
    args: StartContentUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartContentUploadCommandOutput) => void
  ): void;
  public startContentUpload(
    args: StartContentUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartContentUploadCommandOutput) => void),
    cb?: (err: any, data?: StartContentUploadCommandOutput) => void
  ): Promise<StartContentUploadCommandOutput> | void {
    const command = new StartContentUploadCommand(args);
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
   * <p>Adds the specified tags to the specified resource.</p>
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
   * <p>Removes the specified tags from the specified resource.</p>
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
   * <p>Updates information about the content.</p>
   */
  public updateContent(
    args: UpdateContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContentCommandOutput>;
  public updateContent(
    args: UpdateContentCommandInput,
    cb: (err: any, data?: UpdateContentCommandOutput) => void
  ): void;
  public updateContent(
    args: UpdateContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContentCommandOutput) => void
  ): void;
  public updateContent(
    args: UpdateContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContentCommandOutput) => void),
    cb?: (err: any, data?: UpdateContentCommandOutput) => void
  ): Promise<UpdateContentCommandOutput> | void {
    const command = new UpdateContentCommand(args);
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
   * <p>Updates the template URI of a knowledge base. This is only supported for knowledge bases
   *       of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this
   *       interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce
   *       article, it has an <code>Id</code> value, and you can set the template URI to
   *         <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*\/view</code>.
   *     </p>
   */
  public updateKnowledgeBaseTemplateUri(
    args: UpdateKnowledgeBaseTemplateUriCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput>;
  public updateKnowledgeBaseTemplateUri(
    args: UpdateKnowledgeBaseTemplateUriCommandInput,
    cb: (err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;
  public updateKnowledgeBaseTemplateUri(
    args: UpdateKnowledgeBaseTemplateUriCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;
  public updateKnowledgeBaseTemplateUri(
    args: UpdateKnowledgeBaseTemplateUriCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void),
    cb?: (err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void
  ): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput> | void {
    const command = new UpdateKnowledgeBaseTemplateUriCommand(args);
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
