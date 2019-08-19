import { CloudHSMClient } from "./CloudHSMClient";
import { AddTagsToResourceInput } from "./types/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./types/AddTagsToResourceOutput";
import { CloudHsmInternalException } from "./types/CloudHsmInternalException";
import { CloudHsmServiceException } from "./types/CloudHsmServiceException";
import { CreateHapgInput } from "./types/CreateHapgInput";
import { CreateHapgOutput } from "./types/CreateHapgOutput";
import { CreateHsmInput } from "./types/CreateHsmInput";
import { CreateHsmOutput } from "./types/CreateHsmOutput";
import { CreateLunaClientInput } from "./types/CreateLunaClientInput";
import { CreateLunaClientOutput } from "./types/CreateLunaClientOutput";
import { DeleteHapgInput } from "./types/DeleteHapgInput";
import { DeleteHapgOutput } from "./types/DeleteHapgOutput";
import { DeleteHsmInput } from "./types/DeleteHsmInput";
import { DeleteHsmOutput } from "./types/DeleteHsmOutput";
import { DeleteLunaClientInput } from "./types/DeleteLunaClientInput";
import { DeleteLunaClientOutput } from "./types/DeleteLunaClientOutput";
import { DescribeHapgInput } from "./types/DescribeHapgInput";
import { DescribeHapgOutput } from "./types/DescribeHapgOutput";
import { DescribeHsmInput } from "./types/DescribeHsmInput";
import { DescribeHsmOutput } from "./types/DescribeHsmOutput";
import { DescribeLunaClientInput } from "./types/DescribeLunaClientInput";
import { DescribeLunaClientOutput } from "./types/DescribeLunaClientOutput";
import { GetConfigInput } from "./types/GetConfigInput";
import { GetConfigOutput } from "./types/GetConfigOutput";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListAvailableZonesInput } from "./types/ListAvailableZonesInput";
import { ListAvailableZonesOutput } from "./types/ListAvailableZonesOutput";
import { ListHapgsInput } from "./types/ListHapgsInput";
import { ListHapgsOutput } from "./types/ListHapgsOutput";
import { ListHsmsInput } from "./types/ListHsmsInput";
import { ListHsmsOutput } from "./types/ListHsmsOutput";
import { ListLunaClientsInput } from "./types/ListLunaClientsInput";
import { ListLunaClientsOutput } from "./types/ListLunaClientsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ModifyHapgInput } from "./types/ModifyHapgInput";
import { ModifyHapgOutput } from "./types/ModifyHapgOutput";
import { ModifyHsmInput } from "./types/ModifyHsmInput";
import { ModifyHsmOutput } from "./types/ModifyHsmOutput";
import { ModifyLunaClientInput } from "./types/ModifyLunaClientInput";
import { ModifyLunaClientOutput } from "./types/ModifyLunaClientOutput";
import { RemoveTagsFromResourceInput } from "./types/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "./types/RemoveTagsFromResourceOutput";
import { AddTagsToResourceCommand } from "./commands/AddTagsToResourceCommand";
import { CreateHapgCommand } from "./commands/CreateHapgCommand";
import { CreateHsmCommand } from "./commands/CreateHsmCommand";
import { CreateLunaClientCommand } from "./commands/CreateLunaClientCommand";
import { DeleteHapgCommand } from "./commands/DeleteHapgCommand";
import { DeleteHsmCommand } from "./commands/DeleteHsmCommand";
import { DeleteLunaClientCommand } from "./commands/DeleteLunaClientCommand";
import { DescribeHapgCommand } from "./commands/DescribeHapgCommand";
import { DescribeHsmCommand } from "./commands/DescribeHsmCommand";
import { DescribeLunaClientCommand } from "./commands/DescribeLunaClientCommand";
import { GetConfigCommand } from "./commands/GetConfigCommand";
import { ListAvailableZonesCommand } from "./commands/ListAvailableZonesCommand";
import { ListHapgsCommand } from "./commands/ListHapgsCommand";
import { ListHsmsCommand } from "./commands/ListHsmsCommand";
import { ListLunaClientsCommand } from "./commands/ListLunaClientsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ModifyHapgCommand } from "./commands/ModifyHapgCommand";
import { ModifyHsmCommand } from "./commands/ModifyHsmCommand";
import { ModifyLunaClientCommand } from "./commands/ModifyLunaClientCommand";
import { RemoveTagsFromResourceCommand } from "./commands/RemoveTagsFromResourceCommand";

export class CloudHSM extends CloudHSMClient {
  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Adds or overwrites one or more tags for the specified AWS CloudHSM resource.</p> <p>Each tag consists of a key and a value. Tag keys must be unique to each resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTagsToResource(
    args: AddTagsToResourceInput
  ): Promise<AddTagsToResourceOutput>;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb: (err: any, data?: AddTagsToResourceOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb?: (err: any, data?: AddTagsToResourceOutput) => void
  ): Promise<AddTagsToResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsToResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHapg(args: CreateHapgInput): Promise<CreateHapgOutput>;
  public createHapg(
    args: CreateHapgInput,
    cb: (err: any, data?: CreateHapgOutput) => void
  ): void;
  public createHapg(
    args: CreateHapgInput,
    cb?: (err: any, data?: CreateHapgOutput) => void
  ): Promise<CreateHapgOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHapgCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an uninitialized HSM instance.</p> <p>There is an upfront fee charged for each HSM instance that you create with the <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>, create a new case, and select <b>Account and Billing Support</b>.</p> <important> <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be initialized when the status changes to <code>RUNNING</code>.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHsm(args: CreateHsmInput): Promise<CreateHsmOutput>;
  public createHsm(
    args: CreateHsmInput,
    cb: (err: any, data?: CreateHsmOutput) => void
  ): void;
  public createHsm(
    args: CreateHsmInput,
    cb?: (err: any, data?: CreateHsmOutput) => void
  ): Promise<CreateHsmOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHsmCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Creates an HSM client.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLunaClient(
    args: CreateLunaClientInput
  ): Promise<CreateLunaClientOutput>;
  public createLunaClient(
    args: CreateLunaClientInput,
    cb: (err: any, data?: CreateLunaClientOutput) => void
  ): void;
  public createLunaClient(
    args: CreateLunaClientInput,
    cb?: (err: any, data?: CreateLunaClientOutput) => void
  ): Promise<CreateLunaClientOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLunaClientCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a high-availability partition group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteHapg(args: DeleteHapgInput): Promise<DeleteHapgOutput>;
  public deleteHapg(
    args: DeleteHapgInput,
    cb: (err: any, data?: DeleteHapgOutput) => void
  ): void;
  public deleteHapg(
    args: DeleteHapgInput,
    cb?: (err: any, data?: DeleteHapgOutput) => void
  ): Promise<DeleteHapgOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteHapgCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteHsm(args: DeleteHsmInput): Promise<DeleteHsmOutput>;
  public deleteHsm(
    args: DeleteHsmInput,
    cb: (err: any, data?: DeleteHsmOutput) => void
  ): void;
  public deleteHsm(
    args: DeleteHsmInput,
    cb?: (err: any, data?: DeleteHsmOutput) => void
  ): Promise<DeleteHsmOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteHsmCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Deletes a client.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLunaClient(
    args: DeleteLunaClientInput
  ): Promise<DeleteLunaClientOutput>;
  public deleteLunaClient(
    args: DeleteLunaClientInput,
    cb: (err: any, data?: DeleteLunaClientOutput) => void
  ): void;
  public deleteLunaClient(
    args: DeleteLunaClientInput,
    cb?: (err: any, data?: DeleteLunaClientOutput) => void
  ): Promise<DeleteLunaClientOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLunaClientCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about a high-availability partition group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeHapg(args: DescribeHapgInput): Promise<DescribeHapgOutput>;
  public describeHapg(
    args: DescribeHapgInput,
    cb: (err: any, data?: DescribeHapgOutput) => void
  ): void;
  public describeHapg(
    args: DescribeHapgInput,
    cb?: (err: any, data?: DescribeHapgOutput) => void
  ): Promise<DescribeHapgOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeHapgCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeHsm(args: DescribeHsmInput): Promise<DescribeHsmOutput>;
  public describeHsm(
    args: DescribeHsmInput,
    cb: (err: any, data?: DescribeHsmOutput) => void
  ): void;
  public describeHsm(
    args: DescribeHsmInput,
    cb?: (err: any, data?: DescribeHsmOutput) => void
  ): Promise<DescribeHsmOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeHsmCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM client.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLunaClient(
    args: DescribeLunaClientInput
  ): Promise<DescribeLunaClientOutput>;
  public describeLunaClient(
    args: DescribeLunaClientInput,
    cb: (err: any, data?: DescribeLunaClientOutput) => void
  ): void;
  public describeLunaClient(
    args: DescribeLunaClientInput,
    cb?: (err: any, data?: DescribeLunaClientOutput) => void
  ): Promise<DescribeLunaClientOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLunaClientCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Gets the configuration files necessary to connect to all high availability partition groups the client is associated with.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConfig(args: GetConfigInput): Promise<GetConfigOutput>;
  public getConfig(
    args: GetConfigInput,
    cb: (err: any, data?: GetConfigOutput) => void
  ): void;
  public getConfig(
    args: GetConfigInput,
    cb?: (err: any, data?: GetConfigOutput) => void
  ): Promise<GetConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAvailableZones(
    args: ListAvailableZonesInput
  ): Promise<ListAvailableZonesOutput>;
  public listAvailableZones(
    args: ListAvailableZonesInput,
    cb: (err: any, data?: ListAvailableZonesOutput) => void
  ): void;
  public listAvailableZones(
    args: ListAvailableZonesInput,
    cb?: (err: any, data?: ListAvailableZonesOutput) => void
  ): Promise<ListAvailableZonesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAvailableZonesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists the high-availability partition groups for the account.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHapgs</code> to retrieve the next set of items.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listHapgs(args: ListHapgsInput): Promise<ListHapgsOutput>;
  public listHapgs(
    args: ListHapgsInput,
    cb: (err: any, data?: ListHapgsOutput) => void
  ): void;
  public listHapgs(
    args: ListHapgsInput,
    cb?: (err: any, data?: ListHapgsOutput) => void
  ): Promise<ListHapgsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListHapgsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Retrieves the identifiers of all of the HSMs provisioned for the current customer.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of items.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listHsms(args: ListHsmsInput): Promise<ListHsmsOutput>;
  public listHsms(
    args: ListHsmsInput,
    cb: (err: any, data?: ListHsmsOutput) => void
  ): void;
  public listHsms(
    args: ListHsmsInput,
    cb?: (err: any, data?: ListHsmsOutput) => void
  ): Promise<ListHsmsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListHsmsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Lists all of the clients.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set of items.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLunaClients(
    args: ListLunaClientsInput
  ): Promise<ListLunaClientsOutput>;
  public listLunaClients(
    args: ListLunaClientsInput,
    cb: (err: any, data?: ListLunaClientsOutput) => void
  ): void;
  public listLunaClients(
    args: ListLunaClientsInput,
    cb?: (err: any, data?: ListLunaClientsOutput) => void
  ): Promise<ListLunaClientsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLunaClientsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Returns a list of all tags for the specified AWS CloudHSM resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an existing high-availability partition group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyHapg(args: ModifyHapgInput): Promise<ModifyHapgOutput>;
  public modifyHapg(
    args: ModifyHapgInput,
    cb: (err: any, data?: ModifyHapgOutput) => void
  ): void;
  public modifyHapg(
    args: ModifyHapgInput,
    cb?: (err: any, data?: ModifyHapgOutput) => void
  ): Promise<ModifyHapgOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyHapgCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies an HSM.</p> <important> <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyHsm(args: ModifyHsmInput): Promise<ModifyHsmOutput>;
  public modifyHsm(
    args: ModifyHsmInput,
    cb: (err: any, data?: ModifyHsmOutput) => void
  ): void;
  public modifyHsm(
    args: ModifyHsmInput,
    cb?: (err: any, data?: ModifyHsmOutput) => void
  ): Promise<ModifyHsmOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyHsmCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Modifies the certificate used by the client.</p> <p>This action can potentially start a workflow to install the new certificate on the client's HSMs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyLunaClient(
    args: ModifyLunaClientInput
  ): Promise<ModifyLunaClientOutput>;
  public modifyLunaClient(
    args: ModifyLunaClientInput,
    cb: (err: any, data?: ModifyLunaClientOutput) => void
  ): void;
  public modifyLunaClient(
    args: ModifyLunaClientInput,
    cb?: (err: any, data?: ModifyLunaClientOutput) => void
  ): Promise<ModifyLunaClientOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyLunaClientCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM Classic FAQs</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS CloudHSM Classic User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the <a href="http://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>, and the <a href="http://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API Reference</a>.</p> <p>Removes one or more tags from the specified AWS CloudHSM resource.</p> <p>To remove a tag, specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use <a>AddTagsToResource</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmServiceException} <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
   *   - {CloudHsmInternalException} <p>Indicates that an internal error occurred.</p>
   *   - {InvalidRequestException} <p>Indicates that one or more of the request parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput
  ): Promise<RemoveTagsFromResourceOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb?: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): Promise<RemoveTagsFromResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
