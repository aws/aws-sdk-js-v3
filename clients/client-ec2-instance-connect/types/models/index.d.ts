import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Indicates that either your AWS credentials are invalid or you do not have access to the EC2 instance.</p>
 */
export interface AuthException extends __SmithyException, $MetadataBearer {
    name: "AuthException";
    $fault: "client";
    Message?: string;
}
export declare namespace AuthException {
    function isa(o: any): o is AuthException;
}
/**
 * <p>Indicates that the instance requested was not found in the given zone.  Check that you have provided a valid instance ID and the correct zone.</p>
 */
export interface EC2InstanceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "EC2InstanceNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace EC2InstanceNotFoundException {
    function isa(o: any): o is EC2InstanceNotFoundException;
}
/**
 * <p>Indicates that you provided bad input.  Ensure you have a valid instance ID, the correct zone, and a valid SSH public key.</p>
 */
export interface InvalidArgsException extends __SmithyException, $MetadataBearer {
    name: "InvalidArgsException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidArgsException {
    function isa(o: any): o is InvalidArgsException;
}
export interface SendSSHPublicKeyRequest {
    __type?: "SendSSHPublicKeyRequest";
    /**
     * <p>The availability zone the EC2 instance was launched in.</p>
     */
    AvailabilityZone: string | undefined;
    /**
     * <p>The EC2 instance you wish to publish the SSH key to.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The OS user on the EC2 instance whom the key may be used to authenticate as.</p>
     */
    InstanceOSUser: string | undefined;
    /**
     * <p>The public key to be published to the instance.  To use it after publication you must have the matching private key.</p>
     */
    SSHPublicKey: string | undefined;
}
export declare namespace SendSSHPublicKeyRequest {
    function isa(o: any): o is SendSSHPublicKeyRequest;
}
export interface SendSSHPublicKeyResponse {
    __type?: "SendSSHPublicKeyResponse";
    /**
     * <p>The request ID as logged by EC2 Connect.  Please provide this when contacting AWS Support.</p>
     */
    RequestId?: string;
    /**
     * <p>Indicates request success.</p>
     */
    Success?: boolean;
}
export declare namespace SendSSHPublicKeyResponse {
    function isa(o: any): o is SendSSHPublicKeyResponse;
}
/**
 * <p>Indicates that the service encountered an error.  Follow the message's instructions and try again.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
    name: "ServiceException";
    $fault: "server";
    Message?: string;
}
export declare namespace ServiceException {
    function isa(o: any): o is ServiceException;
}
/**
 * <p>Indicates you have been making requests too frequently and have been throttled.  Wait for a while and try again.  If higher call volume is warranted contact AWS Support.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    Message?: string;
}
export declare namespace ThrottlingException {
    function isa(o: any): o is ThrottlingException;
}
