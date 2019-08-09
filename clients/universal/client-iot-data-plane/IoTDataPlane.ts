import { IoTDataPlaneClient } from "./IoTDataPlaneClient";
import { ConflictException } from "./types/ConflictException";
import { DeleteThingShadowInput } from "./types/DeleteThingShadowInput";
import { DeleteThingShadowOutput } from "./types/DeleteThingShadowOutput";
import { GetThingShadowInput } from "./types/GetThingShadowInput";
import { GetThingShadowOutput } from "./types/GetThingShadowOutput";
import { InternalFailureException } from "./types/InternalFailureException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { MethodNotAllowedException } from "./types/MethodNotAllowedException";
import { PublishInput } from "./types/PublishInput";
import { PublishOutput } from "./types/PublishOutput";
import { RequestEntityTooLargeException } from "./types/RequestEntityTooLargeException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { ThrottlingException } from "./types/ThrottlingException";
import { UnauthorizedException } from "./types/UnauthorizedException";
import { UnsupportedDocumentEncodingException } from "./types/UnsupportedDocumentEncodingException";
import { UpdateThingShadowInput } from "./types/UpdateThingShadowInput";
import { UpdateThingShadowOutput } from "./types/UpdateThingShadowOutput";
import { DeleteThingShadowCommand } from "./commands/DeleteThingShadowCommand";
import { GetThingShadowCommand } from "./commands/GetThingShadowCommand";
import { PublishCommand } from "./commands/PublishCommand";
import { UpdateThingShadowCommand } from "./commands/UpdateThingShadowCommand";

export class IoTDataPlane extends IoTDataPlaneClient {
  /**
   * <p>Deletes the thing shadow for the specified thing.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the <i>AWS IoT Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {MethodNotAllowedException} <p>The specified combination of HTTP verb and URI is not supported.</p>
   *   - {UnsupportedDocumentEncodingException} <p>The document encoding is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteThingShadow(
    args: DeleteThingShadowInput
  ): Promise<DeleteThingShadowOutput>;
  public deleteThingShadow(
    args: DeleteThingShadowInput,
    cb: (err: any, data?: DeleteThingShadowOutput) => void
  ): void;
  public deleteThingShadow(
    args: DeleteThingShadowInput,
    cb?: (err: any, data?: DeleteThingShadowOutput) => void
  ): Promise<DeleteThingShadowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteThingShadowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the thing shadow for the specified thing.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the <i>AWS IoT Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {MethodNotAllowedException} <p>The specified combination of HTTP verb and URI is not supported.</p>
   *   - {UnsupportedDocumentEncodingException} <p>The document encoding is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getThingShadow(
    args: GetThingShadowInput
  ): Promise<GetThingShadowOutput>;
  public getThingShadow(
    args: GetThingShadowInput,
    cb: (err: any, data?: GetThingShadowOutput) => void
  ): void;
  public getThingShadow(
    args: GetThingShadowInput,
    cb?: (err: any, data?: GetThingShadowOutput) => void
  ): Promise<GetThingShadowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetThingShadowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Publishes state information.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/protocols.html#http">HTTP Protocol</a> in the <i>AWS IoT Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {MethodNotAllowedException} <p>The specified combination of HTTP verb and URI is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public publish(args: PublishInput): Promise<PublishOutput>;
  public publish(
    args: PublishInput,
    cb: (err: any, data?: PublishOutput) => void
  ): void;
  public publish(
    args: PublishInput,
    cb?: (err: any, data?: PublishOutput) => void
  ): Promise<PublishOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PublishCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the thing shadow for the specified thing.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the <i>AWS IoT Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConflictException} <p>The specified version does not match the version of the document.</p>
   *   - {RequestEntityTooLargeException} <p>The payload exceeds the maximum size allowed.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {InternalFailureException} <p>An unexpected error has occurred.</p>
   *   - {MethodNotAllowedException} <p>The specified combination of HTTP verb and URI is not supported.</p>
   *   - {UnsupportedDocumentEncodingException} <p>The document encoding is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateThingShadow(
    args: UpdateThingShadowInput
  ): Promise<UpdateThingShadowOutput>;
  public updateThingShadow(
    args: UpdateThingShadowInput,
    cb: (err: any, data?: UpdateThingShadowOutput) => void
  ): void;
  public updateThingShadow(
    args: UpdateThingShadowInput,
    cb?: (err: any, data?: UpdateThingShadowOutput) => void
  ): Promise<UpdateThingShadowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateThingShadowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
