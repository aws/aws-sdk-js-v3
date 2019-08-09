import { PIClient } from "./PIClient";
import { DescribeDimensionKeysInput } from "./types/DescribeDimensionKeysInput";
import { DescribeDimensionKeysOutput } from "./types/DescribeDimensionKeysOutput";
import { GetResourceMetricsInput } from "./types/GetResourceMetricsInput";
import { GetResourceMetricsOutput } from "./types/GetResourceMetricsOutput";
import { InternalServiceError } from "./types/InternalServiceError";
import { InvalidArgumentException } from "./types/InvalidArgumentException";
import { NotAuthorizedException } from "./types/NotAuthorizedException";
import { DescribeDimensionKeysCommand } from "./commands/DescribeDimensionKeysCommand";
import { GetResourceMetricsCommand } from "./commands/GetResourceMetricsCommand";

export class PI extends PIClient {
  /**
   * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgumentException} <p>One of the arguments provided is invalid for this request.</p>
   *   - {InternalServiceError} <p>The request failed due to an unknown error.</p>
   *   - {NotAuthorizedException} <p>The user is not authorized to perform this request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDimensionKeys(
    args: DescribeDimensionKeysInput
  ): Promise<DescribeDimensionKeysOutput>;
  public describeDimensionKeys(
    args: DescribeDimensionKeysInput,
    cb: (err: any, data?: DescribeDimensionKeysOutput) => void
  ): void;
  public describeDimensionKeys(
    args: DescribeDimensionKeysInput,
    cb?: (err: any, data?: DescribeDimensionKeysOutput) => void
  ): Promise<DescribeDimensionKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDimensionKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgumentException} <p>One of the arguments provided is invalid for this request.</p>
   *   - {InternalServiceError} <p>The request failed due to an unknown error.</p>
   *   - {NotAuthorizedException} <p>The user is not authorized to perform this request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResourceMetrics(
    args: GetResourceMetricsInput
  ): Promise<GetResourceMetricsOutput>;
  public getResourceMetrics(
    args: GetResourceMetricsInput,
    cb: (err: any, data?: GetResourceMetricsOutput) => void
  ): void;
  public getResourceMetrics(
    args: GetResourceMetricsInput,
    cb?: (err: any, data?: GetResourceMetricsOutput) => void
  ): Promise<GetResourceMetricsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourceMetricsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
