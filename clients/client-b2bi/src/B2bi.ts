// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { B2biClient } from "./B2biClient";
import {
  CreateCapabilityCommand,
  CreateCapabilityCommandInput,
  CreateCapabilityCommandOutput,
} from "./commands/CreateCapabilityCommand";
import {
  CreatePartnershipCommand,
  CreatePartnershipCommandInput,
  CreatePartnershipCommandOutput,
} from "./commands/CreatePartnershipCommand";
import {
  CreateProfileCommand,
  CreateProfileCommandInput,
  CreateProfileCommandOutput,
} from "./commands/CreateProfileCommand";
import {
  CreateStarterMappingTemplateCommand,
  CreateStarterMappingTemplateCommandInput,
  CreateStarterMappingTemplateCommandOutput,
} from "./commands/CreateStarterMappingTemplateCommand";
import {
  CreateTransformerCommand,
  CreateTransformerCommandInput,
  CreateTransformerCommandOutput,
} from "./commands/CreateTransformerCommand";
import {
  DeleteCapabilityCommand,
  DeleteCapabilityCommandInput,
  DeleteCapabilityCommandOutput,
} from "./commands/DeleteCapabilityCommand";
import {
  DeletePartnershipCommand,
  DeletePartnershipCommandInput,
  DeletePartnershipCommandOutput,
} from "./commands/DeletePartnershipCommand";
import {
  DeleteProfileCommand,
  DeleteProfileCommandInput,
  DeleteProfileCommandOutput,
} from "./commands/DeleteProfileCommand";
import {
  DeleteTransformerCommand,
  DeleteTransformerCommandInput,
  DeleteTransformerCommandOutput,
} from "./commands/DeleteTransformerCommand";
import {
  GenerateMappingCommand,
  GenerateMappingCommandInput,
  GenerateMappingCommandOutput,
} from "./commands/GenerateMappingCommand";
import {
  GetCapabilityCommand,
  GetCapabilityCommandInput,
  GetCapabilityCommandOutput,
} from "./commands/GetCapabilityCommand";
import {
  GetPartnershipCommand,
  GetPartnershipCommandInput,
  GetPartnershipCommandOutput,
} from "./commands/GetPartnershipCommand";
import { GetProfileCommand, GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import {
  GetTransformerCommand,
  GetTransformerCommandInput,
  GetTransformerCommandOutput,
} from "./commands/GetTransformerCommand";
import {
  GetTransformerJobCommand,
  GetTransformerJobCommandInput,
  GetTransformerJobCommandOutput,
} from "./commands/GetTransformerJobCommand";
import {
  ListCapabilitiesCommand,
  ListCapabilitiesCommandInput,
  ListCapabilitiesCommandOutput,
} from "./commands/ListCapabilitiesCommand";
import {
  ListPartnershipsCommand,
  ListPartnershipsCommandInput,
  ListPartnershipsCommandOutput,
} from "./commands/ListPartnershipsCommand";
import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "./commands/ListProfilesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTransformersCommand,
  ListTransformersCommandInput,
  ListTransformersCommandOutput,
} from "./commands/ListTransformersCommand";
import {
  StartTransformerJobCommand,
  StartTransformerJobCommandInput,
  StartTransformerJobCommandOutput,
} from "./commands/StartTransformerJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestConversionCommand,
  TestConversionCommandInput,
  TestConversionCommandOutput,
} from "./commands/TestConversionCommand";
import { TestMappingCommand, TestMappingCommandInput, TestMappingCommandOutput } from "./commands/TestMappingCommand";
import { TestParsingCommand, TestParsingCommandInput, TestParsingCommandOutput } from "./commands/TestParsingCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCapabilityCommand,
  UpdateCapabilityCommandInput,
  UpdateCapabilityCommandOutput,
} from "./commands/UpdateCapabilityCommand";
import {
  UpdatePartnershipCommand,
  UpdatePartnershipCommandInput,
  UpdatePartnershipCommandOutput,
} from "./commands/UpdatePartnershipCommand";
import {
  UpdateProfileCommand,
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
} from "./commands/UpdateProfileCommand";
import {
  UpdateTransformerCommand,
  UpdateTransformerCommandInput,
  UpdateTransformerCommandOutput,
} from "./commands/UpdateTransformerCommand";

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

export interface B2bi {
  /**
   * @see {@link CreateCapabilityCommand}
   */
  createCapability(
    args: CreateCapabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCapabilityCommandOutput>;
  createCapability(
    args: CreateCapabilityCommandInput,
    cb: (err: any, data?: CreateCapabilityCommandOutput) => void
  ): void;
  createCapability(
    args: CreateCapabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartnershipCommand}
   */
  createPartnership(
    args: CreatePartnershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePartnershipCommandOutput>;
  createPartnership(
    args: CreatePartnershipCommandInput,
    cb: (err: any, data?: CreatePartnershipCommandOutput) => void
  ): void;
  createPartnership(
    args: CreatePartnershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartnershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(
    args: CreateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfileCommandOutput>;
  createProfile(
    args: CreateProfileCommandInput,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStarterMappingTemplateCommand}
   */
  createStarterMappingTemplate(
    args: CreateStarterMappingTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStarterMappingTemplateCommandOutput>;
  createStarterMappingTemplate(
    args: CreateStarterMappingTemplateCommandInput,
    cb: (err: any, data?: CreateStarterMappingTemplateCommandOutput) => void
  ): void;
  createStarterMappingTemplate(
    args: CreateStarterMappingTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStarterMappingTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransformerCommand}
   */
  createTransformer(
    args: CreateTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransformerCommandOutput>;
  createTransformer(
    args: CreateTransformerCommandInput,
    cb: (err: any, data?: CreateTransformerCommandOutput) => void
  ): void;
  createTransformer(
    args: CreateTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCapabilityCommand}
   */
  deleteCapability(
    args: DeleteCapabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCapabilityCommandOutput>;
  deleteCapability(
    args: DeleteCapabilityCommandInput,
    cb: (err: any, data?: DeleteCapabilityCommandOutput) => void
  ): void;
  deleteCapability(
    args: DeleteCapabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePartnershipCommand}
   */
  deletePartnership(
    args: DeletePartnershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePartnershipCommandOutput>;
  deletePartnership(
    args: DeletePartnershipCommandInput,
    cb: (err: any, data?: DeletePartnershipCommandOutput) => void
  ): void;
  deletePartnership(
    args: DeletePartnershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartnershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(
    args: DeleteProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileCommandOutput>;
  deleteProfile(
    args: DeleteProfileCommandInput,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransformerCommand}
   */
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransformerCommandOutput>;
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    cb: (err: any, data?: DeleteTransformerCommandOutput) => void
  ): void;
  deleteTransformer(
    args: DeleteTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateMappingCommand}
   */
  generateMapping(
    args: GenerateMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateMappingCommandOutput>;
  generateMapping(
    args: GenerateMappingCommandInput,
    cb: (err: any, data?: GenerateMappingCommandOutput) => void
  ): void;
  generateMapping(
    args: GenerateMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCapabilityCommand}
   */
  getCapability(
    args: GetCapabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCapabilityCommandOutput>;
  getCapability(
    args: GetCapabilityCommandInput,
    cb: (err: any, data?: GetCapabilityCommandOutput) => void
  ): void;
  getCapability(
    args: GetCapabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartnershipCommand}
   */
  getPartnership(
    args: GetPartnershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPartnershipCommandOutput>;
  getPartnership(
    args: GetPartnershipCommandInput,
    cb: (err: any, data?: GetPartnershipCommandOutput) => void
  ): void;
  getPartnership(
    args: GetPartnershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartnershipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileCommand}
   */
  getProfile(
    args: GetProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileCommandOutput>;
  getProfile(
    args: GetProfileCommandInput,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;
  getProfile(
    args: GetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransformerCommand}
   */
  getTransformer(
    args: GetTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransformerCommandOutput>;
  getTransformer(
    args: GetTransformerCommandInput,
    cb: (err: any, data?: GetTransformerCommandOutput) => void
  ): void;
  getTransformer(
    args: GetTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransformerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransformerJobCommand}
   */
  getTransformerJob(
    args: GetTransformerJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransformerJobCommandOutput>;
  getTransformerJob(
    args: GetTransformerJobCommandInput,
    cb: (err: any, data?: GetTransformerJobCommandOutput) => void
  ): void;
  getTransformerJob(
    args: GetTransformerJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransformerJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCapabilitiesCommand}
   */
  listCapabilities(): Promise<ListCapabilitiesCommandOutput>;
  listCapabilities(
    args: ListCapabilitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCapabilitiesCommandOutput>;
  listCapabilities(
    args: ListCapabilitiesCommandInput,
    cb: (err: any, data?: ListCapabilitiesCommandOutput) => void
  ): void;
  listCapabilities(
    args: ListCapabilitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCapabilitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartnershipsCommand}
   */
  listPartnerships(): Promise<ListPartnershipsCommandOutput>;
  listPartnerships(
    args: ListPartnershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPartnershipsCommandOutput>;
  listPartnerships(
    args: ListPartnershipsCommandInput,
    cb: (err: any, data?: ListPartnershipsCommandOutput) => void
  ): void;
  listPartnerships(
    args: ListPartnershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartnershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfilesCommand}
   */
  listProfiles(): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;
  listProfiles(
    args: ListProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
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
   * @see {@link ListTransformersCommand}
   */
  listTransformers(): Promise<ListTransformersCommandOutput>;
  listTransformers(
    args: ListTransformersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTransformersCommandOutput>;
  listTransformers(
    args: ListTransformersCommandInput,
    cb: (err: any, data?: ListTransformersCommandOutput) => void
  ): void;
  listTransformers(
    args: ListTransformersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTransformersCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTransformerJobCommand}
   */
  startTransformerJob(
    args: StartTransformerJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTransformerJobCommandOutput>;
  startTransformerJob(
    args: StartTransformerJobCommandInput,
    cb: (err: any, data?: StartTransformerJobCommandOutput) => void
  ): void;
  startTransformerJob(
    args: StartTransformerJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTransformerJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestConversionCommand}
   */
  testConversion(
    args: TestConversionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestConversionCommandOutput>;
  testConversion(
    args: TestConversionCommandInput,
    cb: (err: any, data?: TestConversionCommandOutput) => void
  ): void;
  testConversion(
    args: TestConversionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestConversionCommandOutput) => void
  ): void;

  /**
   * @see {@link TestMappingCommand}
   */
  testMapping(
    args: TestMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestMappingCommandOutput>;
  testMapping(
    args: TestMappingCommandInput,
    cb: (err: any, data?: TestMappingCommandOutput) => void
  ): void;
  testMapping(
    args: TestMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link TestParsingCommand}
   */
  testParsing(
    args: TestParsingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestParsingCommandOutput>;
  testParsing(
    args: TestParsingCommandInput,
    cb: (err: any, data?: TestParsingCommandOutput) => void
  ): void;
  testParsing(
    args: TestParsingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestParsingCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCapabilityCommand}
   */
  updateCapability(
    args: UpdateCapabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCapabilityCommandOutput>;
  updateCapability(
    args: UpdateCapabilityCommandInput,
    cb: (err: any, data?: UpdateCapabilityCommandOutput) => void
  ): void;
  updateCapability(
    args: UpdateCapabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCapabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePartnershipCommand}
   */
  updatePartnership(
    args: UpdatePartnershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePartnershipCommandOutput>;
  updatePartnership(
    args: UpdatePartnershipCommandInput,
    cb: (err: any, data?: UpdatePartnershipCommandOutput) => void
  ): void;
  updatePartnership(
    args: UpdatePartnershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePartnershipCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileCommand}
   */
  updateProfile(
    args: UpdateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfileCommandOutput>;
  updateProfile(
    args: UpdateProfileCommandInput,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  updateProfile(
    args: UpdateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTransformerCommand}
   */
  updateTransformer(
    args: UpdateTransformerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTransformerCommandOutput>;
  updateTransformer(
    args: UpdateTransformerCommandInput,
    cb: (err: any, data?: UpdateTransformerCommandOutput) => void
  ): void;
  updateTransformer(
    args: UpdateTransformerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTransformerCommandOutput) => void
  ): void;
}

/**
 * <p>This is the <i>Amazon Web Services B2B Data Interchange API Reference</i>. It provides descriptions, API request parameters, and the XML response for each of the B2BI API actions.</p> <p>B2BI enables automated exchange of EDI (electronic data interchange) based business-critical transactions at cloud scale, with elasticity and pay-as-you-go pricing. Businesses use EDI documents to exchange transactional data with trading partners, such as suppliers and end customers, using standardized formats such as X12.</p> <note> <p>Rather than actually running a command, you can use the <code>--generate-cli-skeleton</code> parameter with any API call to generate and display a parameter template. You can then use the generated template to customize and use as input on a later command. For details, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-skeleton.html#cli-usage-skeleton-generate">Generate and use a parameter skeleton file</a>.</p> </note>
 * @public
 */
export class B2bi extends B2biClient implements B2bi {}
createAggregatedClient(commands, B2bi);
