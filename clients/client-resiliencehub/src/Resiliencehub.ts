// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AddDraftAppVersionResourceMappingsCommand,
  AddDraftAppVersionResourceMappingsCommandInput,
  AddDraftAppVersionResourceMappingsCommandOutput,
} from "./commands/AddDraftAppVersionResourceMappingsCommand";
import { CreateAppCommand, CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateAppVersionAppComponentCommand,
  CreateAppVersionAppComponentCommandInput,
  CreateAppVersionAppComponentCommandOutput,
} from "./commands/CreateAppVersionAppComponentCommand";
import {
  CreateAppVersionResourceCommand,
  CreateAppVersionResourceCommandInput,
  CreateAppVersionResourceCommandOutput,
} from "./commands/CreateAppVersionResourceCommand";
import {
  CreateRecommendationTemplateCommand,
  CreateRecommendationTemplateCommandInput,
  CreateRecommendationTemplateCommandOutput,
} from "./commands/CreateRecommendationTemplateCommand";
import {
  CreateResiliencyPolicyCommand,
  CreateResiliencyPolicyCommandInput,
  CreateResiliencyPolicyCommandOutput,
} from "./commands/CreateResiliencyPolicyCommand";
import {
  DeleteAppAssessmentCommand,
  DeleteAppAssessmentCommandInput,
  DeleteAppAssessmentCommandOutput,
} from "./commands/DeleteAppAssessmentCommand";
import { DeleteAppCommand, DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteAppInputSourceCommand,
  DeleteAppInputSourceCommandInput,
  DeleteAppInputSourceCommandOutput,
} from "./commands/DeleteAppInputSourceCommand";
import {
  DeleteAppVersionAppComponentCommand,
  DeleteAppVersionAppComponentCommandInput,
  DeleteAppVersionAppComponentCommandOutput,
} from "./commands/DeleteAppVersionAppComponentCommand";
import {
  DeleteAppVersionResourceCommand,
  DeleteAppVersionResourceCommandInput,
  DeleteAppVersionResourceCommandOutput,
} from "./commands/DeleteAppVersionResourceCommand";
import {
  DeleteRecommendationTemplateCommand,
  DeleteRecommendationTemplateCommandInput,
  DeleteRecommendationTemplateCommandOutput,
} from "./commands/DeleteRecommendationTemplateCommand";
import {
  DeleteResiliencyPolicyCommand,
  DeleteResiliencyPolicyCommandInput,
  DeleteResiliencyPolicyCommandOutput,
} from "./commands/DeleteResiliencyPolicyCommand";
import {
  DescribeAppAssessmentCommand,
  DescribeAppAssessmentCommandInput,
  DescribeAppAssessmentCommandOutput,
} from "./commands/DescribeAppAssessmentCommand";
import { DescribeAppCommand, DescribeAppCommandInput, DescribeAppCommandOutput } from "./commands/DescribeAppCommand";
import {
  DescribeAppVersionAppComponentCommand,
  DescribeAppVersionAppComponentCommandInput,
  DescribeAppVersionAppComponentCommandOutput,
} from "./commands/DescribeAppVersionAppComponentCommand";
import {
  DescribeAppVersionCommand,
  DescribeAppVersionCommandInput,
  DescribeAppVersionCommandOutput,
} from "./commands/DescribeAppVersionCommand";
import {
  DescribeAppVersionResourceCommand,
  DescribeAppVersionResourceCommandInput,
  DescribeAppVersionResourceCommandOutput,
} from "./commands/DescribeAppVersionResourceCommand";
import {
  DescribeAppVersionResourcesResolutionStatusCommand,
  DescribeAppVersionResourcesResolutionStatusCommandInput,
  DescribeAppVersionResourcesResolutionStatusCommandOutput,
} from "./commands/DescribeAppVersionResourcesResolutionStatusCommand";
import {
  DescribeAppVersionTemplateCommand,
  DescribeAppVersionTemplateCommandInput,
  DescribeAppVersionTemplateCommandOutput,
} from "./commands/DescribeAppVersionTemplateCommand";
import {
  DescribeDraftAppVersionResourcesImportStatusCommand,
  DescribeDraftAppVersionResourcesImportStatusCommandInput,
  DescribeDraftAppVersionResourcesImportStatusCommandOutput,
} from "./commands/DescribeDraftAppVersionResourcesImportStatusCommand";
import {
  DescribeResiliencyPolicyCommand,
  DescribeResiliencyPolicyCommandInput,
  DescribeResiliencyPolicyCommandOutput,
} from "./commands/DescribeResiliencyPolicyCommand";
import {
  ImportResourcesToDraftAppVersionCommand,
  ImportResourcesToDraftAppVersionCommandInput,
  ImportResourcesToDraftAppVersionCommandOutput,
} from "./commands/ImportResourcesToDraftAppVersionCommand";
import {
  ListAlarmRecommendationsCommand,
  ListAlarmRecommendationsCommandInput,
  ListAlarmRecommendationsCommandOutput,
} from "./commands/ListAlarmRecommendationsCommand";
import {
  ListAppAssessmentsCommand,
  ListAppAssessmentsCommandInput,
  ListAppAssessmentsCommandOutput,
} from "./commands/ListAppAssessmentsCommand";
import {
  ListAppComponentCompliancesCommand,
  ListAppComponentCompliancesCommandInput,
  ListAppComponentCompliancesCommandOutput,
} from "./commands/ListAppComponentCompliancesCommand";
import {
  ListAppComponentRecommendationsCommand,
  ListAppComponentRecommendationsCommandInput,
  ListAppComponentRecommendationsCommandOutput,
} from "./commands/ListAppComponentRecommendationsCommand";
import {
  ListAppInputSourcesCommand,
  ListAppInputSourcesCommandInput,
  ListAppInputSourcesCommandOutput,
} from "./commands/ListAppInputSourcesCommand";
import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import {
  ListAppVersionAppComponentsCommand,
  ListAppVersionAppComponentsCommandInput,
  ListAppVersionAppComponentsCommandOutput,
} from "./commands/ListAppVersionAppComponentsCommand";
import {
  ListAppVersionResourceMappingsCommand,
  ListAppVersionResourceMappingsCommandInput,
  ListAppVersionResourceMappingsCommandOutput,
} from "./commands/ListAppVersionResourceMappingsCommand";
import {
  ListAppVersionResourcesCommand,
  ListAppVersionResourcesCommandInput,
  ListAppVersionResourcesCommandOutput,
} from "./commands/ListAppVersionResourcesCommand";
import {
  ListAppVersionsCommand,
  ListAppVersionsCommandInput,
  ListAppVersionsCommandOutput,
} from "./commands/ListAppVersionsCommand";
import {
  ListRecommendationTemplatesCommand,
  ListRecommendationTemplatesCommandInput,
  ListRecommendationTemplatesCommandOutput,
} from "./commands/ListRecommendationTemplatesCommand";
import {
  ListResiliencyPoliciesCommand,
  ListResiliencyPoliciesCommandInput,
  ListResiliencyPoliciesCommandOutput,
} from "./commands/ListResiliencyPoliciesCommand";
import {
  ListSopRecommendationsCommand,
  ListSopRecommendationsCommandInput,
  ListSopRecommendationsCommandOutput,
} from "./commands/ListSopRecommendationsCommand";
import {
  ListSuggestedResiliencyPoliciesCommand,
  ListSuggestedResiliencyPoliciesCommandInput,
  ListSuggestedResiliencyPoliciesCommandOutput,
} from "./commands/ListSuggestedResiliencyPoliciesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTestRecommendationsCommand,
  ListTestRecommendationsCommandInput,
  ListTestRecommendationsCommandOutput,
} from "./commands/ListTestRecommendationsCommand";
import {
  ListUnsupportedAppVersionResourcesCommand,
  ListUnsupportedAppVersionResourcesCommandInput,
  ListUnsupportedAppVersionResourcesCommandOutput,
} from "./commands/ListUnsupportedAppVersionResourcesCommand";
import {
  PublishAppVersionCommand,
  PublishAppVersionCommandInput,
  PublishAppVersionCommandOutput,
} from "./commands/PublishAppVersionCommand";
import {
  PutDraftAppVersionTemplateCommand,
  PutDraftAppVersionTemplateCommandInput,
  PutDraftAppVersionTemplateCommandOutput,
} from "./commands/PutDraftAppVersionTemplateCommand";
import {
  RemoveDraftAppVersionResourceMappingsCommand,
  RemoveDraftAppVersionResourceMappingsCommandInput,
  RemoveDraftAppVersionResourceMappingsCommandOutput,
} from "./commands/RemoveDraftAppVersionResourceMappingsCommand";
import {
  ResolveAppVersionResourcesCommand,
  ResolveAppVersionResourcesCommandInput,
  ResolveAppVersionResourcesCommandOutput,
} from "./commands/ResolveAppVersionResourcesCommand";
import {
  StartAppAssessmentCommand,
  StartAppAssessmentCommandInput,
  StartAppAssessmentCommandOutput,
} from "./commands/StartAppAssessmentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAppCommand, UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import {
  UpdateAppVersionAppComponentCommand,
  UpdateAppVersionAppComponentCommandInput,
  UpdateAppVersionAppComponentCommandOutput,
} from "./commands/UpdateAppVersionAppComponentCommand";
import {
  UpdateAppVersionCommand,
  UpdateAppVersionCommandInput,
  UpdateAppVersionCommandOutput,
} from "./commands/UpdateAppVersionCommand";
import {
  UpdateAppVersionResourceCommand,
  UpdateAppVersionResourceCommandInput,
  UpdateAppVersionResourceCommandOutput,
} from "./commands/UpdateAppVersionResourceCommand";
import {
  UpdateResiliencyPolicyCommand,
  UpdateResiliencyPolicyCommandInput,
  UpdateResiliencyPolicyCommandOutput,
} from "./commands/UpdateResiliencyPolicyCommand";
import { ResiliencehubClient } from "./ResiliencehubClient";

/**
 * <p>AWS Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from
 *       disruptions. Resilience Hub offers continuous resiliency assessment and validation that integrates
 *       into your software development lifecycle. This enables you to uncover resiliency weaknesses,
 *       ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your
 *       applications are met, and resolve issues before they are released into production. </p>
 */
export class Resiliencehub extends ResiliencehubClient {
  /**
   * <p>Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.</p>
   */
  public addDraftAppVersionResourceMappings(
    args: AddDraftAppVersionResourceMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddDraftAppVersionResourceMappingsCommandOutput>;
  public addDraftAppVersionResourceMappings(
    args: AddDraftAppVersionResourceMappingsCommandInput,
    cb: (err: any, data?: AddDraftAppVersionResourceMappingsCommandOutput) => void
  ): void;
  public addDraftAppVersionResourceMappings(
    args: AddDraftAppVersionResourceMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddDraftAppVersionResourceMappingsCommandOutput) => void
  ): void;
  public addDraftAppVersionResourceMappings(
    args: AddDraftAppVersionResourceMappingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddDraftAppVersionResourceMappingsCommandOutput) => void),
    cb?: (err: any, data?: AddDraftAppVersionResourceMappingsCommandOutput) => void
  ): Promise<AddDraftAppVersionResourceMappingsCommandOutput> | void {
    const command = new AddDraftAppVersionResourceMappingsCommand(args);
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
   * <p>Creates an AWS Resilience Hub application. An AWS Resilience Hub application is a collection of Amazon Web Services
   *       resources structured to prevent and recover Amazon Web Services application disruptions. To describe a
   *       AWS Resilience Hub application, you provide an application name, resources from one or more–up to
   *       five–CloudFormation stacks, and an appropriate resiliency policy.</p>
   *          <p>After you create an AWS Resilience Hub application, you publish it so that you can run a resiliency
   *       assessment on it. You can then use recommendations from the assessment to improve resiliency
   *       by running another assessment, comparing results, and then iterating the process until you
   *       achieve your goals for recovery time objective (RTO) and recovery point objective
   *       (RPO).</p>
   */
  public createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
  public createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
  public createApp(
    args: CreateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;
  public createApp(
    args: CreateAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppCommandOutput) => void),
    cb?: (err: any, data?: CreateAppCommandOutput) => void
  ): Promise<CreateAppCommandOutput> | void {
    const command = new CreateAppCommand(args);
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
   * <p>Creates a new Application Component in the AWS Resilience Hub application.</p>
   *          <note>
   *             <p>This API updates the AWS Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p>
   *          </note>
   */
  public createAppVersionAppComponent(
    args: CreateAppVersionAppComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppVersionAppComponentCommandOutput>;
  public createAppVersionAppComponent(
    args: CreateAppVersionAppComponentCommandInput,
    cb: (err: any, data?: CreateAppVersionAppComponentCommandOutput) => void
  ): void;
  public createAppVersionAppComponent(
    args: CreateAppVersionAppComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppVersionAppComponentCommandOutput) => void
  ): void;
  public createAppVersionAppComponent(
    args: CreateAppVersionAppComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppVersionAppComponentCommandOutput) => void),
    cb?: (err: any, data?: CreateAppVersionAppComponentCommandOutput) => void
  ): Promise<CreateAppVersionAppComponentCommandOutput> | void {
    const command = new CreateAppVersionAppComponentCommand(args);
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
   * <p>Adds a resource to the AWS Resilience Hub applicationand assigns it to the specified
   *       Application Components. If you specify a new Application Component, AWS Resilience Hub will automatically
   *       create the Application Component.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>This action has no effect outside AWS Resilience Hub.</p>
   *                </li>
   *                <li>
   *                   <p>This API updates the AWS Resilience Hub application draft version. To use this resource
   *             for running resiliency assessments, you must publish the AWS Resilience Hub application using
   *             the <code>PublishAppVersion</code> API.</p>
   *                </li>
   *                <li>
   *                   <p>To update application version with new <code>physicalResourceID</code>, you must
   *             call <code>ResolveAppVersionResources</code> API.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public createAppVersionResource(
    args: CreateAppVersionResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppVersionResourceCommandOutput>;
  public createAppVersionResource(
    args: CreateAppVersionResourceCommandInput,
    cb: (err: any, data?: CreateAppVersionResourceCommandOutput) => void
  ): void;
  public createAppVersionResource(
    args: CreateAppVersionResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppVersionResourceCommandOutput) => void
  ): void;
  public createAppVersionResource(
    args: CreateAppVersionResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppVersionResourceCommandOutput) => void),
    cb?: (err: any, data?: CreateAppVersionResourceCommandOutput) => void
  ): Promise<CreateAppVersionResourceCommandOutput> | void {
    const command = new CreateAppVersionResourceCommand(args);
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
   * <p>Creates a new recommendation template for the AWS Resilience Hub application.</p>
   */
  public createRecommendationTemplate(
    args: CreateRecommendationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecommendationTemplateCommandOutput>;
  public createRecommendationTemplate(
    args: CreateRecommendationTemplateCommandInput,
    cb: (err: any, data?: CreateRecommendationTemplateCommandOutput) => void
  ): void;
  public createRecommendationTemplate(
    args: CreateRecommendationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecommendationTemplateCommandOutput) => void
  ): void;
  public createRecommendationTemplate(
    args: CreateRecommendationTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRecommendationTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateRecommendationTemplateCommandOutput) => void
  ): Promise<CreateRecommendationTemplateCommandOutput> | void {
    const command = new CreateRecommendationTemplateCommand(args);
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
   * <p>Creates a resiliency policy for an application.</p>
   */
  public createResiliencyPolicy(
    args: CreateResiliencyPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResiliencyPolicyCommandOutput>;
  public createResiliencyPolicy(
    args: CreateResiliencyPolicyCommandInput,
    cb: (err: any, data?: CreateResiliencyPolicyCommandOutput) => void
  ): void;
  public createResiliencyPolicy(
    args: CreateResiliencyPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResiliencyPolicyCommandOutput) => void
  ): void;
  public createResiliencyPolicy(
    args: CreateResiliencyPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResiliencyPolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateResiliencyPolicyCommandOutput) => void
  ): Promise<CreateResiliencyPolicyCommandOutput> | void {
    const command = new CreateResiliencyPolicyCommand(args);
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
   * <p>Deletes an AWS Resilience Hub application. This is a destructive action that can't be
   *       undone.</p>
   */
  public deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
  public deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppCommandOutput) => void
  ): Promise<DeleteAppCommandOutput> | void {
    const command = new DeleteAppCommand(args);
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
   * <p>Deletes an AWS Resilience Hub application assessment. This is a destructive action that can't
   *       be undone.</p>
   */
  public deleteAppAssessment(
    args: DeleteAppAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppAssessmentCommandOutput>;
  public deleteAppAssessment(
    args: DeleteAppAssessmentCommandInput,
    cb: (err: any, data?: DeleteAppAssessmentCommandOutput) => void
  ): void;
  public deleteAppAssessment(
    args: DeleteAppAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppAssessmentCommandOutput) => void
  ): void;
  public deleteAppAssessment(
    args: DeleteAppAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppAssessmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppAssessmentCommandOutput) => void
  ): Promise<DeleteAppAssessmentCommandOutput> | void {
    const command = new DeleteAppAssessmentCommand(args);
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
   * <p>Deletes the input source and all of its imported resources from the AWS Resilience Hub application.</p>
   */
  public deleteAppInputSource(
    args: DeleteAppInputSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppInputSourceCommandOutput>;
  public deleteAppInputSource(
    args: DeleteAppInputSourceCommandInput,
    cb: (err: any, data?: DeleteAppInputSourceCommandOutput) => void
  ): void;
  public deleteAppInputSource(
    args: DeleteAppInputSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppInputSourceCommandOutput) => void
  ): void;
  public deleteAppInputSource(
    args: DeleteAppInputSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppInputSourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppInputSourceCommandOutput) => void
  ): Promise<DeleteAppInputSourceCommandOutput> | void {
    const command = new DeleteAppInputSourceCommand(args);
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
   * <p>Deletes an Application Component from the AWS Resilience Hub application.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>This API updates the AWS Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p>
   *                </li>
   *                <li>
   *                   <p>You will not be able to delete an Application Component if it has resources associated with it.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public deleteAppVersionAppComponent(
    args: DeleteAppVersionAppComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppVersionAppComponentCommandOutput>;
  public deleteAppVersionAppComponent(
    args: DeleteAppVersionAppComponentCommandInput,
    cb: (err: any, data?: DeleteAppVersionAppComponentCommandOutput) => void
  ): void;
  public deleteAppVersionAppComponent(
    args: DeleteAppVersionAppComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppVersionAppComponentCommandOutput) => void
  ): void;
  public deleteAppVersionAppComponent(
    args: DeleteAppVersionAppComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppVersionAppComponentCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppVersionAppComponentCommandOutput) => void
  ): Promise<DeleteAppVersionAppComponentCommandOutput> | void {
    const command = new DeleteAppVersionAppComponentCommand(args);
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
   * <p>Deletes a resource from the AWS Resilience Hub application.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p>
   *                </li>
   *                <li>
   *                   <p>This action has no effect outside AWS Resilience Hub.</p>
   *                </li>
   *                <li>
   *                   <p>This API updates the AWS Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public deleteAppVersionResource(
    args: DeleteAppVersionResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppVersionResourceCommandOutput>;
  public deleteAppVersionResource(
    args: DeleteAppVersionResourceCommandInput,
    cb: (err: any, data?: DeleteAppVersionResourceCommandOutput) => void
  ): void;
  public deleteAppVersionResource(
    args: DeleteAppVersionResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppVersionResourceCommandOutput) => void
  ): void;
  public deleteAppVersionResource(
    args: DeleteAppVersionResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppVersionResourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppVersionResourceCommandOutput) => void
  ): Promise<DeleteAppVersionResourceCommandOutput> | void {
    const command = new DeleteAppVersionResourceCommand(args);
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
   * <p>Deletes a recommendation template. This is a destructive action that can't be
   *       undone.</p>
   */
  public deleteRecommendationTemplate(
    args: DeleteRecommendationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecommendationTemplateCommandOutput>;
  public deleteRecommendationTemplate(
    args: DeleteRecommendationTemplateCommandInput,
    cb: (err: any, data?: DeleteRecommendationTemplateCommandOutput) => void
  ): void;
  public deleteRecommendationTemplate(
    args: DeleteRecommendationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecommendationTemplateCommandOutput) => void
  ): void;
  public deleteRecommendationTemplate(
    args: DeleteRecommendationTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRecommendationTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteRecommendationTemplateCommandOutput) => void
  ): Promise<DeleteRecommendationTemplateCommandOutput> | void {
    const command = new DeleteRecommendationTemplateCommand(args);
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
   * <p>Deletes a resiliency policy. This is a destructive action that can't be undone.</p>
   */
  public deleteResiliencyPolicy(
    args: DeleteResiliencyPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResiliencyPolicyCommandOutput>;
  public deleteResiliencyPolicy(
    args: DeleteResiliencyPolicyCommandInput,
    cb: (err: any, data?: DeleteResiliencyPolicyCommandOutput) => void
  ): void;
  public deleteResiliencyPolicy(
    args: DeleteResiliencyPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResiliencyPolicyCommandOutput) => void
  ): void;
  public deleteResiliencyPolicy(
    args: DeleteResiliencyPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResiliencyPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResiliencyPolicyCommandOutput) => void
  ): Promise<DeleteResiliencyPolicyCommandOutput> | void {
    const command = new DeleteResiliencyPolicyCommand(args);
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
   * <p>Describes an AWS Resilience Hub application.</p>
   */
  public describeApp(args: DescribeAppCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAppCommandOutput>;
  public describeApp(args: DescribeAppCommandInput, cb: (err: any, data?: DescribeAppCommandOutput) => void): void;
  public describeApp(
    args: DescribeAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppCommandOutput) => void
  ): void;
  public describeApp(
    args: DescribeAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppCommandOutput) => void
  ): Promise<DescribeAppCommandOutput> | void {
    const command = new DescribeAppCommand(args);
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
   * <p>Describes an assessment for an AWS Resilience Hub application.</p>
   */
  public describeAppAssessment(
    args: DescribeAppAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppAssessmentCommandOutput>;
  public describeAppAssessment(
    args: DescribeAppAssessmentCommandInput,
    cb: (err: any, data?: DescribeAppAssessmentCommandOutput) => void
  ): void;
  public describeAppAssessment(
    args: DescribeAppAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppAssessmentCommandOutput) => void
  ): void;
  public describeAppAssessment(
    args: DescribeAppAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppAssessmentCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppAssessmentCommandOutput) => void
  ): Promise<DescribeAppAssessmentCommandOutput> | void {
    const command = new DescribeAppAssessmentCommand(args);
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
   * <p>Describes the AWS Resilience Hub application version.</p>
   */
  public describeAppVersion(
    args: DescribeAppVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppVersionCommandOutput>;
  public describeAppVersion(
    args: DescribeAppVersionCommandInput,
    cb: (err: any, data?: DescribeAppVersionCommandOutput) => void
  ): void;
  public describeAppVersion(
    args: DescribeAppVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppVersionCommandOutput) => void
  ): void;
  public describeAppVersion(
    args: DescribeAppVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppVersionCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppVersionCommandOutput) => void
  ): Promise<DescribeAppVersionCommandOutput> | void {
    const command = new DescribeAppVersionCommand(args);
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
   * <p>Describes an Application Component in the AWS Resilience Hub application.</p>
   */
  public describeAppVersionAppComponent(
    args: DescribeAppVersionAppComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppVersionAppComponentCommandOutput>;
  public describeAppVersionAppComponent(
    args: DescribeAppVersionAppComponentCommandInput,
    cb: (err: any, data?: DescribeAppVersionAppComponentCommandOutput) => void
  ): void;
  public describeAppVersionAppComponent(
    args: DescribeAppVersionAppComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppVersionAppComponentCommandOutput) => void
  ): void;
  public describeAppVersionAppComponent(
    args: DescribeAppVersionAppComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppVersionAppComponentCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppVersionAppComponentCommandOutput) => void
  ): Promise<DescribeAppVersionAppComponentCommandOutput> | void {
    const command = new DescribeAppVersionAppComponentCommand(args);
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
   * <p>Describes a resource of the AWS Resilience Hub application.</p>
   *          <note>
   *             <p>This API accepts only one of the following parameters to descibe the resource:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>resourceName</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>logicalResourceId</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also
   *             provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public describeAppVersionResource(
    args: DescribeAppVersionResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppVersionResourceCommandOutput>;
  public describeAppVersionResource(
    args: DescribeAppVersionResourceCommandInput,
    cb: (err: any, data?: DescribeAppVersionResourceCommandOutput) => void
  ): void;
  public describeAppVersionResource(
    args: DescribeAppVersionResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppVersionResourceCommandOutput) => void
  ): void;
  public describeAppVersionResource(
    args: DescribeAppVersionResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppVersionResourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppVersionResourceCommandOutput) => void
  ): Promise<DescribeAppVersionResourceCommandOutput> | void {
    const command = new DescribeAppVersionResourceCommand(args);
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
   * <p>Returns the resolution status for the specified resolution identifier for an application
   *       version. If <code>resolutionId</code> is not specified, the current resolution status is
   *       returned.</p>
   */
  public describeAppVersionResourcesResolutionStatus(
    args: DescribeAppVersionResourcesResolutionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppVersionResourcesResolutionStatusCommandOutput>;
  public describeAppVersionResourcesResolutionStatus(
    args: DescribeAppVersionResourcesResolutionStatusCommandInput,
    cb: (err: any, data?: DescribeAppVersionResourcesResolutionStatusCommandOutput) => void
  ): void;
  public describeAppVersionResourcesResolutionStatus(
    args: DescribeAppVersionResourcesResolutionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppVersionResourcesResolutionStatusCommandOutput) => void
  ): void;
  public describeAppVersionResourcesResolutionStatus(
    args: DescribeAppVersionResourcesResolutionStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAppVersionResourcesResolutionStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppVersionResourcesResolutionStatusCommandOutput) => void
  ): Promise<DescribeAppVersionResourcesResolutionStatusCommandOutput> | void {
    const command = new DescribeAppVersionResourcesResolutionStatusCommand(args);
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
   * <p>Describes details about an AWS Resilience Hub application.</p>
   */
  public describeAppVersionTemplate(
    args: DescribeAppVersionTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppVersionTemplateCommandOutput>;
  public describeAppVersionTemplate(
    args: DescribeAppVersionTemplateCommandInput,
    cb: (err: any, data?: DescribeAppVersionTemplateCommandOutput) => void
  ): void;
  public describeAppVersionTemplate(
    args: DescribeAppVersionTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppVersionTemplateCommandOutput) => void
  ): void;
  public describeAppVersionTemplate(
    args: DescribeAppVersionTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppVersionTemplateCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppVersionTemplateCommandOutput) => void
  ): Promise<DescribeAppVersionTemplateCommandOutput> | void {
    const command = new DescribeAppVersionTemplateCommand(args);
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
   * <p>Describes the status of importing resources to an application version.</p>
   *          <note>
   *             <p>If you get a 404 error with
   *           <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call
   *           <code>importResourcesToDraftAppVersion</code>  after creating the application and before
   *         calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the
   *         status.</p>
   *          </note>
   */
  public describeDraftAppVersionResourcesImportStatus(
    args: DescribeDraftAppVersionResourcesImportStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDraftAppVersionResourcesImportStatusCommandOutput>;
  public describeDraftAppVersionResourcesImportStatus(
    args: DescribeDraftAppVersionResourcesImportStatusCommandInput,
    cb: (err: any, data?: DescribeDraftAppVersionResourcesImportStatusCommandOutput) => void
  ): void;
  public describeDraftAppVersionResourcesImportStatus(
    args: DescribeDraftAppVersionResourcesImportStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDraftAppVersionResourcesImportStatusCommandOutput) => void
  ): void;
  public describeDraftAppVersionResourcesImportStatus(
    args: DescribeDraftAppVersionResourcesImportStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDraftAppVersionResourcesImportStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeDraftAppVersionResourcesImportStatusCommandOutput) => void
  ): Promise<DescribeDraftAppVersionResourcesImportStatusCommandOutput> | void {
    const command = new DescribeDraftAppVersionResourcesImportStatusCommand(args);
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
   * <p>Describes a specified resiliency policy for an AWS Resilience Hub application. The returned
   *       policy object includes creation time, data location constraints, the Amazon Resource Name
   *       (ARN) for the policy, tags, tier, and more.</p>
   */
  public describeResiliencyPolicy(
    args: DescribeResiliencyPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResiliencyPolicyCommandOutput>;
  public describeResiliencyPolicy(
    args: DescribeResiliencyPolicyCommandInput,
    cb: (err: any, data?: DescribeResiliencyPolicyCommandOutput) => void
  ): void;
  public describeResiliencyPolicy(
    args: DescribeResiliencyPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResiliencyPolicyCommandOutput) => void
  ): void;
  public describeResiliencyPolicy(
    args: DescribeResiliencyPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeResiliencyPolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribeResiliencyPolicyCommandOutput) => void
  ): Promise<DescribeResiliencyPolicyCommandOutput> | void {
    const command = new DescribeResiliencyPolicyCommand(args);
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
   * <p>Imports resources to AWS Resilience Hub application draft version from different input sources. For more information about the input sources supported by AWS Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover
   *         the structure and describe your Resilience Hub application</a>.</p>
   */
  public importResourcesToDraftAppVersion(
    args: ImportResourcesToDraftAppVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportResourcesToDraftAppVersionCommandOutput>;
  public importResourcesToDraftAppVersion(
    args: ImportResourcesToDraftAppVersionCommandInput,
    cb: (err: any, data?: ImportResourcesToDraftAppVersionCommandOutput) => void
  ): void;
  public importResourcesToDraftAppVersion(
    args: ImportResourcesToDraftAppVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportResourcesToDraftAppVersionCommandOutput) => void
  ): void;
  public importResourcesToDraftAppVersion(
    args: ImportResourcesToDraftAppVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportResourcesToDraftAppVersionCommandOutput) => void),
    cb?: (err: any, data?: ImportResourcesToDraftAppVersionCommandOutput) => void
  ): Promise<ImportResourcesToDraftAppVersionCommandOutput> | void {
    const command = new ImportResourcesToDraftAppVersionCommand(args);
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
   * <p>Lists the alarm recommendations for an AWS Resilience Hub application.</p>
   */
  public listAlarmRecommendations(
    args: ListAlarmRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAlarmRecommendationsCommandOutput>;
  public listAlarmRecommendations(
    args: ListAlarmRecommendationsCommandInput,
    cb: (err: any, data?: ListAlarmRecommendationsCommandOutput) => void
  ): void;
  public listAlarmRecommendations(
    args: ListAlarmRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlarmRecommendationsCommandOutput) => void
  ): void;
  public listAlarmRecommendations(
    args: ListAlarmRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAlarmRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ListAlarmRecommendationsCommandOutput) => void
  ): Promise<ListAlarmRecommendationsCommandOutput> | void {
    const command = new ListAlarmRecommendationsCommand(args);
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
   * <p>Lists the assessments for an AWS Resilience Hub application. You can use request parameters to
   *       refine the results for the response object.</p>
   */
  public listAppAssessments(
    args: ListAppAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppAssessmentsCommandOutput>;
  public listAppAssessments(
    args: ListAppAssessmentsCommandInput,
    cb: (err: any, data?: ListAppAssessmentsCommandOutput) => void
  ): void;
  public listAppAssessments(
    args: ListAppAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppAssessmentsCommandOutput) => void
  ): void;
  public listAppAssessments(
    args: ListAppAssessmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppAssessmentsCommandOutput) => void),
    cb?: (err: any, data?: ListAppAssessmentsCommandOutput) => void
  ): Promise<ListAppAssessmentsCommandOutput> | void {
    const command = new ListAppAssessmentsCommand(args);
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
   * <p>Lists the compliances for an AWS Resilience Hub Application Component.</p>
   */
  public listAppComponentCompliances(
    args: ListAppComponentCompliancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppComponentCompliancesCommandOutput>;
  public listAppComponentCompliances(
    args: ListAppComponentCompliancesCommandInput,
    cb: (err: any, data?: ListAppComponentCompliancesCommandOutput) => void
  ): void;
  public listAppComponentCompliances(
    args: ListAppComponentCompliancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppComponentCompliancesCommandOutput) => void
  ): void;
  public listAppComponentCompliances(
    args: ListAppComponentCompliancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppComponentCompliancesCommandOutput) => void),
    cb?: (err: any, data?: ListAppComponentCompliancesCommandOutput) => void
  ): Promise<ListAppComponentCompliancesCommandOutput> | void {
    const command = new ListAppComponentCompliancesCommand(args);
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
   * <p>Lists the recommendations for an AWS Resilience Hub Application Component.</p>
   */
  public listAppComponentRecommendations(
    args: ListAppComponentRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppComponentRecommendationsCommandOutput>;
  public listAppComponentRecommendations(
    args: ListAppComponentRecommendationsCommandInput,
    cb: (err: any, data?: ListAppComponentRecommendationsCommandOutput) => void
  ): void;
  public listAppComponentRecommendations(
    args: ListAppComponentRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppComponentRecommendationsCommandOutput) => void
  ): void;
  public listAppComponentRecommendations(
    args: ListAppComponentRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppComponentRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ListAppComponentRecommendationsCommandOutput) => void
  ): Promise<ListAppComponentRecommendationsCommandOutput> | void {
    const command = new ListAppComponentRecommendationsCommand(args);
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
   * <p>Lists all the input sources of the AWS Resilience Hub application. For more information about the
   *       input sources supported by AWS Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover
   *         the structure and describe your Resilience Hub application</a>.</p>
   */
  public listAppInputSources(
    args: ListAppInputSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppInputSourcesCommandOutput>;
  public listAppInputSources(
    args: ListAppInputSourcesCommandInput,
    cb: (err: any, data?: ListAppInputSourcesCommandOutput) => void
  ): void;
  public listAppInputSources(
    args: ListAppInputSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppInputSourcesCommandOutput) => void
  ): void;
  public listAppInputSources(
    args: ListAppInputSourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppInputSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListAppInputSourcesCommandOutput) => void
  ): Promise<ListAppInputSourcesCommandOutput> | void {
    const command = new ListAppInputSourcesCommand(args);
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
   * <p>Lists your AWS Resilience Hub applications.</p>
   *          <note>
   *             <p>You can filter applications using only one filter at a time or without using any filter.
   *         If you try to filter applications using multiple filters, you will get the following
   *         error:</p>
   *             <p>
   *                <code>An error occurred (ValidationException) when calling the ListApps operation: Only
   *           one filter is supported for this operation.</code>
   *             </p>
   *          </note>
   */
  public listApps(args: ListAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsCommandOutput>;
  public listApps(args: ListAppsCommandInput, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
  public listApps(
    args: ListAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;
  public listApps(
    args: ListAppsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppsCommandOutput) => void),
    cb?: (err: any, data?: ListAppsCommandOutput) => void
  ): Promise<ListAppsCommandOutput> | void {
    const command = new ListAppsCommand(args);
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
   * <p>Lists all the Application Components in the AWS Resilience Hub application.</p>
   */
  public listAppVersionAppComponents(
    args: ListAppVersionAppComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppVersionAppComponentsCommandOutput>;
  public listAppVersionAppComponents(
    args: ListAppVersionAppComponentsCommandInput,
    cb: (err: any, data?: ListAppVersionAppComponentsCommandOutput) => void
  ): void;
  public listAppVersionAppComponents(
    args: ListAppVersionAppComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppVersionAppComponentsCommandOutput) => void
  ): void;
  public listAppVersionAppComponents(
    args: ListAppVersionAppComponentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppVersionAppComponentsCommandOutput) => void),
    cb?: (err: any, data?: ListAppVersionAppComponentsCommandOutput) => void
  ): Promise<ListAppVersionAppComponentsCommandOutput> | void {
    const command = new ListAppVersionAppComponentsCommand(args);
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
   * <p>Lists how the resources in an application version are mapped/sourced from. Mappings can be
   *       physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry
   *       app.</p>
   */
  public listAppVersionResourceMappings(
    args: ListAppVersionResourceMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppVersionResourceMappingsCommandOutput>;
  public listAppVersionResourceMappings(
    args: ListAppVersionResourceMappingsCommandInput,
    cb: (err: any, data?: ListAppVersionResourceMappingsCommandOutput) => void
  ): void;
  public listAppVersionResourceMappings(
    args: ListAppVersionResourceMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppVersionResourceMappingsCommandOutput) => void
  ): void;
  public listAppVersionResourceMappings(
    args: ListAppVersionResourceMappingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppVersionResourceMappingsCommandOutput) => void),
    cb?: (err: any, data?: ListAppVersionResourceMappingsCommandOutput) => void
  ): Promise<ListAppVersionResourceMappingsCommandOutput> | void {
    const command = new ListAppVersionResourceMappingsCommand(args);
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
   * <p>Lists all the resources in an AWS Resilience Hub application.</p>
   */
  public listAppVersionResources(
    args: ListAppVersionResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppVersionResourcesCommandOutput>;
  public listAppVersionResources(
    args: ListAppVersionResourcesCommandInput,
    cb: (err: any, data?: ListAppVersionResourcesCommandOutput) => void
  ): void;
  public listAppVersionResources(
    args: ListAppVersionResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppVersionResourcesCommandOutput) => void
  ): void;
  public listAppVersionResources(
    args: ListAppVersionResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppVersionResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListAppVersionResourcesCommandOutput) => void
  ): Promise<ListAppVersionResourcesCommandOutput> | void {
    const command = new ListAppVersionResourcesCommand(args);
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
   * <p>Lists the different versions for the AWS Resilience Hub applications.</p>
   */
  public listAppVersions(
    args: ListAppVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppVersionsCommandOutput>;
  public listAppVersions(
    args: ListAppVersionsCommandInput,
    cb: (err: any, data?: ListAppVersionsCommandOutput) => void
  ): void;
  public listAppVersions(
    args: ListAppVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppVersionsCommandOutput) => void
  ): void;
  public listAppVersions(
    args: ListAppVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListAppVersionsCommandOutput) => void
  ): Promise<ListAppVersionsCommandOutput> | void {
    const command = new ListAppVersionsCommand(args);
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
   * <p>Lists the recommendation templates for the AWS Resilience Hub applications.</p>
   */
  public listRecommendationTemplates(
    args: ListRecommendationTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationTemplatesCommandOutput>;
  public listRecommendationTemplates(
    args: ListRecommendationTemplatesCommandInput,
    cb: (err: any, data?: ListRecommendationTemplatesCommandOutput) => void
  ): void;
  public listRecommendationTemplates(
    args: ListRecommendationTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationTemplatesCommandOutput) => void
  ): void;
  public listRecommendationTemplates(
    args: ListRecommendationTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecommendationTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListRecommendationTemplatesCommandOutput) => void
  ): Promise<ListRecommendationTemplatesCommandOutput> | void {
    const command = new ListRecommendationTemplatesCommand(args);
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
   * <p>Lists the resiliency policies for the AWS Resilience Hub applications.</p>
   */
  public listResiliencyPolicies(
    args: ListResiliencyPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResiliencyPoliciesCommandOutput>;
  public listResiliencyPolicies(
    args: ListResiliencyPoliciesCommandInput,
    cb: (err: any, data?: ListResiliencyPoliciesCommandOutput) => void
  ): void;
  public listResiliencyPolicies(
    args: ListResiliencyPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResiliencyPoliciesCommandOutput) => void
  ): void;
  public listResiliencyPolicies(
    args: ListResiliencyPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResiliencyPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListResiliencyPoliciesCommandOutput) => void
  ): Promise<ListResiliencyPoliciesCommandOutput> | void {
    const command = new ListResiliencyPoliciesCommand(args);
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
   * <p>Lists the standard operating procedure (SOP) recommendations for the AWS Resilience Hub
   *       applications.</p>
   */
  public listSopRecommendations(
    args: ListSopRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSopRecommendationsCommandOutput>;
  public listSopRecommendations(
    args: ListSopRecommendationsCommandInput,
    cb: (err: any, data?: ListSopRecommendationsCommandOutput) => void
  ): void;
  public listSopRecommendations(
    args: ListSopRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSopRecommendationsCommandOutput) => void
  ): void;
  public listSopRecommendations(
    args: ListSopRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSopRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ListSopRecommendationsCommandOutput) => void
  ): Promise<ListSopRecommendationsCommandOutput> | void {
    const command = new ListSopRecommendationsCommand(args);
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
   * <p>Lists the suggested resiliency policies for the AWS Resilience Hub applications.</p>
   */
  public listSuggestedResiliencyPolicies(
    args: ListSuggestedResiliencyPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSuggestedResiliencyPoliciesCommandOutput>;
  public listSuggestedResiliencyPolicies(
    args: ListSuggestedResiliencyPoliciesCommandInput,
    cb: (err: any, data?: ListSuggestedResiliencyPoliciesCommandOutput) => void
  ): void;
  public listSuggestedResiliencyPolicies(
    args: ListSuggestedResiliencyPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSuggestedResiliencyPoliciesCommandOutput) => void
  ): void;
  public listSuggestedResiliencyPolicies(
    args: ListSuggestedResiliencyPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSuggestedResiliencyPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListSuggestedResiliencyPoliciesCommandOutput) => void
  ): Promise<ListSuggestedResiliencyPoliciesCommandOutput> | void {
    const command = new ListSuggestedResiliencyPoliciesCommand(args);
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
   * <p>Lists the tags for your resources in your AWS Resilience Hub applications.</p>
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
   * <p>Lists the test recommendations for the AWS Resilience Hub application.</p>
   */
  public listTestRecommendations(
    args: ListTestRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestRecommendationsCommandOutput>;
  public listTestRecommendations(
    args: ListTestRecommendationsCommandInput,
    cb: (err: any, data?: ListTestRecommendationsCommandOutput) => void
  ): void;
  public listTestRecommendations(
    args: ListTestRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestRecommendationsCommandOutput) => void
  ): void;
  public listTestRecommendations(
    args: ListTestRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTestRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ListTestRecommendationsCommandOutput) => void
  ): Promise<ListTestRecommendationsCommandOutput> | void {
    const command = new ListTestRecommendationsCommand(args);
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
   * <p>Lists the resources that are not currently supported in AWS Resilience Hub. An unsupported
   *       resource is a resource that exists in the object that was used to create an app, but is not
   *       supported by AWS Resilience Hub.</p>
   */
  public listUnsupportedAppVersionResources(
    args: ListUnsupportedAppVersionResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUnsupportedAppVersionResourcesCommandOutput>;
  public listUnsupportedAppVersionResources(
    args: ListUnsupportedAppVersionResourcesCommandInput,
    cb: (err: any, data?: ListUnsupportedAppVersionResourcesCommandOutput) => void
  ): void;
  public listUnsupportedAppVersionResources(
    args: ListUnsupportedAppVersionResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUnsupportedAppVersionResourcesCommandOutput) => void
  ): void;
  public listUnsupportedAppVersionResources(
    args: ListUnsupportedAppVersionResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUnsupportedAppVersionResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListUnsupportedAppVersionResourcesCommandOutput) => void
  ): Promise<ListUnsupportedAppVersionResourcesCommandOutput> | void {
    const command = new ListUnsupportedAppVersionResourcesCommand(args);
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
   * <p>Publishes a new version of a specific AWS Resilience Hub application.</p>
   */
  public publishAppVersion(
    args: PublishAppVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishAppVersionCommandOutput>;
  public publishAppVersion(
    args: PublishAppVersionCommandInput,
    cb: (err: any, data?: PublishAppVersionCommandOutput) => void
  ): void;
  public publishAppVersion(
    args: PublishAppVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishAppVersionCommandOutput) => void
  ): void;
  public publishAppVersion(
    args: PublishAppVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PublishAppVersionCommandOutput) => void),
    cb?: (err: any, data?: PublishAppVersionCommandOutput) => void
  ): Promise<PublishAppVersionCommandOutput> | void {
    const command = new PublishAppVersionCommand(args);
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
   * <p>Adds or updates the app template for an AWS Resilience Hub application draft version.</p>
   */
  public putDraftAppVersionTemplate(
    args: PutDraftAppVersionTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDraftAppVersionTemplateCommandOutput>;
  public putDraftAppVersionTemplate(
    args: PutDraftAppVersionTemplateCommandInput,
    cb: (err: any, data?: PutDraftAppVersionTemplateCommandOutput) => void
  ): void;
  public putDraftAppVersionTemplate(
    args: PutDraftAppVersionTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDraftAppVersionTemplateCommandOutput) => void
  ): void;
  public putDraftAppVersionTemplate(
    args: PutDraftAppVersionTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDraftAppVersionTemplateCommandOutput) => void),
    cb?: (err: any, data?: PutDraftAppVersionTemplateCommandOutput) => void
  ): Promise<PutDraftAppVersionTemplateCommandOutput> | void {
    const command = new PutDraftAppVersionTemplateCommand(args);
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
   * <p>Removes resource mappings from a draft application version.</p>
   */
  public removeDraftAppVersionResourceMappings(
    args: RemoveDraftAppVersionResourceMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveDraftAppVersionResourceMappingsCommandOutput>;
  public removeDraftAppVersionResourceMappings(
    args: RemoveDraftAppVersionResourceMappingsCommandInput,
    cb: (err: any, data?: RemoveDraftAppVersionResourceMappingsCommandOutput) => void
  ): void;
  public removeDraftAppVersionResourceMappings(
    args: RemoveDraftAppVersionResourceMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveDraftAppVersionResourceMappingsCommandOutput) => void
  ): void;
  public removeDraftAppVersionResourceMappings(
    args: RemoveDraftAppVersionResourceMappingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RemoveDraftAppVersionResourceMappingsCommandOutput) => void),
    cb?: (err: any, data?: RemoveDraftAppVersionResourceMappingsCommandOutput) => void
  ): Promise<RemoveDraftAppVersionResourceMappingsCommandOutput> | void {
    const command = new RemoveDraftAppVersionResourceMappingsCommand(args);
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
   * <p>Resolves the resources for an application version.</p>
   */
  public resolveAppVersionResources(
    args: ResolveAppVersionResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResolveAppVersionResourcesCommandOutput>;
  public resolveAppVersionResources(
    args: ResolveAppVersionResourcesCommandInput,
    cb: (err: any, data?: ResolveAppVersionResourcesCommandOutput) => void
  ): void;
  public resolveAppVersionResources(
    args: ResolveAppVersionResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveAppVersionResourcesCommandOutput) => void
  ): void;
  public resolveAppVersionResources(
    args: ResolveAppVersionResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResolveAppVersionResourcesCommandOutput) => void),
    cb?: (err: any, data?: ResolveAppVersionResourcesCommandOutput) => void
  ): Promise<ResolveAppVersionResourcesCommandOutput> | void {
    const command = new ResolveAppVersionResourcesCommand(args);
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
   * <p>Creates a new application assessment for an application.</p>
   */
  public startAppAssessment(
    args: StartAppAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAppAssessmentCommandOutput>;
  public startAppAssessment(
    args: StartAppAssessmentCommandInput,
    cb: (err: any, data?: StartAppAssessmentCommandOutput) => void
  ): void;
  public startAppAssessment(
    args: StartAppAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAppAssessmentCommandOutput) => void
  ): void;
  public startAppAssessment(
    args: StartAppAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAppAssessmentCommandOutput) => void),
    cb?: (err: any, data?: StartAppAssessmentCommandOutput) => void
  ): Promise<StartAppAssessmentCommandOutput> | void {
    const command = new StartAppAssessmentCommand(args);
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
   * <p>Applies one or more tags to a resource.</p>
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
   * <p>Removes one or more tags from a resource.</p>
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
   * <p>Updates an application.</p>
   */
  public updateApp(args: UpdateAppCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAppCommandOutput>;
  public updateApp(args: UpdateAppCommandInput, cb: (err: any, data?: UpdateAppCommandOutput) => void): void;
  public updateApp(
    args: UpdateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppCommandOutput) => void
  ): void;
  public updateApp(
    args: UpdateAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppCommandOutput) => void
  ): Promise<UpdateAppCommandOutput> | void {
    const command = new UpdateAppCommand(args);
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
   * <p>Updates the AWS Resilience Hub application version.</p>
   *          <note>
   *             <p>This API updates the AWS Resilience Hub application draft version. To use this information
   *         for running resiliency assessments, you must publish the AWS Resilience Hub application using the
   *           <code>PublishAppVersion</code> API.</p>
   *          </note>
   */
  public updateAppVersion(
    args: UpdateAppVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppVersionCommandOutput>;
  public updateAppVersion(
    args: UpdateAppVersionCommandInput,
    cb: (err: any, data?: UpdateAppVersionCommandOutput) => void
  ): void;
  public updateAppVersion(
    args: UpdateAppVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppVersionCommandOutput) => void
  ): void;
  public updateAppVersion(
    args: UpdateAppVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppVersionCommandOutput) => void
  ): Promise<UpdateAppVersionCommandOutput> | void {
    const command = new UpdateAppVersionCommand(args);
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
   * <p>Updates an existing Application Component in the AWS Resilience Hub application.</p>
   *          <note>
   *             <p>This API updates the AWS Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p>
   *          </note>
   */
  public updateAppVersionAppComponent(
    args: UpdateAppVersionAppComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppVersionAppComponentCommandOutput>;
  public updateAppVersionAppComponent(
    args: UpdateAppVersionAppComponentCommandInput,
    cb: (err: any, data?: UpdateAppVersionAppComponentCommandOutput) => void
  ): void;
  public updateAppVersionAppComponent(
    args: UpdateAppVersionAppComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppVersionAppComponentCommandOutput) => void
  ): void;
  public updateAppVersionAppComponent(
    args: UpdateAppVersionAppComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppVersionAppComponentCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppVersionAppComponentCommandOutput) => void
  ): Promise<UpdateAppVersionAppComponentCommandOutput> | void {
    const command = new UpdateAppVersionAppComponentCommand(args);
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
   * <p>Updates the resource details in the AWS Resilience Hub application.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>This action has no effect outside AWS Resilience Hub.</p>
   *                </li>
   *                <li>
   *                   <p>This API updates the AWS Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p>
   *                </li>
   *                <li>
   *                   <p>To update application version with new <code>physicalResourceID</code>, you must call
   *               <code>ResolveAppVersionResources</code> API.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public updateAppVersionResource(
    args: UpdateAppVersionResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppVersionResourceCommandOutput>;
  public updateAppVersionResource(
    args: UpdateAppVersionResourceCommandInput,
    cb: (err: any, data?: UpdateAppVersionResourceCommandOutput) => void
  ): void;
  public updateAppVersionResource(
    args: UpdateAppVersionResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppVersionResourceCommandOutput) => void
  ): void;
  public updateAppVersionResource(
    args: UpdateAppVersionResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppVersionResourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppVersionResourceCommandOutput) => void
  ): Promise<UpdateAppVersionResourceCommandOutput> | void {
    const command = new UpdateAppVersionResourceCommand(args);
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
   * <p>Updates a resiliency policy.</p>
   */
  public updateResiliencyPolicy(
    args: UpdateResiliencyPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResiliencyPolicyCommandOutput>;
  public updateResiliencyPolicy(
    args: UpdateResiliencyPolicyCommandInput,
    cb: (err: any, data?: UpdateResiliencyPolicyCommandOutput) => void
  ): void;
  public updateResiliencyPolicy(
    args: UpdateResiliencyPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResiliencyPolicyCommandOutput) => void
  ): void;
  public updateResiliencyPolicy(
    args: UpdateResiliencyPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResiliencyPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateResiliencyPolicyCommandOutput) => void
  ): Promise<UpdateResiliencyPolicyCommandOutput> | void {
    const command = new UpdateResiliencyPolicyCommand(args);
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
