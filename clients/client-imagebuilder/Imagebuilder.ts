import { ImagebuilderClient } from "./ImagebuilderClient";
import {
  CancelImageCreationCommand,
  CancelImageCreationCommandInput,
  CancelImageCreationCommandOutput,
} from "./commands/CancelImageCreationCommand";
import {
  CreateComponentCommand,
  CreateComponentCommandInput,
  CreateComponentCommandOutput,
} from "./commands/CreateComponentCommand";
import {
  CreateDistributionConfigurationCommand,
  CreateDistributionConfigurationCommandInput,
  CreateDistributionConfigurationCommandOutput,
} from "./commands/CreateDistributionConfigurationCommand";
import { CreateImageCommand, CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand";
import {
  CreateImagePipelineCommand,
  CreateImagePipelineCommandInput,
  CreateImagePipelineCommandOutput,
} from "./commands/CreateImagePipelineCommand";
import {
  CreateImageRecipeCommand,
  CreateImageRecipeCommandInput,
  CreateImageRecipeCommandOutput,
} from "./commands/CreateImageRecipeCommand";
import {
  CreateInfrastructureConfigurationCommand,
  CreateInfrastructureConfigurationCommandInput,
  CreateInfrastructureConfigurationCommandOutput,
} from "./commands/CreateInfrastructureConfigurationCommand";
import {
  DeleteComponentCommand,
  DeleteComponentCommandInput,
  DeleteComponentCommandOutput,
} from "./commands/DeleteComponentCommand";
import {
  DeleteDistributionConfigurationCommand,
  DeleteDistributionConfigurationCommandInput,
  DeleteDistributionConfigurationCommandOutput,
} from "./commands/DeleteDistributionConfigurationCommand";
import { DeleteImageCommand, DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import {
  DeleteImagePipelineCommand,
  DeleteImagePipelineCommandInput,
  DeleteImagePipelineCommandOutput,
} from "./commands/DeleteImagePipelineCommand";
import {
  DeleteImageRecipeCommand,
  DeleteImageRecipeCommandInput,
  DeleteImageRecipeCommandOutput,
} from "./commands/DeleteImageRecipeCommand";
import {
  DeleteInfrastructureConfigurationCommand,
  DeleteInfrastructureConfigurationCommandInput,
  DeleteInfrastructureConfigurationCommandOutput,
} from "./commands/DeleteInfrastructureConfigurationCommand";
import {
  GetComponentCommand,
  GetComponentCommandInput,
  GetComponentCommandOutput,
} from "./commands/GetComponentCommand";
import {
  GetComponentPolicyCommand,
  GetComponentPolicyCommandInput,
  GetComponentPolicyCommandOutput,
} from "./commands/GetComponentPolicyCommand";
import {
  GetDistributionConfigurationCommand,
  GetDistributionConfigurationCommandInput,
  GetDistributionConfigurationCommandOutput,
} from "./commands/GetDistributionConfigurationCommand";
import { GetImageCommand, GetImageCommandInput, GetImageCommandOutput } from "./commands/GetImageCommand";
import {
  GetImagePipelineCommand,
  GetImagePipelineCommandInput,
  GetImagePipelineCommandOutput,
} from "./commands/GetImagePipelineCommand";
import {
  GetImagePolicyCommand,
  GetImagePolicyCommandInput,
  GetImagePolicyCommandOutput,
} from "./commands/GetImagePolicyCommand";
import {
  GetImageRecipeCommand,
  GetImageRecipeCommandInput,
  GetImageRecipeCommandOutput,
} from "./commands/GetImageRecipeCommand";
import {
  GetImageRecipePolicyCommand,
  GetImageRecipePolicyCommandInput,
  GetImageRecipePolicyCommandOutput,
} from "./commands/GetImageRecipePolicyCommand";
import {
  GetInfrastructureConfigurationCommand,
  GetInfrastructureConfigurationCommandInput,
  GetInfrastructureConfigurationCommandOutput,
} from "./commands/GetInfrastructureConfigurationCommand";
import {
  ImportComponentCommand,
  ImportComponentCommandInput,
  ImportComponentCommandOutput,
} from "./commands/ImportComponentCommand";
import {
  ListComponentBuildVersionsCommand,
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput,
} from "./commands/ListComponentBuildVersionsCommand";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "./commands/ListComponentsCommand";
import {
  ListDistributionConfigurationsCommand,
  ListDistributionConfigurationsCommandInput,
  ListDistributionConfigurationsCommandOutput,
} from "./commands/ListDistributionConfigurationsCommand";
import {
  ListImageBuildVersionsCommand,
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput,
} from "./commands/ListImageBuildVersionsCommand";
import {
  ListImagePipelineImagesCommand,
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput,
} from "./commands/ListImagePipelineImagesCommand";
import {
  ListImagePipelinesCommand,
  ListImagePipelinesCommandInput,
  ListImagePipelinesCommandOutput,
} from "./commands/ListImagePipelinesCommand";
import {
  ListImageRecipesCommand,
  ListImageRecipesCommandInput,
  ListImageRecipesCommandOutput,
} from "./commands/ListImageRecipesCommand";
import { ListImagesCommand, ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import {
  ListInfrastructureConfigurationsCommand,
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput,
} from "./commands/ListInfrastructureConfigurationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutComponentPolicyCommand,
  PutComponentPolicyCommandInput,
  PutComponentPolicyCommandOutput,
} from "./commands/PutComponentPolicyCommand";
import {
  PutImagePolicyCommand,
  PutImagePolicyCommandInput,
  PutImagePolicyCommandOutput,
} from "./commands/PutImagePolicyCommand";
import {
  PutImageRecipePolicyCommand,
  PutImageRecipePolicyCommandInput,
  PutImageRecipePolicyCommandOutput,
} from "./commands/PutImageRecipePolicyCommand";
import {
  StartImagePipelineExecutionCommand,
  StartImagePipelineExecutionCommandInput,
  StartImagePipelineExecutionCommandOutput,
} from "./commands/StartImagePipelineExecutionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDistributionConfigurationCommand,
  UpdateDistributionConfigurationCommandInput,
  UpdateDistributionConfigurationCommandOutput,
} from "./commands/UpdateDistributionConfigurationCommand";
import {
  UpdateImagePipelineCommand,
  UpdateImagePipelineCommandInput,
  UpdateImagePipelineCommandOutput,
} from "./commands/UpdateImagePipelineCommand";
import {
  UpdateInfrastructureConfigurationCommand,
  UpdateInfrastructureConfigurationCommandInput,
  UpdateInfrastructureConfigurationCommandOutput,
} from "./commands/UpdateInfrastructureConfigurationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>EC2 Image Builder is a fully managed AWS service that makes it easier to automate the creation, management, and deployment of customized, secure, and up-to-date “golden” server images that are pre-installed and pre-configured with software and settings to meet specific IT standards.</p>
 */
export class Imagebuilder extends ImagebuilderClient {
  /**
   * <p>CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.</p>
   */
  public cancelImageCreation(
    args: CancelImageCreationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelImageCreationCommandOutput>;
  public cancelImageCreation(
    args: CancelImageCreationCommandInput,
    cb: (err: any, data?: CancelImageCreationCommandOutput) => void
  ): void;
  public cancelImageCreation(
    args: CancelImageCreationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelImageCreationCommandOutput) => void
  ): void;
  public cancelImageCreation(
    args: CancelImageCreationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelImageCreationCommandOutput) => void),
    cb?: (err: any, data?: CancelImageCreationCommandOutput) => void
  ): Promise<CancelImageCreationCommandOutput> | void {
    const command = new CancelImageCreationCommand(args);
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
   * <p>Creates a new component that can be used to build, validate, test, and assess your image.</p>
   */
  public createComponent(
    args: CreateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentCommandOutput>;
  public createComponent(
    args: CreateComponentCommandInput,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;
  public createComponent(
    args: CreateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;
  public createComponent(
    args: CreateComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateComponentCommandOutput) => void),
    cb?: (err: any, data?: CreateComponentCommandOutput) => void
  ): Promise<CreateComponentCommandOutput> | void {
    const command = new CreateComponentCommand(args);
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
   * <p>Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline. </p>
   */
  public createDistributionConfiguration(
    args: CreateDistributionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionConfigurationCommandOutput>;
  public createDistributionConfiguration(
    args: CreateDistributionConfigurationCommandInput,
    cb: (err: any, data?: CreateDistributionConfigurationCommandOutput) => void
  ): void;
  public createDistributionConfiguration(
    args: CreateDistributionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionConfigurationCommandOutput) => void
  ): void;
  public createDistributionConfiguration(
    args: CreateDistributionConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDistributionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateDistributionConfigurationCommandOutput) => void
  ): Promise<CreateDistributionConfigurationCommandOutput> | void {
    const command = new CreateDistributionConfigurationCommand(args);
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
   * <p> Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. </p>
   */
  public createImage(args: CreateImageCommandInput, options?: __HttpHandlerOptions): Promise<CreateImageCommandOutput>;
  public createImage(args: CreateImageCommandInput, cb: (err: any, data?: CreateImageCommandOutput) => void): void;
  public createImage(
    args: CreateImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImageCommandOutput) => void
  ): void;
  public createImage(
    args: CreateImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateImageCommandOutput) => void),
    cb?: (err: any, data?: CreateImageCommandOutput) => void
  ): Promise<CreateImageCommandOutput> | void {
    const command = new CreateImageCommand(args);
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
   * <p> Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images. </p>
   */
  public createImagePipeline(
    args: CreateImagePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImagePipelineCommandOutput>;
  public createImagePipeline(
    args: CreateImagePipelineCommandInput,
    cb: (err: any, data?: CreateImagePipelineCommandOutput) => void
  ): void;
  public createImagePipeline(
    args: CreateImagePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImagePipelineCommandOutput) => void
  ): void;
  public createImagePipeline(
    args: CreateImagePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateImagePipelineCommandOutput) => void),
    cb?: (err: any, data?: CreateImagePipelineCommandOutput) => void
  ): Promise<CreateImagePipelineCommandOutput> | void {
    const command = new CreateImagePipelineCommand(args);
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
   * <p> Creates a new image recipe. Image recipes define how images are configured, tested, and assessed. </p>
   */
  public createImageRecipe(
    args: CreateImageRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImageRecipeCommandOutput>;
  public createImageRecipe(
    args: CreateImageRecipeCommandInput,
    cb: (err: any, data?: CreateImageRecipeCommandOutput) => void
  ): void;
  public createImageRecipe(
    args: CreateImageRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImageRecipeCommandOutput) => void
  ): void;
  public createImageRecipe(
    args: CreateImageRecipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateImageRecipeCommandOutput) => void),
    cb?: (err: any, data?: CreateImageRecipeCommandOutput) => void
  ): Promise<CreateImageRecipeCommandOutput> | void {
    const command = new CreateImageRecipeCommand(args);
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
   * <p> Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested. </p>
   */
  public createInfrastructureConfiguration(
    args: CreateInfrastructureConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInfrastructureConfigurationCommandOutput>;
  public createInfrastructureConfiguration(
    args: CreateInfrastructureConfigurationCommandInput,
    cb: (err: any, data?: CreateInfrastructureConfigurationCommandOutput) => void
  ): void;
  public createInfrastructureConfiguration(
    args: CreateInfrastructureConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInfrastructureConfigurationCommandOutput) => void
  ): void;
  public createInfrastructureConfiguration(
    args: CreateInfrastructureConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInfrastructureConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateInfrastructureConfigurationCommandOutput) => void
  ): Promise<CreateInfrastructureConfigurationCommandOutput> | void {
    const command = new CreateInfrastructureConfigurationCommand(args);
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
   * <p> Deletes a component build version. </p>
   */
  public deleteComponent(
    args: DeleteComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentCommandOutput>;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteComponentCommandOutput) => void),
    cb?: (err: any, data?: DeleteComponentCommandOutput) => void
  ): Promise<DeleteComponentCommandOutput> | void {
    const command = new DeleteComponentCommand(args);
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
   * <p> Deletes a distribution configuration. </p>
   */
  public deleteDistributionConfiguration(
    args: DeleteDistributionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDistributionConfigurationCommandOutput>;
  public deleteDistributionConfiguration(
    args: DeleteDistributionConfigurationCommandInput,
    cb: (err: any, data?: DeleteDistributionConfigurationCommandOutput) => void
  ): void;
  public deleteDistributionConfiguration(
    args: DeleteDistributionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDistributionConfigurationCommandOutput) => void
  ): void;
  public deleteDistributionConfiguration(
    args: DeleteDistributionConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDistributionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteDistributionConfigurationCommandOutput) => void
  ): Promise<DeleteDistributionConfigurationCommandOutput> | void {
    const command = new DeleteDistributionConfigurationCommand(args);
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
   * <p> Deletes an image. </p>
   */
  public deleteImage(args: DeleteImageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImageCommandOutput>;
  public deleteImage(args: DeleteImageCommandInput, cb: (err: any, data?: DeleteImageCommandOutput) => void): void;
  public deleteImage(
    args: DeleteImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImageCommandOutput) => void
  ): void;
  public deleteImage(
    args: DeleteImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteImageCommandOutput) => void),
    cb?: (err: any, data?: DeleteImageCommandOutput) => void
  ): Promise<DeleteImageCommandOutput> | void {
    const command = new DeleteImageCommand(args);
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
   * <p> Deletes an image pipeline. </p>
   */
  public deleteImagePipeline(
    args: DeleteImagePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImagePipelineCommandOutput>;
  public deleteImagePipeline(
    args: DeleteImagePipelineCommandInput,
    cb: (err: any, data?: DeleteImagePipelineCommandOutput) => void
  ): void;
  public deleteImagePipeline(
    args: DeleteImagePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImagePipelineCommandOutput) => void
  ): void;
  public deleteImagePipeline(
    args: DeleteImagePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteImagePipelineCommandOutput) => void),
    cb?: (err: any, data?: DeleteImagePipelineCommandOutput) => void
  ): Promise<DeleteImagePipelineCommandOutput> | void {
    const command = new DeleteImagePipelineCommand(args);
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
   * <p> Deletes an image recipe. </p>
   */
  public deleteImageRecipe(
    args: DeleteImageRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImageRecipeCommandOutput>;
  public deleteImageRecipe(
    args: DeleteImageRecipeCommandInput,
    cb: (err: any, data?: DeleteImageRecipeCommandOutput) => void
  ): void;
  public deleteImageRecipe(
    args: DeleteImageRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImageRecipeCommandOutput) => void
  ): void;
  public deleteImageRecipe(
    args: DeleteImageRecipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteImageRecipeCommandOutput) => void),
    cb?: (err: any, data?: DeleteImageRecipeCommandOutput) => void
  ): Promise<DeleteImageRecipeCommandOutput> | void {
    const command = new DeleteImageRecipeCommand(args);
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
   * <p> Deletes an infrastructure configuration. </p>
   */
  public deleteInfrastructureConfiguration(
    args: DeleteInfrastructureConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInfrastructureConfigurationCommandOutput>;
  public deleteInfrastructureConfiguration(
    args: DeleteInfrastructureConfigurationCommandInput,
    cb: (err: any, data?: DeleteInfrastructureConfigurationCommandOutput) => void
  ): void;
  public deleteInfrastructureConfiguration(
    args: DeleteInfrastructureConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInfrastructureConfigurationCommandOutput) => void
  ): void;
  public deleteInfrastructureConfiguration(
    args: DeleteInfrastructureConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInfrastructureConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteInfrastructureConfigurationCommandOutput) => void
  ): Promise<DeleteInfrastructureConfigurationCommandOutput> | void {
    const command = new DeleteInfrastructureConfigurationCommand(args);
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
   * <p> Gets a component object. </p>
   */
  public getComponent(
    args: GetComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentCommandOutput>;
  public getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
  public getComponent(
    args: GetComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;
  public getComponent(
    args: GetComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComponentCommandOutput) => void),
    cb?: (err: any, data?: GetComponentCommandOutput) => void
  ): Promise<GetComponentCommandOutput> | void {
    const command = new GetComponentCommand(args);
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
   * <p> Gets a component policy. </p>
   */
  public getComponentPolicy(
    args: GetComponentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentPolicyCommandOutput>;
  public getComponentPolicy(
    args: GetComponentPolicyCommandInput,
    cb: (err: any, data?: GetComponentPolicyCommandOutput) => void
  ): void;
  public getComponentPolicy(
    args: GetComponentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentPolicyCommandOutput) => void
  ): void;
  public getComponentPolicy(
    args: GetComponentPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComponentPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetComponentPolicyCommandOutput) => void
  ): Promise<GetComponentPolicyCommandOutput> | void {
    const command = new GetComponentPolicyCommand(args);
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
   * <p> Gets a distribution configuration. </p>
   */
  public getDistributionConfiguration(
    args: GetDistributionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionConfigurationCommandOutput>;
  public getDistributionConfiguration(
    args: GetDistributionConfigurationCommandInput,
    cb: (err: any, data?: GetDistributionConfigurationCommandOutput) => void
  ): void;
  public getDistributionConfiguration(
    args: GetDistributionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionConfigurationCommandOutput) => void
  ): void;
  public getDistributionConfiguration(
    args: GetDistributionConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDistributionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetDistributionConfigurationCommandOutput) => void
  ): Promise<GetDistributionConfigurationCommandOutput> | void {
    const command = new GetDistributionConfigurationCommand(args);
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
   * <p> Gets an image. </p>
   */
  public getImage(args: GetImageCommandInput, options?: __HttpHandlerOptions): Promise<GetImageCommandOutput>;
  public getImage(args: GetImageCommandInput, cb: (err: any, data?: GetImageCommandOutput) => void): void;
  public getImage(
    args: GetImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImageCommandOutput) => void
  ): void;
  public getImage(
    args: GetImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetImageCommandOutput) => void),
    cb?: (err: any, data?: GetImageCommandOutput) => void
  ): Promise<GetImageCommandOutput> | void {
    const command = new GetImageCommand(args);
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
   * <p> Gets an image pipeline. </p>
   */
  public getImagePipeline(
    args: GetImagePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImagePipelineCommandOutput>;
  public getImagePipeline(
    args: GetImagePipelineCommandInput,
    cb: (err: any, data?: GetImagePipelineCommandOutput) => void
  ): void;
  public getImagePipeline(
    args: GetImagePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImagePipelineCommandOutput) => void
  ): void;
  public getImagePipeline(
    args: GetImagePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetImagePipelineCommandOutput) => void),
    cb?: (err: any, data?: GetImagePipelineCommandOutput) => void
  ): Promise<GetImagePipelineCommandOutput> | void {
    const command = new GetImagePipelineCommand(args);
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
   * <p> Gets an image policy. </p>
   */
  public getImagePolicy(
    args: GetImagePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImagePolicyCommandOutput>;
  public getImagePolicy(
    args: GetImagePolicyCommandInput,
    cb: (err: any, data?: GetImagePolicyCommandOutput) => void
  ): void;
  public getImagePolicy(
    args: GetImagePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImagePolicyCommandOutput) => void
  ): void;
  public getImagePolicy(
    args: GetImagePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetImagePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetImagePolicyCommandOutput) => void
  ): Promise<GetImagePolicyCommandOutput> | void {
    const command = new GetImagePolicyCommand(args);
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
   * <p> Gets an image recipe. </p>
   */
  public getImageRecipe(
    args: GetImageRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImageRecipeCommandOutput>;
  public getImageRecipe(
    args: GetImageRecipeCommandInput,
    cb: (err: any, data?: GetImageRecipeCommandOutput) => void
  ): void;
  public getImageRecipe(
    args: GetImageRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImageRecipeCommandOutput) => void
  ): void;
  public getImageRecipe(
    args: GetImageRecipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetImageRecipeCommandOutput) => void),
    cb?: (err: any, data?: GetImageRecipeCommandOutput) => void
  ): Promise<GetImageRecipeCommandOutput> | void {
    const command = new GetImageRecipeCommand(args);
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
   * <p> Gets an image recipe policy. </p>
   */
  public getImageRecipePolicy(
    args: GetImageRecipePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImageRecipePolicyCommandOutput>;
  public getImageRecipePolicy(
    args: GetImageRecipePolicyCommandInput,
    cb: (err: any, data?: GetImageRecipePolicyCommandOutput) => void
  ): void;
  public getImageRecipePolicy(
    args: GetImageRecipePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImageRecipePolicyCommandOutput) => void
  ): void;
  public getImageRecipePolicy(
    args: GetImageRecipePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetImageRecipePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetImageRecipePolicyCommandOutput) => void
  ): Promise<GetImageRecipePolicyCommandOutput> | void {
    const command = new GetImageRecipePolicyCommand(args);
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
   * <p> Gets an infrastructure configuration. </p>
   */
  public getInfrastructureConfiguration(
    args: GetInfrastructureConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInfrastructureConfigurationCommandOutput>;
  public getInfrastructureConfiguration(
    args: GetInfrastructureConfigurationCommandInput,
    cb: (err: any, data?: GetInfrastructureConfigurationCommandOutput) => void
  ): void;
  public getInfrastructureConfiguration(
    args: GetInfrastructureConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInfrastructureConfigurationCommandOutput) => void
  ): void;
  public getInfrastructureConfiguration(
    args: GetInfrastructureConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInfrastructureConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetInfrastructureConfigurationCommandOutput) => void
  ): Promise<GetInfrastructureConfigurationCommandOutput> | void {
    const command = new GetInfrastructureConfigurationCommand(args);
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
   * <p>Imports a component and transforms its data into a component document. </p>
   */
  public importComponent(
    args: ImportComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportComponentCommandOutput>;
  public importComponent(
    args: ImportComponentCommandInput,
    cb: (err: any, data?: ImportComponentCommandOutput) => void
  ): void;
  public importComponent(
    args: ImportComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportComponentCommandOutput) => void
  ): void;
  public importComponent(
    args: ImportComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportComponentCommandOutput) => void),
    cb?: (err: any, data?: ImportComponentCommandOutput) => void
  ): Promise<ImportComponentCommandOutput> | void {
    const command = new ImportComponentCommand(args);
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
   * <p> Returns the list of component build versions for the specified semantic version. </p>
   */
  public listComponentBuildVersions(
    args: ListComponentBuildVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentBuildVersionsCommandOutput>;
  public listComponentBuildVersions(
    args: ListComponentBuildVersionsCommandInput,
    cb: (err: any, data?: ListComponentBuildVersionsCommandOutput) => void
  ): void;
  public listComponentBuildVersions(
    args: ListComponentBuildVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentBuildVersionsCommandOutput) => void
  ): void;
  public listComponentBuildVersions(
    args: ListComponentBuildVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComponentBuildVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListComponentBuildVersionsCommandOutput) => void
  ): Promise<ListComponentBuildVersionsCommandOutput> | void {
    const command = new ListComponentBuildVersionsCommand(args);
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
   * <p>Returns the list of component build versions for the specified semantic version. </p>
   */
  public listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  public listComponents(
    args: ListComponentsCommandInput,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComponentsCommandOutput) => void),
    cb?: (err: any, data?: ListComponentsCommandOutput) => void
  ): Promise<ListComponentsCommandOutput> | void {
    const command = new ListComponentsCommand(args);
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
   * <p> Returns a list of distribution configurations. </p>
   */
  public listDistributionConfigurations(
    args: ListDistributionConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionConfigurationsCommandOutput>;
  public listDistributionConfigurations(
    args: ListDistributionConfigurationsCommandInput,
    cb: (err: any, data?: ListDistributionConfigurationsCommandOutput) => void
  ): void;
  public listDistributionConfigurations(
    args: ListDistributionConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionConfigurationsCommandOutput) => void
  ): void;
  public listDistributionConfigurations(
    args: ListDistributionConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDistributionConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListDistributionConfigurationsCommandOutput) => void
  ): Promise<ListDistributionConfigurationsCommandOutput> | void {
    const command = new ListDistributionConfigurationsCommand(args);
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
   * <p> Returns a list of image build versions. </p>
   */
  public listImageBuildVersions(
    args: ListImageBuildVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImageBuildVersionsCommandOutput>;
  public listImageBuildVersions(
    args: ListImageBuildVersionsCommandInput,
    cb: (err: any, data?: ListImageBuildVersionsCommandOutput) => void
  ): void;
  public listImageBuildVersions(
    args: ListImageBuildVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImageBuildVersionsCommandOutput) => void
  ): void;
  public listImageBuildVersions(
    args: ListImageBuildVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListImageBuildVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListImageBuildVersionsCommandOutput) => void
  ): Promise<ListImageBuildVersionsCommandOutput> | void {
    const command = new ListImageBuildVersionsCommand(args);
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
   * <p> Returns a list of images created by the specified pipeline. </p>
   */
  public listImagePipelineImages(
    args: ListImagePipelineImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImagePipelineImagesCommandOutput>;
  public listImagePipelineImages(
    args: ListImagePipelineImagesCommandInput,
    cb: (err: any, data?: ListImagePipelineImagesCommandOutput) => void
  ): void;
  public listImagePipelineImages(
    args: ListImagePipelineImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagePipelineImagesCommandOutput) => void
  ): void;
  public listImagePipelineImages(
    args: ListImagePipelineImagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListImagePipelineImagesCommandOutput) => void),
    cb?: (err: any, data?: ListImagePipelineImagesCommandOutput) => void
  ): Promise<ListImagePipelineImagesCommandOutput> | void {
    const command = new ListImagePipelineImagesCommand(args);
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
   * <p>Returns a list of image pipelines. </p>
   */
  public listImagePipelines(
    args: ListImagePipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImagePipelinesCommandOutput>;
  public listImagePipelines(
    args: ListImagePipelinesCommandInput,
    cb: (err: any, data?: ListImagePipelinesCommandOutput) => void
  ): void;
  public listImagePipelines(
    args: ListImagePipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagePipelinesCommandOutput) => void
  ): void;
  public listImagePipelines(
    args: ListImagePipelinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListImagePipelinesCommandOutput) => void),
    cb?: (err: any, data?: ListImagePipelinesCommandOutput) => void
  ): Promise<ListImagePipelinesCommandOutput> | void {
    const command = new ListImagePipelinesCommand(args);
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
   * <p> Returns a list of image recipes. </p>
   */
  public listImageRecipes(
    args: ListImageRecipesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImageRecipesCommandOutput>;
  public listImageRecipes(
    args: ListImageRecipesCommandInput,
    cb: (err: any, data?: ListImageRecipesCommandOutput) => void
  ): void;
  public listImageRecipes(
    args: ListImageRecipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImageRecipesCommandOutput) => void
  ): void;
  public listImageRecipes(
    args: ListImageRecipesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListImageRecipesCommandOutput) => void),
    cb?: (err: any, data?: ListImageRecipesCommandOutput) => void
  ): Promise<ListImageRecipesCommandOutput> | void {
    const command = new ListImageRecipesCommand(args);
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
   * <p> Returns the list of images that you have access to. </p>
   */
  public listImages(args: ListImagesCommandInput, options?: __HttpHandlerOptions): Promise<ListImagesCommandOutput>;
  public listImages(args: ListImagesCommandInput, cb: (err: any, data?: ListImagesCommandOutput) => void): void;
  public listImages(
    args: ListImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagesCommandOutput) => void
  ): void;
  public listImages(
    args: ListImagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListImagesCommandOutput) => void),
    cb?: (err: any, data?: ListImagesCommandOutput) => void
  ): Promise<ListImagesCommandOutput> | void {
    const command = new ListImagesCommand(args);
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
   * <p> Returns a list of infrastructure configurations. </p>
   */
  public listInfrastructureConfigurations(
    args: ListInfrastructureConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInfrastructureConfigurationsCommandOutput>;
  public listInfrastructureConfigurations(
    args: ListInfrastructureConfigurationsCommandInput,
    cb: (err: any, data?: ListInfrastructureConfigurationsCommandOutput) => void
  ): void;
  public listInfrastructureConfigurations(
    args: ListInfrastructureConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInfrastructureConfigurationsCommandOutput) => void
  ): void;
  public listInfrastructureConfigurations(
    args: ListInfrastructureConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInfrastructureConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListInfrastructureConfigurationsCommandOutput) => void
  ): Promise<ListInfrastructureConfigurationsCommandOutput> | void {
    const command = new ListInfrastructureConfigurationsCommand(args);
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
   * <p> Returns the list of tags for the specified resource. </p>
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
   * <p> Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared. </p>
   */
  public putComponentPolicy(
    args: PutComponentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutComponentPolicyCommandOutput>;
  public putComponentPolicy(
    args: PutComponentPolicyCommandInput,
    cb: (err: any, data?: PutComponentPolicyCommandOutput) => void
  ): void;
  public putComponentPolicy(
    args: PutComponentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutComponentPolicyCommandOutput) => void
  ): void;
  public putComponentPolicy(
    args: PutComponentPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutComponentPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutComponentPolicyCommandOutput) => void
  ): Promise<PutComponentPolicyCommandOutput> | void {
    const command = new PutComponentPolicyCommand(args);
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
   * <p>Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared. </p>
   */
  public putImagePolicy(
    args: PutImagePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutImagePolicyCommandOutput>;
  public putImagePolicy(
    args: PutImagePolicyCommandInput,
    cb: (err: any, data?: PutImagePolicyCommandOutput) => void
  ): void;
  public putImagePolicy(
    args: PutImagePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutImagePolicyCommandOutput) => void
  ): void;
  public putImagePolicy(
    args: PutImagePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutImagePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutImagePolicyCommandOutput) => void
  ): Promise<PutImagePolicyCommandOutput> | void {
    const command = new PutImagePolicyCommand(args);
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
   * <p> Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared. </p>
   */
  public putImageRecipePolicy(
    args: PutImageRecipePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutImageRecipePolicyCommandOutput>;
  public putImageRecipePolicy(
    args: PutImageRecipePolicyCommandInput,
    cb: (err: any, data?: PutImageRecipePolicyCommandOutput) => void
  ): void;
  public putImageRecipePolicy(
    args: PutImageRecipePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutImageRecipePolicyCommandOutput) => void
  ): void;
  public putImageRecipePolicy(
    args: PutImageRecipePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutImageRecipePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutImageRecipePolicyCommandOutput) => void
  ): Promise<PutImageRecipePolicyCommandOutput> | void {
    const command = new PutImageRecipePolicyCommand(args);
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
   * <p> Manually triggers a pipeline to create an image. </p>
   */
  public startImagePipelineExecution(
    args: StartImagePipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImagePipelineExecutionCommandOutput>;
  public startImagePipelineExecution(
    args: StartImagePipelineExecutionCommandInput,
    cb: (err: any, data?: StartImagePipelineExecutionCommandOutput) => void
  ): void;
  public startImagePipelineExecution(
    args: StartImagePipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImagePipelineExecutionCommandOutput) => void
  ): void;
  public startImagePipelineExecution(
    args: StartImagePipelineExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartImagePipelineExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartImagePipelineExecutionCommandOutput) => void
  ): Promise<StartImagePipelineExecutionCommandOutput> | void {
    const command = new StartImagePipelineExecutionCommand(args);
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
   * <p> Adds a tag to a resource. </p>
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
   * <p> Removes a tag from a resource. </p>
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
   * <p> Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline. </p>
   */
  public updateDistributionConfiguration(
    args: UpdateDistributionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDistributionConfigurationCommandOutput>;
  public updateDistributionConfiguration(
    args: UpdateDistributionConfigurationCommandInput,
    cb: (err: any, data?: UpdateDistributionConfigurationCommandOutput) => void
  ): void;
  public updateDistributionConfiguration(
    args: UpdateDistributionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDistributionConfigurationCommandOutput) => void
  ): void;
  public updateDistributionConfiguration(
    args: UpdateDistributionConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDistributionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateDistributionConfigurationCommandOutput) => void
  ): Promise<UpdateDistributionConfigurationCommandOutput> | void {
    const command = new UpdateDistributionConfigurationCommand(args);
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
   * <p> Updates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images. </p>
   */
  public updateImagePipeline(
    args: UpdateImagePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateImagePipelineCommandOutput>;
  public updateImagePipeline(
    args: UpdateImagePipelineCommandInput,
    cb: (err: any, data?: UpdateImagePipelineCommandOutput) => void
  ): void;
  public updateImagePipeline(
    args: UpdateImagePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateImagePipelineCommandOutput) => void
  ): void;
  public updateImagePipeline(
    args: UpdateImagePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateImagePipelineCommandOutput) => void),
    cb?: (err: any, data?: UpdateImagePipelineCommandOutput) => void
  ): Promise<UpdateImagePipelineCommandOutput> | void {
    const command = new UpdateImagePipelineCommand(args);
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
   * <p> Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested. </p>
   */
  public updateInfrastructureConfiguration(
    args: UpdateInfrastructureConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInfrastructureConfigurationCommandOutput>;
  public updateInfrastructureConfiguration(
    args: UpdateInfrastructureConfigurationCommandInput,
    cb: (err: any, data?: UpdateInfrastructureConfigurationCommandOutput) => void
  ): void;
  public updateInfrastructureConfiguration(
    args: UpdateInfrastructureConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInfrastructureConfigurationCommandOutput) => void
  ): void;
  public updateInfrastructureConfiguration(
    args: UpdateInfrastructureConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateInfrastructureConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateInfrastructureConfigurationCommandOutput) => void
  ): Promise<UpdateInfrastructureConfigurationCommandOutput> | void {
    const command = new UpdateInfrastructureConfigurationCommand(args);
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
