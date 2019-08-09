import { ApiGatewayManagementApiClient } from "./ApiGatewayManagementApiClient";
import { ForbiddenException } from "./types/ForbiddenException";
import { GoneException } from "./types/GoneException";
import { LimitExceededException } from "./types/LimitExceededException";
import { PayloadTooLargeException } from "./types/PayloadTooLargeException";
import { PostToConnectionInput } from "./types/PostToConnectionInput";
import { PostToConnectionOutput } from "./types/PostToConnectionOutput";
import { PostToConnectionCommand } from "./commands/PostToConnectionCommand";

export class ApiGatewayManagementApi extends ApiGatewayManagementApiClient {
  /**
   * <p>Sends the provided data to the specified connection.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {GoneException} <p>The connection with the provided id no longer exists.</p>
   *   - {LimitExceededException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {PayloadTooLargeException} <p>The data has exceeded the maximum size allowed.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to invoke this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public postToConnection(
    args: PostToConnectionInput
  ): Promise<PostToConnectionOutput>;
  public postToConnection(
    args: PostToConnectionInput,
    cb: (err: any, data?: PostToConnectionOutput) => void
  ): void;
  public postToConnection(
    args: PostToConnectionInput,
    cb?: (err: any, data?: PostToConnectionOutput) => void
  ): Promise<PostToConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PostToConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
