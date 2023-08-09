// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>IoT data</fullname>
 *          <p>IoT data enables secure, bi-directional communication between Internet-connected things (such as sensors,
 *       actuators, embedded devices, or smart appliances) and the Amazon Web Services cloud. It implements a broker for applications and
 *       things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a
 *       persistent representation of your things and their state in the Amazon Web Services cloud.</p>
 *          <p>Find the endpoint address for actions in IoT data by running this CLI command:</p>
 *          <p>
 *             <code>aws iot describe-endpoint --endpoint-type iot:Data-ATS</code>
 *          </p>
 *          <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web ServicesSignature Version 4</a>
 *       to sign requests is: <i>iotdevicegateway</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./IoTDataPlaneClient";
export * from "./IoTDataPlane";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { IoTDataPlaneServiceException } from "./models/IoTDataPlaneServiceException";
