import { MediaConvertClient } from "./MediaConvertClient";
import { AssociateCertificateInput } from "./types/AssociateCertificateInput";
import { AssociateCertificateOutput } from "./types/AssociateCertificateOutput";
import { BadRequestException } from "./types/BadRequestException";
import { CancelJobInput } from "./types/CancelJobInput";
import { CancelJobOutput } from "./types/CancelJobOutput";
import { ConflictException } from "./types/ConflictException";
import { CreateJobInput } from "./types/CreateJobInput";
import { CreateJobOutput } from "./types/CreateJobOutput";
import { CreateJobTemplateInput } from "./types/CreateJobTemplateInput";
import { CreateJobTemplateOutput } from "./types/CreateJobTemplateOutput";
import { CreatePresetInput } from "./types/CreatePresetInput";
import { CreatePresetOutput } from "./types/CreatePresetOutput";
import { CreateQueueInput } from "./types/CreateQueueInput";
import { CreateQueueOutput } from "./types/CreateQueueOutput";
import { DeleteJobTemplateInput } from "./types/DeleteJobTemplateInput";
import { DeleteJobTemplateOutput } from "./types/DeleteJobTemplateOutput";
import { DeletePresetInput } from "./types/DeletePresetInput";
import { DeletePresetOutput } from "./types/DeletePresetOutput";
import { DeleteQueueInput } from "./types/DeleteQueueInput";
import { DeleteQueueOutput } from "./types/DeleteQueueOutput";
import { DescribeEndpointsInput } from "./types/DescribeEndpointsInput";
import { DescribeEndpointsOutput } from "./types/DescribeEndpointsOutput";
import { DisassociateCertificateInput } from "./types/DisassociateCertificateInput";
import { DisassociateCertificateOutput } from "./types/DisassociateCertificateOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { GetJobInput } from "./types/GetJobInput";
import { GetJobOutput } from "./types/GetJobOutput";
import { GetJobTemplateInput } from "./types/GetJobTemplateInput";
import { GetJobTemplateOutput } from "./types/GetJobTemplateOutput";
import { GetPresetInput } from "./types/GetPresetInput";
import { GetPresetOutput } from "./types/GetPresetOutput";
import { GetQueueInput } from "./types/GetQueueInput";
import { GetQueueOutput } from "./types/GetQueueOutput";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { ListJobTemplatesInput } from "./types/ListJobTemplatesInput";
import { ListJobTemplatesOutput } from "./types/ListJobTemplatesOutput";
import { ListJobsInput } from "./types/ListJobsInput";
import { ListJobsOutput } from "./types/ListJobsOutput";
import { ListPresetsInput } from "./types/ListPresetsInput";
import { ListPresetsOutput } from "./types/ListPresetsOutput";
import { ListQueuesInput } from "./types/ListQueuesInput";
import { ListQueuesOutput } from "./types/ListQueuesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { NotFoundException } from "./types/NotFoundException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateJobTemplateInput } from "./types/UpdateJobTemplateInput";
import { UpdateJobTemplateOutput } from "./types/UpdateJobTemplateOutput";
import { UpdatePresetInput } from "./types/UpdatePresetInput";
import { UpdatePresetOutput } from "./types/UpdatePresetOutput";
import { UpdateQueueInput } from "./types/UpdateQueueInput";
import { UpdateQueueOutput } from "./types/UpdateQueueOutput";
import { AssociateCertificateCommand } from "./commands/AssociateCertificateCommand";
import { CancelJobCommand } from "./commands/CancelJobCommand";
import { CreateJobCommand } from "./commands/CreateJobCommand";
import { CreateJobTemplateCommand } from "./commands/CreateJobTemplateCommand";
import { CreatePresetCommand } from "./commands/CreatePresetCommand";
import { CreateQueueCommand } from "./commands/CreateQueueCommand";
import { DeleteJobTemplateCommand } from "./commands/DeleteJobTemplateCommand";
import { DeletePresetCommand } from "./commands/DeletePresetCommand";
import { DeleteQueueCommand } from "./commands/DeleteQueueCommand";
import { DescribeEndpointsCommand } from "./commands/DescribeEndpointsCommand";
import { DisassociateCertificateCommand } from "./commands/DisassociateCertificateCommand";
import { GetJobCommand } from "./commands/GetJobCommand";
import { GetJobTemplateCommand } from "./commands/GetJobTemplateCommand";
import { GetPresetCommand } from "./commands/GetPresetCommand";
import { GetQueueCommand } from "./commands/GetQueueCommand";
import { ListJobTemplatesCommand } from "./commands/ListJobTemplatesCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { ListPresetsCommand } from "./commands/ListPresetsCommand";
import { ListQueuesCommand } from "./commands/ListQueuesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateJobTemplateCommand } from "./commands/UpdateJobTemplateCommand";
import { UpdatePresetCommand } from "./commands/UpdatePresetCommand";
import { UpdateQueueCommand } from "./commands/UpdateQueueCommand";

export class MediaConvert extends MediaConvertClient {
  /**
   * Associates an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateCertificate(
    args: AssociateCertificateInput
  ): Promise<AssociateCertificateOutput>;
  public associateCertificate(
    args: AssociateCertificateInput,
    cb: (err: any, data?: AssociateCertificateOutput) => void
  ): void;
  public associateCertificate(
    args: AssociateCertificateInput,
    cb?: (err: any, data?: AssociateCertificateOutput) => void
  ): Promise<AssociateCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Permanently cancel a job. Once you have canceled a job, you can't start it again.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelJob(args: CancelJobInput): Promise<CancelJobOutput>;
  public cancelJob(
    args: CancelJobInput,
    cb: (err: any, data?: CancelJobOutput) => void
  ): void;
  public cancelJob(
    args: CancelJobInput,
    cb?: (err: any, data?: CancelJobOutput) => void
  ): Promise<CancelJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Create a new transcoding job. For information about jobs and job settings, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createJob(args: CreateJobInput): Promise<CreateJobOutput>;
  public createJob(
    args: CreateJobInput,
    cb: (err: any, data?: CreateJobOutput) => void
  ): void;
  public createJob(
    args: CreateJobInput,
    cb?: (err: any, data?: CreateJobOutput) => void
  ): Promise<CreateJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createJobTemplate(
    args: CreateJobTemplateInput
  ): Promise<CreateJobTemplateOutput>;
  public createJobTemplate(
    args: CreateJobTemplateInput,
    cb: (err: any, data?: CreateJobTemplateOutput) => void
  ): void;
  public createJobTemplate(
    args: CreateJobTemplateInput,
    cb?: (err: any, data?: CreateJobTemplateOutput) => void
  ): Promise<CreateJobTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateJobTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Create a new preset. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPreset(args: CreatePresetInput): Promise<CreatePresetOutput>;
  public createPreset(
    args: CreatePresetInput,
    cb: (err: any, data?: CreatePresetOutput) => void
  ): void;
  public createPreset(
    args: CreatePresetInput,
    cb?: (err: any, data?: CreatePresetOutput) => void
  ): Promise<CreatePresetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePresetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createQueue(args: CreateQueueInput): Promise<CreateQueueOutput>;
  public createQueue(
    args: CreateQueueInput,
    cb: (err: any, data?: CreateQueueOutput) => void
  ): void;
  public createQueue(
    args: CreateQueueInput,
    cb?: (err: any, data?: CreateQueueOutput) => void
  ): Promise<CreateQueueOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateQueueCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Permanently delete a job template you have created.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteJobTemplate(
    args: DeleteJobTemplateInput
  ): Promise<DeleteJobTemplateOutput>;
  public deleteJobTemplate(
    args: DeleteJobTemplateInput,
    cb: (err: any, data?: DeleteJobTemplateOutput) => void
  ): void;
  public deleteJobTemplate(
    args: DeleteJobTemplateInput,
    cb?: (err: any, data?: DeleteJobTemplateOutput) => void
  ): Promise<DeleteJobTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteJobTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Permanently delete a preset you have created.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePreset(args: DeletePresetInput): Promise<DeletePresetOutput>;
  public deletePreset(
    args: DeletePresetInput,
    cb: (err: any, data?: DeletePresetOutput) => void
  ): void;
  public deletePreset(
    args: DeletePresetInput,
    cb?: (err: any, data?: DeletePresetOutput) => void
  ): Promise<DeletePresetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePresetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Permanently delete a queue you have created.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteQueue(args: DeleteQueueInput): Promise<DeleteQueueOutput>;
  public deleteQueue(
    args: DeleteQueueInput,
    cb: (err: any, data?: DeleteQueueOutput) => void
  ): void;
  public deleteQueue(
    args: DeleteQueueInput,
    cb?: (err: any, data?: DeleteQueueOutput) => void
  ): Promise<DeleteQueueOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteQueueCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Send an request with an empty body to the regional API endpoint to get your account API endpoint.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEndpoints(
    args: DescribeEndpointsInput
  ): Promise<DescribeEndpointsOutput>;
  public describeEndpoints(
    args: DescribeEndpointsInput,
    cb: (err: any, data?: DescribeEndpointsOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsInput,
    cb?: (err: any, data?: DescribeEndpointsOutput) => void
  ): Promise<DescribeEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateCertificate(
    args: DisassociateCertificateInput
  ): Promise<DisassociateCertificateOutput>;
  public disassociateCertificate(
    args: DisassociateCertificateInput,
    cb: (err: any, data?: DisassociateCertificateOutput) => void
  ): void;
  public disassociateCertificate(
    args: DisassociateCertificateInput,
    cb?: (err: any, data?: DisassociateCertificateOutput) => void
  ): Promise<DisassociateCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieve the JSON for a specific completed transcoding job.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJob(args: GetJobInput): Promise<GetJobOutput>;
  public getJob(
    args: GetJobInput,
    cb: (err: any, data?: GetJobOutput) => void
  ): void;
  public getJob(
    args: GetJobInput,
    cb?: (err: any, data?: GetJobOutput) => void
  ): Promise<GetJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieve the JSON for a specific job template.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJobTemplate(
    args: GetJobTemplateInput
  ): Promise<GetJobTemplateOutput>;
  public getJobTemplate(
    args: GetJobTemplateInput,
    cb: (err: any, data?: GetJobTemplateOutput) => void
  ): void;
  public getJobTemplate(
    args: GetJobTemplateInput,
    cb?: (err: any, data?: GetJobTemplateOutput) => void
  ): Promise<GetJobTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieve the JSON for a specific preset.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPreset(args: GetPresetInput): Promise<GetPresetOutput>;
  public getPreset(
    args: GetPresetInput,
    cb: (err: any, data?: GetPresetOutput) => void
  ): void;
  public getPreset(
    args: GetPresetInput,
    cb?: (err: any, data?: GetPresetOutput) => void
  ): Promise<GetPresetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPresetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieve the JSON for a specific queue.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getQueue(args: GetQueueInput): Promise<GetQueueOutput>;
  public getQueue(
    args: GetQueueInput,
    cb: (err: any, data?: GetQueueOutput) => void
  ): void;
  public getQueue(
    args: GetQueueInput,
    cb?: (err: any, data?: GetQueueOutput) => void
  ): Promise<GetQueueOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetQueueCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobTemplates(
    args: ListJobTemplatesInput
  ): Promise<ListJobTemplatesOutput>;
  public listJobTemplates(
    args: ListJobTemplatesInput,
    cb: (err: any, data?: ListJobTemplatesOutput) => void
  ): void;
  public listJobTemplates(
    args: ListJobTemplatesInput,
    cb?: (err: any, data?: ListJobTemplatesOutput) => void
  ): Promise<ListJobTemplatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobTemplatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobs(args: ListJobsInput): Promise<ListJobsOutput>;
  public listJobs(
    args: ListJobsInput,
    cb: (err: any, data?: ListJobsOutput) => void
  ): void;
  public listJobs(
    args: ListJobsInput,
    cb?: (err: any, data?: ListJobsOutput) => void
  ): Promise<ListJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPresets(args: ListPresetsInput): Promise<ListPresetsOutput>;
  public listPresets(
    args: ListPresetsInput,
    cb: (err: any, data?: ListPresetsOutput) => void
  ): void;
  public listPresets(
    args: ListPresetsInput,
    cb?: (err: any, data?: ListPresetsOutput) => void
  ): Promise<ListPresetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPresetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listQueues(args: ListQueuesInput): Promise<ListQueuesOutput>;
  public listQueues(
    args: ListQueuesInput,
    cb: (err: any, data?: ListQueuesOutput) => void
  ): void;
  public listQueues(
    args: ListQueuesInput,
    cb?: (err: any, data?: ListQueuesOutput) => void
  ): Promise<ListQueuesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListQueuesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Retrieve the tags for a MediaConvert resource.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Add tags to a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Remove tags from a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Modify one of your existing job templates.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateJobTemplate(
    args: UpdateJobTemplateInput
  ): Promise<UpdateJobTemplateOutput>;
  public updateJobTemplate(
    args: UpdateJobTemplateInput,
    cb: (err: any, data?: UpdateJobTemplateOutput) => void
  ): void;
  public updateJobTemplate(
    args: UpdateJobTemplateInput,
    cb?: (err: any, data?: UpdateJobTemplateOutput) => void
  ): Promise<UpdateJobTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateJobTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Modify one of your existing presets.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePreset(args: UpdatePresetInput): Promise<UpdatePresetOutput>;
  public updatePreset(
    args: UpdatePresetInput,
    cb: (err: any, data?: UpdatePresetOutput) => void
  ): void;
  public updatePreset(
    args: UpdatePresetInput,
    cb?: (err: any, data?: UpdatePresetOutput) => void
  ): Promise<UpdatePresetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePresetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Modify one of your existing queues.
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} The service can't process your request because of a problem in the request. Please check your request form and syntax.
   *   - {InternalServerErrorException} The service encountered an unexpected condition and can't fulfill your request.
   *   - {ForbiddenException} You don't have permissions for this action with the credentials you sent.
   *   - {NotFoundException} The resource you requested doesn't exist.
   *   - {TooManyRequestsException} Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
   *   - {ConflictException} The service couldn't complete your request because there is a conflict with the current state of the resource.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateQueue(args: UpdateQueueInput): Promise<UpdateQueueOutput>;
  public updateQueue(
    args: UpdateQueueInput,
    cb: (err: any, data?: UpdateQueueOutput) => void
  ): void;
  public updateQueue(
    args: UpdateQueueInput,
    cb?: (err: any, data?: UpdateQueueOutput) => void
  ): Promise<UpdateQueueOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateQueueCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
