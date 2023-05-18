// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Transcribe offers three main types of batch transcription: <b>Standard</b>, <b>Medical</b>, and
 *                 <b>Call Analytics</b>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Standard transcriptions</b> are the most common
 *                     option. Refer to  for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Medical transcriptions</b> are tailored to
 *                     medical professionals and incorporate medical terms. A common use case for this
 *                     service is transcribing doctor-patient dialogue into after-visit notes. Refer to
 *                          for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Call Analytics transcriptions</b> are designed
 *                     for use with call center audio on two different channels; if you're looking for
 *                     insight into customer service calls, use this option. Refer to  for details.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./TranscribeClient";
export * from "./Transcribe";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { TranscribeServiceException } from "./models/TranscribeServiceException";
