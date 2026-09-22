// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { B2biClient } from "./B2biClient";
import {
  type CreateCapabilityCommandInput,
  type CreateCapabilityCommandOutput,
  CreateCapabilityCommand,
} from "./commands/CreateCapabilityCommand";
import {
  type CreatePartnershipCommandInput,
  type CreatePartnershipCommandOutput,
  CreatePartnershipCommand,
} from "./commands/CreatePartnershipCommand";
import {
  type CreateProfileCommandInput,
  type CreateProfileCommandOutput,
  CreateProfileCommand,
} from "./commands/CreateProfileCommand";
import {
  type CreateStarterMappingTemplateCommandInput,
  type CreateStarterMappingTemplateCommandOutput,
  CreateStarterMappingTemplateCommand,
} from "./commands/CreateStarterMappingTemplateCommand";
import {
  type CreateTransformerCommandInput,
  type CreateTransformerCommandOutput,
  CreateTransformerCommand,
} from "./commands/CreateTransformerCommand";
import {
  type DeleteCapabilityCommandInput,
  type DeleteCapabilityCommandOutput,
  DeleteCapabilityCommand,
} from "./commands/DeleteCapabilityCommand";
import {
  type DeletePartnershipCommandInput,
  type DeletePartnershipCommandOutput,
  DeletePartnershipCommand,
} from "./commands/DeletePartnershipCommand";
import {
  type DeleteProfileCommandInput,
  type DeleteProfileCommandOutput,
  DeleteProfileCommand,
} from "./commands/DeleteProfileCommand";
import {
  type DeleteTransformerCommandInput,
  type DeleteTransformerCommandOutput,
  DeleteTransformerCommand,
} from "./commands/DeleteTransformerCommand";
import {
  type GenerateMappingCommandInput,
  type GenerateMappingCommandOutput,
  GenerateMappingCommand,
} from "./commands/GenerateMappingCommand";
import {
  type GetCapabilityCommandInput,
  type GetCapabilityCommandOutput,
  GetCapabilityCommand,
} from "./commands/GetCapabilityCommand";
import {
  type GetPartnershipCommandInput,
  type GetPartnershipCommandOutput,
  GetPartnershipCommand,
} from "./commands/GetPartnershipCommand";
import {
  type GetProfileCommandInput,
  type GetProfileCommandOutput,
  GetProfileCommand,
} from "./commands/GetProfileCommand";
import {
  type GetTransformerCommandInput,
  type GetTransformerCommandOutput,
  GetTransformerCommand,
} from "./commands/GetTransformerCommand";
import {
  type GetTransformerJobCommandInput,
  type GetTransformerJobCommandOutput,
  GetTransformerJobCommand,
} from "./commands/GetTransformerJobCommand";
import {
  type ListCapabilitiesCommandInput,
  type ListCapabilitiesCommandOutput,
  ListCapabilitiesCommand,
} from "./commands/ListCapabilitiesCommand";
import {
  type ListPartnershipsCommandInput,
  type ListPartnershipsCommandOutput,
  ListPartnershipsCommand,
} from "./commands/ListPartnershipsCommand";
import {
  type ListProfilesCommandInput,
  type ListProfilesCommandOutput,
  ListProfilesCommand,
} from "./commands/ListProfilesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTransformersCommandInput,
  type ListTransformersCommandOutput,
  ListTransformersCommand,
} from "./commands/ListTransformersCommand";
import {
  type StartTransformerJobCommandInput,
  type StartTransformerJobCommandOutput,
  StartTransformerJobCommand,
} from "./commands/StartTransformerJobCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TestConversionCommandInput,
  type TestConversionCommandOutput,
  TestConversionCommand,
} from "./commands/TestConversionCommand";
import {
  type TestMappingCommandInput,
  type TestMappingCommandOutput,
  TestMappingCommand,
} from "./commands/TestMappingCommand";
import {
  type TestParsingCommandInput,
  type TestParsingCommandOutput,
  TestParsingCommand,
} from "./commands/TestParsingCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateCapabilityCommandInput,
  type UpdateCapabilityCommandOutput,
  UpdateCapabilityCommand,
} from "./commands/UpdateCapabilityCommand";
import {
  type UpdatePartnershipCommandInput,
  type UpdatePartnershipCommandOutput,
  UpdatePartnershipCommand,
} from "./commands/UpdatePartnershipCommand";
import {
  type UpdateProfileCommandInput,
  type UpdateProfileCommandOutput,
  UpdateProfileCommand,
} from "./commands/UpdateProfileCommand";
import {
  type UpdateTransformerCommandInput,
  type UpdateTransformerCommandOutput,
  UpdateTransformerCommand,
} from "./commands/UpdateTransformerCommand";
import type { B2biServiceException } from "./models/B2biServiceException";
import { paginateListCapabilities } from "./pagination/ListCapabilitiesPaginator";
import { paginateListPartnerships } from "./pagination/ListPartnershipsPaginator";
import { paginateListProfiles } from "./pagination/ListProfilesPaginator";
import { paginateListTransformers } from "./pagination/ListTransformersPaginator";
import { waitUntilTransformerJobSucceeded } from "./waiters/waitForTransformerJobSucceeded";

const commands = {
  CreateCapabilityCommand,
  CreatePartnershipCommand,
  CreateProfileCommand,
  CreateStarterMappingTemplateCommand,
  CreateTransformerCommand,
  DeleteCapabilityCommand,
  DeletePartnershipCommand,
  DeleteProfileCommand,
  DeleteTransformerCommand,
  GenerateMappingCommand,
  GetCapabilityCommand,
  GetPartnershipCommand,
  GetProfileCommand,
  GetTransformerCommand,
  GetTransformerJobCommand,
  ListCapabilitiesCommand,
  ListPartnershipsCommand,
  ListProfilesCommand,
  ListTagsForResourceCommand,
  ListTransformersCommand,
  StartTransformerJobCommand,
  TagResourceCommand,
  TestConversionCommand,
  TestMappingCommand,
  TestParsingCommand,
  UntagResourceCommand,
  UpdateCapabilityCommand,
  UpdatePartnershipCommand,
  UpdateProfileCommand,
  UpdateTransformerCommand,
};
const paginators = {
  paginateListCapabilities,
  paginateListPartnerships,
  paginateListProfiles,
  paginateListTransformers,
};
const waiters = {
  waitUntilTransformerJobSucceeded,
};

/**
 * @public
 */
export interface B2biRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface B2bi {
  /**
   * @see {@link CreateCapabilityCommand}
   */
  createCapability(
    args: CreateCapabilityCommandInput,
    options?: B2biRequestOptions
  ): Promise<CreateCapabilityCommandOutput>;
  createCapability(
    args: CreateCapabilityCommandInput,
    cb: (err: any, data?: CreateCapabilityCommandOutput) => void
  ): void;
  createCapability(
    args: CreateCapabilityCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: CreateCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartnershipCommand}
   */
  createPartnership(
    args: CreatePartnershipCommandInput,
    options?: B2biRequestOptions
  ): Promise<CreatePartnershipCommandOutput>;
  createPartnership(
    args: CreatePartnershipCommandInput,
    cb: (err: any, data?: CreatePartnershipCommandOutput) => void
  ): void;
  createPartnership(
    args: CreatePartnershipCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: CreatePartnershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(
    args: CreateProfileCommandInput,
    options?: B2biRequestOptions
  ): Promise<CreateProfileCommandOutput>;
  createProfile(
    args: CreateProfileCommandInput,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStarterMappingTemplateCommand}
   */
  createStarterMappingTemplate(
    args: CreateStarterMappingTemplateCommandInput,
    options?: B2biRequestOptions
  ): Promise<CreateStarterMappingTemplateCommandOutput>;
  createStarterMappingTemplate(
    args: CreateStarterMappingTemplateCommandInput,
    cb: (err: any, data?: CreateStarterMappingTemplateCommandOutput) => void
  ): void;
  createStarterMappingTemplate(
    args: CreateStarterMappingTemplateCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: CreateStarterMappingTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransformerCommand}
   */
  createTransformer(
    args: CreateTransformerCommandInput,
    options?: B2biRequestOptions
  ): Promise<CreateTransformerCommandOutput>;
  createTransformer(
    args: CreateTransformerCommandInput,
    cb: (err: any, data?: CreateTransformerCommandOutput) => void
  ): void;
  createTransformer(
    args: CreateTransformerCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: CreateTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCapabilityCommand}
   */
  deleteCapability(
    args: DeleteCapabilityCommandInput,
    options?: B2biRequestOptions
  ): Promise<DeleteCapabilityCommandOutput>;
  deleteCapability(
    args: DeleteCapabilityCommandInput,
    cb: (err: any, data?: DeleteCapabilityCommandOutput) => void
  ): void;
  deleteCapability(
    args: DeleteCapabilityCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: DeleteCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePartnershipCommand}
   */
  deletePartnership(
    args: DeletePartnershipCommandInput,
    options?: B2biRequestOptions
  ): Promise<DeletePartnershipCommandOutput>;
  deletePartnership(
    args: DeletePartnershipCommandInput,
    cb: (err: any, data?: DeletePartnershipCommandOutput) => void
  ): void;
  deletePartnership(
    args: DeletePartnershipCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: DeletePartnershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(
    args: DeleteProfileCommandInput,
    options?: B2biRequestOptions
  ): Promise<DeleteProfileCommandOutput>;
  deleteProfile(
    args: DeleteProfileCommandInput,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransformerCommand}
   */
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options?: B2biRequestOptions
  ): Promise<DeleteTransformerCommandOutput>;
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    cb: (err: any, data?: DeleteTransformerCommandOutput) => void
  ): void;
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: DeleteTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateMappingCommand}
   */
  generateMapping(
    args: GenerateMappingCommandInput,
    options?: B2biRequestOptions
  ): Promise<GenerateMappingCommandOutput>;
  generateMapping(
    args: GenerateMappingCommandInput,
    cb: (err: any, data?: GenerateMappingCommandOutput) => void
  ): void;
  generateMapping(
    args: GenerateMappingCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: GenerateMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCapabilityCommand}
   */
  getCapability(
    args: GetCapabilityCommandInput,
    options?: B2biRequestOptions
  ): Promise<GetCapabilityCommandOutput>;
  getCapability(
    args: GetCapabilityCommandInput,
    cb: (err: any, data?: GetCapabilityCommandOutput) => void
  ): void;
  getCapability(
    args: GetCapabilityCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: GetCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartnershipCommand}
   */
  getPartnership(
    args: GetPartnershipCommandInput,
    options?: B2biRequestOptions
  ): Promise<GetPartnershipCommandOutput>;
  getPartnership(
    args: GetPartnershipCommandInput,
    cb: (err: any, data?: GetPartnershipCommandOutput) => void
  ): void;
  getPartnership(
    args: GetPartnershipCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: GetPartnershipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileCommand}
   */
  getProfile(
    args: GetProfileCommandInput,
    options?: B2biRequestOptions
  ): Promise<GetProfileCommandOutput>;
  getProfile(
    args: GetProfileCommandInput,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;
  getProfile(
    args: GetProfileCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransformerCommand}
   */
  getTransformer(
    args: GetTransformerCommandInput,
    options?: B2biRequestOptions
  ): Promise<GetTransformerCommandOutput>;
  getTransformer(
    args: GetTransformerCommandInput,
    cb: (err: any, data?: GetTransformerCommandOutput) => void
  ): void;
  getTransformer(
    args: GetTransformerCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: GetTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransformerJobCommand}
   */
  getTransformerJob(
    args: GetTransformerJobCommandInput,
    options?: B2biRequestOptions
  ): Promise<GetTransformerJobCommandOutput>;
  getTransformerJob(
    args: GetTransformerJobCommandInput,
    cb: (err: any, data?: GetTransformerJobCommandOutput) => void
  ): void;
  getTransformerJob(
    args: GetTransformerJobCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: GetTransformerJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCapabilitiesCommand}
   */
  listCapabilities(): Promise<ListCapabilitiesCommandOutput>;
  listCapabilities(
    args: ListCapabilitiesCommandInput,
    options?: B2biRequestOptions
  ): Promise<ListCapabilitiesCommandOutput>;
  listCapabilities(
    args: ListCapabilitiesCommandInput,
    cb: (err: any, data?: ListCapabilitiesCommandOutput) => void
  ): void;
  listCapabilities(
    args: ListCapabilitiesCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: ListCapabilitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartnershipsCommand}
   */
  listPartnerships(): Promise<ListPartnershipsCommandOutput>;
  listPartnerships(
    args: ListPartnershipsCommandInput,
    options?: B2biRequestOptions
  ): Promise<ListPartnershipsCommandOutput>;
  listPartnerships(
    args: ListPartnershipsCommandInput,
    cb: (err: any, data?: ListPartnershipsCommandOutput) => void
  ): void;
  listPartnerships(
    args: ListPartnershipsCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: ListPartnershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfilesCommand}
   */
  listProfiles(): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    options?: B2biRequestOptions
  ): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;
  listProfiles(
    args: ListProfilesCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: B2biRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTransformersCommand}
   */
  listTransformers(): Promise<ListTransformersCommandOutput>;
  listTransformers(
    args: ListTransformersCommandInput,
    options?: B2biRequestOptions
  ): Promise<ListTransformersCommandOutput>;
  listTransformers(
    args: ListTransformersCommandInput,
    cb: (err: any, data?: ListTransformersCommandOutput) => void
  ): void;
  listTransformers(
    args: ListTransformersCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: ListTransformersCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTransformerJobCommand}
   */
  startTransformerJob(
    args: StartTransformerJobCommandInput,
    options?: B2biRequestOptions
  ): Promise<StartTransformerJobCommandOutput>;
  startTransformerJob(
    args: StartTransformerJobCommandInput,
    cb: (err: any, data?: StartTransformerJobCommandOutput) => void
  ): void;
  startTransformerJob(
    args: StartTransformerJobCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: StartTransformerJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: B2biRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestConversionCommand}
   */
  testConversion(
    args: TestConversionCommandInput,
    options?: B2biRequestOptions
  ): Promise<TestConversionCommandOutput>;
  testConversion(
    args: TestConversionCommandInput,
    cb: (err: any, data?: TestConversionCommandOutput) => void
  ): void;
  testConversion(
    args: TestConversionCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: TestConversionCommandOutput) => void
  ): void;

  /**
   * @see {@link TestMappingCommand}
   */
  testMapping(
    args: TestMappingCommandInput,
    options?: B2biRequestOptions
  ): Promise<TestMappingCommandOutput>;
  testMapping(
    args: TestMappingCommandInput,
    cb: (err: any, data?: TestMappingCommandOutput) => void
  ): void;
  testMapping(
    args: TestMappingCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: TestMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link TestParsingCommand}
   */
  testParsing(
    args: TestParsingCommandInput,
    options?: B2biRequestOptions
  ): Promise<TestParsingCommandOutput>;
  testParsing(
    args: TestParsingCommandInput,
    cb: (err: any, data?: TestParsingCommandOutput) => void
  ): void;
  testParsing(
    args: TestParsingCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: TestParsingCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: B2biRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCapabilityCommand}
   */
  updateCapability(
    args: UpdateCapabilityCommandInput,
    options?: B2biRequestOptions
  ): Promise<UpdateCapabilityCommandOutput>;
  updateCapability(
    args: UpdateCapabilityCommandInput,
    cb: (err: any, data?: UpdateCapabilityCommandOutput) => void
  ): void;
  updateCapability(
    args: UpdateCapabilityCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: UpdateCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePartnershipCommand}
   */
  updatePartnership(
    args: UpdatePartnershipCommandInput,
    options?: B2biRequestOptions
  ): Promise<UpdatePartnershipCommandOutput>;
  updatePartnership(
    args: UpdatePartnershipCommandInput,
    cb: (err: any, data?: UpdatePartnershipCommandOutput) => void
  ): void;
  updatePartnership(
    args: UpdatePartnershipCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: UpdatePartnershipCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileCommand}
   */
  updateProfile(
    args: UpdateProfileCommandInput,
    options?: B2biRequestOptions
  ): Promise<UpdateProfileCommandOutput>;
  updateProfile(
    args: UpdateProfileCommandInput,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  updateProfile(
    args: UpdateProfileCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTransformerCommand}
   */
  updateTransformer(
    args: UpdateTransformerCommandInput,
    options?: B2biRequestOptions
  ): Promise<UpdateTransformerCommandOutput>;
  updateTransformer(
    args: UpdateTransformerCommandInput,
    cb: (err: any, data?: UpdateTransformerCommandOutput) => void
  ): void;
  updateTransformer(
    args: UpdateTransformerCommandInput,
    options: B2biRequestOptions,
    cb: (err: any, data?: UpdateTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCapabilitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCapabilitiesCommandOutput}.
   */
  paginateListCapabilities(
    args?: ListCapabilitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCapabilitiesCommandOutput>;

  /**
   * @see {@link ListPartnershipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPartnershipsCommandOutput}.
   */
  paginateListPartnerships(
    args?: ListPartnershipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPartnershipsCommandOutput>;

  /**
   * @see {@link ListProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProfilesCommandOutput}.
   */
  paginateListProfiles(
    args?: ListProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProfilesCommandOutput>;

  /**
   * @see {@link ListTransformersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTransformersCommandOutput}.
   */
  paginateListTransformers(
    args?: ListTransformersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTransformersCommandOutput>;

  /**
   * @see {@link GetTransformerJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilTransformerJobSucceeded(
    args: GetTransformerJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<B2bi>, "client">
  ): Promise<WaiterResult<GetTransformerJobCommandOutput>>;
}

/**
 * <p>This is the <i>Amazon Web Services B2B Data Interchange API Reference</i>. It provides descriptions, API request parameters, and the XML response for each of the B2BI API actions.</p> <p>B2BI enables automated exchange of EDI (electronic data interchange) based business-critical transactions at cloud scale, with elasticity and pay-as-you-go pricing. Businesses use EDI documents to exchange transactional data with trading partners, such as suppliers and end customers, using standardized formats such as X12.</p> <note> <p>Rather than actually running a command, you can use the <code>--generate-cli-skeleton</code> parameter with any API call to generate and display a parameter template. You can then use the generated template to customize and use as input on a later command. For details, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-skeleton.html#cli-usage-skeleton-generate">Generate and use a parameter skeleton file</a>.</p> </note>
 * @public
 */
export class B2bi extends B2biClient implements B2bi {}
createAggregatedClient(commands, B2bi, { paginators, waiters });
