import { ComprehendMedicalClient } from "./ComprehendMedicalClient";
import { DetectEntitiesInput } from "./types/DetectEntitiesInput";
import { DetectEntitiesOutput } from "./types/DetectEntitiesOutput";
import { DetectPHIInput } from "./types/DetectPHIInput";
import { DetectPHIOutput } from "./types/DetectPHIOutput";
import { InternalServerException } from "./types/InternalServerException";
import { InvalidEncodingException } from "./types/InvalidEncodingException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { TextSizeLimitExceededException } from "./types/TextSizeLimitExceededException";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { DetectEntitiesCommand } from "./commands/DetectEntitiesCommand";
import { DetectPHICommand } from "./commands/DetectPHICommand";

export class ComprehendMedical extends ComprehendMedicalClient {
  /**
   * <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p> An internal server error occurred. Retry your request. </p>
   *   - {ServiceUnavailableException} <p> The Comprehend Medical service is temporarily unavailable. Please wait and then retry your request. </p>
   *   - {TooManyRequestsException} <p> You have made too many requests within a short period of time. Wait for a short time and then try your request again. Contact customer support for more information about a service limit increase. </p>
   *   - {InvalidRequestException} <p> The request that you made is invalid. Check your request to determine why it's invalid and then retry the request.</p>
   *   - {InvalidEncodingException} <p> The input text was not in valid UTF-8 character encoding. Check your text then retry your request.</p>
   *   - {TextSizeLimitExceededException} <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or use a smaller document and then retry your request. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detectEntities(
    args: DetectEntitiesInput
  ): Promise<DetectEntitiesOutput>;
  public detectEntities(
    args: DetectEntitiesInput,
    cb: (err: any, data?: DetectEntitiesOutput) => void
  ): void;
  public detectEntities(
    args: DetectEntitiesInput,
    cb?: (err: any, data?: DetectEntitiesOutput) => void
  ): Promise<DetectEntitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetectEntitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Inspects the clinical text for personal health information (PHI) entities and entity category, location, and confidence score on that information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p> An internal server error occurred. Retry your request. </p>
   *   - {ServiceUnavailableException} <p> The Comprehend Medical service is temporarily unavailable. Please wait and then retry your request. </p>
   *   - {TooManyRequestsException} <p> You have made too many requests within a short period of time. Wait for a short time and then try your request again. Contact customer support for more information about a service limit increase. </p>
   *   - {InvalidRequestException} <p> The request that you made is invalid. Check your request to determine why it's invalid and then retry the request.</p>
   *   - {InvalidEncodingException} <p> The input text was not in valid UTF-8 character encoding. Check your text then retry your request.</p>
   *   - {TextSizeLimitExceededException} <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or use a smaller document and then retry your request. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detectPHI(args: DetectPHIInput): Promise<DetectPHIOutput>;
  public detectPHI(
    args: DetectPHIInput,
    cb: (err: any, data?: DetectPHIOutput) => void
  ): void;
  public detectPHI(
    args: DetectPHIInput,
    cb?: (err: any, data?: DetectPHIOutput) => void
  ): Promise<DetectPHIOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetectPHICommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
