import { ApplicationInsightsClient } from "./ApplicationInsightsClient";
import { BadRequestException } from "./types/BadRequestException";
import { CreateApplicationInput } from "./types/CreateApplicationInput";
import { CreateApplicationOutput } from "./types/CreateApplicationOutput";
import { CreateComponentInput } from "./types/CreateComponentInput";
import { CreateComponentOutput } from "./types/CreateComponentOutput";
import { DeleteApplicationInput } from "./types/DeleteApplicationInput";
import { DeleteApplicationOutput } from "./types/DeleteApplicationOutput";
import { DeleteComponentInput } from "./types/DeleteComponentInput";
import { DeleteComponentOutput } from "./types/DeleteComponentOutput";
import { DescribeApplicationInput } from "./types/DescribeApplicationInput";
import { DescribeApplicationOutput } from "./types/DescribeApplicationOutput";
import { DescribeComponentConfigurationInput } from "./types/DescribeComponentConfigurationInput";
import { DescribeComponentConfigurationOutput } from "./types/DescribeComponentConfigurationOutput";
import { DescribeComponentConfigurationRecommendationInput } from "./types/DescribeComponentConfigurationRecommendationInput";
import { DescribeComponentConfigurationRecommendationOutput } from "./types/DescribeComponentConfigurationRecommendationOutput";
import { DescribeComponentInput } from "./types/DescribeComponentInput";
import { DescribeComponentOutput } from "./types/DescribeComponentOutput";
import { DescribeObservationInput } from "./types/DescribeObservationInput";
import { DescribeObservationOutput } from "./types/DescribeObservationOutput";
import { DescribeProblemInput } from "./types/DescribeProblemInput";
import { DescribeProblemObservationsInput } from "./types/DescribeProblemObservationsInput";
import { DescribeProblemObservationsOutput } from "./types/DescribeProblemObservationsOutput";
import { DescribeProblemOutput } from "./types/DescribeProblemOutput";
import { InternalServerException } from "./types/InternalServerException";
import { ListApplicationsInput } from "./types/ListApplicationsInput";
import { ListApplicationsOutput } from "./types/ListApplicationsOutput";
import { ListComponentsInput } from "./types/ListComponentsInput";
import { ListComponentsOutput } from "./types/ListComponentsOutput";
import { ListProblemsInput } from "./types/ListProblemsInput";
import { ListProblemsOutput } from "./types/ListProblemsOutput";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { UpdateComponentConfigurationInput } from "./types/UpdateComponentConfigurationInput";
import { UpdateComponentConfigurationOutput } from "./types/UpdateComponentConfigurationOutput";
import { UpdateComponentInput } from "./types/UpdateComponentInput";
import { UpdateComponentOutput } from "./types/UpdateComponentOutput";
import { ValidationException } from "./types/ValidationException";
import { CreateApplicationCommand } from "./commands/CreateApplicationCommand";
import { CreateComponentCommand } from "./commands/CreateComponentCommand";
import { DeleteApplicationCommand } from "./commands/DeleteApplicationCommand";
import { DeleteComponentCommand } from "./commands/DeleteComponentCommand";
import { DescribeApplicationCommand } from "./commands/DescribeApplicationCommand";
import { DescribeComponentCommand } from "./commands/DescribeComponentCommand";
import { DescribeComponentConfigurationCommand } from "./commands/DescribeComponentConfigurationCommand";
import { DescribeComponentConfigurationRecommendationCommand } from "./commands/DescribeComponentConfigurationRecommendationCommand";
import { DescribeObservationCommand } from "./commands/DescribeObservationCommand";
import { DescribeProblemCommand } from "./commands/DescribeProblemCommand";
import { DescribeProblemObservationsCommand } from "./commands/DescribeProblemObservationsCommand";
import { ListApplicationsCommand } from "./commands/ListApplicationsCommand";
import { ListComponentsCommand } from "./commands/ListComponentsCommand";
import { ListProblemsCommand } from "./commands/ListProblemsCommand";
import { UpdateComponentCommand } from "./commands/UpdateComponentCommand";
import { UpdateComponentConfigurationCommand } from "./commands/UpdateComponentConfigurationCommand";

export class ApplicationInsights extends ApplicationInsightsClient {
  /**
   * <p>Adds an application that is created from a resource group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The resource is already created or in use.</p>
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApplication(
    args: CreateApplicationInput
  ): Promise<CreateApplicationOutput>;
  public createApplication(
    args: CreateApplicationInput,
    cb: (err: any, data?: CreateApplicationOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationInput,
    cb?: (err: any, data?: CreateApplicationOutput) => void
  ): Promise<CreateApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a custom component by grouping similar standalone instances to monitor.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The resource is already created or in use.</p>
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createComponent(
    args: CreateComponentInput
  ): Promise<CreateComponentOutput>;
  public createComponent(
    args: CreateComponentInput,
    cb: (err: any, data?: CreateComponentOutput) => void
  ): void;
  public createComponent(
    args: CreateComponentInput,
    cb?: (err: any, data?: CreateComponentOutput) => void
  ): Promise<CreateComponentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateComponentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified application from monitoring. Does not delete the application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {BadRequestException} <p>The request is not understood by the server.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApplication(
    args: DeleteApplicationInput
  ): Promise<DeleteApplicationOutput>;
  public deleteApplication(
    args: DeleteApplicationInput,
    cb: (err: any, data?: DeleteApplicationOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationInput,
    cb?: (err: any, data?: DeleteApplicationOutput) => void
  ): Promise<DeleteApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteComponent(
    args: DeleteComponentInput
  ): Promise<DeleteComponentOutput>;
  public deleteComponent(
    args: DeleteComponentInput,
    cb: (err: any, data?: DeleteComponentOutput) => void
  ): void;
  public deleteComponent(
    args: DeleteComponentInput,
    cb?: (err: any, data?: DeleteComponentOutput) => void
  ): Promise<DeleteComponentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteComponentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeApplication(
    args: DescribeApplicationInput
  ): Promise<DescribeApplicationOutput>;
  public describeApplication(
    args: DescribeApplicationInput,
    cb: (err: any, data?: DescribeApplicationOutput) => void
  ): void;
  public describeApplication(
    args: DescribeApplicationInput,
    cb?: (err: any, data?: DescribeApplicationOutput) => void
  ): Promise<DescribeApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a component and lists the resources that are grouped together in a component.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeComponent(
    args: DescribeComponentInput
  ): Promise<DescribeComponentOutput>;
  public describeComponent(
    args: DescribeComponentInput,
    cb: (err: any, data?: DescribeComponentOutput) => void
  ): void;
  public describeComponent(
    args: DescribeComponentInput,
    cb?: (err: any, data?: DescribeComponentOutput) => void
  ): Promise<DescribeComponentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeComponentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the monitoring configuration of the component.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeComponentConfiguration(
    args: DescribeComponentConfigurationInput
  ): Promise<DescribeComponentConfigurationOutput>;
  public describeComponentConfiguration(
    args: DescribeComponentConfigurationInput,
    cb: (err: any, data?: DescribeComponentConfigurationOutput) => void
  ): void;
  public describeComponentConfiguration(
    args: DescribeComponentConfigurationInput,
    cb?: (err: any, data?: DescribeComponentConfigurationOutput) => void
  ): Promise<DescribeComponentConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeComponentConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the recommended monitoring configuration of the component.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeComponentConfigurationRecommendation(
    args: DescribeComponentConfigurationRecommendationInput
  ): Promise<DescribeComponentConfigurationRecommendationOutput>;
  public describeComponentConfigurationRecommendation(
    args: DescribeComponentConfigurationRecommendationInput,
    cb: (
      err: any,
      data?: DescribeComponentConfigurationRecommendationOutput
    ) => void
  ): void;
  public describeComponentConfigurationRecommendation(
    args: DescribeComponentConfigurationRecommendationInput,
    cb?: (
      err: any,
      data?: DescribeComponentConfigurationRecommendationOutput
    ) => void
  ): Promise<DescribeComponentConfigurationRecommendationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeComponentConfigurationRecommendationCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an anomaly or error with the application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeObservation(
    args: DescribeObservationInput
  ): Promise<DescribeObservationOutput>;
  public describeObservation(
    args: DescribeObservationInput,
    cb: (err: any, data?: DescribeObservationOutput) => void
  ): void;
  public describeObservation(
    args: DescribeObservationInput,
    cb?: (err: any, data?: DescribeObservationOutput) => void
  ): Promise<DescribeObservationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeObservationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an application problem.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeProblem(
    args: DescribeProblemInput
  ): Promise<DescribeProblemOutput>;
  public describeProblem(
    args: DescribeProblemInput,
    cb: (err: any, data?: DescribeProblemOutput) => void
  ): void;
  public describeProblem(
    args: DescribeProblemInput,
    cb?: (err: any, data?: DescribeProblemOutput) => void
  ): Promise<DescribeProblemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeProblemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the anomalies or errors associated with the problem.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeProblemObservations(
    args: DescribeProblemObservationsInput
  ): Promise<DescribeProblemObservationsOutput>;
  public describeProblemObservations(
    args: DescribeProblemObservationsInput,
    cb: (err: any, data?: DescribeProblemObservationsOutput) => void
  ): void;
  public describeProblemObservations(
    args: DescribeProblemObservationsInput,
    cb?: (err: any, data?: DescribeProblemObservationsOutput) => void
  ): Promise<DescribeProblemObservationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeProblemObservationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the IDs of the applications that you are monitoring. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listApplications(
    args: ListApplicationsInput
  ): Promise<ListApplicationsOutput>;
  public listApplications(
    args: ListApplicationsInput,
    cb: (err: any, data?: ListApplicationsOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsInput,
    cb?: (err: any, data?: ListApplicationsOutput) => void
  ): Promise<ListApplicationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListApplicationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the auto-grouped, standalone, and custom components of the application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listComponents(
    args: ListComponentsInput
  ): Promise<ListComponentsOutput>;
  public listComponents(
    args: ListComponentsInput,
    cb: (err: any, data?: ListComponentsOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsInput,
    cb?: (err: any, data?: ListComponentsOutput) => void
  ): Promise<ListComponentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListComponentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the problems with your application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listProblems(args: ListProblemsInput): Promise<ListProblemsOutput>;
  public listProblems(
    args: ListProblemsInput,
    cb: (err: any, data?: ListProblemsOutput) => void
  ): void;
  public listProblems(
    args: ListProblemsInput,
    cb?: (err: any, data?: ListProblemsOutput) => void
  ): Promise<ListProblemsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListProblemsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the custom component name and/or the list of resources that make up the component.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The resource is already created or in use.</p>
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateComponent(
    args: UpdateComponentInput
  ): Promise<UpdateComponentOutput>;
  public updateComponent(
    args: UpdateComponentInput,
    cb: (err: any, data?: UpdateComponentOutput) => void
  ): void;
  public updateComponent(
    args: UpdateComponentInput,
    cb?: (err: any, data?: UpdateComponentOutput) => void
  ): Promise<UpdateComponentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateComponentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource does not exist in the customer account.</p>
   *   - {ValidationException} <p>The parameter is not valid.</p>
   *   - {InternalServerException} <p>The server encountered an internal error and is unable to complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateComponentConfiguration(
    args: UpdateComponentConfigurationInput
  ): Promise<UpdateComponentConfigurationOutput>;
  public updateComponentConfiguration(
    args: UpdateComponentConfigurationInput,
    cb: (err: any, data?: UpdateComponentConfigurationOutput) => void
  ): void;
  public updateComponentConfiguration(
    args: UpdateComponentConfigurationInput,
    cb?: (err: any, data?: UpdateComponentConfigurationOutput) => void
  ): Promise<UpdateComponentConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateComponentConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
