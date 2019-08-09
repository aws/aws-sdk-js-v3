import { MarketplaceEntitlementServiceClient } from "./MarketplaceEntitlementServiceClient";
import { GetEntitlementsInput } from "./types/GetEntitlementsInput";
import { GetEntitlementsOutput } from "./types/GetEntitlementsOutput";
import { InternalServiceErrorException } from "./types/InternalServiceErrorException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { ThrottlingException } from "./types/ThrottlingException";
import { GetEntitlementsCommand } from "./commands/GetEntitlementsCommand";

export class MarketplaceEntitlementService extends MarketplaceEntitlementServiceClient {
  /**
   * <p>GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more parameters in your request was invalid.</p>
   *   - {ThrottlingException} <p>The calls to the GetEntitlements API are throttled.</p>
   *   - {InternalServiceErrorException} <p>An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEntitlements(
    args: GetEntitlementsInput
  ): Promise<GetEntitlementsOutput>;
  public getEntitlements(
    args: GetEntitlementsInput,
    cb: (err: any, data?: GetEntitlementsOutput) => void
  ): void;
  public getEntitlements(
    args: GetEntitlementsInput,
    cb?: (err: any, data?: GetEntitlementsOutput) => void
  ): Promise<GetEntitlementsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEntitlementsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
