// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Direct Connect links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable.
 *       One end of the cable is connected to your router, the other to an Direct Connect router. With this connection
 *       in place, you can create virtual interfaces directly to the Amazon Web Services Cloud (for example, to Amazon EC2
 *       and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A
 *       connection provides access to all Amazon Web Services Regions except the China (Beijing) and (China) Ningxia Regions.
 *       Amazon Web Services resources in the China Regions can only be accessed through locations associated with those Regions.</p>
 *
 * @packageDocumentation
 */
export * from "./DirectConnectClient";
export * from "./DirectConnect";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./models";

export { DirectConnectServiceException } from "./models/DirectConnectServiceException";
