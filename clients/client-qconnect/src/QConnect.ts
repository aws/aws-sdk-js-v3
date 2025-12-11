// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ActivateMessageTemplateCommand,
  ActivateMessageTemplateCommandInput,
  ActivateMessageTemplateCommandOutput,
} from "./commands/ActivateMessageTemplateCommand";
import {
  CreateAIAgentCommand,
  CreateAIAgentCommandInput,
  CreateAIAgentCommandOutput,
} from "./commands/CreateAIAgentCommand";
import {
  CreateAIAgentVersionCommand,
  CreateAIAgentVersionCommandInput,
  CreateAIAgentVersionCommandOutput,
} from "./commands/CreateAIAgentVersionCommand";
import {
  CreateAIGuardrailCommand,
  CreateAIGuardrailCommandInput,
  CreateAIGuardrailCommandOutput,
} from "./commands/CreateAIGuardrailCommand";
import {
  CreateAIGuardrailVersionCommand,
  CreateAIGuardrailVersionCommandInput,
  CreateAIGuardrailVersionCommandOutput,
} from "./commands/CreateAIGuardrailVersionCommand";
import {
  CreateAIPromptCommand,
  CreateAIPromptCommandInput,
  CreateAIPromptCommandOutput,
} from "./commands/CreateAIPromptCommand";
import {
  CreateAIPromptVersionCommand,
  CreateAIPromptVersionCommandInput,
  CreateAIPromptVersionCommandOutput,
} from "./commands/CreateAIPromptVersionCommand";
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
  CreateContentAssociationCommand,
  CreateContentAssociationCommandInput,
  CreateContentAssociationCommandOutput,
} from "./commands/CreateContentAssociationCommand";
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
  CreateMessageTemplateAttachmentCommand,
  CreateMessageTemplateAttachmentCommandInput,
  CreateMessageTemplateAttachmentCommandOutput,
} from "./commands/CreateMessageTemplateAttachmentCommand";
import {
  CreateMessageTemplateCommand,
  CreateMessageTemplateCommandInput,
  CreateMessageTemplateCommandOutput,
} from "./commands/CreateMessageTemplateCommand";
import {
  CreateMessageTemplateVersionCommand,
  CreateMessageTemplateVersionCommandInput,
  CreateMessageTemplateVersionCommandOutput,
} from "./commands/CreateMessageTemplateVersionCommand";
import {
  CreateQuickResponseCommand,
  CreateQuickResponseCommandInput,
  CreateQuickResponseCommandOutput,
} from "./commands/CreateQuickResponseCommand";
import {
  CreateSessionCommand,
  CreateSessionCommandInput,
  CreateSessionCommandOutput,
} from "./commands/CreateSessionCommand";
import {
  DeactivateMessageTemplateCommand,
  DeactivateMessageTemplateCommandInput,
  DeactivateMessageTemplateCommandOutput,
} from "./commands/DeactivateMessageTemplateCommand";
import {
  DeleteAIAgentCommand,
  DeleteAIAgentCommandInput,
  DeleteAIAgentCommandOutput,
} from "./commands/DeleteAIAgentCommand";
import {
  DeleteAIAgentVersionCommand,
  DeleteAIAgentVersionCommandInput,
  DeleteAIAgentVersionCommandOutput,
} from "./commands/DeleteAIAgentVersionCommand";
import {
  DeleteAIGuardrailCommand,
  DeleteAIGuardrailCommandInput,
  DeleteAIGuardrailCommandOutput,
} from "./commands/DeleteAIGuardrailCommand";
import {
  DeleteAIGuardrailVersionCommand,
  DeleteAIGuardrailVersionCommandInput,
  DeleteAIGuardrailVersionCommandOutput,
} from "./commands/DeleteAIGuardrailVersionCommand";
import {
  DeleteAIPromptCommand,
  DeleteAIPromptCommandInput,
  DeleteAIPromptCommandOutput,
} from "./commands/DeleteAIPromptCommand";
import {
  DeleteAIPromptVersionCommand,
  DeleteAIPromptVersionCommandInput,
  DeleteAIPromptVersionCommandOutput,
} from "./commands/DeleteAIPromptVersionCommand";
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
  DeleteContentAssociationCommand,
  DeleteContentAssociationCommandInput,
  DeleteContentAssociationCommandOutput,
} from "./commands/DeleteContentAssociationCommand";
import {
  DeleteContentCommand,
  DeleteContentCommandInput,
  DeleteContentCommandOutput,
} from "./commands/DeleteContentCommand";
import {
  DeleteImportJobCommand,
  DeleteImportJobCommandInput,
  DeleteImportJobCommandOutput,
} from "./commands/DeleteImportJobCommand";
import {
  DeleteKnowledgeBaseCommand,
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  DeleteMessageTemplateAttachmentCommand,
  DeleteMessageTemplateAttachmentCommandInput,
  DeleteMessageTemplateAttachmentCommandOutput,
} from "./commands/DeleteMessageTemplateAttachmentCommand";
import {
  DeleteMessageTemplateCommand,
  DeleteMessageTemplateCommandInput,
  DeleteMessageTemplateCommandOutput,
} from "./commands/DeleteMessageTemplateCommand";
import {
  DeleteQuickResponseCommand,
  DeleteQuickResponseCommandInput,
  DeleteQuickResponseCommandOutput,
} from "./commands/DeleteQuickResponseCommand";
import { GetAIAgentCommand, GetAIAgentCommandInput, GetAIAgentCommandOutput } from "./commands/GetAIAgentCommand";
import {
  GetAIGuardrailCommand,
  GetAIGuardrailCommandInput,
  GetAIGuardrailCommandOutput,
} from "./commands/GetAIGuardrailCommand";
import { GetAIPromptCommand, GetAIPromptCommandInput, GetAIPromptCommandOutput } from "./commands/GetAIPromptCommand";
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
import {
  GetContentAssociationCommand,
  GetContentAssociationCommandInput,
  GetContentAssociationCommandOutput,
} from "./commands/GetContentAssociationCommand";
import { GetContentCommand, GetContentCommandInput, GetContentCommandOutput } from "./commands/GetContentCommand";
import {
  GetContentSummaryCommand,
  GetContentSummaryCommandInput,
  GetContentSummaryCommandOutput,
} from "./commands/GetContentSummaryCommand";
import {
  GetImportJobCommand,
  GetImportJobCommandInput,
  GetImportJobCommandOutput,
} from "./commands/GetImportJobCommand";
import {
  GetKnowledgeBaseCommand,
  GetKnowledgeBaseCommandInput,
  GetKnowledgeBaseCommandOutput,
} from "./commands/GetKnowledgeBaseCommand";
import {
  GetMessageTemplateCommand,
  GetMessageTemplateCommandInput,
  GetMessageTemplateCommandOutput,
} from "./commands/GetMessageTemplateCommand";
import {
  GetNextMessageCommand,
  GetNextMessageCommandInput,
  GetNextMessageCommandOutput,
} from "./commands/GetNextMessageCommand";
import {
  GetQuickResponseCommand,
  GetQuickResponseCommandInput,
  GetQuickResponseCommandOutput,
} from "./commands/GetQuickResponseCommand";
import {
  GetRecommendationsCommand,
  GetRecommendationsCommandInput,
  GetRecommendationsCommandOutput,
} from "./commands/GetRecommendationsCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import {
  ListAIAgentsCommand,
  ListAIAgentsCommandInput,
  ListAIAgentsCommandOutput,
} from "./commands/ListAIAgentsCommand";
import {
  ListAIAgentVersionsCommand,
  ListAIAgentVersionsCommandInput,
  ListAIAgentVersionsCommandOutput,
} from "./commands/ListAIAgentVersionsCommand";
import {
  ListAIGuardrailsCommand,
  ListAIGuardrailsCommandInput,
  ListAIGuardrailsCommandOutput,
} from "./commands/ListAIGuardrailsCommand";
import {
  ListAIGuardrailVersionsCommand,
  ListAIGuardrailVersionsCommandInput,
  ListAIGuardrailVersionsCommandOutput,
} from "./commands/ListAIGuardrailVersionsCommand";
import {
  ListAIPromptsCommand,
  ListAIPromptsCommandInput,
  ListAIPromptsCommandOutput,
} from "./commands/ListAIPromptsCommand";
import {
  ListAIPromptVersionsCommand,
  ListAIPromptVersionsCommandInput,
  ListAIPromptVersionsCommandOutput,
} from "./commands/ListAIPromptVersionsCommand";
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
  ListContentAssociationsCommand,
  ListContentAssociationsCommandInput,
  ListContentAssociationsCommandOutput,
} from "./commands/ListContentAssociationsCommand";
import {
  ListContentsCommand,
  ListContentsCommandInput,
  ListContentsCommandOutput,
} from "./commands/ListContentsCommand";
import {
  ListImportJobsCommand,
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput,
} from "./commands/ListImportJobsCommand";
import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "./commands/ListKnowledgeBasesCommand";
import {
  ListMessagesCommand,
  ListMessagesCommandInput,
  ListMessagesCommandOutput,
} from "./commands/ListMessagesCommand";
import {
  ListMessageTemplatesCommand,
  ListMessageTemplatesCommandInput,
  ListMessageTemplatesCommandOutput,
} from "./commands/ListMessageTemplatesCommand";
import {
  ListMessageTemplateVersionsCommand,
  ListMessageTemplateVersionsCommandInput,
  ListMessageTemplateVersionsCommandOutput,
} from "./commands/ListMessageTemplateVersionsCommand";
import {
  ListQuickResponsesCommand,
  ListQuickResponsesCommandInput,
  ListQuickResponsesCommandOutput,
} from "./commands/ListQuickResponsesCommand";
import { ListSpansCommand, ListSpansCommandInput, ListSpansCommandOutput } from "./commands/ListSpansCommand";
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
import { PutFeedbackCommand, PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import {
  QueryAssistantCommand,
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput,
} from "./commands/QueryAssistantCommand";
import {
  RemoveAssistantAIAgentCommand,
  RemoveAssistantAIAgentCommandInput,
  RemoveAssistantAIAgentCommandOutput,
} from "./commands/RemoveAssistantAIAgentCommand";
import {
  RemoveKnowledgeBaseTemplateUriCommand,
  RemoveKnowledgeBaseTemplateUriCommandInput,
  RemoveKnowledgeBaseTemplateUriCommandOutput,
} from "./commands/RemoveKnowledgeBaseTemplateUriCommand";
import {
  RenderMessageTemplateCommand,
  RenderMessageTemplateCommandInput,
  RenderMessageTemplateCommandOutput,
} from "./commands/RenderMessageTemplateCommand";
import { RetrieveCommand, RetrieveCommandInput, RetrieveCommandOutput } from "./commands/RetrieveCommand";
import {
  SearchContentCommand,
  SearchContentCommandInput,
  SearchContentCommandOutput,
} from "./commands/SearchContentCommand";
import {
  SearchMessageTemplatesCommand,
  SearchMessageTemplatesCommandInput,
  SearchMessageTemplatesCommandOutput,
} from "./commands/SearchMessageTemplatesCommand";
import {
  SearchQuickResponsesCommand,
  SearchQuickResponsesCommandInput,
  SearchQuickResponsesCommandOutput,
} from "./commands/SearchQuickResponsesCommand";
import {
  SearchSessionsCommand,
  SearchSessionsCommandInput,
  SearchSessionsCommandOutput,
} from "./commands/SearchSessionsCommand";
import { SendMessageCommand, SendMessageCommandInput, SendMessageCommandOutput } from "./commands/SendMessageCommand";
import {
  StartContentUploadCommand,
  StartContentUploadCommandInput,
  StartContentUploadCommandOutput,
} from "./commands/StartContentUploadCommand";
import {
  StartImportJobCommand,
  StartImportJobCommandInput,
  StartImportJobCommandOutput,
} from "./commands/StartImportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAIAgentCommand,
  UpdateAIAgentCommandInput,
  UpdateAIAgentCommandOutput,
} from "./commands/UpdateAIAgentCommand";
import {
  UpdateAIGuardrailCommand,
  UpdateAIGuardrailCommandInput,
  UpdateAIGuardrailCommandOutput,
} from "./commands/UpdateAIGuardrailCommand";
import {
  UpdateAIPromptCommand,
  UpdateAIPromptCommandInput,
  UpdateAIPromptCommandOutput,
} from "./commands/UpdateAIPromptCommand";
import {
  UpdateAssistantAIAgentCommand,
  UpdateAssistantAIAgentCommandInput,
  UpdateAssistantAIAgentCommandOutput,
} from "./commands/UpdateAssistantAIAgentCommand";
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
import {
  UpdateMessageTemplateCommand,
  UpdateMessageTemplateCommandInput,
  UpdateMessageTemplateCommandOutput,
} from "./commands/UpdateMessageTemplateCommand";
import {
  UpdateMessageTemplateMetadataCommand,
  UpdateMessageTemplateMetadataCommandInput,
  UpdateMessageTemplateMetadataCommandOutput,
} from "./commands/UpdateMessageTemplateMetadataCommand";
import {
  UpdateQuickResponseCommand,
  UpdateQuickResponseCommandInput,
  UpdateQuickResponseCommandOutput,
} from "./commands/UpdateQuickResponseCommand";
import {
  UpdateSessionCommand,
  UpdateSessionCommandInput,
  UpdateSessionCommandOutput,
} from "./commands/UpdateSessionCommand";
import {
  UpdateSessionDataCommand,
  UpdateSessionDataCommandInput,
  UpdateSessionDataCommandOutput,
} from "./commands/UpdateSessionDataCommand";
import { QConnectClient } from "./QConnectClient";

const commands = {
  ActivateMessageTemplateCommand,
  CreateAIAgentCommand,
  CreateAIAgentVersionCommand,
  CreateAIGuardrailCommand,
  CreateAIGuardrailVersionCommand,
  CreateAIPromptCommand,
  CreateAIPromptVersionCommand,
  CreateAssistantCommand,
  CreateAssistantAssociationCommand,
  CreateContentCommand,
  CreateContentAssociationCommand,
  CreateKnowledgeBaseCommand,
  CreateMessageTemplateCommand,
  CreateMessageTemplateAttachmentCommand,
  CreateMessageTemplateVersionCommand,
  CreateQuickResponseCommand,
  CreateSessionCommand,
  DeactivateMessageTemplateCommand,
  DeleteAIAgentCommand,
  DeleteAIAgentVersionCommand,
  DeleteAIGuardrailCommand,
  DeleteAIGuardrailVersionCommand,
  DeleteAIPromptCommand,
  DeleteAIPromptVersionCommand,
  DeleteAssistantCommand,
  DeleteAssistantAssociationCommand,
  DeleteContentCommand,
  DeleteContentAssociationCommand,
  DeleteImportJobCommand,
  DeleteKnowledgeBaseCommand,
  DeleteMessageTemplateCommand,
  DeleteMessageTemplateAttachmentCommand,
  DeleteQuickResponseCommand,
  GetAIAgentCommand,
  GetAIGuardrailCommand,
  GetAIPromptCommand,
  GetAssistantCommand,
  GetAssistantAssociationCommand,
  GetContentCommand,
  GetContentAssociationCommand,
  GetContentSummaryCommand,
  GetImportJobCommand,
  GetKnowledgeBaseCommand,
  GetMessageTemplateCommand,
  GetNextMessageCommand,
  GetQuickResponseCommand,
  GetRecommendationsCommand,
  GetSessionCommand,
  ListAIAgentsCommand,
  ListAIAgentVersionsCommand,
  ListAIGuardrailsCommand,
  ListAIGuardrailVersionsCommand,
  ListAIPromptsCommand,
  ListAIPromptVersionsCommand,
  ListAssistantAssociationsCommand,
  ListAssistantsCommand,
  ListContentAssociationsCommand,
  ListContentsCommand,
  ListImportJobsCommand,
  ListKnowledgeBasesCommand,
  ListMessagesCommand,
  ListMessageTemplatesCommand,
  ListMessageTemplateVersionsCommand,
  ListQuickResponsesCommand,
  ListSpansCommand,
  ListTagsForResourceCommand,
  NotifyRecommendationsReceivedCommand,
  PutFeedbackCommand,
  QueryAssistantCommand,
  RemoveAssistantAIAgentCommand,
  RemoveKnowledgeBaseTemplateUriCommand,
  RenderMessageTemplateCommand,
  RetrieveCommand,
  SearchContentCommand,
  SearchMessageTemplatesCommand,
  SearchQuickResponsesCommand,
  SearchSessionsCommand,
  SendMessageCommand,
  StartContentUploadCommand,
  StartImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAIAgentCommand,
  UpdateAIGuardrailCommand,
  UpdateAIPromptCommand,
  UpdateAssistantAIAgentCommand,
  UpdateContentCommand,
  UpdateKnowledgeBaseTemplateUriCommand,
  UpdateMessageTemplateCommand,
  UpdateMessageTemplateMetadataCommand,
  UpdateQuickResponseCommand,
  UpdateSessionCommand,
  UpdateSessionDataCommand,
};

export interface QConnect {
  /**
   * @see {@link ActivateMessageTemplateCommand}
   */
  activateMessageTemplate(
    args: ActivateMessageTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateMessageTemplateCommandOutput>;
  activateMessageTemplate(
    args: ActivateMessageTemplateCommandInput,
    cb: (err: any, data?: ActivateMessageTemplateCommandOutput) => void
  ): void;
  activateMessageTemplate(
    args: ActivateMessageTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAIAgentCommand}
   */
  createAIAgent(args: CreateAIAgentCommandInput, options?: __HttpHandlerOptions): Promise<CreateAIAgentCommandOutput>;
  createAIAgent(args: CreateAIAgentCommandInput, cb: (err: any, data?: CreateAIAgentCommandOutput) => void): void;
  createAIAgent(
    args: CreateAIAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAIAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAIAgentVersionCommand}
   */
  createAIAgentVersion(
    args: CreateAIAgentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAIAgentVersionCommandOutput>;
  createAIAgentVersion(
    args: CreateAIAgentVersionCommandInput,
    cb: (err: any, data?: CreateAIAgentVersionCommandOutput) => void
  ): void;
  createAIAgentVersion(
    args: CreateAIAgentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAIAgentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAIGuardrailCommand}
   */
  createAIGuardrail(
    args: CreateAIGuardrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAIGuardrailCommandOutput>;
  createAIGuardrail(
    args: CreateAIGuardrailCommandInput,
    cb: (err: any, data?: CreateAIGuardrailCommandOutput) => void
  ): void;
  createAIGuardrail(
    args: CreateAIGuardrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAIGuardrailCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAIGuardrailVersionCommand}
   */
  createAIGuardrailVersion(
    args: CreateAIGuardrailVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAIGuardrailVersionCommandOutput>;
  createAIGuardrailVersion(
    args: CreateAIGuardrailVersionCommandInput,
    cb: (err: any, data?: CreateAIGuardrailVersionCommandOutput) => void
  ): void;
  createAIGuardrailVersion(
    args: CreateAIGuardrailVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAIGuardrailVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAIPromptCommand}
   */
  createAIPrompt(
    args: CreateAIPromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAIPromptCommandOutput>;
  createAIPrompt(args: CreateAIPromptCommandInput, cb: (err: any, data?: CreateAIPromptCommandOutput) => void): void;
  createAIPrompt(
    args: CreateAIPromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAIPromptCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAIPromptVersionCommand}
   */
  createAIPromptVersion(
    args: CreateAIPromptVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAIPromptVersionCommandOutput>;
  createAIPromptVersion(
    args: CreateAIPromptVersionCommandInput,
    cb: (err: any, data?: CreateAIPromptVersionCommandOutput) => void
  ): void;
  createAIPromptVersion(
    args: CreateAIPromptVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAIPromptVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssistantCommand}
   */
  createAssistant(
    args: CreateAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssistantCommandOutput>;
  createAssistant(args: CreateAssistantCommandInput, cb: (err: any, data?: CreateAssistantCommandOutput) => void): void;
  createAssistant(
    args: CreateAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssistantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssistantAssociationCommand}
   */
  createAssistantAssociation(
    args: CreateAssistantAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssistantAssociationCommandOutput>;
  createAssistantAssociation(
    args: CreateAssistantAssociationCommandInput,
    cb: (err: any, data?: CreateAssistantAssociationCommandOutput) => void
  ): void;
  createAssistantAssociation(
    args: CreateAssistantAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssistantAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContentCommand}
   */
  createContent(args: CreateContentCommandInput, options?: __HttpHandlerOptions): Promise<CreateContentCommandOutput>;
  createContent(args: CreateContentCommandInput, cb: (err: any, data?: CreateContentCommandOutput) => void): void;
  createContent(
    args: CreateContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContentAssociationCommand}
   */
  createContentAssociation(
    args: CreateContentAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContentAssociationCommandOutput>;
  createContentAssociation(
    args: CreateContentAssociationCommandInput,
    cb: (err: any, data?: CreateContentAssociationCommandOutput) => void
  ): void;
  createContentAssociation(
    args: CreateContentAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContentAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKnowledgeBaseCommand}
   */
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKnowledgeBaseCommandOutput>;
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void
  ): void;
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMessageTemplateCommand}
   */
  createMessageTemplate(
    args: CreateMessageTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMessageTemplateCommandOutput>;
  createMessageTemplate(
    args: CreateMessageTemplateCommandInput,
    cb: (err: any, data?: CreateMessageTemplateCommandOutput) => void
  ): void;
  createMessageTemplate(
    args: CreateMessageTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMessageTemplateAttachmentCommand}
   */
  createMessageTemplateAttachment(
    args: CreateMessageTemplateAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMessageTemplateAttachmentCommandOutput>;
  createMessageTemplateAttachment(
    args: CreateMessageTemplateAttachmentCommandInput,
    cb: (err: any, data?: CreateMessageTemplateAttachmentCommandOutput) => void
  ): void;
  createMessageTemplateAttachment(
    args: CreateMessageTemplateAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMessageTemplateAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMessageTemplateVersionCommand}
   */
  createMessageTemplateVersion(
    args: CreateMessageTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMessageTemplateVersionCommandOutput>;
  createMessageTemplateVersion(
    args: CreateMessageTemplateVersionCommandInput,
    cb: (err: any, data?: CreateMessageTemplateVersionCommandOutput) => void
  ): void;
  createMessageTemplateVersion(
    args: CreateMessageTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMessageTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQuickResponseCommand}
   */
  createQuickResponse(
    args: CreateQuickResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQuickResponseCommandOutput>;
  createQuickResponse(
    args: CreateQuickResponseCommandInput,
    cb: (err: any, data?: CreateQuickResponseCommandOutput) => void
  ): void;
  createQuickResponse(
    args: CreateQuickResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQuickResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSessionCommand}
   */
  createSession(args: CreateSessionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSessionCommandOutput>;
  createSession(args: CreateSessionCommandInput, cb: (err: any, data?: CreateSessionCommandOutput) => void): void;
  createSession(
    args: CreateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateMessageTemplateCommand}
   */
  deactivateMessageTemplate(
    args: DeactivateMessageTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateMessageTemplateCommandOutput>;
  deactivateMessageTemplate(
    args: DeactivateMessageTemplateCommandInput,
    cb: (err: any, data?: DeactivateMessageTemplateCommandOutput) => void
  ): void;
  deactivateMessageTemplate(
    args: DeactivateMessageTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAIAgentCommand}
   */
  deleteAIAgent(args: DeleteAIAgentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAIAgentCommandOutput>;
  deleteAIAgent(args: DeleteAIAgentCommandInput, cb: (err: any, data?: DeleteAIAgentCommandOutput) => void): void;
  deleteAIAgent(
    args: DeleteAIAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAIAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAIAgentVersionCommand}
   */
  deleteAIAgentVersion(
    args: DeleteAIAgentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAIAgentVersionCommandOutput>;
  deleteAIAgentVersion(
    args: DeleteAIAgentVersionCommandInput,
    cb: (err: any, data?: DeleteAIAgentVersionCommandOutput) => void
  ): void;
  deleteAIAgentVersion(
    args: DeleteAIAgentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAIAgentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAIGuardrailCommand}
   */
  deleteAIGuardrail(
    args: DeleteAIGuardrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAIGuardrailCommandOutput>;
  deleteAIGuardrail(
    args: DeleteAIGuardrailCommandInput,
    cb: (err: any, data?: DeleteAIGuardrailCommandOutput) => void
  ): void;
  deleteAIGuardrail(
    args: DeleteAIGuardrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAIGuardrailCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAIGuardrailVersionCommand}
   */
  deleteAIGuardrailVersion(
    args: DeleteAIGuardrailVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAIGuardrailVersionCommandOutput>;
  deleteAIGuardrailVersion(
    args: DeleteAIGuardrailVersionCommandInput,
    cb: (err: any, data?: DeleteAIGuardrailVersionCommandOutput) => void
  ): void;
  deleteAIGuardrailVersion(
    args: DeleteAIGuardrailVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAIGuardrailVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAIPromptCommand}
   */
  deleteAIPrompt(
    args: DeleteAIPromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAIPromptCommandOutput>;
  deleteAIPrompt(args: DeleteAIPromptCommandInput, cb: (err: any, data?: DeleteAIPromptCommandOutput) => void): void;
  deleteAIPrompt(
    args: DeleteAIPromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAIPromptCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAIPromptVersionCommand}
   */
  deleteAIPromptVersion(
    args: DeleteAIPromptVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAIPromptVersionCommandOutput>;
  deleteAIPromptVersion(
    args: DeleteAIPromptVersionCommandInput,
    cb: (err: any, data?: DeleteAIPromptVersionCommandOutput) => void
  ): void;
  deleteAIPromptVersion(
    args: DeleteAIPromptVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAIPromptVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssistantCommand}
   */
  deleteAssistant(
    args: DeleteAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssistantCommandOutput>;
  deleteAssistant(args: DeleteAssistantCommandInput, cb: (err: any, data?: DeleteAssistantCommandOutput) => void): void;
  deleteAssistant(
    args: DeleteAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssistantCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssistantAssociationCommand}
   */
  deleteAssistantAssociation(
    args: DeleteAssistantAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssistantAssociationCommandOutput>;
  deleteAssistantAssociation(
    args: DeleteAssistantAssociationCommandInput,
    cb: (err: any, data?: DeleteAssistantAssociationCommandOutput) => void
  ): void;
  deleteAssistantAssociation(
    args: DeleteAssistantAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssistantAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContentCommand}
   */
  deleteContent(args: DeleteContentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContentCommandOutput>;
  deleteContent(args: DeleteContentCommandInput, cb: (err: any, data?: DeleteContentCommandOutput) => void): void;
  deleteContent(
    args: DeleteContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContentAssociationCommand}
   */
  deleteContentAssociation(
    args: DeleteContentAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContentAssociationCommandOutput>;
  deleteContentAssociation(
    args: DeleteContentAssociationCommandInput,
    cb: (err: any, data?: DeleteContentAssociationCommandOutput) => void
  ): void;
  deleteContentAssociation(
    args: DeleteContentAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContentAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImportJobCommand}
   */
  deleteImportJob(
    args: DeleteImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImportJobCommandOutput>;
  deleteImportJob(args: DeleteImportJobCommandInput, cb: (err: any, data?: DeleteImportJobCommandOutput) => void): void;
  deleteImportJob(
    args: DeleteImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKnowledgeBaseCommand}
   */
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKnowledgeBaseCommandOutput>;
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void
  ): void;
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMessageTemplateCommand}
   */
  deleteMessageTemplate(
    args: DeleteMessageTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMessageTemplateCommandOutput>;
  deleteMessageTemplate(
    args: DeleteMessageTemplateCommandInput,
    cb: (err: any, data?: DeleteMessageTemplateCommandOutput) => void
  ): void;
  deleteMessageTemplate(
    args: DeleteMessageTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMessageTemplateAttachmentCommand}
   */
  deleteMessageTemplateAttachment(
    args: DeleteMessageTemplateAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMessageTemplateAttachmentCommandOutput>;
  deleteMessageTemplateAttachment(
    args: DeleteMessageTemplateAttachmentCommandInput,
    cb: (err: any, data?: DeleteMessageTemplateAttachmentCommandOutput) => void
  ): void;
  deleteMessageTemplateAttachment(
    args: DeleteMessageTemplateAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMessageTemplateAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQuickResponseCommand}
   */
  deleteQuickResponse(
    args: DeleteQuickResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQuickResponseCommandOutput>;
  deleteQuickResponse(
    args: DeleteQuickResponseCommandInput,
    cb: (err: any, data?: DeleteQuickResponseCommandOutput) => void
  ): void;
  deleteQuickResponse(
    args: DeleteQuickResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQuickResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAIAgentCommand}
   */
  getAIAgent(args: GetAIAgentCommandInput, options?: __HttpHandlerOptions): Promise<GetAIAgentCommandOutput>;
  getAIAgent(args: GetAIAgentCommandInput, cb: (err: any, data?: GetAIAgentCommandOutput) => void): void;
  getAIAgent(
    args: GetAIAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAIAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAIGuardrailCommand}
   */
  getAIGuardrail(
    args: GetAIGuardrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAIGuardrailCommandOutput>;
  getAIGuardrail(args: GetAIGuardrailCommandInput, cb: (err: any, data?: GetAIGuardrailCommandOutput) => void): void;
  getAIGuardrail(
    args: GetAIGuardrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAIGuardrailCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAIPromptCommand}
   */
  getAIPrompt(args: GetAIPromptCommandInput, options?: __HttpHandlerOptions): Promise<GetAIPromptCommandOutput>;
  getAIPrompt(args: GetAIPromptCommandInput, cb: (err: any, data?: GetAIPromptCommandOutput) => void): void;
  getAIPrompt(
    args: GetAIPromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAIPromptCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssistantCommand}
   */
  getAssistant(args: GetAssistantCommandInput, options?: __HttpHandlerOptions): Promise<GetAssistantCommandOutput>;
  getAssistant(args: GetAssistantCommandInput, cb: (err: any, data?: GetAssistantCommandOutput) => void): void;
  getAssistant(
    args: GetAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssistantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssistantAssociationCommand}
   */
  getAssistantAssociation(
    args: GetAssistantAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssistantAssociationCommandOutput>;
  getAssistantAssociation(
    args: GetAssistantAssociationCommandInput,
    cb: (err: any, data?: GetAssistantAssociationCommandOutput) => void
  ): void;
  getAssistantAssociation(
    args: GetAssistantAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssistantAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContentCommand}
   */
  getContent(args: GetContentCommandInput, options?: __HttpHandlerOptions): Promise<GetContentCommandOutput>;
  getContent(args: GetContentCommandInput, cb: (err: any, data?: GetContentCommandOutput) => void): void;
  getContent(
    args: GetContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContentAssociationCommand}
   */
  getContentAssociation(
    args: GetContentAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContentAssociationCommandOutput>;
  getContentAssociation(
    args: GetContentAssociationCommandInput,
    cb: (err: any, data?: GetContentAssociationCommandOutput) => void
  ): void;
  getContentAssociation(
    args: GetContentAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContentAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContentSummaryCommand}
   */
  getContentSummary(
    args: GetContentSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContentSummaryCommandOutput>;
  getContentSummary(
    args: GetContentSummaryCommandInput,
    cb: (err: any, data?: GetContentSummaryCommandOutput) => void
  ): void;
  getContentSummary(
    args: GetContentSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContentSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportJobCommand}
   */
  getImportJob(args: GetImportJobCommandInput, options?: __HttpHandlerOptions): Promise<GetImportJobCommandOutput>;
  getImportJob(args: GetImportJobCommandInput, cb: (err: any, data?: GetImportJobCommandOutput) => void): void;
  getImportJob(
    args: GetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKnowledgeBaseCommand}
   */
  getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKnowledgeBaseCommandOutput>;
  getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    cb: (err: any, data?: GetKnowledgeBaseCommandOutput) => void
  ): void;
  getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMessageTemplateCommand}
   */
  getMessageTemplate(
    args: GetMessageTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMessageTemplateCommandOutput>;
  getMessageTemplate(
    args: GetMessageTemplateCommandInput,
    cb: (err: any, data?: GetMessageTemplateCommandOutput) => void
  ): void;
  getMessageTemplate(
    args: GetMessageTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNextMessageCommand}
   */
  getNextMessage(
    args: GetNextMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNextMessageCommandOutput>;
  getNextMessage(args: GetNextMessageCommandInput, cb: (err: any, data?: GetNextMessageCommandOutput) => void): void;
  getNextMessage(
    args: GetNextMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNextMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQuickResponseCommand}
   */
  getQuickResponse(
    args: GetQuickResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQuickResponseCommandOutput>;
  getQuickResponse(
    args: GetQuickResponseCommandInput,
    cb: (err: any, data?: GetQuickResponseCommandOutput) => void
  ): void;
  getQuickResponse(
    args: GetQuickResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQuickResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationsCommand}
   */
  getRecommendations(
    args: GetRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationsCommandOutput>;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
  getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
  getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAIAgentsCommand}
   */
  listAIAgents(args: ListAIAgentsCommandInput, options?: __HttpHandlerOptions): Promise<ListAIAgentsCommandOutput>;
  listAIAgents(args: ListAIAgentsCommandInput, cb: (err: any, data?: ListAIAgentsCommandOutput) => void): void;
  listAIAgents(
    args: ListAIAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAIAgentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAIAgentVersionsCommand}
   */
  listAIAgentVersions(
    args: ListAIAgentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAIAgentVersionsCommandOutput>;
  listAIAgentVersions(
    args: ListAIAgentVersionsCommandInput,
    cb: (err: any, data?: ListAIAgentVersionsCommandOutput) => void
  ): void;
  listAIAgentVersions(
    args: ListAIAgentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAIAgentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAIGuardrailsCommand}
   */
  listAIGuardrails(
    args: ListAIGuardrailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAIGuardrailsCommandOutput>;
  listAIGuardrails(
    args: ListAIGuardrailsCommandInput,
    cb: (err: any, data?: ListAIGuardrailsCommandOutput) => void
  ): void;
  listAIGuardrails(
    args: ListAIGuardrailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAIGuardrailsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAIGuardrailVersionsCommand}
   */
  listAIGuardrailVersions(
    args: ListAIGuardrailVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAIGuardrailVersionsCommandOutput>;
  listAIGuardrailVersions(
    args: ListAIGuardrailVersionsCommandInput,
    cb: (err: any, data?: ListAIGuardrailVersionsCommandOutput) => void
  ): void;
  listAIGuardrailVersions(
    args: ListAIGuardrailVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAIGuardrailVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAIPromptsCommand}
   */
  listAIPrompts(args: ListAIPromptsCommandInput, options?: __HttpHandlerOptions): Promise<ListAIPromptsCommandOutput>;
  listAIPrompts(args: ListAIPromptsCommandInput, cb: (err: any, data?: ListAIPromptsCommandOutput) => void): void;
  listAIPrompts(
    args: ListAIPromptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAIPromptsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAIPromptVersionsCommand}
   */
  listAIPromptVersions(
    args: ListAIPromptVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAIPromptVersionsCommandOutput>;
  listAIPromptVersions(
    args: ListAIPromptVersionsCommandInput,
    cb: (err: any, data?: ListAIPromptVersionsCommandOutput) => void
  ): void;
  listAIPromptVersions(
    args: ListAIPromptVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAIPromptVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssistantAssociationsCommand}
   */
  listAssistantAssociations(
    args: ListAssistantAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssistantAssociationsCommandOutput>;
  listAssistantAssociations(
    args: ListAssistantAssociationsCommandInput,
    cb: (err: any, data?: ListAssistantAssociationsCommandOutput) => void
  ): void;
  listAssistantAssociations(
    args: ListAssistantAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssistantAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssistantsCommand}
   */
  listAssistants(): Promise<ListAssistantsCommandOutput>;
  listAssistants(
    args: ListAssistantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssistantsCommandOutput>;
  listAssistants(args: ListAssistantsCommandInput, cb: (err: any, data?: ListAssistantsCommandOutput) => void): void;
  listAssistants(
    args: ListAssistantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssistantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContentAssociationsCommand}
   */
  listContentAssociations(
    args: ListContentAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContentAssociationsCommandOutput>;
  listContentAssociations(
    args: ListContentAssociationsCommandInput,
    cb: (err: any, data?: ListContentAssociationsCommandOutput) => void
  ): void;
  listContentAssociations(
    args: ListContentAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContentAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContentsCommand}
   */
  listContents(args: ListContentsCommandInput, options?: __HttpHandlerOptions): Promise<ListContentsCommandOutput>;
  listContents(args: ListContentsCommandInput, cb: (err: any, data?: ListContentsCommandOutput) => void): void;
  listContents(
    args: ListContentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportJobsCommand}
   */
  listImportJobs(
    args: ListImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportJobsCommandOutput>;
  listImportJobs(args: ListImportJobsCommandInput, cb: (err: any, data?: ListImportJobsCommandOutput) => void): void;
  listImportJobs(
    args: ListImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKnowledgeBasesCommand}
   */
  listKnowledgeBases(): Promise<ListKnowledgeBasesCommandOutput>;
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKnowledgeBasesCommandOutput>;
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void
  ): void;
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMessagesCommand}
   */
  listMessages(args: ListMessagesCommandInput, options?: __HttpHandlerOptions): Promise<ListMessagesCommandOutput>;
  listMessages(args: ListMessagesCommandInput, cb: (err: any, data?: ListMessagesCommandOutput) => void): void;
  listMessages(
    args: ListMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMessageTemplatesCommand}
   */
  listMessageTemplates(
    args: ListMessageTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMessageTemplatesCommandOutput>;
  listMessageTemplates(
    args: ListMessageTemplatesCommandInput,
    cb: (err: any, data?: ListMessageTemplatesCommandOutput) => void
  ): void;
  listMessageTemplates(
    args: ListMessageTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMessageTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMessageTemplateVersionsCommand}
   */
  listMessageTemplateVersions(
    args: ListMessageTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMessageTemplateVersionsCommandOutput>;
  listMessageTemplateVersions(
    args: ListMessageTemplateVersionsCommandInput,
    cb: (err: any, data?: ListMessageTemplateVersionsCommandOutput) => void
  ): void;
  listMessageTemplateVersions(
    args: ListMessageTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMessageTemplateVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQuickResponsesCommand}
   */
  listQuickResponses(
    args: ListQuickResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQuickResponsesCommandOutput>;
  listQuickResponses(
    args: ListQuickResponsesCommandInput,
    cb: (err: any, data?: ListQuickResponsesCommandOutput) => void
  ): void;
  listQuickResponses(
    args: ListQuickResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQuickResponsesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpansCommand}
   */
  listSpans(args: ListSpansCommandInput, options?: __HttpHandlerOptions): Promise<ListSpansCommandOutput>;
  listSpans(args: ListSpansCommandInput, cb: (err: any, data?: ListSpansCommandOutput) => void): void;
  listSpans(
    args: ListSpansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSpansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link NotifyRecommendationsReceivedCommand}
   */
  notifyRecommendationsReceived(
    args: NotifyRecommendationsReceivedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyRecommendationsReceivedCommandOutput>;
  notifyRecommendationsReceived(
    args: NotifyRecommendationsReceivedCommandInput,
    cb: (err: any, data?: NotifyRecommendationsReceivedCommandOutput) => void
  ): void;
  notifyRecommendationsReceived(
    args: NotifyRecommendationsReceivedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyRecommendationsReceivedCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFeedbackCommand}
   */
  putFeedback(args: PutFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<PutFeedbackCommandOutput>;
  putFeedback(args: PutFeedbackCommandInput, cb: (err: any, data?: PutFeedbackCommandOutput) => void): void;
  putFeedback(
    args: PutFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryAssistantCommand}
   */
  queryAssistant(
    args: QueryAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryAssistantCommandOutput>;
  queryAssistant(args: QueryAssistantCommandInput, cb: (err: any, data?: QueryAssistantCommandOutput) => void): void;
  queryAssistant(
    args: QueryAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryAssistantCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveAssistantAIAgentCommand}
   */
  removeAssistantAIAgent(
    args: RemoveAssistantAIAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAssistantAIAgentCommandOutput>;
  removeAssistantAIAgent(
    args: RemoveAssistantAIAgentCommandInput,
    cb: (err: any, data?: RemoveAssistantAIAgentCommandOutput) => void
  ): void;
  removeAssistantAIAgent(
    args: RemoveAssistantAIAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAssistantAIAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveKnowledgeBaseTemplateUriCommand}
   */
  removeKnowledgeBaseTemplateUri(
    args: RemoveKnowledgeBaseTemplateUriCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveKnowledgeBaseTemplateUriCommandOutput>;
  removeKnowledgeBaseTemplateUri(
    args: RemoveKnowledgeBaseTemplateUriCommandInput,
    cb: (err: any, data?: RemoveKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;
  removeKnowledgeBaseTemplateUri(
    args: RemoveKnowledgeBaseTemplateUriCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;

  /**
   * @see {@link RenderMessageTemplateCommand}
   */
  renderMessageTemplate(
    args: RenderMessageTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RenderMessageTemplateCommandOutput>;
  renderMessageTemplate(
    args: RenderMessageTemplateCommandInput,
    cb: (err: any, data?: RenderMessageTemplateCommandOutput) => void
  ): void;
  renderMessageTemplate(
    args: RenderMessageTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenderMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link RetrieveCommand}
   */
  retrieve(args: RetrieveCommandInput, options?: __HttpHandlerOptions): Promise<RetrieveCommandOutput>;
  retrieve(args: RetrieveCommandInput, cb: (err: any, data?: RetrieveCommandOutput) => void): void;
  retrieve(
    args: RetrieveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchContentCommand}
   */
  searchContent(args: SearchContentCommandInput, options?: __HttpHandlerOptions): Promise<SearchContentCommandOutput>;
  searchContent(args: SearchContentCommandInput, cb: (err: any, data?: SearchContentCommandOutput) => void): void;
  searchContent(
    args: SearchContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchContentCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchMessageTemplatesCommand}
   */
  searchMessageTemplates(
    args: SearchMessageTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchMessageTemplatesCommandOutput>;
  searchMessageTemplates(
    args: SearchMessageTemplatesCommandInput,
    cb: (err: any, data?: SearchMessageTemplatesCommandOutput) => void
  ): void;
  searchMessageTemplates(
    args: SearchMessageTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchMessageTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchQuickResponsesCommand}
   */
  searchQuickResponses(
    args: SearchQuickResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchQuickResponsesCommandOutput>;
  searchQuickResponses(
    args: SearchQuickResponsesCommandInput,
    cb: (err: any, data?: SearchQuickResponsesCommandOutput) => void
  ): void;
  searchQuickResponses(
    args: SearchQuickResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchQuickResponsesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchSessionsCommand}
   */
  searchSessions(
    args: SearchSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSessionsCommandOutput>;
  searchSessions(args: SearchSessionsCommandInput, cb: (err: any, data?: SearchSessionsCommandOutput) => void): void;
  searchSessions(
    args: SearchSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendMessageCommand}
   */
  sendMessage(args: SendMessageCommandInput, options?: __HttpHandlerOptions): Promise<SendMessageCommandOutput>;
  sendMessage(args: SendMessageCommandInput, cb: (err: any, data?: SendMessageCommandOutput) => void): void;
  sendMessage(
    args: SendMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link StartContentUploadCommand}
   */
  startContentUpload(
    args: StartContentUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartContentUploadCommandOutput>;
  startContentUpload(
    args: StartContentUploadCommandInput,
    cb: (err: any, data?: StartContentUploadCommandOutput) => void
  ): void;
  startContentUpload(
    args: StartContentUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartContentUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportJobCommand}
   */
  startImportJob(
    args: StartImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportJobCommandOutput>;
  startImportJob(args: StartImportJobCommandInput, cb: (err: any, data?: StartImportJobCommandOutput) => void): void;
  startImportJob(
    args: StartImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAIAgentCommand}
   */
  updateAIAgent(args: UpdateAIAgentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAIAgentCommandOutput>;
  updateAIAgent(args: UpdateAIAgentCommandInput, cb: (err: any, data?: UpdateAIAgentCommandOutput) => void): void;
  updateAIAgent(
    args: UpdateAIAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAIAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAIGuardrailCommand}
   */
  updateAIGuardrail(
    args: UpdateAIGuardrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAIGuardrailCommandOutput>;
  updateAIGuardrail(
    args: UpdateAIGuardrailCommandInput,
    cb: (err: any, data?: UpdateAIGuardrailCommandOutput) => void
  ): void;
  updateAIGuardrail(
    args: UpdateAIGuardrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAIGuardrailCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAIPromptCommand}
   */
  updateAIPrompt(
    args: UpdateAIPromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAIPromptCommandOutput>;
  updateAIPrompt(args: UpdateAIPromptCommandInput, cb: (err: any, data?: UpdateAIPromptCommandOutput) => void): void;
  updateAIPrompt(
    args: UpdateAIPromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAIPromptCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssistantAIAgentCommand}
   */
  updateAssistantAIAgent(
    args: UpdateAssistantAIAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssistantAIAgentCommandOutput>;
  updateAssistantAIAgent(
    args: UpdateAssistantAIAgentCommandInput,
    cb: (err: any, data?: UpdateAssistantAIAgentCommandOutput) => void
  ): void;
  updateAssistantAIAgent(
    args: UpdateAssistantAIAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssistantAIAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContentCommand}
   */
  updateContent(args: UpdateContentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContentCommandOutput>;
  updateContent(args: UpdateContentCommandInput, cb: (err: any, data?: UpdateContentCommandOutput) => void): void;
  updateContent(
    args: UpdateContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKnowledgeBaseTemplateUriCommand}
   */
  updateKnowledgeBaseTemplateUri(
    args: UpdateKnowledgeBaseTemplateUriCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput>;
  updateKnowledgeBaseTemplateUri(
    args: UpdateKnowledgeBaseTemplateUriCommandInput,
    cb: (err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;
  updateKnowledgeBaseTemplateUri(
    args: UpdateKnowledgeBaseTemplateUriCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMessageTemplateCommand}
   */
  updateMessageTemplate(
    args: UpdateMessageTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMessageTemplateCommandOutput>;
  updateMessageTemplate(
    args: UpdateMessageTemplateCommandInput,
    cb: (err: any, data?: UpdateMessageTemplateCommandOutput) => void
  ): void;
  updateMessageTemplate(
    args: UpdateMessageTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMessageTemplateMetadataCommand}
   */
  updateMessageTemplateMetadata(
    args: UpdateMessageTemplateMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMessageTemplateMetadataCommandOutput>;
  updateMessageTemplateMetadata(
    args: UpdateMessageTemplateMetadataCommandInput,
    cb: (err: any, data?: UpdateMessageTemplateMetadataCommandOutput) => void
  ): void;
  updateMessageTemplateMetadata(
    args: UpdateMessageTemplateMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMessageTemplateMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQuickResponseCommand}
   */
  updateQuickResponse(
    args: UpdateQuickResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuickResponseCommandOutput>;
  updateQuickResponse(
    args: UpdateQuickResponseCommandInput,
    cb: (err: any, data?: UpdateQuickResponseCommandOutput) => void
  ): void;
  updateQuickResponse(
    args: UpdateQuickResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuickResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSessionCommand}
   */
  updateSession(args: UpdateSessionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSessionCommandOutput>;
  updateSession(args: UpdateSessionCommandInput, cb: (err: any, data?: UpdateSessionCommandOutput) => void): void;
  updateSession(
    args: UpdateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSessionDataCommand}
   */
  updateSessionData(
    args: UpdateSessionDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSessionDataCommandOutput>;
  updateSessionData(
    args: UpdateSessionDataCommandInput,
    cb: (err: any, data?: UpdateSessionDataCommandOutput) => void
  ): void;
  updateSessionData(
    args: UpdateSessionDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSessionDataCommandOutput) => void
  ): void;
}

/**
 * <ul> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Q_Connect.html">Amazon Q actions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Q_Connect.html">Amazon Q data types</a> </p> </li> </ul> <note> <p> <b>Powered by Amazon Bedrock</b>: Amazon Web Services implements <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/abuse-detection.html">automated abuse detection</a>. Because Amazon Q in Connect is built on Amazon Bedrock, users can take full advantage of the controls implemented in Amazon Bedrock to enforce safety, security, and the responsible use of artificial intelligence (AI).</p> </note> <p>Amazon Q in Connect is a generative AI customer service assistant. It is an LLM-enhanced evolution of Amazon Connect Wisdom that delivers real-time recommendations to help contact center agents resolve customer issues quickly and accurately.</p> <p>Amazon Q in Connect automatically detects customer intent during calls and chats using conversational analytics and natural language understanding (NLU). It then provides agents with immediate, real-time generative responses and suggested actions, and links to relevant documents and articles. Agents can also query Amazon Q in Connect directly using natural language or keywords to answer customer requests.</p> <p>Use the Amazon Q in Connect APIs to create an assistant and a knowledge base, for example, or manage content by uploading custom files.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html">Use Amazon Q in Connect for generative AI powered agent assistance in real-time</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @public
 */
export class QConnect extends QConnectClient implements QConnect {}
createAggregatedClient(commands, QConnect);
