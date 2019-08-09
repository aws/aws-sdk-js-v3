import { DLMClient } from "./DLMClient";
import { CreateLifecyclePolicyInput } from "./types/CreateLifecyclePolicyInput";
import { CreateLifecyclePolicyOutput } from "./types/CreateLifecyclePolicyOutput";
import { DeleteLifecyclePolicyInput } from "./types/DeleteLifecyclePolicyInput";
import { DeleteLifecyclePolicyOutput } from "./types/DeleteLifecyclePolicyOutput";
import { GetLifecyclePoliciesInput } from "./types/GetLifecyclePoliciesInput";
import { GetLifecyclePoliciesOutput } from "./types/GetLifecyclePoliciesOutput";
import { GetLifecyclePolicyInput } from "./types/GetLifecyclePolicyInput";
import { GetLifecyclePolicyOutput } from "./types/GetLifecyclePolicyOutput";
import { InternalServerException } from "./types/InternalServerException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { UpdateLifecyclePolicyInput } from "./types/UpdateLifecyclePolicyInput";
import { UpdateLifecyclePolicyOutput } from "./types/UpdateLifecyclePolicyOutput";
import { CreateLifecyclePolicyCommand } from "./commands/CreateLifecyclePolicyCommand";
import { DeleteLifecyclePolicyCommand } from "./commands/DeleteLifecyclePolicyCommand";
import { GetLifecyclePoliciesCommand } from "./commands/GetLifecyclePoliciesCommand";
import { GetLifecyclePolicyCommand } from "./commands/GetLifecyclePolicyCommand";
import { UpdateLifecyclePolicyCommand } from "./commands/UpdateLifecyclePolicyCommand";

export class DLM extends DLMClient {
  /**
   * <p>Creates a policy to manage the lifecycle of the specified AWS resources. You can create up to 100 lifecycle policies.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>Bad request. The request is missing required parameters or has invalid parameters.</p>
   *   - {LimitExceededException} <p>The request failed because a limit was exceeded.</p>
   *   - {InternalServerException} <p>The service failed in an unexpected way.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLifecyclePolicy(
    args: CreateLifecyclePolicyInput
  ): Promise<CreateLifecyclePolicyOutput>;
  public createLifecyclePolicy(
    args: CreateLifecyclePolicyInput,
    cb: (err: any, data?: CreateLifecyclePolicyOutput) => void
  ): void;
  public createLifecyclePolicy(
    args: CreateLifecyclePolicyInput,
    cb?: (err: any, data?: CreateLifecyclePolicyOutput) => void
  ): Promise<CreateLifecyclePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLifecyclePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A requested resource was not found.</p>
   *   - {InternalServerException} <p>The service failed in an unexpected way.</p>
   *   - {LimitExceededException} <p>The request failed because a limit was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyInput
  ): Promise<DeleteLifecyclePolicyOutput>;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyInput,
    cb: (err: any, data?: DeleteLifecyclePolicyOutput) => void
  ): void;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyInput,
    cb?: (err: any, data?: DeleteLifecyclePolicyOutput) => void
  ): Promise<DeleteLifecyclePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLifecyclePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A requested resource was not found.</p>
   *   - {InvalidRequestException} <p>Bad request. The request is missing required parameters or has invalid parameters.</p>
   *   - {InternalServerException} <p>The service failed in an unexpected way.</p>
   *   - {LimitExceededException} <p>The request failed because a limit was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLifecyclePolicies(
    args: GetLifecyclePoliciesInput
  ): Promise<GetLifecyclePoliciesOutput>;
  public getLifecyclePolicies(
    args: GetLifecyclePoliciesInput,
    cb: (err: any, data?: GetLifecyclePoliciesOutput) => void
  ): void;
  public getLifecyclePolicies(
    args: GetLifecyclePoliciesInput,
    cb?: (err: any, data?: GetLifecyclePoliciesOutput) => void
  ): Promise<GetLifecyclePoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLifecyclePoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets detailed information about the specified lifecycle policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A requested resource was not found.</p>
   *   - {InternalServerException} <p>The service failed in an unexpected way.</p>
   *   - {LimitExceededException} <p>The request failed because a limit was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLifecyclePolicy(
    args: GetLifecyclePolicyInput
  ): Promise<GetLifecyclePolicyOutput>;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyInput,
    cb: (err: any, data?: GetLifecyclePolicyOutput) => void
  ): void;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyInput,
    cb?: (err: any, data?: GetLifecyclePolicyOutput) => void
  ): Promise<GetLifecyclePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLifecyclePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified lifecycle policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A requested resource was not found.</p>
   *   - {InvalidRequestException} <p>Bad request. The request is missing required parameters or has invalid parameters.</p>
   *   - {InternalServerException} <p>The service failed in an unexpected way.</p>
   *   - {LimitExceededException} <p>The request failed because a limit was exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateLifecyclePolicy(
    args: UpdateLifecyclePolicyInput
  ): Promise<UpdateLifecyclePolicyOutput>;
  public updateLifecyclePolicy(
    args: UpdateLifecyclePolicyInput,
    cb: (err: any, data?: UpdateLifecyclePolicyOutput) => void
  ): void;
  public updateLifecyclePolicy(
    args: UpdateLifecyclePolicyInput,
    cb?: (err: any, data?: UpdateLifecyclePolicyOutput) => void
  ): Promise<UpdateLifecyclePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateLifecyclePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
